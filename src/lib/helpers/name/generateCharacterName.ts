import FemaleNameData from '@/lib/names/en/female.json'
import MaleNameData from '@/lib/names/en/male.json'

export function generateFeminineName() {
    const randomIndex = Math.floor(Math.random() * FemaleNameData.length)
    return FemaleNameData[randomIndex]
}

export function generateMasculineName() {
    const randomIndex = Math.floor(Math.random() * MaleNameData.length)
    return MaleNameData[randomIndex]
}

export function generateMixedName() {
    const randomIndex = Math.floor(Math.random() * 2)
    return randomIndex === 0 ? generateFeminineName() : generateMasculineName()
}
