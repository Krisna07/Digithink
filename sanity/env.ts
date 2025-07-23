export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION 

export const dataset = assertValue(
  "production",
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  "p2cfrlsw",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
