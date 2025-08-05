import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FaChevronUp, FaChevronDown, FaChevronRight } from "react-icons/fa";

const SideDrawer = ({ isOpen, onClose, data }) => {
    const [isBrowser, setIsBrowser] = useState(false);
    const [visible, setVisible] = useState(false);
    const scrollRef = useRef();

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            document.body.style.overflow = 'hidden'; // lock background scroll
        } else {
            document.body.style.overflow = ''; // restore scroll
            setTimeout(() => setVisible(false), 300); // wait for animation before unmount
        }
        return () => (document.body.style.overflow = '');
    }, [isOpen]);

    if (!data || !isBrowser) return null;

    const handleScrollUp = () => {
        scrollRef.current?.scrollBy({
        top: -200,
        behavior: 'smooth'
        });
    };

    const handleScrollDown = () => {
        scrollRef.current?.scrollBy({
        top: 200,
        behavior: 'smooth'
        });
    };

  const drawerContent = (
    <>
    {isOpen && (
        <>
            <div
                onClick={onClose}
                className="fixed inset-0 z-[9998] bg-black/70 bg-opacity-30 backdrop-grayscale transition-opacity duration-300"
            />
            <div
                className={`pointer-events-auto anim-slo bg-amber-50 fixed right-0 mr-0 ml-auto h-[100dvh] flex flex-col p-8 text-black w-10/12 md:w-[30rem] toppppp top-0 z-[9999]
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                
            >
                <div ref={scrollRef} className="h-[calc(100%-5rem] overflow-y-hidden force-scroll">
                    <div className="flex justify-center">
                    <img
                        className="w-full object-contain  max-h-[15rem]"
                        src={data.image}
                        alt={data.title}
                    />
                    </div>
                    <div>
                        <h2 className="font-bold mt-8 text-2xl">{data.title}</h2>
                        {data.website && (
                            <a target='_blank' className='font-semibold bg-amber-100 mt-1 block w-fit text-sm px-3 p-1 rounded-full' href={data.website}>
                                Visit Website
                            </a>
                        )}
                        {data.content.map((para, idx)=>(
                            <p key={idx} className="mt-4 pb-4 force-scroll isolate whitespace-pre-line align-bottom">{para}</p>
                        ))}
                    </div>
                    

                    {/* Scroll Buttons */}
                    <div className="flex justify-center gap-6 mt-auto py-6 sticky bottom-0 bg-amber-50">
                    <button
                        onClick={handleScrollUp}
                        className="bg-white drop-shadow-lg px-6 py-3 rounded-full "
                    >
                        <FaChevronUp />
                    </button>
                    <button
                        onClick={handleScrollDown}
                        className="bg-white drop-shadow-lg px-6 py-3 rounded-full "
                    >
                        <FaChevronDown />
                    </button>
                    </div>

                    {/* Close Button */}
                    <button
                    onClick={onClose}
                    className="absolute top-2 -left-4 bg-amber-50 shadow-md w-8 h-8 rounded-full flex items-center justify-center"
                    >
                    <FaChevronRight />
                    </button>
                </div>
            </div>
        </>
    )}
    </>
   
  );

 return visible ? createPortal(drawerContent, document.body) : null;
};

export default SideDrawer;
