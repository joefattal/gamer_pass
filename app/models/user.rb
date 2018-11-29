class User < ApplicationRecord
  has_many :user_games
  has_many :games, through: :user_games
  validates_uniqueness_of :email

  def add_favorite_games(game_params)
    games = []
    games += game_params[:xbox] if game_params[:xbox]
    games += game_params[:playstation] if game_params[:playstation]
    games += game_params[:nintendo] if game_params[:nintendo]
    games += game_params[:pc] if game_params[:pc]
    games += game_params[:cards] if game_params[:cards]
    games += game_params[:apps] if game_params[:apps]
    games.each{|g| UserGame.create(user_id: self.id, game_id: g.to_i)}
  end
end
