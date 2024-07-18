import React from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const status = "notauthenticated";
  return (
    <div className={styles.container}>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <span className={styles.link}>Write</span>
      )}
    </div>
  );
};

export default AuthLinks;
