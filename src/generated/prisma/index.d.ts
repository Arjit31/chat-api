
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model BroadcastMessage
 * 
 */
export type BroadcastMessage = $Result.DefaultSelection<Prisma.$BroadcastMessagePayload>
/**
 * Model PersonalMessage
 * 
 */
export type PersonalMessage = $Result.DefaultSelection<Prisma.$PersonalMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MessageType: {
  Anonymous: 'Anonymous',
  Reveal: 'Reveal'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]

}

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.broadcastMessage`: Exposes CRUD operations for the **BroadcastMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BroadcastMessages
    * const broadcastMessages = await prisma.broadcastMessage.findMany()
    * ```
    */
  get broadcastMessage(): Prisma.BroadcastMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personalMessage`: Exposes CRUD operations for the **PersonalMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonalMessages
    * const personalMessages = await prisma.personalMessage.findMany()
    * ```
    */
  get personalMessage(): Prisma.PersonalMessageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    BroadcastMessage: 'BroadcastMessage',
    PersonalMessage: 'PersonalMessage'
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
      modelProps: "user" | "broadcastMessage" | "personalMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BroadcastMessage: {
        payload: Prisma.$BroadcastMessagePayload<ExtArgs>
        fields: Prisma.BroadcastMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BroadcastMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BroadcastMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>
          }
          findFirst: {
            args: Prisma.BroadcastMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BroadcastMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>
          }
          findMany: {
            args: Prisma.BroadcastMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>[]
          }
          create: {
            args: Prisma.BroadcastMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>
          }
          createMany: {
            args: Prisma.BroadcastMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BroadcastMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>[]
          }
          delete: {
            args: Prisma.BroadcastMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>
          }
          update: {
            args: Prisma.BroadcastMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>
          }
          deleteMany: {
            args: Prisma.BroadcastMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BroadcastMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BroadcastMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>[]
          }
          upsert: {
            args: Prisma.BroadcastMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>
          }
          aggregate: {
            args: Prisma.BroadcastMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBroadcastMessage>
          }
          groupBy: {
            args: Prisma.BroadcastMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<BroadcastMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.BroadcastMessageCountArgs<ExtArgs>
            result: $Utils.Optional<BroadcastMessageCountAggregateOutputType> | number
          }
        }
      }
      PersonalMessage: {
        payload: Prisma.$PersonalMessagePayload<ExtArgs>
        fields: Prisma.PersonalMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalMessagePayload>
          }
          findFirst: {
            args: Prisma.PersonalMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalMessagePayload>
          }
          findMany: {
            args: Prisma.PersonalMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalMessagePayload>[]
          }
          create: {
            args: Prisma.PersonalMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalMessagePayload>
          }
          createMany: {
            args: Prisma.PersonalMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonalMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalMessagePayload>[]
          }
          delete: {
            args: Prisma.PersonalMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalMessagePayload>
          }
          update: {
            args: Prisma.PersonalMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalMessagePayload>
          }
          deleteMany: {
            args: Prisma.PersonalMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonalMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalMessagePayload>[]
          }
          upsert: {
            args: Prisma.PersonalMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalMessagePayload>
          }
          aggregate: {
            args: Prisma.PersonalMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonalMessage>
          }
          groupBy: {
            args: Prisma.PersonalMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalMessageCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalMessageCountAggregateOutputType> | number
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
    user?: UserOmit
    broadcastMessage?: BroadcastMessageOmit
    personalMessage?: PersonalMessageOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    broadcasts: number
    sentMessages: number
    receivedMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broadcasts?: boolean | UserCountOutputTypeCountBroadcastsArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBroadcastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BroadcastMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    googleId: string | null
    profilePicture: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    googleId: string | null
    profilePicture: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    googleId: number
    profilePicture: number
    location: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    googleId?: true
    profilePicture?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    googleId?: true
    profilePicture?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    googleId?: true
    profilePicture?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    googleId: string | null
    profilePicture: string | null
    location: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    googleId?: boolean
    profilePicture?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    broadcasts?: boolean | User$broadcastsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    googleId?: boolean
    profilePicture?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    googleId?: boolean
    profilePicture?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    googleId?: boolean
    profilePicture?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "googleId" | "profilePicture" | "location" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broadcasts?: boolean | User$broadcastsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      broadcasts: Prisma.$BroadcastMessagePayload<ExtArgs>[]
      sentMessages: Prisma.$PersonalMessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$PersonalMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      googleId: string | null
      profilePicture: string | null
      location: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    broadcasts<T extends User$broadcastsArgs<ExtArgs> = {}>(args?: Subset<T, User$broadcastsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.broadcasts
   */
  export type User$broadcastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    where?: BroadcastMessageWhereInput
    orderBy?: BroadcastMessageOrderByWithRelationInput | BroadcastMessageOrderByWithRelationInput[]
    cursor?: BroadcastMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BroadcastMessageScalarFieldEnum | BroadcastMessageScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalMessage
     */
    select?: PersonalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalMessage
     */
    omit?: PersonalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalMessageInclude<ExtArgs> | null
    where?: PersonalMessageWhereInput
    orderBy?: PersonalMessageOrderByWithRelationInput | PersonalMessageOrderByWithRelationInput[]
    cursor?: PersonalMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonalMessageScalarFieldEnum | PersonalMessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalMessage
     */
    select?: PersonalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalMessage
     */
    omit?: PersonalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalMessageInclude<ExtArgs> | null
    where?: PersonalMessageWhereInput
    orderBy?: PersonalMessageOrderByWithRelationInput | PersonalMessageOrderByWithRelationInput[]
    cursor?: PersonalMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonalMessageScalarFieldEnum | PersonalMessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BroadcastMessage
   */

  export type AggregateBroadcastMessage = {
    _count: BroadcastMessageCountAggregateOutputType | null
    _avg: BroadcastMessageAvgAggregateOutputType | null
    _sum: BroadcastMessageSumAggregateOutputType | null
    _min: BroadcastMessageMinAggregateOutputType | null
    _max: BroadcastMessageMaxAggregateOutputType | null
  }

  export type BroadcastMessageAvgAggregateOutputType = {
    serialNo: number | null
    randomNo: number | null
  }

  export type BroadcastMessageSumAggregateOutputType = {
    serialNo: number | null
    randomNo: number | null
  }

  export type BroadcastMessageMinAggregateOutputType = {
    id: string | null
    serialNo: number | null
    randomNo: number | null
    text: string | null
    type: $Enums.MessageType | null
    createdAt: Date | null
    userId: string | null
  }

  export type BroadcastMessageMaxAggregateOutputType = {
    id: string | null
    serialNo: number | null
    randomNo: number | null
    text: string | null
    type: $Enums.MessageType | null
    createdAt: Date | null
    userId: string | null
  }

  export type BroadcastMessageCountAggregateOutputType = {
    id: number
    serialNo: number
    randomNo: number
    text: number
    type: number
    createdAt: number
    userId: number
    _all: number
  }


  export type BroadcastMessageAvgAggregateInputType = {
    serialNo?: true
    randomNo?: true
  }

  export type BroadcastMessageSumAggregateInputType = {
    serialNo?: true
    randomNo?: true
  }

  export type BroadcastMessageMinAggregateInputType = {
    id?: true
    serialNo?: true
    randomNo?: true
    text?: true
    type?: true
    createdAt?: true
    userId?: true
  }

  export type BroadcastMessageMaxAggregateInputType = {
    id?: true
    serialNo?: true
    randomNo?: true
    text?: true
    type?: true
    createdAt?: true
    userId?: true
  }

  export type BroadcastMessageCountAggregateInputType = {
    id?: true
    serialNo?: true
    randomNo?: true
    text?: true
    type?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type BroadcastMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BroadcastMessage to aggregate.
     */
    where?: BroadcastMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastMessages to fetch.
     */
    orderBy?: BroadcastMessageOrderByWithRelationInput | BroadcastMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BroadcastMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BroadcastMessages
    **/
    _count?: true | BroadcastMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BroadcastMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BroadcastMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BroadcastMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BroadcastMessageMaxAggregateInputType
  }

  export type GetBroadcastMessageAggregateType<T extends BroadcastMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateBroadcastMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBroadcastMessage[P]>
      : GetScalarType<T[P], AggregateBroadcastMessage[P]>
  }




  export type BroadcastMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BroadcastMessageWhereInput
    orderBy?: BroadcastMessageOrderByWithAggregationInput | BroadcastMessageOrderByWithAggregationInput[]
    by: BroadcastMessageScalarFieldEnum[] | BroadcastMessageScalarFieldEnum
    having?: BroadcastMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BroadcastMessageCountAggregateInputType | true
    _avg?: BroadcastMessageAvgAggregateInputType
    _sum?: BroadcastMessageSumAggregateInputType
    _min?: BroadcastMessageMinAggregateInputType
    _max?: BroadcastMessageMaxAggregateInputType
  }

  export type BroadcastMessageGroupByOutputType = {
    id: string
    serialNo: number
    randomNo: number
    text: string
    type: $Enums.MessageType
    createdAt: Date
    userId: string
    _count: BroadcastMessageCountAggregateOutputType | null
    _avg: BroadcastMessageAvgAggregateOutputType | null
    _sum: BroadcastMessageSumAggregateOutputType | null
    _min: BroadcastMessageMinAggregateOutputType | null
    _max: BroadcastMessageMaxAggregateOutputType | null
  }

  type GetBroadcastMessageGroupByPayload<T extends BroadcastMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BroadcastMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BroadcastMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BroadcastMessageGroupByOutputType[P]>
            : GetScalarType<T[P], BroadcastMessageGroupByOutputType[P]>
        }
      >
    >


  export type BroadcastMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNo?: boolean
    randomNo?: boolean
    text?: boolean
    type?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["broadcastMessage"]>

  export type BroadcastMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNo?: boolean
    randomNo?: boolean
    text?: boolean
    type?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["broadcastMessage"]>

  export type BroadcastMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNo?: boolean
    randomNo?: boolean
    text?: boolean
    type?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["broadcastMessage"]>

  export type BroadcastMessageSelectScalar = {
    id?: boolean
    serialNo?: boolean
    randomNo?: boolean
    text?: boolean
    type?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type BroadcastMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serialNo" | "randomNo" | "text" | "type" | "createdAt" | "userId", ExtArgs["result"]["broadcastMessage"]>
  export type BroadcastMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BroadcastMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BroadcastMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BroadcastMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BroadcastMessage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serialNo: number
      randomNo: number
      text: string
      type: $Enums.MessageType
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["broadcastMessage"]>
    composites: {}
  }

  type BroadcastMessageGetPayload<S extends boolean | null | undefined | BroadcastMessageDefaultArgs> = $Result.GetResult<Prisma.$BroadcastMessagePayload, S>

  type BroadcastMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BroadcastMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BroadcastMessageCountAggregateInputType | true
    }

  export interface BroadcastMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BroadcastMessage'], meta: { name: 'BroadcastMessage' } }
    /**
     * Find zero or one BroadcastMessage that matches the filter.
     * @param {BroadcastMessageFindUniqueArgs} args - Arguments to find a BroadcastMessage
     * @example
     * // Get one BroadcastMessage
     * const broadcastMessage = await prisma.broadcastMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BroadcastMessageFindUniqueArgs>(args: SelectSubset<T, BroadcastMessageFindUniqueArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BroadcastMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BroadcastMessageFindUniqueOrThrowArgs} args - Arguments to find a BroadcastMessage
     * @example
     * // Get one BroadcastMessage
     * const broadcastMessage = await prisma.broadcastMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BroadcastMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, BroadcastMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BroadcastMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageFindFirstArgs} args - Arguments to find a BroadcastMessage
     * @example
     * // Get one BroadcastMessage
     * const broadcastMessage = await prisma.broadcastMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BroadcastMessageFindFirstArgs>(args?: SelectSubset<T, BroadcastMessageFindFirstArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BroadcastMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageFindFirstOrThrowArgs} args - Arguments to find a BroadcastMessage
     * @example
     * // Get one BroadcastMessage
     * const broadcastMessage = await prisma.broadcastMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BroadcastMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, BroadcastMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BroadcastMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BroadcastMessages
     * const broadcastMessages = await prisma.broadcastMessage.findMany()
     * 
     * // Get first 10 BroadcastMessages
     * const broadcastMessages = await prisma.broadcastMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const broadcastMessageWithIdOnly = await prisma.broadcastMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BroadcastMessageFindManyArgs>(args?: SelectSubset<T, BroadcastMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BroadcastMessage.
     * @param {BroadcastMessageCreateArgs} args - Arguments to create a BroadcastMessage.
     * @example
     * // Create one BroadcastMessage
     * const BroadcastMessage = await prisma.broadcastMessage.create({
     *   data: {
     *     // ... data to create a BroadcastMessage
     *   }
     * })
     * 
     */
    create<T extends BroadcastMessageCreateArgs>(args: SelectSubset<T, BroadcastMessageCreateArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BroadcastMessages.
     * @param {BroadcastMessageCreateManyArgs} args - Arguments to create many BroadcastMessages.
     * @example
     * // Create many BroadcastMessages
     * const broadcastMessage = await prisma.broadcastMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BroadcastMessageCreateManyArgs>(args?: SelectSubset<T, BroadcastMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BroadcastMessages and returns the data saved in the database.
     * @param {BroadcastMessageCreateManyAndReturnArgs} args - Arguments to create many BroadcastMessages.
     * @example
     * // Create many BroadcastMessages
     * const broadcastMessage = await prisma.broadcastMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BroadcastMessages and only return the `id`
     * const broadcastMessageWithIdOnly = await prisma.broadcastMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BroadcastMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, BroadcastMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BroadcastMessage.
     * @param {BroadcastMessageDeleteArgs} args - Arguments to delete one BroadcastMessage.
     * @example
     * // Delete one BroadcastMessage
     * const BroadcastMessage = await prisma.broadcastMessage.delete({
     *   where: {
     *     // ... filter to delete one BroadcastMessage
     *   }
     * })
     * 
     */
    delete<T extends BroadcastMessageDeleteArgs>(args: SelectSubset<T, BroadcastMessageDeleteArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BroadcastMessage.
     * @param {BroadcastMessageUpdateArgs} args - Arguments to update one BroadcastMessage.
     * @example
     * // Update one BroadcastMessage
     * const broadcastMessage = await prisma.broadcastMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BroadcastMessageUpdateArgs>(args: SelectSubset<T, BroadcastMessageUpdateArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BroadcastMessages.
     * @param {BroadcastMessageDeleteManyArgs} args - Arguments to filter BroadcastMessages to delete.
     * @example
     * // Delete a few BroadcastMessages
     * const { count } = await prisma.broadcastMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BroadcastMessageDeleteManyArgs>(args?: SelectSubset<T, BroadcastMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BroadcastMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BroadcastMessages
     * const broadcastMessage = await prisma.broadcastMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BroadcastMessageUpdateManyArgs>(args: SelectSubset<T, BroadcastMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BroadcastMessages and returns the data updated in the database.
     * @param {BroadcastMessageUpdateManyAndReturnArgs} args - Arguments to update many BroadcastMessages.
     * @example
     * // Update many BroadcastMessages
     * const broadcastMessage = await prisma.broadcastMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BroadcastMessages and only return the `id`
     * const broadcastMessageWithIdOnly = await prisma.broadcastMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends BroadcastMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, BroadcastMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BroadcastMessage.
     * @param {BroadcastMessageUpsertArgs} args - Arguments to update or create a BroadcastMessage.
     * @example
     * // Update or create a BroadcastMessage
     * const broadcastMessage = await prisma.broadcastMessage.upsert({
     *   create: {
     *     // ... data to create a BroadcastMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BroadcastMessage we want to update
     *   }
     * })
     */
    upsert<T extends BroadcastMessageUpsertArgs>(args: SelectSubset<T, BroadcastMessageUpsertArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BroadcastMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageCountArgs} args - Arguments to filter BroadcastMessages to count.
     * @example
     * // Count the number of BroadcastMessages
     * const count = await prisma.broadcastMessage.count({
     *   where: {
     *     // ... the filter for the BroadcastMessages we want to count
     *   }
     * })
    **/
    count<T extends BroadcastMessageCountArgs>(
      args?: Subset<T, BroadcastMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BroadcastMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BroadcastMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BroadcastMessageAggregateArgs>(args: Subset<T, BroadcastMessageAggregateArgs>): Prisma.PrismaPromise<GetBroadcastMessageAggregateType<T>>

    /**
     * Group by BroadcastMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageGroupByArgs} args - Group by arguments.
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
      T extends BroadcastMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BroadcastMessageGroupByArgs['orderBy'] }
        : { orderBy?: BroadcastMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BroadcastMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBroadcastMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BroadcastMessage model
   */
  readonly fields: BroadcastMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BroadcastMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BroadcastMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BroadcastMessage model
   */
  interface BroadcastMessageFieldRefs {
    readonly id: FieldRef<"BroadcastMessage", 'String'>
    readonly serialNo: FieldRef<"BroadcastMessage", 'Int'>
    readonly randomNo: FieldRef<"BroadcastMessage", 'Int'>
    readonly text: FieldRef<"BroadcastMessage", 'String'>
    readonly type: FieldRef<"BroadcastMessage", 'MessageType'>
    readonly createdAt: FieldRef<"BroadcastMessage", 'DateTime'>
    readonly userId: FieldRef<"BroadcastMessage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BroadcastMessage findUnique
   */
  export type BroadcastMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastMessage to fetch.
     */
    where: BroadcastMessageWhereUniqueInput
  }

  /**
   * BroadcastMessage findUniqueOrThrow
   */
  export type BroadcastMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastMessage to fetch.
     */
    where: BroadcastMessageWhereUniqueInput
  }

  /**
   * BroadcastMessage findFirst
   */
  export type BroadcastMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastMessage to fetch.
     */
    where?: BroadcastMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastMessages to fetch.
     */
    orderBy?: BroadcastMessageOrderByWithRelationInput | BroadcastMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BroadcastMessages.
     */
    cursor?: BroadcastMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BroadcastMessages.
     */
    distinct?: BroadcastMessageScalarFieldEnum | BroadcastMessageScalarFieldEnum[]
  }

  /**
   * BroadcastMessage findFirstOrThrow
   */
  export type BroadcastMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastMessage to fetch.
     */
    where?: BroadcastMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastMessages to fetch.
     */
    orderBy?: BroadcastMessageOrderByWithRelationInput | BroadcastMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BroadcastMessages.
     */
    cursor?: BroadcastMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BroadcastMessages.
     */
    distinct?: BroadcastMessageScalarFieldEnum | BroadcastMessageScalarFieldEnum[]
  }

  /**
   * BroadcastMessage findMany
   */
  export type BroadcastMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastMessages to fetch.
     */
    where?: BroadcastMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastMessages to fetch.
     */
    orderBy?: BroadcastMessageOrderByWithRelationInput | BroadcastMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BroadcastMessages.
     */
    cursor?: BroadcastMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastMessages.
     */
    skip?: number
    distinct?: BroadcastMessageScalarFieldEnum | BroadcastMessageScalarFieldEnum[]
  }

  /**
   * BroadcastMessage create
   */
  export type BroadcastMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a BroadcastMessage.
     */
    data: XOR<BroadcastMessageCreateInput, BroadcastMessageUncheckedCreateInput>
  }

  /**
   * BroadcastMessage createMany
   */
  export type BroadcastMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BroadcastMessages.
     */
    data: BroadcastMessageCreateManyInput | BroadcastMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BroadcastMessage createManyAndReturn
   */
  export type BroadcastMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * The data used to create many BroadcastMessages.
     */
    data: BroadcastMessageCreateManyInput | BroadcastMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BroadcastMessage update
   */
  export type BroadcastMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a BroadcastMessage.
     */
    data: XOR<BroadcastMessageUpdateInput, BroadcastMessageUncheckedUpdateInput>
    /**
     * Choose, which BroadcastMessage to update.
     */
    where: BroadcastMessageWhereUniqueInput
  }

  /**
   * BroadcastMessage updateMany
   */
  export type BroadcastMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BroadcastMessages.
     */
    data: XOR<BroadcastMessageUpdateManyMutationInput, BroadcastMessageUncheckedUpdateManyInput>
    /**
     * Filter which BroadcastMessages to update
     */
    where?: BroadcastMessageWhereInput
    /**
     * Limit how many BroadcastMessages to update.
     */
    limit?: number
  }

  /**
   * BroadcastMessage updateManyAndReturn
   */
  export type BroadcastMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * The data used to update BroadcastMessages.
     */
    data: XOR<BroadcastMessageUpdateManyMutationInput, BroadcastMessageUncheckedUpdateManyInput>
    /**
     * Filter which BroadcastMessages to update
     */
    where?: BroadcastMessageWhereInput
    /**
     * Limit how many BroadcastMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BroadcastMessage upsert
   */
  export type BroadcastMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the BroadcastMessage to update in case it exists.
     */
    where: BroadcastMessageWhereUniqueInput
    /**
     * In case the BroadcastMessage found by the `where` argument doesn't exist, create a new BroadcastMessage with this data.
     */
    create: XOR<BroadcastMessageCreateInput, BroadcastMessageUncheckedCreateInput>
    /**
     * In case the BroadcastMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BroadcastMessageUpdateInput, BroadcastMessageUncheckedUpdateInput>
  }

  /**
   * BroadcastMessage delete
   */
  export type BroadcastMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * Filter which BroadcastMessage to delete.
     */
    where: BroadcastMessageWhereUniqueInput
  }

  /**
   * BroadcastMessage deleteMany
   */
  export type BroadcastMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BroadcastMessages to delete
     */
    where?: BroadcastMessageWhereInput
    /**
     * Limit how many BroadcastMessages to delete.
     */
    limit?: number
  }

  /**
   * BroadcastMessage without action
   */
  export type BroadcastMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
  }


  /**
   * Model PersonalMessage
   */

  export type AggregatePersonalMessage = {
    _count: PersonalMessageCountAggregateOutputType | null
    _min: PersonalMessageMinAggregateOutputType | null
    _max: PersonalMessageMaxAggregateOutputType | null
  }

  export type PersonalMessageMinAggregateOutputType = {
    id: string | null
    text: string | null
    createdAt: Date | null
    fromUserId: string | null
    toUserId: string | null
  }

  export type PersonalMessageMaxAggregateOutputType = {
    id: string | null
    text: string | null
    createdAt: Date | null
    fromUserId: string | null
    toUserId: string | null
  }

  export type PersonalMessageCountAggregateOutputType = {
    id: number
    text: number
    createdAt: number
    fromUserId: number
    toUserId: number
    _all: number
  }


  export type PersonalMessageMinAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    fromUserId?: true
    toUserId?: true
  }

  export type PersonalMessageMaxAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    fromUserId?: true
    toUserId?: true
  }

  export type PersonalMessageCountAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    fromUserId?: true
    toUserId?: true
    _all?: true
  }

  export type PersonalMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalMessage to aggregate.
     */
    where?: PersonalMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalMessages to fetch.
     */
    orderBy?: PersonalMessageOrderByWithRelationInput | PersonalMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonalMessages
    **/
    _count?: true | PersonalMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalMessageMaxAggregateInputType
  }

  export type GetPersonalMessageAggregateType<T extends PersonalMessageAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonalMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonalMessage[P]>
      : GetScalarType<T[P], AggregatePersonalMessage[P]>
  }




  export type PersonalMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalMessageWhereInput
    orderBy?: PersonalMessageOrderByWithAggregationInput | PersonalMessageOrderByWithAggregationInput[]
    by: PersonalMessageScalarFieldEnum[] | PersonalMessageScalarFieldEnum
    having?: PersonalMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalMessageCountAggregateInputType | true
    _min?: PersonalMessageMinAggregateInputType
    _max?: PersonalMessageMaxAggregateInputType
  }

  export type PersonalMessageGroupByOutputType = {
    id: string
    text: string
    createdAt: Date
    fromUserId: string
    toUserId: string
    _count: PersonalMessageCountAggregateOutputType | null
    _min: PersonalMessageMinAggregateOutputType | null
    _max: PersonalMessageMaxAggregateOutputType | null
  }

  type GetPersonalMessageGroupByPayload<T extends PersonalMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalMessageGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalMessageGroupByOutputType[P]>
        }
      >
    >


  export type PersonalMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalMessage"]>

  export type PersonalMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalMessage"]>

  export type PersonalMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalMessage"]>

  export type PersonalMessageSelectScalar = {
    id?: boolean
    text?: boolean
    createdAt?: boolean
    fromUserId?: boolean
    toUserId?: boolean
  }

  export type PersonalMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "createdAt" | "fromUserId" | "toUserId", ExtArgs["result"]["personalMessage"]>
  export type PersonalMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PersonalMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PersonalMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PersonalMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonalMessage"
    objects: {
      fromUser: Prisma.$UserPayload<ExtArgs>
      toUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      createdAt: Date
      fromUserId: string
      toUserId: string
    }, ExtArgs["result"]["personalMessage"]>
    composites: {}
  }

  type PersonalMessageGetPayload<S extends boolean | null | undefined | PersonalMessageDefaultArgs> = $Result.GetResult<Prisma.$PersonalMessagePayload, S>

  type PersonalMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalMessageCountAggregateInputType | true
    }

  export interface PersonalMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonalMessage'], meta: { name: 'PersonalMessage' } }
    /**
     * Find zero or one PersonalMessage that matches the filter.
     * @param {PersonalMessageFindUniqueArgs} args - Arguments to find a PersonalMessage
     * @example
     * // Get one PersonalMessage
     * const personalMessage = await prisma.personalMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalMessageFindUniqueArgs>(args: SelectSubset<T, PersonalMessageFindUniqueArgs<ExtArgs>>): Prisma__PersonalMessageClient<$Result.GetResult<Prisma.$PersonalMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonalMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalMessageFindUniqueOrThrowArgs} args - Arguments to find a PersonalMessage
     * @example
     * // Get one PersonalMessage
     * const personalMessage = await prisma.personalMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalMessageClient<$Result.GetResult<Prisma.$PersonalMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalMessageFindFirstArgs} args - Arguments to find a PersonalMessage
     * @example
     * // Get one PersonalMessage
     * const personalMessage = await prisma.personalMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalMessageFindFirstArgs>(args?: SelectSubset<T, PersonalMessageFindFirstArgs<ExtArgs>>): Prisma__PersonalMessageClient<$Result.GetResult<Prisma.$PersonalMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalMessageFindFirstOrThrowArgs} args - Arguments to find a PersonalMessage
     * @example
     * // Get one PersonalMessage
     * const personalMessage = await prisma.personalMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalMessageClient<$Result.GetResult<Prisma.$PersonalMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonalMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonalMessages
     * const personalMessages = await prisma.personalMessage.findMany()
     * 
     * // Get first 10 PersonalMessages
     * const personalMessages = await prisma.personalMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalMessageWithIdOnly = await prisma.personalMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonalMessageFindManyArgs>(args?: SelectSubset<T, PersonalMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonalMessage.
     * @param {PersonalMessageCreateArgs} args - Arguments to create a PersonalMessage.
     * @example
     * // Create one PersonalMessage
     * const PersonalMessage = await prisma.personalMessage.create({
     *   data: {
     *     // ... data to create a PersonalMessage
     *   }
     * })
     * 
     */
    create<T extends PersonalMessageCreateArgs>(args: SelectSubset<T, PersonalMessageCreateArgs<ExtArgs>>): Prisma__PersonalMessageClient<$Result.GetResult<Prisma.$PersonalMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonalMessages.
     * @param {PersonalMessageCreateManyArgs} args - Arguments to create many PersonalMessages.
     * @example
     * // Create many PersonalMessages
     * const personalMessage = await prisma.personalMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalMessageCreateManyArgs>(args?: SelectSubset<T, PersonalMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonalMessages and returns the data saved in the database.
     * @param {PersonalMessageCreateManyAndReturnArgs} args - Arguments to create many PersonalMessages.
     * @example
     * // Create many PersonalMessages
     * const personalMessage = await prisma.personalMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonalMessages and only return the `id`
     * const personalMessageWithIdOnly = await prisma.personalMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonalMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonalMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PersonalMessage.
     * @param {PersonalMessageDeleteArgs} args - Arguments to delete one PersonalMessage.
     * @example
     * // Delete one PersonalMessage
     * const PersonalMessage = await prisma.personalMessage.delete({
     *   where: {
     *     // ... filter to delete one PersonalMessage
     *   }
     * })
     * 
     */
    delete<T extends PersonalMessageDeleteArgs>(args: SelectSubset<T, PersonalMessageDeleteArgs<ExtArgs>>): Prisma__PersonalMessageClient<$Result.GetResult<Prisma.$PersonalMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonalMessage.
     * @param {PersonalMessageUpdateArgs} args - Arguments to update one PersonalMessage.
     * @example
     * // Update one PersonalMessage
     * const personalMessage = await prisma.personalMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalMessageUpdateArgs>(args: SelectSubset<T, PersonalMessageUpdateArgs<ExtArgs>>): Prisma__PersonalMessageClient<$Result.GetResult<Prisma.$PersonalMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonalMessages.
     * @param {PersonalMessageDeleteManyArgs} args - Arguments to filter PersonalMessages to delete.
     * @example
     * // Delete a few PersonalMessages
     * const { count } = await prisma.personalMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalMessageDeleteManyArgs>(args?: SelectSubset<T, PersonalMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonalMessages
     * const personalMessage = await prisma.personalMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalMessageUpdateManyArgs>(args: SelectSubset<T, PersonalMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalMessages and returns the data updated in the database.
     * @param {PersonalMessageUpdateManyAndReturnArgs} args - Arguments to update many PersonalMessages.
     * @example
     * // Update many PersonalMessages
     * const personalMessage = await prisma.personalMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PersonalMessages and only return the `id`
     * const personalMessageWithIdOnly = await prisma.personalMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends PersonalMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonalMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PersonalMessage.
     * @param {PersonalMessageUpsertArgs} args - Arguments to update or create a PersonalMessage.
     * @example
     * // Update or create a PersonalMessage
     * const personalMessage = await prisma.personalMessage.upsert({
     *   create: {
     *     // ... data to create a PersonalMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonalMessage we want to update
     *   }
     * })
     */
    upsert<T extends PersonalMessageUpsertArgs>(args: SelectSubset<T, PersonalMessageUpsertArgs<ExtArgs>>): Prisma__PersonalMessageClient<$Result.GetResult<Prisma.$PersonalMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonalMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalMessageCountArgs} args - Arguments to filter PersonalMessages to count.
     * @example
     * // Count the number of PersonalMessages
     * const count = await prisma.personalMessage.count({
     *   where: {
     *     // ... the filter for the PersonalMessages we want to count
     *   }
     * })
    **/
    count<T extends PersonalMessageCountArgs>(
      args?: Subset<T, PersonalMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonalMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonalMessageAggregateArgs>(args: Subset<T, PersonalMessageAggregateArgs>): Prisma.PrismaPromise<GetPersonalMessageAggregateType<T>>

    /**
     * Group by PersonalMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalMessageGroupByArgs} args - Group by arguments.
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
      T extends PersonalMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalMessageGroupByArgs['orderBy'] }
        : { orderBy?: PersonalMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonalMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonalMessage model
   */
  readonly fields: PersonalMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonalMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PersonalMessage model
   */
  interface PersonalMessageFieldRefs {
    readonly id: FieldRef<"PersonalMessage", 'String'>
    readonly text: FieldRef<"PersonalMessage", 'String'>
    readonly createdAt: FieldRef<"PersonalMessage", 'DateTime'>
    readonly fromUserId: FieldRef<"PersonalMessage", 'String'>
    readonly toUserId: FieldRef<"PersonalMessage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PersonalMessage findUnique
   */
  export type PersonalMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalMessage
     */
    select?: PersonalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalMessage
     */
    omit?: PersonalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalMessageInclude<ExtArgs> | null
    /**
     * Filter, which PersonalMessage to fetch.
     */
    where: PersonalMessageWhereUniqueInput
  }

  /**
   * PersonalMessage findUniqueOrThrow
   */
  export type PersonalMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalMessage
     */
    select?: PersonalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalMessage
     */
    omit?: PersonalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalMessageInclude<ExtArgs> | null
    /**
     * Filter, which PersonalMessage to fetch.
     */
    where: PersonalMessageWhereUniqueInput
  }

  /**
   * PersonalMessage findFirst
   */
  export type PersonalMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalMessage
     */
    select?: PersonalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalMessage
     */
    omit?: PersonalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalMessageInclude<ExtArgs> | null
    /**
     * Filter, which PersonalMessage to fetch.
     */
    where?: PersonalMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalMessages to fetch.
     */
    orderBy?: PersonalMessageOrderByWithRelationInput | PersonalMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalMessages.
     */
    cursor?: PersonalMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalMessages.
     */
    distinct?: PersonalMessageScalarFieldEnum | PersonalMessageScalarFieldEnum[]
  }

  /**
   * PersonalMessage findFirstOrThrow
   */
  export type PersonalMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalMessage
     */
    select?: PersonalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalMessage
     */
    omit?: PersonalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalMessageInclude<ExtArgs> | null
    /**
     * Filter, which PersonalMessage to fetch.
     */
    where?: PersonalMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalMessages to fetch.
     */
    orderBy?: PersonalMessageOrderByWithRelationInput | PersonalMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalMessages.
     */
    cursor?: PersonalMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalMessages.
     */
    distinct?: PersonalMessageScalarFieldEnum | PersonalMessageScalarFieldEnum[]
  }

  /**
   * PersonalMessage findMany
   */
  export type PersonalMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalMessage
     */
    select?: PersonalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalMessage
     */
    omit?: PersonalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalMessageInclude<ExtArgs> | null
    /**
     * Filter, which PersonalMessages to fetch.
     */
    where?: PersonalMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalMessages to fetch.
     */
    orderBy?: PersonalMessageOrderByWithRelationInput | PersonalMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonalMessages.
     */
    cursor?: PersonalMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalMessages.
     */
    skip?: number
    distinct?: PersonalMessageScalarFieldEnum | PersonalMessageScalarFieldEnum[]
  }

  /**
   * PersonalMessage create
   */
  export type PersonalMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalMessage
     */
    select?: PersonalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalMessage
     */
    omit?: PersonalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonalMessage.
     */
    data: XOR<PersonalMessageCreateInput, PersonalMessageUncheckedCreateInput>
  }

  /**
   * PersonalMessage createMany
   */
  export type PersonalMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonalMessages.
     */
    data: PersonalMessageCreateManyInput | PersonalMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonalMessage createManyAndReturn
   */
  export type PersonalMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalMessage
     */
    select?: PersonalMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalMessage
     */
    omit?: PersonalMessageOmit<ExtArgs> | null
    /**
     * The data used to create many PersonalMessages.
     */
    data: PersonalMessageCreateManyInput | PersonalMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalMessage update
   */
  export type PersonalMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalMessage
     */
    select?: PersonalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalMessage
     */
    omit?: PersonalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonalMessage.
     */
    data: XOR<PersonalMessageUpdateInput, PersonalMessageUncheckedUpdateInput>
    /**
     * Choose, which PersonalMessage to update.
     */
    where: PersonalMessageWhereUniqueInput
  }

  /**
   * PersonalMessage updateMany
   */
  export type PersonalMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonalMessages.
     */
    data: XOR<PersonalMessageUpdateManyMutationInput, PersonalMessageUncheckedUpdateManyInput>
    /**
     * Filter which PersonalMessages to update
     */
    where?: PersonalMessageWhereInput
    /**
     * Limit how many PersonalMessages to update.
     */
    limit?: number
  }

  /**
   * PersonalMessage updateManyAndReturn
   */
  export type PersonalMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalMessage
     */
    select?: PersonalMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalMessage
     */
    omit?: PersonalMessageOmit<ExtArgs> | null
    /**
     * The data used to update PersonalMessages.
     */
    data: XOR<PersonalMessageUpdateManyMutationInput, PersonalMessageUncheckedUpdateManyInput>
    /**
     * Filter which PersonalMessages to update
     */
    where?: PersonalMessageWhereInput
    /**
     * Limit how many PersonalMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalMessage upsert
   */
  export type PersonalMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalMessage
     */
    select?: PersonalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalMessage
     */
    omit?: PersonalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonalMessage to update in case it exists.
     */
    where: PersonalMessageWhereUniqueInput
    /**
     * In case the PersonalMessage found by the `where` argument doesn't exist, create a new PersonalMessage with this data.
     */
    create: XOR<PersonalMessageCreateInput, PersonalMessageUncheckedCreateInput>
    /**
     * In case the PersonalMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalMessageUpdateInput, PersonalMessageUncheckedUpdateInput>
  }

  /**
   * PersonalMessage delete
   */
  export type PersonalMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalMessage
     */
    select?: PersonalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalMessage
     */
    omit?: PersonalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalMessageInclude<ExtArgs> | null
    /**
     * Filter which PersonalMessage to delete.
     */
    where: PersonalMessageWhereUniqueInput
  }

  /**
   * PersonalMessage deleteMany
   */
  export type PersonalMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalMessages to delete
     */
    where?: PersonalMessageWhereInput
    /**
     * Limit how many PersonalMessages to delete.
     */
    limit?: number
  }

  /**
   * PersonalMessage without action
   */
  export type PersonalMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalMessage
     */
    select?: PersonalMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalMessage
     */
    omit?: PersonalMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalMessageInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    googleId: 'googleId',
    profilePicture: 'profilePicture',
    location: 'location',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BroadcastMessageScalarFieldEnum: {
    id: 'id',
    serialNo: 'serialNo',
    randomNo: 'randomNo',
    text: 'text',
    type: 'type',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type BroadcastMessageScalarFieldEnum = (typeof BroadcastMessageScalarFieldEnum)[keyof typeof BroadcastMessageScalarFieldEnum]


  export const PersonalMessageScalarFieldEnum: {
    id: 'id',
    text: 'text',
    createdAt: 'createdAt',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId'
  };

  export type PersonalMessageScalarFieldEnum = (typeof PersonalMessageScalarFieldEnum)[keyof typeof PersonalMessageScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageType[]'
   */
  export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    broadcasts?: BroadcastMessageListRelationFilter
    sentMessages?: PersonalMessageListRelationFilter
    receivedMessages?: PersonalMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    broadcasts?: BroadcastMessageOrderByRelationAggregateInput
    sentMessages?: PersonalMessageOrderByRelationAggregateInput
    receivedMessages?: PersonalMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    broadcasts?: BroadcastMessageListRelationFilter
    sentMessages?: PersonalMessageListRelationFilter
    receivedMessages?: PersonalMessageListRelationFilter
  }, "id" | "email" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BroadcastMessageWhereInput = {
    AND?: BroadcastMessageWhereInput | BroadcastMessageWhereInput[]
    OR?: BroadcastMessageWhereInput[]
    NOT?: BroadcastMessageWhereInput | BroadcastMessageWhereInput[]
    id?: StringFilter<"BroadcastMessage"> | string
    serialNo?: IntFilter<"BroadcastMessage"> | number
    randomNo?: IntFilter<"BroadcastMessage"> | number
    text?: StringFilter<"BroadcastMessage"> | string
    type?: EnumMessageTypeFilter<"BroadcastMessage"> | $Enums.MessageType
    createdAt?: DateTimeFilter<"BroadcastMessage"> | Date | string
    userId?: StringFilter<"BroadcastMessage"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BroadcastMessageOrderByWithRelationInput = {
    id?: SortOrder
    serialNo?: SortOrder
    randomNo?: SortOrder
    text?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BroadcastMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BroadcastMessageWhereInput | BroadcastMessageWhereInput[]
    OR?: BroadcastMessageWhereInput[]
    NOT?: BroadcastMessageWhereInput | BroadcastMessageWhereInput[]
    serialNo?: IntFilter<"BroadcastMessage"> | number
    randomNo?: IntFilter<"BroadcastMessage"> | number
    text?: StringFilter<"BroadcastMessage"> | string
    type?: EnumMessageTypeFilter<"BroadcastMessage"> | $Enums.MessageType
    createdAt?: DateTimeFilter<"BroadcastMessage"> | Date | string
    userId?: StringFilter<"BroadcastMessage"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BroadcastMessageOrderByWithAggregationInput = {
    id?: SortOrder
    serialNo?: SortOrder
    randomNo?: SortOrder
    text?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: BroadcastMessageCountOrderByAggregateInput
    _avg?: BroadcastMessageAvgOrderByAggregateInput
    _max?: BroadcastMessageMaxOrderByAggregateInput
    _min?: BroadcastMessageMinOrderByAggregateInput
    _sum?: BroadcastMessageSumOrderByAggregateInput
  }

  export type BroadcastMessageScalarWhereWithAggregatesInput = {
    AND?: BroadcastMessageScalarWhereWithAggregatesInput | BroadcastMessageScalarWhereWithAggregatesInput[]
    OR?: BroadcastMessageScalarWhereWithAggregatesInput[]
    NOT?: BroadcastMessageScalarWhereWithAggregatesInput | BroadcastMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BroadcastMessage"> | string
    serialNo?: IntWithAggregatesFilter<"BroadcastMessage"> | number
    randomNo?: IntWithAggregatesFilter<"BroadcastMessage"> | number
    text?: StringWithAggregatesFilter<"BroadcastMessage"> | string
    type?: EnumMessageTypeWithAggregatesFilter<"BroadcastMessage"> | $Enums.MessageType
    createdAt?: DateTimeWithAggregatesFilter<"BroadcastMessage"> | Date | string
    userId?: StringWithAggregatesFilter<"BroadcastMessage"> | string
  }

  export type PersonalMessageWhereInput = {
    AND?: PersonalMessageWhereInput | PersonalMessageWhereInput[]
    OR?: PersonalMessageWhereInput[]
    NOT?: PersonalMessageWhereInput | PersonalMessageWhereInput[]
    id?: StringFilter<"PersonalMessage"> | string
    text?: StringFilter<"PersonalMessage"> | string
    createdAt?: DateTimeFilter<"PersonalMessage"> | Date | string
    fromUserId?: StringFilter<"PersonalMessage"> | string
    toUserId?: StringFilter<"PersonalMessage"> | string
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PersonalMessageOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    fromUser?: UserOrderByWithRelationInput
    toUser?: UserOrderByWithRelationInput
  }

  export type PersonalMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PersonalMessageWhereInput | PersonalMessageWhereInput[]
    OR?: PersonalMessageWhereInput[]
    NOT?: PersonalMessageWhereInput | PersonalMessageWhereInput[]
    text?: StringFilter<"PersonalMessage"> | string
    createdAt?: DateTimeFilter<"PersonalMessage"> | Date | string
    fromUserId?: StringFilter<"PersonalMessage"> | string
    toUserId?: StringFilter<"PersonalMessage"> | string
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PersonalMessageOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    _count?: PersonalMessageCountOrderByAggregateInput
    _max?: PersonalMessageMaxOrderByAggregateInput
    _min?: PersonalMessageMinOrderByAggregateInput
  }

  export type PersonalMessageScalarWhereWithAggregatesInput = {
    AND?: PersonalMessageScalarWhereWithAggregatesInput | PersonalMessageScalarWhereWithAggregatesInput[]
    OR?: PersonalMessageScalarWhereWithAggregatesInput[]
    NOT?: PersonalMessageScalarWhereWithAggregatesInput | PersonalMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PersonalMessage"> | string
    text?: StringWithAggregatesFilter<"PersonalMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PersonalMessage"> | Date | string
    fromUserId?: StringWithAggregatesFilter<"PersonalMessage"> | string
    toUserId?: StringWithAggregatesFilter<"PersonalMessage"> | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    googleId?: string | null
    profilePicture?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    broadcasts?: BroadcastMessageCreateNestedManyWithoutUserInput
    sentMessages?: PersonalMessageCreateNestedManyWithoutFromUserInput
    receivedMessages?: PersonalMessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    googleId?: string | null
    profilePicture?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    broadcasts?: BroadcastMessageUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: PersonalMessageUncheckedCreateNestedManyWithoutFromUserInput
    receivedMessages?: PersonalMessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broadcasts?: BroadcastMessageUpdateManyWithoutUserNestedInput
    sentMessages?: PersonalMessageUpdateManyWithoutFromUserNestedInput
    receivedMessages?: PersonalMessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broadcasts?: BroadcastMessageUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: PersonalMessageUncheckedUpdateManyWithoutFromUserNestedInput
    receivedMessages?: PersonalMessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    googleId?: string | null
    profilePicture?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BroadcastMessageCreateInput = {
    id?: string
    serialNo: number
    randomNo: number
    text: string
    type: $Enums.MessageType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBroadcastsInput
  }

  export type BroadcastMessageUncheckedCreateInput = {
    id?: string
    serialNo: number
    randomNo: number
    text: string
    type: $Enums.MessageType
    createdAt?: Date | string
    userId: string
  }

  export type BroadcastMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNo?: IntFieldUpdateOperationsInput | number
    randomNo?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBroadcastsNestedInput
  }

  export type BroadcastMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNo?: IntFieldUpdateOperationsInput | number
    randomNo?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BroadcastMessageCreateManyInput = {
    id?: string
    serialNo: number
    randomNo: number
    text: string
    type: $Enums.MessageType
    createdAt?: Date | string
    userId: string
  }

  export type BroadcastMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNo?: IntFieldUpdateOperationsInput | number
    randomNo?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BroadcastMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNo?: IntFieldUpdateOperationsInput | number
    randomNo?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PersonalMessageCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    fromUser: UserCreateNestedOneWithoutSentMessagesInput
    toUser: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type PersonalMessageUncheckedCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    fromUserId: string
    toUserId: string
  }

  export type PersonalMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    toUser?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type PersonalMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
  }

  export type PersonalMessageCreateManyInput = {
    id?: string
    text: string
    createdAt?: Date | string
    fromUserId: string
    toUserId: string
  }

  export type PersonalMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BroadcastMessageListRelationFilter = {
    every?: BroadcastMessageWhereInput
    some?: BroadcastMessageWhereInput
    none?: BroadcastMessageWhereInput
  }

  export type PersonalMessageListRelationFilter = {
    every?: PersonalMessageWhereInput
    some?: PersonalMessageWhereInput
    none?: PersonalMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BroadcastMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonalMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    profilePicture?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    profilePicture?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    profilePicture?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BroadcastMessageCountOrderByAggregateInput = {
    id?: SortOrder
    serialNo?: SortOrder
    randomNo?: SortOrder
    text?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type BroadcastMessageAvgOrderByAggregateInput = {
    serialNo?: SortOrder
    randomNo?: SortOrder
  }

  export type BroadcastMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    serialNo?: SortOrder
    randomNo?: SortOrder
    text?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type BroadcastMessageMinOrderByAggregateInput = {
    id?: SortOrder
    serialNo?: SortOrder
    randomNo?: SortOrder
    text?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type BroadcastMessageSumOrderByAggregateInput = {
    serialNo?: SortOrder
    randomNo?: SortOrder
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

  export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type PersonalMessageCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type PersonalMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type PersonalMessageMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type BroadcastMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<BroadcastMessageCreateWithoutUserInput, BroadcastMessageUncheckedCreateWithoutUserInput> | BroadcastMessageCreateWithoutUserInput[] | BroadcastMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BroadcastMessageCreateOrConnectWithoutUserInput | BroadcastMessageCreateOrConnectWithoutUserInput[]
    createMany?: BroadcastMessageCreateManyUserInputEnvelope
    connect?: BroadcastMessageWhereUniqueInput | BroadcastMessageWhereUniqueInput[]
  }

  export type PersonalMessageCreateNestedManyWithoutFromUserInput = {
    create?: XOR<PersonalMessageCreateWithoutFromUserInput, PersonalMessageUncheckedCreateWithoutFromUserInput> | PersonalMessageCreateWithoutFromUserInput[] | PersonalMessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: PersonalMessageCreateOrConnectWithoutFromUserInput | PersonalMessageCreateOrConnectWithoutFromUserInput[]
    createMany?: PersonalMessageCreateManyFromUserInputEnvelope
    connect?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
  }

  export type PersonalMessageCreateNestedManyWithoutToUserInput = {
    create?: XOR<PersonalMessageCreateWithoutToUserInput, PersonalMessageUncheckedCreateWithoutToUserInput> | PersonalMessageCreateWithoutToUserInput[] | PersonalMessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: PersonalMessageCreateOrConnectWithoutToUserInput | PersonalMessageCreateOrConnectWithoutToUserInput[]
    createMany?: PersonalMessageCreateManyToUserInputEnvelope
    connect?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
  }

  export type BroadcastMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BroadcastMessageCreateWithoutUserInput, BroadcastMessageUncheckedCreateWithoutUserInput> | BroadcastMessageCreateWithoutUserInput[] | BroadcastMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BroadcastMessageCreateOrConnectWithoutUserInput | BroadcastMessageCreateOrConnectWithoutUserInput[]
    createMany?: BroadcastMessageCreateManyUserInputEnvelope
    connect?: BroadcastMessageWhereUniqueInput | BroadcastMessageWhereUniqueInput[]
  }

  export type PersonalMessageUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: XOR<PersonalMessageCreateWithoutFromUserInput, PersonalMessageUncheckedCreateWithoutFromUserInput> | PersonalMessageCreateWithoutFromUserInput[] | PersonalMessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: PersonalMessageCreateOrConnectWithoutFromUserInput | PersonalMessageCreateOrConnectWithoutFromUserInput[]
    createMany?: PersonalMessageCreateManyFromUserInputEnvelope
    connect?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
  }

  export type PersonalMessageUncheckedCreateNestedManyWithoutToUserInput = {
    create?: XOR<PersonalMessageCreateWithoutToUserInput, PersonalMessageUncheckedCreateWithoutToUserInput> | PersonalMessageCreateWithoutToUserInput[] | PersonalMessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: PersonalMessageCreateOrConnectWithoutToUserInput | PersonalMessageCreateOrConnectWithoutToUserInput[]
    createMany?: PersonalMessageCreateManyToUserInputEnvelope
    connect?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BroadcastMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<BroadcastMessageCreateWithoutUserInput, BroadcastMessageUncheckedCreateWithoutUserInput> | BroadcastMessageCreateWithoutUserInput[] | BroadcastMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BroadcastMessageCreateOrConnectWithoutUserInput | BroadcastMessageCreateOrConnectWithoutUserInput[]
    upsert?: BroadcastMessageUpsertWithWhereUniqueWithoutUserInput | BroadcastMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BroadcastMessageCreateManyUserInputEnvelope
    set?: BroadcastMessageWhereUniqueInput | BroadcastMessageWhereUniqueInput[]
    disconnect?: BroadcastMessageWhereUniqueInput | BroadcastMessageWhereUniqueInput[]
    delete?: BroadcastMessageWhereUniqueInput | BroadcastMessageWhereUniqueInput[]
    connect?: BroadcastMessageWhereUniqueInput | BroadcastMessageWhereUniqueInput[]
    update?: BroadcastMessageUpdateWithWhereUniqueWithoutUserInput | BroadcastMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BroadcastMessageUpdateManyWithWhereWithoutUserInput | BroadcastMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BroadcastMessageScalarWhereInput | BroadcastMessageScalarWhereInput[]
  }

  export type PersonalMessageUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<PersonalMessageCreateWithoutFromUserInput, PersonalMessageUncheckedCreateWithoutFromUserInput> | PersonalMessageCreateWithoutFromUserInput[] | PersonalMessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: PersonalMessageCreateOrConnectWithoutFromUserInput | PersonalMessageCreateOrConnectWithoutFromUserInput[]
    upsert?: PersonalMessageUpsertWithWhereUniqueWithoutFromUserInput | PersonalMessageUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: PersonalMessageCreateManyFromUserInputEnvelope
    set?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
    disconnect?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
    delete?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
    connect?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
    update?: PersonalMessageUpdateWithWhereUniqueWithoutFromUserInput | PersonalMessageUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: PersonalMessageUpdateManyWithWhereWithoutFromUserInput | PersonalMessageUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: PersonalMessageScalarWhereInput | PersonalMessageScalarWhereInput[]
  }

  export type PersonalMessageUpdateManyWithoutToUserNestedInput = {
    create?: XOR<PersonalMessageCreateWithoutToUserInput, PersonalMessageUncheckedCreateWithoutToUserInput> | PersonalMessageCreateWithoutToUserInput[] | PersonalMessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: PersonalMessageCreateOrConnectWithoutToUserInput | PersonalMessageCreateOrConnectWithoutToUserInput[]
    upsert?: PersonalMessageUpsertWithWhereUniqueWithoutToUserInput | PersonalMessageUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: PersonalMessageCreateManyToUserInputEnvelope
    set?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
    disconnect?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
    delete?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
    connect?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
    update?: PersonalMessageUpdateWithWhereUniqueWithoutToUserInput | PersonalMessageUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: PersonalMessageUpdateManyWithWhereWithoutToUserInput | PersonalMessageUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: PersonalMessageScalarWhereInput | PersonalMessageScalarWhereInput[]
  }

  export type BroadcastMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BroadcastMessageCreateWithoutUserInput, BroadcastMessageUncheckedCreateWithoutUserInput> | BroadcastMessageCreateWithoutUserInput[] | BroadcastMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BroadcastMessageCreateOrConnectWithoutUserInput | BroadcastMessageCreateOrConnectWithoutUserInput[]
    upsert?: BroadcastMessageUpsertWithWhereUniqueWithoutUserInput | BroadcastMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BroadcastMessageCreateManyUserInputEnvelope
    set?: BroadcastMessageWhereUniqueInput | BroadcastMessageWhereUniqueInput[]
    disconnect?: BroadcastMessageWhereUniqueInput | BroadcastMessageWhereUniqueInput[]
    delete?: BroadcastMessageWhereUniqueInput | BroadcastMessageWhereUniqueInput[]
    connect?: BroadcastMessageWhereUniqueInput | BroadcastMessageWhereUniqueInput[]
    update?: BroadcastMessageUpdateWithWhereUniqueWithoutUserInput | BroadcastMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BroadcastMessageUpdateManyWithWhereWithoutUserInput | BroadcastMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BroadcastMessageScalarWhereInput | BroadcastMessageScalarWhereInput[]
  }

  export type PersonalMessageUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<PersonalMessageCreateWithoutFromUserInput, PersonalMessageUncheckedCreateWithoutFromUserInput> | PersonalMessageCreateWithoutFromUserInput[] | PersonalMessageUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: PersonalMessageCreateOrConnectWithoutFromUserInput | PersonalMessageCreateOrConnectWithoutFromUserInput[]
    upsert?: PersonalMessageUpsertWithWhereUniqueWithoutFromUserInput | PersonalMessageUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: PersonalMessageCreateManyFromUserInputEnvelope
    set?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
    disconnect?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
    delete?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
    connect?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
    update?: PersonalMessageUpdateWithWhereUniqueWithoutFromUserInput | PersonalMessageUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: PersonalMessageUpdateManyWithWhereWithoutFromUserInput | PersonalMessageUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: PersonalMessageScalarWhereInput | PersonalMessageScalarWhereInput[]
  }

  export type PersonalMessageUncheckedUpdateManyWithoutToUserNestedInput = {
    create?: XOR<PersonalMessageCreateWithoutToUserInput, PersonalMessageUncheckedCreateWithoutToUserInput> | PersonalMessageCreateWithoutToUserInput[] | PersonalMessageUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: PersonalMessageCreateOrConnectWithoutToUserInput | PersonalMessageCreateOrConnectWithoutToUserInput[]
    upsert?: PersonalMessageUpsertWithWhereUniqueWithoutToUserInput | PersonalMessageUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: PersonalMessageCreateManyToUserInputEnvelope
    set?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
    disconnect?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
    delete?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
    connect?: PersonalMessageWhereUniqueInput | PersonalMessageWhereUniqueInput[]
    update?: PersonalMessageUpdateWithWhereUniqueWithoutToUserInput | PersonalMessageUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: PersonalMessageUpdateManyWithWhereWithoutToUserInput | PersonalMessageUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: PersonalMessageScalarWhereInput | PersonalMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBroadcastsInput = {
    create?: XOR<UserCreateWithoutBroadcastsInput, UserUncheckedCreateWithoutBroadcastsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBroadcastsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType
  }

  export type UserUpdateOneRequiredWithoutBroadcastsNestedInput = {
    create?: XOR<UserCreateWithoutBroadcastsInput, UserUncheckedCreateWithoutBroadcastsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBroadcastsInput
    upsert?: UserUpsertWithoutBroadcastsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBroadcastsInput, UserUpdateWithoutBroadcastsInput>, UserUncheckedUpdateWithoutBroadcastsInput>
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
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

  export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type BroadcastMessageCreateWithoutUserInput = {
    id?: string
    serialNo: number
    randomNo: number
    text: string
    type: $Enums.MessageType
    createdAt?: Date | string
  }

  export type BroadcastMessageUncheckedCreateWithoutUserInput = {
    id?: string
    serialNo: number
    randomNo: number
    text: string
    type: $Enums.MessageType
    createdAt?: Date | string
  }

  export type BroadcastMessageCreateOrConnectWithoutUserInput = {
    where: BroadcastMessageWhereUniqueInput
    create: XOR<BroadcastMessageCreateWithoutUserInput, BroadcastMessageUncheckedCreateWithoutUserInput>
  }

  export type BroadcastMessageCreateManyUserInputEnvelope = {
    data: BroadcastMessageCreateManyUserInput | BroadcastMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PersonalMessageCreateWithoutFromUserInput = {
    id?: string
    text: string
    createdAt?: Date | string
    toUser: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type PersonalMessageUncheckedCreateWithoutFromUserInput = {
    id?: string
    text: string
    createdAt?: Date | string
    toUserId: string
  }

  export type PersonalMessageCreateOrConnectWithoutFromUserInput = {
    where: PersonalMessageWhereUniqueInput
    create: XOR<PersonalMessageCreateWithoutFromUserInput, PersonalMessageUncheckedCreateWithoutFromUserInput>
  }

  export type PersonalMessageCreateManyFromUserInputEnvelope = {
    data: PersonalMessageCreateManyFromUserInput | PersonalMessageCreateManyFromUserInput[]
    skipDuplicates?: boolean
  }

  export type PersonalMessageCreateWithoutToUserInput = {
    id?: string
    text: string
    createdAt?: Date | string
    fromUser: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type PersonalMessageUncheckedCreateWithoutToUserInput = {
    id?: string
    text: string
    createdAt?: Date | string
    fromUserId: string
  }

  export type PersonalMessageCreateOrConnectWithoutToUserInput = {
    where: PersonalMessageWhereUniqueInput
    create: XOR<PersonalMessageCreateWithoutToUserInput, PersonalMessageUncheckedCreateWithoutToUserInput>
  }

  export type PersonalMessageCreateManyToUserInputEnvelope = {
    data: PersonalMessageCreateManyToUserInput | PersonalMessageCreateManyToUserInput[]
    skipDuplicates?: boolean
  }

  export type BroadcastMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: BroadcastMessageWhereUniqueInput
    update: XOR<BroadcastMessageUpdateWithoutUserInput, BroadcastMessageUncheckedUpdateWithoutUserInput>
    create: XOR<BroadcastMessageCreateWithoutUserInput, BroadcastMessageUncheckedCreateWithoutUserInput>
  }

  export type BroadcastMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: BroadcastMessageWhereUniqueInput
    data: XOR<BroadcastMessageUpdateWithoutUserInput, BroadcastMessageUncheckedUpdateWithoutUserInput>
  }

  export type BroadcastMessageUpdateManyWithWhereWithoutUserInput = {
    where: BroadcastMessageScalarWhereInput
    data: XOR<BroadcastMessageUpdateManyMutationInput, BroadcastMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type BroadcastMessageScalarWhereInput = {
    AND?: BroadcastMessageScalarWhereInput | BroadcastMessageScalarWhereInput[]
    OR?: BroadcastMessageScalarWhereInput[]
    NOT?: BroadcastMessageScalarWhereInput | BroadcastMessageScalarWhereInput[]
    id?: StringFilter<"BroadcastMessage"> | string
    serialNo?: IntFilter<"BroadcastMessage"> | number
    randomNo?: IntFilter<"BroadcastMessage"> | number
    text?: StringFilter<"BroadcastMessage"> | string
    type?: EnumMessageTypeFilter<"BroadcastMessage"> | $Enums.MessageType
    createdAt?: DateTimeFilter<"BroadcastMessage"> | Date | string
    userId?: StringFilter<"BroadcastMessage"> | string
  }

  export type PersonalMessageUpsertWithWhereUniqueWithoutFromUserInput = {
    where: PersonalMessageWhereUniqueInput
    update: XOR<PersonalMessageUpdateWithoutFromUserInput, PersonalMessageUncheckedUpdateWithoutFromUserInput>
    create: XOR<PersonalMessageCreateWithoutFromUserInput, PersonalMessageUncheckedCreateWithoutFromUserInput>
  }

  export type PersonalMessageUpdateWithWhereUniqueWithoutFromUserInput = {
    where: PersonalMessageWhereUniqueInput
    data: XOR<PersonalMessageUpdateWithoutFromUserInput, PersonalMessageUncheckedUpdateWithoutFromUserInput>
  }

  export type PersonalMessageUpdateManyWithWhereWithoutFromUserInput = {
    where: PersonalMessageScalarWhereInput
    data: XOR<PersonalMessageUpdateManyMutationInput, PersonalMessageUncheckedUpdateManyWithoutFromUserInput>
  }

  export type PersonalMessageScalarWhereInput = {
    AND?: PersonalMessageScalarWhereInput | PersonalMessageScalarWhereInput[]
    OR?: PersonalMessageScalarWhereInput[]
    NOT?: PersonalMessageScalarWhereInput | PersonalMessageScalarWhereInput[]
    id?: StringFilter<"PersonalMessage"> | string
    text?: StringFilter<"PersonalMessage"> | string
    createdAt?: DateTimeFilter<"PersonalMessage"> | Date | string
    fromUserId?: StringFilter<"PersonalMessage"> | string
    toUserId?: StringFilter<"PersonalMessage"> | string
  }

  export type PersonalMessageUpsertWithWhereUniqueWithoutToUserInput = {
    where: PersonalMessageWhereUniqueInput
    update: XOR<PersonalMessageUpdateWithoutToUserInput, PersonalMessageUncheckedUpdateWithoutToUserInput>
    create: XOR<PersonalMessageCreateWithoutToUserInput, PersonalMessageUncheckedCreateWithoutToUserInput>
  }

  export type PersonalMessageUpdateWithWhereUniqueWithoutToUserInput = {
    where: PersonalMessageWhereUniqueInput
    data: XOR<PersonalMessageUpdateWithoutToUserInput, PersonalMessageUncheckedUpdateWithoutToUserInput>
  }

  export type PersonalMessageUpdateManyWithWhereWithoutToUserInput = {
    where: PersonalMessageScalarWhereInput
    data: XOR<PersonalMessageUpdateManyMutationInput, PersonalMessageUncheckedUpdateManyWithoutToUserInput>
  }

  export type UserCreateWithoutBroadcastsInput = {
    id?: string
    name?: string | null
    email?: string | null
    googleId?: string | null
    profilePicture?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PersonalMessageCreateNestedManyWithoutFromUserInput
    receivedMessages?: PersonalMessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutBroadcastsInput = {
    id?: string
    name?: string | null
    email?: string | null
    googleId?: string | null
    profilePicture?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: PersonalMessageUncheckedCreateNestedManyWithoutFromUserInput
    receivedMessages?: PersonalMessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutBroadcastsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBroadcastsInput, UserUncheckedCreateWithoutBroadcastsInput>
  }

  export type UserUpsertWithoutBroadcastsInput = {
    update: XOR<UserUpdateWithoutBroadcastsInput, UserUncheckedUpdateWithoutBroadcastsInput>
    create: XOR<UserCreateWithoutBroadcastsInput, UserUncheckedCreateWithoutBroadcastsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBroadcastsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBroadcastsInput, UserUncheckedUpdateWithoutBroadcastsInput>
  }

  export type UserUpdateWithoutBroadcastsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PersonalMessageUpdateManyWithoutFromUserNestedInput
    receivedMessages?: PersonalMessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBroadcastsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: PersonalMessageUncheckedUpdateManyWithoutFromUserNestedInput
    receivedMessages?: PersonalMessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    name?: string | null
    email?: string | null
    googleId?: string | null
    profilePicture?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    broadcasts?: BroadcastMessageCreateNestedManyWithoutUserInput
    receivedMessages?: PersonalMessageCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    name?: string | null
    email?: string | null
    googleId?: string | null
    profilePicture?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    broadcasts?: BroadcastMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: PersonalMessageUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    name?: string | null
    email?: string | null
    googleId?: string | null
    profilePicture?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    broadcasts?: BroadcastMessageCreateNestedManyWithoutUserInput
    sentMessages?: PersonalMessageCreateNestedManyWithoutFromUserInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    name?: string | null
    email?: string | null
    googleId?: string | null
    profilePicture?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    broadcasts?: BroadcastMessageUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: PersonalMessageUncheckedCreateNestedManyWithoutFromUserInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broadcasts?: BroadcastMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: PersonalMessageUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broadcasts?: BroadcastMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: PersonalMessageUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broadcasts?: BroadcastMessageUpdateManyWithoutUserNestedInput
    sentMessages?: PersonalMessageUpdateManyWithoutFromUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broadcasts?: BroadcastMessageUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: PersonalMessageUncheckedUpdateManyWithoutFromUserNestedInput
  }

  export type BroadcastMessageCreateManyUserInput = {
    id?: string
    serialNo: number
    randomNo: number
    text: string
    type: $Enums.MessageType
    createdAt?: Date | string
  }

  export type PersonalMessageCreateManyFromUserInput = {
    id?: string
    text: string
    createdAt?: Date | string
    toUserId: string
  }

  export type PersonalMessageCreateManyToUserInput = {
    id?: string
    text: string
    createdAt?: Date | string
    fromUserId: string
  }

  export type BroadcastMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNo?: IntFieldUpdateOperationsInput | number
    randomNo?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BroadcastMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNo?: IntFieldUpdateOperationsInput | number
    randomNo?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BroadcastMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNo?: IntFieldUpdateOperationsInput | number
    randomNo?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalMessageUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toUser?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type PersonalMessageUncheckedUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toUserId?: StringFieldUpdateOperationsInput | string
  }

  export type PersonalMessageUncheckedUpdateManyWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toUserId?: StringFieldUpdateOperationsInput | string
  }

  export type PersonalMessageUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type PersonalMessageUncheckedUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserId?: StringFieldUpdateOperationsInput | string
  }

  export type PersonalMessageUncheckedUpdateManyWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserId?: StringFieldUpdateOperationsInput | string
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