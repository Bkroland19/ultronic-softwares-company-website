import React from "react";

function Banner() {
	return (
		<div className="relative h-[300px] sm:h-[400px] lg:h-[500px ] xl:h-[600px] 2xl:h-[700px]">
			<img
				src="https://links.papareact.com/0fm"
				layout="fill"
				objectFit="cover"
			/>

			<div className="absolute text-center top-1/2 w-full">
				<p className="text-sm sm:text-lg"> Not Sure Where to go? Perfect</p>
				<button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-lg font-bold my-3 hover:shadow-2xl active:scale-90 transition duration-100">
					I'm flexible
				</button>
			</div>
		</div>
	);
}

export default Banner;
