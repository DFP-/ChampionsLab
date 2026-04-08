#!/bin/bash
# Download missing sprites for new Pokémon
# Source: PokeAPI HOME sprites
BASE_URL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home"
SPRITE_DIR="public/sprites"

echo "Downloading base sprites..."
for id in 18 24 68 168 205 308 310 319 323 354 358 362 405 407 409 411 454 504 510 512 514 516 563 579 614 671 675 683 685 695 702 713 758 766 841 899 939 956; do
  if [ ! -f "${SPRITE_DIR}/${id}.png" ]; then
    echo "  Downloading ${id}.png..."
    curl -sL "${BASE_URL}/${id}.png" -o "${SPRITE_DIR}/${id}.png"
  fi
done

echo ""
echo "Downloading mega sprites..."
# Known PokeAPI mega form IDs
# Mega Pidgeot: 10073
# Mega Medicham: 10063
# Mega Manectric: 10065
# Mega Sharpedo: 10070
# Mega Camerupt: 10077
# Mega Banette: 10056
# Mega Glalie: 10074
# Mega Golurk: Champions exclusive (use base as placeholder)
# Mega Chimecho: Champions exclusive (use base as placeholder)

declare -A MEGA_FORMS
MEGA_FORMS[10018]=10073   # Mega Pidgeot
MEGA_FORMS[10308]=10063   # Mega Medicham
MEGA_FORMS[10319]=10070   # Mega Sharpedo
MEGA_FORMS[10323]=10077   # Mega Camerupt
MEGA_FORMS[10354]=10056   # Mega Banette
MEGA_FORMS[10362]=10074   # Mega Glalie

for sprite_id in "${!MEGA_FORMS[@]}"; do
  form_id=${MEGA_FORMS[$sprite_id]}
  if [ ! -f "${SPRITE_DIR}/oa-${sprite_id}.png" ]; then
    echo "  Downloading oa-${sprite_id}.png (formId: ${form_id})..."
    curl -sL "${BASE_URL}/${form_id}.png" -o "${SPRITE_DIR}/oa-${sprite_id}.png"
  fi
done

# Champions-exclusive megas — use base form as placeholder
for entry in "10358:358" "10623:623"; do
  sprite_id="${entry%%:*}"
  base_id="${entry##*:}"
  if [ ! -f "${SPRITE_DIR}/oa-${sprite_id}.png" ]; then
    echo "  Copying base sprite for oa-${sprite_id}.png (Champions-exclusive mega)..."
    cp "${SPRITE_DIR}/${base_id}.png" "${SPRITE_DIR}/oa-${sprite_id}.png" 2>/dev/null || \
    curl -sL "${BASE_URL}/${base_id}.png" -o "${SPRITE_DIR}/oa-${sprite_id}.png"
  fi
done

echo ""
echo "Verifying..."
missing=0
for id in 18 24 68 168 205 308 310 319 323 354 358 362 405 407 409 411 454 504 510 512 514 516 563 579 614 671 675 683 685 695 702 713 758 766 841 899 939 956; do
  if [ ! -f "${SPRITE_DIR}/${id}.png" ] || [ ! -s "${SPRITE_DIR}/${id}.png" ]; then
    echo "  ⚠️  Missing: ${id}.png"
    missing=$((missing + 1))
  fi
done
for id in 10018 10308 10319 10323 10354 10358 10362 10623; do
  if [ ! -f "${SPRITE_DIR}/oa-${id}.png" ] || [ ! -s "${SPRITE_DIR}/oa-${id}.png" ]; then
    echo "  ⚠️  Missing mega: oa-${id}.png"
    missing=$((missing + 1))
  fi
done

if [ $missing -eq 0 ]; then
  echo "✅ All sprites downloaded!"
else
  echo "⚠️  ${missing} sprites still missing"
fi
