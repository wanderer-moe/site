// lib/utils/helpers.js

export function fixCasing(word) {
    const formattedWord = word.replace(/-/g, ' ')
    return formattedWord.replace(/\b\w/g, (l) => l.toUpperCase())
}

export function bytesToFileSize(bytes) {
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return '0 B'
    const i = Math.floor(Math.log2(bytes) / 10)
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`
}

// ISO 8601 -> DD/Suffix Month YYYY, HH:MM:SS
export function formatDateReadable(dateString) {
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getFullYear()
    const time = date.toLocaleTimeString([], { hour12: false })
    const suffix = getOrdinalSuffix(day)
    return `${day}${suffix} ${month} ${year}, ${time}`
}
function getOrdinalSuffix(day) {
    const suffixes = ['th', 'st', 'nd', 'rd']
    const lastDigit = day % 10
    const suffixIndex =
        lastDigit === 1 ? 1 : lastDigit === 2 ? 2 : lastDigit === 3 ? 3 : 0
    return suffixes[suffixIndex]
}

// ISO 8601 -> Unix Timestamp
export function iso8601ToUnix(isoString) {
    const date = new Date(isoString)
    return Math.floor(date.getTime() / 1000)
}
