json.array! @roadmaps do |roadmap|
  json.id roadmap.id
  json.category roadmap.categoy.name
  json.name roadmap.name
  json.description roadmap.description
  json.author do
    json.uid roadmap.user.uid
    json.name roadmap.user.name
    json.bio roadmap.user.bio
    json.profile_image roadmap.user.profile_image
  end
  json.node_items do
    json.array! roadmap.nodes, :id, :next_id, :roadmap_id, :name, :description
  end
end
