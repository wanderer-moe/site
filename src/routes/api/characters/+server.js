import {
  fetchCharacterData
} from '$lib/utils'
import {
  json
} from '@sveltejs/kit'

export const GET = async () => {
  const allData = await fetchCharacterData('characters')

  return json(allData)
}