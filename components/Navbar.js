import React from 'react'
import Link from 'next/link'

const Navbar = () => {

    return (
        <nav className="">
       <ul className="flex items-center space-x-4 md:space-x-6">
        {/* <Link href="/roadmap" target="#roadmap"><a><li>Roadmap</li></a></Link> */}
        <Link href="/mint" passHref>
        <a className="font-coiny text-xl md:text-3xl font-bold">
         {/* <span className=""> */}
                <li>Mint
                </li>
                {/* </span> */}
                </a>
        </Link>
        
        </ul>
      </nav>
    )
}

export default Navbar
