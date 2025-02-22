import Image from "next/image";
import React, { type FunctionComponent, useEffect, useState } from "react";

type Prop = {
  delay: number;
};

const elements: string[] = [
  "loginTrophy.png",
  "dice.png",
  "sword.png",
  "witchHat.png",
  "pawn.png",
  "pacman.png",
  "sheild.png",
  "bomb.png",
  "coin.png",
  "potion.png",
  "bowArrow.png",
] as const;

const getElement: () => number = () => {
  return Math.floor(Math.random() * 11);
};

const getSize: () => { width: number; height: number } = () => {
  const size = Math.floor(Math.random() * 20) + 40;
  return { width: size, height: size };
};

const getPosition: () => number = () => {
  return Math.floor(Math.random() * 80) + 10;
};

const FallingItem: FunctionComponent<Prop> = ({ delay }) => {
  const [src, setSrc] = useState(elements[getElement()]!);
  const [left, setLeft] = useState(getPosition());
  const [size, setSize] = useState(getSize());

  useEffect(() => {
    setTimeout(() => {
      setInterval(() => {
        setSrc(elements[getElement()]!);
        setLeft(getPosition());
        setSize(getSize());
        // TODO: 100000 should be same as that in animation duration of free-fall in tailwind.config.js
      }, 10000);
    }, delay);
  }, [delay]);

  return (
    <div
      className={"pointer-events-none absolute animate-free-fall"}
      style={{
        animationDelay: `${delay}ms`,
        top: "0px",
        left: `${left}%`,
        width: `${size.width}`,
        height: `${size.height}`,
      }}
    >
      <Image
        src={`/assets/png/${src}`}
        alt={src}
        width={size.width}
        height={size.height}
      />
    </div>
  );
};

export default FallingItem;
