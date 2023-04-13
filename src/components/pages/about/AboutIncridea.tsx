import Image from 'next/image';
import { FC } from 'react';
import { motion,useScroll,useTransform } from 'framer-motion';

const AboutIncridea: FC = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress,[0,1],["0%","-100%"])
  return (
    <>
      <div className="relative h-96 w-full overflow-hidden">
        <motion.div style={{y}} className='relative w-full h-full'>
        <Image
          src="https://incridemo.web.app/events/EC/SHARKTANK.jpg"
          alt="Incridea Banner"
          width={500}
          height={500}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-black z-10"></span>
        </motion.div>        
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <h1
              data-scroll
              data-scroll-speed="2"
              className={`titleFont text-4xl lg:text-7xl text-center p-5 text-white`}
            >
              About Incridea
            </h1>
          </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 lg:p-10 p-5 basis-1/2 my-5">
        <Image
          src="/assets/png/logo-black.png"
          alt="Incridea Logo"
          width={500}
          height={500}
        />

        <div className="text-white text-lg lg:text-xl text-justify basis-1/2 bodyFont">
          Never gonna give you up Never gonna let you down Never gonna run
          around and desert you Never gonna make you cry Never gonna say goodbye
          Never gonna tell a lie and hurt you Never gonna give you up Never
          gonna let you down Never gonna run around and desert you Never gonna
          make you cry Never gonna say goodbye Never gonna tell a lie and hurt
          you
          <div className="py-5" />
          Never gonna give you up Never gonna let you down Never gonna run
          around and desert you Never gonna make you cry Never gonna say goodbye
          Never gonna tell a lie and hurt you Never gonna give you up Never
          gonna let you down Never gonna run around and desert you Never gonna
          make you cry Never gonna say goodbye Never gonna tell a lie and hurt
          you
        </div>
      </div>
    </>
  );
};

export default AboutIncridea;
