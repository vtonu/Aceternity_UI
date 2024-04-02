'use client';
import React from 'react';
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from './text-reveal-card';

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center  h-[10rem] rounded-2xl w-[100%]">
      <TextRevealCard text="Phase One" revealText="Ideas & references">
        {/* <TextRevealCardTitle>Sometimes, you just need to see it.</TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden text.
        </TextRevealCardDescription> */}
      </TextRevealCard>
    </div>
  );
}
