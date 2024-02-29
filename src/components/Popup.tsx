import React from "react";

function Popup({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            Fechar
          </button>
        </div>
        <div className="mt-2">
          <p className="text-2xl font-bold">Cadastro concluído!</p>
          <p className="text-gray-700 mt-2">Seu cadastro foi realizado com sucesso.</p>
        </div>
      </div>
    </div>
    )
}

export default Popup;