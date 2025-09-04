import { z } from 'zod'
import {
  AccountFilter,
  AddressInput,
  ArticleFilter,
  BankAccountFilter,
  BankCgwStatus,
  BankFilter,
  BankTransactionFilter,
  BankTransferFilter,
  BankTransferStatus,
  BoolFilter,
  CashAccountFilter,
  CountryFilter,
  DateFilter,
  DeviceChannel,
  DistrictFilter,
  EnumStringFilter,
  Gender,
  IdFilter,
  IntFilter,
  JobStatusFilter,
  MetricGranularity,
  OrderFilter,
  OrderSide,
  OrderTypeEnum,
  PlaceEquityInput,
  QuarterFilter,
  SecurityAccountFilter,
  SortDirection,
  SortFilter,
  StateFilter,
  Status,
  StringFilter,
  TickerFilter,
  TifEnum,
  TopTicker,
  TransactionEntryType,
  UserFilter,
  WatchlistFilter,
  AccountDepositInput,
  AccountWithdrawInput,
  AssertionPasskeyInput,
  BankCgwCreateInput,
  BankCgwStatementsInput,
  BankCgwUpdateInput,
  BankTransactionTypeCode,
  CancelOrderInput,
  ChangePasswordInput,
  CheckAccountNameInput,
  ConfirmableConfirmInput,
  ConfirmableResendInput,
  CreateAddressInput,
  CreateBankAccountInput,
  CreateBankInput,
  CreateKycFinancialInput,
  CreateNoteInput,
  CreatePasskeyInput,
  CreateRelatedPartyInput,
  CreateSignedIdInput,
  CreateTaxInput,
  DeleteAddressInput,
  DeleteBankAccountInput,
  DeleteDeviceInput,
  DeleteEmailInput,
  DeleteNoteInput,
  DeletePasskeyInput,
  DeletePhoneInput,
  DeleteUserInput,
  DisableTotpInput,
  EnableTotpInput,
  ForgetPasswordInput,
  ProvideKycConsentInput,
  RegisterByEmailInput,
  RegisterByMobileInput,
  RegisterByPasswordInput,
  RemoveFromWatchListInput,
  RequestPasskeyInput,
  RequestTotpInput,
  ResetPasswordInput,
  ToggleWatchListInput,
  UpdateAddressInput,
  UpdateBankAccountInput,
  UpdateBankInput,
  UpdateDeviceInput,
  UpdateKycProfileInput,
  UpdateNoteInput,
  UpdatePasskeyInput,
  UpdateUserInput,
  UploadKycDocumentInput
} from '@/gql/graphql'

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>
}>

type definedNonNullAny = {}

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v))

export const BankCgwStatusSchema = z.nativeEnum(BankCgwStatus)

export const BankTransferStatusSchema = z.nativeEnum(BankTransferStatus)

export const DeviceChannelSchema = z.nativeEnum(DeviceChannel)

export const GenderSchema = z.nativeEnum(Gender)

export const MetricGranularitySchema = z.nativeEnum(MetricGranularity)

export const OrderSideSchema = z.nativeEnum(OrderSide)

export const OrderTypeEnumSchema = z.nativeEnum(OrderTypeEnum)

export const SortDirectionSchema = z.nativeEnum(SortDirection)

export const StatusSchema = z.nativeEnum(Status)

export const TifEnumSchema = z.nativeEnum(TifEnum)

export const TopTickerSchema = z.nativeEnum(TopTicker)

export const TransactionEntryTypeSchema = z.nativeEnum(TransactionEntryType)

export const BankTransactionTypeCodeSchema = z.nativeEnum(BankTransactionTypeCode)

export function AccountFilterSchema(): z.ZodObject<Properties<AccountFilter>> {
  return z.object({
    commissionType: IntFilterSchema().nullish(),
    createdAt: DateFilterSchema().nullish(),
    custodian: BoolFilterSchema().nullish(),
    exchange: StringFilterSchema().nullish(),
    exchangeAccountId: StringFilterSchema().nullish(),
    exchangeAccountType: IntFilterSchema().nullish(),
    feedLevel: IntFilterSchema().nullish(),
    id: IdFilterSchema().nullish(),
    isPriceEnabled: BoolFilterSchema().nullish(),
    securityAccount: SecurityAccountFilterSchema().nullish(),
    securityAccountId: IdFilterSchema().nullish(),
    status: IntFilterSchema().nullish(),
    tradingEnabled: BoolFilterSchema().nullish(),
    updatedAt: DateFilterSchema().nullish(),
    user: UserFilterSchema().nullish(),
    userId: IdFilterSchema().nullish()
  })
}

export function AddressInputSchema(): z.ZodObject<Properties<AddressInput>> {
  return z.object({
    address: z.string().nullish(),
    apartment: z.string().nullish(),
    city: z.string().nullish(),
    company: z.string().nullish(),
    countryId: z.string().nullish(),
    districtId: z.string().nullish(),
    districtName: z.string().nullish(),
    firstName: z.string().nullish(),
    id: z.string().nullish(),
    instructions: z.string().nullish(),
    lastName: z.string().nullish(),
    latitude: z.string().nullish(),
    longitude: z.string().nullish(),
    phone: z
      .string()
      .regex(/^(\+\d{1,3}[- ]?)?\d{8,12}$/)
      .nullish(),
    postalCode: z.string().nullish(),
    quarterId: z.string().nullish(),
    quarterName: z.string().nullish(),
    stateId: z.string().nullish(),
    street: z.string().nullish(),
    village: z.string().nullish(),
    what3words: z.string().nullish(),
    zipCode: z.string().nullish()
  })
}

export function ArticleFilterSchema(): z.ZodObject<Properties<ArticleFilter>> {
  return z.object({
    caption: StringFilterSchema().nullish(),
    category: StringFilterSchema().nullish(),
    countryList: StringFilterSchema().nullish(),
    createdAt: DateFilterSchema().nullish(),
    headline: StringFilterSchema().nullish(),
    id: IdFilterSchema().nullish(),
    key: StringFilterSchema().nullish(),
    language: StringFilterSchema().nullish(),
    sourceText: StringFilterSchema().nullish(),
    summary: StringFilterSchema().nullish(),
    updatedAt: DateFilterSchema().nullish(),
    withCategory: z.string().nullish(),
    withExchange: z.string().nullish(),
    withSymbol: z.string().nullish()
  })
}

export function BankAccountFilterSchema(): z.ZodObject<Properties<BankAccountFilter>> {
  return z.object({
    bank: BankFilterSchema().nullish(),
    bankId: IdFilterSchema().nullish(),
    createdAt: DateFilterSchema().nullish(),
    currency: StringFilterSchema().nullish(),
    id: IdFilterSchema().nullish(),
    isActive: BoolFilterSchema().nullish(),
    isDefault: BoolFilterSchema().nullish(),
    name: StringFilterSchema().nullish(),
    number: StringFilterSchema().nullish(),
    ownerId: IdFilterSchema().nullish(),
    ownerType: StringFilterSchema().nullish(),
    position: IntFilterSchema().nullish(),
    updatedAt: DateFilterSchema().nullish(),
    user: UserFilterSchema().nullish()
  })
}

export function BankFilterSchema(): z.ZodObject<Properties<BankFilter>> {
  return z.object({
    code: StringFilterSchema().nullish(),
    createdAt: DateFilterSchema().nullish(),
    id: IdFilterSchema().nullish(),
    isActive: BoolFilterSchema().nullish(),
    name: StringFilterSchema().nullish(),
    swiftCode: StringFilterSchema().nullish(),
    updatedAt: DateFilterSchema().nullish()
  })
}

export function BankTransactionFilterSchema(): z.ZodObject<Properties<BankTransactionFilter>> {
  return z.object({
    account: StringFilterSchema().nullish(),
    amount: IntFilterSchema().nullish(),
    createdAt: DateFilterSchema().nullish(),
    customDescription: StringFilterSchema().nullish(),
    customerAccount: StringFilterSchema().nullish(),
    customerBank: StringFilterSchema().nullish(),
    customerName: StringFilterSchema().nullish(),
    description: StringFilterSchema().nullish(),
    id: IdFilterSchema().nullish(),
    ref: StringFilterSchema().nullish(),
    targetId: IntFilterSchema().nullish(),
    targetType: StringFilterSchema().nullish(),
    transactionDate: DateFilterSchema().nullish(),
    typeCode: EnumStringFilterSchema().nullish(),
    updatedAt: DateFilterSchema().nullish()
  })
}

export function BankTransferFilterSchema(): z.ZodObject<Properties<BankTransferFilter>> {
  return z.object({
    accountName: StringFilterSchema().nullish(),
    accountNumber: StringFilterSchema().nullish(),
    amount: IntFilterSchema().nullish(),
    bankCode: StringFilterSchema().nullish(),
    cgwId: IdFilterSchema().nullish(),
    createdAt: DateFilterSchema().nullish(),
    currency: StringFilterSchema().nullish(),
    description: StringFilterSchema().nullish(),
    id: IdFilterSchema().nullish(),
    number: StringFilterSchema().nullish(),
    status: EnumStringFilterSchema().nullish(),
    targetId: IdFilterSchema().nullish(),
    targetType: StringFilterSchema().nullish(),
    updatedAt: DateFilterSchema().nullish()
  })
}

export function BoolFilterSchema(): z.ZodObject<Properties<BoolFilter>> {
  return z.object({
    eq: z.boolean().nullish(),
    notEq: z.boolean().nullish(),
    notNull: z.boolean().nullish(),
    null: z.boolean().nullish()
  })
}

export function CashAccountFilterSchema(): z.ZodObject<Properties<CashAccountFilter>> {
  return z.object({
    accountType: IntFilterSchema().nullish(),
    balance: IntFilterSchema().nullish(),
    blockedAmount: IntFilterSchema().nullish(),
    buyingPower: IntFilterSchema().nullish(),
    cashAvailableForWithdraw: IntFilterSchema().nullish(),
    createdAt: DateFilterSchema().nullish(),
    currency: StringFilterSchema().nullish(),
    dailyOdLimit: IntFilterSchema().nullish(),
    dailyOdLimitEnabled: BoolFilterSchema().nullish(),
    dayMarginBlock: IntFilterSchema().nullish(),
    dayMarginDue: IntFilterSchema().nullish(),
    id: IdFilterSchema().nullish(),
    marginBlock: IntFilterSchema().nullish(),
    marginDue: IntFilterSchema().nullish(),
    number: StringFilterSchema().nullish(),
    odLimit: IntFilterSchema().nullish(),
    pendingDeposit: IntFilterSchema().nullish(),
    pendingSettle: IntFilterSchema().nullish(),
    pendingWithdraw: IntFilterSchema().nullish(),
    secondaryTradingLimit: IntFilterSchema().nullish(),
    status: IntFilterSchema().nullish(),
    unsettledTransfers: IntFilterSchema().nullish(),
    updatedAt: DateFilterSchema().nullish(),
    user: UserFilterSchema().nullish(),
    userId: IdFilterSchema().nullish()
  })
}

export function CountryFilterSchema(): z.ZodObject<Properties<CountryFilter>> {
  return z.object({
    createdAt: DateFilterSchema().nullish(),
    id: IdFilterSchema().nullish(),
    isoName: StringFilterSchema().nullish(),
    name: StringFilterSchema().nullish(),
    updatedAt: DateFilterSchema().nullish()
  })
}

export function DateFilterSchema(): z.ZodObject<Properties<DateFilter>> {
  return z.object({
    eq: z.string().nullish(),
    gt: z.string().nullish(),
    gteq: z.string().nullish(),
    lt: z.string().nullish(),
    lteq: z.string().nullish(),
    notEq: z.string().nullish(),
    notNull: z.boolean().nullish(),
    null: z.boolean().nullish()
  })
}

export function DistrictFilterSchema(): z.ZodObject<Properties<DistrictFilter>> {
  return z.object({
    code: StringFilterSchema().nullish(),
    createdAt: DateFilterSchema().nullish(),
    id: IdFilterSchema().nullish(),
    name: StringFilterSchema().nullish(),
    stateId: IdFilterSchema().nullish(),
    updatedAt: DateFilterSchema().nullish()
  })
}

export function EnumStringFilterSchema(): z.ZodObject<Properties<EnumStringFilter>> {
  return z.object({
    eq: z.string().nullish(),
    in: z.array(z.string()).nullish(),
    notEq: z.string().nullish(),
    notIn: z.array(z.string()).nullish(),
    notNull: z.boolean().nullish(),
    null: z.boolean().nullish()
  })
}

export function IdFilterSchema(): z.ZodObject<Properties<IdFilter>> {
  return z.object({
    blank: z.boolean().nullish(),
    eq: z.string().nullish(),
    gt: z.number().nullish(),
    gteq: z.number().nullish(),
    in: z.array(z.string()).nullish(),
    lt: z.number().nullish(),
    lteq: z.number().nullish(),
    notEq: z.string().nullish(),
    notIn: z.array(z.string()).nullish(),
    start: z.number().nullish()
  })
}

export function IntFilterSchema(): z.ZodObject<Properties<IntFilter>> {
  return z.object({
    blank: z.boolean().nullish(),
    eq: z.number().nullish(),
    gt: z.number().nullish(),
    gteq: z.number().nullish(),
    in: z.array(z.number()).nullish(),
    lt: z.number().nullish(),
    lteq: z.number().nullish(),
    notEq: z.number().nullish(),
    notIn: z.array(z.number()).nullish(),
    null: z.boolean().nullish()
  })
}

export function JobStatusFilterSchema(): z.ZodObject<Properties<JobStatusFilter>> {
  return z.object({
    createdAt: DateFilterSchema().nullish(),
    id: IdFilterSchema().nullish(),
    jobId: StringFilterSchema().nullish(),
    jobType: StringFilterSchema().nullish(),
    status: StringFilterSchema().nullish(),
    updatedAt: DateFilterSchema().nullish(),
    userId: IdFilterSchema().nullish()
  })
}

export function OrderFilterSchema(): z.ZodObject<Properties<OrderFilter>> {
  return z.object({
    createdAt: DateFilterSchema().nullish(),
    filledQty: IntFilterSchema().nullish(),
    id: IdFilterSchema().nullish(),
    number: StringFilterSchema().nullish(),
    orderQty: IntFilterSchema().nullish(),
    orderSide: EnumStringFilterSchema().nullish(),
    orderStatus: EnumStringFilterSchema().nullish(),
    orderType: EnumStringFilterSchema().nullish(),
    symbol: StringFilterSchema().nullish(),
    tif: EnumStringFilterSchema().nullish(),
    updatedAt: DateFilterSchema().nullish(),
    userId: IdFilterSchema().nullish()
  })
}

export function PlaceEquityInputSchema(): z.ZodObject<Properties<PlaceEquityInput>> {
  return z.object({
    accountNumber: z.string().nullish(),
    clientMutationId: z.string().nullish(),
    currency: z.string().default('USD').nullish(),
    exchange: z.string(),
    expiryDate: definedNonNullAnySchema.nullish(),
    instrumentType: z.string().nullish(),
    orderQty: z.number(),
    orderSide: OrderSideSchema,
    orderType: OrderTypeEnumSchema,
    orderValue: z.number().nullish(),
    price: z.number().nullish(),
    securityType: z.string().default('CS').nullish(),
    stopPrice: z.number().nullish(),
    symbol: z.string(),
    tif: TifEnumSchema.nullish(),
    tradingSession: z.string().default('REG').nullish(),
    trailByValue: z.number().nullish(),
    trailType: z.string().nullish()
  })
}

export function QuarterFilterSchema(): z.ZodObject<Properties<QuarterFilter>> {
  return z.object({
    code: StringFilterSchema().nullish(),
    createdAt: DateFilterSchema().nullish(),
    districtId: IdFilterSchema().nullish(),
    id: IdFilterSchema().nullish(),
    name: StringFilterSchema().nullish(),
    updatedAt: DateFilterSchema().nullish()
  })
}

export function SecurityAccountFilterSchema(): z.ZodObject<Properties<SecurityAccountFilter>> {
  return z.object({
    accountType: IntFilterSchema().nullish(),
    cashAccount: CashAccountFilterSchema().nullish(),
    cashAccountId: IdFilterSchema().nullish(),
    createdAt: DateFilterSchema().nullish(),
    currency: StringFilterSchema().nullish(),
    id: IdFilterSchema().nullish(),
    name: StringFilterSchema().nullish(),
    number: StringFilterSchema().nullish(),
    secApprovalStatus: IntFilterSchema().nullish(),
    securityAccountType: IntFilterSchema().nullish(),
    status: IntFilterSchema().nullish(),
    updatedAt: DateFilterSchema().nullish(),
    user: UserFilterSchema().nullish(),
    userId: IdFilterSchema().nullish()
  })
}

export function SortFilterSchema(): z.ZodObject<Properties<SortFilter>> {
  return z.object({
    direction: SortDirectionSchema.nullish(),
    field: z.string()
  })
}

export function StateFilterSchema(): z.ZodObject<Properties<StateFilter>> {
  return z.object({
    code: StringFilterSchema().nullish(),
    country: CountryFilterSchema().nullish(),
    countryId: IdFilterSchema().nullish(),
    createdAt: DateFilterSchema().nullish(),
    id: IdFilterSchema().nullish(),
    name: StringFilterSchema().nullish(),
    updatedAt: DateFilterSchema().nullish()
  })
}

export function StringFilterSchema(): z.ZodObject<Properties<StringFilter>> {
  return z.object({
    blank: z.boolean().nullish(),
    cont: z.string().nullish(),
    end: z.string().nullish(),
    eq: z.string().nullish(),
    in: z.array(z.string()).nullish(),
    notEq: z.string().nullish(),
    notIn: z.array(z.string()).nullish(),
    notNull: z.boolean().nullish(),
    null: z.boolean().nullish(),
    start: z.string().nullish()
  })
}

export function TickerFilterSchema(): z.ZodObject<Properties<TickerFilter>> {
  return z.object({
    createdAt: DateFilterSchema().nullish(),
    exchange: StringFilterSchema().nullish(),
    high52week: IntFilterSchema().nullish(),
    id: IdFilterSchema().nullish(),
    key: StringFilterSchema().nullish(),
    lastPrice: IntFilterSchema().nullish(),
    low52week: IntFilterSchema().nullish(),
    name: StringFilterSchema().nullish(),
    symbol: StringFilterSchema().nullish(),
    symbolOrName: StringFilterSchema().nullish(),
    updatedAt: DateFilterSchema().nullish(),
    volume: IntFilterSchema().nullish()
  })
}

export function UserFilterSchema(): z.ZodObject<Properties<UserFilter>> {
  return z.object({
    citizenIdNumber: StringFilterSchema().nullish(),
    civilId: StringFilterSchema().nullish(),
    confirmed: BoolFilterSchema().nullish(),
    confirmedAt: DateFilterSchema().nullish(),
    createdAt: DateFilterSchema().nullish(),
    email: StringFilterSchema().nullish(),
    firstName: StringFilterSchema().nullish(),
    fullName: StringFilterSchema().nullish(),
    gender: EnumStringFilterSchema().nullish(),
    id: IdFilterSchema().nullish(),
    isCompany: BoolFilterSchema().nullish(),
    isSpecial: BoolFilterSchema().nullish(),
    lastName: StringFilterSchema().nullish(),
    number: StringFilterSchema().nullish(),
    phone: StringFilterSchema().nullish(),
    status: EnumStringFilterSchema().nullish(),
    updatedAt: DateFilterSchema().nullish(),
    username: StringFilterSchema().nullish()
  })
}

export function WatchlistFilterSchema(): z.ZodObject<Properties<WatchlistFilter>> {
  return z.object({
    createdAt: DateFilterSchema().nullish(),
    id: IdFilterSchema().nullish(),
    ticker: TickerFilterSchema().nullish(),
    updatedAt: DateFilterSchema().nullish()
  })
}

export function AccountDepositInputSchema(): z.ZodObject<Properties<AccountDepositInput>> {
  return z.object({
    accountNumber: z.string(),
    amount: z.number(),
    clientMutationId: z.string().nullish(),
    currency: z.string().nullish()
  })
}

export function AccountWithdrawInputSchema(): z.ZodObject<Properties<AccountWithdrawInput>> {
  return z.object({
    accountNumber: z.string(),
    amount: z.number(),
    clientMutationId: z.string().nullish(),
    currency: z.string().nullish()
  })
}

export function AssertionPasskeyInputSchema(): z.ZodObject<Properties<AssertionPasskeyInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    username: z.string().nullish()
  })
}

export function BankCgwCreateInputSchema(): z.ZodObject<Properties<BankCgwCreateInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    isCredit: z.boolean().nullish(),
    minBalance: z.number().nullish(),
    name: z.string(),
    preferences: z.any().nullish(),
    status: BankCgwStatusSchema.nullish(),
    transferAccount: z.string(),
    transferPassword: z.string(),
    transferUsername: z.string(),
    type: z.string()
  })
}

export function BankCgwStatementsInputSchema(): z.ZodObject<Properties<BankCgwStatementsInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    id: z.string(),
    params: z.any().nullish()
  })
}

export function BankCgwUpdateInputSchema(): z.ZodObject<Properties<BankCgwUpdateInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    id: z.string(),
    isCredit: z.boolean().nullish(),
    minBalance: z.number().nullish(),
    name: z.string().nullish(),
    preferences: z.any().nullish(),
    status: BankCgwStatusSchema.nullish(),
    transferAccount: z.string().nullish(),
    transferPassword: z.string().nullish(),
    transferUsername: z.string().nullish(),
    type: z.string().nullish()
  })
}

export function CancelOrderInputSchema(): z.ZodObject<Properties<CancelOrderInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    id: z.string()
  })
}

export function ChangePasswordInputSchema(): z.ZodObject<Properties<ChangePasswordInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    currentPassword: z.string(),
    id: z.string().nullish(),
    password: z.string(),
    passwordConfirmation: z.string()
  })
}

export function CheckAccountNameInputSchema(): z.ZodObject<Properties<CheckAccountNameInput>> {
  return z.object({
    accountNumber: z.string(),
    bankCode: z.string().nullish(),
    clientMutationId: z.string().nullish(),
    ownerType: z.string().nullish()
  })
}

export function ConfirmableConfirmInputSchema(): z.ZodObject<Properties<ConfirmableConfirmInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    id: z.string(),
    token: z.string()
  })
}

export function ConfirmableResendInputSchema(): z.ZodObject<Properties<ConfirmableResendInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    id: z.string()
  })
}

export function CreateAddressInputSchema(): z.ZodObject<Properties<CreateAddressInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    detail: z.lazy(() => AddressInputSchema())
  })
}

export function CreateBankAccountInputSchema(): z.ZodObject<Properties<CreateBankAccountInput>> {
  return z.object({
    bankId: z.string(),
    clientMutationId: z.string().nullish(),
    currency: z.string().nullish(),
    isActive: z.boolean().nullish(),
    isDefault: z.boolean().nullish(),
    name: z.string(),
    number: z.string(),
    ownerId: z.string().nullish(),
    position: z.number().nullish()
  })
}

export function CreateBankInputSchema(): z.ZodObject<Properties<CreateBankInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    code: z.string(),
    icon: z.any().nullish(),
    isActive: z.boolean().nullish(),
    name: z.string(),
    preferences: z.any().nullish(),
    swiftCode: z.string().nullish()
  })
}

export function CreateKycFinancialInputSchema(): z.ZodObject<Properties<CreateKycFinancialInput>> {
  return z.object({
    annualIncomeBracket: z.string(),
    clientMutationId: z.string().nullish(),
    expectedTradingVolume: z.string(),
    investmentExperience: z.string(),
    investmentObjective: z.string(),
    liquidAssets: z.string().nullish(),
    netWorthBracket: z.string(),
    primaryIncomeSource: z.string(),
    riskTolerance: z.string()
  })
}

export function CreateNoteInputSchema(): z.ZodObject<Properties<CreateNoteInput>> {
  return z.object({
    body: z.string(),
    clientMutationId: z.string().nullish(),
    metadata: z.any().nullish(),
    subjectId: z.string()
  })
}

export function CreatePasskeyInputSchema(): z.ZodObject<Properties<CreatePasskeyInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    credential: z.any(),
    label: z.string().nullish()
  })
}

export function CreateRelatedPartyInputSchema(): z.ZodObject<Properties<CreateRelatedPartyInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    country: z.string(),
    documentUrl: z.string().nullish(),
    name: z.string(),
    relationType: z.string()
  })
}

export function CreateSignedIdInputSchema(): z.ZodObject<Properties<CreateSignedIdInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    expiresIn: z.number().default(300).nullish(),
    id: z.string().nullish(),
    purpose: z.string()
  })
}

export function CreateTaxInputSchema(): z.ZodObject<Properties<CreateTaxInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    countryOfTaxResidence: z.string(),
    taxIdentificationNumber: z.string()
  })
}

export function DeleteAddressInputSchema(): z.ZodObject<Properties<DeleteAddressInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    id: z.string()
  })
}

export function DeleteBankAccountInputSchema(): z.ZodObject<Properties<DeleteBankAccountInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    id: z.string()
  })
}

export function DeleteDeviceInputSchema(): z.ZodObject<Properties<DeleteDeviceInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    id: z.string()
  })
}

export function DeleteEmailInputSchema(): z.ZodObject<Properties<DeleteEmailInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    id: z.string()
  })
}

export function DeleteNoteInputSchema(): z.ZodObject<Properties<DeleteNoteInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    id: z.string()
  })
}

export function DeletePasskeyInputSchema(): z.ZodObject<Properties<DeletePasskeyInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    id: z.string()
  })
}

export function DeletePhoneInputSchema(): z.ZodObject<Properties<DeletePhoneInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    id: z.string()
  })
}

export function DeleteUserInputSchema(): z.ZodObject<Properties<DeleteUserInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    id: z.string().nullish(),
    password: z.string().nullish()
  })
}

export function DisableTotpInputSchema(): z.ZodObject<Properties<DisableTotpInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    token: z.string()
  })
}

export function EnableTotpInputSchema(): z.ZodObject<Properties<EnableTotpInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    token: z.string()
  })
}

export function ForgetPasswordInputSchema(): z.ZodObject<Properties<ForgetPasswordInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    identity: z.string()
  })
}

export function ProvideKycConsentInputSchema(): z.ZodObject<Properties<ProvideKycConsentInput>> {
  return z.object({
    accepted: z.boolean(),
    clientMutationId: z.string().nullish(),
    consentType: z.string(),
    ipAddress: z.string().nullish(),
    signatureUrl: z.string().nullish(),
    userAgent: z.string().nullish()
  })
}

export function RegisterByEmailInputSchema(): z.ZodObject<Properties<RegisterByEmailInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    email: z.string().email().nullish(),
    id: z.string().nullish()
  })
}

export function RegisterByMobileInputSchema(): z.ZodObject<Properties<RegisterByMobileInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    id: z.string().nullish(),
    phone: z
      .string()
      .regex(/^(\+\d{1,3}[- ]?)?\d{8,12}$/)
      .nullish()
  })
}

export function RegisterByPasswordInputSchema(): z.ZodObject<Properties<RegisterByPasswordInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    emailSid: z.string().nullish(),
    locale: z.string().nullish(),
    password: z.string(),
    passwordConfirmation: z.string(),
    phoneSid: z.string()
  })
}

export function RemoveFromWatchListInputSchema(): z.ZodObject<Properties<RemoveFromWatchListInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    id: z.string()
  })
}

export function RequestPasskeyInputSchema(): z.ZodObject<Properties<RequestPasskeyInput>> {
  return z.object({
    clientMutationId: z.string().nullish()
  })
}

export function RequestTotpInputSchema(): z.ZodObject<Properties<RequestTotpInput>> {
  return z.object({
    clientMutationId: z.string().nullish()
  })
}

export function ResetPasswordInputSchema(): z.ZodObject<Properties<ResetPasswordInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    confirmationId: z.string(),
    password: z.string(),
    passwordConfirmation: z.string()
  })
}

export function ToggleWatchListInputSchema(): z.ZodObject<Properties<ToggleWatchListInput>> {
  return z.object({
    add: z.boolean().nullish(),
    clientMutationId: z.string().nullish(),
    key: z.string()
  })
}

export function UpdateAddressInputSchema(): z.ZodObject<Properties<UpdateAddressInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    detail: z.lazy(() => AddressInputSchema()),
    id: z.string()
  })
}

export function UpdateBankAccountInputSchema(): z.ZodObject<Properties<UpdateBankAccountInput>> {
  return z.object({
    bankId: z.string().nullish(),
    clientMutationId: z.string().nullish(),
    currency: z.string().nullish(),
    id: z.string(),
    isActive: z.boolean().nullish(),
    isDefault: z.boolean().nullish(),
    name: z.string().nullish(),
    number: z.string().nullish(),
    ownerId: z.string().nullish(),
    ownerType: z.string().nullish(),
    position: z.number().nullish(),
    preferences: z.any().nullish()
  })
}

export function UpdateBankInputSchema(): z.ZodObject<Properties<UpdateBankInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    code: z.string().nullish(),
    icon: z.any().nullish(),
    id: z.string(),
    isActive: z.boolean().nullish(),
    name: z.string().nullish(),
    preferences: z.any().nullish(),
    swiftCode: z.string().nullish()
  })
}

export function UpdateDeviceInputSchema(): z.ZodObject<Properties<UpdateDeviceInput>> {
  return z.object({
    active: z.boolean().default(true).nullish(),
    clientMutationId: z.string().nullish(),
    deviceId: z.string(),
    id: z.string().nullish(),
    pin: z.string().nullish(),
    pushToken: z.any().nullish()
  })
}

export function UpdateKycProfileInputSchema(): z.ZodObject<Properties<UpdateKycProfileInput>> {
  return z.object({
    address: z.lazy(() => AddressInputSchema().nullish()),
    birthday: z.string().date().nullish(),
    citizenIdNumber: z
      .string()
      .regex(/^[АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЫЬЭЮЯ]{2}\d{8}$/)
      .nullish(),
    citizenshipId: z.string().nullish(),
    civilId: z.string().nullish(),
    clientMutationId: z.string().nullish(),
    drivingLicense: z.string().nullish(),
    familyName: z.string().nullish(),
    firstName: z.string().nullish(),
    gender: z.string().nullish(),
    lastName: z.string().nullish(),
    middleName: z.string().nullish(),
    nationalityId: z.string().nullish(),
    passportNumber: z.string().nullish()
  })
}

export function UpdateNoteInputSchema(): z.ZodObject<Properties<UpdateNoteInput>> {
  return z.object({
    body: z.string(),
    clientMutationId: z.string().nullish(),
    id: z.string()
  })
}

export function UpdatePasskeyInputSchema(): z.ZodObject<Properties<UpdatePasskeyInput>> {
  return z.object({
    clientMutationId: z.string().nullish(),
    id: z.string(),
    isActive: z.boolean().nullish(),
    label: z.string().nullish()
  })
}

export function UpdateUserInputSchema(): z.ZodObject<Properties<UpdateUserInput>> {
  return z.object({
    auditComment: z.string().nullish(),
    avatar: z.any().nullish(),
    clientMutationId: z.string().nullish(),
    email: z.string().email().nullish(),
    id: z.string().nullish(),
    language: z.string().nullish(),
    level: z.string().nullish(),
    note: z.string().nullish(),
    phone: z
      .string()
      .regex(/^(\+\d{1,3}[- ]?)?\d{8,12}$/)
      .nullish(),
    status: z.number().nullish(),
    username: z.string().nullish()
  })
}

export function UploadKycDocumentInputSchema(): z.ZodObject<Properties<UploadKycDocumentInput>> {
  return z.object({
    backFile: z.any().nullish(),
    clientMutationId: z.string().nullish(),
    documentNumber: z.string().nullish(),
    documentType: z.string(),
    expiryDate: z.string().date().nullish(),
    frontFile: z.any(),
    issueDate: z.string().date().nullish(),
    issuingCountry: z.string().nullish()
  })
}
