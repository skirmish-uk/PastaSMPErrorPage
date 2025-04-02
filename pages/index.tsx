import { useEffect, useState } from 'react';

const DirtBlockPage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  // Trigger fade-in effect after component mounts
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="container">
      <div className="logo">
      		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="logo-img">
      			<rect x="10" y="10" width="80" height="80" fill="#3498db" />
      			<rect x="30" y="30" width="20" height="20" fill="#2ecc71" />
      			<rect x="50" y="50" width="20" height="20" fill="#2ecc71" />
      			<rect x="70" y="30" width="10" height="10" fill="white" />
      			<rect x="30" y="70" width="10" height="10" fill="white" />
      			<rect x="50" y="10" width="10" height="10" fill="white" />
      		</svg>
      </div>
      <h1 className="server-name">We'll Be Right Back</h1>
      <p className="tagline">The server is under maintenance. Please check back soon!</p>
    </div>
  );
};

export default DirtBlockPage;
