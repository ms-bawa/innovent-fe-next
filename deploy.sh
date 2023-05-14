#!/bin/bash

git pull
# nvm use 18.14.0
npm install
npm run build
pm2 reload ecosystem.prod.config.js --env production
pm2 status

# EOF