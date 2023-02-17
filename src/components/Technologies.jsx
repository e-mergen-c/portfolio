import React from 'react';
import technologies from '../data/technologies';
import SectionTitle from './SectionTitle';
import TechnologyItem from './TechnologyItem';

function Technologies() {
	return (
		<div className="py-12">
			<SectionTitle>Technologies</SectionTitle>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{technologies.map(service => (
					<TechnologyItem
						key={service.title}
						title={service.title}
						icon={service.icon}
						description={service.description}
					/>
				))}
			</div>
		</div>
	);
}

export default Technologies;
