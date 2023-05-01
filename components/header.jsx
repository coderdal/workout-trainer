import React from "react";

import styles from "@/styles/header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>
        <Link href={"/"}>
          Workout <span>Trainer</span>
        </Link>
      </h3>
    </header>
  );
};

export default Header;
