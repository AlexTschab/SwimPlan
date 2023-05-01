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
    @training.blocs.build.lines.build
  end

  def create
    @training = Training.new(training_params)
    if @training.save
      redirect_to root_path
    end
  end

  def edit
    @training = Training.find(params[:id])
  end

  def destroy
    @training = Training.find(params[:id])
    @training.destroy
    redirect_to root_path
  end

  def update
    if user.update(training_params)
      redirect_to trainings_path
    else
      render :edit
    end
  end

  private

  def training_params
    params.require(:training).permit(:title, :date, :content, blocs_attributes: [:id, :_destroy, :quantity])
  end
end
