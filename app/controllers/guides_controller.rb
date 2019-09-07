class GuidesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Guide.all
  end

  def show
    render json: Guide.find(params["id"])
  end

  def create
    params["guide"]["body"].gsub! "'", "''"
    render json: Guide.create(params["guide"])
  end

  def delete
    render json: Guide.delete(params["id"])
  end

  def update
    render json: Guide.update(params["id"], params["guide"])
  end

end
