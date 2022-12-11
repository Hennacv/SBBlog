import Link from "next/link";
import { useRouter } from "next/router";

type NavItem = {
  name: string;
  href: string;
}

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
  const { pathname } = useRouter()

  return(
      <div className="grid grid-flow-col gap-x-5 xs:gap-x-8 absolute right-11 top-6 sm:top-[51px] ">
        {navigation.map((link) => {
          const isCurrentPage = link.href === pathname;

          return(
            <Link key={link.name} href={link.href}>
              <div
              className={`border-b-4 ${isCurrentPage ? "border-orange" : "border-none"}`}
              >
                <span className="text-navItem font-semibold text-white hover:text-indigo-50 cursor-pointer">
                  {link.name}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
  )
}