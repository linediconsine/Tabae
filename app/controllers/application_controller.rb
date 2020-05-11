class ApplicationController < ActionController::Base
    before_action :authenticate_with_http_basic
    around_action :switch_locale
 

private

def switch_locale(&action)
  locale = params[:locale] || I18n.default_locale
  I18n.with_locale(locale, &action)
  puts "locale: " + locale.to_s
end

end


