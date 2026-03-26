"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import Image from "next/image";
import {
  Plus, X, Download, Upload, Copy, Trash2, Shield, Zap,
  ChevronDown, Check, AlertTriangle, Sparkles,
} from "lucide-react";
import { POKEMON_SEED, STAT_PRESETS } from "@/lib/pokemon-data";
import {
  ChampionsPokemon, TeamSlot, PokemonType, TYPE_COLORS, StatPoints,
} from "@/lib/types";
import { PokemonDetailModal } from "@/components/pokemon-detail-modal";
import { cn } from "@/lib/utils";

const EMPTY_STAT_POINTS: StatPoints = { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 };
const MAX_TOTAL_POINTS = 64;
const MAX_PER_STAT = 32;

function createEmptySlot(): TeamSlot {
  return { pokemon: null, moves: [], statPoints: { ...EMPTY_STAT_POINTS } };
}

// Type effectiveness for coverage chart
const TYPE_CHART: Record<PokemonType, Record<string, number>> = {
  normal: { rock: 0.5, ghost: 0, steel: 0.5 },
  fire: { fire: 0.5, water: 0.5, grass: 2, ice: 2, bug: 2, rock: 0.5, dragon: 0.5, steel: 2 },
  water: { fire: 2, water: 0.5, grass: 0.5, ground: 2, rock: 2, dragon: 0.5 },
  electric: { water: 2, electric: 0.5, grass: 0.5, ground: 0, flying: 2, dragon: 0.5 },
  grass: { fire: 0.5, water: 2, grass: 0.5, poison: 0.5, ground: 2, flying: 0.5, bug: 0.5, rock: 2, dragon: 0.5, steel: 0.5 },
  ice: { fire: 0.5, water: 0.5, grass: 2, ice: 0.5, ground: 2, flying: 2, dragon: 2, steel: 0.5 },
  fighting: { normal: 2, ice: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, rock: 2, ghost: 0, dark: 2, steel: 2, fairy: 0.5 },
  poison: { grass: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0, fairy: 2 },
  ground: { fire: 2, electric: 2, grass: 0.5, poison: 2, flying: 0, bug: 0.5, rock: 2, steel: 2 },
  flying: { electric: 0.5, grass: 2, fighting: 2, bug: 2, rock: 0.5, steel: 0.5 },
  psychic: { fighting: 2, poison: 2, psychic: 0.5, dark: 0, steel: 0.5 },
  bug: { fire: 0.5, grass: 2, fighting: 0.5, poison: 0.5, flying: 0.5, psychic: 2, ghost: 0.5, dark: 2, steel: 0.5, fairy: 0.5 },
  rock: { fire: 2, ice: 2, fighting: 0.5, ground: 0.5, flying: 2, bug: 2, steel: 0.5 },
  ghost: { normal: 0, psychic: 2, ghost: 2, dark: 0.5 },
  dragon: { dragon: 2, steel: 0.5, fairy: 0 },
  dark: { fighting: 0.5, psychic: 2, ghost: 2, dark: 0.5, fairy: 0.5 },
  steel: { fire: 0.5, water: 0.5, electric: 0.5, ice: 2, rock: 2, steel: 0.5, fairy: 2 },
  fairy: { fire: 0.5, fighting: 2, poison: 0.5, dragon: 2, dark: 2, steel: 0.5 },
};

const ALL_TYPES: PokemonType[] = [
  "normal", "fire", "water", "electric", "grass", "ice",
  "fighting", "poison", "ground", "flying", "psychic", "bug",
  "rock", "ghost", "dragon", "dark", "steel", "fairy",
];

export default function TeamBuilderPage() {
  const [slots, setSlots] = useState<TeamSlot[]>(
    Array.from({ length: 6 }, createEmptySlot)
  );
  const [teamName, setTeamName] = useState("My Team");
  const [activeSlot, setActiveSlot] = useState<number | null>(null);
  const [showPokemonPicker, setShowPokemonPicker] = useState(false);
  const [pickerSearch, setPickerSearch] = useState("");
  const [showExport, setShowExport] = useState(false);
  const [selectedPokemonDetail, setSelectedPokemonDetail] = useState<ChampionsPokemon | null>(null);

  const filledSlots = slots.filter((s) => s.pokemon !== null);
  const usedPokemonIds = filledSlots.map((s) => s.pokemon!.id);

  // Validation
  const validationErrors: string[] = [];
  const duplicateCheck = new Set<number>();
  slots.forEach((s) => {
    if (s.pokemon) {
      if (duplicateCheck.has(s.pokemon.id)) {
        validationErrors.push(`Duplicate: ${s.pokemon.name}`);
      }
      duplicateCheck.add(s.pokemon.id);
    }
  });
  const megaCount = slots.filter((s) => s.pokemon?.hasMega && s.ability?.includes("Mega")).length;
  if (megaCount > 1) validationErrors.push("Only 1 Mega Evolution allowed per team");

  const addPokemon = (pokemon: ChampionsPokemon) => {
    if (activeSlot !== null) {
      const newSlots = [...slots];
      newSlots[activeSlot] = {
        pokemon,
        ability: pokemon.abilities[0]?.name,
        moves: pokemon.moves.slice(0, 4).map((m) => m.name),
        statPoints: { ...EMPTY_STAT_POINTS },
      };
      setSlots(newSlots);
      setShowPokemonPicker(false);
      setActiveSlot(null);
    }
  };

  const removeSlot = (index: number) => {
    const newSlots = [...slots];
    newSlots[index] = createEmptySlot();
    setSlots(newSlots);
  };

  const openPicker = (index: number) => {
    setActiveSlot(index);
    setPickerSearch("");
    setShowPokemonPicker(true);
  };

  // Coverage calculation
  const teamTypes = filledSlots.flatMap((s) => s.pokemon!.types);
  const offensiveCoverage: Record<string, number> = {};
  ALL_TYPES.forEach((defType) => {
    let best = 1;
    filledSlots.forEach((s) => {
      s.pokemon!.moves.forEach((move) => {
        const eff = TYPE_CHART[move.type]?.[defType] ?? 1;
        if (eff > best) best = eff;
      });
    });
    offensiveCoverage[defType] = best;
  });

  // Export to Pokepaste format
  const exportPokepaste = () => {
    return filledSlots
      .map((s) => {
        const p = s.pokemon!;
        const lines = [p.name];
        if (s.ability) lines.push(`Ability: ${s.ability}`);
        if (s.teraType) lines.push(`Tera Type: ${s.teraType}`);
        lines.push(`Level: 50`);
        lines.push(`IVs: 31 HP / 31 Atk / 31 Def / 31 SpA / 31 SpD / 31 Spe`);
        const sp = s.statPoints;
        lines.push(`Stat Points: ${sp.hp} HP / ${sp.attack} Atk / ${sp.defense} Def / ${sp.spAtk} SpA / ${sp.spDef} SpD / ${sp.speed} Spe`);
        s.moves.forEach((m) => lines.push(`- ${m}`));
        return lines.join("\n");
      })
      .join("\n\n");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exportPokepaste());
  };

  const filteredPicker = POKEMON_SEED.filter(
    (p) =>
      !usedPokemonIds.includes(p.id) &&
      (pickerSearch === "" ||
        p.name.toLowerCase().includes(pickerSearch.toLowerCase()) ||
        p.types.some((t) => t.includes(pickerSearch.toLowerCase())))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                Team Builder
              </span>
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Build your perfect team of 6. Drag to reorder, click to customize.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setShowExport(true)}
              className="px-4 py-2 text-sm rounded-xl glass glass-hover flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
            <button
              onClick={() => setSlots(Array.from({ length: 6 }, createEmptySlot))}
              className="px-4 py-2 text-sm rounded-xl glass glass-hover flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Clear
            </button>
          </div>
        </div>

        {/* Team name */}
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="mt-4 px-4 py-2 rounded-xl glass border border-gray-200 focus:border-violet-500/50 focus:outline-none text-lg font-semibold bg-transparent w-full max-w-md"
        />
      </motion.div>

      {/* Validation errors */}
      {validationErrors.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
        >
          {validationErrors.map((err, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-red-400">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              {err}
            </div>
          ))}
        </motion.div>
      )}

      {/* Team Slots */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
        {slots.map((slot, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className={cn(
              "relative rounded-2xl overflow-hidden border transition-all duration-300 min-h-[220px]",
              slot.pokemon
                ? "glass border-gray-200 hover:border-gray-300"
                : "border-dashed border-gray-300 hover:border-violet-400 cursor-pointer"
            )}
            onClick={() => !slot.pokemon && openPicker(i)}
          >
            {slot.pokemon ? (
              <>
                {/* Remove button */}
                <button
                  onClick={(e) => { e.stopPropagation(); removeSlot(i); }}
                  className="absolute top-2 right-2 z-20 p-1 rounded-lg bg-white/80 hover:bg-red-100 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>

                {/* Slot number */}
                <div className="absolute top-2 left-2 z-20 w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-muted-foreground">{i + 1}</span>
                </div>

                {/* Sprite */}
                <div
                  className="h-28 flex items-center justify-center cursor-pointer"
                  style={{
                    background: `radial-gradient(ellipse, ${TYPE_COLORS[slot.pokemon.types[0]]}15 0%, transparent 70%)`,
                  }}
                  onClick={(e) => { e.stopPropagation(); setSelectedPokemonDetail(slot.pokemon); }}
                >
                  <Image
                    src={slot.pokemon.officialArt}
                    alt={slot.pokemon.name}
                    width={90}
                    height={90}
                    className="drop-shadow-lg object-contain"
                    unoptimized
                  />
                </div>

                {/* Info */}
                <div className="p-3 space-y-2">
                  <h4 className="text-sm font-semibold truncate">{slot.pokemon.name}</h4>
                  <div className="flex gap-1">
                    {slot.pokemon.types.map((type) => (
                      <span
                        key={type}
                        className="px-1.5 py-0.5 text-[9px] font-bold uppercase rounded text-white/80"
                        style={{ backgroundColor: `${TYPE_COLORS[type]}AA` }}
                      >
                        {type}
                      </span>
                    ))}
                  </div>

                  {/* Quick move preview */}
                  <div className="space-y-0.5">
                    {slot.moves.slice(0, 4).map((m) => (
                      <div key={m} className="text-[10px] text-muted-foreground truncate flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full gap-2 py-8">
                <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <Plus className="w-6 h-6 text-muted-foreground" />
                </div>
                <span className="text-xs text-muted-foreground">Slot {i + 1}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Type Coverage Chart */}
      {filledSlots.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-6 border border-gray-200/60 mb-10"
        >
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Offensive Type Coverage
          </h3>
          <div className="grid grid-cols-6 sm:grid-cols-9 lg:grid-cols-18 gap-2">
            {ALL_TYPES.map((type) => {
              const coverage = offensiveCoverage[type] ?? 1;
              return (
                <div key={type} className="text-center space-y-1">
                  <span
                    className="block w-full py-1 text-[9px] font-bold uppercase rounded text-white/90"
                    style={{ backgroundColor: `${TYPE_COLORS[type]}AA` }}
                  >
                    {type.slice(0, 3)}
                  </span>
                  <span
                    className={cn(
                      "block text-[11px] font-bold",
                      coverage >= 2 && "text-green-600",
                      coverage === 1 && "text-muted-foreground",
                      coverage < 1 && coverage > 0 && "text-amber-600",
                      coverage === 0 && "text-red-600"
                    )}
                  >
                    {coverage === 0 ? "✕" : `${coverage}×`}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Team type summary */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="text-xs text-muted-foreground mb-2">Team Types</h4>
            <div className="flex flex-wrap gap-1.5">
              {[...new Set(teamTypes)].map((type) => (
                <span
                  key={type}
                  className="px-2 py-0.5 text-[10px] font-bold uppercase rounded text-white/90"
                  style={{ backgroundColor: `${TYPE_COLORS[type]}AA` }}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Export Modal */}
      <AnimatePresence>
        {showExport && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
              onClick={() => setShowExport(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 sm:w-full sm:max-w-lg glass rounded-2xl border border-gray-200/60 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Export Team</h3>
                <button onClick={() => setShowExport(false)} className="p-1 rounded-lg hover:bg-gray-100">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <textarea
                readOnly
                value={exportPokepaste()}
                className="w-full h-64 rounded-xl p-4 bg-gray-50 border border-gray-200 text-xs font-mono resize-none focus:outline-none"
              />
              <div className="flex gap-2 mt-4">
                <button
                  onClick={copyToClipboard}
                  className="flex-1 py-2.5 rounded-xl bg-violet-100 text-violet-700 border border-violet-300 text-sm font-medium flex items-center justify-center gap-2 hover:bg-violet-200 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  Copy Pokepaste
                </button>
                <button
                  onClick={() => {
                    const blob = new Blob([JSON.stringify({ name: teamName, slots: slots.filter(s => s.pokemon) }, null, 2)], { type: "application/json" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `${teamName.replace(/\s+/g, "_")}.json`;
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                  className="flex-1 py-2.5 rounded-xl glass glass-hover text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download JSON
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Pokémon Picker Modal */}
      <AnimatePresence>
        {showPokemonPicker && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
              onClick={() => setShowPokemonPicker(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 sm:w-full sm:max-w-2xl sm:max-h-[80vh] glass rounded-2xl border border-gray-200/60 flex flex-col overflow-hidden"
            >
              {/* Picker Header */}
              <div className="p-4 border-b border-gray-200/60">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Choose Pokémon</h3>
                  <button onClick={() => setShowPokemonPicker(false)} className="p-1 rounded-lg hover:bg-gray-100">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  value={pickerSearch}
                  onChange={(e) => setPickerSearch(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl glass border border-gray-200 focus:border-violet-500/50 focus:outline-none text-sm"
                  autoFocus
                />
              </div>

              {/* Picker Grid */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {filteredPicker.map((pokemon) => (
                    <button
                      key={pokemon.id}
                      onClick={() => addPokemon(pokemon)}
                      className="glass glass-hover rounded-xl p-3 text-left transition-all hover:border-violet-300 border border-transparent"
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          src={pokemon.sprite}
                          alt={pokemon.name}
                          width={40}
                          height={40}
                          className="rounded-lg"
                          unoptimized
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-medium truncate">{pokemon.name}</p>
                          <div className="flex gap-1 mt-0.5">
                            {pokemon.types.map((t) => (
                              <span
                                key={t}
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: TYPE_COLORS[t] }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Pokémon Detail */}
      <PokemonDetailModal
        pokemon={selectedPokemonDetail}
        onClose={() => setSelectedPokemonDetail(null)}
      />
    </div>
  );
}
