var countries = {
  // Asia
  AU: "Australia",
  JP: "Japan",
  IL: "Israel",
  HK: "Hong Kong",
  ID: "Indonesia",
  MY: "Malaysia",
  NZ: "New Zealand",
  PH: "Philippines",
  SG: "Singapore",
  TW: "Taiwan",
  TH: "Thailand",
  VN: "Vietnam",
  // Europe
  AD: "Andorra",
  AT: "Austria",
  BE: "Belgium",
  BG: "Bulgaria",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DK: "Denmark",
  EE: "Estonia",
  FI: "Finland",
  FR: "France",
  DE: "Germany",
  GR: "Greece",
  HU: "Hungary",
  IS: "Iceland",
  IE: "Ireland",
  IT: "Italy",
  LV: "Latvia",
  LI: "Liechtenstien",
  LT: "Lithuania",
  LU: "Luxembourg",
  MT: "Malta",
  MC: "Monaco",
  NL: "Netherlands",
  NO: "Norway",
  PL: "Poland",
  PT: "Portugal",
  RO: "Romania",
  SK: "Slovakia",
  ES: "Spain",
  SE: "Sweden",
  CH: "Switzerland",
  TR: "Turkey",
  UK: "United Kingdom",
  // Latin America and the Caribbean
  AR: "Argentina",
  BO: "Bolivia",
  BR: "Brazil",
  CL: "Chile",
  CO: "Colombia",
  CR: "Costa Rica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  SV: "El Savador",
  GT: "Guatamala",
  HN: "Honduras",
  MX: "Mexico",
  NI: "Nicaragua",
  PA: "Panama",
  PY: "Paraguy",
  PE: "Peru",
  UY: "Uruguay",
  // North America
  CA: "Canada",
  US: "United States",
  // Africa
  ZA: "South Africa"
}

function country(string) {
  string.forEach(function(code) {
    var pos = string.indexOf(code);
    string[pos] = countries.code;
  });
}