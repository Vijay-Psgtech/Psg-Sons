import React, { useRef, useState } from 'react';
import SideDrawer from '../components/common/SideDrawer';
import AnimatedSection from '../components/common/AnimatedSection';


const drawerData = 
  {
    title: 'P. S. Govindaswamy Naidu',
    image: '/images/trustees/Fpsg.webp',
    content: [ 
      'The legacy of the PSG institutions founded by Shri.P.S.Govindaswamy Naidu has been handed down through several generations. Each time the baton was handed down to the successor of the Trust, these golden words, "Let there be charity, so others can share my family’s prosperity" are embedded firmly and hence the Founder’s vision has only grown richer and more profound. Education, one of the most treasured clauses in the Trust deed, attained sharper focus each growing year while each succeeding Head of Trust, carried the dreams of the Founder on their shoulders towards fulfillment of the Vision and the betterment of the Future.',

    ]
  };

const Legacy2 = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerClick = () => {
      setOpenDrawer(true);
  };


  return (
    <AnimatedSection bgImage="/images/bg2.jpg">
      {/* Foreground content */}
      <div className="relative z-10 text-gray-900 px-4">
        <p className="text-md tracking-widest uppercase font-semibold">Chapter 2</p>
        <h1 className="text-2xl md:text-5xl mt-5 font-extrabold tracking-tight w-10/12 lg:w-full text-center mx-auto">
          Sama Naidu 
            <br/>
            <div className="mt-4 md:mt-8 w-1/4 mx-auto border-b-red-600 border-b-2"></div>
        </h1>
        <p className="w-10/12 md:w-3/4 lg:w-1/2 mx-auto mt-4 md:mt-16 text-justify md:text-center text-base md:text-lg font-medium text-gray-800">
          Venkatarama Naidu was a member of the esteemed 'Periya Veedu' family and the grandson of Ganga Naidu. Venkatarama Naidu had four sons namely Dharmakartha Muthu Naidu, Lingappa Naidu, Sama Naidu, and Rangaswamy Naidu. Sama Naidu, known for his friendly demeanor and immense generosity, earned the affection of Poolai Medu residents.
        </p>
        <div className='text-center pb-8 w-10/12 md:w-3/4 lg:w-1/2 mx-auto mt-6 lead'>
            Sama Naidu's marriage to Ranganayaki Ammal resulted in the birth of four sons:
            <ul className='grid grid-cols-2 gap-4 font-semibold justify-center mt-4 '>
                <li className='text-sm flex justify-center items-center min-h-[5rem] p-3 rounded-lg bg-white drop-shadow-xl  px-5'>
                    P.S. Narappa Naidu
                </li>
                <li className='text-sm flex justify-center items-center min-h-[5rem] cursor-pointer p-3 rounded-lg bg-white drop-shadow-xl  px-5' onClick={() => handleDrawerClick()}>
                    P.S. Govindaswamy Naidu
                </li>
                <li className='text-sm flex justify-center items-center min-h-[5rem] p-3 rounded-lg bg-white drop-shadow-xl  px-5'>
                    P.S. Kondaswamy Naidu
                </li>
                <li className='text-sm flex justify-center items-center min-h-[5rem] p-3 rounded-lg bg-white drop-shadow-xl  px-5'>
                    P.S. Krishnamma Naidu
                </li>
            </ul>
        </div>
      </div>
      <SideDrawer
        isOpen={openDrawer}
        onClose={() => setOpenDrawer(false)}
        data={drawerData}
      />
    </AnimatedSection>
  );
};

export default Legacy2;
