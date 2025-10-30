interface ILocation {
  lat: number;
  lon: number;
}

export interface IFetchedUser {
  id: number;
  first_name: string;
  last_name: string;
  location: ILocation;
  tags: string[];
}
