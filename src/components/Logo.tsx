'use client';

import Link from 'next/link';
import Image from 'next/image';

interface LogoProps{
    src:string;
    alt?:string;
    width?: number;
    height?: number;
}

const Logo=({src,alt='byteMusic',width,height} : LogoProps )=>{
    return(
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <Image src={src} alt={alt} width={width} height={height}/>
        </Link>
    );
}

export default Logo;