type Title = {
    name: string,
}

export function Title({ name } : Title) {
    return (
        <div className="flex justify-center items-center h-full">
            <p className="text-white text-xxl font-bold">{name}</p>
        </div>
        )
}