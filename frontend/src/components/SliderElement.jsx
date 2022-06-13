import React from "react";
import {Link as LinkRouter} from "react-router-dom";

function SliderElement({key, city, country,image}) {
  return (
		<div  className="flex justify-center items-center" key={key}>
			<LinkRouter to={"/detail/"+city}>
				<div className="max-w-sm xl:max-w-md 2xl:max-w-5xl rounded-lg shadow-md m-1 hover:animate-pulse relative ">
							<img className="rounded-t-lg w-full" src={image} alt="" />
					<div className="md:p-2 p-0 absolute bottom-0 left-0 bg-purple-800/30 w-full max-h-full rounded">
						<h5 className="mb-0.5 md:mb-1 text-xs md:text-2xl font-bold tracking-tight text-center text-white">{city}</h5> 
						<p className="mb-0.5 md:mb-1 text-xs md:text-lg text-white text-center">{country}</p>
					</div>
				</div>
			</LinkRouter>
		</div>

  );
}

export default SliderElement;