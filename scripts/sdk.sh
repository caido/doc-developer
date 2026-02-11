#!/usr/bin/env bash
set -e

echo "[*] Generating doc"
cd ../sdk-js
pnpm generate:doc

echo "[*] Copying doc"
rm -rf ../doc-developer/src/reference/sdks/backend/*
cp -r ./packages/sdk-backend/docs/* ../doc-developer/src/reference/sdks/backend/
rm -rf ../doc-developer/src/reference/sdks/frontend/*
cp -r ./packages/sdk-frontend/docs/* ../doc-developer/src/reference/sdks/frontend/
rm -rf ../doc-developer/src/reference/sdks/workflow/*
cp -r ./packages/sdk-workflow/docs/* ../doc-developer/src/reference/sdks/workflow/
rm -rf ../doc-developer/src/reference/modules/*
cp -r ./packages/quickjs-types/docs/* ../doc-developer/src/reference/modules/
