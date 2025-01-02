
import React from 'react';
import { FaGraduationCap, FaCertificate, FaBookOpen } from 'react-icons/fa';
import { MdOutlineSupportAgent } from 'react-icons/md';

const facData = [
  {
    title: "Expert Instructors",
    description: "Learn from experienced instructors and master programming.",
    icon: <FaGraduationCap />,
  },
  {
    title: "Certified Courses",
    description: "Receive certificates upon course completion.",
    icon: <FaCertificate />,
  },
  {
    title: "Comprehensive Content",
    description: "Access in-depth and up-to-date materials.",
    icon: <FaBookOpen />,
  },
  {
    title: "24/7 Support",
    description: "Get help anytime from our dedicated team.",
    icon: <MdOutlineSupportAgent />,
  },
];

const Facilities = () => {
  return (
    <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
      {facData.map((item) => (
        <div
          key={item?.title}
          className="flex items-center sm:gap-2 lg:gap-3 flex-col sm:flex-row"
        >
          <span className="text-blue-600 text-2xl sm:self-start">{item?.icon}</span>
          <div className="text-center sm:text-left">
            <h2 className="font-bold text-base uppercase">{item?.title}</h2>
            <p className="text-gray-600 text-sm">{item?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facilities;
