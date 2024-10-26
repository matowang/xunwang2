import fs from "fs";
import path from "path";

// Define the structure for a Work
interface Work {
  name: string;
  medium: string;
  size: string;
  description1: string;
}

// JSON data you provided, assumed to be assigned to a variable 'worksData'
const worksData: Record<string, Work> = {
  hover: {
    name: "Hover",
    medium: "Bronze, Iron Base",
    size: "L24.5 x D54 x H111 cm",
    description1:
      "Hover captures the fleeting moment when one is poised between movement and stillness, exploring themes of suspension and anticipation.",
  },
  "blossom-elegance-1": {
    name: "Blossom Elegance 1",
    medium: "Bronze, Iron Base",
    size: "L18.5 x D13.5 x H92 cm",
    description1:
      "This piece represents the beauty and grace of transformation in a woman's life, capturing delicate and elegant changes.",
  },
  "blossom-elegance-2": {
    name: "Blossom Elegance 2",
    medium: "Bronze, Iron Base",
    size: "L18.5 x D13.5 x H92 cm",
    description1:
      "Continuing the theme of transformation, 'Blossom Elegance 2' deepens the exploration of delicate changes in a woman's life.",
  },
  "blossom-elegance-3": {
    name: "Blossom Elegance 3",
    medium: "Bronze, Iron Base",
    size: "L14 x D14 x H86 cm",
    description1:
      "The final piece in the series captures the culmination of a journey, reflecting a woman's refined grace and inner strength.",
  },
  enlightenment: {
    name: "Enlightenment",
    medium: "Bronze, Iron Base",
    size: "L65 x D80 x H110 cm",
    description1:
      "Enlightenment is a representation of the search for higher understanding and self-realization.",
  },
  soaring: {
    name: "Soaring",
    medium: "Bronze, Iron Base",
    size: "L37 x D40 x H81.5 cm",
    description1:
      "This sculpture depicts the feeling of freedom and aspiration, symbolizing a leap towards new heights.",
  },
  bashful: {
    name: "Bashful",
    medium: "Bronze, Iron Base",
    size: "L22.5 x D20.5 x H49.5 cm",
    description1:
      "Bashful explores the themes of shyness and inner beauty, depicting a moment of gentle introspection.",
  },
  listening: {
    name: "Listening",
    medium: "Bronze, Iron Base",
    size: "L38 x D40 x H82 cm",
    description1:
      "Listening portrays the importance of attentiveness and open-hearted communication.",
  },
  hunting: {
    name: "Hunting",
    medium: "Bronze, Iron Base",
    size: "L76 x D50 x H66.5 cm",
    description1:
      "Hunting illustrates the primal drive and focus of a pursuit, capturing the intensity of the hunt.",
  },
  "reach-2": {
    name: "Reach 2",
    medium: "Bronze, Iron Base",
    size: "L68 x D29 x H76 cm",
    description1:
      "The continuation of the theme of reaching, this piece depicts a renewed attempt to connect and achieve.",
  },
  melting: {
    name: "Melting",
    medium: "Bronze, Iron Base",
    size: "L25 x D51 x H41 cm",
    description1:
      "Melting represents the process of gradual change and the dissolution of barriers, both internal and external.",
  },
};
// Function to create individual JSON files
const createJsonFiles = (locale: string, data: Record<string, Work>): void => {
  const directoryPath = path.join(__dirname, locale);

  // Ensure directory exists
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  // Loop through each entry in the data
  Object.keys(data).forEach((key) => {
    const filePath = path.join(
      directoryPath,
      `work${key
        .split("-")
        .map((str) => str[0]?.toUpperCase() + str.slice(1))
        .join("")}.json`
    );
    const jsonData = JSON.stringify(data[key], null, 2);
    fs.writeFileSync(filePath, jsonData, "utf8");
    console.log(`Generated ${filePath}`);
  });
};

// Generate files for Chinese locale
createJsonFiles("public/locales/en", worksData);

// If needed, you can also call the function to create files for English with another dataset
// Example for English (you would have a separate English dataset):
// createJsonFiles('locales/en', englishWorksData);
