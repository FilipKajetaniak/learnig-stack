import { Voicing } from "./Voicing";

export interface ChordInterface {
  id: string;
  voicing: Voicing;
  step: number;
}
