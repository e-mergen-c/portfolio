import React from 'react';
import { MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export default [
	{
		title: 'Coding Languages',
		icon: <VscCode className="w-full h-full" />,
		description: 'JavaScript, Python, C++',
	},
	{
		title: 'Frameworks',
		icon: <FaHandHoldingHeart className="w-full h-full" />,
		description: 'Node.js, Express.js, React.js, RESTful API, jQuery, MongoDB, Mongoose, Tailwind CSS',
	},
	{
		title: 'Tools',
		icon: <MdWeb className="w-full h-full" />,
		description:
			'Jira, Git, npm, Figma, Adobe Creative Suite, MS Office Suite',
	},
];
