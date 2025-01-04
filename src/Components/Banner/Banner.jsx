import React from "react";
import displayImg from "../../assets/home.png";
import { Link } from "react-router-dom";
import {
  FaArrowDown,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { LuMailOpen } from "react-icons/lu";

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-white bg-[var(--bg-color)] p-10">
      {/* Text Section */}
      <div className="p-14 flex-1">
        <h5 className="text-2xl font-medium">Hello, I'm Abu Bokkor Siddik</h5>
        <h1 className="mt-4 font-extrabold text-[var(--main-color)] text-[56px] md:text-[72px] leading-tight">
          Front end <br /> Developer
        </h1>

        {/* Social Links */}
        <div className="mt-6">
          <div className="flex items-center mb-7">
            <h2 className="mr-5 text-lg font-semibold">Follow me on</h2>
            <div className="flex items-center gap-4 text-[var(--main-color)] text-xl">
              <a
                href="https://github.com/Abubokkor98"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-color)] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://t.me/AbuBokkor98"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-color)] transition-colors"
              >
                <FaTelegram />
              </a>
              <a
                href="https://twitter.com/AB_coc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-color)] transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/ParadoxicalAb"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-color)] transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/axdab/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-color)] transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Buttons */}
          <div className="button flex gap-4">
            <Link
              to="mailto:abubokkorsiddik698@hotmail.com"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--main-color)] text-[var(--bg-color)] font-semibold rounded-lg transition-all hover:shadow-[0_0_20px_var(--main-color)]"
            >
              <LuMailOpen />
              Mail me
            </Link>
            <a
              href="https://drive.google.com/file/d/1oW7zbt3rhbwYBF_Z7zWGEqjb3P7f4NYi/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-transparent border border-[var(--main-color)] text-[var(--main-color)] font-semibold rounded-lg transition-all hover:bg-[var(--main-color)] hover:text-[var(--bg-color)]"
            >
              <FaArrowDown />
              Download my CV
            </a>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-[460px] h-[460px] flex items-center justify-center">
        <img
          src={displayImg}
          alt="Profile"
          className="w-full h-full object-contain hover:shadow-[0_0_30px_var(--main-color)] transition-shadow"
        />
      </div>
    </div>
  );
}
