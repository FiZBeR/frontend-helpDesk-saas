import React from 'react'

export const MetaDataComent = ({data}) => {

  const prioritySymbols = {
    critica : {
        text: "text-red-400",
        icon: "priority_high"
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

  const estadosEquipo = {
    operativo : {
      text: "text-green-400",
      border: "border-green-800/50"
    },
    en_reparacion: {
      text: "text-amber-500",
      border: "border-amber-800/50"
    },
    dado_de_baja: {
      text: "text-red-500",
      border: "border-red-800/50"
    }
  }

  return (
    <>
        {/*  Assignee Card */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold text-[#929bc9] uppercase tracking-wider">
            Assignee
          </h3>
          <div
            className="flex items-center gap-3 p-3 rounded-lg border border-[#232948] bg-[#161b30]"
          >
            <div
              className="h-10 w-10 pl-[10px] pt-[5px] rounded-full bg-cover bg-center"
              data-alt="Sarah Jenkins Avatar"
            >
                <span className="material-symbols-outlined text-[16px]"
                  >account_circle</span
                >
            </div>
            <div>
              <p className="text-sm font-semibold text-white">------</p>
              <p className="text-xs text-[#929bc9]">IT Support</p>
            </div>
          </div>
        </div>
        {/*  Priority & Dates */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold text-[#929bc9] uppercase tracking-wider">
            Details
          </h3>
          <div
            className="flex flex-col gap-2 p-4 rounded-lg border border-[#232948] bg-[#161b30]"
          >
            <div className="flex justify-between items-center py-1">
              <span className="text-sm text-[#929bc9]">Priority</span>
              <span
                className={`flex items-center gap-1 text-sm font-semibold ${prioritySymbols[data.prioridad].text}`}
              >
                <span className="material-symbols-outlined text-[16px]"
                  >{prioritySymbols[data.prioridad].icon}</span
                >
                {data.prioridad}
              </span>
            </div>
            <div className="h-px bg-[#232948] w-full my-1"></div>
            <div className="flex justify-between items-center py-1">
              <span className="text-sm text-[#929bc9]">Category</span>
              <span className="text-sm text-white">{data.equipo.tipo}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-sm text-[#929bc9]">Created</span>
              <span className="text-sm text-white">Oct 21, 2024</span>
            </div>
          </div>
        </div>
        {/*  Hardware Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold text-[#929bc9] uppercase tracking-wider">
            Linked Hardware
          </h3>
          <div
            className="p-4 rounded-lg border border-[#232948] bg-[#161b30] group hover:border-[#323b67] transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-[#232948] text-[#929bc9]">
                <span className="material-symbols-outlined">desktop_windows</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">
                  {data.equipo.tipo}
                </p>
                <p className="text-xs text-[#929bc9] font-mono mt-1">
                  {data.equipo.numero_serie}
                </p>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <span
                className="px-2 py-1 rounded text-[10px] font-medium bg-[#232948] text-[#929bc9]"
                >Asset #{data.id}</span
              >
              <span
                className={`px-2 py-1 rounded text-[10px] font-medium bg-green-900/30 ${estadosEquipo[data.equipo.estado].text} border 
                ${estadosEquipo[data.equipo.estado].border}`}
                >{data.equipo.estado}</span
              >
            </div>
          </div>
        </div>
    </>
  )
}
