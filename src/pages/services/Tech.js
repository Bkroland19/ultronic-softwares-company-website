import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import content from './content';

export default function Tech() {
  return (
    <div
      className="min-h-screen flex items-center justify-center flex-col"
      style={{
        background: '#eee',
      }}
    >
    <h1
      className="mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-dosis font-bold text-black"
      >Used Technologies</h1>
      <div>
        <div className="flex flex-wrap justify-center">
          {content.usedTech.tech.map((tech, index) => (
            <span
              key={index}
              className={` h-40 w-40 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-2 ${
                index % 0.5 !== 0? 'animate-bounce' : 'animate-bounceFirst'
              }`}
            >
              <LazyLoadImage effect="blur" src={tech.img} alt={tech.alt} />
            </span>
          ))}
        </div>
      </div>
      <p className="mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-dosis ">
        {content.usedTech.desc}.
      </p>
    </div>
  );
}
