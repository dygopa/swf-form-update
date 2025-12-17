import React, { forwardRef, useState } from "react";
import { countryCodes } from "../list";
import { twMerge } from "tailwind-merge";

const CountrySelector = forwardRef(({ country, open, setOpen, onSelectCountry, ...props }, ref) => {
    const [search, setSearch] = useState("");

        // Filtra por nombre o código de área
        const filteredCountries = countryCodes.filter(c =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.dialCode.replace("+", "").includes(search.replace("+", ""))
        );

        return (
            <div
                className="relative"
                {...props}
                ref={ref}
            >
                <button
                    type="button"
                    className={twMerge([
                        "w-fit max-w-[140px] h-full px-2 py-2 flex items-center gap-2 bg-white border-r border-slate-300 cursor-pointer",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        open && "z-20"
                    ])}
                    onClick={() => setOpen((v) => !v)}
                >
                    <span className={`flag-icon flag-icon-${country.code.toLowerCase()}`}></span>
                    <span className="text-xs text-slate-500">{country.dialCode}</span>
                    <svg
                        className={twMerge([
                            "w-4 h-4 ml-2 shrink-0 transition-transform", 
                            open && "rotate-180"
                        ])}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {open && (
                    <div className="absolute bottom-10 z-50 mt-1 w-[220px] max-h-60 overflow-auto bg-white border border-slate-200 rounded shadow-lg">
                        <div className="w-full bg-white sticky top-0 left-0 p-2 z-10">
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={e => setSearch(e.target.value)}
                                        placeholder="Buscar país o código"
                                        className="w-full px-2 py-1 border border-slate-200 rounded text-sm mb-2 focus:outline-none"
                                        autoFocus
                                    />
                        </div>
                        {filteredCountries.length === 0 && (
                            <div className="px-3 py-2 text-slate-400 text-sm">No hay resultados</div>
                        )}
                        {filteredCountries.map((c, i) => (
                            <button
                                key={i}
                                type="button"
                                className={twMerge([
                                    "flex items-center w-full px-3 py-2 gap-2 hover:bg-slate-100 text-left",
                                    c.dialCode === country.dialCode && "bg-slate-100 font-semibold"

                                ])}
                                onClick={() => {
                                    onSelectCountry(c);
                                    setSearch("");
                                }}
                            >
                                <span className={`flag-icon flag-icon-${c.code.toLowerCase()}`}></span>
                                <span className="truncate">{c.name}</span>
                                <span className="ml-auto text-xs text-slate-500">{c.dialCode}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        )
    }
);

CountrySelector.displayName = "CountrySelector";
export { CountrySelector };