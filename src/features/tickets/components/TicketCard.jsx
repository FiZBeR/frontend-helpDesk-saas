import React from "react";
import { Link } from "react-router-dom";

export const TicketCard = ({ticket}) => {

  const priorityStyles = {
    critica: "border-red-500 text-red-500",
    alta: "border-yellow-500 text-yellow-500",
    media: "border-blue-500 text-blue-500",
    baja: "border-gray-500 text-gray-500",
  };

  const prioritySymbols = {
    critica : {
        text: "text-red-400",
        icon: "error"
    },
    alta: {
        text: "text-yellow-500",
        icon: "warning"
    },
    media: {
        text: "text-blue-500",
        icon: "info"
    },
    baja: {
        text: "text-gray-500",
        icon: "info"
    },
  };

  return (
    <div className={`ticket-card bg-[#111422] border-l-4 ${priorityStyles[ticket.prioridad]} border-y border-r border-[#232948] rounded-r-xl rounded-l-sm p-5 flex flex-col gap-4 relative group`}>
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <span className={`${prioritySymbols[ticket.prioridad].text} text-xs font-bold uppercase tracking-wider flex items-center gap-1`}>
            <span className="material-symbols-outlined text-sm">{prioritySymbols[ticket.prioridad].icon}</span>
            {ticket.prioridad}
          </span>
          <h3 className="text-white text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
            {ticket.titulo}
          </h3>
        </div>
        <button className="text-[#58608a] hover:text-white transition-colors">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>
      <div className="flex items-center gap-2 text-[#929bc9] text-sm bg-[#1a1d2d] px-3 py-2 rounded-lg border border-[#232948]">
        <span className="material-symbols-outlined text-lg">
          desktop_windows
        </span>
        {ticket.equipo.numero_serie}
      </div>
      <p className="text-[#929bc9] text-sm line-clamp-2">{ticket.descripcion}</p>
      <div className="mt-auto pt-4 border-t border-[#232948] flex items-center justify-between">
        <Link to={`/ticket/detalle/${ticket.id}`} className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-lg shadow-blue-600/20 whitespace-nowrap" >
        <span className="material-symbols-outlined text-lg">
          details
          
        </span>
          <span className="text-xs text-white font-semibold">Detalle</span>
        </Link>
        <span className="text-xs text-[#58608a]">
          Hace {ticket.dias_abiertos} dias.
        </span>
      </div>
    </div>
  );
};
