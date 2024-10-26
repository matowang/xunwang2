import fs from "fs";
import path from "path";
import sharp from "sharp";

// Function to optimize a JPEG image if it exceeds specified dimensions
async function optimizeJpegImage(
  filePath: string,
  maxDimension: number
): Promise<void> {
  const image = sharp(filePath);
  const metadata = await image.metadata();

  // Check if the image dimensions exceed the threshold
  if (
    (metadata.width && metadata.width > maxDimension) ||
    (metadata.height && metadata.height > maxDimension)
  ) {
    const resizeOptions = {
      fit: "inside" as const, // Ensure the image fits within the specified dimensions
      withoutEnlargement: true, // Do not enlarge the image if it's smaller than the target dimensions
    };

    // Generate a temporary file path
    const tempFilePath = filePath + ".tmp";

    // Resize and optimize the JPEG image
    await image
      .resize(maxDimension, maxDimension, resizeOptions)
      .jpeg({
        quality: 75, // Adjust the quality (0-100)
        progressive: true, // Enable progressive JPEG
        optimizeScans: true, // Further optimize progressive scans
        mozjpeg: true, // Use MozJPEG for better compression
      })
      .withMetadata() // Strip EXIF metadata
      .toFile(tempFilePath); // Write to temporary file

    // Replace the original file with the optimized file
    fs.renameSync(tempFilePath, filePath);

    console.log(`Optimized JPEG: ${filePath}`);
  } else {
    console.log(
      `No optimization needed for: ${filePath} (dimensions: ${metadata.width}x${metadata.height})`
    );
  }
}

// Function to process all JPEG images in a directory, including subdirectories
async function processJpegImages(
  dirPath: string,
  maxDimension: number
): Promise<void> {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);

    // Process directories recursively
    if (stats.isDirectory()) {
      await processJpegImages(filePath, maxDimension);
    } else if (stats.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if ([".jpg", ".jpeg"].includes(ext)) {
        await optimizeJpegImage(filePath, maxDimension);
      }
    }
  }
}

// Main function
async function main(): Promise<void> {
  const directoryPath = path.join(__dirname, "public/images/works"); // Change this to your images directory
  const maxDimension = 2000; // Set max pixel dimension
  await processJpegImages(directoryPath, maxDimension);
}

// Execute the main function
main().catch((err) => console.error(err));
