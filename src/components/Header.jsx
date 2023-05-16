import {Link} from "react-router-dom"
import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (
  <nav>
    <h1>TechyStar</h1>
    <main>
       <HashLink to ={"/#home"}>Home</HashLink>
       <link to ={"/contact"}>Contact</link>
       <link to ={"/#about"}>About</link>
       <link to ={"/#brands"}>Brands</link>
       <link to ={"/services"}>Services</link>
    </main>
  </nav>
  )
}

export default Header
