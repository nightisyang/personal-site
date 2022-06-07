import styles from "./nounScript.module.css";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { RockSlider } from "./RockSlider";

let counter = 0;

function getTextWidth(text, font) {
  // re-use canvas object for better performance
  const canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}

const defaultPx = "92px";
let startingPx;
let endingPx;

export default function NounScript() {
  const [noun, setNoun] = useState("");
  const [rockStyle, setRockStyle] = useState({
    transform: `translateX(92px)`,
  });
  const [startingPx, setStartingPx] = useState("100px");
  const [endingPx, setEndingPx] = useState("92px");

  const nounList = [
    "rock",
    "socks",
    "igneous",
    "sedimentary",
    "metamorphic",
    "world",
    "food",
    "data",
    "love",
    "movie",
    "run",
    "climb",
    "camera",
    "kid",
    "wife",
    "gene",
    "code",
    ".length",
    "solution",
    "coffee",
    "error",
    "river",
    "dad",
    "job",
  ];

  const slide = keyframes`
  0% {
  transform: translateX(${startingPx});
  }

  25% {
      transform: translateX(${endingPx});
    }

  100% {
  transform: translateX(${endingPx});

  }`;

  const nounListSorted = nounList.sort((a, b) => a.length - b.length);
  nounListSorted.push("young");

  useEffect(() => {
    // create a interval and get the id
    const myInterval = setInterval(() => {
      if (counter === nounList.length) {
        counter = 0;
      }

      // useState to update new noun
      setNoun(nounListSorted[counter]);

      // get width to noun to adjust sliding .rock text
      let nounWidth =
        Math.floor(
          getTextWidth(nounListSorted[counter], "bold 32px BlinkMacSystemFont")
        ) + "px";

      // get width of prvious noun to adjust sliding .rock text

      let startingPxOfPreviousNoun;

      if (counter !== 0) {
        startingPxOfPreviousNoun =
          Math.floor(
            getTextWidth(
              nounListSorted[counter - 1],
              "bold 32px BlinkMacSystemFont"
            )
          ) + "px";
      } else {
        startingPxOfPreviousNoun = "92px";
      }

      // useState to update with of new noun(ending point) and of prvious noun(starting point)
      setStartingPx(startingPxOfPreviousNoun);
      setEndingPx(nounWidth);

      //   setRockStyle({
      //     transform: `translateX(${nounWidth})`,
      //   });

      counter++;
    }, 2000);

    // clear out the interval using the id when unmounting the component
    return () => clearInterval(myInterval);
  }, []);

  return (
    <h2 className={styles.csstext}>
      <span className={styles.item1}>this</span>{" "}
      <span id="text" className={styles.cssyoung}>
        {noun}
      </span>
      {/* <span className={styles.rock} style={rockStyle}>
        .rocks
      </span> */}
      <RockSlider slide={slide}>.rocks</RockSlider>
    </h2>
  );
}
