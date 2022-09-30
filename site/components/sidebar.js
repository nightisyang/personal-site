import React, { Component, useState } from "react";
import Link from "next/link";
import styles from "../styles/Sidebar.module.css";
import { slide as Menu } from "react-burger-menu";

const HamburgerMenu = () => {
  const [closeMenu, setCloseMenu] = useState(false);

  function toggleMenu() {
    console.log(closeMenu);
    setCloseMenu(!closeMenu);
  }

  const Links = () => (
    <>
      <Link href="/">
        <a onClick={() => toggleMenu()}>Home</a>
      </Link>
      <Link href="/aboutme">
        <a onClick={() => toggleMenu()}>About me</a>
      </Link>
      <Link href="/blog">
        <a onClick={() => toggleMenu()}>Blog</a>
      </Link>
      <Link href="/projects">
        <a onClick={() => toggleMenu()}>Projects</a>
      </Link>
      <Link href="/contact">
        <a onClick={() => toggleMenu()}>Contact Me</a>
      </Link>
      {/* <Link href="/">
        <a className="font-bold p-4">Home</a>
      </Link>
      <Link href="/about">
        <a className="font-bold p-4">About</a>
      </Link> */}
    </>
  );

  return (
    <div className="relative p-2">
      <Menu isOpen={closeMenu} onOpen={toggleMenu}>
        <Links />
      </Menu>
    </div>
  );
};

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
