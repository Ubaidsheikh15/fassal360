import React from 'react'


const Helm = props => {
  return (
 <svg
      {...props}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="crop-symbol">
        {/* Stem */}
        <rect x="30" y="26" width="4" height="36" rx="2" fill="#4F772D" />

        {/* Bottom leaves */}
        <path
          d="M32 42C24 42 18 50 16 56C24 56 30 52 32 48C34 52 40 56 48 56C46 50 40 42 32 42Z"
          fill="#88C932"
        />

        {/* Middle leaves */}
        <path
          d="M32 32C26 32 21 38 20 44C26 44 30 40 32 36C34 40 38 44 44 44C43 38 38 32 32 32Z"
          fill="#A0D96C"
        />

        {/* Top leaves */}
        <path
          d="M32 22C28 22 24 26 24 30C28 30 30 28 32 26C34 28 36 30 40 30C40 26 36 22 32 22Z"
          fill="#C2F24F"
        />

        {/* Tip bud */}
        <circle cx="32" cy="18" r="4" fill="#6B8E23" />
      </g>
    </svg>
     )
}

Helm.propTypes = {}

export default Helm