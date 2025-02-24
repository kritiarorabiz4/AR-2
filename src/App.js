import logo from "./logo.svg";
import "./App.css";
import { QRCodeSVG } from "qrcode.react";

function App() {
  const modelUrl = "https://kritiarorabiz4.github.io/AR-2/";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const src=['https://ar-demo-nine.vercel.app/assets/nike.glb','https://ar-demo-nine.vercel.app/assets/nikeBox.glb',
    'model/lamp.glb','model/chimney.glb','model/chair.glb',
  'model/10354623_PS01_S01_NV01_RQP3_3.0_023611b2f7464c49a9c13443111d2404.glb',
  'https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb']
  return (
    <div className="App">
      <header className="App-header">
        {src.map((i)=>(
          <model-viewer
          className="Model"
          // alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
          src={i}
          ar
          ar-scale="fixed"
          // disable-zoom
          // disable-tap
          // environment-image="https://modelviewer.dev/shared-assets/environments/moon_1k.hdr"
          // poster="https://modelviewer.dev/shared-assets/models/NeilArmstrong.webp"
          shadow-intensity="1"
          camera-controls
          touch-action="pan-y"
        ></model-viewer>
        ))}
      </header>
        {isMobile?<></>:<QRCodeSVG value={modelUrl} size={100} level="H" /> }
    </div>
  );
}

export default App;
