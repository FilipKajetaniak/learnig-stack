import { NoteFile } from "./NoteFile";

export type AudioNote = { [key in NoteFile]: HTMLAudioElement };
