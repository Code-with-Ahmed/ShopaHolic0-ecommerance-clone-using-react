import { useState } from 'react'

const SupportIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative transform transition-transform duration-300 hover:scale-110"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className='mt-3'><i className="fa-solid fa-phone-volume  text-5xl" style={{color: "#0f1ab3"}}></i></button>
      <button className="h-full">
        <span
        className={`mt-[21.3%] h-full font-medium absolute  top-0 right-0 bg-white  text-xs w-[3.5rem]  text-right transform ${
          isHovered ? 'translate-y-0' : 'opacity-0'
        } transition-transform duration-300`}
      >
      <p className="mt-4">Support</p>
      </span></button>
    </div>
  )
}

export default SupportIcon;
