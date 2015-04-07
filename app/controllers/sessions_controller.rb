class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(session_params)
    if @user
      login_user(@user)
      redirect_to '/'
    else
      flash.now[:errors] = ["Can't find that email/password combination"]
      render :new
    end
  end

  def destroy
    logout
    redirect_to '/'
  end

  private

  def session_params
    params.require(:session).permit(:email, :password)
  end
end
