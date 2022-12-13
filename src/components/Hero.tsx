import Image from "next/image";
import type { HeroChildren } from "../types";

const HOSTNAME = process.env.NEXT_PUBLIC_HOSTNAME;

export function Hero({ children }: HeroChildren) {
  return (
    <div className="relative sm:overflow-hidden">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover"
          src={
            HOSTNAME + "/images/onRWvn1rBSFFtU3hgTNiaZILMt8Zw8VYDB0wnbEI.png"
          }
          alt="People playing VR"
          width={1280}
          height={500}
        />
      </div>
      <div className="relative h-[25vh] lg:h-[45vh]">{children}</div>
    </div>
  );
}
