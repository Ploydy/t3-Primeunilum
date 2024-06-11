"use client";

/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("/");
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={`${theme === "dark" ? "bg-[#121212]" : "bg-white text-black"
        } w-full z-50 fixed top-0 left-0 py-4 my-1 rounded bg-slate-200`}
    >
      <div className="container px-5 py-2 md:px-16 flex items-center justify-between mx-auto rounded bg-slate-400">
        <Link href={"/customer"}>
          <h2 className="text-3xl">
            <span className="text-rose-600">P</span>rime<span className="text-rose-600">u</span>nilum.
          </h2>
        </Link>

        <div>
          <ul
            className={`${toggleMenu === true ? "left-0" : "-left-full"} ${theme === "dark"
              ? "bg-[#121212] text-white"
              : "bg-white text-black"
              } z-50 flex md:items-center gap-1 md:gap-5 lg:gap-10 md:relative absolute top-0 md:left-0 w-80 transition-all duration-500 h-screen md:w-auto md:h-auto flex-col md:flex-row shadow-2xl py-24 px-10 md:p-0 md:shadow-none`}
          >
            {/* {["home", "features", "pricing", "testimonial"].map((link) => (
              <li
                key={link}
                className={`${selectedItem === link ? "text-rose-600" : ""
                  } capitalize border-b py-4 md:border-none md:py-0 hover:text-rose-600`}
                onClick={() => setSelectedItem(link)}
              >
                <Link href={`#${link}`}>{link}</Link>
              </li>
            ))} */}
            <div className="md:hidden mx-auto absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
              <Link
                href="https://www.facebook.com/LawrenceCarballo"
                target="_blank"
              >
                <FacebookOutlinedIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              </Link>
              <Link target="_blank" href={"https://github.com/Ploydy"}>
                <GitHubIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              </Link>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/ploydy/"}
              >
                <LinkedInIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              </Link>
              <Link
                target="_blank"
                href={"#"}
              >
                <InstagramIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              </Link>
            </div>
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-2 lg:gap-4">
          <button className="text-xl font-semibold sm:py-3 py-2 px-3 sm:px-6 hover:text-white">
            <Link href='/profile'><span className="text-rose-600">A</span>ccount
              <AccountBoxTwoToneIcon />
            </Link>
          </button>

          <button className="text-lg font-semibold sm:py-3 py-2 px-3 sm:px-6 hover:text-white">
            <Link href='/cart'><span className="text-rose-600">C</span>art</Link>
            <ShoppingCartTwoToneIcon />
          </button>

          {/* <button>
            {theme === "dark" ? (
              <LightModeRoundedIcon
                onClick={() => setTheme("light")}
                className="text-white"
              />
            ) : (
              <DarkModeOutlinedIcon onClick={() => setTheme("dark")} />
            )}
          </button> */}
          <button
            aria-label="menu"
            className={`${theme === "dark" ? "text-white" : "text-black"
              } md:hidden`}
            onClick={() => setToggleMenu(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>







      {/* ---------------------------------------nav----------------------------------------------------------------------------- */}







      <div className="container px-5 md:px-16 flex items-center justify-between mx-auto p-1 my-1 mt-6">
        <div>
          <ul
            className={`${toggleMenu === true ? "left-0" : "-left-full"} ${theme === "dark"
              ? "bg-[#121212] text-white"
              : "bg-white text-black"
              } z-50 flex md:items-center gap-1 md:gap-5 lg:gap-10 md:relative absolute top-0 md:left-0 w-80 transition-all duration-500 h-screen md:w-auto md:h-auto flex-col md:flex-row shadow-2xl py-24 px-10 md:p-0 md:shadow-none`}
          >
            <button
              className={`${theme === "dark" ? "text-white" : "text-black"
                } md:hidden absolute top-6 right-5`}
              onClick={() => setToggleMenu(false)}
            >
              <CloseOutlinedIcon />
            </button>
            {/* {["hardware", "house-improvement", "appliance", "housewares", "automotive", "pet-supplies", "sport-goods"].map((link) => (
              <li
                key={link}
                className={`${selectedItem === link ? "text-rose-600" : ""
                  } capitalize border-b py-4 md:border-none md:py-0 hover:text-rose-600`}
                onClick={() => setSelectedItem(link)}
              >
                <Link href={`customer/collections/${link}`}>{link}</Link>
              </li>
            ))} */}
            <div className="md:hidden mx-auto absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
              <Link
                href="https://www.facebook.com/LawrenceCarballo"
                target="_blank"
              >
                <FacebookOutlinedIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              </Link>
              <Link target="_blank" href={"https://github.com/Ploydy"}>
                <GitHubIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              </Link>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/ploydy/"}
              >
                <LinkedInIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              </Link>
              <Link
                target="_blank"
                href={"#"}
              >
                <InstagramIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              </Link>
            </div>
          </ul>


          <ul className="z-50 flex md:items-center gap-1 md:gap-5 lg:gap-10 md:relative absolute top-0 md:left-0 w-80 transition-all duration-500 h-screen md:w-auto md:h-auto flex-col md:flex-row shadow-2xl py-24 px-10 md:p-0 md:shadow-none">
            <li className="capitalize border-b py-4 md:border-none md:py-0 hover:text-rose-600">
              <Link href='/customer/collections/hardware'>
                Hardware
              </Link>
            </li>

            <li className="capitalize border-b py-4 md:border-none md:py-0 hover:text-rose-600">
              <Link href='/customer/collections/appliance'>
                Appliance
              </Link>
            </li>
            <li className="capitalize border-b py-4 md:border-none md:py-0 hover:text-rose-600">
              <Link href='/customer/collections/house-improvement'>
                House-Improvement
              </Link>
            </li>
            <li className="capitalize border-b py-4 md:border-none md:py-0 hover:text-rose-600">
              <Link href='/customer/collections/housewares'>
                Housewares
              </Link>
            </li>
            <li className="capitalize border-b py-4 md:border-none md:py-0 hover:text-rose-600">
              <Link href='/customer/collections/automotive'>
                Automotive
              </Link>
            </li>
            <li className="capitalize border-b py-4 md:border-none md:py-0 hover:text-rose-600">
              <Link href='/customer/collections/pet-supplies'>
                Pet-Supplies
              </Link>
            </li>
            <li className="capitalize border-b py-4 md:border-none md:py-0 hover:text-rose-600">
              <Link href='/customer/collections/sport-goods'>
                Sport-Goods
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}