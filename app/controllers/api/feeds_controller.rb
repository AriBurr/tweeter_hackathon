class Api::FeedsController < ApplicationController
  before_action :authenticate_user!

  def index
    render :json Post.all(created_at: :desc)
  end

  def show
  end
end
