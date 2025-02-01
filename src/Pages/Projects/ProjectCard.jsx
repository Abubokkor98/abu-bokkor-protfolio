import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ProjectCard = ({
  images,
  title,
  description,
  techStack,
  features,
  liveLink,
  clientLink,
  serverLink
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-100 bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image Section with Swiper */}
      <div className="w-full h-56 md:h-auto lg:w-1/2">
        <Swiper
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full">
                <img
                  src={img}
                  alt={`${title}-image-${index}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-2">{description}</p>

          <div className="text-gray-600 mb-4">
            <h4 className="font-semibold text-lg mb-2">Features:</h4>
            <ul className="list-disc list-inside">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-teal-500 text-white text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:from-blue-500 hover:to-teal-500 transition"
          >
            <span>Live Demo</span>
            <FaExternalLinkAlt />
          </a>
          <a
            href={clientLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-900 transition"
          >
            <span>Client Repo</span>
            <FaGithub />
          </a>
          <a
            href={serverLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-900 transition"
          >
            <span>Server Repo</span>
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;