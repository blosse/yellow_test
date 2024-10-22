import { useState } from "react";
import "./App.css";
import "./components/SiteTree";
import SiteTree from "./components/SiteTree";
import "./components/generateData";
import { generateData, Site } from "./components/generateData";

function App() {
  const [region, setRegion] = useState<Site[]>(generateData(3, 2, 5));
  const [regionName, setRegionName] = useState<string>("Hey");
  const names: string[] = ["Hey", "Ho", "Let's go"];

  const updateRegion = () => {
    setRegion(
      generateData(
        Math.floor(Math.random() * 5 + 1),
        Math.floor(Math.random() * 5 + 1),
        Math.floor(Math.random() * 10 + 1),
      ),
    );
    setRegionName(names[Math.floor(Math.random() * 3)]);
  };

  return (
    <>
      <h2>{`Region ${regionName}`}</h2>
      <SiteTree sites={region} />
      <button onClick={() => updateRegion()}>Update region</button>
    </>
  );
}

export default App;
