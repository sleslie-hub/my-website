// convertMarkdown.mjs
import fs from 'fs-extra';
import path from 'path';
import { marked } from 'marked';

// Paths for markdown and output HTML
const markdownDir = path.join(process.cwd(), 'content'); // Folder where your markdown files are
const outputDir = path.join(process.cwd(), 'public'); // Folder where you want to save the HTML files

const convertMarkdownToHtml = async () => {
  try {
    // Read all markdown files from the content directory
    const markdownFiles = await fs.readdir(markdownDir);

    // Process each markdown file
    for (const file of markdownFiles) {
      const filePath = path.join(markdownDir, file);
      const fileContents = await fs.readFile(filePath, 'utf-8');
      const htmlContent = marked(fileContents); // Convert markdown to HTML

      // Determine the output HTML file path
      const outputFilePath = path.join(outputDir, file.replace('.md', '.html'));

      // Write the HTML to the public folder
      await fs.writeFile(outputFilePath, htmlContent, 'utf-8');
      console.log(`Converted ${file} to HTML successfully!`);
    }
  } catch (error) {
    console.error('Error converting markdown to HTML:', error);
  }
};

// Run the conversion
convertMarkdownToHtml();
