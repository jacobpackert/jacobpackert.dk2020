import React from 'react';
import { Link } from 'gatsby';
import './../styles/jul.css';


const CHRISTMAS_GRADIENT = `linear-gradient(180deg, #FF4444 1%, #FF5555 10%, #FF6666 50%, #FF7777 90%, #FF6666 95%, #FF5555 100%)`

export default function ChristmasLayout ({ location, title, children, hidefooter }) {
  let header;

  return (
    <div
      style={{
        background: CHRISTMAS_GRADIENT,
        display: 'flex',
        minHeight: '100vh',
      }}
    >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `50px 1.0875rem 1.45rem`,
            position: "relative",
            left: "-4px",
            color: "#ffd7d7"
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
      </div>
  );
};
