class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def current_user
    User.find_by_session_token(session[:token])
  end

  def login_user(user)
    token = user.reset_session_token!
    user.save
    session[:token] = token
  end

  def logged_in?
    !current_user.nil?
  end

  def logout
    current_user.reset_session_token!
    session[:token] = nil
  end
end
