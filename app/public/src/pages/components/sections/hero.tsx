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
      body: JSON,stringify(formData: any),
    })
  }
  })
}
