import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import 'animate.css';

export default function Home() {
  return (
    <div>
      {/* Background with gradient and custom colors */}
      <div className="absolute inset-0 bg-background bg-gradient-to-r from-primary to-secondary opacity-50 z-[-10]"></div>

      <Image
        src="/grid.svg"
        className="absolute z-[-15] w-full h-[300px] object-cover opacity-20"
        width={1200}
        height={300}
        alt="Background grid design"
      />
      
      <Header />
      
      {/* Hero Section with Animation */}
      <section className="z-50 px-4 py-16 mx-auto max-w-screen-xl text-center lg:px-12 animate__animated animate__fadeInUp">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl leading-tight">
          Your Personal AI Interview Coach
        </h1>
        <p className="mb-8 text-lg font-medium text-gray-600 dark:text-gray-400 lg:text-xl sm:px-16 xl:px-48">
          Double your chances of landing that job offer with our AI-powered interview prep.
        </p>
        <div className="flex flex-col mb-8 lg:mb-5 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="/dashboard"
            className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 transition duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-1s"
          >
            Get Started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </section>

      {/* How it Works Section with Animation */}
      <section className="py-16 bg-card px-4 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12 animate__animated animate__fadeInUp">
        <h2 className="font-bold text-3xl mb-4 text-gray-800">How it Works?</h2>
        <h3 className="text-md text-gray-500 mb-8">
          Give mock interview in just 3 simple easy steps
        </h3>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 animate__animated animate__fadeInUp animate__delay-2s">
          <a
            className="block rounded-xl border bg-card border-gray-200 p-8 shadow-xl transition-all hover:border-gray-600 hover:shadow-2xl hover:scale-105 animate__animated animate__fadeInUp"
            href="#"
          >
            <AtomIcon className="h-10 w-10 text-primary" />
            <h3 className="mt-4 text-xl font-semibold text-black">Write prompt for your form</h3>
            <p className="mt-2 text-sm text-gray-600">
              Create tailored prompts for your interview questions to simulate real-world scenarios.
            </p>
          </a>

          <a
            className="block rounded-xl border bg-card border-gray-200 p-8 shadow-xl transition-all hover:border-gray-600 hover:shadow-2xl hover:scale-105 animate__animated animate__fadeInUp"
            href="#"
          >
            <Edit className="h-10 w-10 text-primary" />
            <h3 className="mt-4 text-xl font-semibold text-black">Edit Your Form</h3>
            <p className="mt-2 text-sm text-gray-600">
              Customize the interview flow, adjust questions, and optimize your practice session.
            </p>
          </a>

          <a
            className="block rounded-xl border bg-card border-gray-200 p-8 shadow-xl transition-all hover:border-gray-600 hover:shadow-2xl hover:scale-105 animate__animated animate__fadeInUp"
            href="#"
          >
            <Share2 className="h-10 w-10 text-primary" />
            <h3 className="mt-4 text-xl font-semibold text-black">Share & Start Accepting Responses</h3>
            <p className="mt-2 text-sm text-gray-600">
              Share your form and get responses instantly to start preparing for real interviews.
            </p>
          </a>
        </div>

        <div className="mt-12 text-center animate__animated animate__fadeIn animate__delay-3s">
          <a
            href="/dashboard"
            className="inline-block rounded-lg bg-primary px-12 py-4 text-sm font-medium text-white transition-all hover:bg-secondary-700 focus:outline-none focus:ring focus:ring-primary-300"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
