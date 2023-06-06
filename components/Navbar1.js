
import Link from "next/link";
import styles from "../styles/index.module.css";

const Navbar = () => {
  return (
    <>
         <nav >

            <ul className= {styles.menu}>

                <Link clasName={styles.lnk} href="/">Home</Link>
                <Link clasName={styles.lnk} href="/about">About</Link>
                <Link clasName={styles.lnk} href="/contact">Contact</Link>
                <Link clasName={styles.lnk} href="/blog">Blog</Link>

            </ul>

        </nav>


    </>
  )
}

export default Navbar;
