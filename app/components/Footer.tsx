import Image from "next/image";
import logo from "@/public/moonlamplogo.png";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaYoutube, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="w-full">
        <div className="flex">
          <div className="w-full">
            <div className="flex flex-col items-center justify-center">
              <Image src={logo} width={200} height={200} alt="moon lamp" className="mt-2" />

              <ul className="flex justify-center mt-8 gap-3">
                <li>
                  <div className="w-11 h-11 rounded flex items-center justify-center text-lg bg-gray-100 text-secondary hover:text-white hover:bg-primary transition-all">
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100032941142706"><AiFillFacebook size={25} /></a>
                  </div>
                </li>
                <li>
                  <div className="w-11 h-11 rounded flex items-center justify-center text-lg bg-gray-100 text-secondary hover:text-white hover:bg-primary transition-all">
                    <a target="_blank" href="https://instagram.com/kairat_nobels"><AiFillInstagram size={25} /></a>
                  </div>
                </li>
                <li>
                  <div className="w-11 h-11 rounded flex items-center justify-center text-lg bg-gray-100 text-secondary hover:text-white hover:bg-primary transition-all">
                    <a target="_blank" href="https://www.linkedin.com/in/kairat-zholoi-uulu-11a968268/"><AiFillLinkedin size={25} /></a>
                  </div>
                </li>
                <li>
                  <div className="w-11 h-11 rounded flex items-center justify-center text-lg bg-gray-100 text-secondary hover:text-white hover:bg-primary transition-all">
                    <a target="_blank" href="https://telegram.me/kairat_nobels"><FaTelegram size={25} /></a>
                  </div>
                </li>
                <li>
                  <div className="w-11 h-11 rounded flex items-center justify-center text-lg bg-gray-100 text-secondary hover:text-white hover:bg-primary transition-all">
                    <a target="_blank" href="https://www.youtube.com/channel/UCvRtT7zqyYlJVY34IG_bSxQ"><FaYoutube size={25} /></a>
                  </div>
                </li>
              </ul>
              <p className=" mt-8">© 2023 Moonlamp.com By Kairat-Nobels</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
