export type RoadMap = {
  id: number;
  name: string;
  description: string;
  author: Author;
  node_items: NodeItem[];
  created_at: string;
  category: string;
};

export type Author = {
  uid: string;
  name: string;
  bio: string;
  profile_image: string;
};

export type NodeItem = {
  id: number;
  next_id: number;
  loadmap_id: number;
  name: string;
  description: string;
};
