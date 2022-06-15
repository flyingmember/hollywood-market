import { TraderData } from 'src/models/traders';

import * as ActorsTrader from './actors';
import * as CosplayTrader from './cosplay';
import * as TikTok from './tiktok';
import * as TwitchTrader from './twitch';

export const traders = new Map<string, TraderData>([
  [ActorsTrader.id, ActorsTrader],
  [TwitchTrader.id, TwitchTrader],
  [CosplayTrader.id, CosplayTrader],
  [TikTok.id, TikTok]
])
