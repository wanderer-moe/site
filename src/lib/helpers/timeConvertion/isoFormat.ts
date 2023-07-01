export function formatTimeAgo(isoTimestamp: string) {
    const now = new Date()
    const timestamp = new Date(isoTimestamp)
    const elapsedMilliseconds = now.getTime() - timestamp.getTime()
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000)

    if (elapsedSeconds < 60) {
        return `${elapsedSeconds}s ago`
    }

    const elapsedMinutes = Math.floor(elapsedSeconds / 60)

    if (elapsedMinutes <= 0) {
        return `just now`
    }

    if (elapsedMinutes < 60) {
        return `${elapsedMinutes}m ago`
    }

    const elapsedHours = Math.floor(elapsedMinutes / 60)

    if (elapsedHours < 24) {
        return `${elapsedHours}h ago`
    }

    const elapsedDays = Math.floor(elapsedHours / 24)

    if (elapsedDays < 7) {
        return `${elapsedDays}d ago`
    }

    const elapsedWeeks = Math.floor(elapsedDays / 7)

    return `${elapsedWeeks}w ago`
}

// ISO 8601 -> DD/Suffix Month YYYY, HH:MM:SS
export function formatDateReadable(dateString: string) {
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getFullYear()
    const time = date.toLocaleTimeString([], { hour12: false })
    const suffix = getOrdinalSuffix(day)
    return `${day}${suffix} ${month} ${year}, ${time}`
}
function getOrdinalSuffix(day: number) {
    const suffixes = ['th', 'st', 'nd', 'rd']
    const lastDigit = day % 10
    const suffixIndex =
        lastDigit === 1 ? 1 : lastDigit === 2 ? 2 : lastDigit === 3 ? 3 : 0
    return suffixes[suffixIndex]
}

// ISO 8601 -> Unix Timestamp
export function iso8601ToUnix(isoString: string) {
    const date = new Date(isoString)
    return Math.floor(date.getTime() / 1000)
}
