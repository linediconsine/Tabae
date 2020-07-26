cd ..
rm -rf public/packs*/
rails webpacker:compile
echo 'Clean assets complete'