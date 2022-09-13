import { Link } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({children}) {
    return (
        <>
        <Head>
        <link rel="shortcut icon" href="/assets/img/tiny-logo.svg"/>
        <title>Tiny Battle</title>
        </Head>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}