'use client';
import Image from 'next/image';
import React from 'react';
import x from '@/public/images/x.png';
import y from '@/public/images/xx.png';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'Order App',
      description:
        'This is an application designed for restaurants to manage orders efficiently. It offers a user-friendly interface to browse the menu, place orders, and track them in real time.',
      url: 'https://order-app-6cf00.web.app/',
      image: x,
      features: ['Real-time Order Tracking', 'Menu Management', 'Customer-Friendly Interface'],
    },
    {
      id: 2,
      title: 'Rental App',
      description:
        'This application is dedicated to managing house rentals. It provides a platform to browse available properties, view details, and contact property owners easily.',
      url: 'https://bilal-uq1e.vercel.app/',
      image: y,
      features: ['Property Listings', 'Contact Owners', 'Detailed Descriptions'],
    },
  ];

  return (
    <div className="min-h-screen py-8 px-3 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl font-bold text-indigo-500 mb-6 text-center">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-3 sm:p-5">
                <h2 className="text-base sm:text-lg font-bold text-gray-800">{project.title}</h2>
                <p className="text-sm sm:text-base text-gray-600 mt-2">{project.description}</p>
                <ul className="mt-3 text-sm text-gray-500">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="inline-block text-blue-500 mr-2">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-medium text-sm sm:text-base"
                >
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;