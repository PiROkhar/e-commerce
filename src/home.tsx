"use client"
import Logo from "/logo.png"
import Img1 from "/excited-well-dressed-young-woman-posing-light-wall-attractive-brunette-girl-pink-fur-coat-playing-with-her-hair-laughing 1.png"
import Echo from "/echo.png"
import shoes from "/shoes.png"
import purse from "/purse.png"
import shoe from "/shoe.png"
import top from "/top.png"
import top1 from "/top-1.png"
import top2 from "/top-2.png"
import phone from "/phone.png"
import watch from "/watch.png"
import headphone from "/headphone.png"
import laptop from "/laptop.png"
import fridge from "/fridge.png"
import speaker from "/speaker.png"
import tv from "/tv.png"
import machine from "/machine.png"
import cooler from "/cooler.png"
import one from "/hmgoepprod__3_-removebg-preview (1) 1.png"
import two from "/hmgoepprod__5_-removebg-preview (1) 1.png"
import three from "/hmgoepprod__5_-removebg-preview (1) 2.png"
import four from "/fashion-portrait-young-elegant-woman 1.png"
import ps from "/ps5-slim-goedkope-playstation_large 1.png"
import perfume from "/perfume.png"
import women from "/attractive-woman-wearing-hat-posing-black-background 1.png"
import {
  Search,
  ShoppingCart,
  Heart,
  Star,
  MapPin,
  Headphones,
  ChevronDown,
  RotateCcw,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  QrCode,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    { name: "Man", href: "/man" },
    { name: "Woman", href: "/woman" },
    { name: "Electronic", href: "/electronic" },
    { name: "Cosmetics", href: "/cosmetics" },
    { name: "Grocery", href: "/grocery" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="w-full">
        {/* Top Banner */}
        <div className="bg-red-600 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-end items-center gap-2 sm:gap-6 text-xs sm:text-sm">
            <a href="/seller-registration" className="hover:underline flex items-center gap-1">
              <span className="hidden sm:inline">Seller Registration</span>
              <span className="sm:hidden">Seller</span>
            </a>
            <a href="/support" className="hover:underline flex items-center gap-1 sm:gap-2">
              <Headphones className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">24X7 Customer Support</span>
              <span className="sm:hidden">Support</span>
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-white border-b border-gray-200 py-2 sm:py-4 px-4 sm:px-6 lg:px-24">
          <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-4">
            {/* Mobile Menu Button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="text-lg font-medium py-2 px-4 hover:bg-gray-100 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </a>
                  ))}
                  <div className="border-t pt-4 mt-4">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white mb-4">Login / Registration</Button>
                    <div className="flex justify-around">
                      <a href="/returns" className="flex flex-col items-center text-gray-600">
                        <RotateCcw className="h-6 w-6" />
                        <span className="text-xs mt-1">Return</span>
                      </a>
                      <a href="/cart" className="flex flex-col items-center text-gray-600">
                        <ShoppingCart className="h-6 w-6" />
                        <span className="text-xs mt-1">Cart</span>
                      </a>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Logo and Location */}
            <div className="flex items-center gap-2 sm:gap-4">
              <a href="/" className="flex items-center">
                <img src={Logo} alt="StarMart Logo" className="h-8 sm:h-12" />
              </a>
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 sm:h-6 sm:w-6" />
                <div className="flex flex-col">
                  <span className="text-xs">Delivered To</span>
                  <span className="font-medium text-black">Pune 412206</span>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-2 sm:mx-4">
              <div className="relative flex">
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 h-10 sm:h-12 pr-4 border-gray-300 rounded-l-md rounded-r-none focus:ring-red-500 focus:border-red-500 text-sm"
                />
                <Button className="h-10 sm:h-12 px-3 sm:px-6 bg-red-600 hover:bg-red-700 rounded-l-none rounded-r-md">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Language Selector - Hidden on mobile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="hidden sm:flex items-center gap-2 text-sm">
                    <div className="w-5 h-4 bg-gradient-to-b from-orange-500 via-white to-green-500 rounded-sm"></div>
                    EN
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>हिंदी</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Login Button - Hidden on mobile */}
              <Button className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-6 h-10 sm:h-12 hidden lg:flex text-sm">
                Login / Registration
              </Button>

              {/* Return and Cart - Hidden on mobile, shown in menu */}
              <div className="hidden lg:flex items-center gap-4">
                <a href="/returns" className="flex flex-col items-center text-gray-600 hover:text-black">
                  <RotateCcw className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="text-xs mt-1">Return</span>
                </a>
                <a href="/cart" className="flex flex-col items-center text-gray-600 hover:text-black">
                  <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="text-xs mt-1">Cart</span>
                </a>
              </div>

              {/* Mobile Cart Icon */}
              <a href="/cart" className="lg:hidden flex items-center text-gray-600 hover:text-black">
                <ShoppingCart className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Category Navigation - Desktop Only */}
        <div className="bg-white border-b border-gray-200 py-3 px-4 hidden lg:block">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center justify-center gap-8 xl:gap-12">
              {categories.map((category) => (
                <DropdownMenu key={category.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-1 text-gray-700 hover:text-black font-medium"
                    >
                      {category.name}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    <DropdownMenuItem>Subcategory 1</DropdownMenuItem>
                    <DropdownMenuItem>Subcategory 2</DropdownMenuItem>
                    <DropdownMenuItem>Subcategory 3</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600 mb-4">SUMMER 2024</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">NEW COLLECTION</h1>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                We know how large objects will act,
                <br className="hidden sm:block" />
                but things on a small scale.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 px-6 sm:px-8 py-2 sm:py-3">SHOP NOW</Button>
            </div>
            <div className="relative flex justify-center">
              <img
                src={Img1}
                alt="Model in pink jacket"
                className="rounded-lg h-64 sm:h-80 lg:h-96 w-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sales */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-24">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold">Flash Sales</h2>
            <a href="#" className="text-red-600 hover:underline text-sm sm:text-base">
              View All
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              {
                name: "Echo (2nd Gen)",
                price: "$120",
                originalPrice: "$160",
                img: Echo,
                desc: "lorem abc",
                rating: 4,
              },
              {
                name: "Reebok",
                price: "$120",
                originalPrice: "$160",
                img: shoes,
                desc: "lorem abc",
                rating: 4,
              },
              {
                name: "Tonny Black",
                price: "$120",
                originalPrice: "$160",
                img: purse,
                desc: "lorem abc",
                rating: 4,
              },
              {
                name: "Sketchers",
                price: "$120",
                originalPrice: "$160",
                img:shoe,
                desc: "lorem abc",
                rating: 4,
              },
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-2 sm:p-4">
                  <span className="mb-2 sm:mb-3 px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full uppercase">
                    Deal
                  </span>
                  <div className="relative flex justify-center w-full mb-2 sm:mb-4">
                    <img
                      src={product.img || "/placeholder.svg"}
                      alt={product.name}
                      className="h-32 sm:h-40 lg:h-48 w-auto object-fit rounded-lg"
                    />
                    <Heart className="absolute top-2 right-2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-red-600 cursor-pointer" />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base truncate">{product.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">Lorem abc</p>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 sm:h-4 sm:w-4 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm sm:text-lg font-bold text-red-600">{product.price}</span>
                    <span className="text-xs sm:text-sm text-gray-500 line-through">$160</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Must-haves */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 px-4 sm:px-6 lg:px-24">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold">Trending must-haves</h2>
            <a href="#" className="text-red-600 hover:underline text-sm sm:text-base">
              View All
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Coat & Suit Outfit Men",
                subtitle: "Explore new arrivals",
                img: top,
              },
              {
                title: "Coat & Suit Outfit Men",
                subtitle: "Explore new arrivals",
                img: top1,
              },
              {
                title: "Coat & Suit Outfit Men",
                subtitle: "Explore new arrivals",
                img: top2,
              },
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relaive">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-t-lg"
                  />
                  <div className="relative inset-0 bg-black bg-opacity-40 rounded-b-lg flex items-end p-4 sm:p-6">
                    <div className="text-white w-full">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{item.title}</h3>
                          <p className="text-sm opacity-90">{item.subtitle}</p>
                        </div>
                        <Button
                          variant="outline"
                          className="bg-white text-black border-white hover:bg-gray-100 text-sm sm:text-base"
                        >
                          ₹4999 Shop Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Experience Section */}
      <section className="bg-black text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-10">
                Enhance Your Music
                <br className="hidden sm:block" /> Experience
              </h2>
              <Button className="bg-red-600 hover:bg-red-700 px-6 sm:px-8 py-2 sm:py-3">Buy Now!</Button>
            </div>
            <div className="relative flex justify-center">
              <img
                src={speaker}
                alt="Music equipment"
                className="rounded-lg w-48 sm:w-64 lg:w-72 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      {[
        {
          title: "Gadget Sell",
          products: [
            { name: "iPhone 13 Pro", price: "₹1,19,900", img: phone},
            { name: "Apple Watch Series", price: "₹29,999", img: watch},
            { name: "Boat Rockerz 450", price: "₹1,499", img: headphone},
            { name: "Lenovo Legion 5", price: "₹84,990", img: laptop},
          ],
        },
        {
          title: "Home Appliance",
          products: [
            { name: "LG Wet Grinder", price: "₹6,999", img:fridge},
            { name: "OnePlus 55 Inch TV", price: "₹42,999", img:tv },
            { name: "LG 6.2 kg 5 Star (1st)", price: "₹15,490", img:machine },
            { name: "LG 6.2 kg 5 Star (2nd)", price: "₹15,490", img:cooler },
          ],
        },
        {
          title: "Top Fashion Deals",
          products: [
            { name: "Colorful Stylish Shirt", price: "₹899", img:one },
            { name: "Mens Solid T-Shirt 1", price: "₹499", img:two },
            { name: "Mens Solid T-Shirt 2", price: "₹499", img:three },
            { name: "Mens Solid T-Shirt 3", price: "₹499", img:four },
          ],
        },
      ].map((section, sectionIndex) => (
        <section key={sectionIndex} className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-24">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold">{section.title}</h2>
              <a href="#" className="text-red-600 hover:underline text-sm sm:text-base">
                View All
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {section.products.map((product, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-2 sm:p-4">
                    <div className="flex justify-center w-full mb-2 sm:mb-4">
                      <img
                        src={product.img || "/placeholder.svg"}
                        alt={product.name}
                        className="h-32 sm:h-40 lg:h-48 w-auto object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base truncate">{product.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">Lorem abc</p>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 sm:h-4 sm:w-4 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm sm:text-lg font-bold text-red-600">{product.price}</span>
                      <span className="text-xs sm:text-sm text-gray-500 line-through">₹999</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* New Arrival Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 px-4 sm:px-6 lg:px-24">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">New Arrival</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-black text-white rounded-lg p-4 sm:p-6 lg:p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">PlayStation 5</h3>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <Button
                  variant="outline"
                  className="text-white border-white bg-transparent hover:bg-white hover:text-black"
                >
                  Shop Now
                </Button>
              </div>
              <img
                src={ps}
                alt="PlayStation 5"
                className="absolute right-0 bottom-0 opacity-80 w-32 sm:w-48 lg:w-64 h-auto"
              />
            </div>

            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="bg-black text-white rounded-lg p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Women's Collections</h3>
                  <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                    Featured woman collections that give you another vibe
                  </p>
                  <Button
                    variant="outline"
                    className="text-white border-white bg-transparent hover:bg-white hover:text-black"
                  >
                    Shop Now
                  </Button>
                </div>
                <img
                  src={women}
                  alt="Women's Collections"
                  className="absolute right-0 bottom-0 opacity-80 w-32 sm:w-48 h-auto"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="bg-black text-white rounded-lg p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">Speakers</h3>
                    <p className="mb-3 sm:mb-6 text-xs sm:text-sm lg:text-base">Amazon wireless speakers</p>
                    <Button
                      variant="outline"
                      className="text-white border-white bg-transparent hover:bg-white hover:text-black text-xs sm:text-sm"
                    >
                      Shop Now
                    </Button>
                  </div>
                  <img
                    src={speaker}
                    alt="Speakers"
                    className="absolute right-0 bottom-0 opacity-80 w-16 sm:w-24 lg:w-32 h-auto object-cover"
                  />
                </div>

                <div className="bg-black text-white rounded-lg p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">Perfume</h3>
                    <p className="mb-3 sm:mb-6 text-xs sm:text-sm lg:text-base">GUCCI INTENSE OUD EDP</p>
                    <Button
                      variant="outline"
                      className="text-white border-white bg-transparent hover:bg-white hover:text-black text-xs sm:text-sm"
                    >
                      Shop Now
                    </Button>
                  </div>
                  <img
                    src={perfume}
                    alt="Perfume"
                    className="absolute right-0 bottom-0 opacity-80 w-16 sm:w-24 lg:w-32 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <div className="flex items-center">
                <img src={Logo} alt="StarMart Logo" className="mr-2 h-8 sm:h-10" />
                <span className="text-lg sm:text-xl font-bold">StarMart</span>
              </div>
              <p className="text-sm text-gray-300">
                Lorem Ipsum is simply dummy text the printing and typesetting industry and Lorem
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400">
                  <Twitter className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <Youtube className="w-5 h-5" />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>

            {/* About */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">About</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Help</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:underline">
                    Payment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Return & Order Cancellations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Policies</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Seller
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Return & Refund
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shipping
                  </a>
                </li>
              </ul>
            </div>

            {/* Download App Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Download App</h3>
              <p className="text-sm text-gray-300">Save $3 with App New User Only</p>
              <QrCode className="w-20 h-20 sm:w-24 sm:h-24" />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400 text-center md:text-left">
                ©2024 ECOMPLUSSELLER.COM. All right reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8 text-sm">
                <a href="#" className="hover:underline">
                  Seller Registration
                </a>
                <a href="#" className="hover:underline">
                  Advertise with us
                </a>
                <a href="#" className="hover:underline">
                  Become an Affiliate
                </a>
                <a href="#" className="hover:underline">
                  Support Center
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
