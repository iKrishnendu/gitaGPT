import React, { useState, useEffect } from "react";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

const ToggleSound = ({ soundOn, open }) => {
  const [audio] = useState(new Audio("/path/to/your/soundfile.mp3"));

  useEffect(() => {
    if (soundOn) {
      // audio.play();
    } else {
      // audio.pause();
      audio.currentTime = 0;
    }
  }, [soundOn, audio]);

  const toggleSound = () => {
    if (soundOn) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
    }
  };

  return (
    <div className={`flex items-center gap-2  ${!open && "justify-center"}`}>
      {soundOn ? (
        <>
          <HiSpeakerWave size={25} onClick={toggleSound} />
          <p className={` ${!open && "hidden"}`}>Sound On</p>
        </>
      ) : (
        <>
          <HiSpeakerXMark size={25} onClick={toggleSound} />
          <p className={`${!open && "hidden"}`}>Sound Off</p>
        </>
      )}
    </div>
  );
};

export default ToggleSound;
