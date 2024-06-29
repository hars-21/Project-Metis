import React from "react";

function GradientCard({ title, description }) {
	return (
		<div
			className={`rounded-lg p-4 relative overflow-hidden shadow-md bg-gradient-to-r from-blue-600 to-indigo-600 w-80 h-48 m-4
             `}
		>
			<h3 className="text-2xl font-semibold text-white">{title}</h3>
			<p className="mt-2 text-gray-200">{description}</p>
		</div>
	);
}

export default GradientCard;
