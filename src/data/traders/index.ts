import * as CosplayTrader from './cosplay';

export type Trade = {
  type: string;
  girlId: string;
  price: number;
}

export type TraderData = {
  trades: Trade[];
  id: string;
}

export const traders = new Map<string, TraderData>([
  [CosplayTrader.id, CosplayTrader]
])
