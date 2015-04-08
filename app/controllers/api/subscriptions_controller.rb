class Api::SubscriptionsController < ApplicationController
  # before_action do
  #   # require login
  # end

  def create
    @sub = Subscription.new(sub_params)
    @sub.user_id = current_user.id
    if @sub.save
      render json: @sub
    else
      render json: @sub.errors.full_messages
    end
  end

  def delete
    #make sure user owns this subscription
    @sub = Subscription.find(params[:id])
    Subscription.destroy(params[:id])
    render json: @sub
  end

  private

  def sub_params
    params.require(:subscription).permit(:user_id, :feed_id)
  end
end
