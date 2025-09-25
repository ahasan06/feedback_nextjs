import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import hero_feedback from '../public/hero_feedback.jpg' 
export default function HomePage() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Hero Section */}
      <div className=" w-full max-w-screen-xl mx-auto py-10 px-10 xl:px-0">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center lg:py-20">

          {/* Left Side: Text */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:mx-0">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              Collect & Analyze Feedback Effortlessly
            </h1>
            <p className="mt-6 text-lg text-gray-600 sm:text-xl sm:mt-8">
              Build projects, gather insights, and improve continuously with actionable feedback.
              Empower your team and engage your users like never before.
            </p>
            <div className="mt-8 sm:mt-10 flex justify-start md:justify-center lg:justify-start">
              <Link href="/dashboard" passHref>
                <Button className="inline-flex items-center px-6 py-6 cursor-pointer bg-[#11AE6C] text-white rounded-md text-base font-medium hover:bg-[#C73583]">
                  <span>Go to Dashboard</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side: Illustration */}
          <div className="mt-10 lg:mt-0 lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              <Image
                src={hero_feedback} 
                alt="Feedback illustration"
                width={500}
                height={500}
                className="rounded-xl shadow-lg border border-gray-200 w-full"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
