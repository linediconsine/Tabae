Check if connection is working:
https://stackoverflow.com/questions/189430/detect-the-internet-connection-is-offline

1. use browse memory and upload message when online
2. hide any action will make the app offline when offline

psql -c "CREATE USER tabae WITH PASSWORD 'cavallo';"
psql -c '\x' -c 'GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO tabae;'
psql -c '\x' -c 'ALTER USER tabae CREATEDB;'

psql -c '\x' -c 'ALTER USER amph CREATEDB;'
CREATE DATABASE tabae_development


rails credentials:edit

# start pg

pg_ctl -D /usr/local/var/postgres start

https://opentechschool.github.io/social-coding/extras/heroku.html
#git push heroku master

Webpack
bundle update webpacker
rails webpacker:binstubs
yarn upgrade @rails/webpacker --latest
yarn add webpack-dev-server@^3.1.14
Then follow the steps in: https://github.com/rails/webpacker/blob/master/docs/v4-upgrade.md#webpacker-upgrade-guide

weback by hand
./bin/webpack-dev-server


create role tabae with createdb login password 'ninja';


UBUNTU:
$sudo -i -u postgres
$psql
CREATE USER tabae WITH PASSWORD 'ninja';
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO tabae;
CREATE DATABASE tabae_development;

$rails db:migrate