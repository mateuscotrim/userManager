import { useState } from 'react';

interface ModalEditProps {
  user: { id: number; name: string; email: string; sexo: string; imagem: string };
  onClose: () => void;
}

export default function ModalEdit({ user, onClose }: ModalEditProps) {
  const [formData, setFormData] = useState(user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Usuário editado:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white text-black p-6 rounded-lg w-96">
        <h2 className="text-3xl font-semibold mb-4">Editar Usuário</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full border p-2 rounded" />
          <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full border p-2 rounded" />
          <select className="w-full border p-2 rounded" value={formData.sexo} onChange={e => setFormData({ ...formData, sexo: e.target.value })}>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>
          <input type="text" value={formData.imagem} onChange={e => setFormData({ ...formData, imagem: e.target.value })} className="w-full border p-2 rounded" />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">Cancelar</button>
            <button type="submit" className="px-4 py-2 bg-blue-700 text-white rounded">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
