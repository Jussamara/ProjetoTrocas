#!/bin/bash

rm -rf server/dist
mv dist/ server/
git add server
git commit -m 'Atualizando servidor'
git subtree push --prefix server heroku master
