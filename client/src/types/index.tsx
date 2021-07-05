export type User = {
  user_id: number;
  first_name: String;
  last_name: String;
  country_of_origin: String;
  created_at: String;
};

export type File = {
  name: String;
  uuid: number;
  type: String;
  duration: number;
  size: number;
};
