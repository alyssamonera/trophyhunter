class GuidesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    render json: Guide.create(params["guide"])
  end

  def update
    render json: Guide.update(params["id"], params["guide"])
  end

end
