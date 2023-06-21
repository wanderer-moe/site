// sort images based on selected sorting option
import { iso8601ToUnix } from '@/lib/helpers/timeConvertion/isoFormat.js'

export function sortAssets(images, selectedSortingOption) {
    switch (selectedSortingOption.name) {
        case 'fileSizeStoL':
            return images.sort((a, b) => a.size - b.size)
        case 'fileSizeLtoS':
            return images.sort((a, b) => b.size - a.size)
        case 'nameAtoZ':
            return images.sort((a, b) => a.name.localeCompare(b.name))
        case 'nameZtoA':
            return images.sort((a, b) => b.name.localeCompare(a.name))
        case 'dateNewest':
            return images.sort((a, b) => {
                const dateA = iso8601ToUnix(a.uploaded)
                const dateB = iso8601ToUnix(b.uploaded)
                return dateB - dateA
            })
        case 'dateOldest':
            return images.sort((a, b) => {
                const dateA = iso8601ToUnix(a.uploaded)
                const dateB = iso8601ToUnix(b.uploaded)
                return dateA - dateB
            })
        default:
            return images
    }
}
