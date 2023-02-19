import React from 'react';
import DownloadResume from './DownloadResume';

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
				<DownloadResume />
			</div>
		</div>
	);
}

export default HeroSection;
