import React from "react";
import ContinentTag from "./ContinentTag";
//import {Link as LinkRouter} from "react-router-dom";

export default function Card({city, country,image,continent,description}) {
  return (
				<div className="text-indigo-200 body-font p-2 bg-gray-900 mx-6 my-6">
					<div className="mx-auto flex px-5  md:flex-row flex-col-reverse items-center">
						<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
							<figure className="visible">
									<div className="pt-10 px-2 sm:px-6">
										<ContinentTag continent={continent}/>
										<p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">{city}</p>
										<p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">{country}</p>
										<p className="text-indigo-200 text-base pb-6">{description}</p>
										<div className="flex flex-wrap items-center">
											<div className="flex">
													<img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="h-12 w-12 object-cover overflow-hidden rounded-full border-4 z-20" />
													<img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="h-12 w-12 object-cover overflow-hidden rounded-full border-4 z-10 -translate-x-4" />
													<img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="h-12 w-12 object-cover overflow-hidden rounded-full border-4 -translate-x-8" />
												</div>
												<p className="text-indigo-200 font-bold text-left">
												we have itineraries by jane doe and 5 others users
												</p>
										</div>
									</div>
							</figure>
						</div>
						<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block">
							<img className="object-cover object-center rounded" alt={city} src={image} />
						</div>
					</div>
      </div>
  );
}