import Link from "next/link"
import Image from "next/image"
const Navbar = () => {
  return (
    <nav className="navbar navbar-default navbar-expand-lg fixed-top bg-white">
        <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Image 
        src='/static/logo.ico'
        alt=""
        className="navbar-brand text-brand"
        height={100}
        width={100}
        /> 
        <Link href='/'>
            <a className="navbar-brand text-brand">JSB Residences </a>
        </Link>
        <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
            <ul className="navbar-nav">

            <li className="nav-item">
                <Link href="/">
                <a className="nav-link active">Home</a>
                </Link>
            </li>

            <li className="nav-item">
                <Link href="/components/About">
                <a className="nav-link ">About</a>
                </Link>
            </li>

            <li className="nav-item">
                <Link href='/components/Properties'>
                <a className="nav-link ">Property</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href='/components/Sitemap'>
                <a className="nav-link ">Sitemap</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href='/components/Interior'>
                <a className="nav-link ">Interior</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href='/components/Contact'>
                <a className="nav-link ">Contact</a>
                </Link>
            </li>
            </ul>
        </div>
        </div>
  </nav>
  )
}

export default Navbar