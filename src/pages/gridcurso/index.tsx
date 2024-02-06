import React, { useState } from 'react';

function pageTeste() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800">
                <aside className="sidebar min-w-custom -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
                    <div className="my-4 w-full border-b-4 border-indigo-100">
                        <span className="font-mono text-xl font-bold tracking-widest">
                            <span className="text-indigo-600">HELLO</span> DEV
                        </span>
                        <label className="flex items-center mt-4">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                className="form-checkbox h-5 w-5 text-indigo-600"
                            />
                            <span className="ml-2 text-gray-700">I agree to the terms and conditions</span>
                        </label>
                    </div>
                    <div className="my-4"></div>
                </aside>
                <main className="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
                    <div className="flex h-full items-center justify-center bg-white text-center text-5xl font-bold shadow-md">
                        <p>
                            Abstract. The technology sector in Brazil faces a deficit of professionals despite strong job growth, partly due to high dropout rates in initial programming courses. This high dropout rate is primarily attributed to the difficulties encountered in logic and programming disciplines. To address this challenge, the widely used Portugol Studio platform incorporates an adaptive learning environment to enhance engagement. This study focuses on the recommendation system within the new web based Portugol Studio integrated with a Learning Management System. The system utilizes learning paths to cluster students and provide personalized content recommendations based on peer progress. Latent Dirichlet Allocation (LDA) is employed for student grouping. A simulation demonstrates the approach's effectiveness in aligning recommendations to student interests. By facilitating tailored programming education, this initiative can help increase retention and address the technology talent shortage in Brazil.
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}

export default pageTeste;
