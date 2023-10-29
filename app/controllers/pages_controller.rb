class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    @trainings = Training.all
  end

  def about
  end

  def overview
  end

  def map
    @pools = Pool.all
    @markers = @pools.geocoded.map do |pool|
      {
        lat: pool.latitude,
        lng: pool.longitude
      }
    end
  end

end
