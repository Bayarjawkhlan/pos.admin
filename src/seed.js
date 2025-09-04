import { faker } from '@faker-js/faker'

export const makeFakeProduct = () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  imageUrl: faker.image.avatar(),
  internationalName: faker.commerce.productMaterial(),
  productType: faker.helpers.arrayElement(['medicine', 'not-medicine']),
  branches: Array.from({ length: faker.number.int({ min: 1, max: 4 }) }, () => ({
    id: faker.string.uuid(),
    imageUrl: faker.image.avatar(),
    name: faker.company.name(),
    quantity: faker.number.int({ min: 0, max: 500 })
  })),
  doStockEmployee: {
    avatarUrl: faker.image.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName()
  },
  doStockDate: faker.date.recent({ days: 30 }),
  barcode: faker.string.numeric(13),
  type: faker.commerce.department(),
  manifacturer: faker.company.name(),
  country: faker.location.country(),
  price: parseFloat(faker.commerce.price({ min: 1, max: 5000 }))
})

// Example: generate 5 fake products
const fakeProducts = Array.from({ length: 30 }, makeFakeProduct)

console.log(JSON.stringify(fakeProducts, null, 2))
