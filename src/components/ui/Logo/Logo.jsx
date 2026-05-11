import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={'/'}>
            <div className="w-8 h-8 bg-[#ffffff] rounded-md relative">
                <Image
                    src={'/images/logo.png'}
                    alt="logo"
                    fill={true}
                    className="object-cover w-full h-full"
                />
            </div>
        </Link>
    );
};

export default Logo;
