interface ModalDeleteProps {
  userId: number;
  onClose: () => void;
}

export default function ModalDelete({ userId, onClose }: ModalDeleteProps) {
  const handleDelete = () => {
    console.log("Usuário excluído com ID:", userId);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg w-96 text-center">
        <h2 className="text-xl font-semibold text-red-700">Confirmar Exclusão</h2>
        <p className="text-black">Tem certeza que deseja excluir este usuário?</p>
        <div className="flex justify-center gap-2 mt-8">
          <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">Cancelar</button>
          <button onClick={handleDelete} className="px-4 py-2 bg-red-700 text-white rounded">Excluir</button>
        </div>
      </div>
    </div>
  );
}
