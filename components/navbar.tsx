"use client";
import React, { useEffect, useState } from "react";
import { DarkModeToggler } from "./dark-mode-toggler";
import Link from "next/link";
import { getAuthenticatedUser, signoutUser } from "@/lib/db/db.actions";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  console.log(user);

  const fetchUser = async () => {
    try {
      const res = await getAuthenticatedUser();
      setUser(res);
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSignOut = async () => {
    try {
      await signoutUser();
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="top-0 sticky flex justify-between items-center p-5 px-4 md:px-10 bg-white z-[99] h-[80px] md:h-[100px]">
      <Image
        className="cursor-pointer w-[150px] md:w-[200px]"
        src={require("../app/assets/bmvp.jpg")}
        alt="logo"
        width={200}
        height={130}
        onClick={() => scrollToSection("home")}
      />

      {/* Mobile menu button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center space-x-6">
        <p
          className="cursor-pointer hover:text-orange-500 transition-colors"
          onClick={() => scrollToSection("process")}
        >
          Our Process
        </p>
        <p
          className="cursor-pointer hover:text-orange-500 transition-colors"
          onClick={() => scrollToSection("testimonials")}
        >
          Testimonials
        </p>
        <p
          className="cursor-pointer hover:text-orange-500 transition-colors"
          onClick={() => scrollToSection("pricing")}
        >
          Pricing
        </p>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-[80px] left-0 right-0 bg-white border-t md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <p
              className="cursor-pointer hover:text-orange-500 transition-colors"
              onClick={() => scrollToSection("process")}
            >
              Our Process
            </p>
            <p
              className="cursor-pointer hover:text-orange-500 transition-colors"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </p>
            <p
              className="cursor-pointer hover:text-orange-500 transition-colors"
              onClick={() => scrollToSection("pricing")}
            >
              Pricing
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
