import React from "react";

function Card({key, city, country,image}) {
  return (
		<a href="/">
			<div key={key} className="max-h-50 rounded-lg border shadow-md bg-gray-800 border-gray-700 m-2 hover:animate-pulse">
						<img className="rounded-t-lg" src={image} alt="" />
				<div className="p-2">
					<h5 className="mb-2 text-base md:text-2xl font-bold tracking-tight text-white">{city}</h5> 
					<p className="mb-3 font-normal text-gray-400">{country}</p>
				</div>
			</div>
		</a>

  );
}

export default Card;