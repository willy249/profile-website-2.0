import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        width={70}
        height={70}
        priority
        alt=""
        style={{ borderRadius: "50%" }}
      />
    </Link>
  );
};

export default Logo;
