"use client";
import React, { useState, useEffect } from "react";

type TypewriterProps = {
  text: string;
  delay: number;
};

const Typewriter = ({ text, delay }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(
          (prevText) =>
            prevText.slice(currentIndex > 40 ? 1 : 0) + text[currentIndex]
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <p>{currentText}</p>;
};

export default Typewriter;
