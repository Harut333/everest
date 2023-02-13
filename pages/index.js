import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Header from "../src/Header";


export default function Home() {
    return (
        <>
            <Header/>
            <div className={"container"}>
                <div className={"layout"}>
                    <div className={"homepage"}>
                    </div>
                </div>
            </div>
        </>
    )
}
