json.user @user
json.roadmaps do
  json.array! @roadmaps do |roadmap|
    json.id roadmap.id
    json.category roadmap.category_name
    json.name roadmap.name
    json.description roadmap.description
  end
end