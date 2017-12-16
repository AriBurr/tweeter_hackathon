@user_id = 0

avatar = ['this', 'that', 'foo', 'bar', 'baz']

5.times do
  User.create!(
    email: Faker::Internet.email,
    password: "password"
  )
end

5.times do 
  @user_id += 1
  Bio.create(
  user_id: @user_id,
  profile_image: Faker::Avatar.image(avatar.sample, '50x50', 'png', 'set4'),
  description: Faker::Hipster.paragraph
  )
  50.times do
    Post.create(
    user_id: @user_id,
    content: Faker::Lorem.paragraph
    )
  end
end

puts "seeded"
