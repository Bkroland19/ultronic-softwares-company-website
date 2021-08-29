import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from './content';


export default function Web() {

  return (
    <div
      className="min-h-screen flex justify-center items-center flex-col mt-10"
      style={{
        background: '#FEFEFE',
      }}
      id="mywork"
    >
      <h1 className="text-5xl font-dosis font-bold">{content.webDev.title}</h1>
      <p className="text-gray-600 text-2xl font-dosis mb-10">What  we  do  at  Ultronic</p>
      <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">
        <LazyLoadImage
          effect="blur"
          placeholderSrc={content.webDev.imgPlaceholder}
          src={content.webDev.img}
          alt="phone prototype"
          className="m-10 transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5 "
        />
        <div
          className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
          style={{
            border: '1px solid #e5ecf9',
            'translate(-10%, 0%) rotate3d(0.540, -0.95, 0, 22deg) rotateZ(7deg)'
              : '',
            boxShadow:
              '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
          }}
        >
          <ProjectDetail />
        </div>
        <div className="flex justify-center items-center md:hidden">
          <ProjectDetail />
        </div>
      </div>
    </div>
  );
}

const ProjectDetail = () => {

  return (
    <div>
      <h1
      className="mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-dosis font-bold"
      >
        {content.webDev.projectName}
      </h1>
      <p className="mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-dosis ">
        {content.webDev.desc}.
      </p>

    </div>
  );
};
