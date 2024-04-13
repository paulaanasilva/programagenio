import React, { useState } from 'react';


interface CardProps {
    sideNav: React.ReactNode;
    exibeConteudoObjetoAprendizagem: React.ReactNode;
}

function SideNavConteudo(props: CardProps) {
    const [showSidenav, setShowSidenav] = useState(true);


    return (
        <>
            <div className="relative">
                <button
                    onClick={() => setShowSidenav(true)}
                    className="fixed top-20 left-1 bg-slate-100 text-black rounded-full p-4"
                    style={{ display: !showSidenav ? 'block' : 'none' }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                {showSidenav && (
                    <nav
                        className="fixed z-10 h-screen bg-slate-50 w-72 text-black"
                        style={{
                            transform: showSidenav ? 'translateX(0)' : '-translateX(72px)',
                            transition: 'transform 0.3s ease-in-out',
                            left: '0',
                        }}
                    >
                        <button onClick={() => setShowSidenav(false)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        {props.sideNav}
                    </nav>
                )}
                <div className={showSidenav ? 'ml-72' : ''}>
                    {props.exibeConteudoObjetoAprendizagem}
                </div>
            </div>
        </>
    )
};

export default SideNavConteudo;
