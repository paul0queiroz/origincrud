import { useState } from "react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    criado_em: new Date().toISOString().slice(0, 19).replace("T", ' '),
    profissao:"",
    telefone_contato:"",	
    telefone_celular:"",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("http://localhost/backend/cadastrar.php", {
      method: "POST",
      headers: {
       "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    alert(data.message);
  };
  return(
    <section className="bg-gradient-to-r from-indigo-400 to-blue-400 text-gray/50 text-title py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-title font-bold mb-4 bg-[linear-gradient(90deg, #f2f2f2,#e8e1ea,#aac2ee)] ">Cadastro de Contatos</h1>
        <p className="font-title">Gerenciar seus contatos nunca foi tão rápido e prático!</p>
      </div>    
    </section>
  )
}