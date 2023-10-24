import React, { useState, useEffect } from 'react'
import {
  background,
  black_shadow,
  fog_1,
  fog_2,
  fog_3,
  fog_4,
  fog_5,
  fog_6,
  fog_7,
  mountain_1,
  mountain_2,
  mountain_3,
  mountain_4,
  mountain_5,
  mountain_6,
  mountain_7,
  mountain_8,
  mountain_9,
  mountain_10,
  sun_rays
} from '../assets/images'
function Homepage() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2
      })
    }

    setElements(document.querySelectorAll(".parallax"));
    console.log(document.querySelectorAll(".parallax"));
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  useEffect(() => {
    elements.forEach(el => {
      const x = parseFloat(el.getAttribute('data-x'));
      const y = parseFloat(el.getAttribute('data-y'));
      el.style.transform = `translate(calc(-50% + ${(mousePosition.x * -x)}px), calc(-50% + ${mousePosition.y * -y}px))`;
    })
  }, [mousePosition, elements])
  return (
    <main>
      <div className="vingette" />
      <img src={background} alt="" className="parallax bg-img" data-x={0.05} data-y={0.05} />
      <img src={fog_7} alt="" className="parallax fog-7" data-x={0.1} data-y={0.1} />
      <img src={mountain_10} alt="" className="parallax mountain-10" data-x={0.15} data-y={0.15} />
      <img src={fog_6} alt="" className="parallax fog-6" data-x={0.2} data-y={0.2} />
      <img src={mountain_9} alt="" className="parallax mountain-9" data-x={0.25} data-y={0.25} />
      <img src={mountain_8} alt="" className="parallax mountain-8" data-x={0.3} data-y={0.3} />
      <img src={fog_5} alt="" className="parallax fog-5" data-x={0.35} data-y={0.35} />
      <img src={mountain_7} alt="" className="parallax mountain-7" data-x={0.4} data-y={0.4} />
      <div className="parallax text" data-x={0.45} data-y={0.45}>
        <h2>Hello</h2>
        <h1>World</h1>
      </div>
      <img src={mountain_6} alt="" className="parallax mountain-6" data-x={0.5} data-y={0.5} />
      <img src={fog_4} alt="" className="parallax fog-4" data-x={0.55} data-y={0.55} />
      <img src={mountain_5} alt="" className="parallax mountain-5" data-x={0.6} data-y={0.6} />
      <img src={fog_3} alt="" className="parallax fog-3" data-x={0.65} data-y={0.65} />
      <img src={mountain_4} alt="" className="parallax mountain-4" data-x={0.7} data-y={0.7} />
      <img src={mountain_3} alt="" className="parallax mountain-3" data-x={0.75} data-y={0.75} />
      <img src={fog_2} alt="" className="parallax fog-2" data-x={0.8} data-y={0.8} />
      <img src={mountain_2} alt="" className="parallax mountain-2" data-x={0.85} data-y={0.85} />
      <img src={mountain_1} alt="" className="parallax mountain-1" data-x={0.9} data-y={0.9} />
      <img src={sun_rays} alt="" className="sun-rays" />
      <img src={black_shadow} alt="" className="black-shadow" />
      <img src={fog_1} alt="" className="parallax fog-1" data-x={0.15} data-y={0.15} />
    </main>
  )
}

export default Homepage