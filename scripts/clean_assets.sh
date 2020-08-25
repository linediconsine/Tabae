#cd ..
rm -rf public/packs*/
rails  assets:clobber
rails assets:precompile
rails webpacker:compile
rails  assets:clobber
rails assets:precompile
echo 'Clean assets complete'
