import fs from 'fs';

// Map coordinates for all 5 sectors on Holmes 1888 map
const standardCoordsMap = {
  // NW (North West)
  '221B': { left: '18%', top: '22%' },
  '50NW': { left: '22%', top: '16%' },
  '53NW': { left: '26%', top: '28%' },
  '16NW': { left: '32%', top: '14%' },
  '20NW': { left: '14%', top: '34%' },
  '72NW': { left: '24%', top: '38%' },
  '89NW': { left: '30%', top: '36%' },
  '90NW': { left: '28%', top: '44%' },
  '41NW': { left: '12%', top: '12%' },
  '49NW': { left: '36%', top: '22%' },
  '96NW': { left: '18%', top: '46%' },
  '45NW': { left: '20%', top: '30%' },
  '78NW': { left: '34%', top: '42%' },
  '99NW': { left: '16%', top: '48%' },
  '12NW': { left: '32%', top: '16%' },
  '31NW': { left: '28%', top: '26%' },
  '98NW': { left: '16%', top: '10%' },

  // WC (West Central)
  '18WC': { left: '46%', top: '36%' },
  '28WC': { left: '42%', top: '42%' },
  '34WC': { left: '52%', top: '38%' },
  '85WC': { left: '48%', top: '30%' },
  '5WC': { left: '40%', top: '26%' },
  '15WC': { left: '44%', top: '20%' },
  '67WC': { left: '50%', top: '44%' },
  '24WC': { left: '48%', top: '22%' },
  '31WC': { left: '54%', top: '34%' },
  '10WC': { left: '44%', top: '28%' },
  '22WC': { left: '48%', top: '34%' },
  '17WC': { left: '44%', top: '36%' },
  '78WC': { left: '48%', top: '36%' },
  '92WC': { left: '51%', top: '38%' },
  '93WC': { left: '53%', top: '39%' },
  '95WC': { left: '55%', top: '41%' },
  '178WC': { left: '49%', top: '37%' },
  '43WC': { left: '42.5%', top: '23%' },
  '89WC': { left: '47%', top: '35%' },
  '63WC': { left: '46%', top: '28.5%' },

  // EC (East Central)
  '5EC': { left: '78%', top: '18%' },
  '30EC': { left: '72%', top: '32%' },
  '35EC': { left: '76%', top: '26%' },
  '42EC': { left: '84%', top: '30%' },
  '53EC': { left: '80%', top: '36%' },
  '73EC': { left: '82%', top: '14%' },
  '74EC': { left: '88%', top: '22%' },
  '83EC': { left: '84%', top: '40%' },
  '98E': { left: '94%', top: '28%' },
  '27EC': { left: '68%', top: '20%' },
  '61EC': { left: '74%', top: '42%' },
  '91EC': { left: '90%', top: '38%' },
  '11EC': { left: '74%', top: '16%' },
  '21EC': { left: '86%', top: '24%' },
  '39EC': { left: '70%', top: '38%' },
  '66EC': { left: '92%', top: '18%' },
  '82EC': { left: '86%', top: '44%' },
  '10EC': { left: '72%', top: '32%' },
  '08EC': { left: '68%', top: '24%' },
  '17EC': { left: '74%', top: '26%' },
  '63EC': { left: '58.5%', top: '36.5%' },
  '7EC': { left: '65%', top: '30%' },
  '41EC': { left: '76%', top: '28%' },
  '52EC': { left: '80%', top: '34%' },
  '15EC': { left: '70%', top: '18%' },
  '36EC': { left: '64%', top: '32%' },

  // SW (South West)
  '8SW': { left: '28%', top: '74%' },
  '22SW': { left: '34%', top: '84%' },
  '14SW': { left: '20%', top: '66%' },
  '52SW': { left: '24%', top: '80%' },
  '12SW': { left: '16%', top: '76%' },
  '79SW': { left: '38%', top: '72%' },
  '98SW': { left: '30%', top: '88%' },
  '54SW': { left: '28%', top: '82%' },
  '13SW': { left: '38.5%', top: '68%' },
  '2SW': { left: '31%', top: '55%' },
  '5SW': { left: '29.5%', top: '57%' },
  '43SW': { left: '22%', top: '64%' },
  '66SW': { left: '26%', top: '76%' },

  // SE (South East)
  '88SE': { left: '80%', top: '76%' },
  '14SE': { left: '65%', top: '78%' },
  '90SE': { left: '50.5%', top: '74%' },
  '66SE': { left: '62%', top: '80%' },
  '11SE': { left: '68%', top: '73%' },
  '166SE': { left: '64%', top: '82%' }
};

const caseFiles = [
  'src/data/sherlock-case-1.js',
  'src/data/sherlock-case-2.js',
  'src/data/sherlock-case-3.js',
  'src/data/sherlock-case-4.js',
  'src/data/sherlock-case-5.js',
  'src/data/sherlock-case-6.js'
];

for (const casePath of caseFiles) {
  if (!fs.existsSync(casePath)) continue;
  let content = fs.readFileSync(casePath, 'utf8');

  // Replace map_coords object for any node found in standardCoordsMap
  for (const [nodeId, pos] of Object.entries(standardCoordsMap)) {
    const regex = new RegExp('("' + nodeId + '":\\s*\\{[^}]*?"map_coords":\\s*)\\{[^}]*?\\}', 'g');
    content = content.replace(regex, '$1' + JSON.stringify(pos));
  }

  // Also replace any remaining { "x": number, "y": number } with calculated %
  content = content.replace(/"map_coords":\s*\{\s*"x":\s*(\d+),\s*"y":\s*(\d+)\s*\}/g, (match, xStr, yStr) => {
    const x = parseInt(xStr, 10);
    const y = parseInt(yStr, 10);
    const leftPct = ((x / 860) * 100).toFixed(1) + '%';
    const topPct = ((y / 570) * 100).toFixed(1) + '%';
    return `"map_coords": {"left":"${leftPct}","top":"${topPct}"}`;
  });

  fs.writeFileSync(casePath, content, 'utf8');
  console.log('Updated ' + casePath);
}
