import logo from "./logo.svg";
import "./App.css";
import { QRCodeSVG } from "qrcode.react";

function App() {
  const modelUrl = "https://kritiarorabiz4.github.io/AR-2/";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return (
    <div className="App">
      <header className="App-header">
        <model-viewer
          alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
          src="https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb"
          ar
          environment-image="https://modelviewer.dev/shared-assets/environments/moon_1k.hdr"
          poster="https://modelviewer.dev/shared-assets/models/NeilArmstrong.webp"
          shadow-intensity="1"
          camera-controls
          touch-action="pan-y"
        ></model-viewer>
        {isMobile?<></>:<QRCodeSVG value={modelUrl} size={256} level="H" /> }
      </header>
    </div>
  );
}

export default App;
