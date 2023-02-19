import React from 'react';

function DownloadResume() {

    const handleDownload = () => {
		const link = document.createElement('a');
		link.href = 'mergen-resume-2023.pdf';
        link.setAttribute('download', 'Mergen_Ganbaatar_Resume.pdf');
		document.body.appendChild(link);
		link.click();
		link.remove();
	}

    return (
        <button
            onClick={handleDownload}
            className="inline-block mt-8 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
        >
            Download CV
        </button>
    )
}

export default DownloadResume