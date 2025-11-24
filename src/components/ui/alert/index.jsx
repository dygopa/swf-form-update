import React, { useState, useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle, FiX, FiXCircle } from 'react-icons/fi';

// --- Función cn (Simplificada) ---
// Reemplazo simple para la importación 'cn' si no la tienes configurada.
// Si usas una librería como 'clsx' o 'classnames', la importas aquí.
const cn = (classes) => classes.filter(Boolean).join(' ');
// ---------------------------------

// Definición del componente como una función simple (sin forwardRef,
// ya que no se usaba directamente, pero lo podemos mantener si es necesario)

const Alert = ({ type, title, body, show, onClose, ...props }) => {
    // Estado interno para controlar si la alerta está activa/visible
    const [active, setActive] = useState(false);

    // Almacena el ID del timeout para poder cancelarlo
    const [timeoutId, setTimeoutId] = useState(null);

    // Efecto para manejar el cambio en la prop 'show'
    useEffect(() => {
        // Limpiar cualquier timeout anterior
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }

        if (show) {
            // 1. Mostrar la alerta
            setActive(true);

            // 2. Configurar el temporizador para ocultarla automáticamente
            const id = setTimeout(() => {
                setActive(false);
                // Si se proporciona una función onClose, llamarla después de ocultarse
                if (onClose) {
                    onClose();
                }
            }, 3500); // 3.5 segundos

            setTimeoutId(id);
        } else {
            // Si 'show' es false, asegurar que el estado interno también lo sea
            setActive(false);
        }

        // Función de limpieza de useEffect: se ejecuta antes de que el efecto corra de nuevo
        // o cuando el componente se desmonte.
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [show, onClose]); // Dependencias: 'show' para disparar el efecto; 'onClose' para usarlo en el cleanup

    // Función para cerrar manualmente la alerta
    const handleClose = () => {
        setActive(false);
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        if (onClose) {
            onClose();
        }
    };

    // --- Lógica de Iconos y Clases Dinámicas ---

    // 1. Seleccionar el icono y las clases de color
    const getAlertClasses = (alertType) => {
        let icon, colorClasses;

        switch (alertType) {
            case 'success':
                icon = <FiCheckCircle />;
                colorClasses = {
                    border: "border-green-300",
                    bg: "bg-green-600 text-white"
                };
                break;
            case 'error':
                icon = <FiXCircle />;
                colorClasses = {
                    border: "border-red-300",
                    bg: "bg-red-600 text-white"
                };
                break;
            case 'warning':
                icon = <FiAlertCircle />;
                colorClasses = {
                    border: "border-yellow-300",
                    bg: "bg-yellow-600 text-white"
                };
                break;
            default:
                icon = null;
                colorClasses = { border: "", bg: "" };
        }

        return { icon, colorClasses };
    };

    const { icon, colorClasses } = getAlertClasses(type);

    // Si 'active' es false, no renderizamos nada
    if (!active) {
        return null;
    }

    return (
        <div
            {...props}
            // Eliminamos 'ref' ya que quitamos 'forwardRef' (puedes agregarlo si lo necesitas)
            className={cn([
                "w-fit h-fit border shadow-md rounded-lg flex justify-start items-center space-x-3 gap-3 p-3 bg-white",
                "fixed top-4 right-4 z-30 transition-opacity duration-300", // Añadimos una transición para mejor UX
                active ? "opacity-100 visible" : "opacity-0 invisible",
                colorClasses.border,
            ])}
        >
            {/* Contenedor del Icono */}
            <span className={cn([
                "size-fit relative flex flex-col justify-center items-center text-[1.6rem] p-[0.35rem] rounded-lg",
                colorClasses.bg,
            ])}>
                {icon}
            </span>

            {/* Contenido (Título y Cuerpo) */}
            <div className="w-full h-fit flex flex-col justify-center items-start relative">
                <p className="text-slate-950 font-bold text-base leading-tight">{title}</p>
                <p className="text-slate-950 font-normal text-sm leading-tight">{body}</p>

                {/* Botón de Cerrar */}
                <span
                    onClick={handleClose} // Usamos la función de cierre
                    className="text-slate-500 absolute top-0 right-0 text-sm cursor-pointer"
                >
                    <FiX />
                </span>
            </div>
        </div>
    );
};

export default Alert;