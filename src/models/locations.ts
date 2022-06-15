export type LocationConnection = {
  toId: string;
  time: number;
}

export type LocationData = {
  id: string;
  image: string;
  connections: LocationConnection[];
}
