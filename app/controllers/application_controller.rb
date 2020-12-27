class ApplicationController < ActionController::Base
    before_action :authenticate_with_http_basic
    around_action :switch_locale
    before_action :use_coming_soon
  
private



def use_coming_soon()

  if params[:pass] == 'testing' || session[:pass] =='testing'
    session[:pass] = 'testing'
    if action_name == 'coming_soon'
      redirect_to sentences_path
    end
  end

  if Settings.comingsoon == true and action_name != 'coming_soon' and session[:pass] != 'testing'
      redirect_to coming_soon_path
  end

end

def switch_locale(&action)
  locale = I18n.default_locale
  
  browser_lang = request.env['HTTP_ACCEPT_LANGUAGE'].to_s
  
  I18n.available_locales.each do |lng|
    if browser_lang.include? lng.to_s
      locale = lng
    end 
  end

  if params[:locale]
    locale = params[:locale] || I18n.default_locale
  end
  
  I18n.with_locale(locale, &action)

end

end


