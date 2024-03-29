import React, { Component, useState } from "react";
import Link from "next/link";
import styles from "../styles/Sidebar.module.css";
import { slide as Menu } from "react-burger-menu";

const HamburgerMenu = () => {
  const [closeMenu, setCloseMenu] = useState(false);

  function toggleMenu() {
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
    </>
  );

  return (
    <div>
      <Menu isOpen={closeMenu} onOpen={toggleMenu} onClose={toggleMenu}>
        <Links />
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
