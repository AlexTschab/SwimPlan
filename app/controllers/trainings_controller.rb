class TrainingsController < ApplicationController
  def index
    @trainings = Training.all
  end

  def show
    @training = Training.find(params[:id])
    @bloc = Bloc.new
    @bloc.training = @training
  end

  def new
    @training = Training.new
  end

  def create
    @training = Training.new
    @training.save
  end

  def edit
    @training = Training.find(params[:id])
  end
end
