import React from 'react';
import Image from 'next/image';
function Navbar() {
   return (
      <div className="bg-[#282828] text-white">
         <div className="mx-4 lg:mx-[120px] py-[20px] h-auto min-h-[80px]">
            <div className="lg:flex justify-between">
               <div className="flex justify-between items-center py-2">
                  {/* Logo dan Judul */}
                  <div className="flex items-center gap-2">
                     <Image src="/navbar/logo.png" alt="Logo" width={60} height={40} />
                     <h1 className="text-[12px] lg:text-[16px] font-manrope lg:font-spaceGrotesk font-bold">GameManiac</h1>
                  </div>

                  {/* Hamburger Menu */}
                  <div className="block lg:hidden ">
                     <div className="flex items-center">
                        {/* search */}
                        <svg className="mr-[12px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.59988 4.7999C6.94892 4.7999 4.7999 6.94894 4.7999 9.5999C4.7999 12.2509 6.94892 14.3999 9.59988 14.3999C12.2508 14.3999 14.3999 12.2509 14.3999 9.5999C14.3999 6.94894 12.2508 4.7999 9.59988 4.7999ZM2.3999 9.5999C2.3999 5.62345 5.62344 2.3999 9.59988 2.3999C13.5763 2.3999 16.7999 5.62345 16.7999 9.5999C16.7999 11.1549 16.3069 12.5948 15.4688 13.7717L21.2484 19.5514C21.717 20.02 21.717 20.7798 21.2484 21.2484C20.7797 21.7171 20.0199 21.7171 19.5513 21.2484L13.7717 15.4688C12.5947 16.307 11.1549 16.7999 9.59988 16.7999C5.62344 16.7999 2.3999 13.5764 2.3999 9.5999Z"
                              fill="white"
                           />
                        </svg>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.6001 5.9998C3.6001 5.33706 4.13736 4.7998 4.8001 4.7998H19.2001C19.8628 4.7998 20.4001 5.33706 20.4001 5.9998C20.4001 6.66255 19.8628 7.1998 19.2001 7.1998H4.8001C4.13736 7.1998 3.6001 6.66255 3.6001 5.9998Z"
                              fill="white"
                           />
                           <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.6001 11.9998C3.6001 11.3371 4.13736 10.7998 4.8001 10.7998H19.2001C19.8628 10.7998 20.4001 11.3371 20.4001 11.9998C20.4001 12.6625 19.8628 13.1998 19.2001 13.1998H4.8001C4.13736 13.1998 3.6001 12.6625 3.6001 11.9998Z"
                              fill="white"
                           />
                           <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.6001 17.9998C3.6001 17.3371 4.13736 16.7998 4.8001 16.7998H19.2001C19.8628 16.7998 20.4001 17.3371 20.4001 17.9998C20.4001 18.6625 19.8628 19.1998 19.2001 19.1998H4.8001C4.13736 19.1998 3.6001 18.6625 3.6001 17.9998Z"
                              fill="white"
                           />
                        </svg>
                     </div>
                  </div>
               </div>
               <div className="hidden lg:flex gap-6">
                  <svg id="search" className="my-[8px]" width="24" height="24" viewBox="0 0 15 15" fill="#" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                        fill="white"
                        fillRule="evenodd"
                        clipRule="evenodd"
                     ></path>
                  </svg>
                  <div className="h-10 w-[1px] bg-[#3E3E3E]"></div>
                  <div className="h-10 w-[1px] bg-[#3E3E3E]"></div>
                  <div className="h-10 w-[1px] bg-[#3E3E3E]"></div>
                  <div className="h-10 w-[1px] bg-[#3E3E3E]"></div>
                  <Image
                     src="/navbar/indonesia.png" // Lokasi gambar di folder public
                     alt="Logo"
                     width={44}
                     height={16}
                  />
                  <p className="my-[11px]">
                     ID<span className="text-[#949494]">-ID</span>
                  </p>
                  <svg width="20" height="20" className="my-[10px]" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                        fill="white"
                        fillRule="evenodd"
                        clipRule="evenodd"
                     ></path>
                  </svg>
               </div>
            </div>
         </div>
         <div className="h-[2px] bg-[#3E3E3E] w-full mt-[4px] "></div>
         {/* navbar bawah */}
         <div className="hidden lg:flex justify-between  mx-[120px] py-6">
            <div className="flex gap-4 ">
               <div className="flex gap-2 text-white">
                  <svg className="my-[2px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_5777_756)">
                        <path d="M3.33333 8H2L8 2L14 8H12.6667" stroke="white" strokeWidth="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                           d="M3.3335 8V12.6667C3.3335 13.0203 3.47397 13.3594 3.72402 13.6095C3.97407 13.8595 4.31321 14 4.66683 14H11.3335C11.6871 14 12.0263 13.8595 12.2763 13.6095C12.5264 13.3594 12.6668 13.0203 12.6668 12.6667V8"
                           stroke="white"
                           strokeWidth="1.33333"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                        <path
                           d="M6 13.9998V9.99984C6 9.64622 6.14048 9.30708 6.39052 9.05703C6.64057 8.80698 6.97971 8.6665 7.33333 8.6665H8.66667C9.02029 8.6665 9.35943 8.80698 9.60948 9.05703C9.85952 9.30708 10 9.64622 10 9.99984V13.9998"
                           stroke="white"
                           strokeWidth="1.33333"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </g>
                     <defs>
                        <clipPath id="clip0_5777_756">
                           <rect width="16" height="16" fill="white" />
                        </clipPath>
                     </defs>
                  </svg>
                  <p className="text-[14px]">Beranda</p>
               </div>
               <div className="flex gap-2">
                  <svg className="my-[2px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_5777_763)">
                        <path
                           d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z"
                           stroke="white"
                           strokeWidth="1.33333"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                        <path d="M14 14L10 10" stroke="white" strokeWidth="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                     </g>
                     <defs>
                        <clipPath id="clip0_5777_763">
                           <rect width="16" height="16" fill="white" />
                        </clipPath>
                     </defs>
                  </svg>

                  <p className="text-[14px]">Lacak Pesanan</p>
               </div>
            </div>
            <div className="">
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
                     fill="white"
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                  ></path>
               </svg>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
