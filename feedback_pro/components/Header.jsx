import React from 'react'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
function Header() {
    return (
        <header className="p-4 bg-white shadow-md w-full mx-auto">
            {/* Container */}
            <div className="flex justify-between items-center max-w-screen-xl w-full mx-auto">
                {/* Left Side: Logo */}
                <div className="flex items-center">
                    <Link href="/"> 
                    <Image src="/logo.png" alt="Logo" width={150} height={100}/> 
                    </Link>
                </div>

                {/* Right Side: SignIn, SignUp, UserButton */}
                <div className="flex items-center gap-4">
                    <SignedOut>
                        <SignInButton>
                            <button className="bg-transparent text-black rounded-lg font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                                Sign In
                            </button>
                        </SignInButton>
                        <SignUpButton>
                               <button className="bg-black hover:bg-gray-900 text-white rounded-lg font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                                Sign Up
                              </button>
                        </SignUpButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                </div>
            </div>
        </header>
    )
}

export default Header;
