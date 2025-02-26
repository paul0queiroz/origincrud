import Image from "next/image";
import Logo from "/Users/queir/origincrud/app/public/assets/logo_alphacode.png";

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-indigo-400 to-blue-400 text-gray/50 text-title py-20 px-6 text-center">
            <Image alt="Logo Alphacode" src={Logo} width={100} height={100} className="mx-auto" />
            <h1 className="text-2xl font-bold">Cadastro de contatos</h1>
        </header>
    );
}