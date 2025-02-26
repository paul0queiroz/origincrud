export default function ContactForm() {
    return (
     <section className="bg-gradient-to-r from-indigo-400 to-blue-400 text-gray/50 text-title py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-blue-700 mb-4">Cadastro de contatos</h2>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nome */}
          <div>
            <label className="font-semibold text-blue-600">Nome completo</label>
            <input
              type="text"
              placeholder="Ex.: Letícia Pacheco dos Santos"
              className="w-full border-b-2 p-2 focus:outline-none"
            />
          </div>
  
          {/* Data de nascimento */}
          <div>
            <label className="font-title text-blue-600 font-semibold">Data de nascimento</label>
            <input
              type="date"
              className="w-full border-b-2 p-2 focus:outline-none"
            />
          </div>
  
          {/* E-mail */}
          <div>
            <label className="font-title text-blue-600 font-semibold">E-mail</label>
            <input
              type="email"
              placeholder="Ex.: leticia@gmail.com"
              className="w-full border-b-2 p-2 focus:outline-none text-black"
            />
          </div>
  
          {/* Profissão */}
          <div>
            <label className="font-title text-blue-600 font-semibold">Profissão</label>
            <input
              type="text"
              placeholder="Ex.: Desenvolvedora Web"
              className="w-full border-b-2 p-2 focus:outline-none text-black"
            />
          </div>
  
          {/* Telefone para contato */}
          <div>
            <label className="font-title text-blue-600 font-semibold">Telefone para contato</label>
            <input
              type="tel"
              placeholder="Ex.: (11) 4033-2019"
              className="w-full border-b-2 p-2 focus:outline-none"
            />
          </div>
  
          {/* Celular para contato */}
          <div>
            <label className="font-title text-blue-600 font-semibold">Celular para contato</label>
            <input
              type="tel"
              placeholder="Ex.: (11) 98493-2039"
              className="w-full border-b-2 p-2 focus:outline-none"
            />
          </div>
  
          {/* Checkboxes */}
          <div className="col-span-2 flex flex-wrap gap-4 mt-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 text-blue-600" />
              <span>Número de celular possui Whatsapp</span>
            </label>
  
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 text-blue-600" />
              <span>Enviar notificações por SMS</span>
            </label>
  
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 text-blue-600" />
              <span>Enviar notificações por E-mail</span>
            </label>
          </div>
  
          {/* Botão de envio */}
          <div className="col-span-2 text-right mt-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700">
              Cadastrar contato
            </button>
          </div>
        </form>
      </div>
     </section>
        );
    }