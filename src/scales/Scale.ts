import { Note } from "types/Note";
import { notes as allNotes } from "constants/notes";
import { DetailedNote } from "types/DetailedNote";

const removeOctave = (note: string): string =>
  note.substring(0, note.length - 1);

export default class Scale {
  constructor(scale: string[]) {
    this.notes = allNotes
      // filtering out notes that not belong to scale
      .filter(note => scale.find(scaleNote => scaleNote === removeOctave(note)))
      // adding octave based on soundbank and step based by index of notes in scale
      .map(note => ({
        note,
        octave: parseInt(note.slice(-1), 10),
        step: scale.indexOf(removeOctave(note)) + 1
      }));
    // mapping octaves relative to root note rather than C as it is in soundbank
    this.notes = this.mapOctavesBasedOnScale(scale);
  }

  private notes: DetailedNote[] = [];

  readonly getNotesFromSteps = (
    octave: number,
    step: number,
    voicing: number[]
  ): Note[] => {
    const chordRoot = this.notes.find(
      note => note.octave === octave && note.step === step
    );
    if (chordRoot) {
      let notes: Note[] = [];
      for (let i = 0; i < voicing.length; i++) {
        const range = this.notes.indexOf(chordRoot) + voicing[i] - 1;
        notes.push(this.notes.slice(range, range + 1)[0].note);
      }
      return notes;
    }
    return [];
  };

  private readonly mapOctavesBasedOnScale = (
    scale: string[]
  ): DetailedNote[] => {
    const LOWEST_OCTAVE = 3;
    const firstRootNote = this.notes.find(
      note => note.step === 1 && note.octave === LOWEST_OCTAVE
    );
    if (firstRootNote) {
      // removing notes before root note so scale starts at root note
      const fistRootNoteIndex = this.notes.indexOf(firstRootNote);
      const notesFromLowerOctave: Note[] = [];
      // iterating through first octave of notes to find notes with offset octave
      this.notes
        .slice(fistRootNoteIndex, fistRootNoteIndex + scale.length)
        .forEach(note => {
          if (note.octave !== LOWEST_OCTAVE) {
            notesFromLowerOctave.push(note.note);
          }
        });
      // mapping through notes to adjust offset notes to relative root note
      return this.notes.map(note => {
        if (
          notesFromLowerOctave.find(
            offsetNote => removeOctave(offsetNote) === removeOctave(note.note)
          )
        ) {
          return {
            ...note,
            octave: note.octave - 1
          };
        }
        return note;
      });
    }
    return this.notes;
  };
}
