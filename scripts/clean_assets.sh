#cd ..
rm -rf public/packs*/
rails  assets:clobber
rails assets:precompile
rails webpacker:compile
echo 'Clean assets complete'
