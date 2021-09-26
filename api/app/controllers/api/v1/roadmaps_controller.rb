class Api::V1::RoadmapsController < ApplicationController

  def index
    @roadmaps = Roadmap.all.order(id: "DESC")
  end

  def show
    @roadmap = Roadmap.find(params[:id])
    if @roadmap
      nodes_sorted = @roadmap.nodes.order(:id)
      render json: {id: @roadmap.id, category: @roadmap.category.name, name: @roadmap.name, description: @roadmap.description, author: @roadmap.user, node_items: nodes_sorted}
    else
      render json: nil
    end
  end

  def create
    author = User.find_by(uid: params[:uid])

    category = Category.find_by(name: roadmap_params[:name])
    if !category
      category = Category.create(name: roadmap_params[:name])
    end
    roadmap = Roadmap.create(name: roadmap_params[:name], description: roadmap_params[:description], user_id: author.id, category_id: category.id)

    # next_id = nil
    roadmap_params[:node_items].each do |node_item|
      new_node = Node.create(name: node_item[:name], description: node_item[:description], roadmap_id: roadmap.id)
      # next_id = new_node.id
    end

    render json: roadmap

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
      params.permit(:name, :description, :uid, :category_name, node_items: [:name, :description])
    end
end
