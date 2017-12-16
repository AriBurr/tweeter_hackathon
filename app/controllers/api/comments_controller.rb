class Api::CommentsController < ApplicationController
  before_action :set_post
  before_action :set_user

  def index
    @comments = @post.comments
    render json: @comments
  end

  def create
    @comment = @post.comments.new(comment_params)
    @comment.user = current_user
    if @comment.save
      render json: @comment
    else
      binding.pry
      render json: { errors: @comment.errors.full_messages.join(',') }, status: 422
    end
  end

  private

    def set_post
      @post = Post.find(params[:post_id])
    end

    def set_user
      @user = current_user
    end

    def comment_params
      params.require(:comment).permit(:message)
    end

end
