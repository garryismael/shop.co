import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa6";

import Logo from "../Logo";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-8">
      <div className="px-4">
        <div className="grid grid-cols-2  gap-y-6 pb-10 border-b border-black/10">
          <div className="col-span-2">
            <Logo />
            <p className="pt-3.5 text-sm font-satoshi-regular leading-5 text-black/60">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="pt-5 flex items-center gap-3">
              <button className="social">
                <FaTwitter />
              </button>
              <button className="social">
                <FaFacebookF />
              </button>
              <button className="social">
                <FaInstagram />
              </button>
              <button className="social">
                <FaGithub />
              </button>
            </div>
          </div>
          <div>
            <h3 className="uppercase text-black leading-[18px] text-sm font-satoshi-medium font-medium tracking-[3px]">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <Link href="#" className="footer__link">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="footer__link">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="footer__link">
                  Works
                </Link>
              </li>
              <li>
                <Link href="#" className="footer__link">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-black leading-[18px] text-sm font-satoshi-medium font-medium tracking-[3px]">
              Help
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <Link href="#" className="footer__link">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="#" className="footer__link">
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link href="#" className="footer__link">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="footer__link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-black leading-[18px] text-sm font-satoshi-medium font-medium tracking-[3px]">
              Faq
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <Link href="#" className="footer__link">
                  Account
                </Link>
              </li>
              <li>
                <Link href="#" className="footer__link">
                  Manage Deliveries
                </Link>
              </li>
              <li>
                <Link href="#" className="footer__link">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="#" className="footer__link">
                  Payment
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-black leading-[18px] text-sm font-satoshi-medium font-medium tracking-[3px]">
              Resources
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <Link href="#" className="footer__link">
                  Free eBook
                </Link>
              </li>
              <li>
                <Link href="#" className="footer__link">
                  Development Tutorial
                </Link>
              </li>
              <li>
                <Link href="#" className="footer__link">
                  How to Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="footer__link">
                  Youtube Playlist
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-4 pb-20 flex flex-col items-center gap-4">
          <p className="text-sm text-black/60">Shop.co&copy; 2020-{year}. All Rights Reserved</p>
          <div className="payments">
            <Link href="">
              <Image src="/images/Visa.svg" width="34" height="12" alt="Visa" />
            </Link>
            <Link href="#">
              <Image
                src="/images/Mastercard.svg"
                width="26"
                height="16"
                alt="Mastercard"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/Paypal.svg"
                width="35"
                height="10"
                alt="PayPal"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/ApplePay.svg"
                width="28"
                height="12"
                alt="ApplePay"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/GooglePay.svg"
                width="29"
                height="13"
                alt="GooglePay"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
