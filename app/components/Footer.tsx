import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <div className="flex justify-between p-2 backdrop-blur-sm border-t-1  border-neutral-200 dark:border-neutral-900">
      <Link href={'https://heysaquib.vercel.app/'} className="text-purple-500">
        @saquib
      </Link>
      <div className="flex gap-2">
        <Link href={'https://www.linkedin.com/in/saquibali1973/'} className="font-extralight hover:text-purple-500 transition-all">
          LinkedIn
        </Link>
        <Link href={'https://github.com/Saquib1973'} className="font-extralight hover:text-purple-500 transition-all">Github</Link>
      </div>
    </div>
  )
};

export default Footer;