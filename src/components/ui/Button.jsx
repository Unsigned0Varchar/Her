
export default function Button({ className = "", children, ...props }) {
    return (
        <button {...props} className={["px-6 py-2 rounded-[14px] shadow-md font-medium uppercase cursor-pointer transition flex items-center gap-2 text-white md:text-lg disabled:cursor-not-allowed disabled:opacity-50", className].join(" ")}
            style={{ filter: "drop-shadow(0 3px 5px rgba(0,0,0, 0.5))" }}>
            {children}
        </button>
    )
}