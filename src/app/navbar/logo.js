'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter()

    return (
        <Image
        alt="Logo"
        className="hidden md:block cursor-pointer p-1 rounded-full"
        height="100"
        width="100"
        src="/images/v.png"
        onClick={() => router.push('/')}
        />
    )
}

export default Logo;