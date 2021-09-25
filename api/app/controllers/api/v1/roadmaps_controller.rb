class Api::V1::RoadmapsController < ApplicationController

  def index
    @roadmaps = Roadmap.all
    render json: @roadmaps
  end

  def show
    @roadmap = Roadmap.find(params[:id])
    if @roadmap
      render json: {id: @roadmap.id, name: @roadmap.name, author: @roadmap.user, node_items: @roadmap.nodeItems} 
    else
      render json: nil
    end
  end

  def create
    author = User.find_by(uid: params[:uid])
    roadmap = Roadmap.new(name: roadmap_params[:name], description: roadmap_params[:description], user_id: author.id)
    
    next_id = nil
    params[:node_items].reverse_each |node_item| do
      new_node = NodeItem.create(name: node_item.name, description: node_item.description, roadmap_id: roadmap.id, next_id: next_id)
      next_id = new_node.id
    end

    if @roadmap.save
      render json: @roadmap
    else
      render json: @roadmap.errors, status: :unprocessable_entity
    end
    
  end

  def destroy
    @roadmap = Roadmap.find(params[:id])
    @roadmap.destroy
  end

  def update
    @roadmap = Roadmap.find(params[:id])
    if !@roadmap 
      return
    end
    if @roadmap.update(roadmap_params)
      render json: @roadmap
    else
      render json: @roadmap.errors, status: :unprocessable_entity
    end
  end

  private

  def roadmap_params
    params.require(:roadmap).permit(:id, :name, :description)
  end

end
