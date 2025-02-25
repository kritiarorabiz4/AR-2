import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css";
import { QRCodeSVG } from "qrcode.react";

const categories = [
  { name: "Shoes", id: "shoes" },
  { name: "Furniture", id: "furniture" },
  { name: "Electronics", id: "electronics" },
];

const products = {
  shoes: [
    { name: "Nike Shoe", model: "https://ar-demo-nine.vercel.app/assets/nike.glb" },
    { name: "Nike Box", model: "https://ar-demo-nine.vercel.app/assets/nikeBox.glb" },
  ],
  furniture: [
    { name: "Lamp", model: "model/lamp.glb" },
    { name: "Chair", model: "model/chair.glb" },
  ],
  electronics: [
    { name: "Chair", model: "model/chair.glb" },
    { name: "Speaker", model: "model/chimney.glb" },
    { name: "Astronaut", model: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb" },
  ],
};

function Home() {
  return (
    <div className="App">
      <h1>Categories</h1>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link to={`/category/${cat.id}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Category() {
  let { categoryId } = useParams();
  return (
    <div className="App">
      <h1>{categoryId.toUpperCase()}</h1>
      <ul>
        {products[categoryId]?.map((product, index) => (
          <li key={index}>
            <Link to={`/product/${categoryId}/${index}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Product() {
  let { categoryId, productId } = useParams();
  let product = products[categoryId]?.[productId];
  const modelUrl = "https://kritiarorabiz4.github.io/AR-2/";
  // const modelUrl = "https://192.168.69.90:3000";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return (
    <div className="App">
      <h1>{product.name}</h1>
      <div className='Model'>
      <model-viewer src={product.model} ar ar-scale="fixed" camera-controls touch-action="pan-y" ></model-viewer>
      {isMobile?<></>:<QRCodeSVG value={modelUrl} size={50} level="H" style={{alignSelf:'right'}} /> }
      </div>
      <Link to={`/category/${categoryId}`}>Back to {categoryId.toUpperCase()}</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/product/:categoryId/:productId" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
