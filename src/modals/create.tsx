import { useState } from 'react';

interface ModalCreateProps {
  onClose: () => void;
}

export default function ModalCreate({ onClose }: ModalCreateProps) {
  const [formData, setFormData] = useState({ name: '', email: '', sexo: '', imagem: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Usuário criado:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white text-black p-6 rounded-lg w-96">
        <h2 className="text-3xl font-semibold mb-4">Cadastrar Usuário</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" placeholder="Nome" className="w-full border p-2 rounded" onChange={e => setFormData({ ...formData, name: e.target.value })} />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" onChange={e => setFormData({ ...formData, email: e.target.value })} />
          <select className="w-full border p-2 rounded" onChange={e => setFormData({ ...formData, sexo: e.target.value })}>
            <option value="">Selecione o Sexo</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Nao-Informar">Não quero informar</option>
          </select>
          <input type="text" placeholder="URL da Imagem" className="w-full border p-2 rounded" onChange={e => setFormData({ ...formData, imagem: e.target.value })} />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">Cancelar</button>
            <button type="submit" className="px-4 py-2 bg-blue-700 text-white rounded">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
