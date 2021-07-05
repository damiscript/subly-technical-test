export type User = {
  user_id: number;
  name: String;
  country_of_origin: String;
  created_at: String;
};

export type File = {
  file_id: any;
  name: String;
  uuid: number;
  type: String;
  duration: number;
  size: number;
};
