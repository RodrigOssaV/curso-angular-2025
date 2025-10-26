export interface CharacterResponse {
  info: {
    count: number;
    pages: number;
  }
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  image: string;
  mostrar: boolean;
  episode: string[];
  location: Location;
}

export interface Location {
  name: string;
  url: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  url: string;
  season: string;
  episode_number: string;
}