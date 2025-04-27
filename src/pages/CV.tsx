import { useEffect, useState } from 'react';

const CV = () => {
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    // Fetch the HTML file from the public folder
    fetch('/CV.html')
      .then((response) => response.text())
      .then((data) => setHtmlContent(data))
      .catch((err) => console.error('Error loading CV.html:', err));
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }} // Render the loaded HTML
    />
  );
};

export default CV;
