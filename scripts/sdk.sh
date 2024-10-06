#!/usr/bin/env bash

echo "[*] Generating doc"
cd ../sdk-js
pnpm -r documentation

echo "[*] Copying doc"
cp -r ./packages/sdk-backend/docs/* ../doc-developer/src/reference/sdks/backend/
cp -r ./packages/sdk-frontend/docs/* ../doc-developer/src/reference/sdks/frontend/
cp -r ./packages/sdk-workflow/docs/* ../doc-developer/src/reference/sdks/workflow/
