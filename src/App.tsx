import { useState } from "react";
import ModalCreate from "./modals/create";
import ModalEdit from "./modals/edit";
import ModalDelete from "./modals/delete";
import logo from "../src/assets/logoM.png";

const users = [
  { id: 1, name: "Batata", email: "", sexo: "Masculino", imagem: "https://i.pinimg.com/236x/de/e1/5c/dee15c4c3754e4c53e67690a153a67dc.jpg" },
  { id: 2, name: "Tomate", email: "", sexo: "Feminino", imagem: "https://i.pinimg.com/236x/de/e1/5c/dee15c4c3754e4c53e67690a153a67dc.jpg" },
];

export default function Index() {
  const [modalCreate, setModalCreate] = useState(false);
  const [modalEdit, setModalEdit] = useState<{ open: boolean; user: any }>({ open: false, user: null });
  const [modalDelete, setModalDelete] = useState<{ open: boolean; userId: number | null }>({ open: false, userId: null });

  return (
    <>
      <header className="mx-auto bg-white/80 py-4 shadow md:rounded-3xl lg:max-w-screen-lg m-8 mb-24">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <img className="h-12 w-auto" src={logo} alt="Logo" />
            <span>
              <p className='text-black font-semibold'><u>CRUD</u> - Sistema de Gestão de Usuários</p>
              <p className='text-xs text-sky-900 text-center'>React + Vite, Tailwind CSS, Node.js</p>
            </span>

            <button className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-500" onClick={() => setModalCreate(true)}>+ Cadastrar</button>
          </div>
        </div>
      </header>
      <main>
        <section id='users' className="flex flex-wrap justify-center gap-12">
          {users.map((user) => (
            <div key={user.id} className="w-60 h-72 bg-white relative rounded-lg m-2">
              <div className="absolute -top-12 flex justify-center w-full">
                <img className="h-48 w-48 border-4 border-white rounded-full" src={user.imagem} alt={user.name} />
              </div>
              <div className="pt-40 px-4">
                <h2 className="text-lg font-semibold text-black">{user.name}</h2>
                <p className="text-sm text-gray-600">Email: {user.email}</p>
                <p className="text-sm text-gray-600">Sexo: {user.sexo}</p>
              </div>
              <div className="absolute bottom-4 flex gap-2 justify-end w-full px-4">
                <button onClick={() => setModalEdit({ open: true, user })}>✏️</button>
                <button onClick={() => setModalDelete({ open: true, userId: user.id })}>🗑️</button>
              </div>
            </div>
          ))}
        </section>
      </main>

      {modalCreate && <ModalCreate onClose={() => setModalCreate(false)} />}
      {modalEdit.open && <ModalEdit user={modalEdit.user} onClose={() => setModalEdit({ open: false, user: null })} />}
      {modalDelete.open && <ModalDelete userId={modalDelete.userId!} onClose={() => setModalDelete({ open: false, userId: null })} />}
    </>
  );
}