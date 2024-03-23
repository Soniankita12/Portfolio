import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const LeftSider = () => {
  return (
    <div className="fixed left-0 bottom-0 px-10 text-gray-600 sm:static">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            className="cursor-pointer hover:text-white"
            href="mailto:ankitasoni2211104@gmail.com"
            target="_blank"
            rel="noreferrer">
            <BiLogoGmail size={22} />
          </a>
          <a
            lassName="cursor-pointer hover:text-white"
            href="https://www.linkedin.com/in/ankita-soni-75a5011a4"
            target="_blank"
            rel="noreferrer">
            <CiLinkedin c size={25} />
          </a>
          <a
            className="cursor-pointer hover:text-white"
            href="https://github.com/soniankita12"
            target="_blank"
            rel="noreferrer">
            <FaGithub size={22} />
          </a>
          <a
            className="cursor-pointer hover:text-white"
            href="google.com"
            target="_blank">
            <CiFacebook size={22} />
          </a>
          <a
            className="cursor-pointer hover:text-white"
            href="google.com "
            target="_blank">
            <FaInstagram size={22} />
          </a>
        </div>
        <div className="w-[1px] h-32 m-3 bg-[#63cbd5] sm:w-32 sm:h-[1px]"></div>
      </div>
    </div>
  );
};

export default LeftSider;
