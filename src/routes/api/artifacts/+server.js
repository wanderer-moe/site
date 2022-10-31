import { fetchArtifactData } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allData = await fetchArtifactData('artifacts')

  return json(allData)
}