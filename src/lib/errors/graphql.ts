export class GraphQLError extends Error {
  errors: any[]
  data: any

  constructor(errors: any[], data?: any) {
    super(errors.map((e) => e.message).join(', '))
    this.name = 'GraphQLError'
    this.errors = errors
    this.data = data
  }
}
