import React from "react";

export const Coment = ({coment}) => {
  return (
    <div className="relative">
      <span className="absolute left-0 top-1 -ml-5.75 sm:-ml-10-75 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#101322] bg-[#232948] shadow-sm">
        <span className="material-symbols-outlined text-white text-xl">
          flag
        </span>
      </span>
      <div className="flex flex-col gap-2 rounded-xl border border-[#232948] bg-[#161b30] p-5 shadow-sm">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div
              className="h-8 w-8 rounded-full bg-cover bg-center"
              data-alt="John Doe Avatar"
            ></div>
            <div>
              <p className="text-sm font-semibold text-white">
                {coment.autor.username}
                <span className="text-[#929bc9] font-normal">
                  {coment.autor.rol}
                </span>
              </p>
              <p className="text-xs text-[#929bc9]">{coment.fecha}</p>
            </div>
          </div>
        </div>
        <div className="mt-2 text-[#d1d5db] text-sm leading-relaxed">
          <p>{coment.texto}</p>
        </div>
      </div>
    </div>
  );
};
