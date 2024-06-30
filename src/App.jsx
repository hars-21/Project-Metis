import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import GradientCard from "./components/card";
import AILibrary from "./components/tools";
import Footer from "./components/footer";

function App() {
	return (
		<div className="h-screen">
			<Navbar />
			<HeroSection />
			<AILibrary />
			<Footer />
		</div>
	);
}

export default App;
