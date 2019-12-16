import { AudioNote } from "types/AudioNote";
import { notes } from "./notes/notesList";
import { NoteFile } from "types/NoteFile";

const createAudioElement = (note: NoteFile) => {
  const audioElement = document.createElement("audio");
  audioElement.src = require(`./notes/${note}.wav`).default;
  audioElement.setAttribute("preload", "auto");
  audioElement.setAttribute("controls", "none");
  audioElement.style.display = "none";
  document.body.appendChild(audioElement);
  return audioElement;
};

export default class Soundbank {
  constructor() {
    this.notes = notes.reduce(
      (object: any, note: NoteFile) =>
        (object = {
          ...object,
          [note]: createAudioElement(note)
        }),
      {}
    );
  }

  private notes: AudioNote;

  readonly play = (notes: NoteFile[]) => {
    notes.forEach(note => {
      this.notes[note].play();
    });
  };

  readonly stop = (notes: NoteFile[]) => {
    notes.forEach(note => {
      this.notes[note].pause();
      this.notes[note].currentTime = 0;
    });
  };
}
