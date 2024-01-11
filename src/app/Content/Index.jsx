"use client";
import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";

export default function Index() {
  return (
    <>
      <nav className="bg-primary fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center gap-4 justify-center">
            <a
              href="https://www.instagram.com/vavafebratama/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white hover:text-gray-300" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-white hover:text-gray-300" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <PiTelegramLogo className="text-white hover:text-gray-300" />
            </a>
          </div>
          <div className="items-center justify-between flex">
            <ul className="flex ms-auto gap-8">
              <li>
                <a href="#" className="text-white" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="bg-primary container relative" id="home">
        <div className="mt-12 mx-36 flex flex-row justify-between ">
          <div className=" py-10 text-left">
            <h1 className="text-white font-medium text-5xl">
              I am Febratama Agni
            </h1>
            <h2 className="text-white mt-4 font-medium text-5xl">
              A Web Developer
            </h2>
            <div className="mt-4">
              <TypeAnimation
                cursor={true}
                sequence={[
                  "I Can Help You Build A Marketplace",
                  2000,
                  "I Can Help You Build A Landing Page",
                  2000,
                  "I Can Help You Build A Online Shop",
                  2000,
                  "I Can Help You Build A Booking System",
                  2000,
                ]}
                repeat={Infinity}
                className="text-white font-medium text-xl"
              />
            </div>
          </div>

          <div className="relative z-10 py-10">
            <Image
              src="/image/foto1.png"
              alt="Hero"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>

          <div className="absolute w-2/5 h-full right-0">
            <Image
              src="/image/blob3.svg"
              alt="Blob 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
