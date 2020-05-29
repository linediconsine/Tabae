class ApplicationController < ActionController::Base
    before_action :authenticate_with_http_basic
    around_action :switch_locale
 

private

def switch_locale(&action)
  locale = I18n.default_locale
  
  browser_lang = request.env['HTTP_ACCEPT_LANGUAGE']
  I18n.available_locales.each do |lng|
    if browser_lang.include? lng.to_s
      locale = lng
    end 
  end

  if params[:locale]
    locale = params[:locale] || I18n.default_locale
  end
  
  I18n.with_locale(locale, &action)
  puts "locale: " + locale.to_s
end

end


