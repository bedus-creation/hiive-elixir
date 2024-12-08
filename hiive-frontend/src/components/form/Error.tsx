export function Error({ message }: { message: string }) {
    return (
        <>
            {message && <span className="text-red-500">{message}</span>}
        </>
    )
}
