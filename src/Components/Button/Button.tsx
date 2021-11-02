
export default function Button({ children, styles }: { children: JSX.Element | string, styles: string }) {
    return (
        <button className={"text-black bg-yellow-300 px-5 py-3 rounded font-semibold " + styles}>
            {children}
        </button>
    )
}
