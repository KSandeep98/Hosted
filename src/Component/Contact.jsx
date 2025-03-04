import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";


const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div className="bg-[#69c] py-16 mt-30">
      <div id="contact" className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">

          {/* Left Side: Contact Form */}
          <div className="md:w-2/3">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Get In Touch</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                required
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Contact Info */}
          <div className="md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-blue-600" /> Nagpur, Maharashtra
            </p>
            <p className="text-gray-600 flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-blue-600" /> 9049xxxx44
            </p>
            <p className="text-gray-600 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-600" /> HostedMinds@gmail.com
            </p>

            {/* Social Links */}
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <a href="www.google.com" className="text-blue-600 hover:text-blue-800 text-2xl">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="www.google.com" className="text-blue-400 hover:text-blue-600 text-2xl">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="www.google.com" className="text-red-600 hover:text-red-800 text-2xl">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-black text-sm">
        &copy; 2025 Design by{" Bhaiya Ji Software Solution "}
        <br />
        <a href="http://www.hostedminds.com" className="text-blue-600 hover:underline">
          HostedMinds
        </a>
      </div>
    </div>
  );
};

export default Contact;
