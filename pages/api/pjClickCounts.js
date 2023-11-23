// let clickCounts = {};

// export default function handler(req, res) {
//   if (req.method === "GET") {
//     res.status(200).json(clickCounts);
//   } else if (req.method === "POST") {
//     const { buttonName } = req.query;
//     if (clickCounts.hasOwnProperty(buttonName)) {
//       clickCounts[buttonName]++;
//       res.status(200).json({ message: "Click count updated successfully" });
//     } else {
//       clickCounts[buttonName] = 1; // Add the buttonName to clickCounts
//       res.status(200).json({ message: "Click count updated successfully" });
//     }
//   } else {
//     res.status(405).json({ error: "Method Not Allowed" });
//   }
// }













import fs from 'fs';
import path from 'path';

const clickCountsFilePath = path.join(process.cwd(), 'pjdata/clickCounts.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Read the clickCounts data from the JSON file
    const clickCountsData = fs.readFileSync(clickCountsFilePath, 'utf-8');
    const clickCounts = JSON.parse(clickCountsData);
    res.status(200).json(clickCounts);
  } else if (req.method === 'POST') {
    const { buttonName } = req.query;

    // Read the clickCounts data from the JSON file
    const clickCountsData = fs.readFileSync(clickCountsFilePath, 'utf-8');
    const clickCounts = JSON.parse(clickCountsData);

    if (clickCounts.hasOwnProperty(buttonName)) {
      clickCounts[buttonName]++;
    } else {
      clickCounts[buttonName] = 1;
    }

    // Write the updated clickCounts data to the JSON file
    fs.writeFileSync(clickCountsFilePath, JSON.stringify(clickCounts, null, 2), 'utf-8');

    res.status(200).json({ message: 'Click count updated successfully' });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
