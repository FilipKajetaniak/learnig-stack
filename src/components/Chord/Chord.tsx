import React, { FC, MouseEvent, useState, useContext, useRef } from "react";

import { soundbankContext } from "containers/SoundbankContext";
import Scale from "scales/Scale";
import scales from "constants/scales";

import style from "./Chord.module.scss";

interface ChordProps {
  voicing: number[];
}

const selectedScale = scales.eMinor;
const scale = new Scale(selectedScale);

export const ChordComponent: FC<ChordProps> = ({ voicing }) => {
  const [step, setStep] = useState(1);
  const [offsetTop, setOffsetTop] = useState(50);
  const [octave, setOctave] = useState(4);
  const [isGrabbed, setIsGrabbed] = useState(false);
  const soundbank = useContext(soundbankContext);
  const notes = scale.getNotesFromSteps(octave, step, voicing);

  const chordRef = useRef<HTMLInputElement>(null);

  const play = (event?: MouseEvent<HTMLDivElement>) => {
    soundbank.play(notes);
  };
  const stop = (event?: MouseEvent<HTMLDivElement>) => {
    soundbank.stop(notes);
  };
  const increaseOctave = () => {
    if (octave === 6) {
      return;
    }
    setOctave(octave + 1);
  };

  const decreaseOctave = () => {
    if (octave === 3) {
      return;
    }
    setOctave(octave - 1);
  };
  const increaseStep = () => {
    setOffsetTop(offsetTop - 3.75);
    if (step === selectedScale.length) {
      increaseOctave();
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };
  const decreaseStep = () => {
    setOffsetTop(offsetTop + 3.75);
    if (step === 1) {
      decreaseOctave();
      setStep(selectedScale.length);
    } else {
      setStep(step - 1);
    }
  };
  const startMoving = (event: MouseEvent<HTMLDivElement>) => {
    setIsGrabbed(true);
  };
  const stopMoving = (event: MouseEvent<HTMLDivElement>) => {
    setIsGrabbed(false);
  };
  const moving = (event: MouseEvent<HTMLDivElement>) => {
    if (!isGrabbed || !chordRef || !chordRef.current) {
      return;
    }
    stop();
    if (event.clientY < chordRef.current.offsetTop + 170) {
      increaseStep();
    }
    if (event.clientY > chordRef.current.offsetTop + 220) {
      decreaseStep();
    }
  };
  return (
    <div
      className={`${style.chordWrapper} ${isGrabbed && style.grabbed}`}
      style={{
        top: `${offsetTop}%`
      }}
      ref={chordRef}
      onMouseDown={startMoving}
      onMouseUp={stopMoving}
      onMouseMove={moving}
    >
      <div onMouseDown={play} onMouseUp={stop} className={style.playButton}>
        {step}
      </div>
    </div>
  );
};
