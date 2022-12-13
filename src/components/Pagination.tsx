import Link from "next/link";
import type { UseQueryResult } from "@tanstack/react-query";
import type { Link as LinkType } from "../types";
import { translations } from "../utils/dictionary";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";

type Props = UseQueryResult<{
  isLoading: boolean;
  isError: boolean;
  error: Error;
  links: LinkType[];
  // pageCount: number;
}>;

export function Pagination({ isLoading, isError, data, error }: Props) {
  const router = useRouter();
  console.log({ router });

  if (isLoading) {
    return <span>Be patient please...</span>;
  }

  if (isError) {
    return <span>Error: {(error as Error).message}</span>;
  }

  const links = data.links;
  // const pageCount = data.pageCount;

  return (
    <div className="flex flex-row items-center justify-center gap-2 pt-[36.5px] pb-[9.5px]">
      {links.map((link, i, { length }) => {
        if (link.label === "...") {
          return (
            <div key={link.label} className=" text-xxs text-gray-600">
              <span className="">
                {translations.hasOwnProperty(link.label)
                  ? translations[link.label]
                  : link.label}
              </span>
            </div>
          );
        }

        if (!link.url) return null;

        const href = `${router.pathname}?${link.url.split("?")[1]}`;

        if (i + 1 === length) {
          return (
            <Link key={link.label} href={href}>
              <div className=" flex items-center text-xs text-orange">
                <span className="">
                  {translations.hasOwnProperty(link.label)
                    ? translations[link.label]
                    : link.label}
                </span>
                {link.label === "pagination.next" ? (
                  <FiArrowRight className="mx-1" />
                ) : (
                  ""
                )}
              </div>
            </Link>
          );
        }

        return (
          <Link key={link.label} href={href}>
            <div
              className={
                link.active
                  ? "flex h-9 w-8 items-center justify-center rounded-[18px] bg-gray-100 text-s font-bold"
                  : "text-xxs text-gray-600"
              }
            >
              <span className="">
                {translations.hasOwnProperty(link.label)
                  ? translations[link.label]
                  : link.label}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
