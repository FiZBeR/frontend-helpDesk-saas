import React, { useState } from "react";
import { createComent } from "../services/comentarioServices";

export const FormComent = ({idTicket, onComentarioCreado }) => {

  
  const [esInterno, setEsInterno] = useState(false);
  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");

  const newComent = {
    ticket: idTicket,
    texto,
    esInterno,
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError("");
      if (!texto.trim()) return;

      const success = await createComent(idTicket, newComent);

      if (success) {
        console.log("Comentario Creado con exito");
        onComentarioCreado(newComent);
        setTexto("")
      }
    } catch (error) {
      console.error("Fallo al crear el comentario", error);
      setError(error);
      console.log(error);
    }
  };


  return (
    <div className="bg-[#161b30] border-t border-[#232948] p-6 z-20">
      <form
        className="max-w-4xl mx-auto flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-sm font-semibold text-white">New Comment</h3>
          <label className="inline-flex items-center cursor-pointer">
            <input
              className="sr-only peer"
              type="checkbox"
              value={esInterno}
              onChange={() => {setEsInterno(true)}}
            />
            <div className="relative w-9 h-5 bg-[#232948] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:inset-s-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-yellow-600"></div>
            <span className="ms-3 text-sm font-medium text-[#929bc9] peer-checked:text-yellow-500 transition-colors">
              Internal Note
            </span>
          </label>
        </div>
        <div className="relative">
          <textarea
            className="w-full bg-[#111422] border border-[#232948] rounded-xl p-4 text-sm text-white placeholder-[#5d6588] focus:ring-2 focus:ring-primary focus:border-transparent min-h-25 resize-none"
            placeholder="Type your reply or internal note here..."
            value={texto}
            onChange={(e) => {
              setTexto(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="flex justify-end pt-2">
          <button className="flex items-center justify-center h-10 px-6 rounded-lg bg-blue-600 hover:bg-cyan-500/90 text-white shadow-lg shadow-primary/20 transition-all text-sm font-bold gap-2 cursor-pointer">
            Post Comment
            <span className="material-symbols-outlined text-[18px]">send</span>
          </button>
        </div>
      </form>
    </div>
  );
};
