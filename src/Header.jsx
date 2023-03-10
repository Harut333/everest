import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import logo from "./images/logo_transp.png"

export default function Header() {

    const navBar = [
        {
            id: Math.random(),
            title: "Home",
            link: "/"
        },
        {
            id: Math.random(),
            title: "About",
            link: "/about"
        },
        {
            id: Math.random(),
            title: "Contact us",
            link: "/contact"
        },
        {
            id: Math.random(),
            title: "Show directions",
            link: "/map"
        },

    ]
    return (
        <>
            <div className="header">
                <header>
                    <div className="logo">
                        <Image
                            src={logo}
                            alt={"everest logo"}
                        />
                    </div>
                    <nav>
                        <ul>
                            {navBar.map((nav) => {
                                return (
                                    <li key={nav.id}>
                                        {/*<a href={nav.link}>*/}
                                        {/*    {nav.title}*/}
                                        {/*</a>*/}
                                        <Link href={nav.link}>
                                            {nav.title}
                                        </Link>
                                    </li>
                                )
                            })}
                            <div className="quiz-block">
                                <button>Take a test</button>
                            </div>

                        </ul>
                    </nav>

                </header>
            </div>
        </>
    )
}