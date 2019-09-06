class GuidesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    render json: Guide.create(params["guide"])
  end

end
