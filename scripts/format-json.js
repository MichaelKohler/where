const fs = require('fs');

const jsonFile = '_data/raw.json';

try {
  const rawData = fs.readFileSync(jsonFile, 'utf8');
  const jsonData = JSON.parse(rawData);
  
  const formattedJson = JSON.stringify(jsonData, null, 2);
  
  fs.writeFileSync(jsonFile, formattedJson + '\n');
  
  console.log('JSON file formatted successfully');
} catch (error) {
  console.error('Error formatting JSON:', error);
  process.exit(1);
}
