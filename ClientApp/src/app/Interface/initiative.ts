import { Nonplayer } from "./nonplayer";
import { Player } from "./player";

export interface Initiative {
  id: number,
  player?: Player,
  nonplayer?: Nonplayer,
  initiativenum: number
  
}
