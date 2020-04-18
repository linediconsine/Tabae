Check if connection is working:
https://stackoverflow.com/questions/189430/detect-the-internet-connection-is-offline

1. use browse memory and upload message when online
2. hide any action will make the app offline when offline

psql -c "CREATE USER amph WITH PASSWORD 'cavallo';"
psql -c '\x' -c 'GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO amph;'
psql -c '\x' -c 'ALTER USER amph CREATEDB;'

psql -c '\x' -c 'ALTER USER amph CREATEDB;'
CREATE DATABASE databasename

# start pg

pg_ctl -D /usr/local/var/postgres start
