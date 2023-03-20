import { NextPage } from 'next';
import { motion } from 'framer-motion';

import GallerySlide from '@/src/components/galleryslide';

const Gallery: NextPage = () => {
    // temporary images
  const tempImages = [
    'v1678613776/1.jpg',
    'v1678613775/2.jpg',
    'v1678613774/3.jpg',
    'v1678613776/1.jpg',
    'v1678613775/2.jpg',
    'v1678613774/3.jpg',
    'v1678613776/1.jpg',
    'v1678613775/2.jpg',
    'v1678613774/3.jpg',
  ];

  // replace with actual cloudinary url
  tempImages.forEach((element, index) => {
    tempImages[
      index
    ] = `https://res.cloudinary.com/dpfpk49oa/image/upload/${element}`;
  });

  return (
    <div className="min-h-screen w-full overflow-x-hidden overflow-y-auto text-gray-100">
      {/* Header Part */}
      <div className="h-[600px] w-full relative flex bg-black">
        <video
          autoPlay
          loop
          muted
          className="object-cover object-center w-full h-full opacity-75"
        >
          <source src="ocean.mp4" type="video/mp4"></source>
        </video>
        <motion.div
          animate={{ y: [20, 0], opacity: [0, 1], repeatCount: 1 }}
          transition={{ duration: 3 }}
          className="absolute top-1/2 flex w-full justify-center flex-col"
        >
          <h1 className="text-4xl sm:text-6xl text-center">
            The Wall of Incridea
          </h1>
          <h2 className="text-2xl sm:text-4xl text-center">
            Incridea Over the Years
          </h2>
        </motion.div>
        <motion.div
          animate={{ y: [30, 0], opacity: [0, 1], repeatCount: 1 }}
          transition={{ duration: 3 }}
          style={{ x: '-50%' }}
          className="h-1 w-40 flex bg-gray-100 absolute bottom-8 left-1/2"
        ></motion.div>
      </div>
      <div className="bg-gradient-to-br from-[#001d67]  to-[#040c2b] pt-12">
        <GallerySlide title={'2022'} imageArr={tempImages} />
        <GallerySlide title={'2020'} imageArr={tempImages} />
        <GallerySlide title={'2019'} imageArr={tempImages} />
      </div>
    </div>
  );
};

export default Gallery;
