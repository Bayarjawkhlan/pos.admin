import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'schema.graphql',
  generates: {
    'src/gql/graphql.ts': {
      plugins: ['typescript'],
      documents: 'src/gql/**/*.gql',
      config: {
        // maybeValue: 'T',
        scalars: {
          Decimal: 'string | number',
          JSON: 'any',
          Upload: 'any',
          ISO8601Date: 'string',
          Email: 'string',
          Phone: 'string'
        }
        // scalarSchemas: {
        //   JSON: 'z.any()',
        //   Upload: 'z.instanceof(File)',
        //   ISO8601Date: 'z.string().datetime()',
        //   Decimal: 'z.union([z.string(), z.number()])'
        // },
        // schema: 'zod'
      }
    },
    'src/gql/zod.ts': {
      plugins: ['typescript-validation-schema'],
      documents: 'src/gql/**/*.gql',
      config: {
        // maybeValue: 'T',
        scalars: {
          Decimal: 'string | number',
          JSON: 'any',
          Upload: 'any',
          ISO8601Date: 'string',
          Email: 'string',
          CompanyRegister: 'string',
          RegisterNumber: 'string',
          Phone: 'string'
        },
        scalarSchemas: {
          JSON: 'z.any()',
          Upload: 'z.any()',
          ISO8601Date: 'z.string().date()',
          Email: 'z.string().email()',
          Phone: 'z.string().regex(/^(\\+\\d{1,3}[- ]?)?\\d{8,12}$/)',
          Decimal: 'z.union([z.string(), z.number()])',
          CompanyRegister: 'z.string().regex(/^\\d{7}$/)',
          RegisterNumber: 'z.string().regex(/^[АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЫЬЭЮЯ]{2}\\d{8}$/)'
        },
        schema: 'zod',
        importFrom: '@/gql/graphql'
      }
    },
    'src/': {
      preset: 'near-operation-file',
      documents: 'src/gql/**/*.gql',
      presetConfig: {
        baseTypesPath: 'gql/graphql.ts',
        extension: '.generated.ts'
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {
        // maybeValue: 'T',
        withHooks: true,
        preResolveTypes: true,
        flattenGeneratedTypes: false,
        flattenGeneratedTypesIncludeFragments: false,
        disableDescriptions: true,
        useTypeImports: true,
        allowEnumStringTypes: true,
        scalars: {
          Decimal: 'string | number'
        }
      }
    }
  },
  hooks: {
    afterAllFileWrite: ['prettier --write']
  },
  overwrite: true,
  ignoreNoDocuments: true
};

export default config;
