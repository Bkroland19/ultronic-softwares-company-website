import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import content from './content';


export default function AppDev() {

  return (
    <div
      className=" min-h-screen  flex justify-center items-center  "
      id="mycontact"
    >
      <div
        style={{
          minHeight: '50vh',
          background: '#091C29',
        }}
        className="w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center"
      >
        <LazyLoadImage
          effect="blur"
          src={content.app.img}
          placeholderSrc={content.app.imgPlaceholder}
          alt="profile"
          width="300px"
          className="mt-10 transtion duration-2000 ease-in-out mx-auto mb-10"
        />
        <div className="font-dosis w-4/5 md:w-2/5 mt-5 transtion duration-2000">
        <h1
      className="mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-dosis font-bold text-white"
      >
            {content.app.title}
          </h1>
          <p className="mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-dosis  text-white  ">
        {content.app.desc}.
      </p>
      
        </div>
      </div>
    </div>
  );
}
