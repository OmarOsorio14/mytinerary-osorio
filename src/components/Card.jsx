import React from "react";
import {Link as LinkRouter} from "react-router-dom";

function Card({key, city, country,image}) {
  return (
		<LinkRouter to={"/detail/"+city}>
			<div key={key} className="max-h-50 rounded-lg border shadow-md bg-orange-300 border-orange-700 m-2 hover:animate-pulse">
						<img className="rounded-t-lg" src={image} alt="" />
				<div className="md:p-2 p-0">
					<h5 className="mb-2 text-base md:text-2xl font-bold tracking-tight text-center text-white">{city}</h5> 
					<p className="mb-3 font-normal text-black text-center">{country}</p>
				</div>
			</div>
		</LinkRouter>

  );
}

export default Card;