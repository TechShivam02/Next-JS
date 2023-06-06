
import Link from "next/link";


const Navbar = () => {
  return (
    <>
         <nav >

            <ul className= "menu">

                <Link clasName="lnk" href="/">Home</Link>
                <Link clasName="lnk" href="/about">About</Link>
                <Link clasName="lnk" href="/contact">Contact</Link>
                <Link clasName="lnk" href="/blog">Blog</Link>

            </ul>

        </nav>


    </>
  )
}

export default Navbar;
