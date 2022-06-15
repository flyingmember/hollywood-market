
export type Trade = {
  type: string;
  girlId: string;
}

export type TraderData = {
  trades: Trade[];
  location: string;
  id: string;
}
