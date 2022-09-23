export type Character = {
  name?: string,
  status?: string,
  gender?: string,
  image?: string,
  created?: string,
  url?: string,
  location?: Location
}

export type Characters = Character[];

export type Location = {
  name?: string,
  url?: string
}
