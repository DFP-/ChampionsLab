<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:workflow-rules -->
# End-of-Task Verification

At the end of every task, fix, or code change — before marking the task complete — make sure the local development server (`localhost`) is running and the app loads without errors. If it is not running, start it (`npm run dev` or equivalent) and do a quick smoke-test in the browser.

# Changelog Updates

After every task, fix, or code change that is user-facing (UI changes, bug fixes, new features, data updates, engine improvements, i18n additions), update the shared changelog in `src/components/last-updated.tsx`. Add a new dated entry at the top of `SHARED_ENTRIES` with concise, emoji-prefixed bullet points describing what changed. The changelog modal appears on every page, so all changes should be summarized there for users.
<!-- END:workflow-rules -->

