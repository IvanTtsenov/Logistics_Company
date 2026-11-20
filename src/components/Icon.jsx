// SVG икони, написани само с React/HTML — без допълнителна библиотека.
const icons = {
    package: <><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="M3 7v10l9 5 9-5V7M12 12v10M7.5 4.5l9 5"/></>,
    arrowRight: <><path d="M4 12h16m-7-7 7 7-7 7"/></>,
    arrowUpRight: <><path d="M6 18 18 6M8 6h10v10"/></>,
    truck: <><path d="M3 6h11v12H3zM14 10h4l3 4v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    building: <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 21v-5h6v5M8 7h1M15 7h1M8 11h1M15 11h1"/></>,
    check: <><path d="m4 12 5 5L20 6"/></>,
    checkCircle: <><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></>,
    shield: <><path d="m12 2 8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4Z"/><path d="m9 12 2 2 4-4"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/></>,
    eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></>,
    eyeOff: <><path d="m3 3 18 18M10.6 5.1A11 11 0 0 1 12 5c6 0 10 7 10 7a17 17 0 0 1-4.1 4.6M6.1 6.6C3.7 8.3 2 12 2 12s4 7 10 7c1.7 0 3.3-.6 4.6-1.4"/></>,
    menu: <><path d="M3 6h18M3 12h18M3 18h18"/></>,
    x: <><path d="M5 5 19 19M19 5 5 19"/></>,
    chevron: <><path d="m9 18 6-6-6-6"/></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    logout: <><path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5M14 8l4 4-4 4M8 12h10"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
};

export default function Icon({ name, size = 20, className = '' }) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round"
            strokeLinejoin="round" aria-hidden="true">
            {icons[name] || icons.package}
        </svg>
    );
}
