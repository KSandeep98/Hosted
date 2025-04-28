
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="w-full bg-[#69c] text-white py-10 px-6 flex flex-col md:flex-row justify-evenly items-center md:items-start text-center md:text-left z-50 mt-auto">
            {/* Left Section */}
            <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold">HostedMinds</h3>
                <p className="mt-2 hover:text-white">Made by Bhaiyaji Initiative</p>
                <div className="flex space-x-4 mt-4 justify-center md:justify-start">
                    <a href="https://www.facebook.com/hostedminds" target="_blank" className="text-blue-700 hover:text-white text-2xl" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.twitter.com/hostedminds" target="_blank" className="text-blue-500 hover:text-white text-2xl" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCMMFpvruEVHe6VAggzb85sA" target="_blank" className="text-red-600 hover:text-white text-2xl" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="https://www.linkedin.com/company/hostedminds/" target="_blank" className="text-blue-800 hover:text-white text-2xl" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.instagram.com/hostedminds/" target="_blank" className="text-pink-500 hover:text-white text-2xl" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    
                </div>
                <p className="text-xs md:mt-3 text-gray-200 text-center w-full hidden md:block">
                2024 © All Rights Reserved HostedMinds
            </p>
            </div>

            {/* About & Services Section */}
            <div className="flex flex-row md:flex-row justify-center text-start gap-6 md:gap-40">
                {/* About */}
                <div className="flex flex-col space-y-2">
                    <h4 className="text-lg font-semibold">About</h4>
                    <p className="hover:text-black cursor-pointer">Our Mission</p>
                    <p className="hover:text-black cursor-pointer">Privacy Policy</p>
                    <p className="hover:text-black cursor-pointer">Terms of Service</p>
                </div>

                {/* Services */}
                <div className="flex flex-col space-y-2">
                    <h4 className="text-lg font-semibold">Services</h4>
                    <p className="hover:text-black cursor-pointer">Shop</p>
                    <p className="hover:text-black cursor-pointer">Join our Team</p>
                    <p className="hover:text-black cursor-pointer">Partner with Us</p>
                </div>
            </div>
            <div>
            <p className="text-xs mt-4 text-gray-200 text-center w-full block md:hidden">
                2024 © All Rights Reserved HostedMinds
            </p>
            </div>
        </footer>
    );
};

export default Footer;
