#!/bin/sh

echo "* Setting up cosuno-api..."
cd cosuno-api
npm i

echo "* Setting up cosuno-ui..."
cd ../cosuno-ui
npm i

echo "* All set up. Now execute scripts 'run-api.sh' and 'run-ui.sh'"
