import Image from 'next/image';

const currentYear = new Date().getFullYear();

function Footer() {
    return (
        <>
            <div className="justify-center">
                <div className="grid grid-cols-1 divide-y-2">
                    <div></div>
                    <div className="m-4"></div>
                </div>
                <div className="flex justify-center">
                    <Image className="" src="/logoprincipal.jpeg" alt="Footer Image" width={50} height={30} />
                </div>
                <div className="text-center text-gray-500 text-sm m-4">
                    ©2024 Programa Genio | Todos os direitos reservados
                </div>
            </div>
        </>
    )
}

export default Footer;
