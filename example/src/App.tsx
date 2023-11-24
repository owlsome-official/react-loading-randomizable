import { useState } from "react";
import { OverlayLoading } from "react-loading-randomizable";
import GithubMarkLogo from "./assets/github-mark-white.svg";

const App = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      <a
        href="https://github.com/buildingwatsize"
        target="_blank"
        rel="noopener"
      >
        <div className="logo-container">
          <img src={GithubMarkLogo} alt="buildingwatsize" height={48} />
          <p>buildingwatsize</p>
        </div>
      </a>

      <OverlayLoading active={loading} />
      <button onClick={handleClick}>
        Click for show overlay loading for 3 seconds
      </button>
    </>
  );
};

export default App;
