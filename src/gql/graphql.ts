export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** Email address that accepts a valid email format */
  Email: { input: string; output: string }
  /** An ISO 8601-encoded date */
  ISO8601Date: { input: string; output: string }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any }
  /** Represents untyped JSON */
  JSON: { input: any; output: any }
  /** Phone number that accepts a valid phone format */
  Phone: { input: string; output: string }
  /** Mongolian register number that accepts a valid format */
  RegisterNumber: { input: any; output: any }
  Upload: { input: any; output: any }
}

export type AccountFilter = {
  commissionType?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateFilter>
  custodian?: InputMaybe<BoolFilter>
  exchange?: InputMaybe<StringFilter>
  exchangeAccountId?: InputMaybe<StringFilter>
  exchangeAccountType?: InputMaybe<IntFilter>
  feedLevel?: InputMaybe<IntFilter>
  id?: InputMaybe<IdFilter>
  isPriceEnabled?: InputMaybe<BoolFilter>
  securityAccount?: InputMaybe<SecurityAccountFilter>
  securityAccountId?: InputMaybe<IdFilter>
  status?: InputMaybe<IntFilter>
  tradingEnabled?: InputMaybe<BoolFilter>
  updatedAt?: InputMaybe<DateFilter>
  user?: InputMaybe<UserFilter>
  userId?: InputMaybe<IdFilter>
}

/** Account owner type */
export type AccountOwner = User

export type Address = BaseModelInterface &
  Node & {
    __typename?: 'Address'
    address?: Maybe<Scalars['String']['output']>
    apartment?: Maybe<Scalars['String']['output']>
    city?: Maybe<Scalars['String']['output']>
    company?: Maybe<Scalars['String']['output']>
    coordinate?: Maybe<Scalars['JSON']['output']>
    country?: Maybe<Country>
    countryId?: Maybe<Scalars['ID']['output']>
    createdAt: Scalars['ISO8601DateTime']['output']
    district?: Maybe<District>
    districtId?: Maybe<Scalars['ID']['output']>
    districtName?: Maybe<Scalars['String']['output']>
    errors: Array<ValidationError>
    firstName?: Maybe<Scalars['String']['output']>
    /** ID of the object. */
    id: Scalars['ID']['output']
    instructions?: Maybe<Scalars['String']['output']>
    lastName?: Maybe<Scalars['String']['output']>
    latitude?: Maybe<Scalars['String']['output']>
    longitude?: Maybe<Scalars['String']['output']>
    ownerId: Scalars['ID']['output']
    ownerType?: Maybe<Scalars['String']['output']>
    phone?: Maybe<Scalars['Phone']['output']>
    postalCode?: Maybe<Scalars['String']['output']>
    preferences?: Maybe<Scalars['String']['output']>
    quarter?: Maybe<Quarter>
    quarterId?: Maybe<Scalars['ID']['output']>
    quarterName?: Maybe<Scalars['String']['output']>
    state?: Maybe<State>
    stateId?: Maybe<Scalars['ID']['output']>
    street?: Maybe<Scalars['String']['output']>
    updatedAt: Scalars['ISO8601DateTime']['output']
    village?: Maybe<Scalars['String']['output']>
    what3words?: Maybe<Scalars['String']['output']>
    zipCode?: Maybe<Scalars['String']['output']>
  }

/** The connection type for Address. */
export type AddressConnection = {
  __typename?: 'AddressConnection'
  /** A list of edges. */
  edges: Array<AddressEdge>
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>
  /** A list of nodes. */
  nodes: Array<Address>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  sum: Scalars['Float']['output']
  totalCount: Scalars['Int']['output']
}

/** The connection type for Address. */
export type AddressConnectionMetricsArgs = {
  dateField: Scalars['String']['input']
  granularity: MetricGranularity
  sumField?: InputMaybe<Scalars['String']['input']>
}

/** The connection type for Address. */
export type AddressConnectionSumArgs = {
  field: Scalars['String']['input']
}

/** An edge in a connection. */
export type AddressEdge = {
  __typename?: 'AddressEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Address
}

export type AddressInput = {
  address?: InputMaybe<Scalars['String']['input']>
  apartment?: InputMaybe<Scalars['String']['input']>
  city?: InputMaybe<Scalars['String']['input']>
  company?: InputMaybe<Scalars['String']['input']>
  countryId?: InputMaybe<Scalars['ID']['input']>
  districtId?: InputMaybe<Scalars['ID']['input']>
  districtName?: InputMaybe<Scalars['String']['input']>
  firstName?: InputMaybe<Scalars['String']['input']>
  /** ID */
  id?: InputMaybe<Scalars['ID']['input']>
  instructions?: InputMaybe<Scalars['String']['input']>
  lastName?: InputMaybe<Scalars['String']['input']>
  latitude?: InputMaybe<Scalars['String']['input']>
  longitude?: InputMaybe<Scalars['String']['input']>
  phone?: InputMaybe<Scalars['Phone']['input']>
  postalCode?: InputMaybe<Scalars['String']['input']>
  quarterId?: InputMaybe<Scalars['ID']['input']>
  quarterName?: InputMaybe<Scalars['String']['input']>
  stateId?: InputMaybe<Scalars['ID']['input']>
  street?: InputMaybe<Scalars['String']['input']>
  village?: InputMaybe<Scalars['String']['input']>
  what3words?: InputMaybe<Scalars['String']['input']>
  zipCode?: InputMaybe<Scalars['String']['input']>
}

export type AmlCheck = {
  __typename?: 'AmlCheck'
  checkType: Scalars['String']['output']
  checkedAt: Scalars['ISO8601DateTime']['output']
  createdAt: Scalars['ISO8601DateTime']['output']
  details?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  profile: Profile
  referenceId?: Maybe<Scalars['String']['output']>
  result: Scalars['String']['output']
  riskAssessment: RiskAssessment
  updatedAt: Scalars['ISO8601DateTime']['output']
}

export type Article = BaseModelInterface &
  Node & {
    __typename?: 'Article'
    caption?: Maybe<Scalars['String']['output']>
    category?: Maybe<Array<Scalars['String']['output']>>
    countryList?: Maybe<Array<Scalars['String']['output']>>
    createdAt: Scalars['ISO8601DateTime']['output']
    errors: Array<ValidationError>
    exchanges?: Maybe<Array<Scalars['String']['output']>>
    headline?: Maybe<Scalars['String']['output']>
    /** ID of the object. */
    id: Scalars['ID']['output']
    imageUrl?: Maybe<Scalars['String']['output']>
    key: Scalars['String']['output']
    language?: Maybe<Scalars['String']['output']>
    lastUpdatedOn?: Maybe<Scalars['ISO8601DateTime']['output']>
    metadata: Scalars['JSON']['output']
    sourceText?: Maybe<Scalars['String']['output']>
    summary?: Maybe<Scalars['String']['output']>
    symbols?: Maybe<Array<Scalars['String']['output']>>
    updatedAt: Scalars['ISO8601DateTime']['output']
    url?: Maybe<Scalars['String']['output']>
  }

/** The connection type for Article. */
export type ArticleConnection = {
  __typename?: 'ArticleConnection'
  /** A list of edges. */
  edges: Array<ArticleEdge>
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>
  /** A list of nodes. */
  nodes: Array<Article>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  sum: Scalars['Float']['output']
  totalCount: Scalars['Int']['output']
}

/** The connection type for Article. */
export type ArticleConnectionMetricsArgs = {
  dateField: Scalars['String']['input']
  granularity: MetricGranularity
  sumField?: InputMaybe<Scalars['String']['input']>
}

/** The connection type for Article. */
export type ArticleConnectionSumArgs = {
  field: Scalars['String']['input']
}

/** An edge in a connection. */
export type ArticleEdge = {
  __typename?: 'ArticleEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Article
}

export type ArticleFilter = {
  caption?: InputMaybe<StringFilter>
  category?: InputMaybe<StringFilter>
  countryList?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateFilter>
  headline?: InputMaybe<StringFilter>
  id?: InputMaybe<IdFilter>
  key?: InputMaybe<StringFilter>
  language?: InputMaybe<StringFilter>
  sourceText?: InputMaybe<StringFilter>
  summary?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateFilter>
  withCategory?: InputMaybe<Scalars['String']['input']>
  withExchange?: InputMaybe<Scalars['String']['input']>
  withSymbol?: InputMaybe<Scalars['String']['input']>
}

export type Bank = BaseModelInterface &
  Node & {
    __typename?: 'Bank'
    /** Returns list of bank accounts */
    accounts: BankAccountConnection
    code: Scalars['String']['output']
    createdAt: Scalars['ISO8601DateTime']['output']
    errors: Array<ValidationError>
    icon?: Maybe<Image>
    /** ID of the object. */
    id: Scalars['ID']['output']
    isActive: Scalars['Boolean']['output']
    name: Scalars['String']['output']
    preferences?: Maybe<Scalars['JSON']['output']>
    swiftCode?: Maybe<Scalars['String']['output']>
    updatedAt: Scalars['ISO8601DateTime']['output']
  }

export type BankAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<BankAccountFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type BankAccount = BaseModelInterface &
  Node & {
    __typename?: 'BankAccount'
    bank: Bank
    bankId: Scalars['ID']['output']
    createdAt: Scalars['ISO8601DateTime']['output']
    currency?: Maybe<Scalars['String']['output']>
    errors: Array<ValidationError>
    /** ID of the object. */
    id: Scalars['ID']['output']
    isActive?: Maybe<Scalars['Boolean']['output']>
    isDefault?: Maybe<Scalars['Boolean']['output']>
    isVerified?: Maybe<Scalars['Boolean']['output']>
    name: Scalars['String']['output']
    number: Scalars['String']['output']
    owner: AccountOwner
    ownerId: Scalars['ID']['output']
    ownerType: Scalars['String']['output']
    position?: Maybe<Scalars['Int']['output']>
    preferences?: Maybe<Scalars['JSON']['output']>
    updatedAt: Scalars['ISO8601DateTime']['output']
  }

/** The connection type for BankAccount. */
export type BankAccountConnection = {
  __typename?: 'BankAccountConnection'
  /** A list of edges. */
  edges: Array<BankAccountEdge>
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>
  /** A list of nodes. */
  nodes: Array<BankAccount>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  sum: Scalars['Float']['output']
  totalCount: Scalars['Int']['output']
}

/** The connection type for BankAccount. */
export type BankAccountConnectionMetricsArgs = {
  dateField: Scalars['String']['input']
  granularity: MetricGranularity
  sumField?: InputMaybe<Scalars['String']['input']>
}

/** The connection type for BankAccount. */
export type BankAccountConnectionSumArgs = {
  field: Scalars['String']['input']
}

/** An edge in a connection. */
export type BankAccountEdge = {
  __typename?: 'BankAccountEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: BankAccount
}

export type BankAccountFilter = {
  bank?: InputMaybe<BankFilter>
  bankId?: InputMaybe<IdFilter>
  createdAt?: InputMaybe<DateFilter>
  currency?: InputMaybe<StringFilter>
  id?: InputMaybe<IdFilter>
  isActive?: InputMaybe<BoolFilter>
  isDefault?: InputMaybe<BoolFilter>
  name?: InputMaybe<StringFilter>
  number?: InputMaybe<StringFilter>
  ownerId?: InputMaybe<IdFilter>
  ownerType?: InputMaybe<StringFilter>
  position?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateFilter>
  user?: InputMaybe<UserFilter>
}

export enum BankCgwStatus {
  /** active */
  Active = 'active',
  /** failed */
  Failed = 'failed',
  /** inactive */
  Inactive = 'inactive',
  /** out_of_balance */
  OutOfBalance = 'out_of_balance'
}

export type BankFilter = {
  code?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateFilter>
  id?: InputMaybe<IdFilter>
  isActive?: InputMaybe<BoolFilter>
  name?: InputMaybe<StringFilter>
  swiftCode?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateFilter>
}

export type BankTransaction = BaseModelInterface &
  Node & {
    __typename?: 'BankTransaction'
    account?: Maybe<Scalars['String']['output']>
    amount?: Maybe<Scalars['Float']['output']>
    createdAt: Scalars['ISO8601DateTime']['output']
    customDescription?: Maybe<Scalars['String']['output']>
    customerAccount?: Maybe<Scalars['String']['output']>
    customerBank?: Maybe<Scalars['String']['output']>
    customerName?: Maybe<Scalars['String']['output']>
    description?: Maybe<Scalars['String']['output']>
    errors: Array<ValidationError>
    /** ID of the object. */
    id: Scalars['ID']['output']
    number?: Maybe<Scalars['String']['output']>
    preferences?: Maybe<Scalars['JSON']['output']>
    ref?: Maybe<Scalars['String']['output']>
    targetId?: Maybe<Scalars['Int']['output']>
    targetType?: Maybe<Scalars['String']['output']>
    transactionDate?: Maybe<Scalars['ISO8601DateTime']['output']>
    typeCode?: Maybe<BankTransactionTypeCode>
    updatedAt: Scalars['ISO8601DateTime']['output']
  }

/** The connection type for BankTransaction. */
export type BankTransactionConnection = {
  __typename?: 'BankTransactionConnection'
  /** A list of edges. */
  edges: Array<BankTransactionEdge>
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>
  /** A list of nodes. */
  nodes: Array<BankTransaction>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  sum: Scalars['Float']['output']
  totalCount: Scalars['Int']['output']
}

/** The connection type for BankTransaction. */
export type BankTransactionConnectionMetricsArgs = {
  dateField: Scalars['String']['input']
  granularity: MetricGranularity
  sumField?: InputMaybe<Scalars['String']['input']>
}

/** The connection type for BankTransaction. */
export type BankTransactionConnectionSumArgs = {
  field: Scalars['String']['input']
}

/** An edge in a connection. */
export type BankTransactionEdge = {
  __typename?: 'BankTransactionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: BankTransaction
}

export type BankTransactionFilter = {
  account?: InputMaybe<StringFilter>
  amount?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateFilter>
  customDescription?: InputMaybe<StringFilter>
  customerAccount?: InputMaybe<StringFilter>
  customerBank?: InputMaybe<StringFilter>
  customerName?: InputMaybe<StringFilter>
  description?: InputMaybe<StringFilter>
  id?: InputMaybe<IdFilter>
  ref?: InputMaybe<StringFilter>
  targetId?: InputMaybe<IntFilter>
  targetType?: InputMaybe<StringFilter>
  transactionDate?: InputMaybe<DateFilter>
  typeCode?: InputMaybe<EnumStringFilter>
  updatedAt?: InputMaybe<DateFilter>
}

export type BankTransfer = BaseModelInterface &
  Node & {
    __typename?: 'BankTransfer'
    accountName?: Maybe<Scalars['String']['output']>
    accountNumber?: Maybe<Scalars['String']['output']>
    amount?: Maybe<Scalars['Float']['output']>
    bankCode?: Maybe<Scalars['String']['output']>
    cgw?: Maybe<Cgw>
    cgwId?: Maybe<Scalars['ID']['output']>
    createdAt: Scalars['ISO8601DateTime']['output']
    currency?: Maybe<Scalars['String']['output']>
    description?: Maybe<Scalars['String']['output']>
    errors: Array<ValidationError>
    /** ID of the object. */
    id: Scalars['ID']['output']
    number: Scalars['String']['output']
    preferences?: Maybe<Scalars['JSON']['output']>
    response?: Maybe<Scalars['JSON']['output']>
    status?: Maybe<BankTransferStatus>
    targetId?: Maybe<Scalars['Int']['output']>
    targetType?: Maybe<Scalars['String']['output']>
    updatedAt: Scalars['ISO8601DateTime']['output']
  }

/** The connection type for BankTransfer. */
export type BankTransferConnection = {
  __typename?: 'BankTransferConnection'
  /** A list of edges. */
  edges: Array<BankTransferEdge>
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>
  /** A list of nodes. */
  nodes: Array<BankTransfer>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  sum: Scalars['Float']['output']
  totalCount: Scalars['Int']['output']
}

/** The connection type for BankTransfer. */
export type BankTransferConnectionMetricsArgs = {
  dateField: Scalars['String']['input']
  granularity: MetricGranularity
  sumField?: InputMaybe<Scalars['String']['input']>
}

/** The connection type for BankTransfer. */
export type BankTransferConnectionSumArgs = {
  field: Scalars['String']['input']
}

/** An edge in a connection. */
export type BankTransferEdge = {
  __typename?: 'BankTransferEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: BankTransfer
}

export type BankTransferFilter = {
  accountName?: InputMaybe<StringFilter>
  accountNumber?: InputMaybe<StringFilter>
  amount?: InputMaybe<IntFilter>
  bankCode?: InputMaybe<StringFilter>
  cgwId?: InputMaybe<IdFilter>
  createdAt?: InputMaybe<DateFilter>
  currency?: InputMaybe<StringFilter>
  description?: InputMaybe<StringFilter>
  id?: InputMaybe<IdFilter>
  number?: InputMaybe<StringFilter>
  status?: InputMaybe<EnumStringFilter>
  targetId?: InputMaybe<IdFilter>
  targetType?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateFilter>
}

export enum BankTransferStatus {
  /** failed */
  Failed = 'failed',
  /** pending */
  Pending = 'pending',
  /** sending */
  Sending = 'sending',
  /** sent */
  Sent = 'sent'
}

/** An object with an ID. */
export type BaseModelInterface = {
  createdAt: Scalars['ISO8601DateTime']['output']
  errors: Array<ValidationError>
  /** ID of the object. */
  id: Scalars['ID']['output']
  updatedAt: Scalars['ISO8601DateTime']['output']
}

/** File attachment blob */
export type Blob = {
  __typename?: 'Blob'
  byteSize?: Maybe<Scalars['Int']['output']>
  checkSum?: Maybe<Scalars['String']['output']>
  contentType?: Maybe<Scalars['String']['output']>
  filename?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  key?: Maybe<Scalars['String']['output']>
  metadata?: Maybe<Scalars['JSON']['output']>
  serviceName?: Maybe<Scalars['String']['output']>
}

export type BoolFilter = {
  /** equals to */
  eq?: InputMaybe<Scalars['Boolean']['input']>
  /** not equals to */
  notEq?: InputMaybe<Scalars['Boolean']['input']>
  /** is null ? */
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  /** is null ? */
  null?: InputMaybe<Scalars['Boolean']['input']>
}

export type Cgw = BaseModelInterface &
  Node & {
    __typename?: 'CGW'
    balance?: Maybe<Scalars['Float']['output']>
    createdAt: Scalars['ISO8601DateTime']['output']
    errors: Array<ValidationError>
    /** ID of the object. */
    id: Scalars['ID']['output']
    isCredit: Scalars['Boolean']['output']
    minBalance?: Maybe<Scalars['Float']['output']>
    name: Scalars['String']['output']
    preferences?: Maybe<Scalars['JSON']['output']>
    status: BankCgwStatus
    transferAccount?: Maybe<Scalars['String']['output']>
    transferPassword?: Maybe<Scalars['String']['output']>
    transferUsername?: Maybe<Scalars['String']['output']>
    type: Scalars['String']['output']
    updatedAt: Scalars['ISO8601DateTime']['output']
  }

/** The connection type for CGW. */
export type CgwConnection = {
  __typename?: 'CGWConnection'
  /** A list of edges. */
  edges: Array<CgwEdge>
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>
  /** A list of nodes. */
  nodes: Array<Cgw>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  sum: Scalars['Float']['output']
  totalCount: Scalars['Int']['output']
}

/** The connection type for CGW. */
export type CgwConnectionMetricsArgs = {
  dateField: Scalars['String']['input']
  granularity: MetricGranularity
  sumField?: InputMaybe<Scalars['String']['input']>
}

/** The connection type for CGW. */
export type CgwConnectionSumArgs = {
  field: Scalars['String']['input']
}

/** An edge in a connection. */
export type CgwEdge = {
  __typename?: 'CGWEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Cgw
}

export type Card = BaseModelInterface &
  Node & {
    __typename?: 'Card'
    bank?: Maybe<Scalars['String']['output']>
    cardholder: Scalars['String']['output']
    createdAt: Scalars['ISO8601DateTime']['output']
    errors: Array<ValidationError>
    /** ID of the object. */
    id: Scalars['ID']['output']
    metadata?: Maybe<Scalars['JSON']['output']>
    number?: Maybe<Scalars['String']['output']>
    status: Scalars['String']['output']
    updatedAt: Scalars['ISO8601DateTime']['output']
  }

export type CashAccount = BaseModelInterface &
  Node & {
    __typename?: 'CashAccount'
    accountType: Scalars['String']['output']
    balance: Scalars['Float']['output']
    blockedAmount: Scalars['Float']['output']
    buyingPower: Scalars['Float']['output']
    cashAvailableForWithdraw: Scalars['Float']['output']
    createdAt: Scalars['ISO8601DateTime']['output']
    currency: Scalars['String']['output']
    dailyOdLimit: Scalars['Float']['output']
    dailyOdLimitEnabled: Scalars['Float']['output']
    data: Scalars['JSON']['output']
    dayMarginBlock: Scalars['Float']['output']
    dayMarginDue: Scalars['Float']['output']
    errors: Array<ValidationError>
    /** ID of the object. */
    id: Scalars['ID']['output']
    marginBlock: Scalars['Float']['output']
    marginDue: Scalars['Float']['output']
    metadata: Scalars['JSON']['output']
    name?: Maybe<Scalars['String']['output']>
    number: Scalars['String']['output']
    odLimit: Scalars['Float']['output']
    pendingDeposit: Scalars['Float']['output']
    pendingSettle: Scalars['Float']['output']
    pendingWithdraw: Scalars['Float']['output']
    secondaryTradingLimit: Scalars['Float']['output']
    securityAccounts: Array<SecurityAccount>
    status?: Maybe<Scalars['String']['output']>
    unsettledTransfers: Scalars['Float']['output']
    updatedAt: Scalars['ISO8601DateTime']['output']
    user: User
  }

/** The connection type for CashAccount. */
export type CashAccountConnection = {
  __typename?: 'CashAccountConnection'
  /** A list of edges. */
  edges: Array<CashAccountEdge>
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>
  /** A list of nodes. */
  nodes: Array<CashAccount>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  sum: Scalars['Float']['output']
  totalCount: Scalars['Int']['output']
}

/** The connection type for CashAccount. */
export type CashAccountConnectionMetricsArgs = {
  dateField: Scalars['String']['input']
  granularity: MetricGranularity
  sumField?: InputMaybe<Scalars['String']['input']>
}

/** The connection type for CashAccount. */
export type CashAccountConnectionSumArgs = {
  field: Scalars['String']['input']
}

/** An edge in a connection. */
export type CashAccountEdge = {
  __typename?: 'CashAccountEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: CashAccount
}

export type CashAccountFilter = {
  accountType?: InputMaybe<IntFilter>
  balance?: InputMaybe<IntFilter>
  blockedAmount?: InputMaybe<IntFilter>
  buyingPower?: InputMaybe<IntFilter>
  cashAvailableForWithdraw?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateFilter>
  currency?: InputMaybe<StringFilter>
  dailyOdLimit?: InputMaybe<IntFilter>
  dailyOdLimitEnabled?: InputMaybe<BoolFilter>
  dayMarginBlock?: InputMaybe<IntFilter>
  dayMarginDue?: InputMaybe<IntFilter>
  id?: InputMaybe<IdFilter>
  marginBlock?: InputMaybe<IntFilter>
  marginDue?: InputMaybe<IntFilter>
  number?: InputMaybe<StringFilter>
  odLimit?: InputMaybe<IntFilter>
  pendingDeposit?: InputMaybe<IntFilter>
  pendingSettle?: InputMaybe<IntFilter>
  pendingWithdraw?: InputMaybe<IntFilter>
  secondaryTradingLimit?: InputMaybe<IntFilter>
  status?: InputMaybe<IntFilter>
  unsettledTransfers?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateFilter>
  user?: InputMaybe<UserFilter>
  userId?: InputMaybe<IdFilter>
}

export type Consent = {
  __typename?: 'Consent'
  accepted: Scalars['Boolean']['output']
  acceptedAt?: Maybe<Scalars['ISO8601DateTime']['output']>
  consentType: Scalars['String']['output']
  createdAt: Scalars['ISO8601DateTime']['output']
  id: Scalars['ID']['output']
  ipAddress?: Maybe<Scalars['String']['output']>
  profile: Profile
  signatureUrl?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['ISO8601DateTime']['output']
  userAgent?: Maybe<Scalars['String']['output']>
}

export type Country = BaseModelInterface &
  Node &
  ZonableInterface & {
    __typename?: 'Country'
    createdAt: Scalars['ISO8601DateTime']['output']
    currency?: Maybe<Scalars['String']['output']>
    errors: Array<ValidationError>
    geojson?: Maybe<Scalars['JSON']['output']>
    /** ID of the object. */
    id: Scalars['ID']['output']
    iso?: Maybe<Scalars['String']['output']>
    iso3?: Maybe<Scalars['String']['output']>
    isoName?: Maybe<Scalars['String']['output']>
    isoNumeric?: Maybe<Scalars['Int']['output']>
    name: Scalars['String']['output']
    numCode?: Maybe<Scalars['Int']['output']>
    preferences?: Maybe<Scalars['JSON']['output']>
    states: Array<State>
    statesRequired: Scalars['Boolean']['output']
    updatedAt: Scalars['ISO8601DateTime']['output']
    zipCodeRequired: Scalars['Boolean']['output']
  }

export type CountryFilter = {
  createdAt?: InputMaybe<DateFilter>
  id?: InputMaybe<IdFilter>
  isoName?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateFilter>
}

export type DateFilter = {
  /** equals to */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Greater than */
  gt?: InputMaybe<Scalars['String']['input']>
  /** Greater than or equals */
  gteq?: InputMaybe<Scalars['String']['input']>
  /** Less than */
  lt?: InputMaybe<Scalars['String']['input']>
  /** Less than or equals */
  lteq?: InputMaybe<Scalars['String']['input']>
  /** not equals to */
  notEq?: InputMaybe<Scalars['String']['input']>
  /** is null ? */
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  /** is null ? */
  null?: InputMaybe<Scalars['Boolean']['input']>
}

export enum DeviceChannel {
  /** email */
  Email = 'email',
  /** phone */
  Phone = 'phone',
  /** viber */
  Viber = 'viber'
}

export type District = BaseModelInterface &
  Node &
  ZonableInterface & {
    __typename?: 'District'
    code?: Maybe<Scalars['String']['output']>
    createdAt: Scalars['ISO8601DateTime']['output']
    errors: Array<ValidationError>
    geojson?: Maybe<Scalars['JSON']['output']>
    /** ID of the object. */
    id: Scalars['ID']['output']
    name: Scalars['String']['output']
    preferences?: Maybe<Scalars['JSON']['output']>
    quarters: Array<Quarter>
    state?: Maybe<State>
    updatedAt: Scalars['ISO8601DateTime']['output']
  }

/** The connection type for District. */
export type DistrictConnection = {
  __typename?: 'DistrictConnection'
  /** A list of edges. */
  edges: Array<DistrictEdge>
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>
  /** A list of nodes. */
  nodes: Array<District>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  sum: Scalars['Float']['output']
  totalCount: Scalars['Int']['output']
}

/** The connection type for District. */
export type DistrictConnectionMetricsArgs = {
  dateField: Scalars['String']['input']
  granularity: MetricGranularity
  sumField?: InputMaybe<Scalars['String']['input']>
}

/** The connection type for District. */
export type DistrictConnectionSumArgs = {
  field: Scalars['String']['input']
}

/** An edge in a connection. */
export type DistrictEdge = {
  __typename?: 'DistrictEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: District
}

export type DistrictFilter = {
  code?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateFilter>
  id?: InputMaybe<IdFilter>
  name?: InputMaybe<StringFilter>
  stateId?: InputMaybe<IdFilter>
  updatedAt?: InputMaybe<DateFilter>
}

export type Document = BaseModelInterface &
  Node & {
    __typename?: 'Document'
    /** The back side of the document image (if applicable). */
    backFile?: Maybe<Blob>
    createdAt: Scalars['ISO8601DateTime']['output']
    documentNumber?: Maybe<Scalars['String']['output']>
    documentType: Scalars['String']['output']
    errors: Array<ValidationError>
    expiryDate?: Maybe<Scalars['ISO8601Date']['output']>
    /** The front side of the document image. */
    frontFile: Blob
    /** ID of the object. */
    id: Scalars['ID']['output']
    issueDate?: Maybe<Scalars['ISO8601Date']['output']>
    issuingCountry: Scalars['String']['output']
    profile: Profile
    rejectedAt?: Maybe<Scalars['ISO8601DateTime']['output']>
    rejectionReason?: Maybe<Scalars['String']['output']>
    status: Scalars['String']['output']
    updatedAt: Scalars['ISO8601DateTime']['output']
    verifiedAt?: Maybe<Scalars['ISO8601DateTime']['output']>
    verifiedBy?: Maybe<User>
  }

export type EnumStringFilter = {
  /** equals to */
  eq?: InputMaybe<Scalars['String']['input']>
  /** in: Matches any values in giver array */
  in?: InputMaybe<Array<Scalars['String']['input']>>
  /** not equals to */
  notEq?: InputMaybe<Scalars['String']['input']>
  /** in: Matches none of values in giver array */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  /** is null ? */
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  /** is null ? */
  null?: InputMaybe<Scalars['Boolean']['input']>
}

export type ExchangeAccount = BaseModelInterface &
  Node & {
    __typename?: 'ExchangeAccount'
    commissionType?: Maybe<Scalars['Int']['output']>
    createdAt: Scalars['ISO8601DateTime']['output']
    custodian?: Maybe<Scalars['String']['output']>
    data: Scalars['JSON']['output']
    errors: Array<ValidationError>
    exchange: Scalars['String']['output']
    exchangeAccountId?: Maybe<Scalars['Int']['output']>
    exchangeAccountType?: Maybe<Scalars['String']['output']>
    feedLevel?: Maybe<Scalars['Int']['output']>
    /** ID of the object. */
    id: Scalars['ID']['output']
    isPriceEnabled: Scalars['Boolean']['output']
    metadata: Scalars['JSON']['output']
    securityAccountId: Scalars['Int']['output']
    status?: Maybe<Scalars['String']['output']>
    tradingEnabled: Scalars['Boolean']['output']
    updatedAt: Scalars['ISO8601DateTime']['output']
    userId: Scalars['Int']['output']
  }

/** The connection type for ExchangeAccount. */
export type ExchangeAccountConnection = {
  __typename?: 'ExchangeAccountConnection'
  /** A list of edges. */
  edges: Array<ExchangeAccountEdge>
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>
  /** A list of nodes. */
  nodes: Array<ExchangeAccount>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  sum: Scalars['Float']['output']
  totalCount: Scalars['Int']['output']
}

/** The connection type for ExchangeAccount. */
export type ExchangeAccountConnectionMetricsArgs = {
  dateField: Scalars['String']['input']
  granularity: MetricGranularity
  sumField?: InputMaybe<Scalars['String']['input']>
}

/** The connection type for ExchangeAccount. */
export type ExchangeAccountConnectionSumArgs = {
  field: Scalars['String']['input']
}

/** An edge in a connection. */
export type ExchangeAccountEdge = {
  __typename?: 'ExchangeAccountEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: ExchangeAccount
}

export type Financial = BaseModelInterface &
  Node & {
    __typename?: 'Financial'
    annualIncomeBracket: Scalars['String']['output']
    createdAt: Scalars['ISO8601DateTime']['output']
    errors: Array<ValidationError>
    expectedTradingVolume: Scalars['String']['output']
    /** ID of the object. */
    id: Scalars['ID']['output']
    investmentExperience: Scalars['String']['output']
    investmentObjective: Scalars['String']['output']
    liquidAssets?: Maybe<Scalars['String']['output']>
    netWorthBracket: Scalars['String']['output']
    primaryIncomeSource: Scalars['String']['output']
    profile: Profile
    riskTolerance: Scalars['String']['output']
    status: Scalars['String']['output']
    updatedAt: Scalars['ISO8601DateTime']['output']
    year: Scalars['Int']['output']
  }

export enum Gender {
  /** female */
  Female = 'female',
  /** male */
  Male = 'male',
  /** undefined */
  Undefined = 'undefined'
}

export type IdFilter = {
  /** is null ? */
  blank?: InputMaybe<Scalars['Boolean']['input']>
  /** equals to */
  eq?: InputMaybe<Scalars['ID']['input']>
  /** Greater than */
  gt?: InputMaybe<Scalars['Int']['input']>
  /** Greater than or equals */
  gteq?: InputMaybe<Scalars['Int']['input']>
  /** in: Matches any values in giver array */
  in?: InputMaybe<Array<Scalars['ID']['input']>>
  /** Less than */
  lt?: InputMaybe<Scalars['Int']['input']>
  /** Less than or equals */
  lteq?: InputMaybe<Scalars['Int']['input']>
  /** not equals to */
  notEq?: InputMaybe<Scalars['ID']['input']>
  /** in: Matches none of values in giver array */
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>
  /** Starts with */
  start?: InputMaybe<Scalars['Int']['input']>
}

export type Image = {
  __typename?: 'Image'
  attachmentId?: Maybe<Scalars['ID']['output']>
  blob?: Maybe<Blob>
  contentType?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['ISO8601DateTime']['output']>
  fileName?: Maybe<Scalars['String']['output']>
  fileSize?: Maybe<Scalars['Float']['output']>
  id: Scalars['ID']['output']
  largeUrl: Scalars['String']['output']
  mediumUrl: Scalars['String']['output']
  metadata?: Maybe<Scalars['JSON']['output']>
  name?: Maybe<Scalars['String']['output']>
  signedId?: Maybe<Scalars['ID']['output']>
  thumbUrl: Scalars['String']['output']
  url: Scalars['String']['output']
}

export type ImageUrlArgs = {
  crop?: InputMaybe<Array<Scalars['Int']['input']>>
  format?: InputMaybe<Scalars['String']['input']>
  quality?: InputMaybe<Scalars['Int']['input']>
  resizeAndPad?: InputMaybe<Array<Scalars['Int']['input']>>
  resizeToFill?: InputMaybe<Array<Scalars['Int']['input']>>
  resizeToFit?: InputMaybe<Array<Scalars['Int']['input']>>
  resizeToLimit?: InputMaybe<Array<Scalars['Int']['input']>>
}

export type IntFilter = {
  /** is blank ? */
  blank?: InputMaybe<Scalars['Boolean']['input']>
  /** equals to */
  eq?: InputMaybe<Scalars['Float']['input']>
  /** Greater than */
  gt?: InputMaybe<Scalars['Float']['input']>
  /** Greater than or equals */
  gteq?: InputMaybe<Scalars['Float']['input']>
  /** in: Matches none of values in giver array */
  in?: InputMaybe<Array<Scalars['Float']['input']>>
  /** Less than */
  lt?: InputMaybe<Scalars['Float']['input']>
  /** Less than or equals */
  lteq?: InputMaybe<Scalars['Float']['input']>
  /** not equals to */
  notEq?: InputMaybe<Scalars['Float']['input']>
  /** in: Matches none of values in giver array */
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>
  /** is null ? */
  null?: InputMaybe<Scalars['Boolean']['input']>
}

export type JobStatus = BaseModelInterface &
  Node & {
    __typename?: 'JobStatus'
    arguments?: Maybe<Scalars['JSON']['output']>
    at?: Maybe<Scalars['Int']['output']>
    completedAt?: Maybe<Scalars['ISO8601DateTime']['output']>
    createdAt: Scalars['ISO8601DateTime']['output']
    errorMessage?: Maybe<Scalars['String']['output']>
    errors: Array<ValidationError>
    file?: Maybe<Scalars['String']['output']>
    /** ID of the object. */
    id: Scalars['ID']['output']
    jobId?: Maybe<Scalars['String']['output']>
    jobType?: Maybe<Scalars['String']['output']>
    message?: Maybe<Scalars['String']['output']>
    percentComplete?: Maybe<Scalars['Int']['output']>
    result?: Maybe<Scalars['JSON']['output']>
    startedAt?: Maybe<Scalars['ISO8601DateTime']['output']>
    status: Scalars['String']['output']
    total?: Maybe<Scalars['Int']['output']>
    updatedAt: Scalars['ISO8601DateTime']['output']
    userId?: Maybe<Scalars['ID']['output']>
  }

/** The connection type for JobStatus. */
export type JobStatusConnection = {
  __typename?: 'JobStatusConnection'
  /** A list of edges. */
  edges: Array<JobStatusEdge>
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>
  /** A list of nodes. */
  nodes: Array<JobStatus>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  sum: Scalars['Float']['output']
  totalCount: Scalars['Int']['output']
}

/** The connection type for JobStatus. */
export type JobStatusConnectionMetricsArgs = {
  dateField: Scalars['String']['input']
  granularity: MetricGranularity
  sumField?: InputMaybe<Scalars['String']['input']>
}

/** The connection type for JobStatus. */
export type JobStatusConnectionSumArgs = {
  field: Scalars['String']['input']
}

/** An edge in a connection. */
export type JobStatusEdge = {
  __typename?: 'JobStatusEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: JobStatus
}

export type JobStatusFilter = {
  createdAt?: InputMaybe<DateFilter>
  id?: InputMaybe<IdFilter>
  jobId?: InputMaybe<StringFilter>
  jobType?: InputMaybe<StringFilter>
  status?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateFilter>
  userId?: InputMaybe<IdFilter>
}

export type Market = BaseModelInterface &
  Node & {
    __typename?: 'Market'
    createdAt: Scalars['ISO8601DateTime']['output']
    currency: Scalars['String']['output']
    errors: Array<ValidationError>
    /** ID of the object. */
    id: Scalars['ID']['output']
    name: Scalars['String']['output']
    symbol: Scalars['String']['output']
    tifTypes?: Maybe<Scalars['String']['output']>
    updatedAt: Scalars['ISO8601DateTime']['output']
  }

export enum MetricGranularity {
  /** DAY */
  Day = 'day',
  /** HOUR */
  Hour = 'hour',
  /** MONTH */
  Month = 'month',
  /** WEEK */
  Week = 'week',
  /** YEAR */
  Year = 'year'
}

/** Generic response for a chart / metric */
export type MetricResponse = {
  __typename?: 'MetricResponse'
  label: Scalars['String']['output']
  value: Scalars['Float']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  accountDeposit?: Maybe<AccountDepositPayload>
  accountWithdraw?: Maybe<AccountWithdrawPayload>
  assertionPasskey?: Maybe<Scalars['JSON']['output']>
  /** Create bank CGW */
  bankCgwCreate?: Maybe<Cgw>
  /** Get statements from bank CGW */
  bankCgwStatements?: Maybe<Array<BankTransaction>>
  /** Update bank CGW */
  bankCgwUpdate?: Maybe<Cgw>
  cancelOrder?: Maybe<Order>
  /** Change password using current password */
  changePassword?: Maybe<User>
  /** Check account name by account number */
  checkAccountName?: Maybe<Scalars['String']['output']>
  /** Used to confirm email, phone, etc. If the confirmation is successful, it will return the signed id for approved objects */
  confirmableConfirm?: Maybe<Scalars['ID']['output']>
  /** Resend confirmation email, phone, etc. */
  confirmableResend?: Maybe<Scalars['ID']['output']>
  createAddress?: Maybe<Address>
  /** Create bank */
  createBank?: Maybe<Bank>
  /** Create bank account */
  createBankAccount?: Maybe<BankAccount>
  createKycFinancial?: Maybe<Financial>
  createNote?: Maybe<Note>
  createPasskey?: Maybe<Passkey>
  createRelatedParty?: Maybe<CreateRelatedPartyPayload>
  createSignedId?: Maybe<Scalars['ID']['output']>
  createTax?: Maybe<CreateTaxPayload>
  deleteAddress?: Maybe<Scalars['Boolean']['output']>
  /** Destroy bank account */
  deleteBankAccount?: Maybe<Scalars['Boolean']['output']>
  deleteDevice?: Maybe<Scalars['Boolean']['output']>
  deleteEmail?: Maybe<Scalars['Boolean']['output']>
  deleteNote?: Maybe<Scalars['Boolean']['output']>
  deletePasskey?: Maybe<Scalars['Boolean']['output']>
  deletePhone?: Maybe<Scalars['Boolean']['output']>
  /** Soft delete a user by clearing personal data and removing associated records */
  deleteUser?: Maybe<User>
  /** Disable TOTP for the user */
  disableTotp?: Maybe<User>
  /** Enable TOTP for the user */
  enableTotp?: Maybe<EnableTotpPayload>
  /** Password forget mutation */
  forgetPassword?: Maybe<Scalars['ID']['output']>
  placeEquity?: Maybe<Order>
  provideKycConsent?: Maybe<ProvideKycConsentPayload>
  /** Start registration flow by email. Returns phone confirmable id. If user already logged in it will add email to user */
  registerByEmail?: Maybe<Scalars['ID']['output']>
  /** Start registration flow by phone. Returns phone confirmable id. If user already logged in it will add phone to user */
  registerByMobile?: Maybe<Scalars['ID']['output']>
  /** Set password and create user */
  registerByPassword?: Maybe<User>
  removeFromWatchList?: Maybe<Scalars['Boolean']['output']>
  requestPasskey?: Maybe<Scalars['JSON']['output']>
  /** Request Enable TOTP for the user */
  requestTotp?: Maybe<RequestTotpPayload>
  /** Creates new password using confirmation */
  resetPassword?: Maybe<Scalars['ID']['output']>
  toggleWatchList?: Maybe<Watchlist>
  updateAddress?: Maybe<Address>
  /** Update bank */
  updateBank?: Maybe<Bank>
  /** Update bank account */
  updateBankAccount?: Maybe<BankAccount>
  updateDevice?: Maybe<UserDevice>
  updateKycProfile?: Maybe<Profile>
  updateNote?: Maybe<Note>
  updatePasskey?: Maybe<Passkey>
  /** Update user info */
  updateUser?: Maybe<User>
  /** Uploads a KYC document for the user. This mutation allows users to submit identity and verification documents as part of the KYC process. */
  uploadKycDocument?: Maybe<Document>
}

export type MutationAccountDepositArgs = {
  input: AccountDepositInput
}

export type MutationAccountWithdrawArgs = {
  input: AccountWithdrawInput
}

export type MutationAssertionPasskeyArgs = {
  input: AssertionPasskeyInput
}

export type MutationBankCgwCreateArgs = {
  input: BankCgwCreateInput
}

export type MutationBankCgwStatementsArgs = {
  input: BankCgwStatementsInput
}

export type MutationBankCgwUpdateArgs = {
  input: BankCgwUpdateInput
}

export type MutationCancelOrderArgs = {
  input: CancelOrderInput
}

export type MutationChangePasswordArgs = {
  input: ChangePasswordInput
}

export type MutationCheckAccountNameArgs = {
  input: CheckAccountNameInput
}

export type MutationConfirmableConfirmArgs = {
  input: ConfirmableConfirmInput
}

export type MutationConfirmableResendArgs = {
  input: ConfirmableResendInput
}

export type MutationCreateAddressArgs = {
  input: CreateAddressInput
}

export type MutationCreateBankArgs = {
  input: CreateBankInput
}

export type MutationCreateBankAccountArgs = {
  input: CreateBankAccountInput
}

export type MutationCreateKycFinancialArgs = {
  input: CreateKycFinancialInput
}

export type MutationCreateNoteArgs = {
  input: CreateNoteInput
}

export type MutationCreatePasskeyArgs = {
  input: CreatePasskeyInput
}

export type MutationCreateRelatedPartyArgs = {
  input: CreateRelatedPartyInput
}

export type MutationCreateSignedIdArgs = {
  input: CreateSignedIdInput
}

export type MutationCreateTaxArgs = {
  input: CreateTaxInput
}

export type MutationDeleteAddressArgs = {
  input: DeleteAddressInput
}

export type MutationDeleteBankAccountArgs = {
  input: DeleteBankAccountInput
}

export type MutationDeleteDeviceArgs = {
  input: DeleteDeviceInput
}

export type MutationDeleteEmailArgs = {
  input: DeleteEmailInput
}

export type MutationDeleteNoteArgs = {
  input: DeleteNoteInput
}

export type MutationDeletePasskeyArgs = {
  input: DeletePasskeyInput
}

export type MutationDeletePhoneArgs = {
  input: DeletePhoneInput
}

export type MutationDeleteUserArgs = {
  input: DeleteUserInput
}

export type MutationDisableTotpArgs = {
  input: DisableTotpInput
}

export type MutationEnableTotpArgs = {
  input: EnableTotpInput
}

export type MutationForgetPasswordArgs = {
  input: ForgetPasswordInput
}

export type MutationPlaceEquityArgs = {
  input: PlaceEquityInput
}

export type MutationProvideKycConsentArgs = {
  input: ProvideKycConsentInput
}

export type MutationRegisterByEmailArgs = {
  input: RegisterByEmailInput
}

export type MutationRegisterByMobileArgs = {
  input: RegisterByMobileInput
}

export type MutationRegisterByPasswordArgs = {
  input: RegisterByPasswordInput
}

export type MutationRemoveFromWatchListArgs = {
  input: RemoveFromWatchListInput
}

export type MutationRequestPasskeyArgs = {
  input: RequestPasskeyInput
}

export type MutationRequestTotpArgs = {
  input: RequestTotpInput
}

export type MutationResetPasswordArgs = {
  input: ResetPasswordInput
}

export type MutationToggleWatchListArgs = {
  input: ToggleWatchListInput
}

export type MutationUpdateAddressArgs = {
  input: UpdateAddressInput
}

export type MutationUpdateBankArgs = {
  input: UpdateBankInput
}

export type MutationUpdateBankAccountArgs = {
  input: UpdateBankAccountInput
}

export type MutationUpdateDeviceArgs = {
  input: UpdateDeviceInput
}

export type MutationUpdateKycProfileArgs = {
  input: UpdateKycProfileInput
}

export type MutationUpdateNoteArgs = {
  input: UpdateNoteInput
}

export type MutationUpdatePasskeyArgs = {
  input: UpdatePasskeyInput
}

export type MutationUpdateUserArgs = {
  input: UpdateUserInput
}

export type MutationUploadKycDocumentArgs = {
  input: UploadKycDocumentInput
}

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars['ID']['output']
}

export type Note = BaseModelInterface &
  Node & {
    __typename?: 'Note'
    author?: Maybe<User>
    body: Scalars['String']['output']
    createdAt: Scalars['ISO8601DateTime']['output']
    errors: Array<ValidationError>
    /** ID of the object. */
    id: Scalars['ID']['output']
    internalOnly: Scalars['Boolean']['output']
    metadata?: Maybe<Scalars['JSON']['output']>
    subject: Node
    updatedAt: Scalars['ISO8601DateTime']['output']
  }

export type Order = BaseModelInterface &
  Node & {
    __typename?: 'Order'
    accountNumber: Scalars['String']['output']
    averagePrice?: Maybe<Scalars['Float']['output']>
    commission?: Maybe<Scalars['Float']['output']>
    createdAt: Scalars['ISO8601DateTime']['output']
    cumulativeCommission?: Maybe<Scalars['Float']['output']>
    cumulativeOrderNetSettle?: Maybe<Scalars['Float']['output']>
    cumulativeOrderNetValue?: Maybe<Scalars['Float']['output']>
    cumulativeOrderValue?: Maybe<Scalars['Float']['output']>
    cumulativeQty?: Maybe<Scalars['Float']['output']>
    cumulativeStampDutyAmount?: Maybe<Scalars['Float']['output']>
    cumulativeVatAmount?: Maybe<Scalars['Float']['output']>
    currency: Scalars['String']['output']
    data?: Maybe<Scalars['JSON']['output']>
    errors: Array<ValidationError>
    exchange: Scalars['String']['output']
    executionList?: Maybe<Array<OrderExecution>>
    expiryDate?: Maybe<Scalars['ISO8601DateTime']['output']>
    filledQty?: Maybe<Scalars['Float']['output']>
    /** ID of the object. */
    id: Scalars['ID']['output']
    investmentId?: Maybe<Scalars['String']['output']>
    isPartialRedemption?: Maybe<Scalars['String']['output']>
    lastPrice?: Maybe<Scalars['Float']['output']>
    lastUpdatedDate?: Maybe<Scalars['ISO8601DateTime']['output']>
    marketCode: Scalars['String']['output']
    metadata?: Maybe<Scalars['JSON']['output']>
    number: Scalars['String']['output']
    optionStrategy?: Maybe<Scalars['String']['output']>
    orderId?: Maybe<Scalars['String']['output']>
    orderNumber?: Maybe<Scalars['String']['output']>
    orderQty?: Maybe<Scalars['Float']['output']>
    orderReferenceId?: Maybe<Scalars['String']['output']>
    orderRejectReason?: Maybe<Scalars['String']['output']>
    orderSide: OrderSide
    orderStatus: Scalars['String']['output']
    orderType?: Maybe<OrderTypeEnum>
    orderValue?: Maybe<Scalars['Float']['output']>
    originalOrderId?: Maybe<Scalars['String']['output']>
    price?: Maybe<Scalars['Float']['output']>
    regulatoryFee?: Maybe<Scalars['Float']['output']>
    securityType?: Maybe<Scalars['String']['output']>
    settleCurrency?: Maybe<Scalars['String']['output']>
    stopPrice?: Maybe<Scalars['Float']['output']>
    symbol: Scalars['String']['output']
    tif?: Maybe<TifEnum>
    tradingSession?: Maybe<Scalars['String']['output']>
    trailByValue?: Maybe<Scalars['Float']['output']>
    trailStpEstPrice?: Maybe<Scalars['Float']['output']>
    trailType?: Maybe<Scalars['String']['output']>
    transactionTime?: Maybe<Scalars['ISO8601DateTime']['output']>
    updatedAt: Scalars['ISO8601DateTime']['output']
    userId: Scalars['Int']['output']
    vat?: Maybe<Scalars['Float']['output']>
  }

/** The connection type for Order. */
export type OrderConnection = {
  __typename?: 'OrderConnection'
  /** A list of edges. */
  edges: Array<OrderEdge>
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>
  /** A list of nodes. */
  nodes: Array<Order>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  sum: Scalars['Float']['output']
  totalCount: Scalars['Int']['output']
}

/** The connection type for Order. */
export type OrderConnectionMetricsArgs = {
  dateField: Scalars['String']['input']
  granularity: MetricGranularity
  sumField?: InputMaybe<Scalars['String']['input']>
}

/** The connection type for Order. */
export type OrderConnectionSumArgs = {
  field: Scalars['String']['input']
}

/** An edge in a connection. */
export type OrderEdge = {
  __typename?: 'OrderEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Order
}

export type OrderEstimate = {
  __typename?: 'OrderEstimate'
  /** Commission charges for the order */
  commission?: Maybe<Scalars['Float']['output']>
  /** Reason message for the estimation result */
  reason: Scalars['String']['output']
  /** Rejection code if any */
  rejectCode: Scalars['Int']['output']
  /** Sales tax charges */
  salesTax?: Maybe<Scalars['Float']['output']>
  /** Stamp duty charges */
  stampDuty?: Maybe<Scalars['Float']['output']>
  /** Status of the estimation */
  status?: Maybe<Scalars['String']['output']>
  /** Value Added Tax charges */
  vat?: Maybe<Scalars['Float']['output']>
}

/** Order execution details */
export type OrderExecution = {
  __typename?: 'OrderExecution'
  /** Commission charged for the execution */
  commission: Scalars['Float']['output']
  /** Cumulative quantity executed for the order */
  cumulativeQuantity: Scalars['Float']['output']
  /** Timestamp when the order was executed */
  executedAt: Scalars['ISO8601DateTime']['output']
  /** Unique identifier for the order execution */
  id: Scalars['ID']['output']
  /** Price at which the asset was executed */
  price: Scalars['Float']['output']
  /** Quantity of the asset executed */
  quantity: Scalars['Float']['output']
  /** Status of the order execution */
  status: Scalars['String']['output']
}

export type OrderFilter = {
  createdAt?: InputMaybe<DateFilter>
  filledQty?: InputMaybe<IntFilter>
  id?: InputMaybe<IdFilter>
  number?: InputMaybe<StringFilter>
  orderQty?: InputMaybe<IntFilter>
  orderSide?: InputMaybe<EnumStringFilter>
  orderStatus?: InputMaybe<EnumStringFilter>
  orderType?: InputMaybe<EnumStringFilter>
  symbol?: InputMaybe<StringFilter>
  tif?: InputMaybe<EnumStringFilter>
  updatedAt?: InputMaybe<DateFilter>
  userId?: InputMaybe<IdFilter>
}

export enum OrderSide {
  /** buy */
  Buy = 'buy',
  /** sell */
  Sell = 'sell'
}

export enum OrderTypeEnum {
  /** limit */
  Limit = 'limit',
  /** limit_on_close */
  LimitOnClose = 'limit_on_close',
  /** market */
  Market = 'market',
  /** market_on_close */
  MarketOnClose = 'market_on_close',
  /** stop */
  Stop = 'stop',
  /** stop_limit */
  StopLimit = 'stop_limit',
  /** trailing_stop */
  TrailingStop = 'trailing_stop'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

export type Passkey = BaseModelInterface &
  Node & {
    __typename?: 'Passkey'
    createdAt: Scalars['ISO8601DateTime']['output']
    errors: Array<ValidationError>
    externalId?: Maybe<Scalars['String']['output']>
    /** ID of the object. */
    id: Scalars['ID']['output']
    isActive: Scalars['Boolean']['output']
    label?: Maybe<Scalars['String']['output']>
    lastUsedAt?: Maybe<Scalars['ISO8601DateTime']['output']>
    publicKey?: Maybe<Scalars['String']['output']>
    signCount?: Maybe<Scalars['Int']['output']>
    updatedAt: Scalars['ISO8601DateTime']['output']
    userAgent?: Maybe<Scalars['String']['output']>
    userId: Scalars['Int']['output']
  }

/** Autogenerated input type of PlaceEquity */
export type PlaceEquityInput = {
  accountNumber?: InputMaybe<Scalars['String']['input']>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  currency?: InputMaybe<Scalars['String']['input']>
  exchange: Scalars['String']['input']
  expiryDate?: InputMaybe<Scalars['ISO8601DateTime']['input']>
  instrumentType?: InputMaybe<Scalars['String']['input']>
  orderQty: Scalars['Float']['input']
  orderSide: OrderSide
  orderType: OrderTypeEnum
  orderValue?: InputMaybe<Scalars['Float']['input']>
  price?: InputMaybe<Scalars['Float']['input']>
  securityType?: InputMaybe<Scalars['String']['input']>
  stopPrice?: InputMaybe<Scalars['Float']['input']>
  symbol: Scalars['String']['input']
  tif?: InputMaybe<TifEnum>
  tradingSession?: InputMaybe<Scalars['String']['input']>
  trailByValue?: InputMaybe<Scalars['Float']['input']>
  trailType?: InputMaybe<Scalars['String']['input']>
}

export type Position = BaseModelInterface &
  Node & {
    __typename?: 'Position'
    accountNumber: Scalars['String']['output']
    accruedInterest: Scalars['Float']['output']
    amount: Scalars['Float']['output']
    availableQuantity: Scalars['Float']['output']
    averageCost: Scalars['Float']['output']
    averagePrice: Scalars['Float']['output']
    baseExchange?: Maybe<Scalars['String']['output']>
    baseSymbol?: Maybe<Scalars['String']['output']>
    collectedCoupons: Scalars['Float']['output']
    createdAt: Scalars['ISO8601DateTime']['output']
    currency?: Maybe<Scalars['String']['output']>
    customerNumber?: Maybe<Scalars['String']['output']>
    errors: Array<ValidationError>
    exchange: Scalars['String']['output']
    fullyRedeem: Scalars['Int']['output']
    holdingType: Scalars['Int']['output']
    /** ID of the object. */
    id: Scalars['ID']['output']
    investmentId?: Maybe<Scalars['String']['output']>
    isin?: Maybe<Scalars['String']['output']>
    lotSize?: Maybe<Scalars['Int']['output']>
    manualHoldingBlock: Scalars['Float']['output']
    netHolding: Scalars['Float']['output']
    pendingBuy: Scalars['Float']['output']
    pendingSell: Scalars['Float']['output']
    quantity: Scalars['Float']['output']
    redeemAmount: Scalars['Float']['output']
    securityType?: Maybe<Scalars['String']['output']>
    sellPendingUnits: Scalars['Float']['output']
    startDate?: Maybe<Scalars['String']['output']>
    symbol: Scalars['String']['output']
    symbolDesc?: Maybe<Scalars['String']['output']>
    totalCost: Scalars['Float']['output']
    updatedAt: Scalars['ISO8601DateTime']['output']
    userId: Scalars['Int']['output']
  }

export type Profile = BaseModelInterface &
  Node & {
    __typename?: 'Profile'
    address?: Maybe<Address>
    addressStatus: Scalars['String']['output']
    approvalAt?: Maybe<Scalars['ISO8601DateTime']['output']>
    approvedBy?: Maybe<User>
    birthday?: Maybe<Scalars['ISO8601Date']['output']>
    citizenIdNumber?: Maybe<Scalars['String']['output']>
    citizenship?: Maybe<Country>
    citizenshipId?: Maybe<Scalars['ID']['output']>
    civilId?: Maybe<Scalars['String']['output']>
    consents: Array<Consent>
    createdAt: Scalars['ISO8601DateTime']['output']
    documents: Array<Document>
    drivingLicense?: Maybe<Scalars['String']['output']>
    errors: Array<ValidationError>
    familyName?: Maybe<Scalars['String']['output']>
    financialStatus: Scalars['String']['output']
    financials: Array<Financial>
    firstName?: Maybe<Scalars['String']['output']>
    gender?: Maybe<Gender>
    /** ID of the object. */
    id: Scalars['ID']['output']
    identityStatus: Scalars['String']['output']
    lastName?: Maybe<Scalars['String']['output']>
    middleName?: Maybe<Scalars['String']['output']>
    nationality?: Maybe<Country>
    nationalityId?: Maybe<Scalars['ID']['output']>
    passportNumber?: Maybe<Scalars['String']['output']>
    progress: Scalars['Int']['output']
    rejectedAt?: Maybe<Scalars['ISO8601DateTime']['output']>
    rejectedBy?: Maybe<User>
    rejectionReason?: Maybe<Scalars['String']['output']>
    relatedParties: Array<RelatedParty>
    reviews: Array<Review>
    riskAssessments: Array<RiskAssessment>
    riskStatus: Scalars['String']['output']
    sanctionScreenings: Array<SanctionScreening>
    status: Scalars['String']['output']
    taxes: Array<Tax>
    updatedAt: Scalars['ISO8601DateTime']['output']
    user: User
  }

export type Quarter = BaseModelInterface &
  Node &
  ZonableInterface & {
    __typename?: 'Quarter'
    code?: Maybe<Scalars['String']['output']>
    createdAt: Scalars['ISO8601DateTime']['output']
    district?: Maybe<District>
    errors: Array<ValidationError>
    geojson?: Maybe<Scalars['JSON']['output']>
    /** ID of the object. */
    id: Scalars['ID']['output']
    name: Scalars['String']['output']
    preferences?: Maybe<Scalars['JSON']['output']>
    updatedAt: Scalars['ISO8601DateTime']['output']
  }

/** The connection type for Quarter. */
export type QuarterConnection = {
  __typename?: 'QuarterConnection'
  /** A list of edges. */
  edges: Array<QuarterEdge>
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>
  /** A list of nodes. */
  nodes: Array<Quarter>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  sum: Scalars['Float']['output']
  totalCount: Scalars['Int']['output']
}

/** The connection type for Quarter. */
export type QuarterConnectionMetricsArgs = {
  dateField: Scalars['String']['input']
  granularity: MetricGranularity
  sumField?: InputMaybe<Scalars['String']['input']>
}

/** The connection type for Quarter. */
export type QuarterConnectionSumArgs = {
  field: Scalars['String']['input']
}

/** An edge in a connection. */
export type QuarterEdge = {
  __typename?: 'QuarterEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Quarter
}

export type QuarterFilter = {
  code?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateFilter>
  districtId?: InputMaybe<IdFilter>
  id?: InputMaybe<IdFilter>
  name?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateFilter>
}

export type Query = {
  __typename?: 'Query'
  /** Returns list of addresses */
  addresses: AddressConnection
  articles: ArticleConnection
  /** Returns list of bank accounts */
  bankAccounts: BankAccountConnection
  /** Returns list of bank transactions */
  bankTransactions: BankTransactionConnection
  /** Returns list of bank transfers */
  bankTransfers: BankTransferConnection
  /** Returns list of bank */
  banks: Array<Bank>
  /** Returns list of bank cgw */
  cgws: CgwConnection
  /** Returns list of country */
  countries: Array<Country>
  /** Returns list of districts */
  districts: DistrictConnection
  /** Returns list of exchange accounts */
  exchangeAccounts: ExchangeAccountConnection
  /** Returns list of exchange cash accounts */
  exchangeCashAccounts: CashAccountConnection
  /** Returns list of exchange security accounts */
  exchangeSecurityAccounts: SecurityAccountConnection
  /** Background job statuses */
  jobStatuses: JobStatusConnection
  kycProfile?: Maybe<Profile>
  /** Return list of markets */
  markets?: Maybe<Array<Market>>
  /** Return current logged in user info */
  me?: Maybe<User>
  /** Fetches an object given its ID. */
  node?: Maybe<Node>
  /** Fetches a list of objects given a list of IDs. */
  nodes?: Maybe<Array<Node>>
  /** Returns estimated charges for placing an order including commission, taxes and other fees */
  orderEstimate: OrderEstimate
  orders: OrderConnection
  /** Returns list of quarters */
  quarters: QuarterConnection
  /** Returns list of states */
  states: StateConnection
  ticker: Ticker
  tickers: TickerConnection
  /** Returns top tickers by gainers, losers, most active volume and value */
  topTickers: Array<Ticker>
  /** Returns list of users */
  users: UserConnection
  watchlist: WatchlistConnection
}

export type QueryAddressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type QueryArticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<ArticleFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type QueryBankAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<BankAccountFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type QueryBankTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<BankTransactionFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type QueryBankTransfersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<BankTransferFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type QueryCgwsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type QueryDistrictsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<DistrictFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type QueryExchangeAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<AccountFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type QueryExchangeCashAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<CashAccountFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type QueryExchangeSecurityAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<SecurityAccountFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type QueryJobStatusesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<JobStatusFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type QueryNodeArgs = {
  id: Scalars['ID']['input']
}

export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>
}

export type QueryOrderEstimateArgs = {
  accountNumber?: InputMaybe<Scalars['String']['input']>
  amount?: InputMaybe<Scalars['Float']['input']>
  exchange: Scalars['String']['input']
  instrumentType?: InputMaybe<Scalars['String']['input']>
  orderValue?: InputMaybe<Scalars['Float']['input']>
  price: Scalars['Float']['input']
  quantity?: InputMaybe<Scalars['Float']['input']>
  securityType?: InputMaybe<Scalars['String']['input']>
  symbol: Scalars['String']['input']
  tradingSession?: InputMaybe<Scalars['String']['input']>
}

export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<OrderFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type QueryQuartersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<QuarterFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type QueryStatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<StateFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type QueryTickerArgs = {
  key?: InputMaybe<Scalars['String']['input']>
}

export type QueryTickersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<TickerFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type QueryTopTickersArgs = {
  exchange?: Scalars['String']['input']
  type?: InputMaybe<TopTicker>
}

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<UserFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type QueryWatchlistArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<WatchlistFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type Reference = BaseModelInterface &
  Node & {
    __typename?: 'Reference'
    createdAt: Scalars['ISO8601DateTime']['output']
    description?: Maybe<Scalars['String']['output']>
    errors: Array<ValidationError>
    /** ID of the object. */
    id: Scalars['ID']['output']
    kind: Scalars['String']['output']
    metadata?: Maybe<Scalars['JSON']['output']>
    number: Scalars['String']['output']
    reference?: Maybe<Scalars['String']['output']>
    updatedAt: Scalars['ISO8601DateTime']['output']
  }

export type RelatedParty = {
  __typename?: 'RelatedParty'
  country: Scalars['String']['output']
  createdAt: Scalars['ISO8601DateTime']['output']
  documentUrl?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  profile: Profile
  relationType: Scalars['String']['output']
  updatedAt: Scalars['ISO8601DateTime']['output']
}

export type Review = {
  __typename?: 'Review'
  createdAt: Scalars['ISO8601DateTime']['output']
  id: Scalars['ID']['output']
  notes?: Maybe<Scalars['String']['output']>
  outcome: Scalars['String']['output']
  profile: Profile
  reviewDate: Scalars['ISO8601DateTime']['output']
  reviewType: Scalars['String']['output']
  reviewer: User
  updatedAt: Scalars['ISO8601DateTime']['output']
}

export type RiskAssessment = {
  __typename?: 'RiskAssessment'
  amlChecks: Array<AmlCheck>
  assessedAt?: Maybe<Scalars['ISO8601DateTime']['output']>
  assessedBy?: Maybe<User>
  createdAt: Scalars['ISO8601DateTime']['output']
  id: Scalars['ID']['output']
  notes?: Maybe<Scalars['String']['output']>
  profile: Profile
  riskLevel: Scalars['String']['output']
  riskLitigation: Scalars['Boolean']['output']
  riskPep: Scalars['Boolean']['output']
  riskPepRelationship: Scalars['Boolean']['output']
  riskSanctions: Scalars['Boolean']['output']
  riskScore: Scalars['Int']['output']
  updatedAt: Scalars['ISO8601DateTime']['output']
}

export type SanctionScreening = {
  __typename?: 'SanctionScreening'
  createdAt: Scalars['ISO8601DateTime']['output']
  details?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  profile: Profile
  result: Scalars['String']['output']
  sanctionListType: Scalars['String']['output']
  screeningDate: Scalars['ISO8601DateTime']['output']
  updatedAt: Scalars['ISO8601DateTime']['output']
}

export type SecurityAccount = BaseModelInterface &
  Node & {
    __typename?: 'SecurityAccount'
    accountType: Scalars['String']['output']
    accounts: Array<ExchangeAccount>
    cashAccountId: Scalars['Int']['output']
    createdAt: Scalars['ISO8601DateTime']['output']
    currency: Scalars['String']['output']
    data: Scalars['JSON']['output']
    errors: Array<ValidationError>
    /** ID of the object. */
    id: Scalars['ID']['output']
    metadata: Scalars['JSON']['output']
    name?: Maybe<Scalars['String']['output']>
    number: Scalars['String']['output']
    secApprovalStatus?: Maybe<Scalars['String']['output']>
    status?: Maybe<Scalars['String']['output']>
    updatedAt: Scalars['ISO8601DateTime']['output']
    userId: Scalars['Int']['output']
  }

/** The connection type for SecurityAccount. */
export type SecurityAccountConnection = {
  __typename?: 'SecurityAccountConnection'
  /** A list of edges. */
  edges: Array<SecurityAccountEdge>
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>
  /** A list of nodes. */
  nodes: Array<SecurityAccount>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  sum: Scalars['Float']['output']
  totalCount: Scalars['Int']['output']
}

/** The connection type for SecurityAccount. */
export type SecurityAccountConnectionMetricsArgs = {
  dateField: Scalars['String']['input']
  granularity: MetricGranularity
  sumField?: InputMaybe<Scalars['String']['input']>
}

/** The connection type for SecurityAccount. */
export type SecurityAccountConnectionSumArgs = {
  field: Scalars['String']['input']
}

/** An edge in a connection. */
export type SecurityAccountEdge = {
  __typename?: 'SecurityAccountEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: SecurityAccount
}

export type SecurityAccountFilter = {
  accountType?: InputMaybe<IntFilter>
  cashAccount?: InputMaybe<CashAccountFilter>
  cashAccountId?: InputMaybe<IdFilter>
  createdAt?: InputMaybe<DateFilter>
  currency?: InputMaybe<StringFilter>
  id?: InputMaybe<IdFilter>
  name?: InputMaybe<StringFilter>
  number?: InputMaybe<StringFilter>
  secApprovalStatus?: InputMaybe<IntFilter>
  securityAccountType?: InputMaybe<IntFilter>
  status?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateFilter>
  user?: InputMaybe<UserFilter>
  userId?: InputMaybe<IdFilter>
}

/** Sort Direction */
export enum SortDirection {
  /** Ascending */
  Asc = 'asc',
  /** Descending */
  Desc = 'desc'
}

export type SortFilter = {
  direction?: InputMaybe<SortDirection>
  field: Scalars['String']['input']
}

export type State = BaseModelInterface &
  Node &
  ZonableInterface & {
    __typename?: 'State'
    code?: Maybe<Scalars['String']['output']>
    country?: Maybe<Country>
    createdAt: Scalars['ISO8601DateTime']['output']
    districts: Array<District>
    errors: Array<ValidationError>
    geojson?: Maybe<Scalars['JSON']['output']>
    /** ID of the object. */
    id: Scalars['ID']['output']
    name: Scalars['String']['output']
    preferences?: Maybe<Scalars['JSON']['output']>
    updatedAt: Scalars['ISO8601DateTime']['output']
  }

/** The connection type for State. */
export type StateConnection = {
  __typename?: 'StateConnection'
  /** A list of edges. */
  edges: Array<StateEdge>
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>
  /** A list of nodes. */
  nodes: Array<State>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  sum: Scalars['Float']['output']
  totalCount: Scalars['Int']['output']
}

/** The connection type for State. */
export type StateConnectionMetricsArgs = {
  dateField: Scalars['String']['input']
  granularity: MetricGranularity
  sumField?: InputMaybe<Scalars['String']['input']>
}

/** The connection type for State. */
export type StateConnectionSumArgs = {
  field: Scalars['String']['input']
}

/** An edge in a connection. */
export type StateEdge = {
  __typename?: 'StateEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: State
}

export type StateFilter = {
  code?: InputMaybe<StringFilter>
  country?: InputMaybe<CountryFilter>
  countryId?: InputMaybe<IdFilter>
  createdAt?: InputMaybe<DateFilter>
  id?: InputMaybe<IdFilter>
  name?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateFilter>
}

export enum Status {
  /** active */
  Active = 'active',
  /** banned */
  Banned = 'banned',
  /** deleted */
  Deleted = 'deleted',
  /** inactive */
  Inactive = 'inactive',
  /** pending */
  Pending = 'pending',
  /** suspended */
  Suspended = 'suspended'
}

export type StringFilter = {
  /** is blank ? */
  blank?: InputMaybe<Scalars['Boolean']['input']>
  /** contains */
  cont?: InputMaybe<Scalars['String']['input']>
  /** ends with */
  end?: InputMaybe<Scalars['String']['input']>
  /** equals to */
  eq?: InputMaybe<Scalars['String']['input']>
  /** in: Matches any values in giver array */
  in?: InputMaybe<Array<Scalars['String']['input']>>
  /** not equals to */
  notEq?: InputMaybe<Scalars['String']['input']>
  /** in: Matches none of values in giver array */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  /** is null ? */
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  /** is null ? */
  null?: InputMaybe<Scalars['Boolean']['input']>
  /** starts with */
  start?: InputMaybe<Scalars['String']['input']>
}

export type Tax = {
  __typename?: 'Tax'
  countryOfTaxResidence: Scalars['String']['output']
  createdAt: Scalars['ISO8601DateTime']['output']
  id: Scalars['ID']['output']
  profile: Profile
  taxIdentificationNumber: Scalars['String']['output']
  updatedAt: Scalars['ISO8601DateTime']['output']
}

export type Ticker = BaseModelInterface &
  Node & {
    __typename?: 'Ticker'
    assetType?: Maybe<Scalars['String']['output']>
    avgVolume7d?: Maybe<Scalars['Int']['output']>
    avgVolume30d?: Maybe<Scalars['Int']['output']>
    avgVolume90d?: Maybe<Scalars['Int']['output']>
    /** Best Ask Price */
    bap?: Maybe<Scalars['Float']['output']>
    /** Best Bid Price */
    bbp?: Maybe<Scalars['Float']['output']>
    bloombergSymbol?: Maybe<Scalars['String']['output']>
    calculatedVwap?: Maybe<Scalars['Float']['output']>
    cit?: Maybe<Scalars['Float']['output']>
    citr?: Maybe<Scalars['Float']['output']>
    civ?: Maybe<Scalars['Float']['output']>
    closePrice?: Maybe<Scalars['Float']['output']>
    correctionFactor?: Maybe<Scalars['Float']['output']>
    cot?: Maybe<Scalars['Float']['output']>
    cotr?: Maybe<Scalars['Float']['output']>
    country?: Maybe<Scalars['String']['output']>
    cov?: Maybe<Scalars['Float']['output']>
    createdAt: Scalars['ISO8601DateTime']['output']
    currency: Scalars['String']['output']
    currencyCorrectionFactor?: Maybe<Scalars['Int']['output']>
    datasourceSymbol?: Maybe<Scalars['String']['output']>
    decimalCorrectionFactor?: Maybe<Scalars['Int']['output']>
    decimalPlaces?: Maybe<Scalars['Int']['output']>
    description?: Maybe<Scalars['String']['output']>
    errors: Array<ValidationError>
    exchange: Scalars['String']['output']
    expiryDate?: Maybe<Scalars['ISO8601Date']['output']>
    fractionalTrading: Scalars['Boolean']['output']
    gicsCode?: Maybe<Scalars['String']['output']>
    high52week?: Maybe<Scalars['Float']['output']>
    high52weekDate?: Maybe<Scalars['ISO8601Date']['output']>
    highPrice?: Maybe<Scalars['Float']['output']>
    /** ID of the object. */
    id: Scalars['ID']['output']
    idBbGlobal?: Maybe<Scalars['String']['output']>
    /** Indicates if the ticker is in the user's watchlist */
    inWatchlist: Scalars['Boolean']['output']
    instrumentType?: Maybe<Scalars['String']['output']>
    isDelayed: Scalars['Boolean']['output']
    isTradable: Scalars['Boolean']['output']
    key: Scalars['String']['output']
    lastPrice?: Maybe<Scalars['Float']['output']>
    lastUpdatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>
    longOnly: Scalars['Boolean']['output']
    lotSize?: Maybe<Scalars['Int']['output']>
    low52week?: Maybe<Scalars['Float']['output']>
    low52weekDate?: Maybe<Scalars['ISO8601Date']['output']>
    lowPrice?: Maybe<Scalars['Float']['output']>
    ltq?: Maybe<Scalars['Float']['output']>
    marketCap?: Maybe<Scalars['Float']['output']>
    maxPrice?: Maybe<Scalars['Float']['output']>
    micCode?: Maybe<Scalars['String']['output']>
    minPrice?: Maybe<Scalars['Float']['output']>
    minimumQuantity?: Maybe<Scalars['Float']['output']>
    monthChangePct?: Maybe<Scalars['Float']['output']>
    name?: Maybe<Scalars['String']['output']>
    netChange?: Maybe<Scalars['Float']['output']>
    openPrice?: Maybe<Scalars['Float']['output']>
    optionContractSize?: Maybe<Scalars['Int']['output']>
    optionPremium?: Maybe<Scalars['Float']['output']>
    optionType?: Maybe<Scalars['String']['output']>
    optionsAvailability?: Maybe<Scalars['Int']['output']>
    overnightTrading: Scalars['Boolean']['output']
    pctChange?: Maybe<Scalars['Float']['output']>
    prevClose?: Maybe<Scalars['Float']['output']>
    providerData?: Maybe<Scalars['String']['output']>
    providerSymbolId?: Maybe<Scalars['String']['output']>
    securityType?: Maybe<Scalars['String']['output']>
    showInWeb: Scalars['Boolean']['output']
    stampDutyFlag?: Maybe<Scalars['Int']['output']>
    status?: Maybe<Scalars['Int']['output']>
    strikePrice?: Maybe<Scalars['Float']['output']>
    symbol: Scalars['String']['output']
    symbolStatus?: Maybe<Scalars['Int']['output']>
    tickSize?: Maybe<Scalars['Float']['output']>
    tickSizeString?: Maybe<Scalars['String']['output']>
    tickerClassL1?: Maybe<Scalars['String']['output']>
    tickerClassL2?: Maybe<Scalars['String']['output']>
    tickerClassL3?: Maybe<Scalars['String']['output']>
    timeInForceTypes?: Maybe<Scalars['String']['output']>
    top?: Maybe<Scalars['Float']['output']>
    tov?: Maybe<Scalars['Float']['output']>
    tradeTime?: Maybe<Scalars['ISO8601DateTime']['output']>
    tradeVwap?: Maybe<Scalars['Float']['output']>
    transactionDate?: Maybe<Scalars['ISO8601DateTime']['output']>
    turnover?: Maybe<Scalars['Float']['output']>
    updatedAt: Scalars['ISO8601DateTime']['output']
    volume?: Maybe<Scalars['Int']['output']>
    vwap?: Maybe<Scalars['Float']['output']>
    weekChangePct?: Maybe<Scalars['Float']['output']>
    yearChangePct?: Maybe<Scalars['Float']['output']>
    ytdChangePct?: Maybe<Scalars['Float']['output']>
  }

/** The connection type for Ticker. */
export type TickerConnection = {
  __typename?: 'TickerConnection'
  /** A list of edges. */
  edges: Array<TickerEdge>
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>
  /** A list of nodes. */
  nodes: Array<Ticker>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  sum: Scalars['Float']['output']
  totalCount: Scalars['Int']['output']
}

/** The connection type for Ticker. */
export type TickerConnectionMetricsArgs = {
  dateField: Scalars['String']['input']
  granularity: MetricGranularity
  sumField?: InputMaybe<Scalars['String']['input']>
}

/** The connection type for Ticker. */
export type TickerConnectionSumArgs = {
  field: Scalars['String']['input']
}

/** An edge in a connection. */
export type TickerEdge = {
  __typename?: 'TickerEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Ticker
}

export type TickerFilter = {
  createdAt?: InputMaybe<DateFilter>
  exchange?: InputMaybe<StringFilter>
  high52week?: InputMaybe<IntFilter>
  id?: InputMaybe<IdFilter>
  key?: InputMaybe<StringFilter>
  lastPrice?: InputMaybe<IntFilter>
  low52week?: InputMaybe<IntFilter>
  name?: InputMaybe<StringFilter>
  symbol?: InputMaybe<StringFilter>
  symbolOrName?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateFilter>
  volume?: InputMaybe<IntFilter>
}

export enum TifEnum {
  /** at_close */
  AtClose = 'at_close',
  /** at_opening */
  AtOpening = 'at_opening',
  /** day */
  Day = 'day',
  /** fok */
  Fok = 'fok',
  /** good_till_cancel */
  GoodTillCancel = 'good_till_cancel',
  /** good_till_crossing */
  GoodTillCrossing = 'good_till_crossing',
  /** good_till_date */
  GoodTillDate = 'good_till_date',
  /** ioc */
  Ioc = 'ioc',
  /** month */
  Month = 'month',
  /** session */
  Session = 'session'
}

export enum TopTicker {
  /** Most active by value */
  ActiveByValue = 'active_by_value',
  /** Most active by volume */
  ActiveByVolume = 'active_by_volume',
  /** Top gainers */
  Gainers = 'gainers',
  /** Top losers */
  Losers = 'losers'
}

export type Transaction = BaseModelInterface &
  Node & {
    __typename?: 'Transaction'
    amount: Scalars['Float']['output']
    balance?: Maybe<Scalars['Float']['output']>
    balanceAfter?: Maybe<Scalars['Float']['output']>
    createdAt: Scalars['ISO8601DateTime']['output']
    currency: Scalars['String']['output']
    description: Scalars['String']['output']
    entryType: TransactionEntryType
    errors: Array<ValidationError>
    /** ID of the object. */
    id: Scalars['ID']['output']
    kind: Scalars['String']['output']
    metadata?: Maybe<Scalars['JSON']['output']>
    number: Scalars['String']['output']
    ref: Reference
    source?: Maybe<Node>
    updatedAt: Scalars['ISO8601DateTime']['output']
  }

/** The connection type for Transaction. */
export type TransactionConnection = {
  __typename?: 'TransactionConnection'
  /** A list of edges. */
  edges: Array<TransactionEdge>
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>
  /** A list of nodes. */
  nodes: Array<Transaction>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  sum: Scalars['Float']['output']
  totalCount: Scalars['Int']['output']
}

/** The connection type for Transaction. */
export type TransactionConnectionMetricsArgs = {
  dateField: Scalars['String']['input']
  granularity: MetricGranularity
  sumField?: InputMaybe<Scalars['String']['input']>
}

/** The connection type for Transaction. */
export type TransactionConnectionSumArgs = {
  field: Scalars['String']['input']
}

/** An edge in a connection. */
export type TransactionEdge = {
  __typename?: 'TransactionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Transaction
}

export enum TransactionEntryType {
  /** credit */
  Credit = 'credit',
  /** debit */
  Debit = 'debit'
}

export type User = BaseModelInterface &
  Node & {
    __typename?: 'User'
    avatar?: Maybe<Image>
    bankAccounts: Array<BankAccount>
    cards: Array<Card>
    cashAccounts: Array<CashAccount>
    confirmed: Scalars['Boolean']['output']
    confirmedAt?: Maybe<Scalars['ISO8601DateTime']['output']>
    createdAt: Scalars['ISO8601DateTime']['output']
    currentSignInAt?: Maybe<Scalars['ISO8601DateTime']['output']>
    currentSignInIp?: Maybe<Scalars['String']['output']>
    customerToken?: Maybe<Scalars['String']['output']>
    devices: Array<UserDevice>
    email?: Maybe<Scalars['Email']['output']>
    emails: Array<UserEmail>
    errors: Array<ValidationError>
    exchangeAccounts: Array<ExchangeAccount>
    failedAttempts: Scalars['Int']['output']
    fullName: Scalars['String']['output']
    gtnAccount?: Maybe<Scalars['String']['output']>
    /** ID of the object. */
    id: Scalars['ID']['output']
    isMe: Scalars['Boolean']['output']
    language?: Maybe<Scalars['String']['output']>
    lastSignInAt?: Maybe<Scalars['ISO8601DateTime']['output']>
    lastSignInIp?: Maybe<Scalars['String']['output']>
    level?: Maybe<Scalars['String']['output']>
    lockedAt?: Maybe<Scalars['ISO8601DateTime']['output']>
    loyaltyWallet?: Maybe<Wallet>
    note?: Maybe<Scalars['String']['output']>
    number: Scalars['String']['output']
    orders: OrderConnection
    passkeys: Array<Passkey>
    phone?: Maybe<Scalars['Phone']['output']>
    phones: Array<UserPhone>
    positions: Array<Position>
    profile: Profile
    rememberCreatedAt?: Maybe<Scalars['ISO8601DateTime']['output']>
    roleMatrix?: Maybe<Scalars['JSON']['output']>
    securityAccounts: Array<SecurityAccount>
    signInCount: Scalars['Int']['output']
    status?: Maybe<Status>
    totalPurchaseAmount: Scalars['Float']['output']
    twoFactorEnabled: Scalars['Boolean']['output']
    updatedAt: Scalars['ISO8601DateTime']['output']
    username: Scalars['String']['output']
  }

export type UserOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<OrderFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection'
  /** A list of edges. */
  edges: Array<UserEdge>
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>
  /** A list of nodes. */
  nodes: Array<User>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  sum: Scalars['Float']['output']
  totalCount: Scalars['Int']['output']
}

/** The connection type for User. */
export type UserConnectionMetricsArgs = {
  dateField: Scalars['String']['input']
  granularity: MetricGranularity
  sumField?: InputMaybe<Scalars['String']['input']>
}

/** The connection type for User. */
export type UserConnectionSumArgs = {
  field: Scalars['String']['input']
}

export type UserDevice = BaseModelInterface &
  Node & {
    __typename?: 'UserDevice'
    channel?: Maybe<DeviceChannel>
    confirmed?: Maybe<Scalars['Boolean']['output']>
    confirmedAt?: Maybe<Scalars['ISO8601DateTime']['output']>
    createdAt: Scalars['ISO8601DateTime']['output']
    deviceId?: Maybe<Scalars['String']['output']>
    errors: Array<ValidationError>
    /** ID of the object. */
    id: Scalars['ID']['output']
    ip?: Maybe<Scalars['String']['output']>
    lastActiveAt: Scalars['ISO8601DateTime']['output']
    location?: Maybe<Scalars['String']['output']>
    name?: Maybe<Scalars['String']['output']>
    platform: Scalars['String']['output']
    updatedAt: Scalars['ISO8601DateTime']['output']
    userId?: Maybe<Scalars['ID']['output']>
  }

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: User
}

export type UserEmail = BaseModelInterface &
  Node & {
    __typename?: 'UserEmail'
    confirmed: Scalars['Boolean']['output']
    confirmedAt?: Maybe<Scalars['ISO8601DateTime']['output']>
    createdAt: Scalars['ISO8601DateTime']['output']
    email: Scalars['Email']['output']
    errors: Array<ValidationError>
    /** ID of the object. */
    id: Scalars['ID']['output']
    isDefault: Scalars['Boolean']['output']
    updatedAt: Scalars['ISO8601DateTime']['output']
    userId?: Maybe<Scalars['ID']['output']>
  }

export type UserFilter = {
  citizenIdNumber?: InputMaybe<StringFilter>
  civilId?: InputMaybe<StringFilter>
  confirmed?: InputMaybe<BoolFilter>
  confirmedAt?: InputMaybe<DateFilter>
  createdAt?: InputMaybe<DateFilter>
  email?: InputMaybe<StringFilter>
  firstName?: InputMaybe<StringFilter>
  fullName?: InputMaybe<StringFilter>
  gender?: InputMaybe<EnumStringFilter>
  id?: InputMaybe<IdFilter>
  isCompany?: InputMaybe<BoolFilter>
  isSpecial?: InputMaybe<BoolFilter>
  lastName?: InputMaybe<StringFilter>
  number?: InputMaybe<StringFilter>
  phone?: InputMaybe<StringFilter>
  status?: InputMaybe<EnumStringFilter>
  updatedAt?: InputMaybe<DateFilter>
  username?: InputMaybe<StringFilter>
}

export type UserPhone = BaseModelInterface &
  Node & {
    __typename?: 'UserPhone'
    carrier?: Maybe<Scalars['String']['output']>
    confirmed: Scalars['Boolean']['output']
    confirmedAt?: Maybe<Scalars['ISO8601DateTime']['output']>
    countryCode: Scalars['String']['output']
    createdAt: Scalars['ISO8601DateTime']['output']
    errors: Array<ValidationError>
    /** ID of the object. */
    id: Scalars['ID']['output']
    isDefault: Scalars['Boolean']['output']
    phone: Scalars['Phone']['output']
    updatedAt: Scalars['ISO8601DateTime']['output']
    userId?: Maybe<Scalars['ID']['output']>
  }

export type ValidationError = {
  __typename?: 'ValidationError'
  attribute: Scalars['String']['output']
  message: Scalars['String']['output']
}

export type Wallet = BaseModelInterface &
  Node & {
    __typename?: 'Wallet'
    account: Scalars['String']['output']
    balance: Scalars['Float']['output']
    createdAt: Scalars['ISO8601DateTime']['output']
    currency: Scalars['String']['output']
    errors: Array<ValidationError>
    /** ID of the object. */
    id: Scalars['ID']['output']
    lastTransactionAt?: Maybe<Scalars['ISO8601DateTime']['output']>
    name?: Maybe<Scalars['String']['output']>
    pendingBalance: Scalars['Float']['output']
    preferences?: Maybe<Scalars['String']['output']>
    status: Scalars['Int']['output']
    transactions: TransactionConnection
    type: Scalars['String']['output']
    updatedAt: Scalars['ISO8601DateTime']['output']
  }

export type WalletTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  filter?: InputMaybe<BankTransactionFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<SortFilter>
}

export type Watchlist = BaseModelInterface &
  Node & {
    __typename?: 'Watchlist'
    createdAt: Scalars['ISO8601DateTime']['output']
    errors: Array<ValidationError>
    /** ID of the object. */
    id: Scalars['ID']['output']
    sort: Scalars['Int']['output']
    ticker: Ticker
    updatedAt: Scalars['ISO8601DateTime']['output']
    userId: Scalars['Int']['output']
  }

/** The connection type for Watchlist. */
export type WatchlistConnection = {
  __typename?: 'WatchlistConnection'
  /** A list of edges. */
  edges: Array<WatchlistEdge>
  /** Metric response for chart / reporting */
  metrics: Array<MetricResponse>
  /** A list of nodes. */
  nodes: Array<Watchlist>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  sum: Scalars['Float']['output']
  totalCount: Scalars['Int']['output']
}

/** The connection type for Watchlist. */
export type WatchlistConnectionMetricsArgs = {
  dateField: Scalars['String']['input']
  granularity: MetricGranularity
  sumField?: InputMaybe<Scalars['String']['input']>
}

/** The connection type for Watchlist. */
export type WatchlistConnectionSumArgs = {
  field: Scalars['String']['input']
}

/** An edge in a connection. */
export type WatchlistEdge = {
  __typename?: 'WatchlistEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Watchlist
}

export type WatchlistFilter = {
  createdAt?: InputMaybe<DateFilter>
  id?: InputMaybe<IdFilter>
  ticker?: InputMaybe<TickerFilter>
  updatedAt?: InputMaybe<DateFilter>
}

/** An object with an ID. */
export type ZonableInterface = {
  createdAt: Scalars['ISO8601DateTime']['output']
  errors: Array<ValidationError>
  geojson?: Maybe<Scalars['JSON']['output']>
  /** ID of the object. */
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  updatedAt: Scalars['ISO8601DateTime']['output']
}

/** Autogenerated input type of accountDeposit */
export type AccountDepositInput = {
  accountNumber: Scalars['String']['input']
  amount: Scalars['Float']['input']
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  currency?: InputMaybe<Scalars['String']['input']>
}

/** Autogenerated return type of accountDeposit. */
export type AccountDepositPayload = {
  __typename?: 'accountDepositPayload'
  accountNumber: Scalars['String']['output']
  amount: Scalars['Float']['output']
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>
}

/** Autogenerated input type of accountWithdraw */
export type AccountWithdrawInput = {
  accountNumber: Scalars['String']['input']
  amount: Scalars['Float']['input']
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  currency?: InputMaybe<Scalars['String']['input']>
}

/** Autogenerated return type of accountWithdraw. */
export type AccountWithdrawPayload = {
  __typename?: 'accountWithdrawPayload'
  accountNumber: Scalars['String']['output']
  amount: Scalars['Float']['output']
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>
}

/** Autogenerated input type of assertionPasskey */
export type AssertionPasskeyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** Username of the user requesting a passkey validation */
  username?: InputMaybe<Scalars['String']['input']>
}

/** Autogenerated input type of bankCGWCreate */
export type BankCgwCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  isCredit?: InputMaybe<Scalars['Boolean']['input']>
  minBalance?: InputMaybe<Scalars['Float']['input']>
  name: Scalars['String']['input']
  preferences?: InputMaybe<Scalars['JSON']['input']>
  status?: InputMaybe<BankCgwStatus>
  transferAccount: Scalars['String']['input']
  transferPassword: Scalars['String']['input']
  transferUsername: Scalars['String']['input']
  type: Scalars['String']['input']
}

/** Autogenerated input type of bankCGWStatements */
export type BankCgwStatementsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  params?: InputMaybe<Scalars['JSON']['input']>
}

/** Autogenerated input type of bankCGWUpdate */
export type BankCgwUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  isCredit?: InputMaybe<Scalars['Boolean']['input']>
  minBalance?: InputMaybe<Scalars['Float']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  preferences?: InputMaybe<Scalars['JSON']['input']>
  status?: InputMaybe<BankCgwStatus>
  transferAccount?: InputMaybe<Scalars['String']['input']>
  transferPassword?: InputMaybe<Scalars['String']['input']>
  transferUsername?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

export enum BankTransactionTypeCode {
  /** credit */
  Credit = 'credit',
  /** debit */
  Debit = 'debit'
}

/** Autogenerated input type of cancelOrder */
export type CancelOrderInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
}

/** Autogenerated input type of changePassword */
export type ChangePasswordInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  currentPassword: Scalars['String']['input']
  id?: InputMaybe<Scalars['ID']['input']>
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
}

/** Autogenerated input type of checkAccountName */
export type CheckAccountNameInput = {
  accountNumber: Scalars['String']['input']
  bankCode?: InputMaybe<Scalars['String']['input']>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  ownerType?: InputMaybe<Scalars['String']['input']>
}

/** Autogenerated input type of confirmableConfirm */
export type ConfirmableConfirmInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  token: Scalars['String']['input']
}

/** Autogenerated input type of confirmableResend */
export type ConfirmableResendInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
}

/** Autogenerated input type of createAddress */
export type CreateAddressInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  detail: AddressInput
}

/** Autogenerated input type of createBankAccount */
export type CreateBankAccountInput = {
  /** ID of the bank to which the account belongs */
  bankId: Scalars['ID']['input']
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  currency?: InputMaybe<Scalars['String']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  isDefault?: InputMaybe<Scalars['Boolean']['input']>
  name: Scalars['String']['input']
  number: Scalars['String']['input']
  /** ID of the owner of the bank account. If not provided, the current user will be used. */
  ownerId?: InputMaybe<Scalars['ID']['input']>
  position?: InputMaybe<Scalars['Int']['input']>
}

/** Autogenerated input type of createBank */
export type CreateBankInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  code: Scalars['String']['input']
  icon?: InputMaybe<Scalars['Upload']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  name: Scalars['String']['input']
  preferences?: InputMaybe<Scalars['JSON']['input']>
  swiftCode?: InputMaybe<Scalars['String']['input']>
}

/** Autogenerated input type of createKYCFinancial */
export type CreateKycFinancialInput = {
  annualIncomeBracket: Scalars['String']['input']
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  expectedTradingVolume: Scalars['String']['input']
  investmentExperience: Scalars['String']['input']
  investmentObjective: Scalars['String']['input']
  liquidAssets?: InputMaybe<Scalars['String']['input']>
  netWorthBracket: Scalars['String']['input']
  primaryIncomeSource: Scalars['String']['input']
  riskTolerance: Scalars['String']['input']
}

/** Autogenerated input type of createNote */
export type CreateNoteInput = {
  body: Scalars['String']['input']
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  metadata?: InputMaybe<Scalars['JSON']['input']>
  subjectId: Scalars['ID']['input']
}

/** Autogenerated input type of createPasskey */
export type CreatePasskeyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  credential: Scalars['JSON']['input']
  label?: InputMaybe<Scalars['String']['input']>
}

/** Autogenerated input type of createRelatedParty */
export type CreateRelatedPartyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  country: Scalars['String']['input']
  documentUrl?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  relationType: Scalars['String']['input']
}

/** Autogenerated return type of createRelatedParty. */
export type CreateRelatedPartyPayload = {
  __typename?: 'createRelatedPartyPayload'
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  errors: Array<ValidationError>
  profile?: Maybe<Profile>
  relatedParty?: Maybe<RelatedParty>
}

/** Autogenerated input type of createSignedId */
export type CreateSignedIdInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  expiresIn?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  purpose: Scalars['String']['input']
}

/** Autogenerated input type of createTax */
export type CreateTaxInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  countryOfTaxResidence: Scalars['String']['input']
  taxIdentificationNumber: Scalars['String']['input']
}

/** Autogenerated return type of createTax. */
export type CreateTaxPayload = {
  __typename?: 'createTaxPayload'
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  errors: Array<ValidationError>
  profile?: Maybe<Profile>
  tax?: Maybe<Tax>
}

/** Autogenerated input type of deleteAddress */
export type DeleteAddressInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
}

/** Autogenerated input type of deleteBankAccount */
export type DeleteBankAccountInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
}

/** Autogenerated input type of deleteDevice */
export type DeleteDeviceInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
}

/** Autogenerated input type of deleteEmail */
export type DeleteEmailInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
}

/** Autogenerated input type of deleteNote */
export type DeleteNoteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
}

/** Autogenerated input type of deletePasskey */
export type DeletePasskeyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
}

/** Autogenerated input type of deletePhone */
export type DeletePhoneInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
}

/** Autogenerated input type of deleteUser */
export type DeleteUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** ID of user to delete. If not provided, deletes current user */
  id?: InputMaybe<Scalars['ID']['input']>
  /** Password required when deleting other users */
  password?: InputMaybe<Scalars['String']['input']>
}

/** Autogenerated input type of disableTotp */
export type DisableTotpInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The TOTP token to verify before disabling */
  token: Scalars['String']['input']
}

/** Autogenerated input type of enableTotp */
export type EnableTotpInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** The TOTP token to verify and enable */
  token: Scalars['String']['input']
}

/** Autogenerated return type of enableTotp. */
export type EnableTotpPayload = {
  __typename?: 'enableTotpPayload'
  /** Backup codes for the TOTP */
  backupCodes: Array<Scalars['String']['output']>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  user: User
}

/** Autogenerated input type of forgetPassword */
export type ForgetPasswordInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  /** User identifier (email or phone number) */
  identity: Scalars['String']['input']
}

/** Autogenerated input type of provideKYCConsent */
export type ProvideKycConsentInput = {
  accepted: Scalars['Boolean']['input']
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  consentType: Scalars['String']['input']
  ipAddress?: InputMaybe<Scalars['String']['input']>
  signatureUrl?: InputMaybe<Scalars['String']['input']>
  userAgent?: InputMaybe<Scalars['String']['input']>
}

/** Autogenerated return type of provideKYCConsent. */
export type ProvideKycConsentPayload = {
  __typename?: 'provideKYCConsentPayload'
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  consent?: Maybe<Consent>
  errors: Array<ValidationError>
  profile?: Maybe<Profile>
}

/** Autogenerated input type of registerByEmail */
export type RegisterByEmailInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['Email']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Autogenerated input type of registerByMobile */
export type RegisterByMobileInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  phone?: InputMaybe<Scalars['Phone']['input']>
}

/** Autogenerated input type of registerByPassword */
export type RegisterByPasswordInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  emailSid?: InputMaybe<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
  phoneSid: Scalars['ID']['input']
}

/** Autogenerated input type of removeFromWatchList */
export type RemoveFromWatchListInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
}

/** Autogenerated input type of requestPasskey */
export type RequestPasskeyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** Autogenerated input type of requestTotp */
export type RequestTotpInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
}

/** Autogenerated return type of requestTotp. */
export type RequestTotpPayload = {
  __typename?: 'requestTotpPayload'
  /** The account name associated with the TOTP token */
  accountName: Scalars['String']['output']
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>
  /** The issuer of the TOTP token */
  issuer: Scalars['String']['output']
  /** The provisioning URI for the TOTP token */
  provisioningUri: Scalars['String']['output']
  /** The TOTP secret key used for generating tokens */
  secret: Scalars['String']['output']
}

/** Autogenerated input type of resetPassword */
export type ResetPasswordInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  confirmationId: Scalars['ID']['input']
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
}

/** Autogenerated input type of toggleWatchList */
export type ToggleWatchListInput = {
  add?: InputMaybe<Scalars['Boolean']['input']>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  key: Scalars['String']['input']
}

/** Autogenerated input type of updateAddress */
export type UpdateAddressInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  detail: AddressInput
  id: Scalars['ID']['input']
}

/** Autogenerated input type of updateBankAccount */
export type UpdateBankAccountInput = {
  bankId?: InputMaybe<Scalars['ID']['input']>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  currency?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  isDefault?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  number?: InputMaybe<Scalars['String']['input']>
  ownerId?: InputMaybe<Scalars['ID']['input']>
  ownerType?: InputMaybe<Scalars['String']['input']>
  position?: InputMaybe<Scalars['Int']['input']>
  preferences?: InputMaybe<Scalars['JSON']['input']>
}

/** Autogenerated input type of updateBank */
export type UpdateBankInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  code?: InputMaybe<Scalars['String']['input']>
  icon?: InputMaybe<Scalars['Upload']['input']>
  id: Scalars['ID']['input']
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  preferences?: InputMaybe<Scalars['JSON']['input']>
  swiftCode?: InputMaybe<Scalars['String']['input']>
}

/** Autogenerated input type of updateDevice */
export type UpdateDeviceInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  deviceId: Scalars['ID']['input']
  id?: InputMaybe<Scalars['ID']['input']>
  pin?: InputMaybe<Scalars['String']['input']>
  pushToken?: InputMaybe<Scalars['JSON']['input']>
}

/** Autogenerated input type of updateKYCProfile */
export type UpdateKycProfileInput = {
  address?: InputMaybe<AddressInput>
  birthday?: InputMaybe<Scalars['ISO8601Date']['input']>
  citizenIdNumber?: InputMaybe<Scalars['RegisterNumber']['input']>
  citizenshipId?: InputMaybe<Scalars['ID']['input']>
  civilId?: InputMaybe<Scalars['String']['input']>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  drivingLicense?: InputMaybe<Scalars['String']['input']>
  familyName?: InputMaybe<Scalars['String']['input']>
  firstName?: InputMaybe<Scalars['String']['input']>
  gender?: InputMaybe<Scalars['String']['input']>
  lastName?: InputMaybe<Scalars['String']['input']>
  middleName?: InputMaybe<Scalars['String']['input']>
  nationalityId?: InputMaybe<Scalars['ID']['input']>
  passportNumber?: InputMaybe<Scalars['String']['input']>
}

/** Autogenerated input type of updateNote */
export type UpdateNoteInput = {
  body: Scalars['String']['input']
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
}

/** Autogenerated input type of updatePasskey */
export type UpdatePasskeyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  label?: InputMaybe<Scalars['String']['input']>
}

/** Autogenerated input type of updateUser */
export type UpdateUserInput = {
  auditComment?: InputMaybe<Scalars['String']['input']>
  avatar?: InputMaybe<Scalars['Upload']['input']>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['Email']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  language?: InputMaybe<Scalars['String']['input']>
  level?: InputMaybe<Scalars['String']['input']>
  note?: InputMaybe<Scalars['String']['input']>
  phone?: InputMaybe<Scalars['Phone']['input']>
  status?: InputMaybe<Scalars['Int']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}

/** Autogenerated input type of uploadKYCDocument */
export type UploadKycDocumentInput = {
  /** The back side of the document image (if applicable). */
  backFile?: InputMaybe<Scalars['Upload']['input']>
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>
  documentNumber?: InputMaybe<Scalars['String']['input']>
  documentType: Scalars['String']['input']
  expiryDate?: InputMaybe<Scalars['ISO8601Date']['input']>
  /** The front side of the document image. */
  frontFile: Scalars['Upload']['input']
  issueDate?: InputMaybe<Scalars['ISO8601Date']['input']>
  issuingCountry?: InputMaybe<Scalars['String']['input']>
}
