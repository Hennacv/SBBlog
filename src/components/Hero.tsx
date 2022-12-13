import Image from "next/image";
import type { ReactNode } from "react";

type HeroChildren = {
  children?: ReactNode;
};

export function Hero({ children }: HeroChildren) {
  return (
    <div className="relative sm:overflow-hidden">
      {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" /> */}
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover"
          src="https://frontend-case-api.sbdev.nl/storage/images/onRWvn1rBSFFtU3hgTNiaZILMt8Zw8VYDB0wnbEI.png"
          alt="People playing VR"
          width={1280}
          height={500}
        />
      </div>
      <div className="relative h-[25vh] lg:h-[45vh]">{children}</div>
    </div>
  );
}
