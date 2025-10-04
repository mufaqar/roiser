"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import TopBar from './TopBars'

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white text-gray-700">
            {/* Top Bar - Hidden on mobile */}
            <TopBar/>

            {/* Main Header */}
            <div className="py-4 md:py-6">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo and Mobile Menu Button */}
                    <div className="flex items-center justify-between w-full lg:w-auto mb-4 lg:mb-0">
                        <div className="flex items-center justify-center lg:justify-start w-full lg:w-auto">
                            <Image
                                src="/images/logo.png"
                                width={160}
                                height={50}
                                alt="Website Logo"
                                className="h-8 w-auto md:h-8 lg:h-8"
                            />
                        </div>
                        
                        {/* Mobile Menu Button */}
                        <button 
                            className="lg:hidden p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Search Bar - Centered on mobile, normal on desktop */}
                  <div className="w-full lg:flex-1 max-w-2xl mx-auto lg:mx-8 xl:mx-16 mb-4 lg:mb-0">
    <div className="relative">
        <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <select className="px-3 py-3 text-gray-800 border-r border-gray-300 focus:outline-none hidden sm:block bg-white">
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home & Garden</option>
            </select>
            <input
                type="text"
                placeholder="Search Keywords..."
                className="flex-grow px-4 py-3 focus:outline-none text-base pr-32" 
            />
        </div>
        {/* Search Button Inside */}
        <button className="absolute right-2 top-1/2 uppercase transform -translate-y-1/2 bg-[#121314] text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors whitespace-nowrap font-medium text-sm">
            SEARCH HERE
        </button>
    </div>
</div>

                    {/* Contact & Icons */}
                    <div className="flex items-center justify-center lg:justify-end space-x-4 md:space-x-6 w-full lg:w-auto">
                        {/* Phone - Hidden on mobile */}
                        <div className=" xl:flex items-center">
                            <div className="p-2 border border-gray-300 rounded-full mr-3 bg-gray-50">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.717 21 3 14.283 3 6V5z"></path></svg>
                            </div>
                            <div className="text-center lg:text-left hidden md:block">
                                <span className="block text-xs text-gray-500">Call Us Now</span>
                                <span className="block text-sm font-semibold text-gray-900">+(258) 2159 2159</span>
                            </div>
                        </div>

                        {/* Wishlist */}
                        <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors ">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </button>
                        
                        {/* Cart */}
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                </button>
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">0</span>
                            </div>
                            <div className="hidden sm:block text-center lg:text-left">
                                <span className="block text-xs text-gray-500">Your cart</span>
                                <span className="block text-sm font-semibold text-gray-900">$1280.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className={`bg-[#121314] container mx-auto rounded-md text-white ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
                <div className="">
                    <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
                        {/* Mobile Menu Header */}
                        <div className="w-full lg:hidden flex justify-between items-center mb-4 pb-3 border-b border-gray-600">
                            <span className="text-lg font-semibold">Menu</span>
                            <button 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 hover:bg-gray-800 rounded transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>

                        {/* Navigation Links - Centered */}
                        <div className="flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-8 text-sm font-medium uppercase w-full lg:w-auto">
                            <a href="#" className="hover:text-gray-300 transition-colors py-2 lg:py-0 text-center w-full lg:w-auto border-b lg:border-none border-gray-600 lg:border-0">HOME</a>
                            <a href="#" className="hover:text-gray-300 transition-colors py-2 lg:py-0 text-center w-full lg:w-auto border-b lg:border-none border-gray-600 lg:border-0">SHOP</a>
                            <a href="#" className="hover:text-gray-300 transition-colors py-2 lg:py-0 text-center w-full lg:w-auto border-b lg:border-none border-gray-600 lg:border-0">WOMEN</a>
                            <a href="#" className="hover:text-gray-300 transition-colors py-2 lg:py-0 text-center w-full lg:w-auto border-b lg:border-none border-gray-600 lg:border-0">MEN</a>
                            <a href="#" className="hover:text-gray-300 transition-colors py-2 lg:py-0 text-center w-full lg:w-auto border-b lg:border-none border-gray-600 lg:border-0">PAGES</a>
                            <a href="#" className="hover:text-gray-300 transition-colors py-2 lg:py-0 text-center w-full lg:w-auto border-b lg:border-none border-gray-600 lg:border-0">BLOG</a>
                            <a href="#" className="hover:text-gray-300 transition-colors py-2 lg:py-0 text-center w-full lg:w-auto">CONTACT</a>
                        </div>
                        
                        {/* Sale Banner - Centered on mobile */}
                        <div className="flex items-center justify-center lg:justify-end text-sm mt-4 lg:mt-0 w-full lg:w-auto">
                            <span className="mr-4 text-center lg:text-right text-gray-200">Get 30% Discount Now</span>
                            <button className="bg-white text-gray-900 px-4 py-2 rounded-full transition-colors text-md font-bold uppercase whitespace-nowrap">
                                <Link href=''>Sale</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;