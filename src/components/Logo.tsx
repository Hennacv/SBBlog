import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image src="/assets/SBlogo.svg" alt="SBLogo" width={301} height={71} />
    </Link>
  );
}
