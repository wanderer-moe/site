import { fetchData } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allData = await fetchData('characters')

  return json(allData)
}