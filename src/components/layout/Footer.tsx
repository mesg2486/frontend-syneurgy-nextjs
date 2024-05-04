import React from "react";

export default function Footer() {
  return (
    <footer className="bg-secondary font-medium text-sm text-white">
      <div className="c-container pb-12">
        <span className="border-t border-white/10 block"></span>
      </div>
      <div className="c-container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h5 className="font-bold text-base mb-6">SERVICES</h5>
          <ul className="space-y-4">
            <li className="mb-2 hover:text-white transition-all text-white/60">
              Platform
            </li>
            <li className="mb-2 hover:text-white transition-all text-white/60">
              Behavior Engine
            </li>
            <li className="mb-2 hover:text-white transition-all text-white/60">
              Bespoke AI Solutions
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-base mb-6">MENU</h5>
          <ul className="space-y-4">
            <li className="mb-2 hover:text-white transition-all text-white/60">
              The Science
            </li>
            <li className="mb-2 hover:text-white transition-all text-white/60">
              About Us
            </li>
            <li className="mb-2 hover:text-white transition-all text-white/60">
              Pricing
            </li>
            <li className="mb-2 hover:text-white transition-all text-white/60">
              Contact
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-base mb-6">MORE</h5>
          <ul className="space-y-4">
            <li className="mb-2 hover:text-white transition-all text-white/60">
              Terms of Service
            </li>
            <li className="mb-2 hover:text-white transition-all text-white/60">
              Privacy Policies
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-base mb-6">CONTACT</h5>
          <ul className="space-y-4">
            <li className="mb-2 hover:text-white transition-all text-white/60">
              LinkedIn
            </li>
            <li className="mb-2 hover:text-white transition-all text-white/60">
              Facebook
            </li>
            <li className="mb-2 hover:text-white transition-all text-white/60">
              Instagram
            </li>
          </ul>
        </div>
      </div>
      <div className="c-container pb-20 pt-8 bg-secondary text-white">
        <img src="/logo.png" alt="logo" className="block" />
        <p className="text-center text-sm pt-4">
          Copyright © 2024 Syneurgy | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
