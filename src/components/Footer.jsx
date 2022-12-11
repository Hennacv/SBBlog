import { AiOutlineCopyright } from "react-icons/ai"

export function Footer() {
return (
    <footer
        className="flex flex-row items-center justify-center bg-black text-white font-light text-xxs py-[8.5px]"
    >
        <AiOutlineCopyright />
        <p className="pl-2">Copyright Social Brothers - 2022</p>
    </footer>
    )
}