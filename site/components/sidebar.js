import React, { Component } from "react";
import Link from "next/link";
import styles from "../styles/Sidebar.module.css";

import { slide as Menu } from "react-burger-menu";

const HamburgerMenu = () => (
  <div className="relative p-2">
    <Menu
      customBurgerIcon={<HamburgerIcon />}
      width={"auto"}
      className="left-0 top-20"
    >
      <Links />
    </Menu>
  </div>
);

const HamburgerIcon = () => (
  <div className="p-1/2">
    <svg
      className="w-8 h-8 text-gray-500"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </div>
);

export const Links = () => (
  <>
    <Link href="/">
      <a>Home</a>
    </Link>
    <br></br>
    <Link href="/aboutme">
      <a>About me</a>
    </Link>
    <br></br>

    <Link href="/blog">
      <a>Blog</a>
    </Link>
    <br></br>

    <Link href="/projects">
      <a>Projects</a>
    </Link>
    <br></br>

    <Link href="/contact">
      <a>Contact Me</a>
    </Link>
    <br></br>

    {/* <Link href="/">
      <a className="font-bold p-4">Home</a>
    </Link>
    <Link href="/about">
      <a className="font-bold p-4">About</a>
    </Link> */}
  </>
);

export default HamburgerMenu;

// export default function Sidebar() {
//   return (
//     <nav className={styles.nav}>
//       <input className={styles.input} placeholder="Search..." />
//       <Link href="/">
//         <a>Home</a>
//       </Link>
//       <Link href="/aboutme">
//         <a>About me</a>
//       </Link>
//       <Link href="/blog">
//         <a>Blog</a>
//       </Link>
//       <Link href="/projects">
//         <a>Projects</a>
//       </Link>
//       <Link href="/contact">
//         <a>Contact Me</a>
//       </Link>
//     </nav>
//   );
// }
