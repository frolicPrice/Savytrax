"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically importing modals
const LoginModal = dynamic(() => import("../components/LoginModal"), { ssr: false });
const RegisterModal = dynamic(() => import("../components/RegisterModal"), { ssr: false });

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSocialHubOpen, setIsSocialHubOpen] = useState(false); // Dropdown toggle
  const [isPremiumDropdownOpen, setIsPremiumDropdownOpen] = useState(false); // New Premium Dropdown toggle
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const token = localStorage.getItem("token");
    const theme = localStorage.getItem("theme");

    if (!token) {
      setIsLoginModalOpen(true);
    } else {
      setIsLoggedIn(true);
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const switchToRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const switchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const toggleSocialHub = () => {
    setIsSocialHubOpen(!isSocialHubOpen);
  };

  const togglePremiumDropdown = () => {
    setIsPremiumDropdownOpen(!isPremiumDropdownOpen);
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  if (!isMounted) return null;

  return (
    <header className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="nav flex justify-between items-center p-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-1">
          <Image src="/assets/icons/logo.svg" width={27} height={27} alt="logo" />
          <p className="nav-logo">Frolic<span className="text-primary">Wise</span></p>
        </Link>

        {/* Navbar Links */}
        <div className="flex items-center gap-5">
          {/* Social Hub Dropdown */}
          <div className="relative">
            <button
              className="text-gray-700 dark:text-white hover:text-primary transition flex items-center"
              onClick={toggleSocialHub}
            >
              🌍 Social Hub
              <Image src="/assets/icons/arrow-down.svg" alt="dropdown" width={16} height={16} className="ml-1" />
            </button>

            {isSocialHubOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border rounded-lg shadow-lg p-3 z-10">
                <Link href="/community" className="block text-gray-700 dark:text-white hover:text-primary transition">💬 Community</Link>
                <Link href="/rewards" className="block text-gray-700 dark:text-white hover:text-primary transition">🎁 Rewards</Link>
                <Link href="/reviews" className="block text-gray-700 dark:text-white hover:text-primary transition">🌟 User Reviews & Ratings</Link>
              </div>
            )}
          </div>

          {/* Subscription & Premium Link (Updated) */}
          <div className="relative">
            <button
              className="text-gray-700 dark:text-white hover:text-primary transition flex items-center"
              onClick={togglePremiumDropdown}
            >
              💎 Subscription & Premium
              <Image src="/assets/icons/arrow-down.svg" alt="dropdown" width={16} height={16} className="ml-1" />
            </button>

            {isPremiumDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border rounded-lg shadow-lg p-3 z-10">
                <Link href="/subscription" className="block text-gray-700 dark:text-white hover:text-primary transition">Subscription & Premium Features</Link>
                <Link href="/premium-membership" className="block text-gray-700 dark:text-white hover:text-primary transition">💎 Premium Membership</Link>
                <Link href="/early-access" className="block text-gray-700 dark:text-white hover:text-primary transition">🎁 Early Access to Deals</Link>
                <Link href="/price-tracking" className="block text-gray-700 dark:text-white hover:text-primary transition">📦 Price Tracking for Unlimited Products</Link>
                <Link href="/stock-alerts" className="block text-gray-700 dark:text-white hover:text-primary transition">🔔 Stock Availability Alerts</Link>
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="focus:outline-none">
            {isDarkMode ? "🌙" : "☀️"}
          </button>

          {/* Icons Section */}
          <Image src="/assets/icons/black-heart.svg" alt="heart" width={28} height={28} />
          <Image
            src="/assets/icons/user.svg"
            alt="user"
            width={28}
            height={28}
            className="cursor-pointer"
            onClick={() => setIsLoginModalOpen(true)}
          />
        </div>
      </nav>

      {/* Login & Register Modals */}
      {isLoginModalOpen && (
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          onSwitchToRegister={switchToRegister}
        />
      )}
      {isRegisterModalOpen && (
        <RegisterModal
          isOpen={isRegisterModalOpen}
          onClose={() => setIsRegisterModalOpen(false)}
          onSwitchToLogin={switchToLogin}
        />
      )}
    </header>
  );
};

export default Navbar;
