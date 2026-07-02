/**
 * AUDA Town Planning Schemes - Prime Real Estate Bookmarks & Metadata with Outer Polygon Boundaries
 */

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
  }
];

window.audaPrimeSchemes = AUDA_PRIME_SCHEMES;
