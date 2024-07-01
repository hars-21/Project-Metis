import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import AILibrary from "./components/tools";
import AIUseCases from "./components/usecase";
import Footer from "./components/footer";

function App() {
	return (
		<div className="h-screen">
			<Navbar />
			<HeroSection />
			<AILibrary />
			<AIUseCases />
			<Footer />
		</div>
	);
}

export default App;
