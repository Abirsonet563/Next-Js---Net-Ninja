import Link from "next/link";

const Navbar = () => {
    return(
        <nav>
        <div className="logo">
         </div>

         <h1>Ninja List</h1>
         <Link href="/">Home</Link>
         <Link href="/about">About</Link>
         <Link href="/ninja">Ninja Listing</Link>
       </nav>
    )
}
export default Navbar;