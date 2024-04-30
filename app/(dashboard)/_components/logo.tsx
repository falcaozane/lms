import Link  from "next/link"
import Image from "next/image"


export const Logo = () => {
    return (
        <>
            <Link href="/">
                <Image
                
                    src="/logoipsum-236.svg"
                    alt="Logo"
                    width={130}
                    height={130}
                />
            </Link>
        </>
    )
}