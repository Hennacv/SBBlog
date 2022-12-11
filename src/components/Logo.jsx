import Image from 'next/image';

export function Logo() {
return(
    <Image
        src="/assets/SBlogo.svg"
        alt='SBLogo'
        width={301}
        height={71}
    />
    )
}
