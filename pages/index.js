import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import Header from "../src/Header";
import Homepage from "../src/Homepage";

export default function Home() {
    return (
        <>
            <Header/>
            <div className={"container"}>
                <div className={"layout"}>
                    <div className={"homepage"}>
                        <Homepage/>
                    </div>
                </div>
            </div>
        </>
    )
}
