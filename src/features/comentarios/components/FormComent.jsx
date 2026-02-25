import React from "react";

export const FormComent = (id) => {
  return (
    <div class="bg-[#161b30] border-t border-[#232948] p-6 z-20">
      <div class="max-w-4xl mx-auto flex flex-col gap-3">
        <div class="flex justify-between items-center mb-1">
          <h3 class="text-sm font-semibold text-white">New Comment</h3>
          <label class="inline-flex items-center cursor-pointer">
            <input class="sr-only peer" type="checkbox" value="" />
            <div class="relative w-9 h-5 bg-[#232948] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:inset-s-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-yellow-600"></div>
            <span class="ms-3 text-sm font-medium text-[#929bc9] peer-checked:text-yellow-500 transition-colors">
              Internal Note
            </span>
          </label>
        </div>
        <div class="relative">
          <textarea
            class="w-full bg-[#111422] border border-[#232948] rounded-xl p-4 text-sm text-white placeholder-[#5d6588] focus:ring-2 focus:ring-primary focus:border-transparent min-h-25 resize-none"
            placeholder="Type your reply or internal note here..."
          ></textarea>
          <div class="absolute bottom-3 right-3 flex items-center gap-2">
            <button
              class="p-1.5 text-[#5d6588] hover:text-white rounded-md hover:bg-[#232948] transition-colors"
              title="Attach File"
            >
              <span class="material-symbols-outlined text-[20px]">
                attach_file
              </span>
            </button>
            <button
              class="p-1.5 text-[#5d6588] hover:text-white rounded-md hover:bg-[#232948] transition-colors"
              title="Code Block"
            >
              <span class="material-symbols-outlined text-[20px]">code</span>
            </button>
          </div>
        </div>
        <div class="flex justify-end pt-2">
          <button class="flex items-center justify-center h-10 px-6 rounded-lg bg-cyan-500 hover:bg-cyan-500/90 text-white shadow-lg shadow-primary/20 transition-all text-sm font-bold gap-2 cursor-pointer">
            Post Comment
            <span class="material-symbols-outlined text-[18px]">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};
