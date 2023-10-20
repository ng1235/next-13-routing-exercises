import React from "react";
import Link from "next/link";

const colors = [
  "aliceblue",
  "red",
  "green",
  "black",
  "maroon",
  "blanchedalmond",
  "blueviolet",
];

function ScreenSaverIndexPage() {
  return (
    <main>
      <p>Choose your color: </p>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>
            <Link href={`/exercises/01-screensaver/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;
