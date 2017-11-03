#!/bin/bash

cp -rf /dist /server/dist
git add server
git commit -m 'Atualizando servidor'
git subtree push --prefix server heroku master

rm -rf server/dist/
rm -rf dist/
