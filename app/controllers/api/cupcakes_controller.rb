class Api::CupcakesController < ApplicationController

    def index
        @cupcakes = Cupcake.all
        render :index
    end

    def show
        @cupcake = Cupcake.find(params[:id])
        render :show
    end

    def create
        @cupcake = Cupcake.new(cupcake_params)
        if @cupcake.save
            render :show
        else
            render json: @cupcake.errors.full_messages, status: 422
        end
    end

    def update
        @cupcake = Cupcake.find(params[:id])
        if @cupcake.update_attributes(cupcake_params)
            render :show
        else
            render json: ["Cannot find Cupcake"], status: 404
    end


    private 
    
    def cupcake_params
        params.require(:cupcake).permit(:name, :description, :price)
    end




end
