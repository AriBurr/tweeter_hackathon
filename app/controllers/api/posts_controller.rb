class Api::PostsController < ApplicationController
  before_action :set_post, except: [:index, :create]
  before_action :authenticate_user!

  def index
    @posts = current_user.posts
    render json: @posts
  end

  def show
    render json: @post
  end

  def create
    @post = current_user.posts.create(post_params)
    if @post.save
      render json: @post
    else
      render json: { errors: @post.error.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: { errors: @post.error.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @post.destroy
  end

  private

    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:content)
    end

end
