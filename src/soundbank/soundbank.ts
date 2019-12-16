import { Note } from "types/Note";
import { AudioNote } from "types/AudioNote";
import { notes } from "constants/notes";

const createAudioElement = (note: Note) => {
  const audioElement = document.createElement("audio");
  audioElement.src = require(`./notes/${note}.wav`);
  audioElement.setAttribute("preload", "auto");
  audioElement.setAttribute("controls", "none");
  audioElement.style.display = "none";
  document.body.appendChild(audioElement);
  return audioElement;
};

export default class Soundbank {
  constructor() {
    this.notes = notes.reduce(
      (object: any, note: Note) =>
        (object = {
          ...object,
          [note]: createAudioElement(note)
        }),
      {}
    );
  }

  private notes: AudioNote;

  readonly play = (notes: Note[]) => {
    notes.forEach(note => {
      this.notes[note].play();
    });
  };

  readonly stop = (notes: Note[]) => {
    notes.forEach(note => {
      this.notes[note].pause();
      this.notes[note].currentTime = 0;
    });
  };
}
