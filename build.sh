#!/bin/bash
rm -rf server/public/*
cd front
npm run build-prod
cd ..
mv front/build/* server/public