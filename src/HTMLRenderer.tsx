// HTMLRenderer.tsx
import React, { useEffect, useState } from 'react';

interface HTMLRendererProps {
  filePath: string;
}

const HTMLRenderer: React.FC<HTMLRendererProps> = ({ filePath }) => {
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    // Fetch the HTML content from the public folder
    fetch(filePath)
      .then((response) => response.text())
      .then((html) => setHtmlContent(html))
      .catch((error) => console.error('Error loading HTML:', error));
  }, [filePath]);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default HTMLRenderer;
