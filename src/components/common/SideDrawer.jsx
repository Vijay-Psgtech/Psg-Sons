import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronUp, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const SideDrawer = ({ isOpen, onClose, data }) => {
    const [isBrowser, setIsBrowser] = useState(false);
    const scrollRef = useRef();

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    // Lock background scroll when open
    useEffect(() => {
        if (isOpen && window.fullpage_api) {
            window.fullpage_api.setAllowScrolling(false); // disable scroll
            window.fullpage_api.setKeyboardScrolling(false); // disable keyboard nav
        } else if (window.fullpage_api) {
            window.fullpage_api.setAllowScrolling(true);
            window.fullpage_api.setKeyboardScrolling(true);
        }
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
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Background Overlay */}
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[9998] bg-black/70 backdrop-grayscale"
                    />

                    {/* Drawer */}
                    <motion.div
                        key="drawer"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed right-0 top-0 z-[9999] bg-amber-50 h-[100dvh] flex flex-col p-8 text-black w-10/12 md:w-[30rem]"
                    >
                        {/* Scrollable Content */}
                        <div ref={scrollRef} className="h-[calc(100%-5rem] overflow-y-hidden force-scroll">
                            <div className="flex justify-center">
                                <img
                                    className="w-full object-contain max-h-[15rem]"
                                    src={data.image}
                                    alt={data.title}
                                />
                            </div>
                            <div>
                                <h2 className="font-bold mt-8 text-2xl">{data.title}</h2>
                                {data.website && (
                                    <a
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-semibold flex items-center gap-2 bg-amber-100 mt-1 w-fit text-sm px-3 py-1 rounded-full"
                                    href={data.website}
                                    >
                                    Visit Website <FiExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                                {data.content.map((para, idx) => (
                                    <p key={idx} className="mt-4 pb-4 whitespace-pre-line">{para}</p>
                                ))}
                            </div>

                        {/* Scroll Buttons */}
                        <div className="flex justify-center gap-6 py-6 sticky bottom-0 bg-amber-50">
                            <button
                            onClick={handleScrollUp}
                            className="bg-white drop-shadow-lg px-6 py-3 rounded-full"
                            >
                            <FaChevronUp />
                            </button>
                            <button
                            onClick={handleScrollDown}
                            className="bg-white drop-shadow-lg px-6 py-3 rounded-full"
                            >
                            <FaChevronDown />
                            </button>
                        </div>
                        </div>

                        {/* Close Button */}
                        <button
                        onClick={onClose}
                        className="absolute top-2 -left-4 bg-amber-50 shadow-md w-8 h-8 rounded-full flex items-center justify-center"
                        >
                        <FaChevronRight />
                        </button>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );

  return createPortal(drawerContent, document.body);
};

export default SideDrawer;
