import React from 'react';
import Wrapper from '../../shared/wrapper/Wrapper';
import Heading from '../../shared/heading/Heading';
import { IoCodeSlash } from "react-icons/io5";
import { PiPenNib, PiShapes } from "react-icons/pi";
import { BsLayers } from "react-icons/bs";

const Services = () => {
    const services = [
        { icon: <IoCodeSlash />, title: 'Web Development', description: ' Build responsive and interactive web applications using the latest technologies.' },
        { icon: <PiShapes />, title: 'UI/UX Design', description: ' Provide our customers with optimized user-friendly experiences to increase the efficiency of digital products.' },
        { icon: <PiPenNib />, title: 'Mobile App Development', description: 'Build responsive and interactive app using the latest technologies like react native. ' },
        { icon: <BsLayers />, title: 'Social Media Post Design', description: ' Design engaging social media posts that capture attention and boost engagement.' },
    ];

    const ServiceCard = ({ icon, title, description }) => {
        return (
            <div className="pt-7 xl:pt-12 group px-4 py-4 xl:px-8 h-[220px] xl:h-[250px] rounded-2xl xl:rounded-2xl border hover:border-primary-white/20 ease-linear duration-200 transition-all border-primary-white/10">
                <div className="flex items-start gap-3 xl:gap-6">
                    <div className="text-2xl xl:text-4xl text-white mt-1 xl:mt-2 group-hover:animate-flip-twice">
                        {icon}
                    </div>
                    <div className='flex flex-col justify-start gap-5 items-start'>
                        <h3 className="text-[20px] xl:text-[36px] font-semibold text-white">
                            {title}
                        </h3>
                        <p className="xl:text-xl text-secondary-text xl:pr-6">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div id='services' className='div-container bg-primary-gray min-h-screen py-20'>
            <Wrapper>
                <div className='flex flex-col h-full justify-center items-center w-full px-3 xl:px-0'>
                    <Heading
                        tag="h1"
                        text="Services"
                        styleType="h1"
                    />
                    <Heading
                        tag="h2"
                        text="Crafting Solutions Tailored to Your Needs"
                        styleType="h2"
                        maxWidth="1000px"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 xl:mt-20">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Services;
