#!/bin/sh

echo "* Resetting cosuno-api"
echo "* Removing cosuno-api/dist..."
rm -rf cosuno-api/dist
echo "* Removing cosuno-api/node_modules..."
rm -rf cosuno-api/node_modules

echo "* Resetting cosuno-ui"
echo "* Removing cosuno-ui/node_modules..."
rm -rf cosuno-ui/node_modules
