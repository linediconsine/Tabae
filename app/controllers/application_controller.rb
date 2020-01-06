class ApplicationController < ActionController::Base
    before_action :authenticate_with_http_basic
end
