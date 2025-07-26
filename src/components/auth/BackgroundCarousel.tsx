import { useState, useEffect } from 'react';

import backgorundImage1 from '@/assets/images/auth/auth-bg-1.png';
import backgorundImage2 from '@/assets/images/auth/auth-bg-2.png';
import backgorundImage3 from '@/assets/images/auth/auth-bg-3.png';

const BackgroundCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const backgroundImages = [backgorundImage1, backgorundImage2, backgorundImage3];

    const carouselContent = [
        {
            quote: "List and manage your properties",
            description: " Add property details, upload high-quality images, and make updates whenever needed."
        },
        {
            quote: "Track rent payments in real-time",
            description: " View payment history, see who’s paid and who hasn’t, and download receipts."
        },
        {
            quote: "Access contracts and reports",
            description: "Download signed lease agreements, upload house rules, and view performance reports."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 6000);

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    return (
        <div className="bg-gray-900 relative hidden px-5 py-6 lg:block min-h-screen">

            <div className="absolute inset-0">
                {backgroundImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Background ${index + 1}`}
                        className={`absolute inset-0 h-full w-full ${index === 0 ? 'object-right' : 'object-end'} transition-opacity duration-1000 ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}

                <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className='absolute top-0 left-0 right-0 bottom-32 mx-4 xl:mx-12'>
                <div className="relative z-10 h-full w-full flex flex-col">
                    <div className="bg-[#404040]/70 rounded-lg mt-auto space-y-3 px-2 py-3 h-auto min-h-[280px] xl:min-h-[250px] relative overflow-hidden">
                        {carouselContent.map((content, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 px-6 py-3 transition-all duration-1000 transform space-y-3 ${
                                    index === currentIndex 
                                        ? 'translate-x-0 opacity-100' 
                                        : index < currentIndex 
                                            ? '-translate-x-full opacity-0' 
                                            : 'translate-x-full opacity-0'
                                }`}
                            >
                                <div className="flex">
                                    <h2 className='font-semibold text-[48px] leading-[48px] text-white'>{content.quote}</h2>
                                </div>
                                <div>
                                    <p className="text-[#ffffff] text-[20px] font-normal leading-[26px]">
                                        {content.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackgroundCarousel;