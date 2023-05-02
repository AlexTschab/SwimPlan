class TrainingsController < ApplicationController
  before_action :set_training, only: %i[ show edit update destroy ]

  def index
    @trainings = Training.all
  end

  def show
    @bloc = Bloc.new
    @bloc.training = @training
  end

  def new
    @training = Training.new
    @training.blocs.build
    # @training.blocs.build.lines.build
  end

  def create
    @training = Training.new(training_params)
    if @training.save
      redirect_to root_path
    end
  end

  def edit
  end

  def update
    if @training.update(training_params)
      redirect_to trainings_path
    else
      render :edit
    end
  end

  def destroy
    @training.destroy
    redirect_to root_path
  end

  private

  def set_training
    @training = Training.find(params[:id])
  end

  def training_params
    params.require(:training).permit(:title, :date, :content, blocs_attributes: [:id, :_destroy, :quantity,  lines_attributes: [:quantity, :meters, :start_time]])
  end
end
