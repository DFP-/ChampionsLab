#!/usr/bin/env bash
# Full test: initialize + listTools
cd /home/dfp/code/ChampionsLab/.tools/mcp-server

{
  echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"test","version":"0.1"}}}'
  echo '{"jsonrpc":"2.0","id":2,"method":"notifications/initialized"}'
  echo '{"jsonrpc":"2.0","id":3,"method":"tools/list","params":{}}'
} | timeout 15 npx tsx --tsconfig ../../tsconfig.json src/mcp-server.ts 2>&1
