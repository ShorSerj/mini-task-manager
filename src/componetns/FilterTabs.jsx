import React from "react";
import { useFilter } from "@/hooks/useFilter.jsx";

function FilterTabs() {
  const { filter, changeFilter } = useFilter();

  const filters = [
    { label: "Все", value: "all" },
    { label: "Активные", value: "active" },
    { label: "Выполненные", value: "completed" },
  ];

  return (
    <div className="my-5 flex items-center gap-x-3">
      {filters.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => changeFilter(value)}
          className={`cursor-pointer px-4 py-1 ${
            filter === value ? "bg-[#0F74D1]" : "bg-[#4f8cc4]"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
