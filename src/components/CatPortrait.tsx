import type { Cat } from "../data/cats";

interface PortraitProps {
  size?: number;
}

function JonesyPortrait({ size = 240 }: PortraitProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="j-bg" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#0F1A0F" />
          <stop offset="100%" stopColor="#040804" />
        </radialGradient>
        <clipPath id="j-clip">
          <circle cx="120" cy="120" r="108" />
        </clipPath>
      </defs>

      {/* Outer decorative rings */}
      <circle
        cx="120"
        cy="120"
        r="116"
        fill="none"
        stroke="#1A3A1A"
        strokeWidth="1"
      />
      <circle
        cx="120"
        cy="120"
        r="112"
        fill="none"
        stroke="#2A5A2A"
        strokeWidth="1.5"
      />

      {/* Frame bolts at compass points */}
      <circle
        cx="120"
        cy="4"
        r="4.5"
        fill="#1E3A1E"
        stroke="#4A7A4A"
        strokeWidth="1.5"
      />
      <circle cx="120" cy="4" r="1.5" fill="#6A9A6A" />
      <circle
        cx="236"
        cy="120"
        r="4.5"
        fill="#1E3A1E"
        stroke="#4A7A4A"
        strokeWidth="1.5"
      />
      <circle cx="236" cy="120" r="1.5" fill="#6A9A6A" />
      <circle
        cx="120"
        cy="236"
        r="4.5"
        fill="#1E3A1E"
        stroke="#4A7A4A"
        strokeWidth="1.5"
      />
      <circle cx="120" cy="236" r="1.5" fill="#6A9A6A" />
      <circle
        cx="4"
        cy="120"
        r="4.5"
        fill="#1E3A1E"
        stroke="#4A7A4A"
        strokeWidth="1.5"
      />
      <circle cx="4" cy="120" r="1.5" fill="#6A9A6A" />

      {/* Diagonal tick marks */}
      <line
        x1="176"
        y1="15"
        x2="172"
        y2="21"
        stroke="#3A5A3A"
        strokeWidth="1.5"
      />
      <line
        x1="225"
        y1="64"
        x2="219"
        y2="68"
        stroke="#3A5A3A"
        strokeWidth="1.5"
      />
      <line
        x1="225"
        y1="176"
        x2="219"
        y2="172"
        stroke="#3A5A3A"
        strokeWidth="1.5"
      />
      <line
        x1="176"
        y1="225"
        x2="172"
        y2="219"
        stroke="#3A5A3A"
        strokeWidth="1.5"
      />
      <line
        x1="64"
        y1="15"
        x2="68"
        y2="21"
        stroke="#3A5A3A"
        strokeWidth="1.5"
      />
      <line
        x1="15"
        y1="64"
        x2="21"
        y2="68"
        stroke="#3A5A3A"
        strokeWidth="1.5"
      />
      <line
        x1="15"
        y1="176"
        x2="21"
        y2="172"
        stroke="#3A5A3A"
        strokeWidth="1.5"
      />
      <line
        x1="64"
        y1="225"
        x2="68"
        y2="219"
        stroke="#3A5A3A"
        strokeWidth="1.5"
      />

      {/* Background */}
      <circle cx="120" cy="120" r="108" fill="url(#j-bg)" />

      {/* Clipped cat portrait */}
      <g clipPath="url(#j-clip)">
        {/* Ambient green at top */}
        <ellipse
          cx="120"
          cy="38"
          rx="82"
          ry="38"
          fill="#1A4A1A"
          opacity="0.35"
        />

        {/* Left ear */}
        <polygon points="65,108 48,62 93,97" fill="#C55A18" />
        <polygon points="70,106 58,76 87,99" fill="#7A1F1F" opacity="0.8" />
        {/* Right ear */}
        <polygon points="175,108 192,62 147,97" fill="#C55A18" />
        <polygon points="170,106 182,76 153,99" fill="#7A1F1F" opacity="0.8" />

        {/* Head */}
        <ellipse cx="120" cy="152" rx="72" ry="62" fill="#C55A18" />

        {/* Cheek warmth */}
        <ellipse
          cx="84"
          cy="157"
          rx="22"
          ry="16"
          fill="#D07030"
          opacity="0.35"
        />
        <ellipse
          cx="156"
          cy="157"
          rx="22"
          ry="16"
          fill="#D07030"
          opacity="0.35"
        />

        {/* Tabby M-stripes on forehead */}
        <path
          d="M108,121 Q120,111 132,121"
          stroke="#8B3210"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M110,113 Q120,103 130,113"
          stroke="#8B3210"
          strokeWidth="2.5"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M112,105 Q120,96 128,105"
          stroke="#8B3210"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />

        {/* Muzzle */}
        <ellipse
          cx="120"
          cy="169"
          rx="30"
          ry="18"
          fill="#D97030"
          opacity="0.3"
        />

        {/* Left eye — narrowed/alert */}
        <ellipse cx="92" cy="138" rx="17" ry="10" fill="#F0E8D0" />
        <ellipse cx="92" cy="138" rx="13" ry="9" fill="#7CC200" />
        <ellipse cx="92" cy="138" rx="5" ry="8.5" fill="#0A0A0A" />
        <circle cx="88" cy="134" r="2.5" fill="white" opacity="0.9" />
        <circle cx="94" cy="141" r="1" fill="white" opacity="0.35" />

        {/* Right eye */}
        <ellipse cx="148" cy="138" rx="17" ry="10" fill="#F0E8D0" />
        <ellipse cx="148" cy="138" rx="13" ry="9" fill="#7CC200" />
        <ellipse cx="148" cy="138" rx="5" ry="8.5" fill="#0A0A0A" />
        <circle cx="144" cy="134" r="2.5" fill="white" opacity="0.9" />
        <circle cx="150" cy="141" r="1" fill="white" opacity="0.35" />

        {/* Nose */}
        <polygon points="120,158 114,166 126,166" fill="#B04040" />

        {/* Mouth */}
        <path
          d="M120,166 L120,171 M120,171 Q110,178 107,174 M120,171 Q130,178 133,174"
          stroke="#8B2828"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Whiskers */}
        <line
          x1="88"
          y1="163"
          x2="26"
          y2="159"
          stroke="#E8D8B0"
          strokeWidth="1"
          opacity="0.65"
        />
        <line
          x1="88"
          y1="168"
          x2="24"
          y2="168"
          stroke="#E8D8B0"
          strokeWidth="1"
          opacity="0.65"
        />
        <line
          x1="88"
          y1="173"
          x2="28"
          y2="177"
          stroke="#E8D8B0"
          strokeWidth="1"
          opacity="0.65"
        />
        <line
          x1="152"
          y1="163"
          x2="214"
          y2="159"
          stroke="#E8D8B0"
          strokeWidth="1"
          opacity="0.65"
        />
        <line
          x1="152"
          y1="168"
          x2="216"
          y2="168"
          stroke="#E8D8B0"
          strokeWidth="1"
          opacity="0.65"
        />
        <line
          x1="152"
          y1="173"
          x2="212"
          y2="177"
          stroke="#E8D8B0"
          strokeWidth="1"
          opacity="0.65"
        />
      </g>

      {/* Frame inner glow */}
      <circle
        cx="120"
        cy="120"
        r="108"
        fill="none"
        stroke="#4A8A4A"
        strokeWidth="1"
        opacity="0.25"
      />
    </svg>
  );
}

function SpotPortrait({ size = 240 }: PortraitProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="s-bg" cx="50%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#0C1840" />
          <stop offset="100%" stopColor="#03070F" />
        </radialGradient>
        <clipPath id="s-clip">
          <circle cx="120" cy="120" r="108" />
        </clipPath>
      </defs>

      {/* Background */}
      <circle cx="120" cy="120" r="108" fill="url(#s-bg)" />

      {/* LCARS-style frame ring */}
      <circle
        cx="120"
        cy="120"
        r="109"
        fill="none"
        stroke="#FF9500"
        strokeWidth="3"
      />

      {/* LCARS rectangular status blocks — bottom left */}
      <rect x="5" y="138" width="26" height="8" rx="2" fill="#FF9500" />
      <rect x="5" y="150" width="20" height="6" rx="2" fill="#CC6000" />
      <rect
        x="5"
        y="160"
        width="26"
        height="6"
        rx="2"
        fill="#FF9500"
        opacity="0.55"
      />

      {/* LCARS blocks — top right */}
      <rect
        x="209"
        y="76"
        width="24"
        height="6"
        rx="2"
        fill="#FF9500"
        opacity="0.75"
      />
      <rect
        x="213"
        y="86"
        width="18"
        height="5"
        rx="2"
        fill="#CC6000"
        opacity="0.75"
      />

      {/* Tick marks at diagonals */}
      <path
        d="M200,36 L212,28"
        stroke="#FF9500"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M40,36 L28,28"
        stroke="#FF9500"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M200,204 L212,212"
        stroke="#FF9500"
        strokeWidth="1.5"
        opacity="0.5"
      />

      {/* Clipped cat portrait */}
      <g clipPath="url(#s-clip)">
        {/* Starfield */}
        <circle cx="38" cy="48" r="1" fill="white" opacity="0.6" />
        <circle cx="185" cy="34" r="1.5" fill="white" opacity="0.5" />
        <circle cx="162" cy="54" r="1" fill="white" opacity="0.4" />
        <circle cx="52" cy="68" r="1" fill="white" opacity="0.5" />
        <circle cx="195" cy="72" r="1" fill="white" opacity="0.35" />
        <circle cx="30" cy="90" r="1.5" fill="#C0D0FF" opacity="0.45" />
        <circle cx="208" cy="45" r="1" fill="white" opacity="0.4" />

        {/* Left ear */}
        <polygon points="65,108 48,62 93,97" fill="#D47A15" />
        <polygon points="70,106 58,76 87,99" fill="#C04060" opacity="0.75" />
        {/* Right ear */}
        <polygon points="175,108 192,62 147,97" fill="#D47A15" />
        <polygon points="170,106 182,76 153,99" fill="#C04060" opacity="0.75" />

        {/* Head */}
        <ellipse cx="120" cy="152" rx="72" ry="62" fill="#D47A15" />

        {/* Cheek warmth */}
        <ellipse
          cx="84"
          cy="157"
          rx="22"
          ry="16"
          fill="#E09030"
          opacity="0.38"
        />
        <ellipse
          cx="156"
          cy="157"
          rx="22"
          ry="16"
          fill="#E09030"
          opacity="0.38"
        />

        {/* Tabby M-stripes */}
        <path
          d="M108,120 Q120,110 132,120"
          stroke="#8B4A08"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M110,112 Q120,102 130,112"
          stroke="#8B4A08"
          strokeWidth="2.5"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M112,104 Q120,95 128,104"
          stroke="#8B4A08"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />

        {/* Muzzle */}
        <ellipse
          cx="120"
          cy="169"
          rx="30"
          ry="18"
          fill="#E09030"
          opacity="0.3"
        />

        {/* Left eye — open/curious */}
        <ellipse cx="92" cy="137" rx="18" ry="13" fill="#F5EDD5" />
        <ellipse cx="92" cy="137" rx="14" ry="12" fill="#D4AA00" />
        <ellipse cx="92" cy="137" rx="5.5" ry="10" fill="#0A0A0A" />
        <circle cx="88" cy="133" r="2.5" fill="white" opacity="0.9" />

        {/* Right eye */}
        <ellipse cx="148" cy="137" rx="18" ry="13" fill="#F5EDD5" />
        <ellipse cx="148" cy="137" rx="14" ry="12" fill="#D4AA00" />
        <ellipse cx="148" cy="137" rx="5.5" ry="10" fill="#0A0A0A" />
        <circle cx="144" cy="133" r="2.5" fill="white" opacity="0.9" />

        {/* Nose */}
        <polygon points="120,157 114,165 126,165" fill="#B04050" />

        {/* Mouth */}
        <path
          d="M120,165 L120,170 M120,170 Q110,177 107,173 M120,170 Q130,177 133,173"
          stroke="#882838"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Whiskers */}
        <line
          x1="88"
          y1="162"
          x2="26"
          y2="158"
          stroke="#F0E0B8"
          strokeWidth="1"
          opacity="0.65"
        />
        <line
          x1="88"
          y1="167"
          x2="24"
          y2="167"
          stroke="#F0E0B8"
          strokeWidth="1"
          opacity="0.65"
        />
        <line
          x1="88"
          y1="172"
          x2="28"
          y2="176"
          stroke="#F0E0B8"
          strokeWidth="1"
          opacity="0.65"
        />
        <line
          x1="152"
          y1="162"
          x2="214"
          y2="158"
          stroke="#F0E0B8"
          strokeWidth="1"
          opacity="0.65"
        />
        <line
          x1="152"
          y1="167"
          x2="216"
          y2="167"
          stroke="#F0E0B8"
          strokeWidth="1"
          opacity="0.65"
        />
        <line
          x1="152"
          y1="172"
          x2="212"
          y2="176"
          stroke="#F0E0B8"
          strokeWidth="1"
          opacity="0.65"
        />
      </g>
    </svg>
  );
}

function GoosePortrait({ size = 240 }: PortraitProps) {
  const starburstAngles = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="g-bg" cx="50%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#1C0838" />
          <stop offset="100%" stopColor="#060112" />
        </radialGradient>
        <clipPath id="g-clip">
          <circle cx="120" cy="120" r="108" />
        </clipPath>
      </defs>

      {/* Star dots around frame */}
      {[
        [120, 7, 2, "#E040FB"],
        [68, 17, 1.5, "#B040C8"],
        [28, 52, 1.5, "#9030B0"],
        [10, 98, 2, "#B040C8"],
        [14, 148, 1.5, "#9030B0"],
        [38, 196, 1.5, "#B040C8"],
        [72, 220, 2, "#E040FB"],
        [168, 220, 2, "#E040FB"],
        [202, 196, 1.5, "#B040C8"],
        [226, 148, 1.5, "#9030B0"],
        [230, 98, 2, "#B040C8"],
        [212, 52, 1.5, "#9030B0"],
        [172, 17, 1.5, "#B040C8"],
      ].map(([x, y, r, fill], i) => (
        <circle
          key={i}
          cx={x as number}
          cy={y as number}
          r={r as number}
          fill={fill as string}
          opacity={0.7}
        />
      ))}

      {/* Frame rings */}
      <circle
        cx="120"
        cy="120"
        r="113"
        fill="none"
        stroke="#5A1A8A"
        strokeWidth="1"
        opacity="0.5"
      />
      <circle
        cx="120"
        cy="120"
        r="109"
        fill="none"
        stroke="#9B30D4"
        strokeWidth="2.5"
      />

      {/* Starburst accents */}
      {starburstAngles.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={angle}
            x1={120 + 112 * Math.cos(rad)}
            y1={120 + 112 * Math.sin(rad)}
            x2={120 + 106 * Math.cos(rad)}
            y2={120 + 106 * Math.sin(rad)}
            stroke="#E040FB"
            strokeWidth="2"
            opacity="0.6"
          />
        );
      })}

      {/* Background */}
      <circle cx="120" cy="120" r="108" fill="url(#g-bg)" />

      {/* Clipped cat portrait */}
      <g clipPath="url(#g-clip)">
        {/* Nebula wisps */}
        <ellipse
          cx="120"
          cy="75"
          rx="92"
          ry="52"
          fill="#3A1060"
          opacity="0.45"
        />
        <ellipse
          cx="78"
          cy="95"
          rx="52"
          ry="42"
          fill="#4A1880"
          opacity="0.25"
        />

        {/* Bg stars */}
        <circle cx="38" cy="38" r="1" fill="white" opacity="0.7" />
        <circle cx="192" cy="48" r="1.5" fill="white" opacity="0.5" />
        <circle cx="168" cy="28" r="1" fill="white" opacity="0.6" />
        <circle cx="52" cy="62" r="1" fill="white" opacity="0.5" />
        <circle cx="202" cy="72" r="1" fill="white" opacity="0.4" />
        <circle cx="28" cy="88" r="1.5" fill="#E0B0FF" opacity="0.5" />

        {/* Left ear */}
        <polygon points="65,108 48,62 93,97" fill="#E09060" />
        <polygon points="70,106 58,76 87,99" fill="#C86080" opacity="0.75" />
        {/* Right ear */}
        <polygon points="175,108 192,62 147,97" fill="#E09060" />
        <polygon points="170,106 182,76 153,99" fill="#C86080" opacity="0.75" />

        {/* Head — slightly peachier/lighter orange */}
        <ellipse cx="120" cy="152" rx="72" ry="62" fill="#E09060" />

        {/* Cheek warmth */}
        <ellipse
          cx="84"
          cy="157"
          rx="22"
          ry="16"
          fill="#F0B080"
          opacity="0.38"
        />
        <ellipse
          cx="156"
          cy="157"
          rx="22"
          ry="16"
          fill="#F0B080"
          opacity="0.38"
        />

        {/* Subtle tabby markings — lighter than other cats */}
        <path
          d="M109,119 Q120,109 131,119"
          stroke="#C06840"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M111,111 Q120,102 129,111"
          stroke="#C06840"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        />

        {/* Muzzle */}
        <ellipse
          cx="120"
          cy="169"
          rx="30"
          ry="18"
          fill="#F0B080"
          opacity="0.38"
        />

        {/* Left eye — wide/innocent with alien teal glow */}
        <ellipse cx="92" cy="137" rx="18" ry="14" fill="#F0ECD8" />
        <ellipse cx="92" cy="137" rx="14" ry="13" fill="#00B8CC" />
        <ellipse
          cx="92"
          cy="137"
          rx="14"
          ry="13"
          fill="none"
          stroke="#00E0FF"
          strokeWidth="0.8"
          opacity="0.55"
        />
        <ellipse cx="92" cy="137" rx="5.5" ry="11" fill="#0A0A0A" />
        <circle cx="88" cy="132" r="2.5" fill="white" opacity="0.9" />

        {/* Right eye */}
        <ellipse cx="148" cy="137" rx="18" ry="14" fill="#F0ECD8" />
        <ellipse cx="148" cy="137" rx="14" ry="13" fill="#00B8CC" />
        <ellipse
          cx="148"
          cy="137"
          rx="14"
          ry="13"
          fill="none"
          stroke="#00E0FF"
          strokeWidth="0.8"
          opacity="0.55"
        />
        <ellipse cx="148" cy="137" rx="5.5" ry="11" fill="#0A0A0A" />
        <circle cx="144" cy="132" r="2.5" fill="white" opacity="0.9" />

        {/* Nose */}
        <polygon points="120,157 114,165 126,165" fill="#B04558" />

        {/* Mouth */}
        <path
          d="M120,165 L120,170 M120,170 Q110,177 107,173 M120,170 Q130,177 133,173"
          stroke="#882838"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Whiskers */}
        <line
          x1="88"
          y1="162"
          x2="26"
          y2="158"
          stroke="#F0E0C8"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="88"
          y1="167"
          x2="24"
          y2="167"
          stroke="#F0E0C8"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="88"
          y1="172"
          x2="28"
          y2="176"
          stroke="#F0E0C8"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="152"
          y1="162"
          x2="214"
          y2="158"
          stroke="#F0E0C8"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="152"
          y1="167"
          x2="216"
          y2="167"
          stroke="#F0E0C8"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="152"
          y1="172"
          x2="212"
          y2="176"
          stroke="#F0E0C8"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Tentacle hints at bottom — very subtle */}
        <path
          d="M96,230 Q101,216 110,211 Q118,207 120,216 Q122,207 130,211 Q139,216 144,230"
          fill="none"
          stroke="#4A1880"
          strokeWidth="3"
          opacity="0.45"
          strokeLinecap="round"
        />
        <path
          d="M84,234 Q92,222 102,217"
          fill="none"
          stroke="#3A1060"
          strokeWidth="2"
          opacity="0.35"
          strokeLinecap="round"
        />
        <path
          d="M156,234 Q148,222 138,217"
          fill="none"
          stroke="#3A1060"
          strokeWidth="2"
          opacity="0.35"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

function CatRedDwarfPortrait({ size = 240 }: PortraitProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="rd-bg" cx="50%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#280004" />
          <stop offset="100%" stopColor="#0A0001" />
        </radialGradient>
        <clipPath id="rd-clip">
          <circle cx="120" cy="120" r="108" />
        </clipPath>
      </defs>

      {/* Outer frame rings */}
      <circle
        cx="120"
        cy="120"
        r="114"
        fill="none"
        stroke="#6B0000"
        strokeWidth="1"
      />
      <circle
        cx="120"
        cy="120"
        r="109"
        fill="none"
        stroke="#8B0000"
        strokeWidth="2.5"
      />

      {/* Art-deco gold arcs */}
      <path
        d="M58,25 Q120,4 182,25"
        fill="none"
        stroke="#DAA520"
        strokeWidth="2.5"
        opacity="0.85"
      />
      <path
        d="M62,31 Q120,12 178,31"
        fill="none"
        stroke="#DAA520"
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M58,215 Q120,236 182,215"
        fill="none"
        stroke="#DAA520"
        strokeWidth="2.5"
        opacity="0.85"
      />
      <path
        d="M62,209 Q120,228 178,209"
        fill="none"
        stroke="#DAA520"
        strokeWidth="1"
        opacity="0.4"
      />

      {/* Gold diamond accents at compass points */}
      <polygon
        points="120,4 125,12 120,20 115,12"
        fill="#DAA520"
        opacity="0.9"
      />
      <polygon
        points="120,220 125,228 120,236 115,228"
        fill="#DAA520"
        opacity="0.9"
      />
      <polygon
        points="4,120 12,115 20,120 12,125"
        fill="#DAA520"
        opacity="0.9"
      />
      <polygon
        points="220,120 228,115 236,120 228,125"
        fill="#DAA520"
        opacity="0.9"
      />

      {/* Background */}
      <circle cx="120" cy="120" r="108" fill="url(#rd-bg)" />

      {/* Clipped cat portrait */}
      <g clipPath="url(#rd-clip)">
        {/* Crimson atmosphere */}
        <ellipse
          cx="120"
          cy="42"
          rx="86"
          ry="36"
          fill="#3A0000"
          opacity="0.4"
        />

        {/* Cat ears — smaller, on top of humanoid head */}
        <polygon points="80,82 66,46 102,75" fill="#1C1C1C" />
        <polygon points="84,80 74,55 98,76" fill="#3A0A0A" opacity="0.7" />
        <polygon points="160,82 174,46 138,75" fill="#1C1C1C" />
        <polygon points="156,80 166,55 142,76" fill="#3A0A0A" opacity="0.7" />

        {/* Humanoid head — taller, narrower oval */}
        <ellipse cx="120" cy="156" rx="60" ry="78" fill="#1C1C1C" />

        {/* Silver groomed highlights */}
        <ellipse
          cx="112"
          cy="98"
          rx="24"
          ry="11"
          fill="#3A3A3A"
          opacity="0.55"
        />
        <ellipse
          cx="70"
          cy="148"
          rx="14"
          ry="34"
          fill="#2A2A2A"
          opacity="0.5"
        />
        <ellipse
          cx="170"
          cy="148"
          rx="14"
          ry="34"
          fill="#2A2A2A"
          opacity="0.5"
        />

        {/* White/silver chest showing at bottom */}
        <ellipse
          cx="120"
          cy="228"
          rx="46"
          ry="26"
          fill="#D0D0C0"
          opacity="0.95"
        />
        <ellipse
          cx="120"
          cy="220"
          rx="36"
          ry="16"
          fill="#E8E8D8"
          opacity="0.7"
        />

        {/* Collar hint */}
        <path
          d="M82,207 Q120,216 158,207"
          fill="#8B0000"
          stroke="#DAA520"
          strokeWidth="1"
          opacity="0.8"
        />

        {/* Left eye — golden/vain */}
        <ellipse cx="98" cy="143" rx="17" ry="12" fill="#F0ECD8" />
        <ellipse cx="98" cy="143" rx="13" ry="11" fill="#D4AA00" />
        <ellipse cx="98" cy="143" rx="5" ry="9" fill="#0A0A0A" />
        <circle cx="94" cy="139" r="2.5" fill="white" opacity="0.9" />

        {/* Right eye */}
        <ellipse cx="142" cy="143" rx="17" ry="12" fill="#F0ECD8" />
        <ellipse cx="142" cy="143" rx="13" ry="11" fill="#D4AA00" />
        <ellipse cx="142" cy="143" rx="5" ry="9" fill="#0A0A0A" />
        <circle cx="138" cy="139" r="2.5" fill="white" opacity="0.9" />

        {/* Humanoid nose — subtle */}
        <ellipse cx="120" cy="162" rx="7" ry="5" fill="#2A2A2A" />
        <ellipse cx="120" cy="161" rx="5" ry="3.5" fill="#4A1A1A" />

        {/* Mouth — thin, slightly smug */}
        <path
          d="M111,173 Q120,179 129,173"
          fill="none"
          stroke="#3A2A2A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Whiskers */}
        <line
          x1="90"
          y1="165"
          x2="32"
          y2="157"
          stroke="#D0D0B0"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="90"
          y1="170"
          x2="30"
          y2="170"
          stroke="#D0D0B0"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="90"
          y1="175"
          x2="34"
          y2="183"
          stroke="#D0D0B0"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="150"
          y1="165"
          x2="208"
          y2="157"
          stroke="#D0D0B0"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="150"
          y1="170"
          x2="210"
          y2="170"
          stroke="#D0D0B0"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="150"
          y1="175"
          x2="206"
          y2="183"
          stroke="#D0D0B0"
          strokeWidth="1"
          opacity="0.6"
        />
      </g>
    </svg>
  );
}

function PixelPortrait({ size = 240 }: PortraitProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="p-bg" cx="48%" cy="38%" r="64%">
          <stop offset="0%" stopColor="#201608" />
          <stop offset="100%" stopColor="#090603" />
        </radialGradient>
        <clipPath id="p-clip">
          <circle cx="120" cy="120" r="108" />
        </clipPath>
      </defs>

      {/* Outer frame rings */}
      <circle
        cx="120"
        cy="120"
        r="114"
        fill="none"
        stroke="#3A2A10"
        strokeWidth="1"
      />
      <circle
        cx="120"
        cy="120"
        r="109"
        fill="none"
        stroke="#5A3A18"
        strokeWidth="2.5"
      />

      {/* Corner ornamental flourishes */}
      <path
        d="M25,50 Q36,36 50,25"
        fill="none"
        stroke="#C4A04A"
        strokeWidth="2"
        opacity="0.72"
      />
      <path
        d="M29,44 Q38,35 44,29"
        fill="none"
        stroke="#C4A04A"
        strokeWidth="1"
        opacity="0.4"
      />
      <circle cx="25" cy="50" r="3" fill="#C4A04A" opacity="0.72" />
      <circle cx="50" cy="25" r="3" fill="#C4A04A" opacity="0.72" />

      <path
        d="M215,50 Q204,36 190,25"
        fill="none"
        stroke="#C4A04A"
        strokeWidth="2"
        opacity="0.72"
      />
      <circle cx="215" cy="50" r="3" fill="#C4A04A" opacity="0.72" />
      <circle cx="190" cy="25" r="3" fill="#C4A04A" opacity="0.72" />

      <path
        d="M25,190 Q36,204 50,215"
        fill="none"
        stroke="#C4A04A"
        strokeWidth="2"
        opacity="0.72"
      />
      <circle cx="25" cy="190" r="3" fill="#C4A04A" opacity="0.72" />
      <circle cx="50" cy="215" r="3" fill="#C4A04A" opacity="0.72" />

      <path
        d="M215,190 Q204,204 190,215"
        fill="none"
        stroke="#C4A04A"
        strokeWidth="2"
        opacity="0.72"
      />
      <circle cx="215" cy="190" r="3" fill="#C4A04A" opacity="0.72" />
      <circle cx="190" cy="215" r="3" fill="#C4A04A" opacity="0.72" />

      {/* Star cluster at top — Door Into Summer motif */}
      <circle cx="120" cy="9" r="2.5" fill="#C4A04A" opacity="0.85" />
      <circle cx="113" cy="14" r="1.5" fill="#C4A04A" opacity="0.6" />
      <circle cx="127" cy="14" r="1.5" fill="#C4A04A" opacity="0.6" />
      <circle cx="108" cy="21" r="1" fill="#C4A04A" opacity="0.4" />
      <circle cx="132" cy="21" r="1" fill="#C4A04A" opacity="0.4" />

      {/* Background */}
      <circle cx="120" cy="120" r="108" fill="url(#p-bg)" />

      {/* Clipped cat portrait */}
      <g clipPath="url(#p-clip)">
        {/* Warm sepia ambiance */}
        <ellipse
          cx="120"
          cy="48"
          rx="82"
          ry="40"
          fill="#3A2000"
          opacity="0.38"
        />

        {/* Bg gold stars */}
        <circle cx="42" cy="44" r="1" fill="#C4A04A" opacity="0.5" />
        <circle cx="186" cy="36" r="1" fill="#C4A04A" opacity="0.4" />
        <circle cx="165" cy="56" r="1.5" fill="#C4A04A" opacity="0.35" />
        <circle cx="48" cy="78" r="1" fill="#C4A04A" opacity="0.3" />
        <circle cx="198" cy="60" r="1" fill="#C4A04A" opacity="0.3" />

        {/* Left ear — grey */}
        <polygon points="65,108 48,62 93,97" fill="#828282" />
        <polygon points="70,106 58,76 87,99" fill="#C06878" opacity="0.75" />
        {/* Right ear */}
        <polygon points="175,108 192,62 147,97" fill="#828282" />
        <polygon points="170,106 182,76 153,99" fill="#C06878" opacity="0.75" />

        {/* Head — grey */}
        <ellipse cx="120" cy="152" rx="72" ry="62" fill="#828282" />

        {/* Grey tabby markings — more prominent than the orange cats */}
        <path
          d="M108,121 Q120,111 132,121"
          stroke="#4A4A4A"
          strokeWidth="3.5"
          fill="none"
        />
        <path
          d="M109,113 Q120,102 131,113"
          stroke="#4A4A4A"
          strokeWidth="3"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M111,105 Q120,95 129,105"
          stroke="#4A4A4A"
          strokeWidth="2.5"
          fill="none"
          opacity="0.7"
        />

        {/* Cheek stripe accents */}
        <path
          d="M72,148 Q65,153 62,159"
          stroke="#4A4A4A"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M168,148 Q175,153 178,159"
          stroke="#4A4A4A"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />

        {/* Lighter muzzle */}
        <ellipse
          cx="120"
          cy="169"
          rx="30"
          ry="18"
          fill="#9A9A9A"
          opacity="0.45"
        />

        {/* Left eye — slightly contemplative squint */}
        <ellipse cx="92" cy="138" rx="17" ry="11" fill="#F0ECD5" />
        <ellipse cx="92" cy="138" rx="13" ry="10" fill="#2E8B50" />
        <ellipse cx="92" cy="138" rx="5" ry="9" fill="#0A0A0A" />
        <circle cx="88" cy="134" r="2.5" fill="white" opacity="0.85" />

        {/* Right eye */}
        <ellipse cx="148" cy="138" rx="17" ry="11" fill="#F0ECD5" />
        <ellipse cx="148" cy="138" rx="13" ry="10" fill="#2E8B50" />
        <ellipse cx="148" cy="138" rx="5" ry="9" fill="#0A0A0A" />
        <circle cx="144" cy="134" r="2.5" fill="white" opacity="0.85" />

        {/* Nose */}
        <polygon points="120,158 114,166 126,166" fill="#A05060" />

        {/* Mouth */}
        <path
          d="M120,166 L120,171 M120,171 Q110,178 107,174 M120,171 Q130,178 133,174"
          stroke="#784040"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Whiskers */}
        <line
          x1="88"
          y1="163"
          x2="26"
          y2="159"
          stroke="#E0D0A0"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="88"
          y1="168"
          x2="24"
          y2="168"
          stroke="#E0D0A0"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="88"
          y1="173"
          x2="28"
          y2="177"
          stroke="#E0D0A0"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="152"
          y1="163"
          x2="214"
          y2="159"
          stroke="#E0D0A0"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="152"
          y1="168"
          x2="216"
          y2="168"
          stroke="#E0D0A0"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="152"
          y1="173"
          x2="212"
          y2="177"
          stroke="#E0D0A0"
          strokeWidth="1"
          opacity="0.6"
        />
      </g>
    </svg>
  );
}

export default function CatPortrait({
  cat,
  size = 240,
}: {
  cat: Cat;
  size?: number;
}) {
  switch (cat.id) {
    case "jonesy":
      return <JonesyPortrait size={size} />;
    case "spot":
      return <SpotPortrait size={size} />;
    case "goose":
      return <GoosePortrait size={size} />;
    case "cat":
      return <CatRedDwarfPortrait size={size} />;
    case "pixel":
      return <PixelPortrait size={size} />;
    default:
      return null;
  }
}
