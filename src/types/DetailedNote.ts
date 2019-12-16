import { NoteFile } from "./NoteFile";

export interface DetailedNote {
  note: NoteFile;
  octave: number;
  step: number;
}
