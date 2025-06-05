"use client"
import Logo from "/logo.png"
import Img1 from "/excited-well-dressed-young-woman-posing-light-wall-attractive-brunette-girl-pink-fur-coat-playing-with-her-hair-laughing 1.png"
import group from "/Group.png"
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
import time from "/image.png"
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
import { motion, useInView } from "framer-motion"
import { useMotionValue } from "framer-motion";
import { useRef } from "react"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const scaleOnHover = {
  scale: 1.05,
  transition: { duration: 0.2, ease: "easeInOut" },
}

// Custom hook for scroll animations
function useScrollAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  return { ref, isInView }
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    { name: "Man", href: "/man" },
    { name: "Woman", href: "/woman" },
    { name: "Electronic", href: "/electronic" },
    { name: "Cosmetics", href: "/cosmetics" },
    { name: "Grocery", href: "/grocery" },
  ]

  const headerY = useMotionValue(-100);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.div
        className="w-full sticky top-0 z-50"
        style={{ y: headerY }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Top Banner */}
        <div className="bg-red-700 text-white py-2 px-4">
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
        <motion.div
          className="bg-white border-b border-gray-200 py-2 sm:py-4 px-4 sm:px-6 lg:px-24"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-4">
            {/* Mobile Menu Button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <motion.nav
                  className="flex flex-col gap-4 mt-8"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {categories.map((category) => (
                    <motion.a
                      key={category.name}
                      href={category.href}
                      className="text-lg font-medium py-2 px-4 hover:bg-gray-100 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                      variants={staggerItem}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category.name}
                    </motion.a>
                  ))}
                  <motion.div className="border-t pt-4 mt-4" variants={staggerItem}>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white mb-4">Login / Registration</Button>
                    <div className="flex justify-around">
                      <motion.a
                        href="/returns"
                        className="flex flex-col items-center text-gray-600"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <RotateCcw className="h-6 w-6" />
                        <span className="text-xs mt-1">Return</span>
                      </motion.a>
                      <motion.a
                        href="/cart"
                        className="flex flex-col items-center text-gray-600"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ShoppingCart className="h-6 w-6" />
                        <span className="text-xs mt-1">Cart</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.nav>
              </SheetContent>
            </Sheet>

            {/* Logo and Location */}
            <div className="flex items-center gap-2 sm:gap-4">
              <motion.a href="/" className="flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <img src={Logo || "/placeholder.svg"} alt="StarMart Logo" className="h-8 sm:h-12" />
              </motion.a>
              <motion.div
                className="hidden md:flex items-center gap-2 text-sm text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <MapPin className="h-4 w-4 sm:h-6 sm:w-6" />
                <div className="flex flex-col">
                  <span className="text-xs">Delivered To</span>
                  <span className="font-medium text-black">Pune 412206</span>
                </div>
              </motion.div>
            </div>

            {/* Search Bar */}
            <motion.div
              className="flex-1 max-w-2xl mx-2 sm:mx-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="relative flex">
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 h-10 sm:h-12 pr-4 border-gray-300 rounded-l-md rounded-r-none focus:ring-red-500 focus:border-red-500 text-sm"
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="h-10 sm:h-12 px-3 sm:px-6 bg-red-600 hover:bg-red-700 rounded-l-none rounded-r-md">
                    <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side Actions */}
            <motion.div
              className="flex items-center gap-2 sm:gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {/* Language Selector - Hidden on mobile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="hidden sm:flex items-center gap-2 text-sm border lg:p-6">
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-6 h-10 sm:h-12 hidden lg:flex text-sm">
                  Login / Registration
                </Button>
              </motion.div>

              {/* Return and Cart - Hidden on mobile, shown in menu */}
              <div className="hidden lg:flex items-center gap-4">
                <motion.a
                  href="/returns"
                  className="flex flex-col items-center text-gray-600 hover:text-black"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={group} className="size-6 w-8" />
                  <span className="text-xs mt-1">Return</span>
                </motion.a>
                <motion.a
                  href="/cart"
                  className="flex flex-col items-center text-gray-600 hover:text-black"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="text-xs mt-1">Cart</span>
                </motion.a>
              </div>

              {/* Mobile Cart Icon */}
              <motion.a
                href="/cart"
                className="lg:hidden flex items-center text-gray-600 hover:text-black"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingCart className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Category Navigation - Desktop Only */}
        <motion.div
          className="bg-white border-b border-gray-200 py-3 px-4 hidden lg:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.nav
              className="flex items-center justify-center gap-8 xl:gap-12"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {categories.map((category) => (
                <motion.div key={category.name} variants={staggerItem}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="ghost"
                          className="flex items-center gap-1 text-gray-700 hover:text-black font-medium"
                        >
                          {category.name}
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                      <DropdownMenuItem>Subcategory 1</DropdownMenuItem>
                      <DropdownMenuItem>Subcategory 2</DropdownMenuItem>
                      <DropdownMenuItem>Subcategory 3</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </motion.div>
              ))}
            </motion.nav>
          </div>
        </motion.div>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
            <motion.div className="text-center md:text-left" variants={fadeInLeft} initial="hidden" animate="visible">
              <motion.p
                className=" text-gray-600 mb-[35px] sm:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                SUMMER 2024
              </motion.p>
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-[35px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                NEW COLLECTION
              </motion.h1>
              <motion.p
                className="text-gray-600 mb-6 sm:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                We know how large objects will act,
                <br className="hidden sm:block" />
                but things on a small scale.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-red-600 hover:bg-red-700 px-6 sm:px-8 py-2 sm:py-3">SHOP NOW</Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative flex justify-center"
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
            >
              <motion.img
                src={Img1}
                alt="Model in pink jacket"
                className="rounded-lg h-64 sm:h-80 lg:h-full w-auto object-cover"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Flash Sales */}
      <AnimatedSection>
        <div className="container mx-auto">
          <motion.div
            className="flex justify-between items-center mb-6 sm:mb-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl font-bold">Flash Sales</h2>
            <motion.a
              href="#"
              className="text-red-600 hover:underline text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
            >
              View All
            </motion.a>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
                img: shoe,
                desc: "lorem abc",
                rating: 4,
              },
            ].map((product, index) => (
              <motion.div key={index} variants={staggerItem}>
                <motion.div whileHover={scaleOnHover}>
                  <Card className="group hover:shadow-lg transition-shadow">
                    <CardContent className="">
                      <motion.span
                        className="mb-2 sm:mb-3 px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full uppercase"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                      >
                        Deal
                      </motion.span>
                      <div className="relative flex justify-center w-full mb-2 sm:mb-4">
                        <div className="flex flex-col justify-center items-center">
                          <img src={time} className=" w-20 sm:w-32 mb-4" />
                          <motion.img
                            src={product.img || "/placeholder.svg"}
                            alt={product.name}
                            className="h-24 sm:h-40 lg:h-48 w-auto object-fit rounded-lg"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <Heart className="absolute top-[-20px] right-2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-red-600 cursor-pointer" />
                      </div>
                      <h3 className="font-semibold text-sm sm:text-base truncate">{product.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">Lorem abc</p>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.05 + 0.7 }}
                          >
                            <Star
                              className={`h-3 w-3 sm:h-4 sm:w-4 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                            />
                          </motion.div>
                        ))}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm sm:text-lg font-bold text-red-600">{product.price}</span>
                        <span className="text-xs sm:text-sm text-gray-500 line-through">$160</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Trending Must-haves */}
      <div>
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

      </div>

      {/* Music Experience Section */}
      <AnimatedSection className="bg-black text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
            <motion.div
              className="text-center md:text-left"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Enhance Your Music
                <br className="hidden sm:block" /> Experience
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-red-600 hover:bg-red-700 px-6 sm:px-8 py-2 sm:py-3">Buy Now!</Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative flex justify-center"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.img
                src={speaker}
                alt="Music equipment"
                className="rounded-lg w-48 sm:w-64 lg:w-72 h-auto"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Product Sections */}
      {[
        {
          title: "Gadget Sell",
          products: [
            { name: "iPhone 13 Pro", price: "₹1,19,900", img: phone },
            { name: "Apple Watch Series", price: "₹29,999", img: watch },
            { name: "Boat Rockerz 450", price: "₹1,499", img: headphone },
            { name: "Lenovo Legion 5", price: "₹84,990", img: laptop },
          ],
        },
        {
          title: "Home Appliance",
          products: [
            { name: "LG Wet Grinder", price: "₹6,999", img: fridge },
            { name: "OnePlus 55 Inch TV", price: "₹42,999", img: tv },
            { name: "LG 6.2 kg 5 Star (1st)", price: "₹15,490", img: machine },
            { name: "LG 6.2 kg 5 Star (2nd)", price: "₹15,490", img: cooler },
          ],
        },
        {
          title: "Top Fashion Deals",
          products: [
            { name: "Colorful Stylish Shirt", price: "₹899", img: one },
            { name: "Mens Solid T-Shirt 1", price: "₹499", img: two },
            { name: "Mens Solid T-Shirt 2", price: "₹499", img: three },
            { name: "Mens Solid T-Shirt 3", price: "₹499", img: four },
          ],
        },
      ].map((section, sectionIndex) => (
        <AnimatedSection key={sectionIndex}>
          <div className="container mx-auto">
            <motion.div
              className="flex justify-between items-center mb-6 sm:mb-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-bold">{section.title}</h2>
              <motion.a
                href="#"
                className="text-red-600 hover:underline text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
              >
                View All
              </motion.a>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {section.products.map((product, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <motion.div whileHover={scaleOnHover}>
                    <Card className="group hover:shadow-lg transition-shadow">
                      <CardContent className="">
                        <div className="flex flex-col justify-center items-center">
                          <img src={time} className=" w-20 sm:w-32 mb-4" />
                          <motion.img
                            src={product.img || "/placeholder.svg"}
                            alt={product.name}
                            className="h-24 sm:h-40 lg:h-48 w-auto object-fit rounded-lg"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <h3 className="font-semibold text-sm sm:text-base truncate">{product.name}</h3>
                        <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">Lorem abc</p>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
                            >
                              <Star
                                className={`h-3 w-3 sm:h-4 sm:w-4 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                              />
                            </motion.div>
                          ))}
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm sm:text-lg font-bold text-red-600">{product.price}</span>
                          <span className="text-xs sm:text-sm text-gray-500 line-through">₹999</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      ))}

      {/* New Arrival Section */}
      <AnimatedSection className="bg-gray-50">
        <div className="container mx-auto">
          <motion.h2
            className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            New Arrival
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-black text-white rounded-lg p-4 sm:p-6 lg:p-8 relative overflow-hidden"
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative z-10">
                <motion.h3
                  className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  PlayStation 5
                </motion.h3>
                <motion.p
                  className="mb-4 sm:mb-6 text-sm sm:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Black and White version of the PS5 coming out on sale.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="text-white border-white bg-transparent hover:bg-white hover:text-black"
                  >
                    Shop Now
                  </Button>
                </motion.div>
              </div>
              <motion.img
                src={ps}
                alt="PlayStation 5"
                className="absolute right-0 bottom-0 opacity-80 w-32 sm:w-48 lg:w-64 h-auto"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 0.8, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
            </motion.div>

            <motion.div className="flex flex-col gap-4 sm:gap-6" variants={staggerItem}>
              <motion.div
                className="bg-black text-white rounded-lg p-4 sm:p-6 lg:p-8 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative z-10">
                  <motion.h3
                    className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Women's Collections
                  </motion.h3>
                  <motion.p
                    className="mb-4 sm:mb-6 text-sm sm:text-base"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Featured woman collections that give you another vibe
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="text-white border-white bg-transparent hover:bg-white hover:text-black"
                    >
                      Shop Now
                    </Button>
                  </motion.div>
                </div>
                <motion.img
                  src={women}
                  alt="Women's Collections"
                  className="absolute right-0 bottom-0 opacity-80 w-32 sm:w-48 h-auto"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 0.8, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-black text-white rounded-lg p-4 sm:p-6 lg:p-8 relative overflow-hidden"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative z-10">
                    <motion.h3
                      className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      Speakers
                    </motion.h3>
                    <motion.p
                      className="mb-3 sm:mb-6 text-xs sm:text-sm lg:text-base"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      Amazon wireless speakers
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        className="text-white border-white bg-transparent hover:bg-white hover:text-black text-xs sm:text-sm"
                      >
                        Shop Now
                      </Button>
                    </motion.div>
                  </div>
                  <motion.img
                    src={speaker}
                    alt="Speakers"
                    className="absolute right-0 bottom-0 opacity-80 w-16 sm:w-24 lg:w-32 h-auto object-cover"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 0.8, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  />
                </motion.div>

                <motion.div
                  className="bg-black text-white rounded-lg p-4 sm:p-6 lg:p-8 relative overflow-hidden"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative z-10">
                    <motion.h3
                      className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      Perfume
                    </motion.h3>
                    <motion.p
                      className="mb-3 sm:mb-6 text-xs sm:text-sm lg:text-base"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      GUCCI INTENSE OUD EDP
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        className="text-white border-white bg-transparent hover:bg-white hover:text-black text-xs sm:text-sm"
                      >
                        Shop Now
                      </Button>
                    </motion.div>
                  </div>
                  <motion.img
                    src={perfume}
                    alt="Perfume"
                    className="absolute right-0 bottom-0 opacity-80 w-16 sm:w-24 lg:w-32 h-auto"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 0.8, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    whileHover={{ scale: 1.2, rotate: -10 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <motion.footer
        className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Company Info */}
            <motion.div className="lg:col-span-2 space-y-4 sm:space-y-6" variants={staggerItem}>
              <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
                <img src={Logo || "/placeholder.svg"} alt="StarMart Logo" className="mr-2 h-8 sm:h-10" />
                <span className="text-lg sm:text-xl font-bold">StarMart</span>
              </motion.div>
              <p className="text-sm text-gray-300">
                Lorem Ipsum is simply dummy text the printing and typesetting industry and Lorem
              </p>
              <motion.div
                className="flex space-x-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: Twitter, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Youtube, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="hover:text-gray-400"
                    variants={staggerItem}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">Social Media</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Footer Links */}
            {[
              {
                title: "About",
                links: ["Contact Us", "About Us", "Careers"],
              },
              {
                title: "Help",
                links: ["Payment", "Shipping", "Return & Order Cancellations", "FAQ"],
              },
              {
                title: "Policies",
                links: ["Privacy", "Security", "Terms & Conditions", "Seller", "Return & Refund", "Shipping"],
              },
            ].map((section, index) => (
              <motion.div key={index} className="space-y-4" variants={staggerItem}>
                <h3 className="text-lg font-medium">{section.title}</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {section.links.map((link, linkIndex) => (
                    <motion.li key={linkIndex}>
                      <motion.a
                        href="#"
                        className="hover:underline"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Download App Section */}
            <motion.div className="space-y-4" variants={staggerItem}>
              <h3 className="text-lg font-medium">Download App</h3>
              <p className="text-sm text-gray-300">Save $3 with App New User Only</p>
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                <QrCode className="w-20 h-20 sm:w-24 sm:h-24" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400 text-center md:text-left">
                ©2024 ECOMPLUSSELLER.COM. All right reserved.
              </p>
              <motion.div
                className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8 text-sm"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {["Seller Registration", "Advertise with us", "Become an Affiliate", "Support Center"].map(
                  (link, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="hover:underline"
                      variants={staggerItem}
                      whileHover={{ scale: 1.05 }}
                    >
                      {link}
                    </motion.a>
                  ),
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}


// Helper component for animated sections
function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isInView } = useScrollAnimation()

  return (
    <motion.section
      ref={ref}
      className={`py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-24 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  )
}