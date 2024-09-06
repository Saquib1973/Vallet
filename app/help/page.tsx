import React from "react";
import FadeInWrapper from "../components/FadeInWrapper";
import { Button } from '@nextui-org/react';
import { Code } from '@nextui-org/code'

const page = () => {
  return <FadeInWrapper>
    <div className='flex justify-center items-center gap-2 min-h-[300px]'>
      If you have any problem message me   <Code color="secondary" className='group flex gap-1 items-center'>@sacubeli <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" group-hover:-rotate-45 transition-all duration-500 size-4 text-purple-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
 </Code>
        on Twitter.
    </div>
  </FadeInWrapper>;
};

export default page;
