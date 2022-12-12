import Link from "next/link";
import type { UseQueryResult } from "@tanstack/react-query";
import type { Link as LinkType } from "../types";
import { translations } from "../utils/dictionary";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi"

type Props = UseQueryResult<{
  isLoading: boolean;
  isError: boolean;
  error: Error;
  links: LinkType[];
  // pageCount: number;
  }>

export function Pagination({ isLoading, isError, data, error }: Props) {
  const router = useRouter();
  console.log({ router })

  if (isLoading) {
  return <span>Be patient please...</span>
  }

  if (isError) {
  return <span>Error: {(error as Error).message}</span>
  }

  const links = data.links;
  // const pageCount = data.pageCount;

  return (
    <div className="flex flex-row justify-center items-center gap-2 pt-[36.5px] pb-[9.5px]">
      {links.map((link,i, {length}) => {
        if (link.label === "..." ) {
          return (
            <div key={link.label} className=" text-gray-600 text-xxs" >
                <span className="">
                  {translations.hasOwnProperty(link.label) ? translations[link.label] : link.label}
                </span>
            </div>
          );
        }

        if (!link.url) return null;

        const href = `${router.pathname}?${link.url.split("?")[1]}`;

        if (i + 1 === length){
          return(
            <Link key={link.label} href={href}>
              <div className=" text-orange text-xs flex items-center" >
                <span className="">
                  {translations.hasOwnProperty(link.label) ? translations[link.label] : link.label}
                </span>
                {link.label === "pagination.next" ? <FiArrowRight className="mx-1" /> : ""}
              </div>
            </Link>
          )
        }

        return(
          <Link key={link.label} href={href}>
            <div className={link.active ? "flex justify-center items-center font-bold text-s rounded-[18px] bg-gray-100 w-8 h-9" : "text-gray-600 text-xxs"} >
              <span className="">
              {translations.hasOwnProperty(link.label) ? translations[link.label] : link.label}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}