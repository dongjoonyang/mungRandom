const CHARACTER_PARTS = {
  background: [
    {
      name: "로즈 핑크",
      svg: `<defs><linearGradient id="bgG1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFE4EF"/><stop offset="100%" stop-color="#FFADD0"/></linearGradient></defs>
<rect width="200" height="280" fill="url(#bgG1)"/>
<circle cx="165" cy="28" r="26" fill="#FF9DC0" opacity="0.28"/>
<circle cx="22" cy="252" r="38" fill="#FF9DC0" opacity="0.18"/>`
    },
    {
      name: "하늘 블루",
      svg: `<rect width="200" height="280" fill="#C4EAFF"/>
<ellipse cx="44" cy="46" rx="34" ry="18" fill="white" opacity="0.88"/>
<ellipse cx="68" cy="38" rx="26" ry="16" fill="white" opacity="0.88"/>
<ellipse cx="154" cy="66" rx="30" ry="16" fill="white" opacity="0.82"/>
<ellipse cx="178" cy="59" rx="22" ry="14" fill="white" opacity="0.82"/>`
    },
    {
      name: "민트 그린",
      svg: `<rect width="200" height="280" fill="#C8F5E8"/>
<circle cx="18" cy="22" r="6" fill="#8EE8CC" opacity="0.7"/>
<circle cx="74" cy="14" r="5" fill="#8EE8CC" opacity="0.7"/>
<circle cx="150" cy="30" r="7" fill="#8EE8CC" opacity="0.7"/>
<circle cx="190" cy="16" r="4" fill="#8EE8CC" opacity="0.7"/>
<circle cx="48" cy="260" r="8" fill="#8EE8CC" opacity="0.5"/>
<circle cx="168" cy="250" r="6" fill="#8EE8CC" opacity="0.5"/>`
    },
    {
      name: "라벤더",
      svg: `<defs><linearGradient id="bgG4" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#EEE0FF"/><stop offset="100%" stop-color="#D4BAFF"/></linearGradient></defs>
<rect width="200" height="280" fill="url(#bgG4)"/>
<polygon points="22,32 25,42 35,42 27,48 30,58 22,52 14,58 17,48 9,42 19,42" fill="#C9AAFF" opacity="0.7"/>
<polygon points="166,52 169,62 179,62 171,68 174,78 166,72 158,78 161,68 153,62 163,62" fill="#C9AAFF" opacity="0.6"/>`
    },
    {
      name: "피치 오렌지",
      svg: `<defs><linearGradient id="bgG5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFE5CE"/><stop offset="100%" stop-color="#FFCC94"/></linearGradient></defs>
<rect width="200" height="280" fill="url(#bgG5)"/>
<path d="M0,215 Q55,185 115,215 Q158,232 200,212 L200,280 L0,280 Z" fill="#FFBA72" opacity="0.35"/>
<circle cx="26" cy="36" r="18" fill="#FFD4A8" opacity="0.4"/>`
    }
  ],

  body: [
    {
      name: "흰 티셔츠",
      svg: `<path d="M56,172 Q42,184 36,232 L164,232 Q158,184 144,172 Q122,181 100,181 Q78,181 56,172 Z" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="2"/>
<path d="M56,172 Q34,187 20,215 L36,219 Q44,197 60,185 Z" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="2"/>
<path d="M144,172 Q166,187 180,215 L164,219 Q156,197 140,185 Z" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="2"/>
<rect x="36" y="230" width="128" height="50" rx="8" fill="#E4EEFF"/>
<path d="M78,172 Q100,185 122,172" stroke="#E0E0E0" stroke-width="2" fill="none"/>`
    },
    {
      name: "후드티",
      svg: `<path d="M56,172 Q42,184 36,232 L164,232 Q158,184 144,172 Q122,181 100,181 Q78,181 56,172 Z" fill="#FF8C6E" stroke="#E07050" stroke-width="1.8"/>
<path d="M56,172 Q34,187 20,215 L36,219 Q44,197 60,185 Z" fill="#FF8C6E" stroke="#E07050" stroke-width="1.8"/>
<path d="M144,172 Q166,187 180,215 L164,219 Q156,197 140,185 Z" fill="#FF8C6E" stroke="#E07050" stroke-width="1.8"/>
<rect x="36" y="230" width="128" height="50" rx="8" fill="#FF8C6E" stroke="#E07050" stroke-width="1.8"/>
<path d="M78,172 Q100,186 122,172 L119,182 Q100,194 81,182 Z" fill="#E07050"/>
<rect x="84" y="228" width="32" height="26" rx="6" fill="#E07050" opacity="0.55"/>`
    },
    {
      name: "멜빵바지",
      svg: `<path d="M58,172 Q44,184 38,232 L162,232 Q156,184 142,172 Q120,180 100,180 Q80,180 58,172 Z" fill="#A8CCEE" stroke="#78A8D0" stroke-width="1.8"/>
<path d="M58,172 Q36,187 22,215 L38,219 Q46,197 62,185 Z" fill="#A8CCEE" stroke="#78A8D0" stroke-width="1.8"/>
<path d="M142,172 Q164,187 178,215 L162,219 Q154,197 138,185 Z" fill="#A8CCEE" stroke="#78A8D0" stroke-width="1.8"/>
<rect x="38" y="230" width="124" height="50" rx="8" fill="#FFD566" stroke="#E0B040" stroke-width="1.8"/>
<rect x="84" y="164" width="14" height="30" rx="5" fill="#FFD566" stroke="#E0B040" stroke-width="1.8"/>
<rect x="102" y="164" width="14" height="30" rx="5" fill="#FFD566" stroke="#E0B040" stroke-width="1.8"/>
<path d="M84,164 Q74,157 72,163" stroke="#E0B040" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<path d="M116,164 Q126,157 128,163" stroke="#E0B040" stroke-width="2.5" fill="none" stroke-linecap="round"/>`
    },
    {
      name: "민트 원피스",
      svg: `<path d="M62,170 Q100,188 138,170 Q140,206 124,228 L76,228 Q60,206 62,170 Z" fill="#72D8C0" stroke="#50B8A0" stroke-width="1.8"/>
<path d="M62,170 Q46,185 38,228 L76,228 Z" fill="#72D8C0" stroke="#50B8A0" stroke-width="1.8"/>
<path d="M138,170 Q154,185 162,228 L124,228 Z" fill="#72D8C0" stroke="#50B8A0" stroke-width="1.8"/>
<path d="M38,228 Q100,250 162,228 L162,280 L38,280 Z" fill="#50B8A0"/>
<path d="M78,170 Q100,183 122,170" stroke="#50B8A0" stroke-width="1.8" fill="none"/>
<path d="M88,176 Q82,168 76,172 Q80,182 88,179 Z" fill="#FF6B8A"/>
<path d="M112,176 Q118,168 124,172 Q120,182 112,179 Z" fill="#FF6B8A"/>
<circle cx="100" cy="177" r="5" fill="#FF4477"/>`
    },
    {
      name: "스웨터",
      svg: `<path d="M56,172 Q42,184 36,232 L164,232 Q158,184 144,172 Q122,181 100,181 Q78,181 56,172 Z" fill="#C8AAFF" stroke="#A888EE" stroke-width="1.8"/>
<path d="M56,172 Q34,187 20,215 L36,219 Q44,197 60,185 Z" fill="#C8AAFF" stroke="#A888EE" stroke-width="1.8"/>
<path d="M144,172 Q166,187 180,215 L164,219 Q156,197 140,185 Z" fill="#C8AAFF" stroke="#A888EE" stroke-width="1.8"/>
<rect x="36" y="230" width="128" height="50" rx="8" fill="#C8AAFF" stroke="#A888EE" stroke-width="1.8"/>
<line x1="36" y1="196" x2="164" y2="196" stroke="#9866DD" stroke-width="2.2" opacity="0.55"/>
<line x1="36" y1="210" x2="164" y2="210" stroke="#9866DD" stroke-width="2.2" opacity="0.55"/>
<line x1="36" y1="224" x2="164" y2="224" stroke="#9866DD" stroke-width="2.2" opacity="0.55"/>
<line x1="36" y1="243" x2="164" y2="243" stroke="#9866DD" stroke-width="2.2" opacity="0.55"/>
<line x1="36" y1="257" x2="164" y2="257" stroke="#9866DD" stroke-width="2.2" opacity="0.55"/>
<line x1="36" y1="271" x2="164" y2="271" stroke="#9866DD" stroke-width="2.2" opacity="0.55"/>
<path d="M78,172 Q100,184 122,172" stroke="#A888EE" stroke-width="1.8" fill="none"/>`
    }
  ],

  face: [
    {
      name: "곰",
      svg: `<circle cx="58" cy="54" r="22" fill="#8B6040"/>
<circle cx="142" cy="54" r="22" fill="#8B6040"/>
<circle cx="58" cy="54" r="14" fill="#D4A878"/>
<circle cx="142" cy="54" r="14" fill="#D4A878"/>
<circle cx="100" cy="108" r="64" fill="#D4A878"/>
<ellipse cx="100" cy="124" rx="28" ry="19" fill="#E0C098"/>
<ellipse cx="100" cy="113" rx="9" ry="6" fill="#3A2010"/>
<circle cx="104" cy="111" r="2" fill="white" opacity="0.6"/>
<ellipse cx="72" cy="118" rx="10" ry="7" fill="#C89060" opacity="0.45"/>
<ellipse cx="128" cy="118" rx="10" ry="7" fill="#C89060" opacity="0.45"/>
<rect x="88" y="168" width="24" height="16" rx="4" fill="#D4A878"/>`
    },
    {
      name: "고양이",
      svg: `<polygon points="60,70 44,28 82,52" fill="#F0A888"/>
<polygon points="140,70 156,28 118,52" fill="#F0A888"/>
<polygon points="63,65 53,36 79,50" fill="#FFD0C8"/>
<polygon points="137,65 147,36 121,50" fill="#FFD0C8"/>
<circle cx="100" cy="108" r="64" fill="#FAC8B0"/>
<ellipse cx="100" cy="122" rx="20" ry="13" fill="#FFDDD5"/>
<ellipse cx="100" cy="113" rx="5" ry="3.5" fill="#FF9AAA"/>
<line x1="42" y1="118" x2="82" y2="120" stroke="#8A6050" stroke-width="1.5" opacity="0.45"/>
<line x1="42" y1="126" x2="82" y2="125" stroke="#8A6050" stroke-width="1.5" opacity="0.45"/>
<line x1="118" y1="120" x2="158" y2="118" stroke="#8A6050" stroke-width="1.5" opacity="0.45"/>
<line x1="118" y1="125" x2="158" y2="126" stroke="#8A6050" stroke-width="1.5" opacity="0.45"/>
<ellipse cx="72" cy="116" rx="9" ry="6" fill="#F0A888" opacity="0.4"/>
<ellipse cx="128" cy="116" rx="9" ry="6" fill="#F0A888" opacity="0.4"/>
<rect x="88" y="168" width="24" height="16" rx="4" fill="#FAC8B0"/>`
    },
    {
      name: "토끼",
      svg: `<ellipse cx="72" cy="42" rx="18" ry="42" fill="#F0F0F8"/>
<ellipse cx="128" cy="42" rx="18" ry="42" fill="#F0F0F8"/>
<ellipse cx="72" cy="42" rx="11" ry="32" fill="#FFB8D0"/>
<ellipse cx="128" cy="42" rx="11" ry="32" fill="#FFB8D0"/>
<circle cx="100" cy="110" r="64" fill="#F0F0F8"/>
<ellipse cx="100" cy="124" rx="18" ry="12" fill="#FFD8E8"/>
<circle cx="100" cy="115" r="5.5" fill="#FF9AB0"/>
<circle cx="103" cy="113" r="1.8" fill="white" opacity="0.6"/>
<circle cx="70" cy="120" r="9" fill="#FFB8D0" opacity="0.4"/>
<circle cx="130" cy="120" r="9" fill="#FFB8D0" opacity="0.4"/>
<rect x="88" y="170" width="24" height="16" rx="4" fill="#F0F0F8"/>`
    },
    {
      name: "강아지",
      svg: `<ellipse cx="38" cy="116" rx="24" ry="46" fill="#C8A040"/>
<ellipse cx="162" cy="116" rx="24" ry="46" fill="#C8A040"/>
<circle cx="100" cy="106" r="64" fill="#E8C060"/>
<ellipse cx="100" cy="122" rx="30" ry="21" fill="#F0D07A"/>
<ellipse cx="100" cy="110" rx="12" ry="7.5" fill="#2A1A0A"/>
<circle cx="105" cy="108" r="2.5" fill="white" opacity="0.6"/>
<ellipse cx="70" cy="115" rx="10" ry="7" fill="#D4A840" opacity="0.45"/>
<ellipse cx="130" cy="115" rx="10" ry="7" fill="#D4A840" opacity="0.45"/>
<rect x="88" y="166" width="24" height="16" rx="4" fill="#E8C060"/>`
    },
    {
      name: "여우",
      svg: `<polygon points="58,72 42,26 82,54" fill="#E87040"/>
<polygon points="142,72 158,26 118,54" fill="#E87040"/>
<polygon points="62,66 51,34 79,52" fill="#F8C0A0"/>
<polygon points="138,66 149,34 121,52" fill="#F8C0A0"/>
<circle cx="100" cy="108" r="62" fill="#E87040"/>
<ellipse cx="100" cy="130" rx="34" ry="34" fill="#F8EDE0"/>
<ellipse cx="100" cy="122" rx="22" ry="14" fill="#F8EDE0"/>
<ellipse cx="100" cy="112" rx="8" ry="5.5" fill="#2A1A0A"/>
<circle cx="104" cy="110" r="2" fill="white" opacity="0.6"/>
<rect x="88" y="166" width="24" height="16" rx="4" fill="#E87040"/>`
    }
  ],

  facial: [
    {
      name: "방긋",
      svg: `<path d="M70,92 Q80,82 90,92" stroke="#2A1A10" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M110,92 Q120,82 130,92" stroke="#2A1A10" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M82,134 Q100,147 118,134" stroke="#2A1A10" stroke-width="3" fill="none" stroke-linecap="round"/>`
    },
    {
      name: "윙크",
      svg: `<path d="M70,92 Q80,82 90,92" stroke="#2A1A10" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M70,95 Q80,100 90,95" stroke="#2A1A10" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
<circle cx="120" cy="90" r="12" fill="#2A1A10"/>
<circle cx="120" cy="90" r="9" fill="white"/>
<circle cx="122" cy="87" r="4.5" fill="#2A1A10"/>
<circle cx="124.5" cy="85.5" r="1.8" fill="white"/>
<path d="M82,134 Q100,147 118,134" stroke="#2A1A10" stroke-width="3" fill="none" stroke-linecap="round"/>
<circle cx="68" cy="82" r="3.5" fill="#FFD700"/>
<circle cx="60" cy="90" r="2.5" fill="#FFD700"/>
<circle cx="75" cy="76" r="2" fill="#FFD700"/>`
    },
    {
      name: "졸린",
      svg: `<path d="M68,92 Q80,82 92,92" stroke="#2A1A10" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M68,92 Q80,99 92,92" fill="#2A1A10"/>
<path d="M108,92 Q120,82 132,92" stroke="#2A1A10" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M108,92 Q120,99 132,92" fill="#2A1A10"/>
<path d="M136,70 L144,70 L136,63 L144,63" stroke="#AAAAAA" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M143,58 L153,58 L143,49 L153,49" stroke="#BBBBBB" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<ellipse cx="100" cy="136" rx="7" ry="5" fill="#2A1A10"/>
<ellipse cx="100" cy="136" rx="5" ry="3.5" fill="#CC6677"/>`
    },
    {
      name: "별 눈",
      svg: `<circle cx="80" cy="90" r="14" fill="#1A2240"/>
<polygon points="80,79 82,86 90,86 84,91 86,98 80,93 74,98 76,91 70,86 78,86" fill="#FFD700"/>
<circle cx="120" cy="90" r="14" fill="#1A2240"/>
<polygon points="120,79 122,86 130,86 124,91 126,98 120,93 114,98 116,91 110,86 118,86" fill="#FFD700"/>
<path d="M84,134 Q100,147 116,134" stroke="#2A1A10" stroke-width="3" fill="none" stroke-linecap="round"/>`
    },
    {
      name: "놀람",
      svg: `<circle cx="80" cy="90" r="14" fill="#2A1A10"/>
<circle cx="80" cy="90" r="11" fill="white"/>
<circle cx="80" cy="90" r="6.5" fill="#2A1A10"/>
<circle cx="82.5" cy="87" r="2.5" fill="white"/>
<circle cx="120" cy="90" r="14" fill="#2A1A10"/>
<circle cx="120" cy="90" r="11" fill="white"/>
<circle cx="120" cy="90" r="6.5" fill="#2A1A10"/>
<circle cx="122.5" cy="87" r="2.5" fill="white"/>
<ellipse cx="100" cy="136" rx="9" ry="7" fill="#2A1A10"/>
<ellipse cx="100" cy="136" rx="6.5" ry="5" fill="#CC4444"/>`
    }
  ],

  hair: [
    {
      name: "리본",
      svg: `<path d="M82,58 Q74,44 64,52 Q68,66 82,62 Z" fill="#FF5588"/>
<path d="M118,58 Q126,44 136,52 Q132,66 118,62 Z" fill="#FF5588"/>
<ellipse cx="100" cy="60" rx="11" ry="8" fill="#FF2255"/>
<ellipse cx="100" cy="60" rx="4" ry="3" fill="#CC1144"/>`
    },
    {
      name: "베레모",
      svg: `<ellipse cx="100" cy="58" rx="46" ry="20" fill="#CC3030"/>
<ellipse cx="100" cy="52" rx="34" ry="18" fill="#CC3030"/>
<ellipse cx="100" cy="46" rx="24" ry="14" fill="#E04040"/>
<circle cx="122" cy="44" r="5.5" fill="#AA2020"/>`
    },
    {
      name: "꽃",
      svg: `<circle cx="148" cy="70" r="9" fill="#FFE066"/>
<circle cx="136" cy="63" r="9" fill="#FFE066"/>
<circle cx="136" cy="78" r="9" fill="#FFE066"/>
<circle cx="160" cy="63" r="9" fill="#FFE066"/>
<circle cx="160" cy="78" r="9" fill="#FFE066"/>
<circle cx="148" cy="70" r="10" fill="#FFCC00"/>
<circle cx="148" cy="70" r="6" fill="#FF9900"/>`
    },
    {
      name: "반짝이",
      svg: `<circle cx="56" cy="62" r="5" fill="#FFD700"/>
<circle cx="46" cy="50" r="3.5" fill="#FFD700"/>
<circle cx="66" cy="48" r="3" fill="#FFD700"/>
<circle cx="54" cy="42" r="2" fill="#FFE566"/>
<circle cx="144" cy="62" r="5" fill="#FFD700"/>
<circle cx="154" cy="50" r="3.5" fill="#FFD700"/>
<circle cx="134" cy="48" r="3" fill="#FFD700"/>
<circle cx="146" cy="42" r="2" fill="#FFE566"/>
<circle cx="100" cy="38" r="3" fill="#FFD700"/>`
    },
    {
      name: "미니 모자",
      svg: `<ellipse cx="100" cy="62" rx="40" ry="9" fill="#2A1A10"/>
<rect x="74" y="32" width="52" height="32" rx="5" fill="#2A1A10"/>
<rect x="74" y="56" width="52" height="8" rx="3" fill="#FF6B8A"/>
<circle cx="100" cy="34" r="3.5" fill="#555"/>`
    }
  ]
};
