import * as CosplayTrader from './cosplay';
import * as ActorsTrader from './actors';

export type Trade = {
  type: string;
  girlId: string;
}

export type TraderData = {
  trades: Trade[];
  id: string;
}

export const traders = new Map<string, TraderData>([
  [ActorsTrader.id, ActorsTrader],
  [CosplayTrader.id, CosplayTrader]
])
