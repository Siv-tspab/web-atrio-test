
export default function Button({ children }: { children: JSX.Element | string }) {
    return (
        <button className="text-black bg-yellow-300 px-5 py-3 rounded font-semibold">
            {children}
        </button>
    )
}
