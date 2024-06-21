import React from 'react';
import { FlipWords } from './flip-words';

export function FlipWordsArtDeco() {
  const words = ['Scene', 'Environment', 'Project', 'Assignment'];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <div className="text-center text-5xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 py-8">
          Art Deco <FlipWords words={words} />
          in Unity
        </div>
      </div>
    </div>
  );
}
