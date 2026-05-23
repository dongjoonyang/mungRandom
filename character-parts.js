const CHARACTER_PARTS = {
  background: [
    {
      name: "로즈 핑크",
      svg: `<defs><linearGradient id="bgG1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFE4EF"/><stop offset="100%" stop-color="#FFADD0"/></linearGradient></defs>
<rect width="200" height="280" fill="url(#bgG1)"/>
<circle cx="165" cy="28" r="28" fill="#FF9DC0" opacity="0.28"/>
<circle cx="22" cy="250" r="40" fill="#FF9DC0" opacity="0.18"/>
<circle cx="185" cy="235" r="16" fill="#FFB8D5" opacity="0.3"/>
<circle cx="12" cy="85" r="10" fill="#FFB8D5" opacity="0.22"/>`
    },
    {
      name: "하늘 블루",
      svg: `<rect width="200" height="280" fill="#C2E8FF"/>
<ellipse cx="42" cy="48" rx="34" ry="19" fill="white" opacity="0.88"/>
<ellipse cx="66" cy="40" rx="26" ry="17" fill="white" opacity="0.88"/>
<ellipse cx="152" cy="68" rx="30" ry="17" fill="white" opacity="0.82"/>
<ellipse cx="176" cy="61" rx="22" ry="15" fill="white" opacity="0.82"/>
<ellipse cx="108" cy="25" rx="20" ry="12" fill="white" opacity="0.72"/>
<ellipse cx="20" cy="200" rx="16" ry="10" fill="white" opacity="0.4"/>`
    },
    {
      name: "민트 그린",
      svg: `<rect width="200" height="280" fill="#C8F5E8"/>
<circle cx="18" cy="22" r="6" fill="#8EE8CC" opacity="0.72"/>
<circle cx="72" cy="15" r="5" fill="#8EE8CC" opacity="0.72"/>
<circle cx="148" cy="32" r="7" fill="#8EE8CC" opacity="0.72"/>
<circle cx="188" cy="16" r="4" fill="#8EE8CC" opacity="0.72"/>
<circle cx="46" cy="262" r="8" fill="#8EE8CC" opacity="0.52"/>
<circle cx="168" cy="250" r="6" fill="#8EE8CC" opacity="0.52"/>
<circle cx="6" cy="180" r="5" fill="#8EE8CC" opacity="0.42"/>
<circle cx="194" cy="128" r="7" fill="#8EE8CC" opacity="0.42"/>
<circle cx="106" cy="10" r="5" fill="#8EE8CC" opacity="0.6"/>`
    },
    {
      name: "라벤더",
      svg: `<defs><linearGradient id="bgG4" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#EEE0FF"/><stop offset="100%" stop-color="#D4BAFF"/></linearGradient></defs>
<rect width="200" height="280" fill="url(#bgG4)"/>
<polygon points="22,32 25,42 35,42 27,48 30,58 22,52 14,58 17,48 9,42 19,42" fill="#C9AAFF" opacity="0.72"/>
<polygon points="166,52 169,62 179,62 171,68 174,78 166,72 158,78 161,68 153,62 163,62" fill="#C9AAFF" opacity="0.62"/>
<polygon points="82,16 84,22 90,22 85,26 87,32 82,28 77,32 79,26 74,22 80,22" fill="#C9AAFF" opacity="0.52"/>
<polygon points="175,238 177,244 183,244 178,248 180,254 175,250 170,254 172,248 167,244 173,244" fill="#C9AAFF" opacity="0.52"/>`
    },
    {
      name: "피치 오렌지",
      svg: `<defs><linearGradient id="bgG5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFE5CE"/><stop offset="100%" stop-color="#FFCC94"/></linearGradient></defs>
<rect width="200" height="280" fill="url(#bgG5)"/>
<path d="M0,215 Q55,185 115,215 Q158,232 200,212 L200,280 L0,280 Z" fill="#FFBA72" opacity="0.38"/>
<circle cx="28" cy="38" r="18" fill="#FFD4A8" opacity="0.42"/>
<circle cx="178" cy="52" r="12" fill="#FFD4A8" opacity="0.3"/>`
    }
  ],

  body: [
    {
      name: "흰 티셔츠",
      svg: `<path d="M58,172 Q44,184 37,232 L163,232 Q156,184 142,172 Q120,181 100,181 Q80,181 58,172 Z" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="2"/>
<path d="M58,172 Q36,186 22,214 L38,218 Q46,196 63,185 Z" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="2"/>
<path d="M142,172 Q164,186 178,214 L162,218 Q154,196 137,185 Z" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="2"/>
<rect x="37" y="230" width="126" height="50" rx="8" fill="#E0EAFF" stroke="#C0CCEE" stroke-width="1.5"/>
<path d="M78,172 Q100,185 122,172" stroke="#E0E0E0" stroke-width="2" fill="none"/>
<path d="M100,215 Q94,208 88,206 Q82,204 82,210 Q82,216 100,224 Q118,216 118,210 Q118,204 112,206 Q106,208 100,215 Z" fill="#FFB8C8"/>`
    },
    {
      name: "후드티",
      svg: `<path d="M58,172 Q42,184 36,232 L164,232 Q158,184 142,172 Q120,181 100,181 Q80,181 58,172 Z" fill="#FF7F5C" stroke="#E06840" stroke-width="1.8"/>
<path d="M58,172 Q36,186 21,214 L37,218 Q45,196 62,185 Z" fill="#FF7F5C" stroke="#E06840" stroke-width="1.8"/>
<path d="M142,172 Q164,186 179,214 L163,218 Q155,196 138,185 Z" fill="#FF7F5C" stroke="#E06840" stroke-width="1.8"/>
<rect x="36" y="230" width="128" height="50" rx="8" fill="#FF7F5C" stroke="#E06840" stroke-width="1.8"/>
<path d="M78,172 Q100,186 122,172 L119,182 Q100,194 81,182 Z" fill="#E06840"/>
<rect x="84" y="228" width="32" height="26" rx="6" fill="#E06840" opacity="0.58"/>
<path d="M84,228 L84,254 M116,228 L116,254" stroke="#C84820" stroke-width="1" opacity="0.5"/>`
    },
    {
      name: "멜빵바지",
      svg: `<path d="M60,172 Q46,184 40,232 L160,232 Q154,184 140,172 Q120,180 100,180 Q80,180 60,172 Z" fill="#A8CCEE" stroke="#78A8D0" stroke-width="1.8"/>
<path d="M60,172 Q38,186 24,214 L40,218 Q48,196 64,185 Z" fill="#A8CCEE" stroke="#78A8D0" stroke-width="1.8"/>
<path d="M140,172 Q162,186 176,214 L160,218 Q152,196 136,185 Z" fill="#A8CCEE" stroke="#78A8D0" stroke-width="1.8"/>
<rect x="40" y="230" width="120" height="50" rx="8" fill="#FFD566" stroke="#E0B040" stroke-width="1.8"/>
<rect x="84" y="164" width="14" height="30" rx="5" fill="#FFD566" stroke="#E0B040" stroke-width="1.8"/>
<rect x="102" y="164" width="14" height="30" rx="5" fill="#FFD566" stroke="#E0B040" stroke-width="1.8"/>
<path d="M84,164 Q74,156 72,162" stroke="#E0B040" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<path d="M116,164 Q126,156 128,162" stroke="#E0B040" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<rect x="82" y="228" width="36" height="10" rx="4" fill="#C89030" opacity="0.5"/>
<polygon points="100,246 102,252 108,252 103,256 105,262 100,258 95,262 97,256 92,252 98,252" fill="#C89030" opacity="0.7"/>`
    },
    {
      name: "민트 원피스",
      svg: `<path d="M64,170 Q100,188 136,170 Q138,204 122,226 L78,226 Q62,204 64,170 Z" fill="#72D8C0" stroke="#50B8A0" stroke-width="1.8"/>
<path d="M64,170 Q48,184 40,226 L78,226 Z" fill="#72D8C0" stroke="#50B8A0" stroke-width="1.8"/>
<path d="M136,170 Q152,184 160,226 L122,226 Z" fill="#72D8C0" stroke="#50B8A0" stroke-width="1.8"/>
<path d="M40,226 Q100,248 160,226 L160,280 L40,280 Z" fill="#50B8A0" stroke="#38989C" stroke-width="1.8"/>
<path d="M78,170 Q100,183 122,170" stroke="#50B8A0" stroke-width="1.8" fill="none"/>
<path d="M88,176 Q82,168 76,172 Q80,182 88,179 Z" fill="#FF6B8A"/>
<path d="M112,176 Q118,168 124,172 Q120,182 112,179 Z" fill="#FF6B8A"/>
<circle cx="100" cy="177" r="5.5" fill="#FF4477"/>
<text x="87" y="250" font-size="18" fill="#38989C" opacity="0.6">✿</text>`
    },
    {
      name: "라벤더 스웨터",
      svg: `<path d="M58,172 Q43,184 37,232 L163,232 Q157,184 142,172 Q120,181 100,181 Q80,181 58,172 Z" fill="#C8AAFF" stroke="#A888EE" stroke-width="1.8"/>
<path d="M58,172 Q36,186 22,214 L37,218 Q45,196 62,185 Z" fill="#C8AAFF" stroke="#A888EE" stroke-width="1.8"/>
<path d="M142,172 Q164,186 178,214 L163,218 Q155,196 138,185 Z" fill="#C8AAFF" stroke="#A888EE" stroke-width="1.8"/>
<rect x="37" y="230" width="126" height="50" rx="8" fill="#C8AAFF" stroke="#A888EE" stroke-width="1.8"/>
<line x1="37" y1="196" x2="163" y2="196" stroke="#9866DD" stroke-width="2" opacity="0.55"/>
<line x1="37" y1="210" x2="163" y2="210" stroke="#9866DD" stroke-width="2" opacity="0.55"/>
<line x1="37" y1="224" x2="163" y2="224" stroke="#9866DD" stroke-width="2" opacity="0.55"/>
<line x1="37" y1="242" x2="163" y2="242" stroke="#9866DD" stroke-width="2" opacity="0.55"/>
<line x1="37" y1="256" x2="163" y2="256" stroke="#9866DD" stroke-width="2" opacity="0.55"/>
<line x1="37" y1="270" x2="163" y2="270" stroke="#9866DD" stroke-width="2" opacity="0.55"/>
<path d="M78,172 Q100,184 122,172" stroke="#A888EE" stroke-width="1.8" fill="none"/>
<polygon points="100,204 102,210 108,210 103,214 105,220 100,216 95,220 97,214 92,210 98,210" fill="#FFD700"/>`
    }
  ],

  face: [
    {
      name: "밝은 피치",
      svg: `<circle cx="100" cy="102" r="68" fill="#FFD4A8"/>
<rect x="88" y="165" width="24" height="18" rx="4" fill="#FFD4A8"/>
<ellipse cx="70" cy="120" rx="13" ry="9" fill="#FFBBA0" opacity="0.52"/>
<ellipse cx="130" cy="120" rx="13" ry="9" fill="#FFBBA0" opacity="0.52"/>`
    },
    {
      name: "볼빵빵",
      svg: `<circle cx="100" cy="104" r="70" fill="#F5C28A"/>
<rect x="88" y="168" width="24" height="18" rx="4" fill="#F5C28A"/>
<ellipse cx="66" cy="123" rx="16" ry="11" fill="#E09A5A" opacity="0.5"/>
<ellipse cx="134" cy="123" rx="16" ry="11" fill="#E09A5A" opacity="0.5"/>`
    },
    {
      name: "허니 브라운",
      svg: `<circle cx="100" cy="102" r="68" fill="#D4865A"/>
<rect x="88" y="165" width="24" height="18" rx="4" fill="#D4865A"/>
<ellipse cx="70" cy="120" rx="13" ry="9" fill="#BA6638" opacity="0.42"/>
<ellipse cx="130" cy="120" rx="13" ry="9" fill="#BA6638" opacity="0.42"/>`
    },
    {
      name: "쿨 베이지",
      svg: `<circle cx="100" cy="102" r="68" fill="#FECFB0"/>
<rect x="88" y="165" width="24" height="18" rx="4" fill="#FECFB0"/>
<ellipse cx="68" cy="124" rx="11" ry="7" fill="#FFB8C0" opacity="0.72"/>
<circle cx="60" cy="119" r="3" fill="#FFB8C0" opacity="0.55"/>
<circle cx="76" cy="119" r="3" fill="#FFB8C0" opacity="0.55"/>
<circle cx="60" cy="129" r="3" fill="#FFB8C0" opacity="0.55"/>
<circle cx="76" cy="129" r="3" fill="#FFB8C0" opacity="0.55"/>
<ellipse cx="132" cy="124" rx="11" ry="7" fill="#FFB8C0" opacity="0.72"/>
<circle cx="124" cy="119" r="3" fill="#FFB8C0" opacity="0.55"/>
<circle cx="140" cy="119" r="3" fill="#FFB8C0" opacity="0.55"/>
<circle cx="124" cy="129" r="3" fill="#FFB8C0" opacity="0.55"/>
<circle cx="140" cy="129" r="3" fill="#FFB8C0" opacity="0.55"/>`
    },
    {
      name: "로지 핑크",
      svg: `<circle cx="100" cy="102" r="68" fill="#FFC2A8"/>
<rect x="88" y="165" width="24" height="18" rx="4" fill="#FFC2A8"/>
<circle cx="68" cy="120" r="12" fill="#FF9999" opacity="0.46"/>
<circle cx="132" cy="120" r="12" fill="#FF9999" opacity="0.46"/>`
    }
  ],

  facial: [
    {
      name: "반짝 웃음",
      svg: `<circle cx="78" cy="88" r="14" fill="#1A1A2A"/>
<circle cx="78" cy="88" r="11" fill="white"/>
<circle cx="80" cy="85" r="6" fill="#1A1A2A"/>
<circle cx="83" cy="82" r="2.5" fill="white"/>
<circle cx="76" cy="91" r="1.5" fill="white" opacity="0.7"/>
<circle cx="122" cy="88" r="14" fill="#1A1A2A"/>
<circle cx="122" cy="88" r="11" fill="white"/>
<circle cx="124" cy="85" r="6" fill="#1A1A2A"/>
<circle cx="127" cy="82" r="2.5" fill="white"/>
<circle cx="120" cy="91" r="1.5" fill="white" opacity="0.7"/>
<path d="M84,122 Q100,136 116,122" stroke="#1A1A2A" stroke-width="3.2" fill="none" stroke-linecap="round"/>`
    },
    {
      name: "윙크",
      svg: `<path d="M66,90 Q78,78 90,90" stroke="#1A1A2A" stroke-width="3.5" fill="none" stroke-linecap="round"/>
<circle cx="68" cy="82" r="3.5" fill="#FFD700"/>
<circle cx="61" cy="90" r="2.5" fill="#FFD700"/>
<circle cx="75" cy="76" r="2" fill="#FFD700"/>
<circle cx="122" cy="88" r="14" fill="#1A1A2A"/>
<circle cx="122" cy="88" r="11" fill="white"/>
<circle cx="124" cy="85" r="6" fill="#1A1A2A"/>
<circle cx="127" cy="82" r="2.5" fill="white"/>
<circle cx="120" cy="91" r="1.5" fill="white" opacity="0.7"/>
<path d="M84,122 Q100,136 116,122" stroke="#1A1A2A" stroke-width="3.2" fill="none" stroke-linecap="round"/>`
    },
    {
      name: "졸린 눈",
      svg: `<path d="M66,90 Q78,80 90,90" stroke="#1A1A2A" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M66,90 Q78,97 90,90" fill="#1A1A2A"/>
<path d="M110,90 Q122,80 134,90" stroke="#1A1A2A" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M110,90 Q122,97 134,90" fill="#1A1A2A"/>
<path d="M136,70 L144,70 L136,63 L144,63" stroke="#AAAAAA" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M142,59 L152,59 L142,50 L152,50" stroke="#BBBBBB" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150,44 L163,44 L150,33 L163,33" stroke="#CCCCCC" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<ellipse cx="100" cy="126" rx="8" ry="5.5" fill="#1A1A2A"/>
<ellipse cx="100" cy="126" rx="6" ry="4" fill="#CC6677"/>`
    },
    {
      name: "별 눈",
      svg: `<circle cx="78" cy="88" r="15" fill="#1A2240"/>
<polygon points="78,76 80,84 88,84 82,89 84,97 78,92 72,97 74,89 68,84 76,84" fill="#FFD700"/>
<circle cx="78" cy="88" r="3" fill="#FFD700" opacity="0.4"/>
<circle cx="122" cy="88" r="15" fill="#1A2240"/>
<polygon points="122,76 124,84 132,84 126,89 128,97 122,92 116,97 118,89 112,84 120,84" fill="#FFD700"/>
<circle cx="122" cy="88" r="3" fill="#FFD700" opacity="0.4"/>
<path d="M82,120 Q100,138 118,120" stroke="#1A1A2A" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<circle cx="100" cy="129" r="8" fill="#1A1A2A" opacity="0.07"/>`
    },
    {
      name: "놀란 눈",
      svg: `<circle cx="78" cy="88" r="16" fill="#1A1A2A"/>
<circle cx="78" cy="88" r="13" fill="white"/>
<circle cx="78" cy="88" r="8" fill="#1A1A2A"/>
<circle cx="81" cy="84" r="3" fill="white"/>
<circle cx="122" cy="88" r="16" fill="#1A1A2A"/>
<circle cx="122" cy="88" r="13" fill="white"/>
<circle cx="122" cy="88" r="8" fill="#1A1A2A"/>
<circle cx="125" cy="84" r="3" fill="white"/>
<ellipse cx="100" cy="126" rx="11" ry="8" fill="#1A1A2A"/>
<ellipse cx="100" cy="126" rx="8" ry="5.5" fill="#CC4444"/>`
    }
  ],

  hair: [
    {
      name: "단발 보브",
      svg: `<path d="M28,102 A72,72 0 0 0 172,102 Z" fill="#2A1A10"/>
<ellipse cx="35" cy="132" rx="10" ry="34" fill="#2A1A10"/>
<ellipse cx="165" cy="132" rx="10" ry="34" fill="#2A1A10"/>
<path d="M35,103 Q100,115 165,103 L163,111 Q100,123 37,111 Z" fill="#1A0A00"/>`
    },
    {
      name: "긴 생머리",
      svg: `<path d="M28,102 A72,72 0 0 0 172,102 Z" fill="#8B5E3C"/>
<ellipse cx="33" cy="185" rx="13" ry="96" fill="#8B5E3C"/>
<ellipse cx="167" cy="185" rx="13" ry="96" fill="#8B5E3C"/>
<path d="M34,103 Q100,115 166,103 L164,111 Q100,123 36,111 Z" fill="#7A4E2C"/>`
    },
    {
      name: "야구 모자",
      svg: `<ellipse cx="34" cy="130" rx="11" ry="32" fill="#1A0A04"/>
<ellipse cx="166" cy="130" rx="11" ry="32" fill="#1A0A04"/>
<path d="M28,100 A72,72 0 0 0 172,100 L172,78 Q172,26 100,26 Q28,26 28,78 Z" fill="#1E4080"/>
<rect x="28" y="94" width="144" height="13" rx="5" fill="#2A5CB0"/>
<path d="M28,103 Q11,108 9,114 Q13,121 28,117 Z" fill="#1E4080"/>
<circle cx="100" cy="28" r="8" fill="#FF3333"/>
<circle cx="100" cy="28" r="5.5" fill="#CC2222"/>`
    },
    {
      name: "핑크 쌍갈래",
      svg: `<path d="M28,102 A72,72 0 0 0 172,102 Z" fill="#FF8FA8"/>
<path d="M28,118 Q14,152 20,215 Q26,232 40,216 Q42,162 50,122 Z" fill="#FF8FA8"/>
<path d="M172,118 Q186,152 180,215 Q174,232 160,216 Q158,162 150,122 Z" fill="#FF8FA8"/>
<circle cx="36" cy="133" r="10" fill="#FF2266"/>
<circle cx="164" cy="133" r="10" fill="#FF2266"/>
<path d="M35,103 Q100,113 165,103 L163,111 Q100,121 37,111 Z" fill="#FF6B8A"/>`
    },
    {
      name: "번 리본",
      svg: `<path d="M28,102 A72,72 0 0 0 172,102 Z" fill="#3A2410"/>
<ellipse cx="35" cy="126" rx="10" ry="28" fill="#3A2410"/>
<ellipse cx="165" cy="126" rx="10" ry="28" fill="#3A2410"/>
<circle cx="100" cy="36" r="26" fill="#3A2410"/>
<circle cx="100" cy="35" r="22" fill="#2A1A08"/>
<ellipse cx="91" cy="26" rx="9" ry="5.5" fill="#5A3820" opacity="0.45"/>
<path d="M83,29 Q73,16 62,24 Q66,39 83,35 Z" fill="#FF4477"/>
<path d="M117,29 Q127,16 138,24 Q134,39 117,35 Z" fill="#FF4477"/>
<ellipse cx="100" cy="30" rx="11" ry="8" fill="#FF2255"/>
<ellipse cx="100" cy="30" rx="4.5" ry="3" fill="#CC1144"/>`
    }
  ]
};
