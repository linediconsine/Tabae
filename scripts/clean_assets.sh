#cd ..
rm -rf public/packs*/
rails webpacker:compile
rails  assets:clobber
rails assets:precompile
echo 'Clean assets complete'
