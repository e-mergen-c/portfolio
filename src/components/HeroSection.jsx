import React from 'react';

function HeroSection() {
	return (
		<div id="hero" className="flex items-center justify-center flex-col py-20">
			<div className="text-center">
				<h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
					Hi, I'm Mergen Ganbaatar
				</h1>
				<p className="text-md md:text-xl max-w-md mb-8 text-gray-600 dark:text-gray-300">
					Computer Science student at St Cloud State University{' '}
				</p>
				<a
					href="#works"
					className="inline-block mt-8 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
				>
					Download CV
				</a>
			</div>
		</div>
	);
}

export default HeroSection;
