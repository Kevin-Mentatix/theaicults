#!/bin/sh
# Build step: run before every deploy (after editing any assets/data/*.js)
node seo-build.js "$1" && node prerender.js
