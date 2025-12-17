/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from "react";
import { countryCodes } from "./list";
import { CountrySelector } from "./country-selector";
import { twMerge } from "tailwind-merge";

const defaultCountry = countryCodes.find(elem => elem.code == "PA") || countryCodes[0];

function detectCountryAndNumber(phone) {
    if (!phone) return { country: defaultCountry, raw: "" };
    const sortedCodes = [...countryCodes].sort((a, b) => b.dialCode.length - a.dialCode.length);
    const found = sortedCodes.find(c => phone.startsWith(c.dialCode));
    if (found) {
        const raw = phone.replace(found.dialCode, "").replace(/\D/g, "").slice(0, found.length);
        return { country: found, raw };
    }
    return { country: defaultCountry, raw: phone.replace(/\D/g, "").slice(0, defaultCountry.length) };
}

const panamaCellFormat = (v) => {
    const digits = v.replace(/\D/g, "").slice(0, 8);
    if (digits.length < 7) return digits;
    if (digits.length === 7) return digits.replace(/(\d{3})(\d{4})/, "$1-$2");
    return digits.replace(/(\d{4})(\d{4})/, "$1-$2");
};

const Phone = React.forwardRef(( { onComplete, icon, className, value, residential, ...props }, ref) => {
    const [country, setCountry] = useState(defaultCountry);
    const [number, setNumber] = useState("");
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const { country: detectedCountry, raw } = detectCountryAndNumber(value);
        setCountry(detectedCountry);

        if (detectedCountry.code === "PA") {
            const r = raw.slice(0, 8);
            setNumber(panamaCellFormat(r));
        } else {
            setNumber(detectedCountry.format(raw));
        }
    }, [value, residential]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    const handleCountrySelect = (c) => {
        setCountry(c);
        setNumber("");
        setOpen(false);
    };

    const handleNumberChange = (e) => {
        let raw = e.target.value.replace(/\D/g, "");
        if (country.code === "PA") {
            raw = raw.slice(0, 8);
            setNumber(panamaCellFormat(raw));
            if ((raw.length === 7 || raw.length === 8) && typeof onComplete === "function") {
                onComplete(`${country.dialCode}${raw}`);
            }
        } else {
            raw = raw.slice(0, country.length);
            setNumber(country.format(raw));
            if (raw.length === country.length && typeof onComplete === "function") {
                onComplete(`${country.dialCode}${raw}`);
            }
        }
    };

    return (
        <div
            ref={ref}
            className={twMerge([
                "transition-all w-full h-fit flex justify-between items-center rounded-md border border-slate-300 bg-white text-sm relative",
                "ring-offset-white relative",
                className,
            ])}
        >
            <div className="flex w-full">
                <CountrySelector
                    country={country}
                    open={open}
                    setOpen={setOpen}
                    onSelectCountry={handleCountrySelect}
                    ref={dropdownRef}
                />

                <input
                    type="text"
                    value={number}
                    onChange={handleNumberChange}
                    className={twMerge([
                        "w-full h-full px-1 py-2 text-center",
                        "file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                        "focus:outline-none"
                    ])}
                    placeholder="Número de teléfono"
                    {...props}
                />
            </div>
            {icon && (
                <span className="w-[40px] h-full absolute right-0 inset-y-0 pointer-events-none bg-white flex flex-col justify-center items-center">
                    {React.isValidElement(icon) && icon}
                </span>
            )}
        </div>
    );
});

Phone.displayName = "Phone";
export { Phone };