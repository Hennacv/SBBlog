import Link from "next/link";
import { useRouter } from "next/router";
import type { NavItem } from "../types";

const navigation: NavItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

export function NavList() {
  const { pathname } = useRouter();

  return (
    <div className="absolute right-11 top-6 grid grid-flow-col gap-x-5 xxs:gap-x-8 sm:top-[51px] ">
      {navigation.map((link) => {
        const isCurrentPage = link.href === pathname;

        return (
          <Link key={link.name} href={link.href}>
            <div
              className={`border-b-4 ${
                isCurrentPage ? "border-orange" : "border-none"
              }`}
            >
              <span className="hover:text-indigo-50 cursor-pointer text-navItem font-semibold text-white">
                {link.name}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
