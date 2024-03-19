import React from 'react';
import image1 from '../../../assets/gallary/image1.png';
import image2 from '../../../assets/gallary/image2.png';

const Gallery = () => {
  return (
    <div className='md-w-[80%] mx-auto my-28'>
      <div className="mt-8"> 
        <h1 className='text-5xl font-bold text-center'>Our Gallery</h1>
      </div>
      <div className="flex flex-wrap justify-center mt-12">
        <div className='mb-4 md:mb-0 md:w-full md:max-w-[720px]'>
            <img src={image1} alt="" className='md:h-[720px] w-full mx-auto rounded-sm' />
        </div>
        <div className="flex justify-center md:w-full md:max-w-[720px]">
            <div className="flex flex-wrap justify-center">
                {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="md:w-[50%] md:px-2 mb-4 rounded-sm">
                        <img src={image2} alt="" className='md:h-[350px] w-full' />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
