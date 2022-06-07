import React, {useEffect} from "react";

function Cities() {
	useEffect(()=>{
		window.scrollTo(0, 0)
	})

  return (
		<div className="h-screen bg-sky-300 flex flex-col justify-center items-center">
		<p className="text-7xl font-bold">Cities coming soon</p>
	</div>
  );
}

export default Cities;