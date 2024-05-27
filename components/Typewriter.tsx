"use client";

import React, { useState, useEffect } from "react";

type TypewriterProps = {
  input: string;
  start: string;
  delay: number;
};
const visibleCharCount = 60;

const Typewriter = ({ input, delay }: TypewriterProps) => {
  const [firstPart, setFirstPart] = useState("");
  const [secondPart, setSecondPart] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const [isFireVisible, setIsFireVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (endIndex < input.length) {
        if (endIndex > visibleCharCount) {
          setStartIndex((prevIndex) => prevIndex + 1);
          setFirstPart((prevText) => prevText + input[startIndex]);
        }
        if (endIndex > visibleCharCount - 2) {
          setIsFireVisible(true);
        }
        setEndIndex((prevIndex) => prevIndex + 1);
        setSecondPart(
          (prevText) =>
            prevText.slice(endIndex > visibleCharCount ? 1 : 0) +
            input[endIndex]
        );
      } else if (startIndex < endIndex) {
        setStartIndex((prevIndex) => prevIndex + 1);
        setFirstPart((prevText) => prevText + input[startIndex]);
        setSecondPart((prevText) =>
          prevText.slice(endIndex > visibleCharCount ? 1 : 0)
        );
      } else if (startIndex === endIndex) {
        setIsFireVisible(false);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [endIndex, delay, input, startIndex]);

  return (
    <p className="whitespace-break-spaces">
      <span className="invisible">{firstPart}</span>
      <span className={`text-4xl ${!isFireVisible && "invisible"}`}>🔥</span>
      <span
        className={`${
          startIndex > 0 && input.length === startIndex && "invisible"
        }`}
      >
        {secondPart}
      </span>
      <span
        className={
          endIndex % 2 === 0 || input.length === startIndex
            ? "invisible"
            : "visible"
        }
      >
        {" "}
        |
      </span>
    </p>
  );
};

export default Typewriter;
