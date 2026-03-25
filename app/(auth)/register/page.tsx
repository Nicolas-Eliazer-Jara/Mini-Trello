'use client'
import Link from "next/link"



export default function  page() {

    return(
        <>
        <Link href={"login"}>
        <button className="text-center mt-10">Login</button>
        </Link>
        </>
    )
}