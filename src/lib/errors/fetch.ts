export class FetchError extends Error {
  status: number
  statusText: string
  body: any

  constructor(response: Response, body: any) {
    super(`Fetch error: ${response.status} ${response.statusText}`)
    this.name = 'FetchError'
    this.status = response.status
    this.statusText = response.statusText
    this.body = body
  }
}
