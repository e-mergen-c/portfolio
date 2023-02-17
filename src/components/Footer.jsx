import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
	return (
		<div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
			<p className="block text-xl md:text-2xl font-semibold">
				Let's connect and grow together!
			</p>
			<div className='flex justify-center my-2'>
				<a href="https://github.com/e-mergen-c?tab=repositories"><FaGithub size={30}/></a>
				<a className='mx-3' href="https://www.linkedin.com/in/e-mergen-c/"><FaLinkedin size={30}/></a>
			</div>
			<p className="text-xs mt-2 text-gray-500">
				© Mergen Ganbaatar {new Date().getFullYear()}.
			</p>
		</div>
	);
}

export default Footer;
