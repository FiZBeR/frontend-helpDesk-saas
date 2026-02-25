import React from "react";

export const HeaderComent = ({ data }) => {
  return (
    <div className="sticky top-0 z-10 bg-[#101322]/95 backdrop-blur-md border-b border-[#232948] px-8 py-5 flex flex-wrap justify-between items-center gap-4 shadow-lg shadow-black/20">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#929bc9]">
            confirmation_number
          </span>
          <h1 className="text-white text-3xl font-bold tracking-tight">
            {data.equipo.numero_serie}
          </h1>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/40 text-blue-200 border border-blue-700/50">
            {data.estado}
          </span>
        </div>
        <div className="flex items-center gap-4 text-[#929bc9] text-sm mt-1">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">
              schedule
            </span>
            {data.dias_abierto} Dias Abierto
          </span>
          <span className="w-1 h-1 rounded-full bg-[#323b67]"></span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">
              computer
            </span>
            Hardware Issue - {data.equipo.tipo}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="hidden sm:flex items-center justify-center h-10 px-4 rounded-lg border border-[#323b67] text-[#929bc9] hover:text-white hover:bg-[#232948] hover:border-[#464f7a] transition-all text-sm font-medium gap-2">
          <span className="material-symbols-outlined text-[18px]">share</span>
          Share
        </button>
        <button className="flex items-center justify-center h-10 px-6 rounded-lg bg-green-500 hover:bg-green-500/90 text-white shadow-lg shadow-primary/20 transition-all text-sm font-bold gap-2 cursor-pointer">
          <span className="material-symbols-outlined text-[18px]">
            check_circle
          </span>
          Resolver Ticket
        </button>
      </div>
    </div>
  );
};
