import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>NEXTCAR</h2>
          <p>Choose and buy your car!</p>
        </Link>
      </header>
      <main className={styles.container}>{children}</main>
      <footer className={styles.footer}>
        {" "}
        <p>
          Developed by{" "}
          <a target="_blank" rel="noreferrer" href="https://github.com/javadevbh/">
            Javad
          </a>{" "}
          with ❤️ | Next.js project &copy;
        </p>
      </footer>
    </>
  );
}

export default Layout;
