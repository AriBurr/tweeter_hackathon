class User < ActiveRecord::Base
  has_one :bio
  has_many :posts
  has_many :comments
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User
end
