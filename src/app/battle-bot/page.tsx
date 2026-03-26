"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Swords, Play, BarChart3, Target, TrendingUp, AlertTriangle,
  Zap, Loader2, Trophy, Shield, ChevronRight,
} from "lucide-react";
import { POKEMON_SEED, STAT_PRESETS } from "@/lib/pokemon-data";
import { ChampionsPokemon, TYPE_COLORS, BattleResult } from "@/lib/types";
import { cn } from "@/lib/utils";

// Mock meta teams for simulation
const META_TEAMS = [
  { name: "Sun Offense", pokemon: ["Charizard", "Torkoal", "Venusaur", "Incineroar", "Rillaboom", "Flutter Mane"] },
  { name: "Sand Balance", pokemon: ["Tyranitar", "Garchomp", "Metagross", "Togekiss", "Amoonguss", "Urshifu-Rapid-Strike"] },
  { name: "Trick Room", pokemon: ["Torkoal", "Metagross", "Amoonguss", "Incineroar", "Grimmsnarl", "Gengar"] },
  { name: "Hyper Offense", pokemon: ["Flutter Mane", "Garchomp", "Rillaboom", "Landorus-Therian", "Urshifu-Rapid-Strike", "Charizard"] },
  { name: "Bulky Screens", pokemon: ["Grimmsnarl", "Dragonite", "Meganium", "Incineroar", "Togekiss", "Feraligatr"] },
];

function simulateBattle(): BattleResult {
  // Monte Carlo-style mock simulation
  const wins = Math.floor(Math.random() * 400 + 300);
  const totalGames = 1000;
  return {
    wins,
    losses: totalGames - wins,
    totalGames,
    winRate: Math.round((wins / totalGames) * 1000) / 10,
    commonWeaknesses: [
      "Ice-type coverage from Flutter Mane",
      "Fake Out pressure from Incineroar leads",
      "Trick Room reversal from Metagross teams",
      "Speed control — lacks Tailwind support",
    ].slice(0, Math.floor(Math.random() * 2) + 2),
    bestLeads: ([
      ["Incineroar", "Flutter Mane"],
      ["Rillaboom", "Garchomp"],
      ["Togekiss", "Garchomp"],
    ] as [string, string][]).slice(0, Math.floor(Math.random() * 2) + 1),
    strategyTips: [
      "Lead with Fake Out + fast attacker for early pressure",
      "Preserve your Mega Evolution for mid-game sweeping",
      "Watch for Trick Room setters — carry Taunt or disruption",
      "Use Protect aggressively to scout opponent's moves",
    ].slice(0, Math.floor(Math.random() * 2) + 2),
    matchupBreakdown: META_TEAMS.map((t) => ({
      opponent: t.name,
      winRate: Math.round(Math.random() * 40 + 30),
    })),
  };
}

export default function BattleBotPage() {
  const [selectedPokemon, setSelectedPokemon] = useState<ChampionsPokemon[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [result, setResult] = useState<BattleResult | null>(null);
  const [iterations, setIterations] = useState(1000);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const addPokemon = (pokemon: ChampionsPokemon) => {
    if (selectedPokemon.length < 6 && !selectedPokemon.find((p) => p.id === pokemon.id)) {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    }
  };

  const removePokemon = (id: number) => {
    setSelectedPokemon(selectedPokemon.filter((p) => p.id !== id));
  };

  const runSimulation = async () => {
    setIsSimulating(true);
    setResult(null);
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2500));
    const res = simulateBattle();
    setResult(res);
    setIsSimulating(false);
  };

  const filtered = POKEMON_SEED.filter(
    (p) =>
      !selectedPokemon.find((s) => s.id === p.id) &&
      (searchQuery === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl sm:text-4xl font-bold">
          <span className="bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
            Team Battle Bot
          </span>
        </h1>
        <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
          Run Monte Carlo simulations against the meta. Upload your team, simulate thousands of battles, and discover your strengths and weaknesses.
        </p>
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="px-3 py-1 text-[10px] font-bold rounded-lg bg-emerald-100 text-emerald-700 border border-emerald-300">
            OFFLINE ENGINE
          </span>
          <span className="px-3 py-1 text-[10px] font-bold rounded-lg bg-blue-100 text-blue-700 border border-blue-300">
            CHAMPIONS RULES
          </span>
          <span className="px-3 py-1 text-[10px] font-bold rounded-lg bg-violet-100 text-violet-700 border border-violet-300">
            DOUBLES FORMAT
          </span>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Team Input */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {/* Selected Team */}
          <div className="glass rounded-2xl p-6 border border-gray-200/60">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
              <Swords className="w-4 h-4" />
              Your Team ({selectedPokemon.length}/6)
            </h3>

            <div className="grid grid-cols-3 gap-3 mb-4">
              {Array.from({ length: 6 }, (_, i) => {
                const mon = selectedPokemon[i];
                return (
                  <motion.div
                    key={i}
                    layout
                    className={cn(
                      "rounded-xl p-3 aspect-square flex flex-col items-center justify-center transition-all",
                      mon
                        ? "glass border border-gray-200"
                        : "border border-dashed border-gray-300 cursor-pointer hover:border-violet-400"
                    )}
                    onClick={() => !mon && setPickerOpen(true)}
                  >
                    {mon ? (
                      <>
                        <button
                          onClick={(e) => { e.stopPropagation(); removePokemon(mon.id); }}
                          className="self-end -mt-1 -mr-1 p-0.5 rounded hover:bg-red-100"
                        >
                          <span className="text-xs text-muted-foreground hover:text-red-600">✕</span>
                        </button>
                        <Image
                          src={mon.sprite}
                          alt={mon.name}
                          width={48}
                          height={48}
                          unoptimized
                        />
                        <span className="text-[10px] font-medium mt-1 truncate w-full text-center">{mon.name}</span>
                      </>
                    ) : (
                      <span className="text-2xl text-gray-300">+</span>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Add from roster button */}
            {selectedPokemon.length < 6 && (
              <button
                onClick={() => setPickerOpen(true)}
                className="w-full py-2.5 rounded-xl glass glass-hover text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-2 transition-colors"
              >
                Add Pokémon
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sim Settings */}
          <div className="glass rounded-2xl p-6 border border-gray-200/60">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Simulation Settings
            </h3>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-muted-foreground block mb-1.5">Iterations</label>
                <select
                  value={iterations}
                  onChange={(e) => setIterations(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl glass border border-gray-200 text-sm bg-transparent focus:outline-none focus:border-violet-500/50"
                >
                  <option value={100}>100 battles (fast)</option>
                  <option value={500}>500 battles</option>
                  <option value={1000}>1,000 battles (recommended)</option>
                  <option value={5000}>5,000 battles (thorough)</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-muted-foreground block mb-1.5">Opponent Pool</label>
                <select className="w-full px-4 py-2.5 rounded-xl glass border border-gray-200 text-sm bg-transparent focus:outline-none focus:border-violet-500/50">
                  <option value="meta">Current Meta Teams</option>
                  <option value="tournament">Tournament Top 8</option>
                  <option value="random">Random Teams</option>
                  <option value="all">All (Mixed)</option>
                </select>
              </div>
            </div>

            {/* Run button */}
            <button
              onClick={runSimulation}
              disabled={selectedPokemon.length < 6 || isSimulating}
              className={cn(
                "w-full mt-6 py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all",
                selectedPokemon.length >= 6 && !isSimulating
                  ? "bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 shadow-lg shadow-red-500/20"
                  : "bg-gray-100 text-muted-foreground cursor-not-allowed"
              )}
            >
              {isSimulating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Simulating {iterations.toLocaleString()} battles...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Run Simulation
                </>
              )}
            </button>

            {selectedPokemon.length < 6 && (
              <p className="text-[11px] text-muted-foreground text-center mt-2">
                Select 6 Pokémon to start
              </p>
            )}
          </div>
        </motion.div>

        {/* Right: Results */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {/* Simulation Animation */}
          {isSimulating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass rounded-2xl p-8 border border-gray-200/60 text-center"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-red-300"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-2 rounded-full border-2 border-orange-300"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                  <Swords className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Running simulations...
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                Testing against meta teams, analyzing matchups
              </p>
            </motion.div>
          )}

          {/* Results */}
          <AnimatePresence>
            {result && !isSimulating && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Win Rate */}
                <div className="glass rounded-2xl p-6 border border-gray-200/60">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >
                      <p className="text-6xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                        {result.winRate}%
                      </p>
                    </motion.div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Win Rate across {result.totalGames.toLocaleString()} simulated battles
                    </p>
                    <div className="flex justify-center gap-6 mt-4">
                      <div>
                        <p className="text-xl font-bold text-green-600">{result.wins}</p>
                        <p className="text-[10px] text-muted-foreground uppercase">Wins</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-red-500">{result.losses}</p>
                        <p className="text-[10px] text-muted-foreground uppercase">Losses</p>
                      </div>
                    </div>
                  </div>

                  {/* Win rate bar */}
                  <div className="mt-4 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${result.winRate}%` }}
                      transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Matchup Breakdown */}
                <div className="glass rounded-2xl p-6 border border-gray-200/60">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Matchup Breakdown
                  </h3>
                  <div className="space-y-3">
                    {result.matchupBreakdown.map((m, i) => (
                      <motion.div
                        key={m.opponent}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <span className="text-xs text-muted-foreground w-28 truncate">{m.opponent}</span>
                        <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            className={cn(
                              "h-full rounded-full",
                              m.winRate >= 50 ? "bg-green-500" : "bg-red-500"
                            )}
                            initial={{ width: 0 }}
                            animate={{ width: `${m.winRate}%` }}
                            transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                          />
                        </div>
                        <span className={cn(
                          "text-xs font-mono w-10 text-right",
                          m.winRate >= 50 ? "text-green-600" : "text-red-500"
                        )}>
                          {m.winRate}%
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Best Leads */}
                <div className="glass rounded-2xl p-6 border border-gray-200/60">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    Best Leads
                  </h3>
                  <div className="space-y-2">
                    {result.bestLeads.map((lead, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-gray-50">
                        <span className="text-xs text-green-600 font-bold">#{i + 1}</span>
                        <span className="text-sm">{lead[0]}</span>
                        <span className="text-xs text-muted-foreground">+</span>
                        <span className="text-sm">{lead[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weaknesses & Tips */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="glass rounded-2xl p-6 border border-gray-200/60">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      Weaknesses
                    </h3>
                    <ul className="space-y-2">
                      {result.commonWeaknesses.map((w, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-amber-500 mt-0.5">•</span>
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass rounded-2xl p-6 border border-gray-200/60">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-600" />
                      Strategy Tips
                    </h3>
                    <ul className="space-y-2">
                      {result.strategyTips.map((t, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-cyan-600 mt-0.5">•</span>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty state */}
          {!result && !isSimulating && (
            <div className="glass rounded-2xl p-12 border border-gray-200/60 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-muted-foreground/30" />
              </div>
              <p className="text-muted-foreground text-sm mb-1">No results yet</p>
              <p className="text-xs text-muted-foreground/60">Build your team and run a simulation to see battle analytics</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Pokémon Picker Modal */}
      <AnimatePresence>
        {pickerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
              onClick={() => setPickerOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="fixed inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 sm:w-full sm:max-w-lg sm:max-h-[70vh] glass rounded-2xl border border-gray-200/60 flex flex-col overflow-hidden"
            >
              <div className="p-4 border-b border-gray-200/60">
                <input
                  type="text"
                  placeholder="Search Pokémon..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl glass border border-gray-200 focus:border-violet-500/50 focus:outline-none text-sm"
                  autoFocus
                />
              </div>
              <div className="flex-1 overflow-y-auto p-3">
                <div className="grid grid-cols-2 gap-2">
                  {filtered.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => { addPokemon(p); if (selectedPokemon.length >= 5) setPickerOpen(false); }}
                      className="flex items-center gap-2 p-3 rounded-xl glass glass-hover text-left"
                    >
                      <Image src={p.sprite} alt={p.name} width={36} height={36} unoptimized />
                      <div>
                        <p className="text-xs font-medium">{p.name}</p>
                        <div className="flex gap-1 mt-0.5">
                          {p.types.map((t) => (
                            <span key={t} className="w-2 h-2 rounded-full" style={{ backgroundColor: TYPE_COLORS[t] }} />
                          ))}
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
    </div>
  );
}
