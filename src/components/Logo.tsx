import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  isScrolled?: boolean;
}

export function Logo({ isScrolled = false }: LogoProps) {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className={`rounded-lg p-1.5 transition-colors ${
        isScrolled ? 'bg-brand-800' : 'bg-brand-700'
      }`}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className={`text-xl font-bold transition-colors ${
        isScrolled ? 'text-gray-900' : 'text-white/90'
      }`}>
        The Online Office
      </span>
    </Link>
  );
}