import React from "react";

function Card({key, city, country,image}) {
  return (
		<a href="/">
			<div key={key} className="max-h-50 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2 hover:animate-pulse">
						<img className="rounded-t-lg" src={image} alt="" />
				<div className="p-2">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{city}</h5> 
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{country}</p>
				</div>
			</div>
		</a>

  );
}

export default Card;