export function formatDate(timestamp: number): string {
    const date = new Date(timestamp)

    const pad = (n: number) => n.toString().padStart(2, '0')

    const month = pad(date.getMonth() + 1)
    const day = pad(date.getDate())

    return `${month}. ${day}.`
}
