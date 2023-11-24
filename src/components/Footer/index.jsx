import { Link } from "react-router-dom";
import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";

import subscribePhoto from "../../img/footer-icon.png";
import logoWhite from "../../img/logo/footer-logo.png";

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-mintGreen mt-36 p-4 sm:p-12 xl:p-16">
      <section className="w-full translate-x-0 -translate-y-32 xl:translate-x-56 flex item-center justify-center xl:w-2/3 rounded-3xl bg-mintGreen/50 shadow-md p-6">
        <div className="flex items-center justify-between w-[77.5rem] h-auto">
          <div>
            <h3 className="text-blackishGreen text-4xl font-bold w-1/2">
              Subscribe Newsletter
            </h3>
            <div className="mt-6 flex flex-col">
              <h4 className="text-blackishGreen/70 text-xl font-bold">
                The Travel
              </h4>
              <span className="mt-2 font-medium font-base">
                Get inspired! Receive travel discounts, tips and behind the
                scenes stories.
              </span>
              <div className="mt-4">
                <input
                  className="p-4 text-colorText text-base rounded-tl rounded-bl w-full sm:w-2/3"
                  type="email"
                  placeholder="Your email address"
                />
                <button className="bg-blackishGreen/90 hover:bg-blackishGreen transition-colors text-sm px-4 py-5 text-white mt-2 sm:ml-4 sm:mt-0 rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <img className="hidden lg:block" src={subscribePhoto} alt="Mail" />
        </div>
      </section>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row items-baseline lg:items-center justify-start space-y-8  lg:space-x-12 lg:space-y-0">
        <div>
          <img src={logoWhite} alt="Footer logo" />
          <div className="flex items-center justify-start mt-6 space-x-3">
            <Link to="/">
              <BiLogoFacebookCircle size="1.25rem" />
            </Link>
            <Link to="/">
              <BiLogoTwitter size="1.25rem" />
            </Link>
            <Link to="/">
              <BiLogoInstagram size="1.25rem" />
            </Link>
            <Link to="/">
              <BiLogoYoutube size="1.25rem" />
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-base text-blackishGreen mb-4">
            Our Destinations
          </h4>
          <div className="flex flex-col items-start justify-center space-y-3">
            <Link className="text-medium text-sm text-blackishGreen/70" to="/">
              Canada
            </Link>
            <Link className="text-medium text-sm text-blackishGreen/70" to="/">
              Alaksa
            </Link>
            <Link className="text-medium text-sm text-blackishGreen/70" to="/">
              France
            </Link>
            <Link className="text-medium text-sm text-blackishGreen/70" to="/">
              Iceland
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-base text-blackishGreen mb-4">
            Our Activities
          </h4>
          <div className="flex flex-col  items-start justify-center space-y-3">
            <Link className="text-medium text-sm text-blackishGreen/70" to="/">
              Northern Lights
            </Link>
            <Link className="text-medium text-sm text-blackishGreen/70" to="/">
              Cruising & sailing
            </Link>
            <Link className="text-medium text-sm text-blackishGreen/70" to="/">
              Multi-activities
            </Link>
            <Link className="text-medium text-sm text-blackishGreen/70" to="/">
              Kayaing
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-base text-blackishGreen mb-4">
            Travel Blogs
          </h4>
          <div className="flex flex-col  items-start justify-center space-y-3">
            <Link className="text-medium text-sm text-blackishGreen/70" to="/">
              Bali Travel Guide
            </Link>
            <Link className="text-medium text-sm text-blackishGreen/70" to="/">
              Sri Lanks Travel Guide
            </Link>
            <Link className="text-medium text-sm text-blackishGreen/70" to="/">
              Peru Travel Guide
            </Link>
            <Link className="text-medium text-sm text-blackishGreen/70" to="/">
              Bali Travel Guide
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-base text-blackishGreen mb-4">
            About Us
          </h4>
          <div className="flex flex-col  items-start justify-center space-y-3">
            <Link className="text-medium text-sm text-blackishGreen/70" to="/">
              Our Story
            </Link>
            <Link className="text-medium text-sm text-blackishGreen/70" to="/">
              Work with us
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-base text-blackishGreen mb-4">
            Contact Us
          </h4>
          <div className="flex flex-col  items-start justify-center space-y-3">
            <Link className="text-medium text-sm text-blackishGreen/70" to="/">
              Our Story
            </Link>
            <Link className="text-medium text-sm text-blackishGreen/70" to="/">
              Work with us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
