import React from 'react'

export function Gift({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22">
      <path
        d="M13.5 7.5h-12m12 0a1 1 0 001-1v-1a1 1 0 00-1-1h-12a1 1 0 00-1 1v1a1 1 0 001 1m12 0v5a2 2 0 01-2 2h-8a2 2 0 01-2-2v-5m6-3v-1m0 1H4.214A1.714 1.714 0 012.5 2.786V2.5a2 2 0 012-2 3 3 0 013 3m0 1h3.286c.947 0 1.714-.768 1.714-1.714V2.5a2 2 0 00-2-2 3 3 0 00-3 3m0 1v10"
        stroke="currentColor"></path>
    </svg>
  );
}
