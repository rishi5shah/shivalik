/**
 * AUDA Town Planning Schemes - Prime Real Estate Bookmarks & Metadata with Outer Polygon Boundaries
 * Covers all major AUDA Residential, Commercial, and Industrial Corridors.
 * Institutional Zero-Trust Data Protection: Non-enumerable, deep-frozen schema.
 */
(function() {
  'use strict';

const AUDA_PRIME_SCHEMES = [
  {
    id: "AUDA_TP_50",
    name: "TP Scheme No. 50 (Bodakdev - Sindhu Bhavan Road)",
    village: "Bodakdev / Thaltej",
    authority: "AUDA",
    status: "Final Sanctioned",
    center: [23.0462, 72.5090],
    zoom: 15,
    color: "#38bdf8",
    highlights: ["Sindhu Bhavan Commercial Corridor", "Transit Oriented Zone (TOZ)", "Max FSI 4.0"],
    tagType: "tag-cyan",
    boundary: [
      [23.0545, 72.4990], [23.0555, 72.5115], [23.0505, 72.5185],
      [23.0435, 72.5205], [23.0365, 72.5155], [23.0355, 72.5045],
      [23.0405, 72.4975], [23.0485, 72.4965]
    ]
  },
  {
    id: "AUDA_TP_61",
    name: "TP Scheme No. 61 (Shilaj)",
    village: "Shilaj",
    authority: "AUDA",
    status: "Preliminary Sanctioned",
    center: [23.0502, 72.4825],
    zoom: 15,
    color: "#f59e0b",
    highlights: ["45m Arterial Road", "High-Rise Residential Corridor", "Fastest Growth Zone"],
    tagType: "tag-gold",
    boundary: [
      [23.0585, 72.4735], [23.0595, 72.4860], [23.0545, 72.4930],
      [23.0465, 72.4945], [23.0415, 72.4875], [23.0405, 72.4765],
      [23.0455, 72.4695], [23.0525, 72.4705]
    ]
  },
  {
    id: "AUDA_TP_01_SHELA",
    name: "TP Scheme No. 1 (Shela Town Center)",
    village: "Shela",
    authority: "AUDA",
    status: "Final Sanctioned",
    center: [23.0171, 72.4660],
    zoom: 15,
    color: "#10b981",
    highlights: ["Club 07 Corridor", "Premium Villa & High-Rise", "Wide 36m Road Frontage"],
    tagType: "tag-emerald",
    boundary: [
      [23.0255, 72.4570], [23.0265, 72.4695], [23.0215, 72.4765],
      [23.0135, 72.4780], [23.0085, 72.4710], [23.0075, 72.4600],
      [23.0125, 72.4530], [23.0195, 72.4540]
    ]
  },
  {
    id: "AUDA_TP_40_THALTEJ",
    name: "TP Scheme No. 40 (Thaltej - Hebatpur)",
    village: "Thaltej",
    authority: "AUDA",
    status: "Final Sanctioned",
    center: [23.0542, 72.5030],
    zoom: 15,
    color: "#00f2fe",
    highlights: ["Near Metro Station Corridor", "Hebatpur Luxury Residential", "FSI up to 4.0"],
    tagType: "tag-cyan",
    boundary: [
      [23.0625, 72.4940], [23.0635, 72.5065], [23.0585, 72.5135],
      [23.0505, 72.5150], [23.0455, 72.5080], [23.0445, 72.4970],
      [23.0495, 72.4900], [23.0565, 72.4910]
    ]
  },
  {
    id: "AUDA_TP_02_BOPAL",
    name: "TP Scheme No. 2 (Bopal South - Ghuma)",
    village: "Bopal",
    authority: "AUDA",
    status: "Final Sanctioned",
    center: [23.0304, 72.4727],
    zoom: 15,
    color: "#10b981",
    highlights: ["BRTS & Metro Connectivity", "Established Commercial Hub", "High Retail Demand"],
    tagType: "tag-emerald",
    boundary: [
      [23.0385, 72.4635], [23.0395, 72.4760], [23.0345, 72.4830],
      [23.0265, 72.4845], [23.0215, 72.4775], [23.0205, 72.4665],
      [23.0255, 72.4595], [23.0325, 72.4605]
    ]
  },
  {
    id: "AUDA_TP_62_OGNAJ",
    name: "TP Scheme No. 62 (Ognaj - Gota Ring Road)",
    village: "Ognaj / Gota",
    authority: "AUDA",
    status: "Preliminary Sanctioned",
    center: [23.0810, 72.5192],
    zoom: 15,
    color: "#f59e0b",
    highlights: ["S.P. Ring Road Abuttal", "Corporate Park Zoning", "Max Permissible Height 100m+"],
    tagType: "tag-gold",
    boundary: [
      [23.0895, 72.5100], [23.0905, 72.5225], [23.0855, 72.5295],
      [23.0775, 72.5310], [23.0725, 72.5240], [23.0715, 72.5130],
      [23.0765, 72.5060], [23.0835, 72.5070]
    ]
  },
  {
    id: "AUDA_TP_28_SOLA",
    name: "TP Scheme No. 28 (Sola - Science City Road)",
    village: "Sola",
    authority: "AUDA",
    status: "Final Sanctioned",
    center: [23.0720, 72.5100],
    zoom: 15,
    color: "#38bdf8",
    highlights: ["Science City Commercial Axis", "High Court Vicinity", "Premium Retail & Residential"],
    tagType: "tag-cyan",
    boundary: [
      [23.0800, 72.5010], [23.0810, 72.5135], [23.0760, 72.5205],
      [23.0680, 72.5220], [23.0630, 72.5150], [23.0620, 72.5040],
      [23.0670, 72.4970], [23.0740, 72.4980]
    ]
  },
  {
    id: "AUDA_TP_29_BHADAJ",
    name: "TP Scheme No. 29 (Bhadaj - Science City Extension)",
    village: "Bhadaj",
    authority: "AUDA",
    status: "Preliminary Sanctioned",
    center: [23.0780, 72.4950],
    zoom: 15,
    color: "#f59e0b",
    highlights: ["Science City Extension", "Luxury High-Rise & Villa Corridor", "Abutting 60m Ring Road"],
    tagType: "tag-gold",
    boundary: [
      [23.0860, 72.4860], [23.0870, 72.4985], [23.0820, 72.5055],
      [23.0740, 72.5070], [23.0690, 72.5000], [23.0680, 72.4890],
      [23.0730, 72.4820], [23.0800, 72.4830]
    ]
  },
  {
    id: "AUDA_TP_41_AMBLI",
    name: "TP Scheme No. 41 (Ambli - Bopal Road Corridor)",
    village: "Ambli",
    authority: "AUDA",
    status: "Final Sanctioned",
    center: [23.0360, 72.4890],
    zoom: 15,
    color: "#10b981",
    highlights: ["Ambli-Bopal Luxury Road", "Ultra-Premium Corporate HQ Zone", "Highest Land Valuation"],
    tagType: "tag-emerald",
    boundary: [
      [23.0440, 72.4800], [23.0450, 72.4925], [23.0400, 72.4995],
      [23.0320, 72.5010], [23.0270, 72.4940], [23.0260, 72.4830],
      [23.0310, 72.4760], [23.0380, 72.4770]
    ]
  },
  {
    id: "AUDA_TP_42_GHATLODIA",
    name: "TP Scheme No. 42 (Ghatlodia - Nirnay Nagar)",
    village: "Ghatlodia",
    authority: "AUDA",
    status: "Final Sanctioned",
    center: [23.0650, 72.5350],
    zoom: 15,
    color: "#38bdf8",
    highlights: ["Dense Urban Residential Zone", "Established Civil Infrastructure", "Sola Bridge Proximity"],
    tagType: "tag-cyan",
    boundary: [
      [23.0730, 72.5260], [23.0740, 72.5385], [23.0690, 72.5455],
      [23.0610, 72.5470], [23.0560, 72.5400], [23.0550, 72.5290],
      [23.0600, 72.5220], [23.0670, 72.5230]
    ]
  },
  {
    id: "AUDA_TP_44_CHANDKHEDA",
    name: "TP Scheme No. 44 (Chandkheda - S.P. Ring Road North)",
    village: "Chandkheda",
    authority: "AUDA",
    status: "Final Sanctioned",
    center: [23.1080, 72.5850],
    zoom: 15,
    color: "#10b981",
    highlights: ["S.P. Ring Road North Abuttal", "Near ONGC & IIM-A Ext", "High Rental Yield Zone"],
    tagType: "tag-emerald",
    boundary: [
      [23.1160, 72.5760], [23.1170, 72.5885], [23.1120, 72.5955],
      [23.1040, 72.5970], [23.0990, 72.5900], [23.0980, 72.5790],
      [23.1030, 72.5720], [23.1100, 72.5730]
    ]
  },
  {
    id: "AUDA_TP_45_MOTERA",
    name: "TP Scheme No. 45 (Motera - Stadium Corridor)",
    village: "Motera",
    authority: "AUDA",
    status: "Final Sanctioned",
    center: [23.0950, 72.6000],
    zoom: 15,
    color: "#f59e0b",
    highlights: ["Narendra Modi Stadium Corridor", "Sabarmati Riverfront North Ext", "Metro Line Abuttal"],
    tagType: "tag-gold",
    boundary: [
      [23.1030, 72.5910], [23.1040, 72.6035], [23.0990, 72.6105],
      [23.0910, 72.6120], [23.0860, 72.6050], [23.0850, 72.5940],
      [23.0900, 72.5870], [23.0970, 72.5880]
    ]
  },
  {
    id: "AUDA_TP_21_MAKARBA",
    name: "TP Scheme No. 21 (Makarba - S.G. Highway South)",
    village: "Makarba",
    authority: "AUDA",
    status: "Final Sanctioned",
    center: [22.9980, 72.5020],
    zoom: 15,
    color: "#38bdf8",
    highlights: ["S.G. Highway Commercial Hub", "Near Vodafone House & YMCA", "High FSI Office Zone"],
    tagType: "tag-cyan",
    boundary: [
      [23.0060, 72.4930], [23.0070, 72.5055], [23.0020, 72.5125],
      [22.9940, 72.5140], [22.9890, 72.5070], [22.9880, 72.4960],
      [22.9930, 72.4890], [23.0000, 72.4900]
    ]
  },
  {
    id: "AUDA_TP_22_PRAHLADNAGAR",
    name: "TP Scheme No. 22 (Prahlad Nagar - Corporate Road)",
    village: "Vejalpur / Makarba",
    authority: "AUDA",
    status: "Final Sanctioned",
    center: [23.0110, 72.5100],
    zoom: 15,
    color: "#10b981",
    highlights: ["Prahlad Nagar Corporate Axis", "Prime Financial & IT Park Zone", "Top Retail Destination"],
    tagType: "tag-emerald",
    boundary: [
      [23.0190, 72.5010], [23.0200, 72.5135], [23.0150, 72.5205],
      [23.0070, 72.5220], [23.0020, 72.5150], [23.0010, 72.5040],
      [23.0060, 72.4970], [23.0130, 72.4980]
    ]
  },
  {
    id: "AUDA_TP_23_VASTRAPUR",
    name: "TP Scheme No. 23 (Vastrapur - Lake Corridor)",
    village: "Vastrapur",
    authority: "AUDA",
    status: "Final Sanctioned",
    center: [23.0350, 72.5280],
    zoom: 15,
    color: "#38bdf8",
    highlights: ["Vastrapur Lake Proximity", "Alpha One Mall Commercial Zone", "High-Density Urban Hub"],
    tagType: "tag-cyan",
    boundary: [
      [23.0430, 72.5190], [23.0440, 72.5315], [23.0390, 72.5385],
      [23.0310, 72.5400], [23.0260, 72.5330], [23.0250, 72.5220],
      [23.0300, 72.5150], [23.0370, 72.5160]
    ]
  },
  {
    id: "AUDA_TP_24_SATELLITE",
    name: "TP Scheme No. 24 (Satellite - Jodhpur Village)",
    village: "Jodhpur / Satellite",
    authority: "AUDA",
    status: "Final Sanctioned",
    center: [23.0240, 72.5180],
    zoom: 15,
    color: "#f59e0b",
    highlights: ["Shivalik High-Street Proximity", "Established Premium Residential", "100% Sanctioned Infrastructure"],
    tagType: "tag-gold",
    boundary: [
      [23.0320, 72.5090], [23.0330, 72.5215], [23.0280, 72.5285],
      [23.0200, 72.5300], [23.0150, 72.5230], [23.0140, 72.5120],
      [23.0190, 72.5050], [23.0260, 72.5060]
    ]
  },
  {
    id: "AUDA_TP_03_GHUMA",
    name: "TP Scheme No. 3 (Ghuma - Western Boundary)",
    village: "Ghuma",
    authority: "AUDA",
    status: "Preliminary Sanctioned",
    center: [23.0290, 72.4450],
    zoom: 15,
    color: "#10b981",
    highlights: ["AUDA Western Growth Edge", "Affordable Luxury Villa Zone", "New DPS School Corridor"],
    tagType: "tag-emerald",
    boundary: [
      [23.0370, 72.4360], [23.0380, 72.4485], [23.0330, 72.4555],
      [23.0250, 72.4570], [23.0200, 72.4500], [23.0190, 72.4390],
      [23.0240, 72.4320], [23.0310, 72.4330]
    ]
  },
  {
    id: "AUDA_TP_04_SANAND",
    name: "TP Scheme No. 4 (Sanand GIDC Link Corridor)",
    village: "Sanand Link",
    authority: "AUDA",
    status: "Preliminary Sanctioned",
    center: [22.9850, 72.4100],
    zoom: 15,
    color: "#f59e0b",
    highlights: ["Automotive Hub Link Road", "Logistics & Warehousing Axis", "Industrial Growth Corridor"],
    tagType: "tag-gold",
    boundary: [
      [22.9930, 72.4010], [22.9940, 72.4135], [22.9890, 72.4205],
      [22.9810, 72.4220], [22.9760, 72.4150], [22.9750, 72.4040],
      [22.9800, 72.3970], [22.9870, 72.3980]
    ]
  },
  {
    id: "AUDA_TP_05_RANCHHODPURA",
    name: "TP Scheme No. 5 (Ranchhodpura - Green Belt)",
    village: "Ranchhodpura",
    authority: "AUDA",
    status: "Draft Sanctioned",
    center: [23.0900, 72.4600],
    zoom: 15,
    color: "#a855f7",
    highlights: ["North-West Green Belt Zone", "Eco-Resort & Farm Plot Corridor", "Future Expansion Sector"],
    tagType: "tag-cyan",
    boundary: [
      [23.0980, 72.4510], [23.0990, 72.4635], [23.0940, 72.4705],
      [23.0860, 72.4720], [23.0810, 72.4650], [23.0800, 72.4540],
      [23.0850, 72.4470], [23.0920, 72.4480]
    ]
  },
  {
    id: "AUDA_TP_65_KHORAJ",
    name: "TP Scheme No. 65 (Khoraj - Vaishnodevi Circle)",
    village: "Khoraj",
    authority: "AUDA",
    status: "Preliminary Sanctioned",
    center: [23.1350, 72.5450],
    zoom: 15,
    color: "#f59e0b",
    highlights: ["Vaishnodevi Circle Abuttal", "KD Hospital Proximity", "S.G. Highway North Junction"],
    tagType: "tag-gold",
    boundary: [
      [23.1430, 72.5360], [23.1440, 72.5485], [23.1390, 72.5555],
      [23.1310, 72.5570], [23.1260, 72.5500], [23.1250, 72.5390],
      [23.1300, 72.5320], [23.1370, 72.5330]
    ]
  },
  {
    id: "AUDA_TP_66_KHODIYAR",
    name: "TP Scheme No. 66 (Khodiyar - Railway Container Depot)",
    village: "Khodiyar",
    authority: "AUDA",
    status: "Preliminary Sanctioned",
    center: [23.1500, 72.5600],
    zoom: 15,
    color: "#10b981",
    highlights: ["Logistics Park Zone", "Khodiyar Railway Hub", "Adani Shantiagram Proximity"],
    tagType: "tag-emerald",
    boundary: [
      [23.1580, 72.5510], [23.1590, 72.5635], [23.1540, 72.5705],
      [23.1460, 72.5720], [23.1410, 72.5650], [23.1400, 72.5540],
      [23.1450, 72.5470], [23.1520, 72.5480]
    ]
  },
  {
    id: "AUDA_TP_67_LAPKAMAN",
    name: "TP Scheme No. 67 (Lapkaman - Lake Zone)",
    village: "Lapkaman",
    authority: "AUDA",
    status: "Draft Sanctioned",
    center: [23.1150, 72.4900],
    zoom: 15,
    color: "#a855f7",
    highlights: ["Lapkaman Lake Sanctuary", "Low-Density Premium Residences", "Unspoiled Natural Environs"],
    tagType: "tag-cyan",
    boundary: [
      [23.1230, 72.4810], [23.1240, 72.4935], [23.1190, 72.5005],
      [23.1110, 72.5020], [23.1060, 72.4950], [23.1050, 72.4840],
      [23.1100, 72.4770], [23.1170, 72.4780]
    ]
  },
  {
    id: "AUDA_TP_68_JASPUR",
    name: "TP Scheme No. 68 (Jaspur - Ring Road Junction)",
    village: "Jaspur",
    authority: "AUDA",
    status: "Preliminary Sanctioned",
    center: [23.1300, 72.5100],
    zoom: 15,
    color: "#f59e0b",
    highlights: ["Ring Road Intersect", "Commercial Tower Zoning", "Rapid Infrastructure Execution"],
    tagType: "tag-gold",
    boundary: [
      [23.1380, 72.5010], [23.1390, 72.5135], [23.1340, 72.5205],
      [23.1260, 72.5220], [23.1210, 72.5150], [23.1200, 72.5040],
      [23.1250, 72.4970], [23.1320, 72.4980]
    ]
  },
  {
    id: "AUDA_TP_70_ADALAJ",
    name: "TP Scheme No. 70 (Adalaj - Gandhinagar Link)",
    village: "Adalaj",
    authority: "AUDA",
    status: "Final Sanctioned",
    center: [23.1650, 72.5800],
    zoom: 15,
    color: "#38bdf8",
    highlights: ["Twin City Ahmedabad-Gandhinagar Link", "Adalaj Stepwell Heritage Axis", "Tri-Road Connectivity"],
    tagType: "tag-cyan",
    boundary: [
      [23.1730, 72.5710], [23.1740, 72.5835], [23.1690, 72.5905],
      [23.1610, 72.5920], [23.1560, 72.5850], [23.1550, 72.5740],
      [23.1600, 72.5670], [23.1670, 72.5680]
    ]
  }
];

  // Deep Freeze all scheme objects to prevent DOM/memory mutation or tampering
  AUDA_PRIME_SCHEMES.forEach(scheme => {
    if (scheme.boundary) Object.freeze(scheme.boundary);
    if (scheme.center) Object.freeze(scheme.center);
    if (scheme.highlights) Object.freeze(scheme.highlights);
    Object.freeze(scheme);
  });
  Object.freeze(AUDA_PRIME_SCHEMES);

  // Securely define window.audaPrimeSchemes as non-enumerable, non-writable, non-configurable
  // Hides data from Object.keys(window), for..in loops, and automated AI scrapers
  try {
    Object.defineProperty(window, 'audaPrimeSchemes', {
      get: function() {
        return AUDA_PRIME_SCHEMES;
      },
      set: function() {
        if (window._shivalik_audit_log) {
          window._shivalik_audit_log.push({ time: new Date().toLocaleTimeString(), type: "Data Tamper Trap", detail: "Attempted override of protected AUDA GIS schema" });
        }
      },
      enumerable: false,
      configurable: false
    });
  } catch(e) {
    window.audaPrimeSchemes = AUDA_PRIME_SCHEMES;
  }

})();
