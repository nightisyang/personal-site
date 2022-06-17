import React, { Component } from "react";
import Link from "next/link";
import styles from "../styles/Sidebar.module.css";
import { slide as Menu } from "react-burger-menu";

const HamburgerMenu = () => (
  <div className="relative p-2">
    <Menu>
      <Links />
    </Menu>
  </div>
);

export const Links = () => (
  <>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/aboutme">
      <a>About me</a>
    </Link>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
    <Link href="/projects">
      <a>Projects</a>
    </Link>
    <Link href="/contact">
      <a>Contact Me</a>
    </Link>
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
