#!/bin/bash

mv dist/ server/
git add server
git commit -m 'Atualizando servidor'
git subtree push --prefix server heroku master
