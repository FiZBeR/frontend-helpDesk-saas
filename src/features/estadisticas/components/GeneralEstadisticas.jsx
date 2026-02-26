import React from 'react'
import { useFetchEstad } from '../../../hooks/useFetchEstad';

export const GeneralEstadisticas = () => {

    const { data, isLoading, error} = useFetchEstad();

  return (
    <div
          className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <h2
                className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
              >
                Descripción general
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-[#929bc9]">
              Esto es lo que está sucediendo con su infraestructura de TI hoy en día.
              </p>
            </div>
            {/*  KPI Cards */}
            <div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8"
            >
              {/*  Card 1 */}
              <div
                className="overflow-hidden rounded-xl bg-white dark:bg-[#1a1d2d] border border-slate-200 dark:border-[#232948] shadow-sm"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-lg bg-red-100 p-3 dark:bg-red-900/20">
                        <span
                          className="material-symbols-outlined text-red-600 dark:text-red-400"
                          >confirmation_number</span
                        >
                      </div>
                      <div>
                        <p
                          className="text-sm font-medium text-slate-500 dark:text-[#929bc9]"
                        >
                          Tickets Abiertos
                        </p>
                        <p
                          className="text-3xl font-bold text-slate-900 dark:text-white"
                        >
                          {data.tickets_abiertos}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Card 2 */}
              <div
                className="overflow-hidden rounded-xl bg-white dark:bg-[#1a1d2d] border border-slate-200 dark:border-[#232948] shadow-sm"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="rounded-lg bg-blue-100 p-3 dark:bg-blue-900/20"
                      >
                        <span
                          className="material-symbols-outlined text-blue-600 dark:text-blue-400"
                          >pending_actions</span
                        >
                      </div>
                      <div>
                        <p
                          className="text-sm font-medium text-slate-500 dark:text-[#929bc9]"
                        >
                          En Progreso
                        </p>
                        <p
                          className="text-3xl font-bold text-slate-900 dark:text-white"
                        >
                          {data.tickets_en_progreso}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Card 3 */}
              <div
                className="overflow-hidden rounded-xl bg-white dark:bg-[#1a1d2d] border border-slate-200 dark:border-[#232948] shadow-sm"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="rounded-lg bg-emerald-100 p-3 dark:bg-emerald-900/20"
                      >
                        <span
                          className="material-symbols-outlined text-emerald-600 dark:text-emerald-400"
                          >check_circle</span
                        >
                      </div>
                      <div>
                        <p
                          className="text-sm font-medium text-slate-500 dark:text-[#929bc9]"
                        >
                          Resueltos
                        </p>
                        <p
                          className="text-3xl font-bold text-slate-900 dark:text-white"
                        >
                          {data.tickets_resueltos}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  Main Grid: Chart + Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/*  Chart Section (Takes up 2/3) */}
              <div
                className="lg:col-span-2 rounded-xl bg-white dark:bg-[#1a1d2d] border border-slate-200 dark:border-[#232948] shadow-sm flex flex-col"
              >
                <div
                  className="border-b border-slate-200 dark:border-[#232948] px-6 py-4 flex justify-between items-center"
                >
                  <div>
                    <h3
                      className="text-base font-semibold leading-6 text-slate-900 dark:text-white"
                    >
                      Ticket Distribution by Priority
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-[#929bc9]">
                      Current breakdown of open issues
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="p-1 rounded hover:bg-slate-100 dark:hover:bg-[#232948] text-slate-400 dark:text-[#929bc9]"
                    >
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </div>
                </div>
                <div
                  className="p-6 flex flex-1 items-center justify-center min-h-[300px]"
                >
                  <div
                    className="flex flex-col md:flex-row items-center gap-12 w-full justify-center"
                  >
                    {/*  Simple Pure CSS Pie Chart Visualization */}
                    <div
                      className="relative h-48 w-48 rounded-full bg-slate-800"
                      style={{
                        background: `conic-gradient(
                          #ef4444 0% 15%,
                          #f59e0b 15% 40%,
                          #2b4bee 40% 75%,
                          #10b981 75% 100%
                        )`
                      }}
                    >
                      <div
                        className="absolute inset-4 rounded-full bg-white dark:bg-[#1a1d2d] flex items-center justify-center flex-col"
                      >
                        <span
                          className="text-3xl font-bold text-slate-900 dark:text-white"
                          >65</span
                        >
                        <span
                          className="text-xs font-medium text-slate-500 dark:text-[#929bc9]"
                          >Total</span
                        >
                      </div>
                    </div>
                    {/*  Legend */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-1 h-3 w-3 rounded-full bg-danger"
                        ></span>
                        <div className="flex flex-col">
                          <span
                            className="text-sm font-medium text-slate-900 dark:text-white"
                            >Critical</span
                          >
                          <span
                            className="text-xs text-slate-500 dark:text-[#929bc9]"
                            >15% (10 tickets)</span
                          >
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-1 h-3 w-3 rounded-full bg-warning"
                        ></span>
                        <div className="flex flex-col">
                          <span
                            className="text-sm font-medium text-slate-900 dark:text-white"
                            >High</span
                          >
                          <span
                            className="text-xs text-slate-500 dark:text-[#929bc9]"
                            >25% (16 tickets)</span
                          >
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-1 h-3 w-3 rounded-full bg-primary"
                        ></span>
                        <div className="flex flex-col">
                          <span
                            className="text-sm font-medium text-slate-900 dark:text-white"
                            >Medium</span
                          >
                          <span
                            className="text-xs text-slate-500 dark:text-[#929bc9]"
                            >35% (23 tickets)</span
                          >
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-1 h-3 w-3 rounded-full bg-success"
                        ></span>
                        <div className="flex flex-col">
                          <span
                            className="text-sm font-medium text-slate-900 dark:text-white"
                            >Low</span
                          >
                          <span
                            className="text-xs text-slate-500 dark:text-[#929bc9]"
                            >25% (16 tickets)</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
  )
}
