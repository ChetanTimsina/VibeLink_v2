
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model VibeUserTable
 * 
 */
export type VibeUserTable = $Result.DefaultSelection<Prisma.$VibeUserTablePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more VibeUserTables
 * const vibeUserTables = await prisma.vibeUserTable.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more VibeUserTables
   * const vibeUserTables = await prisma.vibeUserTable.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.vibeUserTable`: Exposes CRUD operations for the **VibeUserTable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VibeUserTables
    * const vibeUserTables = await prisma.vibeUserTable.findMany()
    * ```
    */
  get vibeUserTable(): Prisma.VibeUserTableDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    VibeUserTable: 'VibeUserTable'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "vibeUserTable"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      VibeUserTable: {
        payload: Prisma.$VibeUserTablePayload<ExtArgs>
        fields: Prisma.VibeUserTableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VibeUserTableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeUserTablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VibeUserTableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeUserTablePayload>
          }
          findFirst: {
            args: Prisma.VibeUserTableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeUserTablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VibeUserTableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeUserTablePayload>
          }
          findMany: {
            args: Prisma.VibeUserTableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeUserTablePayload>[]
          }
          create: {
            args: Prisma.VibeUserTableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeUserTablePayload>
          }
          createMany: {
            args: Prisma.VibeUserTableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VibeUserTableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeUserTablePayload>[]
          }
          delete: {
            args: Prisma.VibeUserTableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeUserTablePayload>
          }
          update: {
            args: Prisma.VibeUserTableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeUserTablePayload>
          }
          deleteMany: {
            args: Prisma.VibeUserTableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VibeUserTableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VibeUserTableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeUserTablePayload>[]
          }
          upsert: {
            args: Prisma.VibeUserTableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VibeUserTablePayload>
          }
          aggregate: {
            args: Prisma.VibeUserTableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVibeUserTable>
          }
          groupBy: {
            args: Prisma.VibeUserTableGroupByArgs<ExtArgs>
            result: $Utils.Optional<VibeUserTableGroupByOutputType>[]
          }
          count: {
            args: Prisma.VibeUserTableCountArgs<ExtArgs>
            result: $Utils.Optional<VibeUserTableCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    vibeUserTable?: VibeUserTableOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model VibeUserTable
   */

  export type AggregateVibeUserTable = {
    _count: VibeUserTableCountAggregateOutputType | null
    _avg: VibeUserTableAvgAggregateOutputType | null
    _sum: VibeUserTableSumAggregateOutputType | null
    _min: VibeUserTableMinAggregateOutputType | null
    _max: VibeUserTableMaxAggregateOutputType | null
  }

  export type VibeUserTableAvgAggregateOutputType = {
    id: number | null
  }

  export type VibeUserTableSumAggregateOutputType = {
    id: number | null
  }

  export type VibeUserTableMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type VibeUserTableMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type VibeUserTableCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    _all: number
  }


  export type VibeUserTableAvgAggregateInputType = {
    id?: true
  }

  export type VibeUserTableSumAggregateInputType = {
    id?: true
  }

  export type VibeUserTableMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type VibeUserTableMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type VibeUserTableCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    _all?: true
  }

  export type VibeUserTableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VibeUserTable to aggregate.
     */
    where?: VibeUserTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VibeUserTables to fetch.
     */
    orderBy?: VibeUserTableOrderByWithRelationInput | VibeUserTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VibeUserTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VibeUserTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VibeUserTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VibeUserTables
    **/
    _count?: true | VibeUserTableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VibeUserTableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VibeUserTableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VibeUserTableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VibeUserTableMaxAggregateInputType
  }

  export type GetVibeUserTableAggregateType<T extends VibeUserTableAggregateArgs> = {
        [P in keyof T & keyof AggregateVibeUserTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVibeUserTable[P]>
      : GetScalarType<T[P], AggregateVibeUserTable[P]>
  }




  export type VibeUserTableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VibeUserTableWhereInput
    orderBy?: VibeUserTableOrderByWithAggregationInput | VibeUserTableOrderByWithAggregationInput[]
    by: VibeUserTableScalarFieldEnum[] | VibeUserTableScalarFieldEnum
    having?: VibeUserTableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VibeUserTableCountAggregateInputType | true
    _avg?: VibeUserTableAvgAggregateInputType
    _sum?: VibeUserTableSumAggregateInputType
    _min?: VibeUserTableMinAggregateInputType
    _max?: VibeUserTableMaxAggregateInputType
  }

  export type VibeUserTableGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    _count: VibeUserTableCountAggregateOutputType | null
    _avg: VibeUserTableAvgAggregateOutputType | null
    _sum: VibeUserTableSumAggregateOutputType | null
    _min: VibeUserTableMinAggregateOutputType | null
    _max: VibeUserTableMaxAggregateOutputType | null
  }

  type GetVibeUserTableGroupByPayload<T extends VibeUserTableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VibeUserTableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VibeUserTableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VibeUserTableGroupByOutputType[P]>
            : GetScalarType<T[P], VibeUserTableGroupByOutputType[P]>
        }
      >
    >


  export type VibeUserTableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["vibeUserTable"]>

  export type VibeUserTableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["vibeUserTable"]>

  export type VibeUserTableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["vibeUserTable"]>

  export type VibeUserTableSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }

  export type VibeUserTableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password", ExtArgs["result"]["vibeUserTable"]>

  export type $VibeUserTablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VibeUserTable"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
    }, ExtArgs["result"]["vibeUserTable"]>
    composites: {}
  }

  type VibeUserTableGetPayload<S extends boolean | null | undefined | VibeUserTableDefaultArgs> = $Result.GetResult<Prisma.$VibeUserTablePayload, S>

  type VibeUserTableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VibeUserTableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VibeUserTableCountAggregateInputType | true
    }

  export interface VibeUserTableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VibeUserTable'], meta: { name: 'VibeUserTable' } }
    /**
     * Find zero or one VibeUserTable that matches the filter.
     * @param {VibeUserTableFindUniqueArgs} args - Arguments to find a VibeUserTable
     * @example
     * // Get one VibeUserTable
     * const vibeUserTable = await prisma.vibeUserTable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VibeUserTableFindUniqueArgs>(args: SelectSubset<T, VibeUserTableFindUniqueArgs<ExtArgs>>): Prisma__VibeUserTableClient<$Result.GetResult<Prisma.$VibeUserTablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VibeUserTable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VibeUserTableFindUniqueOrThrowArgs} args - Arguments to find a VibeUserTable
     * @example
     * // Get one VibeUserTable
     * const vibeUserTable = await prisma.vibeUserTable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VibeUserTableFindUniqueOrThrowArgs>(args: SelectSubset<T, VibeUserTableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VibeUserTableClient<$Result.GetResult<Prisma.$VibeUserTablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VibeUserTable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeUserTableFindFirstArgs} args - Arguments to find a VibeUserTable
     * @example
     * // Get one VibeUserTable
     * const vibeUserTable = await prisma.vibeUserTable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VibeUserTableFindFirstArgs>(args?: SelectSubset<T, VibeUserTableFindFirstArgs<ExtArgs>>): Prisma__VibeUserTableClient<$Result.GetResult<Prisma.$VibeUserTablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VibeUserTable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeUserTableFindFirstOrThrowArgs} args - Arguments to find a VibeUserTable
     * @example
     * // Get one VibeUserTable
     * const vibeUserTable = await prisma.vibeUserTable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VibeUserTableFindFirstOrThrowArgs>(args?: SelectSubset<T, VibeUserTableFindFirstOrThrowArgs<ExtArgs>>): Prisma__VibeUserTableClient<$Result.GetResult<Prisma.$VibeUserTablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VibeUserTables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeUserTableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VibeUserTables
     * const vibeUserTables = await prisma.vibeUserTable.findMany()
     * 
     * // Get first 10 VibeUserTables
     * const vibeUserTables = await prisma.vibeUserTable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vibeUserTableWithIdOnly = await prisma.vibeUserTable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VibeUserTableFindManyArgs>(args?: SelectSubset<T, VibeUserTableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VibeUserTablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VibeUserTable.
     * @param {VibeUserTableCreateArgs} args - Arguments to create a VibeUserTable.
     * @example
     * // Create one VibeUserTable
     * const VibeUserTable = await prisma.vibeUserTable.create({
     *   data: {
     *     // ... data to create a VibeUserTable
     *   }
     * })
     * 
     */
    create<T extends VibeUserTableCreateArgs>(args: SelectSubset<T, VibeUserTableCreateArgs<ExtArgs>>): Prisma__VibeUserTableClient<$Result.GetResult<Prisma.$VibeUserTablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VibeUserTables.
     * @param {VibeUserTableCreateManyArgs} args - Arguments to create many VibeUserTables.
     * @example
     * // Create many VibeUserTables
     * const vibeUserTable = await prisma.vibeUserTable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VibeUserTableCreateManyArgs>(args?: SelectSubset<T, VibeUserTableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VibeUserTables and returns the data saved in the database.
     * @param {VibeUserTableCreateManyAndReturnArgs} args - Arguments to create many VibeUserTables.
     * @example
     * // Create many VibeUserTables
     * const vibeUserTable = await prisma.vibeUserTable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VibeUserTables and only return the `id`
     * const vibeUserTableWithIdOnly = await prisma.vibeUserTable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VibeUserTableCreateManyAndReturnArgs>(args?: SelectSubset<T, VibeUserTableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VibeUserTablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VibeUserTable.
     * @param {VibeUserTableDeleteArgs} args - Arguments to delete one VibeUserTable.
     * @example
     * // Delete one VibeUserTable
     * const VibeUserTable = await prisma.vibeUserTable.delete({
     *   where: {
     *     // ... filter to delete one VibeUserTable
     *   }
     * })
     * 
     */
    delete<T extends VibeUserTableDeleteArgs>(args: SelectSubset<T, VibeUserTableDeleteArgs<ExtArgs>>): Prisma__VibeUserTableClient<$Result.GetResult<Prisma.$VibeUserTablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VibeUserTable.
     * @param {VibeUserTableUpdateArgs} args - Arguments to update one VibeUserTable.
     * @example
     * // Update one VibeUserTable
     * const vibeUserTable = await prisma.vibeUserTable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VibeUserTableUpdateArgs>(args: SelectSubset<T, VibeUserTableUpdateArgs<ExtArgs>>): Prisma__VibeUserTableClient<$Result.GetResult<Prisma.$VibeUserTablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VibeUserTables.
     * @param {VibeUserTableDeleteManyArgs} args - Arguments to filter VibeUserTables to delete.
     * @example
     * // Delete a few VibeUserTables
     * const { count } = await prisma.vibeUserTable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VibeUserTableDeleteManyArgs>(args?: SelectSubset<T, VibeUserTableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VibeUserTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeUserTableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VibeUserTables
     * const vibeUserTable = await prisma.vibeUserTable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VibeUserTableUpdateManyArgs>(args: SelectSubset<T, VibeUserTableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VibeUserTables and returns the data updated in the database.
     * @param {VibeUserTableUpdateManyAndReturnArgs} args - Arguments to update many VibeUserTables.
     * @example
     * // Update many VibeUserTables
     * const vibeUserTable = await prisma.vibeUserTable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VibeUserTables and only return the `id`
     * const vibeUserTableWithIdOnly = await prisma.vibeUserTable.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VibeUserTableUpdateManyAndReturnArgs>(args: SelectSubset<T, VibeUserTableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VibeUserTablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VibeUserTable.
     * @param {VibeUserTableUpsertArgs} args - Arguments to update or create a VibeUserTable.
     * @example
     * // Update or create a VibeUserTable
     * const vibeUserTable = await prisma.vibeUserTable.upsert({
     *   create: {
     *     // ... data to create a VibeUserTable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VibeUserTable we want to update
     *   }
     * })
     */
    upsert<T extends VibeUserTableUpsertArgs>(args: SelectSubset<T, VibeUserTableUpsertArgs<ExtArgs>>): Prisma__VibeUserTableClient<$Result.GetResult<Prisma.$VibeUserTablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VibeUserTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeUserTableCountArgs} args - Arguments to filter VibeUserTables to count.
     * @example
     * // Count the number of VibeUserTables
     * const count = await prisma.vibeUserTable.count({
     *   where: {
     *     // ... the filter for the VibeUserTables we want to count
     *   }
     * })
    **/
    count<T extends VibeUserTableCountArgs>(
      args?: Subset<T, VibeUserTableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VibeUserTableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VibeUserTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeUserTableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VibeUserTableAggregateArgs>(args: Subset<T, VibeUserTableAggregateArgs>): Prisma.PrismaPromise<GetVibeUserTableAggregateType<T>>

    /**
     * Group by VibeUserTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VibeUserTableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VibeUserTableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VibeUserTableGroupByArgs['orderBy'] }
        : { orderBy?: VibeUserTableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VibeUserTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVibeUserTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VibeUserTable model
   */
  readonly fields: VibeUserTableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VibeUserTable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VibeUserTableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VibeUserTable model
   */
  interface VibeUserTableFieldRefs {
    readonly id: FieldRef<"VibeUserTable", 'Int'>
    readonly username: FieldRef<"VibeUserTable", 'String'>
    readonly email: FieldRef<"VibeUserTable", 'String'>
    readonly password: FieldRef<"VibeUserTable", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VibeUserTable findUnique
   */
  export type VibeUserTableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeUserTable
     */
    select?: VibeUserTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeUserTable
     */
    omit?: VibeUserTableOmit<ExtArgs> | null
    /**
     * Filter, which VibeUserTable to fetch.
     */
    where: VibeUserTableWhereUniqueInput
  }

  /**
   * VibeUserTable findUniqueOrThrow
   */
  export type VibeUserTableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeUserTable
     */
    select?: VibeUserTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeUserTable
     */
    omit?: VibeUserTableOmit<ExtArgs> | null
    /**
     * Filter, which VibeUserTable to fetch.
     */
    where: VibeUserTableWhereUniqueInput
  }

  /**
   * VibeUserTable findFirst
   */
  export type VibeUserTableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeUserTable
     */
    select?: VibeUserTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeUserTable
     */
    omit?: VibeUserTableOmit<ExtArgs> | null
    /**
     * Filter, which VibeUserTable to fetch.
     */
    where?: VibeUserTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VibeUserTables to fetch.
     */
    orderBy?: VibeUserTableOrderByWithRelationInput | VibeUserTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VibeUserTables.
     */
    cursor?: VibeUserTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VibeUserTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VibeUserTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VibeUserTables.
     */
    distinct?: VibeUserTableScalarFieldEnum | VibeUserTableScalarFieldEnum[]
  }

  /**
   * VibeUserTable findFirstOrThrow
   */
  export type VibeUserTableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeUserTable
     */
    select?: VibeUserTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeUserTable
     */
    omit?: VibeUserTableOmit<ExtArgs> | null
    /**
     * Filter, which VibeUserTable to fetch.
     */
    where?: VibeUserTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VibeUserTables to fetch.
     */
    orderBy?: VibeUserTableOrderByWithRelationInput | VibeUserTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VibeUserTables.
     */
    cursor?: VibeUserTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VibeUserTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VibeUserTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VibeUserTables.
     */
    distinct?: VibeUserTableScalarFieldEnum | VibeUserTableScalarFieldEnum[]
  }

  /**
   * VibeUserTable findMany
   */
  export type VibeUserTableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeUserTable
     */
    select?: VibeUserTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeUserTable
     */
    omit?: VibeUserTableOmit<ExtArgs> | null
    /**
     * Filter, which VibeUserTables to fetch.
     */
    where?: VibeUserTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VibeUserTables to fetch.
     */
    orderBy?: VibeUserTableOrderByWithRelationInput | VibeUserTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VibeUserTables.
     */
    cursor?: VibeUserTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VibeUserTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VibeUserTables.
     */
    skip?: number
    distinct?: VibeUserTableScalarFieldEnum | VibeUserTableScalarFieldEnum[]
  }

  /**
   * VibeUserTable create
   */
  export type VibeUserTableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeUserTable
     */
    select?: VibeUserTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeUserTable
     */
    omit?: VibeUserTableOmit<ExtArgs> | null
    /**
     * The data needed to create a VibeUserTable.
     */
    data: XOR<VibeUserTableCreateInput, VibeUserTableUncheckedCreateInput>
  }

  /**
   * VibeUserTable createMany
   */
  export type VibeUserTableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VibeUserTables.
     */
    data: VibeUserTableCreateManyInput | VibeUserTableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VibeUserTable createManyAndReturn
   */
  export type VibeUserTableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeUserTable
     */
    select?: VibeUserTableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VibeUserTable
     */
    omit?: VibeUserTableOmit<ExtArgs> | null
    /**
     * The data used to create many VibeUserTables.
     */
    data: VibeUserTableCreateManyInput | VibeUserTableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VibeUserTable update
   */
  export type VibeUserTableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeUserTable
     */
    select?: VibeUserTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeUserTable
     */
    omit?: VibeUserTableOmit<ExtArgs> | null
    /**
     * The data needed to update a VibeUserTable.
     */
    data: XOR<VibeUserTableUpdateInput, VibeUserTableUncheckedUpdateInput>
    /**
     * Choose, which VibeUserTable to update.
     */
    where: VibeUserTableWhereUniqueInput
  }

  /**
   * VibeUserTable updateMany
   */
  export type VibeUserTableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VibeUserTables.
     */
    data: XOR<VibeUserTableUpdateManyMutationInput, VibeUserTableUncheckedUpdateManyInput>
    /**
     * Filter which VibeUserTables to update
     */
    where?: VibeUserTableWhereInput
    /**
     * Limit how many VibeUserTables to update.
     */
    limit?: number
  }

  /**
   * VibeUserTable updateManyAndReturn
   */
  export type VibeUserTableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeUserTable
     */
    select?: VibeUserTableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VibeUserTable
     */
    omit?: VibeUserTableOmit<ExtArgs> | null
    /**
     * The data used to update VibeUserTables.
     */
    data: XOR<VibeUserTableUpdateManyMutationInput, VibeUserTableUncheckedUpdateManyInput>
    /**
     * Filter which VibeUserTables to update
     */
    where?: VibeUserTableWhereInput
    /**
     * Limit how many VibeUserTables to update.
     */
    limit?: number
  }

  /**
   * VibeUserTable upsert
   */
  export type VibeUserTableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeUserTable
     */
    select?: VibeUserTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeUserTable
     */
    omit?: VibeUserTableOmit<ExtArgs> | null
    /**
     * The filter to search for the VibeUserTable to update in case it exists.
     */
    where: VibeUserTableWhereUniqueInput
    /**
     * In case the VibeUserTable found by the `where` argument doesn't exist, create a new VibeUserTable with this data.
     */
    create: XOR<VibeUserTableCreateInput, VibeUserTableUncheckedCreateInput>
    /**
     * In case the VibeUserTable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VibeUserTableUpdateInput, VibeUserTableUncheckedUpdateInput>
  }

  /**
   * VibeUserTable delete
   */
  export type VibeUserTableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeUserTable
     */
    select?: VibeUserTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeUserTable
     */
    omit?: VibeUserTableOmit<ExtArgs> | null
    /**
     * Filter which VibeUserTable to delete.
     */
    where: VibeUserTableWhereUniqueInput
  }

  /**
   * VibeUserTable deleteMany
   */
  export type VibeUserTableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VibeUserTables to delete
     */
    where?: VibeUserTableWhereInput
    /**
     * Limit how many VibeUserTables to delete.
     */
    limit?: number
  }

  /**
   * VibeUserTable without action
   */
  export type VibeUserTableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VibeUserTable
     */
    select?: VibeUserTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VibeUserTable
     */
    omit?: VibeUserTableOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VibeUserTableScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type VibeUserTableScalarFieldEnum = (typeof VibeUserTableScalarFieldEnum)[keyof typeof VibeUserTableScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type VibeUserTableWhereInput = {
    AND?: VibeUserTableWhereInput | VibeUserTableWhereInput[]
    OR?: VibeUserTableWhereInput[]
    NOT?: VibeUserTableWhereInput | VibeUserTableWhereInput[]
    id?: IntFilter<"VibeUserTable"> | number
    username?: StringFilter<"VibeUserTable"> | string
    email?: StringFilter<"VibeUserTable"> | string
    password?: StringFilter<"VibeUserTable"> | string
  }

  export type VibeUserTableOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type VibeUserTableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: VibeUserTableWhereInput | VibeUserTableWhereInput[]
    OR?: VibeUserTableWhereInput[]
    NOT?: VibeUserTableWhereInput | VibeUserTableWhereInput[]
    password?: StringFilter<"VibeUserTable"> | string
  }, "id" | "username" | "email">

  export type VibeUserTableOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: VibeUserTableCountOrderByAggregateInput
    _avg?: VibeUserTableAvgOrderByAggregateInput
    _max?: VibeUserTableMaxOrderByAggregateInput
    _min?: VibeUserTableMinOrderByAggregateInput
    _sum?: VibeUserTableSumOrderByAggregateInput
  }

  export type VibeUserTableScalarWhereWithAggregatesInput = {
    AND?: VibeUserTableScalarWhereWithAggregatesInput | VibeUserTableScalarWhereWithAggregatesInput[]
    OR?: VibeUserTableScalarWhereWithAggregatesInput[]
    NOT?: VibeUserTableScalarWhereWithAggregatesInput | VibeUserTableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VibeUserTable"> | number
    username?: StringWithAggregatesFilter<"VibeUserTable"> | string
    email?: StringWithAggregatesFilter<"VibeUserTable"> | string
    password?: StringWithAggregatesFilter<"VibeUserTable"> | string
  }

  export type VibeUserTableCreateInput = {
    username: string
    email: string
    password: string
  }

  export type VibeUserTableUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
  }

  export type VibeUserTableUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type VibeUserTableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type VibeUserTableCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
  }

  export type VibeUserTableUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type VibeUserTableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type VibeUserTableCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type VibeUserTableAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VibeUserTableMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type VibeUserTableMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type VibeUserTableSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}