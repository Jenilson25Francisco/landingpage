

import Image from "next/image"
import logo_img from "./public/logo.svg"

export function Header() {
    return (
        <header>
            <div>
                <Image src={logo_img} alt="" />
            </div>
        </header>
    )
}