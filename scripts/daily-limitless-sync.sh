#!/usr/bin/env bash
# daily-limitless-sync.sh
#
# Runs the Limitless tournament sync, commits changes, and pushes to GitHub.
# The actual build and deploy must be done locally on a Mac and rsync'd to the VPS.
# See DEPLOYMENT.md for the full deploy workflow.
#
# Designed for cron on the VPS:  0 6 * * * /srv/championslab/scripts/daily-limitless-sync.sh >> /srv/championslab/logs/limitless-sync.log 2>&1

set -euo pipefail

PROJECT_DIR="/srv/championslab"
LOG_PREFIX="[$(date '+%Y-%m-%d %H:%M:%S')]"

cd "$PROJECT_DIR"

echo "$LOG_PREFIX Starting Limitless tournament sync..."

# Run the sync script
npx tsx scripts/sync-limitless-tournaments.ts 2>&1
SYNC_EXIT=$?

if [ $SYNC_EXIT -ne 0 ]; then
  echo "$LOG_PREFIX ✗ Sync failed with exit code $SYNC_EXIT"
  exit 1
fi

# Check if simulation-data.ts actually changed
if git diff --quiet src/lib/simulation-data.ts 2>/dev/null; then
  echo "$LOG_PREFIX No changes in simulation-data.ts — skipping commit."
  exit 0
fi

echo "$LOG_PREFIX Changes detected — committing and pushing..."

# Commit and push so the changes can be built locally and deployed
git add src/lib/simulation-data.ts scripts/limitless-cache.json
git commit -m "chore: sync tournament data from Limitless ($(date '+%Y-%m-%d'))" 2>&1 || true
git push origin main 2>&1 || echo "$LOG_PREFIX ⚠ Git push failed — manual push required."

echo "$LOG_PREFIX ✅ Tournament data synced and pushed."
echo "$LOG_PREFIX ⚠ REMINDER: Build locally (npm run build) and rsync .next/ to the VPS to deploy."
echo "$LOG_PREFIX    See DEPLOYMENT.md for the full deploy workflow."
