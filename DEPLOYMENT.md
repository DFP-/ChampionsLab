# 🚀 Champions Lab Deployment Guide

> **CRITICAL — READ THIS FIRST:**  
> **NEVER** build on the VPS. The VPS has only ~750MB free RAM and runs multiple production apps. Building there will cause an Out-Of-Memory (OOM) kill and may crash other services.  
> **ALWAYS** build locally on your Mac, then rsync the `.next/` folder to the VPS.

---

## 📋 Deployment Checklist

Before every deploy, run through this checklist:

- [ ] All changes are committed and pushed to GitHub (`git status` should be clean)
- [ ] `src/components/last-updated.tsx` has a new dated entry if the changes are user-facing
- [ ] Local dev server smoke-test passes (`npm run dev` → `curl http://localhost:3000` → HTTP 200)
- [ ] Local production build passes (`npm run build` → no errors)
- [ ] VPS credential files exist: `~/Downloads/vps.txt` (password) and `~/Downloads/vpsaddress.txt` (IP)

---

## 🛠 Step-by-Step Deployment

### Step 1 — Build Locally

Run the production build on **your Mac** (NOT the VPS):

```bash
npm run build
```

Expected output: `Compiled successfully`, all 16 static pages generated, no errors.

### Step 2 — Commit & Push

If you haven't already:

```bash
git add -A
git commit -m "Describe your changes"
git push
```

### Step 3 — Upload Build to VPS via Rsync

Transfer the `.next/` folder to the VPS. **This is the deploy.**

```bash
VPS_PASS=$(cat ~/Downloads/vps.txt)
VPS_IP=$(cat ~/Downloads/vpsaddress.txt)
sshpass -p "$VPS_PASS" rsync -avz --delete --exclude='*.map' \
  /Volumes/SSD-M2/Home/andrefernandes/Documents/ChampionsLab/.next/ \
  andre@"$VPS_IP":/srv/championslab/.next/
```

This uploads ~300MB and takes ~15 seconds on a good connection.

> **Why rsync?** It's fast (incremental), preserves permissions, and the `--delete` flag removes old build files so nothing stale lingers.

### Step 4 — Restart the Service

SSH into the VPS and restart the systemd service:

```bash
VPS_PASS=$(cat ~/Downloads/vps.txt)
VPS_IP=$(cat ~/Downloads/vpsaddress.txt)
sshpass -p "$VPS_PASS" ssh -o StrictHostKeyChecking=no andre@"$VPS_IP" \
  "printf '%s\n' '$VPS_PASS' | sudo -S systemctl restart championslab"
```

### Step 5 — Verify the Deploy

Check the service is running:

```bash
VPS_PASS=$(cat ~/Downloads/vps.txt)
VPS_IP=$(cat ~/Downloads/vpsaddress.txt)
sshpass -p "$VPS_PASS" ssh -o StrictHostKeyChecking=no andre@"$VPS_IP" \
  "printf '%s\n' '$VPS_PASS' | sudo -S systemctl status championslab --no-pager"
```

You should see:
- `Active: active (running)`
- `▲ Next.js 16.2.1`
- `✓ Ready in XXXms`

Then open the live site: https://championslab.xyz

---

## 🔒 Security Notes

- **NEVER** commit `vps.txt` or `vpsaddress.txt` to the repo. They are in `~/Downloads/` and ignored by `.gitignore`.
- **NEVER** paste the VPS password or IP into chat logs, GitHub issues, or code comments.
- The VPS credentials are read from local files at deploy time. No hardcoded secrets anywhere in the codebase.

---

## ❌ What NOT To Do

### ❌ Do NOT build on the VPS

The old scripts (`scripts/post-sim-deploy.sh` and `scripts/watch-and-deploy.sh`) contain a VPS build step. **This does not work.** The VPS has 3.7GB total RAM with ~750MB free. Next.js compilation gets OOM-killed (`exit code 137`).

If you see this error, you tried to build on the VPS:

```
▲ Next.js 16.2.1
Creating an optimized production build ...
Killed
```

**Fix:** Build locally, rsync, restart.

### ❌ Do NOT stop other services on the VPS

The VPS runs multiple production apps. Stopping `championslab.service` is fine — stopping other services is not.

### ❌ Do NOT use `git pull` + build on VPS as a deploy method

This was the old workflow and it fails for the same OOM reason. The source code on the VPS can be out of sync with the build — that's okay. Only the `.next/` folder matters for serving.

---

## 🔧 Troubleshooting

### Rsync fails with permission denied
- Make sure the VPS user `andre` has write access to `/srv/championslab/.next/`
- Check: `sshpass -p "$VPS_PASS" ssh andre@"$VPS_IP" "ls -la /srv/championslab/"`

### Service restart fails with "sudo: a terminal is required"
- Use `printf '%s\n' '$VPS_PASS' | sudo -S ...` instead of `echo`
- The `-S` flag tells sudo to read the password from stdin

### Site shows old version after deploy
- Clear Cloudflare/browser cache
- Check that rsync uploaded to the correct path (`/srv/championslab/.next/`)
- Verify the service restarted: `systemctl status championslab`

### Local build fails
- Make sure you're on Node 18+ (`node -v`)
- Delete `.next/` and `node_modules/.cache/` and retry
- Check for TypeScript errors: the build skips type validation but runtime errors will still crash

---

## 📁 File Locations

| File | Purpose |
|:---|:---|
| `~/Downloads/vps.txt` | VPS password (13 chars) |
| `~/Downloads/vpsaddress.txt` | VPS IP address (14 chars) |
| `/srv/championslab/.next/` | Build output on VPS (served by Next.js) |
| `/srv/championslab/` | Source code on VPS (can be stale, doesn't matter) |
| `/etc/systemd/system/championslab.service` | systemd service definition |

---

## 📝 One-Liner Deploy (for copy-paste)

Once everything is committed and built locally:

```bash
# 1. Build locally
npm run build

# 2. Rsync to VPS
VPS_PASS=$(cat ~/Downloads/vps.txt)
VPS_IP=$(cat ~/Downloads/vpsaddress.txt)
sshpass -p "$VPS_PASS" rsync -avz --delete --exclude='*.map' \
  /Volumes/SSD-M2/Home/andrefernandes/Documents/ChampionsLab/.next/ \
  andre@"$VPS_IP":/srv/championslab/.next/

# 3. Restart service
sshpass -p "$VPS_PASS" ssh -o StrictHostKeyChecking=no andre@"$VPS_IP" \
  "printf '%s\n' '$VPS_PASS' | sudo -S systemctl restart championslab"

# 4. Verify
sshpass -p "$VPS_PASS" ssh -o StrictHostKeyChecking=no andre@"$VPS_IP" \
  "printf '%s\n' '$VPS_PASS' | sudo -S systemctl status championslab --no-pager"
```

---

*Last updated: 23/04/2026*  
*If this guide is wrong or outdated, update it immediately so the next deploy goes smoothly.*
