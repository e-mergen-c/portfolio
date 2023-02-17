import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
				Aspiring computer science student with a passion for programming and technology, and a keen eye for design. 
				Skilled in JavaScript, Python, and C++ with a solid understanding of data structures and algorithms. 
				Seeking opportunities to enhance my technical and design skills and gain practical experience in the field. 
				Dedicated to staying informed of industry advancements and eager to participate in innovative projects. 
				Let's connect and grow together!
				</p>
				<a
					href="mailto:mergen.ganbaatar@gmail.com"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					mergen.ganbaatar@gmail.com
				</a>
			</div>

			<img
				src={myImg}
				alt="Mergen"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
