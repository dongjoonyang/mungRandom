// 2등신 캐릭터: 큰 흰 머리 + 작은 몸통
// 레이어 순서: background → body → face → hair(소품) → facial(표정)

const S = '#555555'; // 공통 아웃라인 색
const W = '#FFFFFF'; // 공통 흰색 채우기

const CHARACTER_PARTS = {
  /* ── 배경 ─────────────────────────────────────── */
  background: [
    {
      name: "핑크",
      svg: `<defs><linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFE8F0"/><stop offset="100%" stop-color="#FFCCE0"/></linearGradient></defs>
<rect width="200" height="280" fill="url(#bg1)"/>
<circle cx="168" cy="26" r="22" fill="#FFB8D4" opacity="0.3"/>
<circle cx="20" cy="255" r="32" fill="#FFB8D4" opacity="0.2"/>`
    },
    {
      name: "하늘",
      svg: `<rect width="200" height="280" fill="#D6EEFF"/>
<ellipse cx="44" cy="44" rx="32" ry="17" fill="white" opacity="0.85"/>
<ellipse cx="68" cy="36" rx="24" ry="15" fill="white" opacity="0.85"/>
<ellipse cx="152" cy="62" rx="28" ry="15" fill="white" opacity="0.82"/>
<ellipse cx="175" cy="56" rx="20" ry="13" fill="white" opacity="0.82"/>`
    },
    {
      name: "민트",
      svg: `<rect width="200" height="280" fill="#D0F5E8"/>
<circle cx="16" cy="20" r="6" fill="#8EE8C8" opacity="0.65"/>
<circle cx="72" cy="12" r="5" fill="#8EE8C8" opacity="0.65"/>
<circle cx="150" cy="28" r="7" fill="#8EE8C8" opacity="0.65"/>
<circle cx="188" cy="14" r="4" fill="#8EE8C8" opacity="0.65"/>
<circle cx="46" cy="258" r="8" fill="#8EE8C8" opacity="0.5"/>
<circle cx="166" cy="248" r="6" fill="#8EE8C8" opacity="0.5"/>`
    },
    {
      name: "라벤더",
      svg: `<defs><linearGradient id="bg4" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ECE0FF"/><stop offset="100%" stop-color="#D2B8FF"/></linearGradient></defs>
<rect width="200" height="280" fill="url(#bg4)"/>
<polygon points="22,30 25,40 35,40 27,46 30,56 22,50 14,56 17,46 9,40 19,40" fill="#C8A8FF" opacity="0.68"/>
<polygon points="164,50 167,60 177,60 169,66 172,76 164,70 156,76 159,66 151,60 161,60" fill="#C8A8FF" opacity="0.58"/>`
    },
    {
      name: "노랑",
      svg: `<defs><linearGradient id="bg5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFF8D0"/><stop offset="100%" stop-color="#FFE888"/></linearGradient></defs>
<rect width="200" height="280" fill="url(#bg5)"/>
<circle cx="24" cy="34" r="16" fill="#FFD866" opacity="0.38"/>
<circle cx="174" cy="248" r="22" fill="#FFD866" opacity="0.28"/>
<circle cx="180" cy="40" r="10" fill="#FFD866" opacity="0.3"/>`
    },
    {
      name: "연두",
      svg: `<defs><linearGradient id="bg6" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#EDFFD0"/><stop offset="100%" stop-color="#C8F0A0"/></linearGradient></defs>
<rect width="200" height="280" fill="url(#bg6)"/>
<circle cx="20" cy="48" r="20" fill="#B0E080" opacity="0.3"/>
<circle cx="180" cy="240" r="28" fill="#B0E080" opacity="0.25"/>
<circle cx="172" cy="30" r="8" fill="#90CC60" opacity="0.4"/>`
    },
    {
      name: "복숭아",
      svg: `<defs><linearGradient id="bg7" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFE8D0"/><stop offset="100%" stop-color="#FFCC99"/></linearGradient></defs>
<rect width="200" height="280" fill="url(#bg7)"/>
<circle cx="38" cy="42" r="22" fill="#FFAA70" opacity="0.3"/>
<circle cx="168" cy="246" r="28" fill="#FFAA70" opacity="0.25"/>
<circle cx="174" cy="44" r="9" fill="#FF8844" opacity="0.35"/>
<circle cx="22" cy="220" r="6" fill="#FF8844" opacity="0.3"/>`
    },
    {
      name: "하늘별",
      svg: `<rect width="200" height="280" fill="#E0F0FF"/>
<circle cx="26" cy="22" r="2.5" fill="#88BBFF" opacity="0.8"/>
<circle cx="82" cy="14" r="2" fill="#88BBFF" opacity="0.7"/>
<circle cx="152" cy="26" r="3" fill="#88BBFF" opacity="0.75"/>
<circle cx="178" cy="54" r="2" fill="#AACCFF" opacity="0.65"/>
<circle cx="44" cy="264" r="2.5" fill="#88BBFF" opacity="0.6"/>
<circle cx="168" cy="252" r="3" fill="#88BBFF" opacity="0.55"/>
<circle cx="100" cy="12" r="2" fill="#AACCFF" opacity="0.6"/>
<polygon points="176,228 178,235 185,235 179,239 181,246 176,242 171,246 173,239 167,235 174,235" fill="#AACCFF" opacity="0.5"/>`
    }
  ],

  /* ── 몸통 · 팔 · 다리 (포즈 5종) ─────────────── */
  // 머리: cy=90 r=72 → 하단 y=162
  // 몸통 cy=172 → 상단 y=146 (머리 안쪽으로 16px 겹침)
  // y=162에서 몸통 폭 ~66px → 자연스러운 2등신 연결
  body: [
    {
      name: "기본",
      svg: `<ellipse cx="100" cy="172" rx="36" ry="26" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="60" cy="178" rx="9" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(-14 60 178)"/>
<ellipse cx="140" cy="178" rx="9" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(14 140 178)"/>
<ellipse cx="85" cy="216" rx="12" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="115" cy="216" rx="12" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5"/>`
    },
    {
      name: "만세",
      svg: `<ellipse cx="100" cy="172" rx="36" ry="26" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="52" cy="157" rx="9" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(-50 52 157)"/>
<ellipse cx="148" cy="157" rx="9" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(50 148 157)"/>
<ellipse cx="85" cy="216" rx="12" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="115" cy="216" rx="12" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5"/>`
    },
    {
      name: "손흔들기",
      svg: `<ellipse cx="100" cy="172" rx="36" ry="26" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="50" cy="153" rx="9" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(-60 50 153)"/>
<ellipse cx="140" cy="178" rx="9" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(14 140 178)"/>
<ellipse cx="85" cy="216" rx="12" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="115" cy="216" rx="12" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5"/>`
    },
    {
      name: "팔 벌림",
      svg: `<ellipse cx="100" cy="172" rx="36" ry="26" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="46" cy="172" rx="9" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(-82 46 172)"/>
<ellipse cx="154" cy="172" rx="9" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(82 154 172)"/>
<ellipse cx="85" cy="216" rx="12" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="115" cy="216" rx="12" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5"/>`
    },
    {
      name: "앉기",
      svg: `<ellipse cx="100" cy="178" rx="38" ry="24" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="60" cy="182" rx="9" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(-14 60 182)"/>
<ellipse cx="140" cy="182" rx="9" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(14 140 182)"/>
<ellipse cx="82" cy="216" rx="16" ry="10" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(-22 82 216)"/>
<ellipse cx="118" cy="216" rx="16" ry="10" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(22 118 216)"/>`
    },
    {
      name: "뒷짐",
      svg: `<ellipse cx="62" cy="188" rx="9" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(30 62 188)"/>
<ellipse cx="138" cy="188" rx="9" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(-30 138 188)"/>
<ellipse cx="100" cy="172" rx="36" ry="26" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="85" cy="216" rx="12" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="115" cy="216" rx="12" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5"/>`
    },
    {
      name: "점프",
      svg: `<ellipse cx="100" cy="172" rx="36" ry="26" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="52" cy="164" rx="9" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(-65 52 164)"/>
<ellipse cx="148" cy="164" rx="9" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(65 148 164)"/>
<ellipse cx="80" cy="214" rx="12" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(-22 80 214)"/>
<ellipse cx="120" cy="214" rx="12" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(22 120 214)"/>`
    },
    {
      name: "기지개",
      svg: `<ellipse cx="100" cy="172" rx="36" ry="26" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="50" cy="155" rx="9" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(-75 50 155)"/>
<ellipse cx="143" cy="178" rx="9" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5" transform="rotate(80 143 178)"/>
<ellipse cx="85" cy="216" rx="12" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="115" cy="216" rx="12" ry="15" fill="${W}" stroke="${S}" stroke-width="2.5"/>`
    }
  ],

  /* ── 얼굴형 (귀 타입 5종) ─────────────────────── */
  face: [
    {
      name: "기본 동그리",
      svg: `<circle cx="100" cy="90" r="72" fill="${W}" stroke="${S}" stroke-width="2.5"/>`
    },
    {
      name: "토끼",
      svg: `<ellipse cx="72" cy="36" rx="16" ry="40" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="128" cy="36" rx="16" ry="40" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="72" cy="36" rx="9" ry="30" fill="#FFB8D0"/>
<ellipse cx="128" cy="36" rx="9" ry="30" fill="#FFB8D0"/>
<circle cx="100" cy="90" r="72" fill="${W}" stroke="${S}" stroke-width="2.5"/>`
    },
    {
      name: "고양이",
      svg: `<polygon points="60,70 44,22 82,52" fill="${W}" stroke="${S}" stroke-width="2.5" stroke-linejoin="round"/>
<polygon points="140,70 156,22 118,52" fill="${W}" stroke="${S}" stroke-width="2.5" stroke-linejoin="round"/>
<polygon points="63,64 53,34 79,50" fill="#FFB8C8"/>
<polygon points="137,64 147,34 121,50" fill="#FFB8C8"/>
<circle cx="100" cy="90" r="72" fill="${W}" stroke="${S}" stroke-width="2.5"/>`
    },
    {
      name: "곰",
      svg: `<circle cx="52" cy="40" r="24" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<circle cx="148" cy="40" r="24" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<circle cx="52" cy="40" r="14" fill="#FFD0A0"/>
<circle cx="148" cy="40" r="14" fill="#FFD0A0"/>
<circle cx="100" cy="90" r="72" fill="${W}" stroke="${S}" stroke-width="2.5"/>`
    },
    {
      name: "강아지",
      svg: `<ellipse cx="30" cy="112" rx="24" ry="48" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="170" cy="112" rx="24" ry="48" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<circle cx="100" cy="90" r="72" fill="${W}" stroke="${S}" stroke-width="2.5"/>`
    },
    {
      name: "판다",
      svg: `<circle cx="52" cy="42" r="24" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<circle cx="148" cy="42" r="24" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<circle cx="52" cy="42" r="14" fill="#2A2A2A"/>
<circle cx="148" cy="42" r="14" fill="#2A2A2A"/>
<circle cx="100" cy="90" r="72" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="79" cy="90" rx="17" ry="14" fill="#1A1A1A" opacity="0.82"/>
<ellipse cx="121" cy="90" rx="17" ry="14" fill="#1A1A1A" opacity="0.82"/>`
    },
    {
      name: "여우",
      svg: `<polygon points="68,70 52,14 86,54" fill="${W}" stroke="${S}" stroke-width="2.5" stroke-linejoin="round"/>
<polygon points="132,70 148,14 114,54" fill="${W}" stroke="${S}" stroke-width="2.5" stroke-linejoin="round"/>
<polygon points="70,64 60,26 83,50" fill="#FF7820"/>
<polygon points="130,64 140,26 117,50" fill="#FF7820"/>
<circle cx="100" cy="90" r="72" fill="${W}" stroke="${S}" stroke-width="2.5"/>`
    },
    {
      name: "햄스터",
      svg: `<circle cx="54" cy="54" r="18" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<circle cx="146" cy="54" r="18" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<circle cx="54" cy="54" r="10" fill="#FFCCAA"/>
<circle cx="146" cy="54" r="10" fill="#FFCCAA"/>
<circle cx="100" cy="90" r="72" fill="${W}" stroke="${S}" stroke-width="2.5"/>
<ellipse cx="40" cy="114" rx="20" ry="16" fill="#FFDDCC" opacity="0.75"/>
<ellipse cx="160" cy="114" rx="20" ry="16" fill="#FFDDCC" opacity="0.75"/>`
    }
  ],

  /* ── 표정 ─────────────────────────────────────── */
  facial: [
    {
      name: "방긋",
      svg: `<path d="M76,90 Q83,83 90,90" stroke="${S}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<path d="M110,90 Q117,83 124,90" stroke="${S}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<path d="M85,110 Q100,121 115,110" stroke="${S}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<ellipse cx="70" cy="102" rx="8" ry="5.5" fill="#FFB8C8" opacity="0.58"/>
<ellipse cx="130" cy="102" rx="8" ry="5.5" fill="#FFB8C8" opacity="0.58"/>`
    },
    {
      name: "슬픔",
      svg: `<path d="M76,90 Q83,97 90,90" stroke="${S}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<path d="M110,90 Q117,97 124,90" stroke="${S}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<path d="M85,114 Q100,107 115,114" stroke="${S}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<ellipse cx="81" cy="100" rx="4" ry="6" fill="#A8D8FF" opacity="0.85"/>
<ellipse cx="119" cy="100" rx="4" ry="6" fill="#A8D8FF" opacity="0.85"/>`
    },
    {
      name: "깜짝",
      svg: `<circle cx="83" cy="90" r="9" fill="${S}"/>
<circle cx="83" cy="90" r="6.5" fill="${W}"/>
<circle cx="85" cy="88" r="3" fill="${S}"/>
<circle cx="86.5" cy="86.5" r="1.2" fill="${W}"/>
<circle cx="117" cy="90" r="9" fill="${S}"/>
<circle cx="117" cy="90" r="6.5" fill="${W}"/>
<circle cx="119" cy="88" r="3" fill="${S}"/>
<circle cx="120.5" cy="86.5" r="1.2" fill="${W}"/>
<ellipse cx="100" cy="112" rx="8" ry="6" fill="${S}"/>
<ellipse cx="100" cy="112" rx="5.5" ry="4" fill="#CC4444"/>`
    },
    {
      name: "윙크",
      svg: `<path d="M76,90 Q83,83 90,90" stroke="${S}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<path d="M76,94 Q83,99 90,94" stroke="${S}" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.55"/>
<circle cx="117" cy="89" r="8" fill="${S}"/>
<circle cx="117" cy="89" r="5.5" fill="${W}"/>
<circle cx="119" cy="87" r="2.5" fill="${S}"/>
<circle cx="120.5" cy="85.5" r="1" fill="${W}"/>
<path d="M85,110 Q100,121 115,110" stroke="${S}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<circle cx="68" cy="80" r="3.5" fill="#FFD700"/>
<circle cx="60" cy="88" r="2.5" fill="#FFD700"/>
<circle cx="74" cy="74" r="2" fill="#FFD700"/>`
    },
    {
      name: "멍",
      svg: `<line x1="76" y1="90" x2="90" y2="90" stroke="${S}" stroke-width="2.2" stroke-linecap="round"/>
<line x1="110" y1="90" x2="124" y2="90" stroke="${S}" stroke-width="2.2" stroke-linecap="round"/>
<ellipse cx="100" cy="112" rx="7" ry="5" fill="${S}"/>
<ellipse cx="100" cy="112" rx="5" ry="3.5" fill="#CC6677"/>
<path d="M136,68 L144,68 L136,61 L144,61" stroke="#AAAAAA" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M142,56 L152,56 L142,47 L152,47" stroke="#BBBBBB" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
    },
    {
      name: "화남",
      svg: `<line x1="74" y1="77" x2="94" y2="84" stroke="${S}" stroke-width="2.8" stroke-linecap="round"/>
<line x1="126" y1="77" x2="106" y2="84" stroke="${S}" stroke-width="2.8" stroke-linecap="round"/>
<ellipse cx="83" cy="92" rx="7" ry="6" fill="${S}"/>
<ellipse cx="117" cy="92" rx="7" ry="6" fill="${S}"/>
<path d="M84,114 Q100,106 116,114" stroke="${S}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`
    },
    {
      name: "부끄",
      svg: `<circle cx="82" cy="90" r="4.5" fill="${S}"/>
<circle cx="118" cy="90" r="4.5" fill="${S}"/>
<path d="M88,108 Q100,117 112,108" stroke="${S}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<ellipse cx="66" cy="106" rx="18" ry="11" fill="#FF5577" opacity="0.62"/>
<ellipse cx="134" cy="106" rx="18" ry="11" fill="#FF5577" opacity="0.62"/>`
    },
    {
      name: "졸림",
      svg: `<path d="M74,88 Q83,83 92,88" stroke="${S}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<path d="M74,91 Q83,95 92,91" stroke="${S}" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.45"/>
<path d="M108,88 Q117,83 126,88" stroke="${S}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
<path d="M108,91 Q117,95 126,91" stroke="${S}" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.45"/>
<ellipse cx="100" cy="112" rx="7" ry="5" fill="${S}" opacity="0.65"/>
<path d="M130,72 L142,72 L130,62 L142,62" stroke="#BBBBBB" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M138,55 L152,55 L138,44 L152,44" stroke="#CCCCCC" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
    }
  ],

  /* ── 소품 (머리 위 장식) ──────────────────────── */
  hair: [
    {
      name: "볼터치",
      svg: `<ellipse cx="62" cy="108" rx="12" ry="8" fill="#FFB0C8" opacity="0.52"/>
<ellipse cx="138" cy="108" rx="12" ry="8" fill="#FFB0C8" opacity="0.52"/>`
    },
    {
      name: "리본",
      svg: `<path d="M84,22 Q76,10 66,18 Q70,32 84,28 Z" fill="#FF5588"/>
<path d="M116,22 Q124,10 134,18 Q130,32 116,28 Z" fill="#FF5588"/>
<ellipse cx="100" cy="23" rx="11" ry="8" fill="#FF2255"/>
<ellipse cx="100" cy="23" rx="4" ry="3" fill="#CC1144"/>`
    },
    {
      name: "꽃",
      svg: `<circle cx="138" cy="28" r="9" fill="#FFE066"/>
<circle cx="126" cy="21" r="9" fill="#FFE066"/>
<circle cx="126" cy="36" r="9" fill="#FFE066"/>
<circle cx="150" cy="21" r="9" fill="#FFE066"/>
<circle cx="150" cy="36" r="9" fill="#FFE066"/>
<circle cx="138" cy="28" r="9" fill="#FFCC00"/>
<circle cx="138" cy="28" r="6" fill="#FF9900"/>`
    },
    {
      name: "왕관",
      svg: `<path d="M72,28 L78,10 L90,22 L100,6 L110,22 L122,10 L128,28 Z" fill="#FFD700" stroke="#E0A000" stroke-width="1.5" stroke-linejoin="round"/>
<circle cx="100" cy="8" r="3" fill="#FF4444"/>
<circle cx="79" cy="11" r="2.5" fill="#44AAFF"/>
<circle cx="121" cy="11" r="2.5" fill="#44FF88"/>
<rect x="72" y="26" width="56" height="8" rx="3" fill="#FFD700" stroke="#E0A000" stroke-width="1.5"/>`
    },
    {
      name: "반짝",
      svg: `<circle cx="52" cy="44" r="5" fill="#FFD700"/>
<circle cx="42" cy="30" r="3.5" fill="#FFD700"/>
<circle cx="60" cy="26" r="3" fill="#FFD700"/>
<circle cx="48" cy="20" r="2" fill="#FFE566"/>
<circle cx="148" cy="44" r="5" fill="#FFD700"/>
<circle cx="158" cy="30" r="3.5" fill="#FFD700"/>
<circle cx="140" cy="26" r="3" fill="#FFD700"/>
<circle cx="152" cy="20" r="2" fill="#FFE566"/>
<circle cx="100" cy="16" r="3.5" fill="#FFD700"/>`
    },
    {
      name: "안경",
      svg: `<circle cx="83" cy="90" r="14" fill="none" stroke="#555555" stroke-width="2.2"/>
<circle cx="117" cy="90" r="14" fill="none" stroke="#555555" stroke-width="2.2"/>
<line x1="97" y1="90" x2="103" y2="90" stroke="#555555" stroke-width="2.2"/>
<line x1="28" y1="88" x2="69" y2="88" stroke="#555555" stroke-width="1.8" stroke-linecap="round"/>
<line x1="131" y1="88" x2="172" y2="88" stroke="#555555" stroke-width="1.8" stroke-linecap="round"/>`
    },
    {
      name: "별핀",
      svg: `<polygon points="150,44 152,52 160,52 154,57 156,65 150,60 144,65 146,57 140,52 148,52" fill="#FFD700" stroke="#E0A000" stroke-width="1.2" stroke-linejoin="round"/>
<line x1="150" y1="65" x2="144" y2="77" stroke="#CC8800" stroke-width="2" stroke-linecap="round"/>`
    },
    {
      name: "하트핀",
      svg: `<path d="M50,56 C50,56 32,44 32,34 C32,26 42,24 50,32 C58,24 68,26 68,34 C68,44 50,56 50,56Z" fill="#FF4488" stroke="#CC1166" stroke-width="1.2"/>
<line x1="50" y1="56" x2="55" y2="68" stroke="#CC1166" stroke-width="2" stroke-linecap="round"/>`
    }
  ]
};
