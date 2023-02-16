import '../styles/globals.scss'
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                </link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Julee&display=swap" rel="stylesheet"></link>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
