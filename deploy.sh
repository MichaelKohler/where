#!/bin/sh
set -x

SERVER_PATH=/var/www/html/where

eval "$(ssh-agent -s)"
openssl aes-256-cbc -K $encrypted_5895a3b8c317_key -iv $encrypted_5895a3b8c317_iv -in travis_deploy_rsa.enc -out travis_deploy_rsa -d
chmod 600 travis_deploy_rsa
ssh-add travis_deploy_rsa
ssh-keyscan -H me.michaelkohler.info >> ~/.ssh/known_hosts

echo "Content to deploy.."
ls -al $TRAVIS_BUILD_DIR/dist/

echo "Deploying.."
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/dist/index.html travis@me.michaelkohler.info:$SERVER_PATH/
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/dist/robots.txt travis@me.michaelkohler.info:$SERVER_PATH/
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/dist/* travis@me.michaelkohler.info:$SERVER_PATH/dist/
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/server/* travis@me.michaelkohler.info:$SERVER_PATH/server/

rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/package.json travis@me.michaelkohler.info:$SERVER_PATH/server/
ssh travis@me.michaelkohler.info 'cd /var/www/html/where/server/ && npm install'

echo "After deploy.."
ssh travis@me.michaelkohler.info 'cd /var/www/html/where/ && ls -al && cd dist && ls -al'
