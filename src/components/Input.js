import { Icon } from "@iconify/react";

export const Input = ({ placeholder, value, onChange }) => {
  return (
    <label className="relative w-full flex items-center gap-2 bg-zinc-50 px-3 py-1 rounded-full border focus:ring-2 focus:ring-zinc-100/50">
      <Icon
        icon="mingcute:search-line"
        className="pointer-events-none text-zinc-600 focus-within:text-zinc-700 w-8 h-8"
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="placeholder-zinc-400 text-zinc-700 w-full focus:outline-none"
      />
    </label>
  );
};
