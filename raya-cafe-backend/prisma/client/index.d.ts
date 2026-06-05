
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model feedback
 * 
 */
export type feedback = $Result.DefaultSelection<Prisma.$feedbackPayload>
/**
 * Model legacy_print_queue
 * 
 */
export type legacy_print_queue = $Result.DefaultSelection<Prisma.$legacy_print_queuePayload>
/**
 * Model menu_items
 * 
 */
export type menu_items = $Result.DefaultSelection<Prisma.$menu_itemsPayload>
/**
 * Model order_items
 * 
 */
export type order_items = $Result.DefaultSelection<Prisma.$order_itemsPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model promotions
 * 
 */
export type promotions = $Result.DefaultSelection<Prisma.$promotionsPayload>
/**
 * Model raw_materials
 * 
 */
export type raw_materials = $Result.DefaultSelection<Prisma.$raw_materialsPayload>
/**
 * Model recipe_bom
 * 
 */
export type recipe_bom = $Result.DefaultSelection<Prisma.$recipe_bomPayload>
/**
 * Model reservations
 * 
 */
export type reservations = $Result.DefaultSelection<Prisma.$reservationsPayload>
/**
 * Model tables
 * 
 */
export type tables = $Result.DefaultSelection<Prisma.$tablesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const orders_status: {
  pending: 'pending',
  preparing: 'preparing',
  ready: 'ready',
  served: 'served',
  paid: 'paid'
};

export type orders_status = (typeof orders_status)[keyof typeof orders_status]


export const promotions_type: {
  percent: 'percent',
  nominal: 'nominal'
};

export type promotions_type = (typeof promotions_type)[keyof typeof promotions_type]


export const raw_materials_unit: {
  gram: 'gram',
  ml: 'ml',
  pcs: 'pcs'
};

export type raw_materials_unit = (typeof raw_materials_unit)[keyof typeof raw_materials_unit]


export const users_role: {
  admin: 'admin',
  waiter: 'waiter',
  kasir: 'kasir'
};

export type users_role = (typeof users_role)[keyof typeof users_role]


export const legacy_print_queue_status_print: {
  belum_print: 'belum_print',
  sudah_print: 'sudah_print'
};

export type legacy_print_queue_status_print = (typeof legacy_print_queue_status_print)[keyof typeof legacy_print_queue_status_print]


export const menu_items_status: {
  ready: 'ready',
  habis: 'habis'
};

export type menu_items_status = (typeof menu_items_status)[keyof typeof menu_items_status]


export const reservations_budget_type: {
  paket_standar: 'paket_standar',
  custom_budget: 'custom_budget'
};

export type reservations_budget_type = (typeof reservations_budget_type)[keyof typeof reservations_budget_type]


export const reservations_status: {
  pending_wa: 'pending_wa',
  confirmed: 'confirmed',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type reservations_status = (typeof reservations_status)[keyof typeof reservations_status]

}

export type orders_status = $Enums.orders_status

export const orders_status: typeof $Enums.orders_status

export type promotions_type = $Enums.promotions_type

export const promotions_type: typeof $Enums.promotions_type

export type raw_materials_unit = $Enums.raw_materials_unit

export const raw_materials_unit: typeof $Enums.raw_materials_unit

export type users_role = $Enums.users_role

export const users_role: typeof $Enums.users_role

export type legacy_print_queue_status_print = $Enums.legacy_print_queue_status_print

export const legacy_print_queue_status_print: typeof $Enums.legacy_print_queue_status_print

export type menu_items_status = $Enums.menu_items_status

export const menu_items_status: typeof $Enums.menu_items_status

export type reservations_budget_type = $Enums.reservations_budget_type

export const reservations_budget_type: typeof $Enums.reservations_budget_type

export type reservations_status = $Enums.reservations_status

export const reservations_status: typeof $Enums.reservations_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.feedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.legacy_print_queue`: Exposes CRUD operations for the **legacy_print_queue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Legacy_print_queues
    * const legacy_print_queues = await prisma.legacy_print_queue.findMany()
    * ```
    */
  get legacy_print_queue(): Prisma.legacy_print_queueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu_items`: Exposes CRUD operations for the **menu_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menu_items
    * const menu_items = await prisma.menu_items.findMany()
    * ```
    */
  get menu_items(): Prisma.menu_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_items`: Exposes CRUD operations for the **order_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_items.findMany()
    * ```
    */
  get order_items(): Prisma.order_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promotions`: Exposes CRUD operations for the **promotions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotions
    * const promotions = await prisma.promotions.findMany()
    * ```
    */
  get promotions(): Prisma.promotionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raw_materials`: Exposes CRUD operations for the **raw_materials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Raw_materials
    * const raw_materials = await prisma.raw_materials.findMany()
    * ```
    */
  get raw_materials(): Prisma.raw_materialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe_bom`: Exposes CRUD operations for the **recipe_bom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipe_boms
    * const recipe_boms = await prisma.recipe_bom.findMany()
    * ```
    */
  get recipe_bom(): Prisma.recipe_bomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservations`: Exposes CRUD operations for the **reservations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservations.findMany()
    * ```
    */
  get reservations(): Prisma.reservationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tables`: Exposes CRUD operations for the **tables** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.tables.findMany()
    * ```
    */
  get tables(): Prisma.tablesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    categories: 'categories',
    feedback: 'feedback',
    legacy_print_queue: 'legacy_print_queue',
    menu_items: 'menu_items',
    order_items: 'order_items',
    orders: 'orders',
    promotions: 'promotions',
    raw_materials: 'raw_materials',
    recipe_bom: 'recipe_bom',
    reservations: 'reservations',
    tables: 'tables',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categories" | "feedback" | "legacy_print_queue" | "menu_items" | "order_items" | "orders" | "promotions" | "raw_materials" | "recipe_bom" | "reservations" | "tables" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      feedback: {
        payload: Prisma.$feedbackPayload<ExtArgs>
        fields: Prisma.feedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.feedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.feedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          findFirst: {
            args: Prisma.feedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.feedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          findMany: {
            args: Prisma.feedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>[]
          }
          create: {
            args: Prisma.feedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          createMany: {
            args: Prisma.feedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.feedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          update: {
            args: Prisma.feedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          deleteMany: {
            args: Prisma.feedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.feedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.feedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.feedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.feedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      legacy_print_queue: {
        payload: Prisma.$legacy_print_queuePayload<ExtArgs>
        fields: Prisma.legacy_print_queueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.legacy_print_queueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_print_queuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.legacy_print_queueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_print_queuePayload>
          }
          findFirst: {
            args: Prisma.legacy_print_queueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_print_queuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.legacy_print_queueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_print_queuePayload>
          }
          findMany: {
            args: Prisma.legacy_print_queueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_print_queuePayload>[]
          }
          create: {
            args: Prisma.legacy_print_queueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_print_queuePayload>
          }
          createMany: {
            args: Prisma.legacy_print_queueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.legacy_print_queueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_print_queuePayload>
          }
          update: {
            args: Prisma.legacy_print_queueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_print_queuePayload>
          }
          deleteMany: {
            args: Prisma.legacy_print_queueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.legacy_print_queueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.legacy_print_queueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$legacy_print_queuePayload>
          }
          aggregate: {
            args: Prisma.Legacy_print_queueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLegacy_print_queue>
          }
          groupBy: {
            args: Prisma.legacy_print_queueGroupByArgs<ExtArgs>
            result: $Utils.Optional<Legacy_print_queueGroupByOutputType>[]
          }
          count: {
            args: Prisma.legacy_print_queueCountArgs<ExtArgs>
            result: $Utils.Optional<Legacy_print_queueCountAggregateOutputType> | number
          }
        }
      }
      menu_items: {
        payload: Prisma.$menu_itemsPayload<ExtArgs>
        fields: Prisma.menu_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.menu_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.menu_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload>
          }
          findFirst: {
            args: Prisma.menu_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.menu_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload>
          }
          findMany: {
            args: Prisma.menu_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload>[]
          }
          create: {
            args: Prisma.menu_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload>
          }
          createMany: {
            args: Prisma.menu_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.menu_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload>
          }
          update: {
            args: Prisma.menu_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload>
          }
          deleteMany: {
            args: Prisma.menu_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.menu_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.menu_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_itemsPayload>
          }
          aggregate: {
            args: Prisma.Menu_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu_items>
          }
          groupBy: {
            args: Prisma.menu_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Menu_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.menu_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Menu_itemsCountAggregateOutputType> | number
          }
        }
      }
      order_items: {
        payload: Prisma.$order_itemsPayload<ExtArgs>
        fields: Prisma.order_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findFirst: {
            args: Prisma.order_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findMany: {
            args: Prisma.order_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          create: {
            args: Prisma.order_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          createMany: {
            args: Prisma.order_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.order_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          update: {
            args: Prisma.order_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          deleteMany: {
            args: Prisma.order_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.order_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          aggregate: {
            args: Prisma.Order_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_items>
          }
          groupBy: {
            args: Prisma.order_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      promotions: {
        payload: Prisma.$promotionsPayload<ExtArgs>
        fields: Prisma.promotionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.promotionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promotionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.promotionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promotionsPayload>
          }
          findFirst: {
            args: Prisma.promotionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promotionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.promotionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promotionsPayload>
          }
          findMany: {
            args: Prisma.promotionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promotionsPayload>[]
          }
          create: {
            args: Prisma.promotionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promotionsPayload>
          }
          createMany: {
            args: Prisma.promotionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.promotionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promotionsPayload>
          }
          update: {
            args: Prisma.promotionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promotionsPayload>
          }
          deleteMany: {
            args: Prisma.promotionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.promotionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.promotionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promotionsPayload>
          }
          aggregate: {
            args: Prisma.PromotionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotions>
          }
          groupBy: {
            args: Prisma.promotionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.promotionsCountArgs<ExtArgs>
            result: $Utils.Optional<PromotionsCountAggregateOutputType> | number
          }
        }
      }
      raw_materials: {
        payload: Prisma.$raw_materialsPayload<ExtArgs>
        fields: Prisma.raw_materialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.raw_materialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.raw_materialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>
          }
          findFirst: {
            args: Prisma.raw_materialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.raw_materialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>
          }
          findMany: {
            args: Prisma.raw_materialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>[]
          }
          create: {
            args: Prisma.raw_materialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>
          }
          createMany: {
            args: Prisma.raw_materialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.raw_materialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>
          }
          update: {
            args: Prisma.raw_materialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>
          }
          deleteMany: {
            args: Prisma.raw_materialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.raw_materialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.raw_materialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_materialsPayload>
          }
          aggregate: {
            args: Prisma.Raw_materialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaw_materials>
          }
          groupBy: {
            args: Prisma.raw_materialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Raw_materialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.raw_materialsCountArgs<ExtArgs>
            result: $Utils.Optional<Raw_materialsCountAggregateOutputType> | number
          }
        }
      }
      recipe_bom: {
        payload: Prisma.$recipe_bomPayload<ExtArgs>
        fields: Prisma.recipe_bomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recipe_bomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_bomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recipe_bomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_bomPayload>
          }
          findFirst: {
            args: Prisma.recipe_bomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_bomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recipe_bomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_bomPayload>
          }
          findMany: {
            args: Prisma.recipe_bomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_bomPayload>[]
          }
          create: {
            args: Prisma.recipe_bomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_bomPayload>
          }
          createMany: {
            args: Prisma.recipe_bomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.recipe_bomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_bomPayload>
          }
          update: {
            args: Prisma.recipe_bomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_bomPayload>
          }
          deleteMany: {
            args: Prisma.recipe_bomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recipe_bomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.recipe_bomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recipe_bomPayload>
          }
          aggregate: {
            args: Prisma.Recipe_bomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe_bom>
          }
          groupBy: {
            args: Prisma.recipe_bomGroupByArgs<ExtArgs>
            result: $Utils.Optional<Recipe_bomGroupByOutputType>[]
          }
          count: {
            args: Prisma.recipe_bomCountArgs<ExtArgs>
            result: $Utils.Optional<Recipe_bomCountAggregateOutputType> | number
          }
        }
      }
      reservations: {
        payload: Prisma.$reservationsPayload<ExtArgs>
        fields: Prisma.reservationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reservationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reservationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload>
          }
          findFirst: {
            args: Prisma.reservationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reservationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload>
          }
          findMany: {
            args: Prisma.reservationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload>[]
          }
          create: {
            args: Prisma.reservationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload>
          }
          createMany: {
            args: Prisma.reservationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reservationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload>
          }
          update: {
            args: Prisma.reservationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload>
          }
          deleteMany: {
            args: Prisma.reservationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reservationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reservationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservationsPayload>
          }
          aggregate: {
            args: Prisma.ReservationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservations>
          }
          groupBy: {
            args: Prisma.reservationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reservationsCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationsCountAggregateOutputType> | number
          }
        }
      }
      tables: {
        payload: Prisma.$tablesPayload<ExtArgs>
        fields: Prisma.tablesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tablesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tablesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>
          }
          findFirst: {
            args: Prisma.tablesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tablesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>
          }
          findMany: {
            args: Prisma.tablesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>[]
          }
          create: {
            args: Prisma.tablesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>
          }
          createMany: {
            args: Prisma.tablesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tablesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>
          }
          update: {
            args: Prisma.tablesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>
          }
          deleteMany: {
            args: Prisma.tablesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tablesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tablesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablesPayload>
          }
          aggregate: {
            args: Prisma.TablesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTables>
          }
          groupBy: {
            args: Prisma.tablesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TablesGroupByOutputType>[]
          }
          count: {
            args: Prisma.tablesCountArgs<ExtArgs>
            result: $Utils.Optional<TablesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    categories?: categoriesOmit
    feedback?: feedbackOmit
    legacy_print_queue?: legacy_print_queueOmit
    menu_items?: menu_itemsOmit
    order_items?: order_itemsOmit
    orders?: ordersOmit
    promotions?: promotionsOmit
    raw_materials?: raw_materialsOmit
    recipe_bom?: recipe_bomOmit
    reservations?: reservationsOmit
    tables?: tablesOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    menu_items: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_items?: boolean | CategoriesCountOutputTypeCountMenu_itemsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountMenu_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_itemsWhereInput
  }


  /**
   * Count Type Menu_itemsCountOutputType
   */

  export type Menu_itemsCountOutputType = {
    feedback: number
    order_items: number
    recipe_bom: number
  }

  export type Menu_itemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | Menu_itemsCountOutputTypeCountFeedbackArgs
    order_items?: boolean | Menu_itemsCountOutputTypeCountOrder_itemsArgs
    recipe_bom?: boolean | Menu_itemsCountOutputTypeCountRecipe_bomArgs
  }

  // Custom InputTypes
  /**
   * Menu_itemsCountOutputType without action
   */
  export type Menu_itemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu_itemsCountOutputType
     */
    select?: Menu_itemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Menu_itemsCountOutputType without action
   */
  export type Menu_itemsCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbackWhereInput
  }

  /**
   * Menu_itemsCountOutputType without action
   */
  export type Menu_itemsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }

  /**
   * Menu_itemsCountOutputType without action
   */
  export type Menu_itemsCountOutputTypeCountRecipe_bomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipe_bomWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    feedback: number
    legacy_print_queue: number
    order_items: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | OrdersCountOutputTypeCountFeedbackArgs
    legacy_print_queue?: boolean | OrdersCountOutputTypeCountLegacy_print_queueArgs
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbackWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountLegacy_print_queueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: legacy_print_queueWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }


  /**
   * Count Type PromotionsCountOutputType
   */

  export type PromotionsCountOutputType = {
    orders: number
  }

  export type PromotionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | PromotionsCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * PromotionsCountOutputType without action
   */
  export type PromotionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionsCountOutputType
     */
    select?: PromotionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromotionsCountOutputType without action
   */
  export type PromotionsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Count Type Raw_materialsCountOutputType
   */

  export type Raw_materialsCountOutputType = {
    recipe_bom: number
  }

  export type Raw_materialsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe_bom?: boolean | Raw_materialsCountOutputTypeCountRecipe_bomArgs
  }

  // Custom InputTypes
  /**
   * Raw_materialsCountOutputType without action
   */
  export type Raw_materialsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raw_materialsCountOutputType
     */
    select?: Raw_materialsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Raw_materialsCountOutputType without action
   */
  export type Raw_materialsCountOutputTypeCountRecipe_bomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipe_bomWhereInput
  }


  /**
   * Count Type TablesCountOutputType
   */

  export type TablesCountOutputType = {
    orders: number
  }

  export type TablesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | TablesCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * TablesCountOutputType without action
   */
  export type TablesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TablesCountOutputType
     */
    select?: TablesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TablesCountOutputType without action
   */
  export type TablesCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    menu_items?: boolean | categories$menu_itemsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>



  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_items?: boolean | categories$menu_itemsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      menu_items: Prisma.$menu_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu_items<T extends categories$menu_itemsArgs<ExtArgs> = {}>(args?: Subset<T, categories$menu_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly name: FieldRef<"categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.menu_items
   */
  export type categories$menu_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    where?: menu_itemsWhereInput
    orderBy?: menu_itemsOrderByWithRelationInput | menu_itemsOrderByWithRelationInput[]
    cursor?: menu_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Menu_itemsScalarFieldEnum | Menu_itemsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    menu_item_id: number | null
    rating: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    menu_item_id: number | null
    rating: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    menu_item_id: number | null
    rating: number | null
    review_text: string | null
    created_at: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    menu_item_id: number | null
    rating: number | null
    review_text: string | null
    created_at: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    order_id: number
    menu_item_id: number
    rating: number
    review_text: number
    created_at: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id?: true
    order_id?: true
    menu_item_id?: true
    rating?: true
  }

  export type FeedbackSumAggregateInputType = {
    id?: true
    order_id?: true
    menu_item_id?: true
    rating?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    order_id?: true
    menu_item_id?: true
    rating?: true
    review_text?: true
    created_at?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    order_id?: true
    menu_item_id?: true
    rating?: true
    review_text?: true
    created_at?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    order_id?: true
    menu_item_id?: true
    rating?: true
    review_text?: true
    created_at?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feedback to aggregate.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type feedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbackWhereInput
    orderBy?: feedbackOrderByWithAggregationInput | feedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: feedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: number
    order_id: number
    menu_item_id: number
    rating: number | null
    review_text: string | null
    created_at: Date
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends feedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type feedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    menu_item_id?: boolean
    rating?: boolean
    review_text?: boolean
    created_at?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    menu_items?: boolean | menu_itemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>



  export type feedbackSelectScalar = {
    id?: boolean
    order_id?: boolean
    menu_item_id?: boolean
    rating?: boolean
    review_text?: boolean
    created_at?: boolean
  }

  export type feedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "menu_item_id" | "rating" | "review_text" | "created_at", ExtArgs["result"]["feedback"]>
  export type feedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    menu_items?: boolean | menu_itemsDefaultArgs<ExtArgs>
  }

  export type $feedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "feedback"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>
      menu_items: Prisma.$menu_itemsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number
      menu_item_id: number
      rating: number | null
      review_text: string | null
      created_at: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type feedbackGetPayload<S extends boolean | null | undefined | feedbackDefaultArgs> = $Result.GetResult<Prisma.$feedbackPayload, S>

  type feedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<feedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface feedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['feedback'], meta: { name: 'feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {feedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends feedbackFindUniqueArgs>(args: SelectSubset<T, feedbackFindUniqueArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {feedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends feedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, feedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends feedbackFindFirstArgs>(args?: SelectSubset<T, feedbackFindFirstArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends feedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, feedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends feedbackFindManyArgs>(args?: SelectSubset<T, feedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {feedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends feedbackCreateArgs>(args: SelectSubset<T, feedbackCreateArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {feedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends feedbackCreateManyArgs>(args?: SelectSubset<T, feedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Feedback.
     * @param {feedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends feedbackDeleteArgs>(args: SelectSubset<T, feedbackDeleteArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {feedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends feedbackUpdateArgs>(args: SelectSubset<T, feedbackUpdateArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {feedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends feedbackDeleteManyArgs>(args?: SelectSubset<T, feedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends feedbackUpdateManyArgs>(args: SelectSubset<T, feedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feedback.
     * @param {feedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends feedbackUpsertArgs>(args: SelectSubset<T, feedbackUpsertArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends feedbackCountArgs>(
      args?: Subset<T, feedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackGroupByArgs} args - Group by arguments.
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
      T extends feedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: feedbackGroupByArgs['orderBy'] }
        : { orderBy?: feedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, feedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the feedback model
   */
  readonly fields: feedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__feedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menu_items<T extends menu_itemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menu_itemsDefaultArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the feedback model
   */
  interface feedbackFieldRefs {
    readonly id: FieldRef<"feedback", 'Int'>
    readonly order_id: FieldRef<"feedback", 'Int'>
    readonly menu_item_id: FieldRef<"feedback", 'Int'>
    readonly rating: FieldRef<"feedback", 'Int'>
    readonly review_text: FieldRef<"feedback", 'String'>
    readonly created_at: FieldRef<"feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * feedback findUnique
   */
  export type feedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback findUniqueOrThrow
   */
  export type feedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback findFirst
   */
  export type feedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbacks.
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * feedback findFirstOrThrow
   */
  export type feedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbacks.
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * feedback findMany
   */
  export type feedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing feedbacks.
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * feedback create
   */
  export type feedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a feedback.
     */
    data: XOR<feedbackCreateInput, feedbackUncheckedCreateInput>
  }

  /**
   * feedback createMany
   */
  export type feedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many feedbacks.
     */
    data: feedbackCreateManyInput | feedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * feedback update
   */
  export type feedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a feedback.
     */
    data: XOR<feedbackUpdateInput, feedbackUncheckedUpdateInput>
    /**
     * Choose, which feedback to update.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback updateMany
   */
  export type feedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update feedbacks.
     */
    data: XOR<feedbackUpdateManyMutationInput, feedbackUncheckedUpdateManyInput>
    /**
     * Filter which feedbacks to update
     */
    where?: feedbackWhereInput
    /**
     * Limit how many feedbacks to update.
     */
    limit?: number
  }

  /**
   * feedback upsert
   */
  export type feedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the feedback to update in case it exists.
     */
    where: feedbackWhereUniqueInput
    /**
     * In case the feedback found by the `where` argument doesn't exist, create a new feedback with this data.
     */
    create: XOR<feedbackCreateInput, feedbackUncheckedCreateInput>
    /**
     * In case the feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<feedbackUpdateInput, feedbackUncheckedUpdateInput>
  }

  /**
   * feedback delete
   */
  export type feedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    /**
     * Filter which feedback to delete.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback deleteMany
   */
  export type feedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feedbacks to delete
     */
    where?: feedbackWhereInput
    /**
     * Limit how many feedbacks to delete.
     */
    limit?: number
  }

  /**
   * feedback without action
   */
  export type feedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
  }


  /**
   * Model legacy_print_queue
   */

  export type AggregateLegacy_print_queue = {
    _count: Legacy_print_queueCountAggregateOutputType | null
    _avg: Legacy_print_queueAvgAggregateOutputType | null
    _sum: Legacy_print_queueSumAggregateOutputType | null
    _min: Legacy_print_queueMinAggregateOutputType | null
    _max: Legacy_print_queueMaxAggregateOutputType | null
  }

  export type Legacy_print_queueAvgAggregateOutputType = {
    id: number | null
    order_id_pwa: number | null
    table_number: number | null
    total_amount: Decimal | null
  }

  export type Legacy_print_queueSumAggregateOutputType = {
    id: number | null
    order_id_pwa: number | null
    table_number: number | null
    total_amount: Decimal | null
  }

  export type Legacy_print_queueMinAggregateOutputType = {
    id: number | null
    order_id_pwa: number | null
    table_number: number | null
    total_amount: Decimal | null
    status_print: $Enums.legacy_print_queue_status_print | null
    created_at: Date | null
  }

  export type Legacy_print_queueMaxAggregateOutputType = {
    id: number | null
    order_id_pwa: number | null
    table_number: number | null
    total_amount: Decimal | null
    status_print: $Enums.legacy_print_queue_status_print | null
    created_at: Date | null
  }

  export type Legacy_print_queueCountAggregateOutputType = {
    id: number
    order_id_pwa: number
    table_number: number
    total_amount: number
    status_print: number
    created_at: number
    _all: number
  }


  export type Legacy_print_queueAvgAggregateInputType = {
    id?: true
    order_id_pwa?: true
    table_number?: true
    total_amount?: true
  }

  export type Legacy_print_queueSumAggregateInputType = {
    id?: true
    order_id_pwa?: true
    table_number?: true
    total_amount?: true
  }

  export type Legacy_print_queueMinAggregateInputType = {
    id?: true
    order_id_pwa?: true
    table_number?: true
    total_amount?: true
    status_print?: true
    created_at?: true
  }

  export type Legacy_print_queueMaxAggregateInputType = {
    id?: true
    order_id_pwa?: true
    table_number?: true
    total_amount?: true
    status_print?: true
    created_at?: true
  }

  export type Legacy_print_queueCountAggregateInputType = {
    id?: true
    order_id_pwa?: true
    table_number?: true
    total_amount?: true
    status_print?: true
    created_at?: true
    _all?: true
  }

  export type Legacy_print_queueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which legacy_print_queue to aggregate.
     */
    where?: legacy_print_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of legacy_print_queues to fetch.
     */
    orderBy?: legacy_print_queueOrderByWithRelationInput | legacy_print_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: legacy_print_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` legacy_print_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` legacy_print_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned legacy_print_queues
    **/
    _count?: true | Legacy_print_queueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Legacy_print_queueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Legacy_print_queueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Legacy_print_queueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Legacy_print_queueMaxAggregateInputType
  }

  export type GetLegacy_print_queueAggregateType<T extends Legacy_print_queueAggregateArgs> = {
        [P in keyof T & keyof AggregateLegacy_print_queue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegacy_print_queue[P]>
      : GetScalarType<T[P], AggregateLegacy_print_queue[P]>
  }




  export type legacy_print_queueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: legacy_print_queueWhereInput
    orderBy?: legacy_print_queueOrderByWithAggregationInput | legacy_print_queueOrderByWithAggregationInput[]
    by: Legacy_print_queueScalarFieldEnum[] | Legacy_print_queueScalarFieldEnum
    having?: legacy_print_queueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Legacy_print_queueCountAggregateInputType | true
    _avg?: Legacy_print_queueAvgAggregateInputType
    _sum?: Legacy_print_queueSumAggregateInputType
    _min?: Legacy_print_queueMinAggregateInputType
    _max?: Legacy_print_queueMaxAggregateInputType
  }

  export type Legacy_print_queueGroupByOutputType = {
    id: number
    order_id_pwa: number
    table_number: number
    total_amount: Decimal
    status_print: $Enums.legacy_print_queue_status_print | null
    created_at: Date
    _count: Legacy_print_queueCountAggregateOutputType | null
    _avg: Legacy_print_queueAvgAggregateOutputType | null
    _sum: Legacy_print_queueSumAggregateOutputType | null
    _min: Legacy_print_queueMinAggregateOutputType | null
    _max: Legacy_print_queueMaxAggregateOutputType | null
  }

  type GetLegacy_print_queueGroupByPayload<T extends legacy_print_queueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Legacy_print_queueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Legacy_print_queueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Legacy_print_queueGroupByOutputType[P]>
            : GetScalarType<T[P], Legacy_print_queueGroupByOutputType[P]>
        }
      >
    >


  export type legacy_print_queueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id_pwa?: boolean
    table_number?: boolean
    total_amount?: boolean
    status_print?: boolean
    created_at?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legacy_print_queue"]>



  export type legacy_print_queueSelectScalar = {
    id?: boolean
    order_id_pwa?: boolean
    table_number?: boolean
    total_amount?: boolean
    status_print?: boolean
    created_at?: boolean
  }

  export type legacy_print_queueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id_pwa" | "table_number" | "total_amount" | "status_print" | "created_at", ExtArgs["result"]["legacy_print_queue"]>
  export type legacy_print_queueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
  }

  export type $legacy_print_queuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "legacy_print_queue"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id_pwa: number
      table_number: number
      total_amount: Prisma.Decimal
      status_print: $Enums.legacy_print_queue_status_print | null
      created_at: Date
    }, ExtArgs["result"]["legacy_print_queue"]>
    composites: {}
  }

  type legacy_print_queueGetPayload<S extends boolean | null | undefined | legacy_print_queueDefaultArgs> = $Result.GetResult<Prisma.$legacy_print_queuePayload, S>

  type legacy_print_queueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<legacy_print_queueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Legacy_print_queueCountAggregateInputType | true
    }

  export interface legacy_print_queueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['legacy_print_queue'], meta: { name: 'legacy_print_queue' } }
    /**
     * Find zero or one Legacy_print_queue that matches the filter.
     * @param {legacy_print_queueFindUniqueArgs} args - Arguments to find a Legacy_print_queue
     * @example
     * // Get one Legacy_print_queue
     * const legacy_print_queue = await prisma.legacy_print_queue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends legacy_print_queueFindUniqueArgs>(args: SelectSubset<T, legacy_print_queueFindUniqueArgs<ExtArgs>>): Prisma__legacy_print_queueClient<$Result.GetResult<Prisma.$legacy_print_queuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Legacy_print_queue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {legacy_print_queueFindUniqueOrThrowArgs} args - Arguments to find a Legacy_print_queue
     * @example
     * // Get one Legacy_print_queue
     * const legacy_print_queue = await prisma.legacy_print_queue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends legacy_print_queueFindUniqueOrThrowArgs>(args: SelectSubset<T, legacy_print_queueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__legacy_print_queueClient<$Result.GetResult<Prisma.$legacy_print_queuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Legacy_print_queue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {legacy_print_queueFindFirstArgs} args - Arguments to find a Legacy_print_queue
     * @example
     * // Get one Legacy_print_queue
     * const legacy_print_queue = await prisma.legacy_print_queue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends legacy_print_queueFindFirstArgs>(args?: SelectSubset<T, legacy_print_queueFindFirstArgs<ExtArgs>>): Prisma__legacy_print_queueClient<$Result.GetResult<Prisma.$legacy_print_queuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Legacy_print_queue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {legacy_print_queueFindFirstOrThrowArgs} args - Arguments to find a Legacy_print_queue
     * @example
     * // Get one Legacy_print_queue
     * const legacy_print_queue = await prisma.legacy_print_queue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends legacy_print_queueFindFirstOrThrowArgs>(args?: SelectSubset<T, legacy_print_queueFindFirstOrThrowArgs<ExtArgs>>): Prisma__legacy_print_queueClient<$Result.GetResult<Prisma.$legacy_print_queuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Legacy_print_queues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {legacy_print_queueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Legacy_print_queues
     * const legacy_print_queues = await prisma.legacy_print_queue.findMany()
     * 
     * // Get first 10 Legacy_print_queues
     * const legacy_print_queues = await prisma.legacy_print_queue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legacy_print_queueWithIdOnly = await prisma.legacy_print_queue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends legacy_print_queueFindManyArgs>(args?: SelectSubset<T, legacy_print_queueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$legacy_print_queuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Legacy_print_queue.
     * @param {legacy_print_queueCreateArgs} args - Arguments to create a Legacy_print_queue.
     * @example
     * // Create one Legacy_print_queue
     * const Legacy_print_queue = await prisma.legacy_print_queue.create({
     *   data: {
     *     // ... data to create a Legacy_print_queue
     *   }
     * })
     * 
     */
    create<T extends legacy_print_queueCreateArgs>(args: SelectSubset<T, legacy_print_queueCreateArgs<ExtArgs>>): Prisma__legacy_print_queueClient<$Result.GetResult<Prisma.$legacy_print_queuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Legacy_print_queues.
     * @param {legacy_print_queueCreateManyArgs} args - Arguments to create many Legacy_print_queues.
     * @example
     * // Create many Legacy_print_queues
     * const legacy_print_queue = await prisma.legacy_print_queue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends legacy_print_queueCreateManyArgs>(args?: SelectSubset<T, legacy_print_queueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Legacy_print_queue.
     * @param {legacy_print_queueDeleteArgs} args - Arguments to delete one Legacy_print_queue.
     * @example
     * // Delete one Legacy_print_queue
     * const Legacy_print_queue = await prisma.legacy_print_queue.delete({
     *   where: {
     *     // ... filter to delete one Legacy_print_queue
     *   }
     * })
     * 
     */
    delete<T extends legacy_print_queueDeleteArgs>(args: SelectSubset<T, legacy_print_queueDeleteArgs<ExtArgs>>): Prisma__legacy_print_queueClient<$Result.GetResult<Prisma.$legacy_print_queuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Legacy_print_queue.
     * @param {legacy_print_queueUpdateArgs} args - Arguments to update one Legacy_print_queue.
     * @example
     * // Update one Legacy_print_queue
     * const legacy_print_queue = await prisma.legacy_print_queue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends legacy_print_queueUpdateArgs>(args: SelectSubset<T, legacy_print_queueUpdateArgs<ExtArgs>>): Prisma__legacy_print_queueClient<$Result.GetResult<Prisma.$legacy_print_queuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Legacy_print_queues.
     * @param {legacy_print_queueDeleteManyArgs} args - Arguments to filter Legacy_print_queues to delete.
     * @example
     * // Delete a few Legacy_print_queues
     * const { count } = await prisma.legacy_print_queue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends legacy_print_queueDeleteManyArgs>(args?: SelectSubset<T, legacy_print_queueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Legacy_print_queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {legacy_print_queueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Legacy_print_queues
     * const legacy_print_queue = await prisma.legacy_print_queue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends legacy_print_queueUpdateManyArgs>(args: SelectSubset<T, legacy_print_queueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Legacy_print_queue.
     * @param {legacy_print_queueUpsertArgs} args - Arguments to update or create a Legacy_print_queue.
     * @example
     * // Update or create a Legacy_print_queue
     * const legacy_print_queue = await prisma.legacy_print_queue.upsert({
     *   create: {
     *     // ... data to create a Legacy_print_queue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Legacy_print_queue we want to update
     *   }
     * })
     */
    upsert<T extends legacy_print_queueUpsertArgs>(args: SelectSubset<T, legacy_print_queueUpsertArgs<ExtArgs>>): Prisma__legacy_print_queueClient<$Result.GetResult<Prisma.$legacy_print_queuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Legacy_print_queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {legacy_print_queueCountArgs} args - Arguments to filter Legacy_print_queues to count.
     * @example
     * // Count the number of Legacy_print_queues
     * const count = await prisma.legacy_print_queue.count({
     *   where: {
     *     // ... the filter for the Legacy_print_queues we want to count
     *   }
     * })
    **/
    count<T extends legacy_print_queueCountArgs>(
      args?: Subset<T, legacy_print_queueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Legacy_print_queueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Legacy_print_queue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Legacy_print_queueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Legacy_print_queueAggregateArgs>(args: Subset<T, Legacy_print_queueAggregateArgs>): Prisma.PrismaPromise<GetLegacy_print_queueAggregateType<T>>

    /**
     * Group by Legacy_print_queue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {legacy_print_queueGroupByArgs} args - Group by arguments.
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
      T extends legacy_print_queueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: legacy_print_queueGroupByArgs['orderBy'] }
        : { orderBy?: legacy_print_queueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, legacy_print_queueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegacy_print_queueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the legacy_print_queue model
   */
  readonly fields: legacy_print_queueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for legacy_print_queue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__legacy_print_queueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the legacy_print_queue model
   */
  interface legacy_print_queueFieldRefs {
    readonly id: FieldRef<"legacy_print_queue", 'Int'>
    readonly order_id_pwa: FieldRef<"legacy_print_queue", 'Int'>
    readonly table_number: FieldRef<"legacy_print_queue", 'Int'>
    readonly total_amount: FieldRef<"legacy_print_queue", 'Decimal'>
    readonly status_print: FieldRef<"legacy_print_queue", 'legacy_print_queue_status_print'>
    readonly created_at: FieldRef<"legacy_print_queue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * legacy_print_queue findUnique
   */
  export type legacy_print_queueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_print_queue
     */
    select?: legacy_print_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_print_queue
     */
    omit?: legacy_print_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: legacy_print_queueInclude<ExtArgs> | null
    /**
     * Filter, which legacy_print_queue to fetch.
     */
    where: legacy_print_queueWhereUniqueInput
  }

  /**
   * legacy_print_queue findUniqueOrThrow
   */
  export type legacy_print_queueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_print_queue
     */
    select?: legacy_print_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_print_queue
     */
    omit?: legacy_print_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: legacy_print_queueInclude<ExtArgs> | null
    /**
     * Filter, which legacy_print_queue to fetch.
     */
    where: legacy_print_queueWhereUniqueInput
  }

  /**
   * legacy_print_queue findFirst
   */
  export type legacy_print_queueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_print_queue
     */
    select?: legacy_print_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_print_queue
     */
    omit?: legacy_print_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: legacy_print_queueInclude<ExtArgs> | null
    /**
     * Filter, which legacy_print_queue to fetch.
     */
    where?: legacy_print_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of legacy_print_queues to fetch.
     */
    orderBy?: legacy_print_queueOrderByWithRelationInput | legacy_print_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for legacy_print_queues.
     */
    cursor?: legacy_print_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` legacy_print_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` legacy_print_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of legacy_print_queues.
     */
    distinct?: Legacy_print_queueScalarFieldEnum | Legacy_print_queueScalarFieldEnum[]
  }

  /**
   * legacy_print_queue findFirstOrThrow
   */
  export type legacy_print_queueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_print_queue
     */
    select?: legacy_print_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_print_queue
     */
    omit?: legacy_print_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: legacy_print_queueInclude<ExtArgs> | null
    /**
     * Filter, which legacy_print_queue to fetch.
     */
    where?: legacy_print_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of legacy_print_queues to fetch.
     */
    orderBy?: legacy_print_queueOrderByWithRelationInput | legacy_print_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for legacy_print_queues.
     */
    cursor?: legacy_print_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` legacy_print_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` legacy_print_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of legacy_print_queues.
     */
    distinct?: Legacy_print_queueScalarFieldEnum | Legacy_print_queueScalarFieldEnum[]
  }

  /**
   * legacy_print_queue findMany
   */
  export type legacy_print_queueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_print_queue
     */
    select?: legacy_print_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_print_queue
     */
    omit?: legacy_print_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: legacy_print_queueInclude<ExtArgs> | null
    /**
     * Filter, which legacy_print_queues to fetch.
     */
    where?: legacy_print_queueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of legacy_print_queues to fetch.
     */
    orderBy?: legacy_print_queueOrderByWithRelationInput | legacy_print_queueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing legacy_print_queues.
     */
    cursor?: legacy_print_queueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` legacy_print_queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` legacy_print_queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of legacy_print_queues.
     */
    distinct?: Legacy_print_queueScalarFieldEnum | Legacy_print_queueScalarFieldEnum[]
  }

  /**
   * legacy_print_queue create
   */
  export type legacy_print_queueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_print_queue
     */
    select?: legacy_print_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_print_queue
     */
    omit?: legacy_print_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: legacy_print_queueInclude<ExtArgs> | null
    /**
     * The data needed to create a legacy_print_queue.
     */
    data: XOR<legacy_print_queueCreateInput, legacy_print_queueUncheckedCreateInput>
  }

  /**
   * legacy_print_queue createMany
   */
  export type legacy_print_queueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many legacy_print_queues.
     */
    data: legacy_print_queueCreateManyInput | legacy_print_queueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * legacy_print_queue update
   */
  export type legacy_print_queueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_print_queue
     */
    select?: legacy_print_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_print_queue
     */
    omit?: legacy_print_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: legacy_print_queueInclude<ExtArgs> | null
    /**
     * The data needed to update a legacy_print_queue.
     */
    data: XOR<legacy_print_queueUpdateInput, legacy_print_queueUncheckedUpdateInput>
    /**
     * Choose, which legacy_print_queue to update.
     */
    where: legacy_print_queueWhereUniqueInput
  }

  /**
   * legacy_print_queue updateMany
   */
  export type legacy_print_queueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update legacy_print_queues.
     */
    data: XOR<legacy_print_queueUpdateManyMutationInput, legacy_print_queueUncheckedUpdateManyInput>
    /**
     * Filter which legacy_print_queues to update
     */
    where?: legacy_print_queueWhereInput
    /**
     * Limit how many legacy_print_queues to update.
     */
    limit?: number
  }

  /**
   * legacy_print_queue upsert
   */
  export type legacy_print_queueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_print_queue
     */
    select?: legacy_print_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_print_queue
     */
    omit?: legacy_print_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: legacy_print_queueInclude<ExtArgs> | null
    /**
     * The filter to search for the legacy_print_queue to update in case it exists.
     */
    where: legacy_print_queueWhereUniqueInput
    /**
     * In case the legacy_print_queue found by the `where` argument doesn't exist, create a new legacy_print_queue with this data.
     */
    create: XOR<legacy_print_queueCreateInput, legacy_print_queueUncheckedCreateInput>
    /**
     * In case the legacy_print_queue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<legacy_print_queueUpdateInput, legacy_print_queueUncheckedUpdateInput>
  }

  /**
   * legacy_print_queue delete
   */
  export type legacy_print_queueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_print_queue
     */
    select?: legacy_print_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_print_queue
     */
    omit?: legacy_print_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: legacy_print_queueInclude<ExtArgs> | null
    /**
     * Filter which legacy_print_queue to delete.
     */
    where: legacy_print_queueWhereUniqueInput
  }

  /**
   * legacy_print_queue deleteMany
   */
  export type legacy_print_queueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which legacy_print_queues to delete
     */
    where?: legacy_print_queueWhereInput
    /**
     * Limit how many legacy_print_queues to delete.
     */
    limit?: number
  }

  /**
   * legacy_print_queue without action
   */
  export type legacy_print_queueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_print_queue
     */
    select?: legacy_print_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_print_queue
     */
    omit?: legacy_print_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: legacy_print_queueInclude<ExtArgs> | null
  }


  /**
   * Model menu_items
   */

  export type AggregateMenu_items = {
    _count: Menu_itemsCountAggregateOutputType | null
    _avg: Menu_itemsAvgAggregateOutputType | null
    _sum: Menu_itemsSumAggregateOutputType | null
    _min: Menu_itemsMinAggregateOutputType | null
    _max: Menu_itemsMaxAggregateOutputType | null
  }

  export type Menu_itemsAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
    price: Decimal | null
  }

  export type Menu_itemsSumAggregateOutputType = {
    id: number | null
    category_id: number | null
    price: Decimal | null
  }

  export type Menu_itemsMinAggregateOutputType = {
    id: number | null
    category_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    image_url: string | null
    status: $Enums.menu_items_status | null
  }

  export type Menu_itemsMaxAggregateOutputType = {
    id: number | null
    category_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    image_url: string | null
    status: $Enums.menu_items_status | null
  }

  export type Menu_itemsCountAggregateOutputType = {
    id: number
    category_id: number
    name: number
    description: number
    price: number
    image_url: number
    status: number
    _all: number
  }


  export type Menu_itemsAvgAggregateInputType = {
    id?: true
    category_id?: true
    price?: true
  }

  export type Menu_itemsSumAggregateInputType = {
    id?: true
    category_id?: true
    price?: true
  }

  export type Menu_itemsMinAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    description?: true
    price?: true
    image_url?: true
    status?: true
  }

  export type Menu_itemsMaxAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    description?: true
    price?: true
    image_url?: true
    status?: true
  }

  export type Menu_itemsCountAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    description?: true
    price?: true
    image_url?: true
    status?: true
    _all?: true
  }

  export type Menu_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu_items to aggregate.
     */
    where?: menu_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_items to fetch.
     */
    orderBy?: menu_itemsOrderByWithRelationInput | menu_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menu_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menu_items
    **/
    _count?: true | Menu_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Menu_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Menu_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Menu_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Menu_itemsMaxAggregateInputType
  }

  export type GetMenu_itemsAggregateType<T extends Menu_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu_items[P]>
      : GetScalarType<T[P], AggregateMenu_items[P]>
  }




  export type menu_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_itemsWhereInput
    orderBy?: menu_itemsOrderByWithAggregationInput | menu_itemsOrderByWithAggregationInput[]
    by: Menu_itemsScalarFieldEnum[] | Menu_itemsScalarFieldEnum
    having?: menu_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Menu_itemsCountAggregateInputType | true
    _avg?: Menu_itemsAvgAggregateInputType
    _sum?: Menu_itemsSumAggregateInputType
    _min?: Menu_itemsMinAggregateInputType
    _max?: Menu_itemsMaxAggregateInputType
  }

  export type Menu_itemsGroupByOutputType = {
    id: number
    category_id: number | null
    name: string
    description: string | null
    price: Decimal
    image_url: string | null
    status: $Enums.menu_items_status | null
    _count: Menu_itemsCountAggregateOutputType | null
    _avg: Menu_itemsAvgAggregateOutputType | null
    _sum: Menu_itemsSumAggregateOutputType | null
    _min: Menu_itemsMinAggregateOutputType | null
    _max: Menu_itemsMaxAggregateOutputType | null
  }

  type GetMenu_itemsGroupByPayload<T extends menu_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Menu_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Menu_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Menu_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Menu_itemsGroupByOutputType[P]>
        }
      >
    >


  export type menu_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    image_url?: boolean
    status?: boolean
    feedback?: boolean | menu_items$feedbackArgs<ExtArgs>
    categories?: boolean | menu_items$categoriesArgs<ExtArgs>
    order_items?: boolean | menu_items$order_itemsArgs<ExtArgs>
    recipe_bom?: boolean | menu_items$recipe_bomArgs<ExtArgs>
    _count?: boolean | Menu_itemsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu_items"]>



  export type menu_itemsSelectScalar = {
    id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    image_url?: boolean
    status?: boolean
  }

  export type menu_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category_id" | "name" | "description" | "price" | "image_url" | "status", ExtArgs["result"]["menu_items"]>
  export type menu_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | menu_items$feedbackArgs<ExtArgs>
    categories?: boolean | menu_items$categoriesArgs<ExtArgs>
    order_items?: boolean | menu_items$order_itemsArgs<ExtArgs>
    recipe_bom?: boolean | menu_items$recipe_bomArgs<ExtArgs>
    _count?: boolean | Menu_itemsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $menu_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menu_items"
    objects: {
      feedback: Prisma.$feedbackPayload<ExtArgs>[]
      categories: Prisma.$categoriesPayload<ExtArgs> | null
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
      recipe_bom: Prisma.$recipe_bomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category_id: number | null
      name: string
      description: string | null
      price: Prisma.Decimal
      image_url: string | null
      status: $Enums.menu_items_status | null
    }, ExtArgs["result"]["menu_items"]>
    composites: {}
  }

  type menu_itemsGetPayload<S extends boolean | null | undefined | menu_itemsDefaultArgs> = $Result.GetResult<Prisma.$menu_itemsPayload, S>

  type menu_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<menu_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Menu_itemsCountAggregateInputType | true
    }

  export interface menu_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menu_items'], meta: { name: 'menu_items' } }
    /**
     * Find zero or one Menu_items that matches the filter.
     * @param {menu_itemsFindUniqueArgs} args - Arguments to find a Menu_items
     * @example
     * // Get one Menu_items
     * const menu_items = await prisma.menu_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menu_itemsFindUniqueArgs>(args: SelectSubset<T, menu_itemsFindUniqueArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {menu_itemsFindUniqueOrThrowArgs} args - Arguments to find a Menu_items
     * @example
     * // Get one Menu_items
     * const menu_items = await prisma.menu_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menu_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, menu_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_itemsFindFirstArgs} args - Arguments to find a Menu_items
     * @example
     * // Get one Menu_items
     * const menu_items = await prisma.menu_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menu_itemsFindFirstArgs>(args?: SelectSubset<T, menu_itemsFindFirstArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_itemsFindFirstOrThrowArgs} args - Arguments to find a Menu_items
     * @example
     * // Get one Menu_items
     * const menu_items = await prisma.menu_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menu_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, menu_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menu_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menu_items
     * const menu_items = await prisma.menu_items.findMany()
     * 
     * // Get first 10 Menu_items
     * const menu_items = await prisma.menu_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menu_itemsWithIdOnly = await prisma.menu_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends menu_itemsFindManyArgs>(args?: SelectSubset<T, menu_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu_items.
     * @param {menu_itemsCreateArgs} args - Arguments to create a Menu_items.
     * @example
     * // Create one Menu_items
     * const Menu_items = await prisma.menu_items.create({
     *   data: {
     *     // ... data to create a Menu_items
     *   }
     * })
     * 
     */
    create<T extends menu_itemsCreateArgs>(args: SelectSubset<T, menu_itemsCreateArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menu_items.
     * @param {menu_itemsCreateManyArgs} args - Arguments to create many Menu_items.
     * @example
     * // Create many Menu_items
     * const menu_items = await prisma.menu_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends menu_itemsCreateManyArgs>(args?: SelectSubset<T, menu_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menu_items.
     * @param {menu_itemsDeleteArgs} args - Arguments to delete one Menu_items.
     * @example
     * // Delete one Menu_items
     * const Menu_items = await prisma.menu_items.delete({
     *   where: {
     *     // ... filter to delete one Menu_items
     *   }
     * })
     * 
     */
    delete<T extends menu_itemsDeleteArgs>(args: SelectSubset<T, menu_itemsDeleteArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu_items.
     * @param {menu_itemsUpdateArgs} args - Arguments to update one Menu_items.
     * @example
     * // Update one Menu_items
     * const menu_items = await prisma.menu_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends menu_itemsUpdateArgs>(args: SelectSubset<T, menu_itemsUpdateArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menu_items.
     * @param {menu_itemsDeleteManyArgs} args - Arguments to filter Menu_items to delete.
     * @example
     * // Delete a few Menu_items
     * const { count } = await prisma.menu_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends menu_itemsDeleteManyArgs>(args?: SelectSubset<T, menu_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menu_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menu_items
     * const menu_items = await prisma.menu_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends menu_itemsUpdateManyArgs>(args: SelectSubset<T, menu_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu_items.
     * @param {menu_itemsUpsertArgs} args - Arguments to update or create a Menu_items.
     * @example
     * // Update or create a Menu_items
     * const menu_items = await prisma.menu_items.upsert({
     *   create: {
     *     // ... data to create a Menu_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu_items we want to update
     *   }
     * })
     */
    upsert<T extends menu_itemsUpsertArgs>(args: SelectSubset<T, menu_itemsUpsertArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menu_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_itemsCountArgs} args - Arguments to filter Menu_items to count.
     * @example
     * // Count the number of Menu_items
     * const count = await prisma.menu_items.count({
     *   where: {
     *     // ... the filter for the Menu_items we want to count
     *   }
     * })
    **/
    count<T extends menu_itemsCountArgs>(
      args?: Subset<T, menu_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Menu_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Menu_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Menu_itemsAggregateArgs>(args: Subset<T, Menu_itemsAggregateArgs>): Prisma.PrismaPromise<GetMenu_itemsAggregateType<T>>

    /**
     * Group by Menu_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_itemsGroupByArgs} args - Group by arguments.
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
      T extends menu_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menu_itemsGroupByArgs['orderBy'] }
        : { orderBy?: menu_itemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, menu_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenu_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the menu_items model
   */
  readonly fields: menu_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menu_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menu_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feedback<T extends menu_items$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, menu_items$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends menu_items$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, menu_items$categoriesArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    order_items<T extends menu_items$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, menu_items$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipe_bom<T extends menu_items$recipe_bomArgs<ExtArgs> = {}>(args?: Subset<T, menu_items$recipe_bomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipe_bomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the menu_items model
   */
  interface menu_itemsFieldRefs {
    readonly id: FieldRef<"menu_items", 'Int'>
    readonly category_id: FieldRef<"menu_items", 'Int'>
    readonly name: FieldRef<"menu_items", 'String'>
    readonly description: FieldRef<"menu_items", 'String'>
    readonly price: FieldRef<"menu_items", 'Decimal'>
    readonly image_url: FieldRef<"menu_items", 'String'>
    readonly status: FieldRef<"menu_items", 'menu_items_status'>
  }
    

  // Custom InputTypes
  /**
   * menu_items findUnique
   */
  export type menu_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    /**
     * Filter, which menu_items to fetch.
     */
    where: menu_itemsWhereUniqueInput
  }

  /**
   * menu_items findUniqueOrThrow
   */
  export type menu_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    /**
     * Filter, which menu_items to fetch.
     */
    where: menu_itemsWhereUniqueInput
  }

  /**
   * menu_items findFirst
   */
  export type menu_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    /**
     * Filter, which menu_items to fetch.
     */
    where?: menu_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_items to fetch.
     */
    orderBy?: menu_itemsOrderByWithRelationInput | menu_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_items.
     */
    cursor?: menu_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_items.
     */
    distinct?: Menu_itemsScalarFieldEnum | Menu_itemsScalarFieldEnum[]
  }

  /**
   * menu_items findFirstOrThrow
   */
  export type menu_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    /**
     * Filter, which menu_items to fetch.
     */
    where?: menu_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_items to fetch.
     */
    orderBy?: menu_itemsOrderByWithRelationInput | menu_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_items.
     */
    cursor?: menu_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_items.
     */
    distinct?: Menu_itemsScalarFieldEnum | Menu_itemsScalarFieldEnum[]
  }

  /**
   * menu_items findMany
   */
  export type menu_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    /**
     * Filter, which menu_items to fetch.
     */
    where?: menu_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_items to fetch.
     */
    orderBy?: menu_itemsOrderByWithRelationInput | menu_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menu_items.
     */
    cursor?: menu_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_items.
     */
    distinct?: Menu_itemsScalarFieldEnum | Menu_itemsScalarFieldEnum[]
  }

  /**
   * menu_items create
   */
  export type menu_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a menu_items.
     */
    data: XOR<menu_itemsCreateInput, menu_itemsUncheckedCreateInput>
  }

  /**
   * menu_items createMany
   */
  export type menu_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menu_items.
     */
    data: menu_itemsCreateManyInput | menu_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menu_items update
   */
  export type menu_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a menu_items.
     */
    data: XOR<menu_itemsUpdateInput, menu_itemsUncheckedUpdateInput>
    /**
     * Choose, which menu_items to update.
     */
    where: menu_itemsWhereUniqueInput
  }

  /**
   * menu_items updateMany
   */
  export type menu_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menu_items.
     */
    data: XOR<menu_itemsUpdateManyMutationInput, menu_itemsUncheckedUpdateManyInput>
    /**
     * Filter which menu_items to update
     */
    where?: menu_itemsWhereInput
    /**
     * Limit how many menu_items to update.
     */
    limit?: number
  }

  /**
   * menu_items upsert
   */
  export type menu_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the menu_items to update in case it exists.
     */
    where: menu_itemsWhereUniqueInput
    /**
     * In case the menu_items found by the `where` argument doesn't exist, create a new menu_items with this data.
     */
    create: XOR<menu_itemsCreateInput, menu_itemsUncheckedCreateInput>
    /**
     * In case the menu_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menu_itemsUpdateInput, menu_itemsUncheckedUpdateInput>
  }

  /**
   * menu_items delete
   */
  export type menu_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
    /**
     * Filter which menu_items to delete.
     */
    where: menu_itemsWhereUniqueInput
  }

  /**
   * menu_items deleteMany
   */
  export type menu_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu_items to delete
     */
    where?: menu_itemsWhereInput
    /**
     * Limit how many menu_items to delete.
     */
    limit?: number
  }

  /**
   * menu_items.feedback
   */
  export type menu_items$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    where?: feedbackWhereInput
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    cursor?: feedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * menu_items.categories
   */
  export type menu_items$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
  }

  /**
   * menu_items.order_items
   */
  export type menu_items$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * menu_items.recipe_bom
   */
  export type menu_items$recipe_bomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_bom
     */
    select?: recipe_bomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_bom
     */
    omit?: recipe_bomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_bomInclude<ExtArgs> | null
    where?: recipe_bomWhereInput
    orderBy?: recipe_bomOrderByWithRelationInput | recipe_bomOrderByWithRelationInput[]
    cursor?: recipe_bomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recipe_bomScalarFieldEnum | Recipe_bomScalarFieldEnum[]
  }

  /**
   * menu_items without action
   */
  export type menu_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_items
     */
    select?: menu_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_items
     */
    omit?: menu_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_itemsInclude<ExtArgs> | null
  }


  /**
   * Model order_items
   */

  export type AggregateOrder_items = {
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  export type Order_itemsAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    menu_item_id: number | null
    quantity: number | null
  }

  export type Order_itemsSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    menu_item_id: number | null
    quantity: number | null
  }

  export type Order_itemsMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    menu_item_id: number | null
    quantity: number | null
    notes: string | null
  }

  export type Order_itemsMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    menu_item_id: number | null
    quantity: number | null
    notes: string | null
  }

  export type Order_itemsCountAggregateOutputType = {
    id: number
    order_id: number
    menu_item_id: number
    quantity: number
    notes: number
    _all: number
  }


  export type Order_itemsAvgAggregateInputType = {
    id?: true
    order_id?: true
    menu_item_id?: true
    quantity?: true
  }

  export type Order_itemsSumAggregateInputType = {
    id?: true
    order_id?: true
    menu_item_id?: true
    quantity?: true
  }

  export type Order_itemsMinAggregateInputType = {
    id?: true
    order_id?: true
    menu_item_id?: true
    quantity?: true
    notes?: true
  }

  export type Order_itemsMaxAggregateInputType = {
    id?: true
    order_id?: true
    menu_item_id?: true
    quantity?: true
    notes?: true
  }

  export type Order_itemsCountAggregateInputType = {
    id?: true
    order_id?: true
    menu_item_id?: true
    quantity?: true
    notes?: true
    _all?: true
  }

  export type Order_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to aggregate.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemsMaxAggregateInputType
  }

  export type GetOrder_itemsAggregateType<T extends Order_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_items[P]>
      : GetScalarType<T[P], AggregateOrder_items[P]>
  }




  export type order_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithAggregationInput | order_itemsOrderByWithAggregationInput[]
    by: Order_itemsScalarFieldEnum[] | Order_itemsScalarFieldEnum
    having?: order_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemsCountAggregateInputType | true
    _avg?: Order_itemsAvgAggregateInputType
    _sum?: Order_itemsSumAggregateInputType
    _min?: Order_itemsMinAggregateInputType
    _max?: Order_itemsMaxAggregateInputType
  }

  export type Order_itemsGroupByOutputType = {
    id: number
    order_id: number
    menu_item_id: number
    quantity: number
    notes: string | null
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  type GetOrder_itemsGroupByPayload<T extends order_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
        }
      >
    >


  export type order_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    menu_item_id?: boolean
    quantity?: boolean
    notes?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    menu_items?: boolean | menu_itemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>



  export type order_itemsSelectScalar = {
    id?: boolean
    order_id?: boolean
    menu_item_id?: boolean
    quantity?: boolean
    notes?: boolean
  }

  export type order_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "menu_item_id" | "quantity" | "notes", ExtArgs["result"]["order_items"]>
  export type order_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    menu_items?: boolean | menu_itemsDefaultArgs<ExtArgs>
  }

  export type $order_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_items"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>
      menu_items: Prisma.$menu_itemsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number
      menu_item_id: number
      quantity: number
      notes: string | null
    }, ExtArgs["result"]["order_items"]>
    composites: {}
  }

  type order_itemsGetPayload<S extends boolean | null | undefined | order_itemsDefaultArgs> = $Result.GetResult<Prisma.$order_itemsPayload, S>

  type order_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_itemsCountAggregateInputType | true
    }

  export interface order_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_items'], meta: { name: 'order_items' } }
    /**
     * Find zero or one Order_items that matches the filter.
     * @param {order_itemsFindUniqueArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_itemsFindUniqueArgs>(args: SelectSubset<T, order_itemsFindUniqueArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_itemsFindUniqueOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, order_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_itemsFindFirstArgs>(args?: SelectSubset<T, order_itemsFindFirstArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, order_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_items.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_itemsWithIdOnly = await prisma.order_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_itemsFindManyArgs>(args?: SelectSubset<T, order_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_items.
     * @param {order_itemsCreateArgs} args - Arguments to create a Order_items.
     * @example
     * // Create one Order_items
     * const Order_items = await prisma.order_items.create({
     *   data: {
     *     // ... data to create a Order_items
     *   }
     * })
     * 
     */
    create<T extends order_itemsCreateArgs>(args: SelectSubset<T, order_itemsCreateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_items.
     * @param {order_itemsCreateManyArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_items = await prisma.order_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_itemsCreateManyArgs>(args?: SelectSubset<T, order_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_items.
     * @param {order_itemsDeleteArgs} args - Arguments to delete one Order_items.
     * @example
     * // Delete one Order_items
     * const Order_items = await prisma.order_items.delete({
     *   where: {
     *     // ... filter to delete one Order_items
     *   }
     * })
     * 
     */
    delete<T extends order_itemsDeleteArgs>(args: SelectSubset<T, order_itemsDeleteArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_items.
     * @param {order_itemsUpdateArgs} args - Arguments to update one Order_items.
     * @example
     * // Update one Order_items
     * const order_items = await prisma.order_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_itemsUpdateArgs>(args: SelectSubset<T, order_itemsUpdateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemsDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_itemsDeleteManyArgs>(args?: SelectSubset<T, order_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_itemsUpdateManyArgs>(args: SelectSubset<T, order_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_items.
     * @param {order_itemsUpsertArgs} args - Arguments to update or create a Order_items.
     * @example
     * // Update or create a Order_items
     * const order_items = await prisma.order_items.upsert({
     *   create: {
     *     // ... data to create a Order_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_items we want to update
     *   }
     * })
     */
    upsert<T extends order_itemsUpsertArgs>(args: SelectSubset<T, order_itemsUpsertArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_items.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemsCountArgs>(
      args?: Subset<T, order_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_itemsAggregateArgs>(args: Subset<T, Order_itemsAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemsAggregateType<T>>

    /**
     * Group by Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsGroupByArgs} args - Group by arguments.
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
      T extends order_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemsGroupByArgs['orderBy'] }
        : { orderBy?: order_itemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_items model
   */
  readonly fields: order_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menu_items<T extends menu_itemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menu_itemsDefaultArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the order_items model
   */
  interface order_itemsFieldRefs {
    readonly id: FieldRef<"order_items", 'Int'>
    readonly order_id: FieldRef<"order_items", 'Int'>
    readonly menu_item_id: FieldRef<"order_items", 'Int'>
    readonly quantity: FieldRef<"order_items", 'Int'>
    readonly notes: FieldRef<"order_items", 'String'>
  }
    

  // Custom InputTypes
  /**
   * order_items findUnique
   */
  export type order_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findUniqueOrThrow
   */
  export type order_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findFirst
   */
  export type order_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findFirstOrThrow
   */
  export type order_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findMany
   */
  export type order_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items create
   */
  export type order_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a order_items.
     */
    data: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
  }

  /**
   * order_items createMany
   */
  export type order_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_items update
   */
  export type order_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a order_items.
     */
    data: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
    /**
     * Choose, which order_items to update.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items updateMany
   */
  export type order_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
  }

  /**
   * order_items upsert
   */
  export type order_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the order_items to update in case it exists.
     */
    where: order_itemsWhereUniqueInput
    /**
     * In case the order_items found by the `where` argument doesn't exist, create a new order_items with this data.
     */
    create: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
    /**
     * In case the order_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
  }

  /**
   * order_items delete
   */
  export type order_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter which order_items to delete.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items deleteMany
   */
  export type order_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to delete.
     */
    limit?: number
  }

  /**
   * order_items without action
   */
  export type order_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    table_id: number | null
    subtotal: Decimal | null
    promo_id: number | null
    discount_amount: Decimal | null
    final_total: Decimal | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    table_id: number | null
    subtotal: Decimal | null
    promo_id: number | null
    discount_amount: Decimal | null
    final_total: Decimal | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    table_id: number | null
    status: $Enums.orders_status | null
    subtotal: Decimal | null
    promo_id: number | null
    discount_amount: Decimal | null
    final_total: Decimal | null
    created_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    table_id: number | null
    status: $Enums.orders_status | null
    subtotal: Decimal | null
    promo_id: number | null
    discount_amount: Decimal | null
    final_total: Decimal | null
    created_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    table_id: number
    status: number
    subtotal: number
    promo_id: number
    discount_amount: number
    final_total: number
    created_at: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    table_id?: true
    subtotal?: true
    promo_id?: true
    discount_amount?: true
    final_total?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    table_id?: true
    subtotal?: true
    promo_id?: true
    discount_amount?: true
    final_total?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    table_id?: true
    status?: true
    subtotal?: true
    promo_id?: true
    discount_amount?: true
    final_total?: true
    created_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    table_id?: true
    status?: true
    subtotal?: true
    promo_id?: true
    discount_amount?: true
    final_total?: true
    created_at?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    table_id?: true
    status?: true
    subtotal?: true
    promo_id?: true
    discount_amount?: true
    final_total?: true
    created_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    table_id: number
    status: $Enums.orders_status | null
    subtotal: Decimal
    promo_id: number | null
    discount_amount: Decimal | null
    final_total: Decimal
    created_at: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    table_id?: boolean
    status?: boolean
    subtotal?: boolean
    promo_id?: boolean
    discount_amount?: boolean
    final_total?: boolean
    created_at?: boolean
    feedback?: boolean | orders$feedbackArgs<ExtArgs>
    legacy_print_queue?: boolean | orders$legacy_print_queueArgs<ExtArgs>
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    tables?: boolean | tablesDefaultArgs<ExtArgs>
    promotions?: boolean | orders$promotionsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>



  export type ordersSelectScalar = {
    id?: boolean
    table_id?: boolean
    status?: boolean
    subtotal?: boolean
    promo_id?: boolean
    discount_amount?: boolean
    final_total?: boolean
    created_at?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "table_id" | "status" | "subtotal" | "promo_id" | "discount_amount" | "final_total" | "created_at", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedback?: boolean | orders$feedbackArgs<ExtArgs>
    legacy_print_queue?: boolean | orders$legacy_print_queueArgs<ExtArgs>
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    tables?: boolean | tablesDefaultArgs<ExtArgs>
    promotions?: boolean | orders$promotionsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      feedback: Prisma.$feedbackPayload<ExtArgs>[]
      legacy_print_queue: Prisma.$legacy_print_queuePayload<ExtArgs>[]
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
      tables: Prisma.$tablesPayload<ExtArgs>
      promotions: Prisma.$promotionsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      table_id: number
      status: $Enums.orders_status | null
      subtotal: Prisma.Decimal
      promo_id: number | null
      discount_amount: Prisma.Decimal | null
      final_total: Prisma.Decimal
      created_at: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
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
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feedback<T extends orders$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, orders$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    legacy_print_queue<T extends orders$legacy_print_queueArgs<ExtArgs> = {}>(args?: Subset<T, orders$legacy_print_queueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$legacy_print_queuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_items<T extends orders$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tables<T extends tablesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tablesDefaultArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    promotions<T extends orders$promotionsArgs<ExtArgs> = {}>(args?: Subset<T, orders$promotionsArgs<ExtArgs>>): Prisma__promotionsClient<$Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'Int'>
    readonly table_id: FieldRef<"orders", 'Int'>
    readonly status: FieldRef<"orders", 'orders_status'>
    readonly subtotal: FieldRef<"orders", 'Decimal'>
    readonly promo_id: FieldRef<"orders", 'Int'>
    readonly discount_amount: FieldRef<"orders", 'Decimal'>
    readonly final_total: FieldRef<"orders", 'Decimal'>
    readonly created_at: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.feedback
   */
  export type orders$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedbackInclude<ExtArgs> | null
    where?: feedbackWhereInput
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    cursor?: feedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * orders.legacy_print_queue
   */
  export type orders$legacy_print_queueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the legacy_print_queue
     */
    select?: legacy_print_queueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the legacy_print_queue
     */
    omit?: legacy_print_queueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: legacy_print_queueInclude<ExtArgs> | null
    where?: legacy_print_queueWhereInput
    orderBy?: legacy_print_queueOrderByWithRelationInput | legacy_print_queueOrderByWithRelationInput[]
    cursor?: legacy_print_queueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Legacy_print_queueScalarFieldEnum | Legacy_print_queueScalarFieldEnum[]
  }

  /**
   * orders.order_items
   */
  export type orders$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * orders.promotions
   */
  export type orders$promotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotions
     */
    select?: promotionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotions
     */
    omit?: promotionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: promotionsInclude<ExtArgs> | null
    where?: promotionsWhereInput
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model promotions
   */

  export type AggregatePromotions = {
    _count: PromotionsCountAggregateOutputType | null
    _avg: PromotionsAvgAggregateOutputType | null
    _sum: PromotionsSumAggregateOutputType | null
    _min: PromotionsMinAggregateOutputType | null
    _max: PromotionsMaxAggregateOutputType | null
  }

  export type PromotionsAvgAggregateOutputType = {
    id: number | null
    value: Decimal | null
    min_purchase: Decimal | null
  }

  export type PromotionsSumAggregateOutputType = {
    id: number | null
    value: Decimal | null
    min_purchase: Decimal | null
  }

  export type PromotionsMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.promotions_type | null
    value: Decimal | null
    min_purchase: Decimal | null
    is_active: boolean | null
  }

  export type PromotionsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.promotions_type | null
    value: Decimal | null
    min_purchase: Decimal | null
    is_active: boolean | null
  }

  export type PromotionsCountAggregateOutputType = {
    id: number
    name: number
    type: number
    value: number
    min_purchase: number
    is_active: number
    _all: number
  }


  export type PromotionsAvgAggregateInputType = {
    id?: true
    value?: true
    min_purchase?: true
  }

  export type PromotionsSumAggregateInputType = {
    id?: true
    value?: true
    min_purchase?: true
  }

  export type PromotionsMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    value?: true
    min_purchase?: true
    is_active?: true
  }

  export type PromotionsMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    value?: true
    min_purchase?: true
    is_active?: true
  }

  export type PromotionsCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    value?: true
    min_purchase?: true
    is_active?: true
    _all?: true
  }

  export type PromotionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which promotions to aggregate.
     */
    where?: promotionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promotions to fetch.
     */
    orderBy?: promotionsOrderByWithRelationInput | promotionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: promotionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned promotions
    **/
    _count?: true | PromotionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionsMaxAggregateInputType
  }

  export type GetPromotionsAggregateType<T extends PromotionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotions[P]>
      : GetScalarType<T[P], AggregatePromotions[P]>
  }




  export type promotionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: promotionsWhereInput
    orderBy?: promotionsOrderByWithAggregationInput | promotionsOrderByWithAggregationInput[]
    by: PromotionsScalarFieldEnum[] | PromotionsScalarFieldEnum
    having?: promotionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionsCountAggregateInputType | true
    _avg?: PromotionsAvgAggregateInputType
    _sum?: PromotionsSumAggregateInputType
    _min?: PromotionsMinAggregateInputType
    _max?: PromotionsMaxAggregateInputType
  }

  export type PromotionsGroupByOutputType = {
    id: number
    name: string
    type: $Enums.promotions_type
    value: Decimal
    min_purchase: Decimal | null
    is_active: boolean | null
    _count: PromotionsCountAggregateOutputType | null
    _avg: PromotionsAvgAggregateOutputType | null
    _sum: PromotionsSumAggregateOutputType | null
    _min: PromotionsMinAggregateOutputType | null
    _max: PromotionsMaxAggregateOutputType | null
  }

  type GetPromotionsGroupByPayload<T extends promotionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionsGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionsGroupByOutputType[P]>
        }
      >
    >


  export type promotionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    value?: boolean
    min_purchase?: boolean
    is_active?: boolean
    orders?: boolean | promotions$ordersArgs<ExtArgs>
    _count?: boolean | PromotionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotions"]>



  export type promotionsSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    value?: boolean
    min_purchase?: boolean
    is_active?: boolean
  }

  export type promotionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "value" | "min_purchase" | "is_active", ExtArgs["result"]["promotions"]>
  export type promotionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | promotions$ordersArgs<ExtArgs>
    _count?: boolean | PromotionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $promotionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "promotions"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: $Enums.promotions_type
      value: Prisma.Decimal
      min_purchase: Prisma.Decimal | null
      is_active: boolean | null
    }, ExtArgs["result"]["promotions"]>
    composites: {}
  }

  type promotionsGetPayload<S extends boolean | null | undefined | promotionsDefaultArgs> = $Result.GetResult<Prisma.$promotionsPayload, S>

  type promotionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<promotionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromotionsCountAggregateInputType | true
    }

  export interface promotionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['promotions'], meta: { name: 'promotions' } }
    /**
     * Find zero or one Promotions that matches the filter.
     * @param {promotionsFindUniqueArgs} args - Arguments to find a Promotions
     * @example
     * // Get one Promotions
     * const promotions = await prisma.promotions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends promotionsFindUniqueArgs>(args: SelectSubset<T, promotionsFindUniqueArgs<ExtArgs>>): Prisma__promotionsClient<$Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promotions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {promotionsFindUniqueOrThrowArgs} args - Arguments to find a Promotions
     * @example
     * // Get one Promotions
     * const promotions = await prisma.promotions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends promotionsFindUniqueOrThrowArgs>(args: SelectSubset<T, promotionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__promotionsClient<$Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promotionsFindFirstArgs} args - Arguments to find a Promotions
     * @example
     * // Get one Promotions
     * const promotions = await prisma.promotions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends promotionsFindFirstArgs>(args?: SelectSubset<T, promotionsFindFirstArgs<ExtArgs>>): Prisma__promotionsClient<$Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promotions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promotionsFindFirstOrThrowArgs} args - Arguments to find a Promotions
     * @example
     * // Get one Promotions
     * const promotions = await prisma.promotions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends promotionsFindFirstOrThrowArgs>(args?: SelectSubset<T, promotionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__promotionsClient<$Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promotionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotions
     * const promotions = await prisma.promotions.findMany()
     * 
     * // Get first 10 Promotions
     * const promotions = await prisma.promotions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotionsWithIdOnly = await prisma.promotions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends promotionsFindManyArgs>(args?: SelectSubset<T, promotionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promotions.
     * @param {promotionsCreateArgs} args - Arguments to create a Promotions.
     * @example
     * // Create one Promotions
     * const Promotions = await prisma.promotions.create({
     *   data: {
     *     // ... data to create a Promotions
     *   }
     * })
     * 
     */
    create<T extends promotionsCreateArgs>(args: SelectSubset<T, promotionsCreateArgs<ExtArgs>>): Prisma__promotionsClient<$Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promotions.
     * @param {promotionsCreateManyArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotions = await prisma.promotions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends promotionsCreateManyArgs>(args?: SelectSubset<T, promotionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Promotions.
     * @param {promotionsDeleteArgs} args - Arguments to delete one Promotions.
     * @example
     * // Delete one Promotions
     * const Promotions = await prisma.promotions.delete({
     *   where: {
     *     // ... filter to delete one Promotions
     *   }
     * })
     * 
     */
    delete<T extends promotionsDeleteArgs>(args: SelectSubset<T, promotionsDeleteArgs<ExtArgs>>): Prisma__promotionsClient<$Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promotions.
     * @param {promotionsUpdateArgs} args - Arguments to update one Promotions.
     * @example
     * // Update one Promotions
     * const promotions = await prisma.promotions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends promotionsUpdateArgs>(args: SelectSubset<T, promotionsUpdateArgs<ExtArgs>>): Prisma__promotionsClient<$Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promotions.
     * @param {promotionsDeleteManyArgs} args - Arguments to filter Promotions to delete.
     * @example
     * // Delete a few Promotions
     * const { count } = await prisma.promotions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends promotionsDeleteManyArgs>(args?: SelectSubset<T, promotionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promotionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotions
     * const promotions = await prisma.promotions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends promotionsUpdateManyArgs>(args: SelectSubset<T, promotionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promotions.
     * @param {promotionsUpsertArgs} args - Arguments to update or create a Promotions.
     * @example
     * // Update or create a Promotions
     * const promotions = await prisma.promotions.upsert({
     *   create: {
     *     // ... data to create a Promotions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotions we want to update
     *   }
     * })
     */
    upsert<T extends promotionsUpsertArgs>(args: SelectSubset<T, promotionsUpsertArgs<ExtArgs>>): Prisma__promotionsClient<$Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promotionsCountArgs} args - Arguments to filter Promotions to count.
     * @example
     * // Count the number of Promotions
     * const count = await prisma.promotions.count({
     *   where: {
     *     // ... the filter for the Promotions we want to count
     *   }
     * })
    **/
    count<T extends promotionsCountArgs>(
      args?: Subset<T, promotionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromotionsAggregateArgs>(args: Subset<T, PromotionsAggregateArgs>): Prisma.PrismaPromise<GetPromotionsAggregateType<T>>

    /**
     * Group by Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promotionsGroupByArgs} args - Group by arguments.
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
      T extends promotionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: promotionsGroupByArgs['orderBy'] }
        : { orderBy?: promotionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, promotionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the promotions model
   */
  readonly fields: promotionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for promotions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__promotionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends promotions$ordersArgs<ExtArgs> = {}>(args?: Subset<T, promotions$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the promotions model
   */
  interface promotionsFieldRefs {
    readonly id: FieldRef<"promotions", 'Int'>
    readonly name: FieldRef<"promotions", 'String'>
    readonly type: FieldRef<"promotions", 'promotions_type'>
    readonly value: FieldRef<"promotions", 'Decimal'>
    readonly min_purchase: FieldRef<"promotions", 'Decimal'>
    readonly is_active: FieldRef<"promotions", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * promotions findUnique
   */
  export type promotionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotions
     */
    select?: promotionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotions
     */
    omit?: promotionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: promotionsInclude<ExtArgs> | null
    /**
     * Filter, which promotions to fetch.
     */
    where: promotionsWhereUniqueInput
  }

  /**
   * promotions findUniqueOrThrow
   */
  export type promotionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotions
     */
    select?: promotionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotions
     */
    omit?: promotionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: promotionsInclude<ExtArgs> | null
    /**
     * Filter, which promotions to fetch.
     */
    where: promotionsWhereUniqueInput
  }

  /**
   * promotions findFirst
   */
  export type promotionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotions
     */
    select?: promotionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotions
     */
    omit?: promotionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: promotionsInclude<ExtArgs> | null
    /**
     * Filter, which promotions to fetch.
     */
    where?: promotionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promotions to fetch.
     */
    orderBy?: promotionsOrderByWithRelationInput | promotionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for promotions.
     */
    cursor?: promotionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of promotions.
     */
    distinct?: PromotionsScalarFieldEnum | PromotionsScalarFieldEnum[]
  }

  /**
   * promotions findFirstOrThrow
   */
  export type promotionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotions
     */
    select?: promotionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotions
     */
    omit?: promotionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: promotionsInclude<ExtArgs> | null
    /**
     * Filter, which promotions to fetch.
     */
    where?: promotionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promotions to fetch.
     */
    orderBy?: promotionsOrderByWithRelationInput | promotionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for promotions.
     */
    cursor?: promotionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of promotions.
     */
    distinct?: PromotionsScalarFieldEnum | PromotionsScalarFieldEnum[]
  }

  /**
   * promotions findMany
   */
  export type promotionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotions
     */
    select?: promotionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotions
     */
    omit?: promotionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: promotionsInclude<ExtArgs> | null
    /**
     * Filter, which promotions to fetch.
     */
    where?: promotionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promotions to fetch.
     */
    orderBy?: promotionsOrderByWithRelationInput | promotionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing promotions.
     */
    cursor?: promotionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of promotions.
     */
    distinct?: PromotionsScalarFieldEnum | PromotionsScalarFieldEnum[]
  }

  /**
   * promotions create
   */
  export type promotionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotions
     */
    select?: promotionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotions
     */
    omit?: promotionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: promotionsInclude<ExtArgs> | null
    /**
     * The data needed to create a promotions.
     */
    data: XOR<promotionsCreateInput, promotionsUncheckedCreateInput>
  }

  /**
   * promotions createMany
   */
  export type promotionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many promotions.
     */
    data: promotionsCreateManyInput | promotionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * promotions update
   */
  export type promotionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotions
     */
    select?: promotionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotions
     */
    omit?: promotionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: promotionsInclude<ExtArgs> | null
    /**
     * The data needed to update a promotions.
     */
    data: XOR<promotionsUpdateInput, promotionsUncheckedUpdateInput>
    /**
     * Choose, which promotions to update.
     */
    where: promotionsWhereUniqueInput
  }

  /**
   * promotions updateMany
   */
  export type promotionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update promotions.
     */
    data: XOR<promotionsUpdateManyMutationInput, promotionsUncheckedUpdateManyInput>
    /**
     * Filter which promotions to update
     */
    where?: promotionsWhereInput
    /**
     * Limit how many promotions to update.
     */
    limit?: number
  }

  /**
   * promotions upsert
   */
  export type promotionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotions
     */
    select?: promotionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotions
     */
    omit?: promotionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: promotionsInclude<ExtArgs> | null
    /**
     * The filter to search for the promotions to update in case it exists.
     */
    where: promotionsWhereUniqueInput
    /**
     * In case the promotions found by the `where` argument doesn't exist, create a new promotions with this data.
     */
    create: XOR<promotionsCreateInput, promotionsUncheckedCreateInput>
    /**
     * In case the promotions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<promotionsUpdateInput, promotionsUncheckedUpdateInput>
  }

  /**
   * promotions delete
   */
  export type promotionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotions
     */
    select?: promotionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotions
     */
    omit?: promotionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: promotionsInclude<ExtArgs> | null
    /**
     * Filter which promotions to delete.
     */
    where: promotionsWhereUniqueInput
  }

  /**
   * promotions deleteMany
   */
  export type promotionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which promotions to delete
     */
    where?: promotionsWhereInput
    /**
     * Limit how many promotions to delete.
     */
    limit?: number
  }

  /**
   * promotions.orders
   */
  export type promotions$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * promotions without action
   */
  export type promotionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promotions
     */
    select?: promotionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promotions
     */
    omit?: promotionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: promotionsInclude<ExtArgs> | null
  }


  /**
   * Model raw_materials
   */

  export type AggregateRaw_materials = {
    _count: Raw_materialsCountAggregateOutputType | null
    _avg: Raw_materialsAvgAggregateOutputType | null
    _sum: Raw_materialsSumAggregateOutputType | null
    _min: Raw_materialsMinAggregateOutputType | null
    _max: Raw_materialsMaxAggregateOutputType | null
  }

  export type Raw_materialsAvgAggregateOutputType = {
    id: number | null
    current_stock: Decimal | null
    min_stock_alert: Decimal | null
  }

  export type Raw_materialsSumAggregateOutputType = {
    id: number | null
    current_stock: Decimal | null
    min_stock_alert: Decimal | null
  }

  export type Raw_materialsMinAggregateOutputType = {
    id: number | null
    name: string | null
    unit: $Enums.raw_materials_unit | null
    current_stock: Decimal | null
    min_stock_alert: Decimal | null
  }

  export type Raw_materialsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    unit: $Enums.raw_materials_unit | null
    current_stock: Decimal | null
    min_stock_alert: Decimal | null
  }

  export type Raw_materialsCountAggregateOutputType = {
    id: number
    name: number
    unit: number
    current_stock: number
    min_stock_alert: number
    _all: number
  }


  export type Raw_materialsAvgAggregateInputType = {
    id?: true
    current_stock?: true
    min_stock_alert?: true
  }

  export type Raw_materialsSumAggregateInputType = {
    id?: true
    current_stock?: true
    min_stock_alert?: true
  }

  export type Raw_materialsMinAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    current_stock?: true
    min_stock_alert?: true
  }

  export type Raw_materialsMaxAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    current_stock?: true
    min_stock_alert?: true
  }

  export type Raw_materialsCountAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    current_stock?: true
    min_stock_alert?: true
    _all?: true
  }

  export type Raw_materialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which raw_materials to aggregate.
     */
    where?: raw_materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_materials to fetch.
     */
    orderBy?: raw_materialsOrderByWithRelationInput | raw_materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: raw_materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned raw_materials
    **/
    _count?: true | Raw_materialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Raw_materialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Raw_materialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Raw_materialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Raw_materialsMaxAggregateInputType
  }

  export type GetRaw_materialsAggregateType<T extends Raw_materialsAggregateArgs> = {
        [P in keyof T & keyof AggregateRaw_materials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaw_materials[P]>
      : GetScalarType<T[P], AggregateRaw_materials[P]>
  }




  export type raw_materialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: raw_materialsWhereInput
    orderBy?: raw_materialsOrderByWithAggregationInput | raw_materialsOrderByWithAggregationInput[]
    by: Raw_materialsScalarFieldEnum[] | Raw_materialsScalarFieldEnum
    having?: raw_materialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Raw_materialsCountAggregateInputType | true
    _avg?: Raw_materialsAvgAggregateInputType
    _sum?: Raw_materialsSumAggregateInputType
    _min?: Raw_materialsMinAggregateInputType
    _max?: Raw_materialsMaxAggregateInputType
  }

  export type Raw_materialsGroupByOutputType = {
    id: number
    name: string
    unit: $Enums.raw_materials_unit
    current_stock: Decimal
    min_stock_alert: Decimal
    _count: Raw_materialsCountAggregateOutputType | null
    _avg: Raw_materialsAvgAggregateOutputType | null
    _sum: Raw_materialsSumAggregateOutputType | null
    _min: Raw_materialsMinAggregateOutputType | null
    _max: Raw_materialsMaxAggregateOutputType | null
  }

  type GetRaw_materialsGroupByPayload<T extends raw_materialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Raw_materialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Raw_materialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Raw_materialsGroupByOutputType[P]>
            : GetScalarType<T[P], Raw_materialsGroupByOutputType[P]>
        }
      >
    >


  export type raw_materialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    current_stock?: boolean
    min_stock_alert?: boolean
    recipe_bom?: boolean | raw_materials$recipe_bomArgs<ExtArgs>
    _count?: boolean | Raw_materialsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raw_materials"]>



  export type raw_materialsSelectScalar = {
    id?: boolean
    name?: boolean
    unit?: boolean
    current_stock?: boolean
    min_stock_alert?: boolean
  }

  export type raw_materialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "unit" | "current_stock" | "min_stock_alert", ExtArgs["result"]["raw_materials"]>
  export type raw_materialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe_bom?: boolean | raw_materials$recipe_bomArgs<ExtArgs>
    _count?: boolean | Raw_materialsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $raw_materialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "raw_materials"
    objects: {
      recipe_bom: Prisma.$recipe_bomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      unit: $Enums.raw_materials_unit
      current_stock: Prisma.Decimal
      min_stock_alert: Prisma.Decimal
    }, ExtArgs["result"]["raw_materials"]>
    composites: {}
  }

  type raw_materialsGetPayload<S extends boolean | null | undefined | raw_materialsDefaultArgs> = $Result.GetResult<Prisma.$raw_materialsPayload, S>

  type raw_materialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<raw_materialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Raw_materialsCountAggregateInputType | true
    }

  export interface raw_materialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['raw_materials'], meta: { name: 'raw_materials' } }
    /**
     * Find zero or one Raw_materials that matches the filter.
     * @param {raw_materialsFindUniqueArgs} args - Arguments to find a Raw_materials
     * @example
     * // Get one Raw_materials
     * const raw_materials = await prisma.raw_materials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends raw_materialsFindUniqueArgs>(args: SelectSubset<T, raw_materialsFindUniqueArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Raw_materials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {raw_materialsFindUniqueOrThrowArgs} args - Arguments to find a Raw_materials
     * @example
     * // Get one Raw_materials
     * const raw_materials = await prisma.raw_materials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends raw_materialsFindUniqueOrThrowArgs>(args: SelectSubset<T, raw_materialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raw_materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_materialsFindFirstArgs} args - Arguments to find a Raw_materials
     * @example
     * // Get one Raw_materials
     * const raw_materials = await prisma.raw_materials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends raw_materialsFindFirstArgs>(args?: SelectSubset<T, raw_materialsFindFirstArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raw_materials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_materialsFindFirstOrThrowArgs} args - Arguments to find a Raw_materials
     * @example
     * // Get one Raw_materials
     * const raw_materials = await prisma.raw_materials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends raw_materialsFindFirstOrThrowArgs>(args?: SelectSubset<T, raw_materialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Raw_materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_materialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Raw_materials
     * const raw_materials = await prisma.raw_materials.findMany()
     * 
     * // Get first 10 Raw_materials
     * const raw_materials = await prisma.raw_materials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raw_materialsWithIdOnly = await prisma.raw_materials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends raw_materialsFindManyArgs>(args?: SelectSubset<T, raw_materialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Raw_materials.
     * @param {raw_materialsCreateArgs} args - Arguments to create a Raw_materials.
     * @example
     * // Create one Raw_materials
     * const Raw_materials = await prisma.raw_materials.create({
     *   data: {
     *     // ... data to create a Raw_materials
     *   }
     * })
     * 
     */
    create<T extends raw_materialsCreateArgs>(args: SelectSubset<T, raw_materialsCreateArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Raw_materials.
     * @param {raw_materialsCreateManyArgs} args - Arguments to create many Raw_materials.
     * @example
     * // Create many Raw_materials
     * const raw_materials = await prisma.raw_materials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends raw_materialsCreateManyArgs>(args?: SelectSubset<T, raw_materialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Raw_materials.
     * @param {raw_materialsDeleteArgs} args - Arguments to delete one Raw_materials.
     * @example
     * // Delete one Raw_materials
     * const Raw_materials = await prisma.raw_materials.delete({
     *   where: {
     *     // ... filter to delete one Raw_materials
     *   }
     * })
     * 
     */
    delete<T extends raw_materialsDeleteArgs>(args: SelectSubset<T, raw_materialsDeleteArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Raw_materials.
     * @param {raw_materialsUpdateArgs} args - Arguments to update one Raw_materials.
     * @example
     * // Update one Raw_materials
     * const raw_materials = await prisma.raw_materials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends raw_materialsUpdateArgs>(args: SelectSubset<T, raw_materialsUpdateArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Raw_materials.
     * @param {raw_materialsDeleteManyArgs} args - Arguments to filter Raw_materials to delete.
     * @example
     * // Delete a few Raw_materials
     * const { count } = await prisma.raw_materials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends raw_materialsDeleteManyArgs>(args?: SelectSubset<T, raw_materialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raw_materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_materialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Raw_materials
     * const raw_materials = await prisma.raw_materials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends raw_materialsUpdateManyArgs>(args: SelectSubset<T, raw_materialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Raw_materials.
     * @param {raw_materialsUpsertArgs} args - Arguments to update or create a Raw_materials.
     * @example
     * // Update or create a Raw_materials
     * const raw_materials = await prisma.raw_materials.upsert({
     *   create: {
     *     // ... data to create a Raw_materials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Raw_materials we want to update
     *   }
     * })
     */
    upsert<T extends raw_materialsUpsertArgs>(args: SelectSubset<T, raw_materialsUpsertArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Raw_materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_materialsCountArgs} args - Arguments to filter Raw_materials to count.
     * @example
     * // Count the number of Raw_materials
     * const count = await prisma.raw_materials.count({
     *   where: {
     *     // ... the filter for the Raw_materials we want to count
     *   }
     * })
    **/
    count<T extends raw_materialsCountArgs>(
      args?: Subset<T, raw_materialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Raw_materialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Raw_materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Raw_materialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Raw_materialsAggregateArgs>(args: Subset<T, Raw_materialsAggregateArgs>): Prisma.PrismaPromise<GetRaw_materialsAggregateType<T>>

    /**
     * Group by Raw_materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_materialsGroupByArgs} args - Group by arguments.
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
      T extends raw_materialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: raw_materialsGroupByArgs['orderBy'] }
        : { orderBy?: raw_materialsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, raw_materialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaw_materialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the raw_materials model
   */
  readonly fields: raw_materialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for raw_materials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__raw_materialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe_bom<T extends raw_materials$recipe_bomArgs<ExtArgs> = {}>(args?: Subset<T, raw_materials$recipe_bomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipe_bomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the raw_materials model
   */
  interface raw_materialsFieldRefs {
    readonly id: FieldRef<"raw_materials", 'Int'>
    readonly name: FieldRef<"raw_materials", 'String'>
    readonly unit: FieldRef<"raw_materials", 'raw_materials_unit'>
    readonly current_stock: FieldRef<"raw_materials", 'Decimal'>
    readonly min_stock_alert: FieldRef<"raw_materials", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * raw_materials findUnique
   */
  export type raw_materialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    /**
     * Filter, which raw_materials to fetch.
     */
    where: raw_materialsWhereUniqueInput
  }

  /**
   * raw_materials findUniqueOrThrow
   */
  export type raw_materialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    /**
     * Filter, which raw_materials to fetch.
     */
    where: raw_materialsWhereUniqueInput
  }

  /**
   * raw_materials findFirst
   */
  export type raw_materialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    /**
     * Filter, which raw_materials to fetch.
     */
    where?: raw_materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_materials to fetch.
     */
    orderBy?: raw_materialsOrderByWithRelationInput | raw_materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for raw_materials.
     */
    cursor?: raw_materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_materials.
     */
    distinct?: Raw_materialsScalarFieldEnum | Raw_materialsScalarFieldEnum[]
  }

  /**
   * raw_materials findFirstOrThrow
   */
  export type raw_materialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    /**
     * Filter, which raw_materials to fetch.
     */
    where?: raw_materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_materials to fetch.
     */
    orderBy?: raw_materialsOrderByWithRelationInput | raw_materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for raw_materials.
     */
    cursor?: raw_materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_materials.
     */
    distinct?: Raw_materialsScalarFieldEnum | Raw_materialsScalarFieldEnum[]
  }

  /**
   * raw_materials findMany
   */
  export type raw_materialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    /**
     * Filter, which raw_materials to fetch.
     */
    where?: raw_materialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_materials to fetch.
     */
    orderBy?: raw_materialsOrderByWithRelationInput | raw_materialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing raw_materials.
     */
    cursor?: raw_materialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_materials.
     */
    distinct?: Raw_materialsScalarFieldEnum | Raw_materialsScalarFieldEnum[]
  }

  /**
   * raw_materials create
   */
  export type raw_materialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    /**
     * The data needed to create a raw_materials.
     */
    data: XOR<raw_materialsCreateInput, raw_materialsUncheckedCreateInput>
  }

  /**
   * raw_materials createMany
   */
  export type raw_materialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many raw_materials.
     */
    data: raw_materialsCreateManyInput | raw_materialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * raw_materials update
   */
  export type raw_materialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    /**
     * The data needed to update a raw_materials.
     */
    data: XOR<raw_materialsUpdateInput, raw_materialsUncheckedUpdateInput>
    /**
     * Choose, which raw_materials to update.
     */
    where: raw_materialsWhereUniqueInput
  }

  /**
   * raw_materials updateMany
   */
  export type raw_materialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update raw_materials.
     */
    data: XOR<raw_materialsUpdateManyMutationInput, raw_materialsUncheckedUpdateManyInput>
    /**
     * Filter which raw_materials to update
     */
    where?: raw_materialsWhereInput
    /**
     * Limit how many raw_materials to update.
     */
    limit?: number
  }

  /**
   * raw_materials upsert
   */
  export type raw_materialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    /**
     * The filter to search for the raw_materials to update in case it exists.
     */
    where: raw_materialsWhereUniqueInput
    /**
     * In case the raw_materials found by the `where` argument doesn't exist, create a new raw_materials with this data.
     */
    create: XOR<raw_materialsCreateInput, raw_materialsUncheckedCreateInput>
    /**
     * In case the raw_materials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<raw_materialsUpdateInput, raw_materialsUncheckedUpdateInput>
  }

  /**
   * raw_materials delete
   */
  export type raw_materialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
    /**
     * Filter which raw_materials to delete.
     */
    where: raw_materialsWhereUniqueInput
  }

  /**
   * raw_materials deleteMany
   */
  export type raw_materialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which raw_materials to delete
     */
    where?: raw_materialsWhereInput
    /**
     * Limit how many raw_materials to delete.
     */
    limit?: number
  }

  /**
   * raw_materials.recipe_bom
   */
  export type raw_materials$recipe_bomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_bom
     */
    select?: recipe_bomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_bom
     */
    omit?: recipe_bomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_bomInclude<ExtArgs> | null
    where?: recipe_bomWhereInput
    orderBy?: recipe_bomOrderByWithRelationInput | recipe_bomOrderByWithRelationInput[]
    cursor?: recipe_bomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recipe_bomScalarFieldEnum | Recipe_bomScalarFieldEnum[]
  }

  /**
   * raw_materials without action
   */
  export type raw_materialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_materials
     */
    select?: raw_materialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_materials
     */
    omit?: raw_materialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: raw_materialsInclude<ExtArgs> | null
  }


  /**
   * Model recipe_bom
   */

  export type AggregateRecipe_bom = {
    _count: Recipe_bomCountAggregateOutputType | null
    _avg: Recipe_bomAvgAggregateOutputType | null
    _sum: Recipe_bomSumAggregateOutputType | null
    _min: Recipe_bomMinAggregateOutputType | null
    _max: Recipe_bomMaxAggregateOutputType | null
  }

  export type Recipe_bomAvgAggregateOutputType = {
    id: number | null
    menu_item_id: number | null
    raw_material_id: number | null
    quantity_required: Decimal | null
  }

  export type Recipe_bomSumAggregateOutputType = {
    id: number | null
    menu_item_id: number | null
    raw_material_id: number | null
    quantity_required: Decimal | null
  }

  export type Recipe_bomMinAggregateOutputType = {
    id: number | null
    menu_item_id: number | null
    raw_material_id: number | null
    quantity_required: Decimal | null
  }

  export type Recipe_bomMaxAggregateOutputType = {
    id: number | null
    menu_item_id: number | null
    raw_material_id: number | null
    quantity_required: Decimal | null
  }

  export type Recipe_bomCountAggregateOutputType = {
    id: number
    menu_item_id: number
    raw_material_id: number
    quantity_required: number
    _all: number
  }


  export type Recipe_bomAvgAggregateInputType = {
    id?: true
    menu_item_id?: true
    raw_material_id?: true
    quantity_required?: true
  }

  export type Recipe_bomSumAggregateInputType = {
    id?: true
    menu_item_id?: true
    raw_material_id?: true
    quantity_required?: true
  }

  export type Recipe_bomMinAggregateInputType = {
    id?: true
    menu_item_id?: true
    raw_material_id?: true
    quantity_required?: true
  }

  export type Recipe_bomMaxAggregateInputType = {
    id?: true
    menu_item_id?: true
    raw_material_id?: true
    quantity_required?: true
  }

  export type Recipe_bomCountAggregateInputType = {
    id?: true
    menu_item_id?: true
    raw_material_id?: true
    quantity_required?: true
    _all?: true
  }

  export type Recipe_bomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipe_bom to aggregate.
     */
    where?: recipe_bomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipe_boms to fetch.
     */
    orderBy?: recipe_bomOrderByWithRelationInput | recipe_bomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recipe_bomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipe_boms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipe_boms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recipe_boms
    **/
    _count?: true | Recipe_bomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Recipe_bomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Recipe_bomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recipe_bomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recipe_bomMaxAggregateInputType
  }

  export type GetRecipe_bomAggregateType<T extends Recipe_bomAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe_bom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe_bom[P]>
      : GetScalarType<T[P], AggregateRecipe_bom[P]>
  }




  export type recipe_bomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipe_bomWhereInput
    orderBy?: recipe_bomOrderByWithAggregationInput | recipe_bomOrderByWithAggregationInput[]
    by: Recipe_bomScalarFieldEnum[] | Recipe_bomScalarFieldEnum
    having?: recipe_bomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recipe_bomCountAggregateInputType | true
    _avg?: Recipe_bomAvgAggregateInputType
    _sum?: Recipe_bomSumAggregateInputType
    _min?: Recipe_bomMinAggregateInputType
    _max?: Recipe_bomMaxAggregateInputType
  }

  export type Recipe_bomGroupByOutputType = {
    id: number
    menu_item_id: number
    raw_material_id: number
    quantity_required: Decimal
    _count: Recipe_bomCountAggregateOutputType | null
    _avg: Recipe_bomAvgAggregateOutputType | null
    _sum: Recipe_bomSumAggregateOutputType | null
    _min: Recipe_bomMinAggregateOutputType | null
    _max: Recipe_bomMaxAggregateOutputType | null
  }

  type GetRecipe_bomGroupByPayload<T extends recipe_bomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recipe_bomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recipe_bomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recipe_bomGroupByOutputType[P]>
            : GetScalarType<T[P], Recipe_bomGroupByOutputType[P]>
        }
      >
    >


  export type recipe_bomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menu_item_id?: boolean
    raw_material_id?: boolean
    quantity_required?: boolean
    menu_items?: boolean | menu_itemsDefaultArgs<ExtArgs>
    raw_materials?: boolean | raw_materialsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe_bom"]>



  export type recipe_bomSelectScalar = {
    id?: boolean
    menu_item_id?: boolean
    raw_material_id?: boolean
    quantity_required?: boolean
  }

  export type recipe_bomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "menu_item_id" | "raw_material_id" | "quantity_required", ExtArgs["result"]["recipe_bom"]>
  export type recipe_bomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_items?: boolean | menu_itemsDefaultArgs<ExtArgs>
    raw_materials?: boolean | raw_materialsDefaultArgs<ExtArgs>
  }

  export type $recipe_bomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recipe_bom"
    objects: {
      menu_items: Prisma.$menu_itemsPayload<ExtArgs>
      raw_materials: Prisma.$raw_materialsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      menu_item_id: number
      raw_material_id: number
      quantity_required: Prisma.Decimal
    }, ExtArgs["result"]["recipe_bom"]>
    composites: {}
  }

  type recipe_bomGetPayload<S extends boolean | null | undefined | recipe_bomDefaultArgs> = $Result.GetResult<Prisma.$recipe_bomPayload, S>

  type recipe_bomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recipe_bomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Recipe_bomCountAggregateInputType | true
    }

  export interface recipe_bomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recipe_bom'], meta: { name: 'recipe_bom' } }
    /**
     * Find zero or one Recipe_bom that matches the filter.
     * @param {recipe_bomFindUniqueArgs} args - Arguments to find a Recipe_bom
     * @example
     * // Get one Recipe_bom
     * const recipe_bom = await prisma.recipe_bom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recipe_bomFindUniqueArgs>(args: SelectSubset<T, recipe_bomFindUniqueArgs<ExtArgs>>): Prisma__recipe_bomClient<$Result.GetResult<Prisma.$recipe_bomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe_bom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recipe_bomFindUniqueOrThrowArgs} args - Arguments to find a Recipe_bom
     * @example
     * // Get one Recipe_bom
     * const recipe_bom = await prisma.recipe_bom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recipe_bomFindUniqueOrThrowArgs>(args: SelectSubset<T, recipe_bomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recipe_bomClient<$Result.GetResult<Prisma.$recipe_bomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe_bom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipe_bomFindFirstArgs} args - Arguments to find a Recipe_bom
     * @example
     * // Get one Recipe_bom
     * const recipe_bom = await prisma.recipe_bom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recipe_bomFindFirstArgs>(args?: SelectSubset<T, recipe_bomFindFirstArgs<ExtArgs>>): Prisma__recipe_bomClient<$Result.GetResult<Prisma.$recipe_bomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe_bom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipe_bomFindFirstOrThrowArgs} args - Arguments to find a Recipe_bom
     * @example
     * // Get one Recipe_bom
     * const recipe_bom = await prisma.recipe_bom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recipe_bomFindFirstOrThrowArgs>(args?: SelectSubset<T, recipe_bomFindFirstOrThrowArgs<ExtArgs>>): Prisma__recipe_bomClient<$Result.GetResult<Prisma.$recipe_bomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipe_boms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipe_bomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipe_boms
     * const recipe_boms = await prisma.recipe_bom.findMany()
     * 
     * // Get first 10 Recipe_boms
     * const recipe_boms = await prisma.recipe_bom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipe_bomWithIdOnly = await prisma.recipe_bom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recipe_bomFindManyArgs>(args?: SelectSubset<T, recipe_bomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipe_bomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe_bom.
     * @param {recipe_bomCreateArgs} args - Arguments to create a Recipe_bom.
     * @example
     * // Create one Recipe_bom
     * const Recipe_bom = await prisma.recipe_bom.create({
     *   data: {
     *     // ... data to create a Recipe_bom
     *   }
     * })
     * 
     */
    create<T extends recipe_bomCreateArgs>(args: SelectSubset<T, recipe_bomCreateArgs<ExtArgs>>): Prisma__recipe_bomClient<$Result.GetResult<Prisma.$recipe_bomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipe_boms.
     * @param {recipe_bomCreateManyArgs} args - Arguments to create many Recipe_boms.
     * @example
     * // Create many Recipe_boms
     * const recipe_bom = await prisma.recipe_bom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recipe_bomCreateManyArgs>(args?: SelectSubset<T, recipe_bomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recipe_bom.
     * @param {recipe_bomDeleteArgs} args - Arguments to delete one Recipe_bom.
     * @example
     * // Delete one Recipe_bom
     * const Recipe_bom = await prisma.recipe_bom.delete({
     *   where: {
     *     // ... filter to delete one Recipe_bom
     *   }
     * })
     * 
     */
    delete<T extends recipe_bomDeleteArgs>(args: SelectSubset<T, recipe_bomDeleteArgs<ExtArgs>>): Prisma__recipe_bomClient<$Result.GetResult<Prisma.$recipe_bomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe_bom.
     * @param {recipe_bomUpdateArgs} args - Arguments to update one Recipe_bom.
     * @example
     * // Update one Recipe_bom
     * const recipe_bom = await prisma.recipe_bom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recipe_bomUpdateArgs>(args: SelectSubset<T, recipe_bomUpdateArgs<ExtArgs>>): Prisma__recipe_bomClient<$Result.GetResult<Prisma.$recipe_bomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipe_boms.
     * @param {recipe_bomDeleteManyArgs} args - Arguments to filter Recipe_boms to delete.
     * @example
     * // Delete a few Recipe_boms
     * const { count } = await prisma.recipe_bom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recipe_bomDeleteManyArgs>(args?: SelectSubset<T, recipe_bomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipe_boms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipe_bomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipe_boms
     * const recipe_bom = await prisma.recipe_bom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recipe_bomUpdateManyArgs>(args: SelectSubset<T, recipe_bomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recipe_bom.
     * @param {recipe_bomUpsertArgs} args - Arguments to update or create a Recipe_bom.
     * @example
     * // Update or create a Recipe_bom
     * const recipe_bom = await prisma.recipe_bom.upsert({
     *   create: {
     *     // ... data to create a Recipe_bom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe_bom we want to update
     *   }
     * })
     */
    upsert<T extends recipe_bomUpsertArgs>(args: SelectSubset<T, recipe_bomUpsertArgs<ExtArgs>>): Prisma__recipe_bomClient<$Result.GetResult<Prisma.$recipe_bomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipe_boms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipe_bomCountArgs} args - Arguments to filter Recipe_boms to count.
     * @example
     * // Count the number of Recipe_boms
     * const count = await prisma.recipe_bom.count({
     *   where: {
     *     // ... the filter for the Recipe_boms we want to count
     *   }
     * })
    **/
    count<T extends recipe_bomCountArgs>(
      args?: Subset<T, recipe_bomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recipe_bomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe_bom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_bomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Recipe_bomAggregateArgs>(args: Subset<T, Recipe_bomAggregateArgs>): Prisma.PrismaPromise<GetRecipe_bomAggregateType<T>>

    /**
     * Group by Recipe_bom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipe_bomGroupByArgs} args - Group by arguments.
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
      T extends recipe_bomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recipe_bomGroupByArgs['orderBy'] }
        : { orderBy?: recipe_bomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, recipe_bomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipe_bomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recipe_bom model
   */
  readonly fields: recipe_bomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recipe_bom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recipe_bomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu_items<T extends menu_itemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menu_itemsDefaultArgs<ExtArgs>>): Prisma__menu_itemsClient<$Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    raw_materials<T extends raw_materialsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, raw_materialsDefaultArgs<ExtArgs>>): Prisma__raw_materialsClient<$Result.GetResult<Prisma.$raw_materialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the recipe_bom model
   */
  interface recipe_bomFieldRefs {
    readonly id: FieldRef<"recipe_bom", 'Int'>
    readonly menu_item_id: FieldRef<"recipe_bom", 'Int'>
    readonly raw_material_id: FieldRef<"recipe_bom", 'Int'>
    readonly quantity_required: FieldRef<"recipe_bom", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * recipe_bom findUnique
   */
  export type recipe_bomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_bom
     */
    select?: recipe_bomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_bom
     */
    omit?: recipe_bomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_bomInclude<ExtArgs> | null
    /**
     * Filter, which recipe_bom to fetch.
     */
    where: recipe_bomWhereUniqueInput
  }

  /**
   * recipe_bom findUniqueOrThrow
   */
  export type recipe_bomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_bom
     */
    select?: recipe_bomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_bom
     */
    omit?: recipe_bomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_bomInclude<ExtArgs> | null
    /**
     * Filter, which recipe_bom to fetch.
     */
    where: recipe_bomWhereUniqueInput
  }

  /**
   * recipe_bom findFirst
   */
  export type recipe_bomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_bom
     */
    select?: recipe_bomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_bom
     */
    omit?: recipe_bomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_bomInclude<ExtArgs> | null
    /**
     * Filter, which recipe_bom to fetch.
     */
    where?: recipe_bomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipe_boms to fetch.
     */
    orderBy?: recipe_bomOrderByWithRelationInput | recipe_bomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipe_boms.
     */
    cursor?: recipe_bomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipe_boms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipe_boms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipe_boms.
     */
    distinct?: Recipe_bomScalarFieldEnum | Recipe_bomScalarFieldEnum[]
  }

  /**
   * recipe_bom findFirstOrThrow
   */
  export type recipe_bomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_bom
     */
    select?: recipe_bomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_bom
     */
    omit?: recipe_bomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_bomInclude<ExtArgs> | null
    /**
     * Filter, which recipe_bom to fetch.
     */
    where?: recipe_bomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipe_boms to fetch.
     */
    orderBy?: recipe_bomOrderByWithRelationInput | recipe_bomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipe_boms.
     */
    cursor?: recipe_bomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipe_boms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipe_boms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipe_boms.
     */
    distinct?: Recipe_bomScalarFieldEnum | Recipe_bomScalarFieldEnum[]
  }

  /**
   * recipe_bom findMany
   */
  export type recipe_bomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_bom
     */
    select?: recipe_bomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_bom
     */
    omit?: recipe_bomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_bomInclude<ExtArgs> | null
    /**
     * Filter, which recipe_boms to fetch.
     */
    where?: recipe_bomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipe_boms to fetch.
     */
    orderBy?: recipe_bomOrderByWithRelationInput | recipe_bomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recipe_boms.
     */
    cursor?: recipe_bomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipe_boms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipe_boms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipe_boms.
     */
    distinct?: Recipe_bomScalarFieldEnum | Recipe_bomScalarFieldEnum[]
  }

  /**
   * recipe_bom create
   */
  export type recipe_bomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_bom
     */
    select?: recipe_bomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_bom
     */
    omit?: recipe_bomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_bomInclude<ExtArgs> | null
    /**
     * The data needed to create a recipe_bom.
     */
    data: XOR<recipe_bomCreateInput, recipe_bomUncheckedCreateInput>
  }

  /**
   * recipe_bom createMany
   */
  export type recipe_bomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recipe_boms.
     */
    data: recipe_bomCreateManyInput | recipe_bomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recipe_bom update
   */
  export type recipe_bomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_bom
     */
    select?: recipe_bomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_bom
     */
    omit?: recipe_bomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_bomInclude<ExtArgs> | null
    /**
     * The data needed to update a recipe_bom.
     */
    data: XOR<recipe_bomUpdateInput, recipe_bomUncheckedUpdateInput>
    /**
     * Choose, which recipe_bom to update.
     */
    where: recipe_bomWhereUniqueInput
  }

  /**
   * recipe_bom updateMany
   */
  export type recipe_bomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recipe_boms.
     */
    data: XOR<recipe_bomUpdateManyMutationInput, recipe_bomUncheckedUpdateManyInput>
    /**
     * Filter which recipe_boms to update
     */
    where?: recipe_bomWhereInput
    /**
     * Limit how many recipe_boms to update.
     */
    limit?: number
  }

  /**
   * recipe_bom upsert
   */
  export type recipe_bomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_bom
     */
    select?: recipe_bomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_bom
     */
    omit?: recipe_bomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_bomInclude<ExtArgs> | null
    /**
     * The filter to search for the recipe_bom to update in case it exists.
     */
    where: recipe_bomWhereUniqueInput
    /**
     * In case the recipe_bom found by the `where` argument doesn't exist, create a new recipe_bom with this data.
     */
    create: XOR<recipe_bomCreateInput, recipe_bomUncheckedCreateInput>
    /**
     * In case the recipe_bom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recipe_bomUpdateInput, recipe_bomUncheckedUpdateInput>
  }

  /**
   * recipe_bom delete
   */
  export type recipe_bomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_bom
     */
    select?: recipe_bomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_bom
     */
    omit?: recipe_bomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_bomInclude<ExtArgs> | null
    /**
     * Filter which recipe_bom to delete.
     */
    where: recipe_bomWhereUniqueInput
  }

  /**
   * recipe_bom deleteMany
   */
  export type recipe_bomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipe_boms to delete
     */
    where?: recipe_bomWhereInput
    /**
     * Limit how many recipe_boms to delete.
     */
    limit?: number
  }

  /**
   * recipe_bom without action
   */
  export type recipe_bomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipe_bom
     */
    select?: recipe_bomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recipe_bom
     */
    omit?: recipe_bomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recipe_bomInclude<ExtArgs> | null
  }


  /**
   * Model reservations
   */

  export type AggregateReservations = {
    _count: ReservationsCountAggregateOutputType | null
    _avg: ReservationsAvgAggregateOutputType | null
    _sum: ReservationsSumAggregateOutputType | null
    _min: ReservationsMinAggregateOutputType | null
    _max: ReservationsMaxAggregateOutputType | null
  }

  export type ReservationsAvgAggregateOutputType = {
    id: number | null
    pax_count: number | null
    buffer_pax: number | null
  }

  export type ReservationsSumAggregateOutputType = {
    id: number | null
    pax_count: number | null
    buffer_pax: number | null
  }

  export type ReservationsMinAggregateOutputType = {
    id: number | null
    customer_name: string | null
    customer_phone: string | null
    reservation_date: Date | null
    pax_count: number | null
    buffer_pax: number | null
    budget_type: $Enums.reservations_budget_type | null
    status: $Enums.reservations_status | null
    created_at: Date | null
  }

  export type ReservationsMaxAggregateOutputType = {
    id: number | null
    customer_name: string | null
    customer_phone: string | null
    reservation_date: Date | null
    pax_count: number | null
    buffer_pax: number | null
    budget_type: $Enums.reservations_budget_type | null
    status: $Enums.reservations_status | null
    created_at: Date | null
  }

  export type ReservationsCountAggregateOutputType = {
    id: number
    customer_name: number
    customer_phone: number
    reservation_date: number
    pax_count: number
    buffer_pax: number
    budget_type: number
    status: number
    created_at: number
    _all: number
  }


  export type ReservationsAvgAggregateInputType = {
    id?: true
    pax_count?: true
    buffer_pax?: true
  }

  export type ReservationsSumAggregateInputType = {
    id?: true
    pax_count?: true
    buffer_pax?: true
  }

  export type ReservationsMinAggregateInputType = {
    id?: true
    customer_name?: true
    customer_phone?: true
    reservation_date?: true
    pax_count?: true
    buffer_pax?: true
    budget_type?: true
    status?: true
    created_at?: true
  }

  export type ReservationsMaxAggregateInputType = {
    id?: true
    customer_name?: true
    customer_phone?: true
    reservation_date?: true
    pax_count?: true
    buffer_pax?: true
    budget_type?: true
    status?: true
    created_at?: true
  }

  export type ReservationsCountAggregateInputType = {
    id?: true
    customer_name?: true
    customer_phone?: true
    reservation_date?: true
    pax_count?: true
    buffer_pax?: true
    budget_type?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type ReservationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservations to aggregate.
     */
    where?: reservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationsOrderByWithRelationInput | reservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reservations
    **/
    _count?: true | ReservationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationsMaxAggregateInputType
  }

  export type GetReservationsAggregateType<T extends ReservationsAggregateArgs> = {
        [P in keyof T & keyof AggregateReservations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservations[P]>
      : GetScalarType<T[P], AggregateReservations[P]>
  }




  export type reservationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservationsWhereInput
    orderBy?: reservationsOrderByWithAggregationInput | reservationsOrderByWithAggregationInput[]
    by: ReservationsScalarFieldEnum[] | ReservationsScalarFieldEnum
    having?: reservationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationsCountAggregateInputType | true
    _avg?: ReservationsAvgAggregateInputType
    _sum?: ReservationsSumAggregateInputType
    _min?: ReservationsMinAggregateInputType
    _max?: ReservationsMaxAggregateInputType
  }

  export type ReservationsGroupByOutputType = {
    id: number
    customer_name: string
    customer_phone: string
    reservation_date: Date
    pax_count: number
    buffer_pax: number | null
    budget_type: $Enums.reservations_budget_type | null
    status: $Enums.reservations_status | null
    created_at: Date
    _count: ReservationsCountAggregateOutputType | null
    _avg: ReservationsAvgAggregateOutputType | null
    _sum: ReservationsSumAggregateOutputType | null
    _min: ReservationsMinAggregateOutputType | null
    _max: ReservationsMaxAggregateOutputType | null
  }

  type GetReservationsGroupByPayload<T extends reservationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationsGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationsGroupByOutputType[P]>
        }
      >
    >


  export type reservationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_name?: boolean
    customer_phone?: boolean
    reservation_date?: boolean
    pax_count?: boolean
    buffer_pax?: boolean
    budget_type?: boolean
    status?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["reservations"]>



  export type reservationsSelectScalar = {
    id?: boolean
    customer_name?: boolean
    customer_phone?: boolean
    reservation_date?: boolean
    pax_count?: boolean
    buffer_pax?: boolean
    budget_type?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type reservationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customer_name" | "customer_phone" | "reservation_date" | "pax_count" | "buffer_pax" | "budget_type" | "status" | "created_at", ExtArgs["result"]["reservations"]>

  export type $reservationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reservations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customer_name: string
      customer_phone: string
      reservation_date: Date
      pax_count: number
      buffer_pax: number | null
      budget_type: $Enums.reservations_budget_type | null
      status: $Enums.reservations_status | null
      created_at: Date
    }, ExtArgs["result"]["reservations"]>
    composites: {}
  }

  type reservationsGetPayload<S extends boolean | null | undefined | reservationsDefaultArgs> = $Result.GetResult<Prisma.$reservationsPayload, S>

  type reservationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reservationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationsCountAggregateInputType | true
    }

  export interface reservationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reservations'], meta: { name: 'reservations' } }
    /**
     * Find zero or one Reservations that matches the filter.
     * @param {reservationsFindUniqueArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reservationsFindUniqueArgs>(args: SelectSubset<T, reservationsFindUniqueArgs<ExtArgs>>): Prisma__reservationsClient<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reservationsFindUniqueOrThrowArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reservationsFindUniqueOrThrowArgs>(args: SelectSubset<T, reservationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reservationsClient<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationsFindFirstArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reservationsFindFirstArgs>(args?: SelectSubset<T, reservationsFindFirstArgs<ExtArgs>>): Prisma__reservationsClient<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationsFindFirstOrThrowArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reservationsFindFirstOrThrowArgs>(args?: SelectSubset<T, reservationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reservationsClient<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservations.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationsWithIdOnly = await prisma.reservations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reservationsFindManyArgs>(args?: SelectSubset<T, reservationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservations.
     * @param {reservationsCreateArgs} args - Arguments to create a Reservations.
     * @example
     * // Create one Reservations
     * const Reservations = await prisma.reservations.create({
     *   data: {
     *     // ... data to create a Reservations
     *   }
     * })
     * 
     */
    create<T extends reservationsCreateArgs>(args: SelectSubset<T, reservationsCreateArgs<ExtArgs>>): Prisma__reservationsClient<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {reservationsCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservations = await prisma.reservations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reservationsCreateManyArgs>(args?: SelectSubset<T, reservationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reservations.
     * @param {reservationsDeleteArgs} args - Arguments to delete one Reservations.
     * @example
     * // Delete one Reservations
     * const Reservations = await prisma.reservations.delete({
     *   where: {
     *     // ... filter to delete one Reservations
     *   }
     * })
     * 
     */
    delete<T extends reservationsDeleteArgs>(args: SelectSubset<T, reservationsDeleteArgs<ExtArgs>>): Prisma__reservationsClient<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservations.
     * @param {reservationsUpdateArgs} args - Arguments to update one Reservations.
     * @example
     * // Update one Reservations
     * const reservations = await prisma.reservations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reservationsUpdateArgs>(args: SelectSubset<T, reservationsUpdateArgs<ExtArgs>>): Prisma__reservationsClient<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {reservationsDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reservationsDeleteManyArgs>(args?: SelectSubset<T, reservationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservations = await prisma.reservations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reservationsUpdateManyArgs>(args: SelectSubset<T, reservationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservations.
     * @param {reservationsUpsertArgs} args - Arguments to update or create a Reservations.
     * @example
     * // Update or create a Reservations
     * const reservations = await prisma.reservations.upsert({
     *   create: {
     *     // ... data to create a Reservations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservations we want to update
     *   }
     * })
     */
    upsert<T extends reservationsUpsertArgs>(args: SelectSubset<T, reservationsUpsertArgs<ExtArgs>>): Prisma__reservationsClient<$Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationsCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservations.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends reservationsCountArgs>(
      args?: Subset<T, reservationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationsAggregateArgs>(args: Subset<T, ReservationsAggregateArgs>): Prisma.PrismaPromise<GetReservationsAggregateType<T>>

    /**
     * Group by Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservationsGroupByArgs} args - Group by arguments.
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
      T extends reservationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reservationsGroupByArgs['orderBy'] }
        : { orderBy?: reservationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reservationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reservations model
   */
  readonly fields: reservationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reservations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reservationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the reservations model
   */
  interface reservationsFieldRefs {
    readonly id: FieldRef<"reservations", 'Int'>
    readonly customer_name: FieldRef<"reservations", 'String'>
    readonly customer_phone: FieldRef<"reservations", 'String'>
    readonly reservation_date: FieldRef<"reservations", 'DateTime'>
    readonly pax_count: FieldRef<"reservations", 'Int'>
    readonly buffer_pax: FieldRef<"reservations", 'Int'>
    readonly budget_type: FieldRef<"reservations", 'reservations_budget_type'>
    readonly status: FieldRef<"reservations", 'reservations_status'>
    readonly created_at: FieldRef<"reservations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reservations findUnique
   */
  export type reservationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Filter, which reservations to fetch.
     */
    where: reservationsWhereUniqueInput
  }

  /**
   * reservations findUniqueOrThrow
   */
  export type reservationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Filter, which reservations to fetch.
     */
    where: reservationsWhereUniqueInput
  }

  /**
   * reservations findFirst
   */
  export type reservationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Filter, which reservations to fetch.
     */
    where?: reservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationsOrderByWithRelationInput | reservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservations.
     */
    cursor?: reservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservations.
     */
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * reservations findFirstOrThrow
   */
  export type reservationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Filter, which reservations to fetch.
     */
    where?: reservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationsOrderByWithRelationInput | reservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservations.
     */
    cursor?: reservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservations.
     */
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * reservations findMany
   */
  export type reservationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Filter, which reservations to fetch.
     */
    where?: reservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservations to fetch.
     */
    orderBy?: reservationsOrderByWithRelationInput | reservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reservations.
     */
    cursor?: reservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservations.
     */
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * reservations create
   */
  export type reservationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * The data needed to create a reservations.
     */
    data: XOR<reservationsCreateInput, reservationsUncheckedCreateInput>
  }

  /**
   * reservations createMany
   */
  export type reservationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reservations.
     */
    data: reservationsCreateManyInput | reservationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reservations update
   */
  export type reservationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * The data needed to update a reservations.
     */
    data: XOR<reservationsUpdateInput, reservationsUncheckedUpdateInput>
    /**
     * Choose, which reservations to update.
     */
    where: reservationsWhereUniqueInput
  }

  /**
   * reservations updateMany
   */
  export type reservationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reservations.
     */
    data: XOR<reservationsUpdateManyMutationInput, reservationsUncheckedUpdateManyInput>
    /**
     * Filter which reservations to update
     */
    where?: reservationsWhereInput
    /**
     * Limit how many reservations to update.
     */
    limit?: number
  }

  /**
   * reservations upsert
   */
  export type reservationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * The filter to search for the reservations to update in case it exists.
     */
    where: reservationsWhereUniqueInput
    /**
     * In case the reservations found by the `where` argument doesn't exist, create a new reservations with this data.
     */
    create: XOR<reservationsCreateInput, reservationsUncheckedCreateInput>
    /**
     * In case the reservations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reservationsUpdateInput, reservationsUncheckedUpdateInput>
  }

  /**
   * reservations delete
   */
  export type reservationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
    /**
     * Filter which reservations to delete.
     */
    where: reservationsWhereUniqueInput
  }

  /**
   * reservations deleteMany
   */
  export type reservationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservations to delete
     */
    where?: reservationsWhereInput
    /**
     * Limit how many reservations to delete.
     */
    limit?: number
  }

  /**
   * reservations without action
   */
  export type reservationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservations
     */
    select?: reservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservations
     */
    omit?: reservationsOmit<ExtArgs> | null
  }


  /**
   * Model tables
   */

  export type AggregateTables = {
    _count: TablesCountAggregateOutputType | null
    _avg: TablesAvgAggregateOutputType | null
    _sum: TablesSumAggregateOutputType | null
    _min: TablesMinAggregateOutputType | null
    _max: TablesMaxAggregateOutputType | null
  }

  export type TablesAvgAggregateOutputType = {
    id: number | null
    table_number: number | null
  }

  export type TablesSumAggregateOutputType = {
    id: number | null
    table_number: number | null
  }

  export type TablesMinAggregateOutputType = {
    id: number | null
    table_number: number | null
    qr_code_url: string | null
  }

  export type TablesMaxAggregateOutputType = {
    id: number | null
    table_number: number | null
    qr_code_url: string | null
  }

  export type TablesCountAggregateOutputType = {
    id: number
    table_number: number
    qr_code_url: number
    _all: number
  }


  export type TablesAvgAggregateInputType = {
    id?: true
    table_number?: true
  }

  export type TablesSumAggregateInputType = {
    id?: true
    table_number?: true
  }

  export type TablesMinAggregateInputType = {
    id?: true
    table_number?: true
    qr_code_url?: true
  }

  export type TablesMaxAggregateInputType = {
    id?: true
    table_number?: true
    qr_code_url?: true
  }

  export type TablesCountAggregateInputType = {
    id?: true
    table_number?: true
    qr_code_url?: true
    _all?: true
  }

  export type TablesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tables to aggregate.
     */
    where?: tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tablesOrderByWithRelationInput | tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tables
    **/
    _count?: true | TablesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TablesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TablesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TablesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TablesMaxAggregateInputType
  }

  export type GetTablesAggregateType<T extends TablesAggregateArgs> = {
        [P in keyof T & keyof AggregateTables]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTables[P]>
      : GetScalarType<T[P], AggregateTables[P]>
  }




  export type tablesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tablesWhereInput
    orderBy?: tablesOrderByWithAggregationInput | tablesOrderByWithAggregationInput[]
    by: TablesScalarFieldEnum[] | TablesScalarFieldEnum
    having?: tablesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TablesCountAggregateInputType | true
    _avg?: TablesAvgAggregateInputType
    _sum?: TablesSumAggregateInputType
    _min?: TablesMinAggregateInputType
    _max?: TablesMaxAggregateInputType
  }

  export type TablesGroupByOutputType = {
    id: number
    table_number: number
    qr_code_url: string | null
    _count: TablesCountAggregateOutputType | null
    _avg: TablesAvgAggregateOutputType | null
    _sum: TablesSumAggregateOutputType | null
    _min: TablesMinAggregateOutputType | null
    _max: TablesMaxAggregateOutputType | null
  }

  type GetTablesGroupByPayload<T extends tablesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TablesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TablesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TablesGroupByOutputType[P]>
            : GetScalarType<T[P], TablesGroupByOutputType[P]>
        }
      >
    >


  export type tablesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    table_number?: boolean
    qr_code_url?: boolean
    orders?: boolean | tables$ordersArgs<ExtArgs>
    _count?: boolean | TablesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tables"]>



  export type tablesSelectScalar = {
    id?: boolean
    table_number?: boolean
    qr_code_url?: boolean
  }

  export type tablesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "table_number" | "qr_code_url", ExtArgs["result"]["tables"]>
  export type tablesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | tables$ordersArgs<ExtArgs>
    _count?: boolean | TablesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tablesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tables"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      table_number: number
      qr_code_url: string | null
    }, ExtArgs["result"]["tables"]>
    composites: {}
  }

  type tablesGetPayload<S extends boolean | null | undefined | tablesDefaultArgs> = $Result.GetResult<Prisma.$tablesPayload, S>

  type tablesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tablesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TablesCountAggregateInputType | true
    }

  export interface tablesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tables'], meta: { name: 'tables' } }
    /**
     * Find zero or one Tables that matches the filter.
     * @param {tablesFindUniqueArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tablesFindUniqueArgs>(args: SelectSubset<T, tablesFindUniqueArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tables that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tablesFindUniqueOrThrowArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tablesFindUniqueOrThrowArgs>(args: SelectSubset<T, tablesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesFindFirstArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tablesFindFirstArgs>(args?: SelectSubset<T, tablesFindFirstArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tables that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesFindFirstOrThrowArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tablesFindFirstOrThrowArgs>(args?: SelectSubset<T, tablesFindFirstOrThrowArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.tables.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.tables.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tablesWithIdOnly = await prisma.tables.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tablesFindManyArgs>(args?: SelectSubset<T, tablesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tables.
     * @param {tablesCreateArgs} args - Arguments to create a Tables.
     * @example
     * // Create one Tables
     * const Tables = await prisma.tables.create({
     *   data: {
     *     // ... data to create a Tables
     *   }
     * })
     * 
     */
    create<T extends tablesCreateArgs>(args: SelectSubset<T, tablesCreateArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tables.
     * @param {tablesCreateManyArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const tables = await prisma.tables.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tablesCreateManyArgs>(args?: SelectSubset<T, tablesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tables.
     * @param {tablesDeleteArgs} args - Arguments to delete one Tables.
     * @example
     * // Delete one Tables
     * const Tables = await prisma.tables.delete({
     *   where: {
     *     // ... filter to delete one Tables
     *   }
     * })
     * 
     */
    delete<T extends tablesDeleteArgs>(args: SelectSubset<T, tablesDeleteArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tables.
     * @param {tablesUpdateArgs} args - Arguments to update one Tables.
     * @example
     * // Update one Tables
     * const tables = await prisma.tables.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tablesUpdateArgs>(args: SelectSubset<T, tablesUpdateArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tables.
     * @param {tablesDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.tables.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tablesDeleteManyArgs>(args?: SelectSubset<T, tablesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const tables = await prisma.tables.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tablesUpdateManyArgs>(args: SelectSubset<T, tablesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tables.
     * @param {tablesUpsertArgs} args - Arguments to update or create a Tables.
     * @example
     * // Update or create a Tables
     * const tables = await prisma.tables.upsert({
     *   create: {
     *     // ... data to create a Tables
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tables we want to update
     *   }
     * })
     */
    upsert<T extends tablesUpsertArgs>(args: SelectSubset<T, tablesUpsertArgs<ExtArgs>>): Prisma__tablesClient<$Result.GetResult<Prisma.$tablesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.tables.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends tablesCountArgs>(
      args?: Subset<T, tablesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TablesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TablesAggregateArgs>(args: Subset<T, TablesAggregateArgs>): Prisma.PrismaPromise<GetTablesAggregateType<T>>

    /**
     * Group by Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tablesGroupByArgs} args - Group by arguments.
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
      T extends tablesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tablesGroupByArgs['orderBy'] }
        : { orderBy?: tablesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tablesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTablesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tables model
   */
  readonly fields: tablesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tables.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tablesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends tables$ordersArgs<ExtArgs> = {}>(args?: Subset<T, tables$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tables model
   */
  interface tablesFieldRefs {
    readonly id: FieldRef<"tables", 'Int'>
    readonly table_number: FieldRef<"tables", 'Int'>
    readonly qr_code_url: FieldRef<"tables", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tables findUnique
   */
  export type tablesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * Filter, which tables to fetch.
     */
    where: tablesWhereUniqueInput
  }

  /**
   * tables findUniqueOrThrow
   */
  export type tablesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * Filter, which tables to fetch.
     */
    where: tablesWhereUniqueInput
  }

  /**
   * tables findFirst
   */
  export type tablesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * Filter, which tables to fetch.
     */
    where?: tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tablesOrderByWithRelationInput | tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tables.
     */
    cursor?: tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tables.
     */
    distinct?: TablesScalarFieldEnum | TablesScalarFieldEnum[]
  }

  /**
   * tables findFirstOrThrow
   */
  export type tablesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * Filter, which tables to fetch.
     */
    where?: tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tablesOrderByWithRelationInput | tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tables.
     */
    cursor?: tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tables.
     */
    distinct?: TablesScalarFieldEnum | TablesScalarFieldEnum[]
  }

  /**
   * tables findMany
   */
  export type tablesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * Filter, which tables to fetch.
     */
    where?: tablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tablesOrderByWithRelationInput | tablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tables.
     */
    cursor?: tablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tables.
     */
    distinct?: TablesScalarFieldEnum | TablesScalarFieldEnum[]
  }

  /**
   * tables create
   */
  export type tablesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * The data needed to create a tables.
     */
    data: XOR<tablesCreateInput, tablesUncheckedCreateInput>
  }

  /**
   * tables createMany
   */
  export type tablesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tables.
     */
    data: tablesCreateManyInput | tablesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tables update
   */
  export type tablesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * The data needed to update a tables.
     */
    data: XOR<tablesUpdateInput, tablesUncheckedUpdateInput>
    /**
     * Choose, which tables to update.
     */
    where: tablesWhereUniqueInput
  }

  /**
   * tables updateMany
   */
  export type tablesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tables.
     */
    data: XOR<tablesUpdateManyMutationInput, tablesUncheckedUpdateManyInput>
    /**
     * Filter which tables to update
     */
    where?: tablesWhereInput
    /**
     * Limit how many tables to update.
     */
    limit?: number
  }

  /**
   * tables upsert
   */
  export type tablesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * The filter to search for the tables to update in case it exists.
     */
    where: tablesWhereUniqueInput
    /**
     * In case the tables found by the `where` argument doesn't exist, create a new tables with this data.
     */
    create: XOR<tablesCreateInput, tablesUncheckedCreateInput>
    /**
     * In case the tables was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tablesUpdateInput, tablesUncheckedUpdateInput>
  }

  /**
   * tables delete
   */
  export type tablesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
    /**
     * Filter which tables to delete.
     */
    where: tablesWhereUniqueInput
  }

  /**
   * tables deleteMany
   */
  export type tablesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tables to delete
     */
    where?: tablesWhereInput
    /**
     * Limit how many tables to delete.
     */
    limit?: number
  }

  /**
   * tables.orders
   */
  export type tables$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * tables without action
   */
  export type tablesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tables
     */
    select?: tablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tables
     */
    omit?: tablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tablesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password_hash: string | null
    role: $Enums.users_role | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password_hash: string | null
    role: $Enums.users_role | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password_hash: number
    role: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password_hash?: true
    role?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password_hash?: true
    role?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password_hash?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    password_hash: string
    role: $Enums.users_role
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password_hash" | "role" | "created_at", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password_hash: string
      role: $Enums.users_role
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'users_role'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    menu_item_id: 'menu_item_id',
    rating: 'rating',
    review_text: 'review_text',
    created_at: 'created_at'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const Legacy_print_queueScalarFieldEnum: {
    id: 'id',
    order_id_pwa: 'order_id_pwa',
    table_number: 'table_number',
    total_amount: 'total_amount',
    status_print: 'status_print',
    created_at: 'created_at'
  };

  export type Legacy_print_queueScalarFieldEnum = (typeof Legacy_print_queueScalarFieldEnum)[keyof typeof Legacy_print_queueScalarFieldEnum]


  export const Menu_itemsScalarFieldEnum: {
    id: 'id',
    category_id: 'category_id',
    name: 'name',
    description: 'description',
    price: 'price',
    image_url: 'image_url',
    status: 'status'
  };

  export type Menu_itemsScalarFieldEnum = (typeof Menu_itemsScalarFieldEnum)[keyof typeof Menu_itemsScalarFieldEnum]


  export const Order_itemsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    menu_item_id: 'menu_item_id',
    quantity: 'quantity',
    notes: 'notes'
  };

  export type Order_itemsScalarFieldEnum = (typeof Order_itemsScalarFieldEnum)[keyof typeof Order_itemsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    table_id: 'table_id',
    status: 'status',
    subtotal: 'subtotal',
    promo_id: 'promo_id',
    discount_amount: 'discount_amount',
    final_total: 'final_total',
    created_at: 'created_at'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const PromotionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    value: 'value',
    min_purchase: 'min_purchase',
    is_active: 'is_active'
  };

  export type PromotionsScalarFieldEnum = (typeof PromotionsScalarFieldEnum)[keyof typeof PromotionsScalarFieldEnum]


  export const Raw_materialsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    unit: 'unit',
    current_stock: 'current_stock',
    min_stock_alert: 'min_stock_alert'
  };

  export type Raw_materialsScalarFieldEnum = (typeof Raw_materialsScalarFieldEnum)[keyof typeof Raw_materialsScalarFieldEnum]


  export const Recipe_bomScalarFieldEnum: {
    id: 'id',
    menu_item_id: 'menu_item_id',
    raw_material_id: 'raw_material_id',
    quantity_required: 'quantity_required'
  };

  export type Recipe_bomScalarFieldEnum = (typeof Recipe_bomScalarFieldEnum)[keyof typeof Recipe_bomScalarFieldEnum]


  export const ReservationsScalarFieldEnum: {
    id: 'id',
    customer_name: 'customer_name',
    customer_phone: 'customer_phone',
    reservation_date: 'reservation_date',
    pax_count: 'pax_count',
    buffer_pax: 'buffer_pax',
    budget_type: 'budget_type',
    status: 'status',
    created_at: 'created_at'
  };

  export type ReservationsScalarFieldEnum = (typeof ReservationsScalarFieldEnum)[keyof typeof ReservationsScalarFieldEnum]


  export const TablesScalarFieldEnum: {
    id: 'id',
    table_number: 'table_number',
    qr_code_url: 'qr_code_url'
  };

  export type TablesScalarFieldEnum = (typeof TablesScalarFieldEnum)[keyof typeof TablesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password_hash: 'password_hash',
    role: 'role',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const categoriesOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type categoriesOrderByRelevanceFieldEnum = (typeof categoriesOrderByRelevanceFieldEnum)[keyof typeof categoriesOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const feedbackOrderByRelevanceFieldEnum: {
    review_text: 'review_text'
  };

  export type feedbackOrderByRelevanceFieldEnum = (typeof feedbackOrderByRelevanceFieldEnum)[keyof typeof feedbackOrderByRelevanceFieldEnum]


  export const menu_itemsOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    image_url: 'image_url'
  };

  export type menu_itemsOrderByRelevanceFieldEnum = (typeof menu_itemsOrderByRelevanceFieldEnum)[keyof typeof menu_itemsOrderByRelevanceFieldEnum]


  export const order_itemsOrderByRelevanceFieldEnum: {
    notes: 'notes'
  };

  export type order_itemsOrderByRelevanceFieldEnum = (typeof order_itemsOrderByRelevanceFieldEnum)[keyof typeof order_itemsOrderByRelevanceFieldEnum]


  export const promotionsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type promotionsOrderByRelevanceFieldEnum = (typeof promotionsOrderByRelevanceFieldEnum)[keyof typeof promotionsOrderByRelevanceFieldEnum]


  export const raw_materialsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type raw_materialsOrderByRelevanceFieldEnum = (typeof raw_materialsOrderByRelevanceFieldEnum)[keyof typeof raw_materialsOrderByRelevanceFieldEnum]


  export const reservationsOrderByRelevanceFieldEnum: {
    customer_name: 'customer_name',
    customer_phone: 'customer_phone'
  };

  export type reservationsOrderByRelevanceFieldEnum = (typeof reservationsOrderByRelevanceFieldEnum)[keyof typeof reservationsOrderByRelevanceFieldEnum]


  export const tablesOrderByRelevanceFieldEnum: {
    qr_code_url: 'qr_code_url'
  };

  export type tablesOrderByRelevanceFieldEnum = (typeof tablesOrderByRelevanceFieldEnum)[keyof typeof tablesOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    username: 'username',
    password_hash: 'password_hash'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'legacy_print_queue_status_print'
   */
  export type Enumlegacy_print_queue_status_printFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'legacy_print_queue_status_print'>
    


  /**
   * Reference to a field of type 'menu_items_status'
   */
  export type Enummenu_items_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'menu_items_status'>
    


  /**
   * Reference to a field of type 'orders_status'
   */
  export type Enumorders_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'orders_status'>
    


  /**
   * Reference to a field of type 'promotions_type'
   */
  export type Enumpromotions_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'promotions_type'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'raw_materials_unit'
   */
  export type Enumraw_materials_unitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'raw_materials_unit'>
    


  /**
   * Reference to a field of type 'reservations_budget_type'
   */
  export type Enumreservations_budget_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'reservations_budget_type'>
    


  /**
   * Reference to a field of type 'reservations_status'
   */
  export type Enumreservations_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'reservations_status'>
    


  /**
   * Reference to a field of type 'users_role'
   */
  export type Enumusers_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    menu_items?: Menu_itemsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    menu_items?: menu_itemsOrderByRelationAggregateInput
    _relevance?: categoriesOrderByRelevanceInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    name?: StringFilter<"categories"> | string
    menu_items?: Menu_itemsListRelationFilter
  }, "id">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    name?: StringWithAggregatesFilter<"categories"> | string
  }

  export type feedbackWhereInput = {
    AND?: feedbackWhereInput | feedbackWhereInput[]
    OR?: feedbackWhereInput[]
    NOT?: feedbackWhereInput | feedbackWhereInput[]
    id?: IntFilter<"feedback"> | number
    order_id?: IntFilter<"feedback"> | number
    menu_item_id?: IntFilter<"feedback"> | number
    rating?: IntNullableFilter<"feedback"> | number | null
    review_text?: StringNullableFilter<"feedback"> | string | null
    created_at?: DateTimeFilter<"feedback"> | Date | string
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    menu_items?: XOR<Menu_itemsScalarRelationFilter, menu_itemsWhereInput>
  }

  export type feedbackOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    rating?: SortOrderInput | SortOrder
    review_text?: SortOrderInput | SortOrder
    created_at?: SortOrder
    orders?: ordersOrderByWithRelationInput
    menu_items?: menu_itemsOrderByWithRelationInput
    _relevance?: feedbackOrderByRelevanceInput
  }

  export type feedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: feedbackWhereInput | feedbackWhereInput[]
    OR?: feedbackWhereInput[]
    NOT?: feedbackWhereInput | feedbackWhereInput[]
    order_id?: IntFilter<"feedback"> | number
    menu_item_id?: IntFilter<"feedback"> | number
    rating?: IntNullableFilter<"feedback"> | number | null
    review_text?: StringNullableFilter<"feedback"> | string | null
    created_at?: DateTimeFilter<"feedback"> | Date | string
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    menu_items?: XOR<Menu_itemsScalarRelationFilter, menu_itemsWhereInput>
  }, "id">

  export type feedbackOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    rating?: SortOrderInput | SortOrder
    review_text?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: feedbackCountOrderByAggregateInput
    _avg?: feedbackAvgOrderByAggregateInput
    _max?: feedbackMaxOrderByAggregateInput
    _min?: feedbackMinOrderByAggregateInput
    _sum?: feedbackSumOrderByAggregateInput
  }

  export type feedbackScalarWhereWithAggregatesInput = {
    AND?: feedbackScalarWhereWithAggregatesInput | feedbackScalarWhereWithAggregatesInput[]
    OR?: feedbackScalarWhereWithAggregatesInput[]
    NOT?: feedbackScalarWhereWithAggregatesInput | feedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"feedback"> | number
    order_id?: IntWithAggregatesFilter<"feedback"> | number
    menu_item_id?: IntWithAggregatesFilter<"feedback"> | number
    rating?: IntNullableWithAggregatesFilter<"feedback"> | number | null
    review_text?: StringNullableWithAggregatesFilter<"feedback"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"feedback"> | Date | string
  }

  export type legacy_print_queueWhereInput = {
    AND?: legacy_print_queueWhereInput | legacy_print_queueWhereInput[]
    OR?: legacy_print_queueWhereInput[]
    NOT?: legacy_print_queueWhereInput | legacy_print_queueWhereInput[]
    id?: IntFilter<"legacy_print_queue"> | number
    order_id_pwa?: IntFilter<"legacy_print_queue"> | number
    table_number?: IntFilter<"legacy_print_queue"> | number
    total_amount?: DecimalFilter<"legacy_print_queue"> | Decimal | DecimalJsLike | number | string
    status_print?: Enumlegacy_print_queue_status_printNullableFilter<"legacy_print_queue"> | $Enums.legacy_print_queue_status_print | null
    created_at?: DateTimeFilter<"legacy_print_queue"> | Date | string
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
  }

  export type legacy_print_queueOrderByWithRelationInput = {
    id?: SortOrder
    order_id_pwa?: SortOrder
    table_number?: SortOrder
    total_amount?: SortOrder
    status_print?: SortOrderInput | SortOrder
    created_at?: SortOrder
    orders?: ordersOrderByWithRelationInput
  }

  export type legacy_print_queueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: legacy_print_queueWhereInput | legacy_print_queueWhereInput[]
    OR?: legacy_print_queueWhereInput[]
    NOT?: legacy_print_queueWhereInput | legacy_print_queueWhereInput[]
    order_id_pwa?: IntFilter<"legacy_print_queue"> | number
    table_number?: IntFilter<"legacy_print_queue"> | number
    total_amount?: DecimalFilter<"legacy_print_queue"> | Decimal | DecimalJsLike | number | string
    status_print?: Enumlegacy_print_queue_status_printNullableFilter<"legacy_print_queue"> | $Enums.legacy_print_queue_status_print | null
    created_at?: DateTimeFilter<"legacy_print_queue"> | Date | string
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
  }, "id">

  export type legacy_print_queueOrderByWithAggregationInput = {
    id?: SortOrder
    order_id_pwa?: SortOrder
    table_number?: SortOrder
    total_amount?: SortOrder
    status_print?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: legacy_print_queueCountOrderByAggregateInput
    _avg?: legacy_print_queueAvgOrderByAggregateInput
    _max?: legacy_print_queueMaxOrderByAggregateInput
    _min?: legacy_print_queueMinOrderByAggregateInput
    _sum?: legacy_print_queueSumOrderByAggregateInput
  }

  export type legacy_print_queueScalarWhereWithAggregatesInput = {
    AND?: legacy_print_queueScalarWhereWithAggregatesInput | legacy_print_queueScalarWhereWithAggregatesInput[]
    OR?: legacy_print_queueScalarWhereWithAggregatesInput[]
    NOT?: legacy_print_queueScalarWhereWithAggregatesInput | legacy_print_queueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"legacy_print_queue"> | number
    order_id_pwa?: IntWithAggregatesFilter<"legacy_print_queue"> | number
    table_number?: IntWithAggregatesFilter<"legacy_print_queue"> | number
    total_amount?: DecimalWithAggregatesFilter<"legacy_print_queue"> | Decimal | DecimalJsLike | number | string
    status_print?: Enumlegacy_print_queue_status_printNullableWithAggregatesFilter<"legacy_print_queue"> | $Enums.legacy_print_queue_status_print | null
    created_at?: DateTimeWithAggregatesFilter<"legacy_print_queue"> | Date | string
  }

  export type menu_itemsWhereInput = {
    AND?: menu_itemsWhereInput | menu_itemsWhereInput[]
    OR?: menu_itemsWhereInput[]
    NOT?: menu_itemsWhereInput | menu_itemsWhereInput[]
    id?: IntFilter<"menu_items"> | number
    category_id?: IntNullableFilter<"menu_items"> | number | null
    name?: StringFilter<"menu_items"> | string
    description?: StringNullableFilter<"menu_items"> | string | null
    price?: DecimalFilter<"menu_items"> | Decimal | DecimalJsLike | number | string
    image_url?: StringNullableFilter<"menu_items"> | string | null
    status?: Enummenu_items_statusNullableFilter<"menu_items"> | $Enums.menu_items_status | null
    feedback?: FeedbackListRelationFilter
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    order_items?: Order_itemsListRelationFilter
    recipe_bom?: Recipe_bomListRelationFilter
  }

  export type menu_itemsOrderByWithRelationInput = {
    id?: SortOrder
    category_id?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    image_url?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    feedback?: feedbackOrderByRelationAggregateInput
    categories?: categoriesOrderByWithRelationInput
    order_items?: order_itemsOrderByRelationAggregateInput
    recipe_bom?: recipe_bomOrderByRelationAggregateInput
    _relevance?: menu_itemsOrderByRelevanceInput
  }

  export type menu_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: menu_itemsWhereInput | menu_itemsWhereInput[]
    OR?: menu_itemsWhereInput[]
    NOT?: menu_itemsWhereInput | menu_itemsWhereInput[]
    category_id?: IntNullableFilter<"menu_items"> | number | null
    name?: StringFilter<"menu_items"> | string
    description?: StringNullableFilter<"menu_items"> | string | null
    price?: DecimalFilter<"menu_items"> | Decimal | DecimalJsLike | number | string
    image_url?: StringNullableFilter<"menu_items"> | string | null
    status?: Enummenu_items_statusNullableFilter<"menu_items"> | $Enums.menu_items_status | null
    feedback?: FeedbackListRelationFilter
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    order_items?: Order_itemsListRelationFilter
    recipe_bom?: Recipe_bomListRelationFilter
  }, "id">

  export type menu_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    category_id?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    image_url?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: menu_itemsCountOrderByAggregateInput
    _avg?: menu_itemsAvgOrderByAggregateInput
    _max?: menu_itemsMaxOrderByAggregateInput
    _min?: menu_itemsMinOrderByAggregateInput
    _sum?: menu_itemsSumOrderByAggregateInput
  }

  export type menu_itemsScalarWhereWithAggregatesInput = {
    AND?: menu_itemsScalarWhereWithAggregatesInput | menu_itemsScalarWhereWithAggregatesInput[]
    OR?: menu_itemsScalarWhereWithAggregatesInput[]
    NOT?: menu_itemsScalarWhereWithAggregatesInput | menu_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"menu_items"> | number
    category_id?: IntNullableWithAggregatesFilter<"menu_items"> | number | null
    name?: StringWithAggregatesFilter<"menu_items"> | string
    description?: StringNullableWithAggregatesFilter<"menu_items"> | string | null
    price?: DecimalWithAggregatesFilter<"menu_items"> | Decimal | DecimalJsLike | number | string
    image_url?: StringNullableWithAggregatesFilter<"menu_items"> | string | null
    status?: Enummenu_items_statusNullableWithAggregatesFilter<"menu_items"> | $Enums.menu_items_status | null
  }

  export type order_itemsWhereInput = {
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    id?: IntFilter<"order_items"> | number
    order_id?: IntFilter<"order_items"> | number
    menu_item_id?: IntFilter<"order_items"> | number
    quantity?: IntFilter<"order_items"> | number
    notes?: StringNullableFilter<"order_items"> | string | null
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    menu_items?: XOR<Menu_itemsScalarRelationFilter, menu_itemsWhereInput>
  }

  export type order_itemsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
    notes?: SortOrderInput | SortOrder
    orders?: ordersOrderByWithRelationInput
    menu_items?: menu_itemsOrderByWithRelationInput
    _relevance?: order_itemsOrderByRelevanceInput
  }

  export type order_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    order_id?: IntFilter<"order_items"> | number
    menu_item_id?: IntFilter<"order_items"> | number
    quantity?: IntFilter<"order_items"> | number
    notes?: StringNullableFilter<"order_items"> | string | null
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    menu_items?: XOR<Menu_itemsScalarRelationFilter, menu_itemsWhereInput>
  }, "id">

  export type order_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: order_itemsCountOrderByAggregateInput
    _avg?: order_itemsAvgOrderByAggregateInput
    _max?: order_itemsMaxOrderByAggregateInput
    _min?: order_itemsMinOrderByAggregateInput
    _sum?: order_itemsSumOrderByAggregateInput
  }

  export type order_itemsScalarWhereWithAggregatesInput = {
    AND?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    OR?: order_itemsScalarWhereWithAggregatesInput[]
    NOT?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order_items"> | number
    order_id?: IntWithAggregatesFilter<"order_items"> | number
    menu_item_id?: IntWithAggregatesFilter<"order_items"> | number
    quantity?: IntWithAggregatesFilter<"order_items"> | number
    notes?: StringNullableWithAggregatesFilter<"order_items"> | string | null
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: IntFilter<"orders"> | number
    table_id?: IntFilter<"orders"> | number
    status?: Enumorders_statusNullableFilter<"orders"> | $Enums.orders_status | null
    subtotal?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    promo_id?: IntNullableFilter<"orders"> | number | null
    discount_amount?: DecimalNullableFilter<"orders"> | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"orders"> | Date | string
    feedback?: FeedbackListRelationFilter
    legacy_print_queue?: Legacy_print_queueListRelationFilter
    order_items?: Order_itemsListRelationFilter
    tables?: XOR<TablesScalarRelationFilter, tablesWhereInput>
    promotions?: XOR<PromotionsNullableScalarRelationFilter, promotionsWhereInput> | null
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    table_id?: SortOrder
    status?: SortOrderInput | SortOrder
    subtotal?: SortOrder
    promo_id?: SortOrderInput | SortOrder
    discount_amount?: SortOrderInput | SortOrder
    final_total?: SortOrder
    created_at?: SortOrder
    feedback?: feedbackOrderByRelationAggregateInput
    legacy_print_queue?: legacy_print_queueOrderByRelationAggregateInput
    order_items?: order_itemsOrderByRelationAggregateInput
    tables?: tablesOrderByWithRelationInput
    promotions?: promotionsOrderByWithRelationInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    table_id?: IntFilter<"orders"> | number
    status?: Enumorders_statusNullableFilter<"orders"> | $Enums.orders_status | null
    subtotal?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    promo_id?: IntNullableFilter<"orders"> | number | null
    discount_amount?: DecimalNullableFilter<"orders"> | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"orders"> | Date | string
    feedback?: FeedbackListRelationFilter
    legacy_print_queue?: Legacy_print_queueListRelationFilter
    order_items?: Order_itemsListRelationFilter
    tables?: XOR<TablesScalarRelationFilter, tablesWhereInput>
    promotions?: XOR<PromotionsNullableScalarRelationFilter, promotionsWhereInput> | null
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    table_id?: SortOrder
    status?: SortOrderInput | SortOrder
    subtotal?: SortOrder
    promo_id?: SortOrderInput | SortOrder
    discount_amount?: SortOrderInput | SortOrder
    final_total?: SortOrder
    created_at?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orders"> | number
    table_id?: IntWithAggregatesFilter<"orders"> | number
    status?: Enumorders_statusNullableWithAggregatesFilter<"orders"> | $Enums.orders_status | null
    subtotal?: DecimalWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string
    promo_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    discount_amount?: DecimalNullableWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"orders"> | Date | string
  }

  export type promotionsWhereInput = {
    AND?: promotionsWhereInput | promotionsWhereInput[]
    OR?: promotionsWhereInput[]
    NOT?: promotionsWhereInput | promotionsWhereInput[]
    id?: IntFilter<"promotions"> | number
    name?: StringFilter<"promotions"> | string
    type?: Enumpromotions_typeFilter<"promotions"> | $Enums.promotions_type
    value?: DecimalFilter<"promotions"> | Decimal | DecimalJsLike | number | string
    min_purchase?: DecimalNullableFilter<"promotions"> | Decimal | DecimalJsLike | number | string | null
    is_active?: BoolNullableFilter<"promotions"> | boolean | null
    orders?: OrdersListRelationFilter
  }

  export type promotionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
    min_purchase?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    orders?: ordersOrderByRelationAggregateInput
    _relevance?: promotionsOrderByRelevanceInput
  }

  export type promotionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: promotionsWhereInput | promotionsWhereInput[]
    OR?: promotionsWhereInput[]
    NOT?: promotionsWhereInput | promotionsWhereInput[]
    name?: StringFilter<"promotions"> | string
    type?: Enumpromotions_typeFilter<"promotions"> | $Enums.promotions_type
    value?: DecimalFilter<"promotions"> | Decimal | DecimalJsLike | number | string
    min_purchase?: DecimalNullableFilter<"promotions"> | Decimal | DecimalJsLike | number | string | null
    is_active?: BoolNullableFilter<"promotions"> | boolean | null
    orders?: OrdersListRelationFilter
  }, "id">

  export type promotionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
    min_purchase?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    _count?: promotionsCountOrderByAggregateInput
    _avg?: promotionsAvgOrderByAggregateInput
    _max?: promotionsMaxOrderByAggregateInput
    _min?: promotionsMinOrderByAggregateInput
    _sum?: promotionsSumOrderByAggregateInput
  }

  export type promotionsScalarWhereWithAggregatesInput = {
    AND?: promotionsScalarWhereWithAggregatesInput | promotionsScalarWhereWithAggregatesInput[]
    OR?: promotionsScalarWhereWithAggregatesInput[]
    NOT?: promotionsScalarWhereWithAggregatesInput | promotionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"promotions"> | number
    name?: StringWithAggregatesFilter<"promotions"> | string
    type?: Enumpromotions_typeWithAggregatesFilter<"promotions"> | $Enums.promotions_type
    value?: DecimalWithAggregatesFilter<"promotions"> | Decimal | DecimalJsLike | number | string
    min_purchase?: DecimalNullableWithAggregatesFilter<"promotions"> | Decimal | DecimalJsLike | number | string | null
    is_active?: BoolNullableWithAggregatesFilter<"promotions"> | boolean | null
  }

  export type raw_materialsWhereInput = {
    AND?: raw_materialsWhereInput | raw_materialsWhereInput[]
    OR?: raw_materialsWhereInput[]
    NOT?: raw_materialsWhereInput | raw_materialsWhereInput[]
    id?: IntFilter<"raw_materials"> | number
    name?: StringFilter<"raw_materials"> | string
    unit?: Enumraw_materials_unitFilter<"raw_materials"> | $Enums.raw_materials_unit
    current_stock?: DecimalFilter<"raw_materials"> | Decimal | DecimalJsLike | number | string
    min_stock_alert?: DecimalFilter<"raw_materials"> | Decimal | DecimalJsLike | number | string
    recipe_bom?: Recipe_bomListRelationFilter
  }

  export type raw_materialsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    current_stock?: SortOrder
    min_stock_alert?: SortOrder
    recipe_bom?: recipe_bomOrderByRelationAggregateInput
    _relevance?: raw_materialsOrderByRelevanceInput
  }

  export type raw_materialsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: raw_materialsWhereInput | raw_materialsWhereInput[]
    OR?: raw_materialsWhereInput[]
    NOT?: raw_materialsWhereInput | raw_materialsWhereInput[]
    name?: StringFilter<"raw_materials"> | string
    unit?: Enumraw_materials_unitFilter<"raw_materials"> | $Enums.raw_materials_unit
    current_stock?: DecimalFilter<"raw_materials"> | Decimal | DecimalJsLike | number | string
    min_stock_alert?: DecimalFilter<"raw_materials"> | Decimal | DecimalJsLike | number | string
    recipe_bom?: Recipe_bomListRelationFilter
  }, "id">

  export type raw_materialsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    current_stock?: SortOrder
    min_stock_alert?: SortOrder
    _count?: raw_materialsCountOrderByAggregateInput
    _avg?: raw_materialsAvgOrderByAggregateInput
    _max?: raw_materialsMaxOrderByAggregateInput
    _min?: raw_materialsMinOrderByAggregateInput
    _sum?: raw_materialsSumOrderByAggregateInput
  }

  export type raw_materialsScalarWhereWithAggregatesInput = {
    AND?: raw_materialsScalarWhereWithAggregatesInput | raw_materialsScalarWhereWithAggregatesInput[]
    OR?: raw_materialsScalarWhereWithAggregatesInput[]
    NOT?: raw_materialsScalarWhereWithAggregatesInput | raw_materialsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"raw_materials"> | number
    name?: StringWithAggregatesFilter<"raw_materials"> | string
    unit?: Enumraw_materials_unitWithAggregatesFilter<"raw_materials"> | $Enums.raw_materials_unit
    current_stock?: DecimalWithAggregatesFilter<"raw_materials"> | Decimal | DecimalJsLike | number | string
    min_stock_alert?: DecimalWithAggregatesFilter<"raw_materials"> | Decimal | DecimalJsLike | number | string
  }

  export type recipe_bomWhereInput = {
    AND?: recipe_bomWhereInput | recipe_bomWhereInput[]
    OR?: recipe_bomWhereInput[]
    NOT?: recipe_bomWhereInput | recipe_bomWhereInput[]
    id?: IntFilter<"recipe_bom"> | number
    menu_item_id?: IntFilter<"recipe_bom"> | number
    raw_material_id?: IntFilter<"recipe_bom"> | number
    quantity_required?: DecimalFilter<"recipe_bom"> | Decimal | DecimalJsLike | number | string
    menu_items?: XOR<Menu_itemsScalarRelationFilter, menu_itemsWhereInput>
    raw_materials?: XOR<Raw_materialsScalarRelationFilter, raw_materialsWhereInput>
  }

  export type recipe_bomOrderByWithRelationInput = {
    id?: SortOrder
    menu_item_id?: SortOrder
    raw_material_id?: SortOrder
    quantity_required?: SortOrder
    menu_items?: menu_itemsOrderByWithRelationInput
    raw_materials?: raw_materialsOrderByWithRelationInput
  }

  export type recipe_bomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: recipe_bomWhereInput | recipe_bomWhereInput[]
    OR?: recipe_bomWhereInput[]
    NOT?: recipe_bomWhereInput | recipe_bomWhereInput[]
    menu_item_id?: IntFilter<"recipe_bom"> | number
    raw_material_id?: IntFilter<"recipe_bom"> | number
    quantity_required?: DecimalFilter<"recipe_bom"> | Decimal | DecimalJsLike | number | string
    menu_items?: XOR<Menu_itemsScalarRelationFilter, menu_itemsWhereInput>
    raw_materials?: XOR<Raw_materialsScalarRelationFilter, raw_materialsWhereInput>
  }, "id">

  export type recipe_bomOrderByWithAggregationInput = {
    id?: SortOrder
    menu_item_id?: SortOrder
    raw_material_id?: SortOrder
    quantity_required?: SortOrder
    _count?: recipe_bomCountOrderByAggregateInput
    _avg?: recipe_bomAvgOrderByAggregateInput
    _max?: recipe_bomMaxOrderByAggregateInput
    _min?: recipe_bomMinOrderByAggregateInput
    _sum?: recipe_bomSumOrderByAggregateInput
  }

  export type recipe_bomScalarWhereWithAggregatesInput = {
    AND?: recipe_bomScalarWhereWithAggregatesInput | recipe_bomScalarWhereWithAggregatesInput[]
    OR?: recipe_bomScalarWhereWithAggregatesInput[]
    NOT?: recipe_bomScalarWhereWithAggregatesInput | recipe_bomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"recipe_bom"> | number
    menu_item_id?: IntWithAggregatesFilter<"recipe_bom"> | number
    raw_material_id?: IntWithAggregatesFilter<"recipe_bom"> | number
    quantity_required?: DecimalWithAggregatesFilter<"recipe_bom"> | Decimal | DecimalJsLike | number | string
  }

  export type reservationsWhereInput = {
    AND?: reservationsWhereInput | reservationsWhereInput[]
    OR?: reservationsWhereInput[]
    NOT?: reservationsWhereInput | reservationsWhereInput[]
    id?: IntFilter<"reservations"> | number
    customer_name?: StringFilter<"reservations"> | string
    customer_phone?: StringFilter<"reservations"> | string
    reservation_date?: DateTimeFilter<"reservations"> | Date | string
    pax_count?: IntFilter<"reservations"> | number
    buffer_pax?: IntNullableFilter<"reservations"> | number | null
    budget_type?: Enumreservations_budget_typeNullableFilter<"reservations"> | $Enums.reservations_budget_type | null
    status?: Enumreservations_statusNullableFilter<"reservations"> | $Enums.reservations_status | null
    created_at?: DateTimeFilter<"reservations"> | Date | string
  }

  export type reservationsOrderByWithRelationInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_phone?: SortOrder
    reservation_date?: SortOrder
    pax_count?: SortOrder
    buffer_pax?: SortOrderInput | SortOrder
    budget_type?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _relevance?: reservationsOrderByRelevanceInput
  }

  export type reservationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: reservationsWhereInput | reservationsWhereInput[]
    OR?: reservationsWhereInput[]
    NOT?: reservationsWhereInput | reservationsWhereInput[]
    customer_name?: StringFilter<"reservations"> | string
    customer_phone?: StringFilter<"reservations"> | string
    reservation_date?: DateTimeFilter<"reservations"> | Date | string
    pax_count?: IntFilter<"reservations"> | number
    buffer_pax?: IntNullableFilter<"reservations"> | number | null
    budget_type?: Enumreservations_budget_typeNullableFilter<"reservations"> | $Enums.reservations_budget_type | null
    status?: Enumreservations_statusNullableFilter<"reservations"> | $Enums.reservations_status | null
    created_at?: DateTimeFilter<"reservations"> | Date | string
  }, "id">

  export type reservationsOrderByWithAggregationInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_phone?: SortOrder
    reservation_date?: SortOrder
    pax_count?: SortOrder
    buffer_pax?: SortOrderInput | SortOrder
    budget_type?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: reservationsCountOrderByAggregateInput
    _avg?: reservationsAvgOrderByAggregateInput
    _max?: reservationsMaxOrderByAggregateInput
    _min?: reservationsMinOrderByAggregateInput
    _sum?: reservationsSumOrderByAggregateInput
  }

  export type reservationsScalarWhereWithAggregatesInput = {
    AND?: reservationsScalarWhereWithAggregatesInput | reservationsScalarWhereWithAggregatesInput[]
    OR?: reservationsScalarWhereWithAggregatesInput[]
    NOT?: reservationsScalarWhereWithAggregatesInput | reservationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reservations"> | number
    customer_name?: StringWithAggregatesFilter<"reservations"> | string
    customer_phone?: StringWithAggregatesFilter<"reservations"> | string
    reservation_date?: DateTimeWithAggregatesFilter<"reservations"> | Date | string
    pax_count?: IntWithAggregatesFilter<"reservations"> | number
    buffer_pax?: IntNullableWithAggregatesFilter<"reservations"> | number | null
    budget_type?: Enumreservations_budget_typeNullableWithAggregatesFilter<"reservations"> | $Enums.reservations_budget_type | null
    status?: Enumreservations_statusNullableWithAggregatesFilter<"reservations"> | $Enums.reservations_status | null
    created_at?: DateTimeWithAggregatesFilter<"reservations"> | Date | string
  }

  export type tablesWhereInput = {
    AND?: tablesWhereInput | tablesWhereInput[]
    OR?: tablesWhereInput[]
    NOT?: tablesWhereInput | tablesWhereInput[]
    id?: IntFilter<"tables"> | number
    table_number?: IntFilter<"tables"> | number
    qr_code_url?: StringNullableFilter<"tables"> | string | null
    orders?: OrdersListRelationFilter
  }

  export type tablesOrderByWithRelationInput = {
    id?: SortOrder
    table_number?: SortOrder
    qr_code_url?: SortOrderInput | SortOrder
    orders?: ordersOrderByRelationAggregateInput
    _relevance?: tablesOrderByRelevanceInput
  }

  export type tablesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    table_number?: number
    AND?: tablesWhereInput | tablesWhereInput[]
    OR?: tablesWhereInput[]
    NOT?: tablesWhereInput | tablesWhereInput[]
    qr_code_url?: StringNullableFilter<"tables"> | string | null
    orders?: OrdersListRelationFilter
  }, "id" | "table_number">

  export type tablesOrderByWithAggregationInput = {
    id?: SortOrder
    table_number?: SortOrder
    qr_code_url?: SortOrderInput | SortOrder
    _count?: tablesCountOrderByAggregateInput
    _avg?: tablesAvgOrderByAggregateInput
    _max?: tablesMaxOrderByAggregateInput
    _min?: tablesMinOrderByAggregateInput
    _sum?: tablesSumOrderByAggregateInput
  }

  export type tablesScalarWhereWithAggregatesInput = {
    AND?: tablesScalarWhereWithAggregatesInput | tablesScalarWhereWithAggregatesInput[]
    OR?: tablesScalarWhereWithAggregatesInput[]
    NOT?: tablesScalarWhereWithAggregatesInput | tablesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tables"> | number
    table_number?: IntWithAggregatesFilter<"tables"> | number
    qr_code_url?: StringNullableWithAggregatesFilter<"tables"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    role?: Enumusers_roleFilter<"users"> | $Enums.users_role
    created_at?: DateTimeFilter<"users"> | Date | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    role?: Enumusers_roleFilter<"users"> | $Enums.users_role
    created_at?: DateTimeFilter<"users"> | Date | string
  }, "id" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    role?: Enumusers_roleWithAggregatesFilter<"users"> | $Enums.users_role
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type categoriesCreateInput = {
    name: string
    menu_items?: menu_itemsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    name: string
    menu_items?: menu_itemsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    menu_items?: menu_itemsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    menu_items?: menu_itemsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    name: string
  }

  export type categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type feedbackCreateInput = {
    rating?: number | null
    review_text?: string | null
    created_at?: Date | string
    orders: ordersCreateNestedOneWithoutFeedbackInput
    menu_items: menu_itemsCreateNestedOneWithoutFeedbackInput
  }

  export type feedbackUncheckedCreateInput = {
    id?: number
    order_id: number
    menu_item_id: number
    rating?: number | null
    review_text?: string | null
    created_at?: Date | string
  }

  export type feedbackUpdateInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateOneRequiredWithoutFeedbackNestedInput
    menu_items?: menu_itemsUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type feedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbackCreateManyInput = {
    id?: number
    order_id: number
    menu_item_id: number
    rating?: number | null
    review_text?: string | null
    created_at?: Date | string
  }

  export type feedbackUpdateManyMutationInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type legacy_print_queueCreateInput = {
    table_number: number
    total_amount: Decimal | DecimalJsLike | number | string
    status_print?: $Enums.legacy_print_queue_status_print | null
    created_at?: Date | string
    orders: ordersCreateNestedOneWithoutLegacy_print_queueInput
  }

  export type legacy_print_queueUncheckedCreateInput = {
    id?: number
    order_id_pwa: number
    table_number: number
    total_amount: Decimal | DecimalJsLike | number | string
    status_print?: $Enums.legacy_print_queue_status_print | null
    created_at?: Date | string
  }

  export type legacy_print_queueUpdateInput = {
    table_number?: IntFieldUpdateOperationsInput | number
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status_print?: NullableEnumlegacy_print_queue_status_printFieldUpdateOperationsInput | $Enums.legacy_print_queue_status_print | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateOneRequiredWithoutLegacy_print_queueNestedInput
  }

  export type legacy_print_queueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id_pwa?: IntFieldUpdateOperationsInput | number
    table_number?: IntFieldUpdateOperationsInput | number
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status_print?: NullableEnumlegacy_print_queue_status_printFieldUpdateOperationsInput | $Enums.legacy_print_queue_status_print | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type legacy_print_queueCreateManyInput = {
    id?: number
    order_id_pwa: number
    table_number: number
    total_amount: Decimal | DecimalJsLike | number | string
    status_print?: $Enums.legacy_print_queue_status_print | null
    created_at?: Date | string
  }

  export type legacy_print_queueUpdateManyMutationInput = {
    table_number?: IntFieldUpdateOperationsInput | number
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status_print?: NullableEnumlegacy_print_queue_status_printFieldUpdateOperationsInput | $Enums.legacy_print_queue_status_print | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type legacy_print_queueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id_pwa?: IntFieldUpdateOperationsInput | number
    table_number?: IntFieldUpdateOperationsInput | number
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status_print?: NullableEnumlegacy_print_queue_status_printFieldUpdateOperationsInput | $Enums.legacy_print_queue_status_print | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menu_itemsCreateInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    status?: $Enums.menu_items_status | null
    feedback?: feedbackCreateNestedManyWithoutMenu_itemsInput
    categories?: categoriesCreateNestedOneWithoutMenu_itemsInput
    order_items?: order_itemsCreateNestedManyWithoutMenu_itemsInput
    recipe_bom?: recipe_bomCreateNestedManyWithoutMenu_itemsInput
  }

  export type menu_itemsUncheckedCreateInput = {
    id?: number
    category_id?: number | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    status?: $Enums.menu_items_status | null
    feedback?: feedbackUncheckedCreateNestedManyWithoutMenu_itemsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutMenu_itemsInput
    recipe_bom?: recipe_bomUncheckedCreateNestedManyWithoutMenu_itemsInput
  }

  export type menu_itemsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnummenu_items_statusFieldUpdateOperationsInput | $Enums.menu_items_status | null
    feedback?: feedbackUpdateManyWithoutMenu_itemsNestedInput
    categories?: categoriesUpdateOneWithoutMenu_itemsNestedInput
    order_items?: order_itemsUpdateManyWithoutMenu_itemsNestedInput
    recipe_bom?: recipe_bomUpdateManyWithoutMenu_itemsNestedInput
  }

  export type menu_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnummenu_items_statusFieldUpdateOperationsInput | $Enums.menu_items_status | null
    feedback?: feedbackUncheckedUpdateManyWithoutMenu_itemsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutMenu_itemsNestedInput
    recipe_bom?: recipe_bomUncheckedUpdateManyWithoutMenu_itemsNestedInput
  }

  export type menu_itemsCreateManyInput = {
    id?: number
    category_id?: number | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    status?: $Enums.menu_items_status | null
  }

  export type menu_itemsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnummenu_items_statusFieldUpdateOperationsInput | $Enums.menu_items_status | null
  }

  export type menu_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnummenu_items_statusFieldUpdateOperationsInput | $Enums.menu_items_status | null
  }

  export type order_itemsCreateInput = {
    quantity: number
    notes?: string | null
    orders: ordersCreateNestedOneWithoutOrder_itemsInput
    menu_items: menu_itemsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateInput = {
    id?: number
    order_id: number
    menu_item_id: number
    quantity: number
    notes?: string | null
  }

  export type order_itemsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
    menu_items?: menu_itemsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_itemsCreateManyInput = {
    id?: number
    order_id: number
    menu_item_id: number
    quantity: number
    notes?: string | null
  }

  export type order_itemsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordersCreateInput = {
    status?: $Enums.orders_status | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    final_total?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    feedback?: feedbackCreateNestedManyWithoutOrdersInput
    legacy_print_queue?: legacy_print_queueCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    tables: tablesCreateNestedOneWithoutOrdersInput
    promotions?: promotionsCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    table_id: number
    status?: $Enums.orders_status | null
    subtotal?: Decimal | DecimalJsLike | number | string
    promo_id?: number | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    final_total?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    feedback?: feedbackUncheckedCreateNestedManyWithoutOrdersInput
    legacy_print_queue?: legacy_print_queueUncheckedCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: feedbackUpdateManyWithoutOrdersNestedInput
    legacy_print_queue?: legacy_print_queueUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    tables?: tablesUpdateOneRequiredWithoutOrdersNestedInput
    promotions?: promotionsUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    promo_id?: NullableIntFieldUpdateOperationsInput | number | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: feedbackUncheckedUpdateManyWithoutOrdersNestedInput
    legacy_print_queue?: legacy_print_queueUncheckedUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    id?: number
    table_id: number
    status?: $Enums.orders_status | null
    subtotal?: Decimal | DecimalJsLike | number | string
    promo_id?: number | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    final_total?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type ordersUpdateManyMutationInput = {
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    promo_id?: NullableIntFieldUpdateOperationsInput | number | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type promotionsCreateInput = {
    name: string
    type: $Enums.promotions_type
    value: Decimal | DecimalJsLike | number | string
    min_purchase?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean | null
    orders?: ordersCreateNestedManyWithoutPromotionsInput
  }

  export type promotionsUncheckedCreateInput = {
    id?: number
    name: string
    type: $Enums.promotions_type
    value: Decimal | DecimalJsLike | number | string
    min_purchase?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean | null
    orders?: ordersUncheckedCreateNestedManyWithoutPromotionsInput
  }

  export type promotionsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumpromotions_typeFieldUpdateOperationsInput | $Enums.promotions_type
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_purchase?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    orders?: ordersUpdateManyWithoutPromotionsNestedInput
  }

  export type promotionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumpromotions_typeFieldUpdateOperationsInput | $Enums.promotions_type
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_purchase?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    orders?: ordersUncheckedUpdateManyWithoutPromotionsNestedInput
  }

  export type promotionsCreateManyInput = {
    id?: number
    name: string
    type: $Enums.promotions_type
    value: Decimal | DecimalJsLike | number | string
    min_purchase?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean | null
  }

  export type promotionsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumpromotions_typeFieldUpdateOperationsInput | $Enums.promotions_type
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_purchase?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type promotionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumpromotions_typeFieldUpdateOperationsInput | $Enums.promotions_type
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_purchase?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type raw_materialsCreateInput = {
    name: string
    unit: $Enums.raw_materials_unit
    current_stock?: Decimal | DecimalJsLike | number | string
    min_stock_alert?: Decimal | DecimalJsLike | number | string
    recipe_bom?: recipe_bomCreateNestedManyWithoutRaw_materialsInput
  }

  export type raw_materialsUncheckedCreateInput = {
    id?: number
    name: string
    unit: $Enums.raw_materials_unit
    current_stock?: Decimal | DecimalJsLike | number | string
    min_stock_alert?: Decimal | DecimalJsLike | number | string
    recipe_bom?: recipe_bomUncheckedCreateNestedManyWithoutRaw_materialsInput
  }

  export type raw_materialsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: Enumraw_materials_unitFieldUpdateOperationsInput | $Enums.raw_materials_unit
    current_stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_stock_alert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    recipe_bom?: recipe_bomUpdateManyWithoutRaw_materialsNestedInput
  }

  export type raw_materialsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: Enumraw_materials_unitFieldUpdateOperationsInput | $Enums.raw_materials_unit
    current_stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_stock_alert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    recipe_bom?: recipe_bomUncheckedUpdateManyWithoutRaw_materialsNestedInput
  }

  export type raw_materialsCreateManyInput = {
    id?: number
    name: string
    unit: $Enums.raw_materials_unit
    current_stock?: Decimal | DecimalJsLike | number | string
    min_stock_alert?: Decimal | DecimalJsLike | number | string
  }

  export type raw_materialsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: Enumraw_materials_unitFieldUpdateOperationsInput | $Enums.raw_materials_unit
    current_stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_stock_alert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type raw_materialsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: Enumraw_materials_unitFieldUpdateOperationsInput | $Enums.raw_materials_unit
    current_stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_stock_alert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type recipe_bomCreateInput = {
    quantity_required: Decimal | DecimalJsLike | number | string
    menu_items: menu_itemsCreateNestedOneWithoutRecipe_bomInput
    raw_materials: raw_materialsCreateNestedOneWithoutRecipe_bomInput
  }

  export type recipe_bomUncheckedCreateInput = {
    id?: number
    menu_item_id: number
    raw_material_id: number
    quantity_required: Decimal | DecimalJsLike | number | string
  }

  export type recipe_bomUpdateInput = {
    quantity_required?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menu_items?: menu_itemsUpdateOneRequiredWithoutRecipe_bomNestedInput
    raw_materials?: raw_materialsUpdateOneRequiredWithoutRecipe_bomNestedInput
  }

  export type recipe_bomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    raw_material_id?: IntFieldUpdateOperationsInput | number
    quantity_required?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type recipe_bomCreateManyInput = {
    id?: number
    menu_item_id: number
    raw_material_id: number
    quantity_required: Decimal | DecimalJsLike | number | string
  }

  export type recipe_bomUpdateManyMutationInput = {
    quantity_required?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type recipe_bomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    raw_material_id?: IntFieldUpdateOperationsInput | number
    quantity_required?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type reservationsCreateInput = {
    customer_name: string
    customer_phone: string
    reservation_date: Date | string
    pax_count: number
    buffer_pax?: number | null
    budget_type?: $Enums.reservations_budget_type | null
    status?: $Enums.reservations_status | null
    created_at?: Date | string
  }

  export type reservationsUncheckedCreateInput = {
    id?: number
    customer_name: string
    customer_phone: string
    reservation_date: Date | string
    pax_count: number
    buffer_pax?: number | null
    budget_type?: $Enums.reservations_budget_type | null
    status?: $Enums.reservations_status | null
    created_at?: Date | string
  }

  export type reservationsUpdateInput = {
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_phone?: StringFieldUpdateOperationsInput | string
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pax_count?: IntFieldUpdateOperationsInput | number
    buffer_pax?: NullableIntFieldUpdateOperationsInput | number | null
    budget_type?: NullableEnumreservations_budget_typeFieldUpdateOperationsInput | $Enums.reservations_budget_type | null
    status?: NullableEnumreservations_statusFieldUpdateOperationsInput | $Enums.reservations_status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_phone?: StringFieldUpdateOperationsInput | string
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pax_count?: IntFieldUpdateOperationsInput | number
    buffer_pax?: NullableIntFieldUpdateOperationsInput | number | null
    budget_type?: NullableEnumreservations_budget_typeFieldUpdateOperationsInput | $Enums.reservations_budget_type | null
    status?: NullableEnumreservations_statusFieldUpdateOperationsInput | $Enums.reservations_status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservationsCreateManyInput = {
    id?: number
    customer_name: string
    customer_phone: string
    reservation_date: Date | string
    pax_count: number
    buffer_pax?: number | null
    budget_type?: $Enums.reservations_budget_type | null
    status?: $Enums.reservations_status | null
    created_at?: Date | string
  }

  export type reservationsUpdateManyMutationInput = {
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_phone?: StringFieldUpdateOperationsInput | string
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pax_count?: IntFieldUpdateOperationsInput | number
    buffer_pax?: NullableIntFieldUpdateOperationsInput | number | null
    budget_type?: NullableEnumreservations_budget_typeFieldUpdateOperationsInput | $Enums.reservations_budget_type | null
    status?: NullableEnumreservations_statusFieldUpdateOperationsInput | $Enums.reservations_status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_phone?: StringFieldUpdateOperationsInput | string
    reservation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pax_count?: IntFieldUpdateOperationsInput | number
    buffer_pax?: NullableIntFieldUpdateOperationsInput | number | null
    budget_type?: NullableEnumreservations_budget_typeFieldUpdateOperationsInput | $Enums.reservations_budget_type | null
    status?: NullableEnumreservations_statusFieldUpdateOperationsInput | $Enums.reservations_status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tablesCreateInput = {
    table_number: number
    qr_code_url?: string | null
    orders?: ordersCreateNestedManyWithoutTablesInput
  }

  export type tablesUncheckedCreateInput = {
    id?: number
    table_number: number
    qr_code_url?: string | null
    orders?: ordersUncheckedCreateNestedManyWithoutTablesInput
  }

  export type tablesUpdateInput = {
    table_number?: IntFieldUpdateOperationsInput | number
    qr_code_url?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUpdateManyWithoutTablesNestedInput
  }

  export type tablesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_number?: IntFieldUpdateOperationsInput | number
    qr_code_url?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUncheckedUpdateManyWithoutTablesNestedInput
  }

  export type tablesCreateManyInput = {
    id?: number
    table_number: number
    qr_code_url?: string | null
  }

  export type tablesUpdateManyMutationInput = {
    table_number?: IntFieldUpdateOperationsInput | number
    qr_code_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tablesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_number?: IntFieldUpdateOperationsInput | number
    qr_code_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    username: string
    password_hash: string
    role: $Enums.users_role
    created_at?: Date | string
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    password_hash: string
    role: $Enums.users_role
    created_at?: Date | string
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    password_hash: string
    role: $Enums.users_role
    created_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Menu_itemsListRelationFilter = {
    every?: menu_itemsWhereInput
    some?: menu_itemsWhereInput
    none?: menu_itemsWhereInput
  }

  export type menu_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesOrderByRelevanceInput = {
    fields: categoriesOrderByRelevanceFieldEnum | categoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrdersScalarRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type Menu_itemsScalarRelationFilter = {
    is?: menu_itemsWhereInput
    isNot?: menu_itemsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type feedbackOrderByRelevanceInput = {
    fields: feedbackOrderByRelevanceFieldEnum | feedbackOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type feedbackCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    rating?: SortOrder
    review_text?: SortOrder
    created_at?: SortOrder
  }

  export type feedbackAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    rating?: SortOrder
  }

  export type feedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    rating?: SortOrder
    review_text?: SortOrder
    created_at?: SortOrder
  }

  export type feedbackMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    rating?: SortOrder
    review_text?: SortOrder
    created_at?: SortOrder
  }

  export type feedbackSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    rating?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Enumlegacy_print_queue_status_printNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.legacy_print_queue_status_print | Enumlegacy_print_queue_status_printFieldRefInput<$PrismaModel> | null
    in?: $Enums.legacy_print_queue_status_print[] | null
    notIn?: $Enums.legacy_print_queue_status_print[] | null
    not?: NestedEnumlegacy_print_queue_status_printNullableFilter<$PrismaModel> | $Enums.legacy_print_queue_status_print | null
  }

  export type legacy_print_queueCountOrderByAggregateInput = {
    id?: SortOrder
    order_id_pwa?: SortOrder
    table_number?: SortOrder
    total_amount?: SortOrder
    status_print?: SortOrder
    created_at?: SortOrder
  }

  export type legacy_print_queueAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id_pwa?: SortOrder
    table_number?: SortOrder
    total_amount?: SortOrder
  }

  export type legacy_print_queueMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id_pwa?: SortOrder
    table_number?: SortOrder
    total_amount?: SortOrder
    status_print?: SortOrder
    created_at?: SortOrder
  }

  export type legacy_print_queueMinOrderByAggregateInput = {
    id?: SortOrder
    order_id_pwa?: SortOrder
    table_number?: SortOrder
    total_amount?: SortOrder
    status_print?: SortOrder
    created_at?: SortOrder
  }

  export type legacy_print_queueSumOrderByAggregateInput = {
    id?: SortOrder
    order_id_pwa?: SortOrder
    table_number?: SortOrder
    total_amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Enumlegacy_print_queue_status_printNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.legacy_print_queue_status_print | Enumlegacy_print_queue_status_printFieldRefInput<$PrismaModel> | null
    in?: $Enums.legacy_print_queue_status_print[] | null
    notIn?: $Enums.legacy_print_queue_status_print[] | null
    not?: NestedEnumlegacy_print_queue_status_printNullableWithAggregatesFilter<$PrismaModel> | $Enums.legacy_print_queue_status_print | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumlegacy_print_queue_status_printNullableFilter<$PrismaModel>
    _max?: NestedEnumlegacy_print_queue_status_printNullableFilter<$PrismaModel>
  }

  export type Enummenu_items_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.menu_items_status | Enummenu_items_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.menu_items_status[] | null
    notIn?: $Enums.menu_items_status[] | null
    not?: NestedEnummenu_items_statusNullableFilter<$PrismaModel> | $Enums.menu_items_status | null
  }

  export type FeedbackListRelationFilter = {
    every?: feedbackWhereInput
    some?: feedbackWhereInput
    none?: feedbackWhereInput
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: categoriesWhereInput | null
    isNot?: categoriesWhereInput | null
  }

  export type Order_itemsListRelationFilter = {
    every?: order_itemsWhereInput
    some?: order_itemsWhereInput
    none?: order_itemsWhereInput
  }

  export type Recipe_bomListRelationFilter = {
    every?: recipe_bomWhereInput
    some?: recipe_bomWhereInput
    none?: recipe_bomWhereInput
  }

  export type feedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type order_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type recipe_bomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type menu_itemsOrderByRelevanceInput = {
    fields: menu_itemsOrderByRelevanceFieldEnum | menu_itemsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type menu_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
  }

  export type menu_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
  }

  export type menu_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
  }

  export type menu_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
    status?: SortOrder
  }

  export type menu_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
  }

  export type Enummenu_items_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.menu_items_status | Enummenu_items_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.menu_items_status[] | null
    notIn?: $Enums.menu_items_status[] | null
    not?: NestedEnummenu_items_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.menu_items_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummenu_items_statusNullableFilter<$PrismaModel>
    _max?: NestedEnummenu_items_statusNullableFilter<$PrismaModel>
  }

  export type order_itemsOrderByRelevanceInput = {
    fields: order_itemsOrderByRelevanceFieldEnum | order_itemsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type order_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
  }

  export type order_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
  }

  export type order_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
  }

  export type order_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
  }

  export type order_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    menu_item_id?: SortOrder
    quantity?: SortOrder
  }

  export type Enumorders_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_status | Enumorders_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orders_status[] | null
    notIn?: $Enums.orders_status[] | null
    not?: NestedEnumorders_statusNullableFilter<$PrismaModel> | $Enums.orders_status | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Legacy_print_queueListRelationFilter = {
    every?: legacy_print_queueWhereInput
    some?: legacy_print_queueWhereInput
    none?: legacy_print_queueWhereInput
  }

  export type TablesScalarRelationFilter = {
    is?: tablesWhereInput
    isNot?: tablesWhereInput
  }

  export type PromotionsNullableScalarRelationFilter = {
    is?: promotionsWhereInput | null
    isNot?: promotionsWhereInput | null
  }

  export type legacy_print_queueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    table_id?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    promo_id?: SortOrder
    discount_amount?: SortOrder
    final_total?: SortOrder
    created_at?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    table_id?: SortOrder
    subtotal?: SortOrder
    promo_id?: SortOrder
    discount_amount?: SortOrder
    final_total?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    table_id?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    promo_id?: SortOrder
    discount_amount?: SortOrder
    final_total?: SortOrder
    created_at?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    table_id?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    promo_id?: SortOrder
    discount_amount?: SortOrder
    final_total?: SortOrder
    created_at?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
    table_id?: SortOrder
    subtotal?: SortOrder
    promo_id?: SortOrder
    discount_amount?: SortOrder
    final_total?: SortOrder
  }

  export type Enumorders_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_status | Enumorders_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orders_status[] | null
    notIn?: $Enums.orders_status[] | null
    not?: NestedEnumorders_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.orders_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumorders_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumorders_statusNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Enumpromotions_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.promotions_type | Enumpromotions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.promotions_type[]
    notIn?: $Enums.promotions_type[]
    not?: NestedEnumpromotions_typeFilter<$PrismaModel> | $Enums.promotions_type
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type promotionsOrderByRelevanceInput = {
    fields: promotionsOrderByRelevanceFieldEnum | promotionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type promotionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
    min_purchase?: SortOrder
    is_active?: SortOrder
  }

  export type promotionsAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    min_purchase?: SortOrder
  }

  export type promotionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
    min_purchase?: SortOrder
    is_active?: SortOrder
  }

  export type promotionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    value?: SortOrder
    min_purchase?: SortOrder
    is_active?: SortOrder
  }

  export type promotionsSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    min_purchase?: SortOrder
  }

  export type Enumpromotions_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.promotions_type | Enumpromotions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.promotions_type[]
    notIn?: $Enums.promotions_type[]
    not?: NestedEnumpromotions_typeWithAggregatesFilter<$PrismaModel> | $Enums.promotions_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpromotions_typeFilter<$PrismaModel>
    _max?: NestedEnumpromotions_typeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Enumraw_materials_unitFilter<$PrismaModel = never> = {
    equals?: $Enums.raw_materials_unit | Enumraw_materials_unitFieldRefInput<$PrismaModel>
    in?: $Enums.raw_materials_unit[]
    notIn?: $Enums.raw_materials_unit[]
    not?: NestedEnumraw_materials_unitFilter<$PrismaModel> | $Enums.raw_materials_unit
  }

  export type raw_materialsOrderByRelevanceInput = {
    fields: raw_materialsOrderByRelevanceFieldEnum | raw_materialsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type raw_materialsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    current_stock?: SortOrder
    min_stock_alert?: SortOrder
  }

  export type raw_materialsAvgOrderByAggregateInput = {
    id?: SortOrder
    current_stock?: SortOrder
    min_stock_alert?: SortOrder
  }

  export type raw_materialsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    current_stock?: SortOrder
    min_stock_alert?: SortOrder
  }

  export type raw_materialsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
    current_stock?: SortOrder
    min_stock_alert?: SortOrder
  }

  export type raw_materialsSumOrderByAggregateInput = {
    id?: SortOrder
    current_stock?: SortOrder
    min_stock_alert?: SortOrder
  }

  export type Enumraw_materials_unitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.raw_materials_unit | Enumraw_materials_unitFieldRefInput<$PrismaModel>
    in?: $Enums.raw_materials_unit[]
    notIn?: $Enums.raw_materials_unit[]
    not?: NestedEnumraw_materials_unitWithAggregatesFilter<$PrismaModel> | $Enums.raw_materials_unit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumraw_materials_unitFilter<$PrismaModel>
    _max?: NestedEnumraw_materials_unitFilter<$PrismaModel>
  }

  export type Raw_materialsScalarRelationFilter = {
    is?: raw_materialsWhereInput
    isNot?: raw_materialsWhereInput
  }

  export type recipe_bomCountOrderByAggregateInput = {
    id?: SortOrder
    menu_item_id?: SortOrder
    raw_material_id?: SortOrder
    quantity_required?: SortOrder
  }

  export type recipe_bomAvgOrderByAggregateInput = {
    id?: SortOrder
    menu_item_id?: SortOrder
    raw_material_id?: SortOrder
    quantity_required?: SortOrder
  }

  export type recipe_bomMaxOrderByAggregateInput = {
    id?: SortOrder
    menu_item_id?: SortOrder
    raw_material_id?: SortOrder
    quantity_required?: SortOrder
  }

  export type recipe_bomMinOrderByAggregateInput = {
    id?: SortOrder
    menu_item_id?: SortOrder
    raw_material_id?: SortOrder
    quantity_required?: SortOrder
  }

  export type recipe_bomSumOrderByAggregateInput = {
    id?: SortOrder
    menu_item_id?: SortOrder
    raw_material_id?: SortOrder
    quantity_required?: SortOrder
  }

  export type Enumreservations_budget_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.reservations_budget_type | Enumreservations_budget_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.reservations_budget_type[] | null
    notIn?: $Enums.reservations_budget_type[] | null
    not?: NestedEnumreservations_budget_typeNullableFilter<$PrismaModel> | $Enums.reservations_budget_type | null
  }

  export type Enumreservations_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.reservations_status | Enumreservations_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.reservations_status[] | null
    notIn?: $Enums.reservations_status[] | null
    not?: NestedEnumreservations_statusNullableFilter<$PrismaModel> | $Enums.reservations_status | null
  }

  export type reservationsOrderByRelevanceInput = {
    fields: reservationsOrderByRelevanceFieldEnum | reservationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type reservationsCountOrderByAggregateInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_phone?: SortOrder
    reservation_date?: SortOrder
    pax_count?: SortOrder
    buffer_pax?: SortOrder
    budget_type?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type reservationsAvgOrderByAggregateInput = {
    id?: SortOrder
    pax_count?: SortOrder
    buffer_pax?: SortOrder
  }

  export type reservationsMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_phone?: SortOrder
    reservation_date?: SortOrder
    pax_count?: SortOrder
    buffer_pax?: SortOrder
    budget_type?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type reservationsMinOrderByAggregateInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_phone?: SortOrder
    reservation_date?: SortOrder
    pax_count?: SortOrder
    buffer_pax?: SortOrder
    budget_type?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type reservationsSumOrderByAggregateInput = {
    id?: SortOrder
    pax_count?: SortOrder
    buffer_pax?: SortOrder
  }

  export type Enumreservations_budget_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reservations_budget_type | Enumreservations_budget_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.reservations_budget_type[] | null
    notIn?: $Enums.reservations_budget_type[] | null
    not?: NestedEnumreservations_budget_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.reservations_budget_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumreservations_budget_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumreservations_budget_typeNullableFilter<$PrismaModel>
  }

  export type Enumreservations_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reservations_status | Enumreservations_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.reservations_status[] | null
    notIn?: $Enums.reservations_status[] | null
    not?: NestedEnumreservations_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.reservations_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumreservations_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumreservations_statusNullableFilter<$PrismaModel>
  }

  export type tablesOrderByRelevanceInput = {
    fields: tablesOrderByRelevanceFieldEnum | tablesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tablesCountOrderByAggregateInput = {
    id?: SortOrder
    table_number?: SortOrder
    qr_code_url?: SortOrder
  }

  export type tablesAvgOrderByAggregateInput = {
    id?: SortOrder
    table_number?: SortOrder
  }

  export type tablesMaxOrderByAggregateInput = {
    id?: SortOrder
    table_number?: SortOrder
    qr_code_url?: SortOrder
  }

  export type tablesMinOrderByAggregateInput = {
    id?: SortOrder
    table_number?: SortOrder
    qr_code_url?: SortOrder
  }

  export type tablesSumOrderByAggregateInput = {
    id?: SortOrder
    table_number?: SortOrder
  }

  export type Enumusers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleFilter<$PrismaModel> | $Enums.users_role
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumusers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleWithAggregatesFilter<$PrismaModel> | $Enums.users_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_roleFilter<$PrismaModel>
    _max?: NestedEnumusers_roleFilter<$PrismaModel>
  }

  export type menu_itemsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<menu_itemsCreateWithoutCategoriesInput, menu_itemsUncheckedCreateWithoutCategoriesInput> | menu_itemsCreateWithoutCategoriesInput[] | menu_itemsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: menu_itemsCreateOrConnectWithoutCategoriesInput | menu_itemsCreateOrConnectWithoutCategoriesInput[]
    createMany?: menu_itemsCreateManyCategoriesInputEnvelope
    connect?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
  }

  export type menu_itemsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<menu_itemsCreateWithoutCategoriesInput, menu_itemsUncheckedCreateWithoutCategoriesInput> | menu_itemsCreateWithoutCategoriesInput[] | menu_itemsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: menu_itemsCreateOrConnectWithoutCategoriesInput | menu_itemsCreateOrConnectWithoutCategoriesInput[]
    createMany?: menu_itemsCreateManyCategoriesInputEnvelope
    connect?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type menu_itemsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<menu_itemsCreateWithoutCategoriesInput, menu_itemsUncheckedCreateWithoutCategoriesInput> | menu_itemsCreateWithoutCategoriesInput[] | menu_itemsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: menu_itemsCreateOrConnectWithoutCategoriesInput | menu_itemsCreateOrConnectWithoutCategoriesInput[]
    upsert?: menu_itemsUpsertWithWhereUniqueWithoutCategoriesInput | menu_itemsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: menu_itemsCreateManyCategoriesInputEnvelope
    set?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
    disconnect?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
    delete?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
    connect?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
    update?: menu_itemsUpdateWithWhereUniqueWithoutCategoriesInput | menu_itemsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: menu_itemsUpdateManyWithWhereWithoutCategoriesInput | menu_itemsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: menu_itemsScalarWhereInput | menu_itemsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type menu_itemsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<menu_itemsCreateWithoutCategoriesInput, menu_itemsUncheckedCreateWithoutCategoriesInput> | menu_itemsCreateWithoutCategoriesInput[] | menu_itemsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: menu_itemsCreateOrConnectWithoutCategoriesInput | menu_itemsCreateOrConnectWithoutCategoriesInput[]
    upsert?: menu_itemsUpsertWithWhereUniqueWithoutCategoriesInput | menu_itemsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: menu_itemsCreateManyCategoriesInputEnvelope
    set?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
    disconnect?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
    delete?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
    connect?: menu_itemsWhereUniqueInput | menu_itemsWhereUniqueInput[]
    update?: menu_itemsUpdateWithWhereUniqueWithoutCategoriesInput | menu_itemsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: menu_itemsUpdateManyWithWhereWithoutCategoriesInput | menu_itemsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: menu_itemsScalarWhereInput | menu_itemsScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<ordersCreateWithoutFeedbackInput, ordersUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: ordersCreateOrConnectWithoutFeedbackInput
    connect?: ordersWhereUniqueInput
  }

  export type menu_itemsCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<menu_itemsCreateWithoutFeedbackInput, menu_itemsUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: menu_itemsCreateOrConnectWithoutFeedbackInput
    connect?: menu_itemsWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ordersUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<ordersCreateWithoutFeedbackInput, ordersUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: ordersCreateOrConnectWithoutFeedbackInput
    upsert?: ordersUpsertWithoutFeedbackInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutFeedbackInput, ordersUpdateWithoutFeedbackInput>, ordersUncheckedUpdateWithoutFeedbackInput>
  }

  export type menu_itemsUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<menu_itemsCreateWithoutFeedbackInput, menu_itemsUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: menu_itemsCreateOrConnectWithoutFeedbackInput
    upsert?: menu_itemsUpsertWithoutFeedbackInput
    connect?: menu_itemsWhereUniqueInput
    update?: XOR<XOR<menu_itemsUpdateToOneWithWhereWithoutFeedbackInput, menu_itemsUpdateWithoutFeedbackInput>, menu_itemsUncheckedUpdateWithoutFeedbackInput>
  }

  export type ordersCreateNestedOneWithoutLegacy_print_queueInput = {
    create?: XOR<ordersCreateWithoutLegacy_print_queueInput, ordersUncheckedCreateWithoutLegacy_print_queueInput>
    connectOrCreate?: ordersCreateOrConnectWithoutLegacy_print_queueInput
    connect?: ordersWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableEnumlegacy_print_queue_status_printFieldUpdateOperationsInput = {
    set?: $Enums.legacy_print_queue_status_print | null
  }

  export type ordersUpdateOneRequiredWithoutLegacy_print_queueNestedInput = {
    create?: XOR<ordersCreateWithoutLegacy_print_queueInput, ordersUncheckedCreateWithoutLegacy_print_queueInput>
    connectOrCreate?: ordersCreateOrConnectWithoutLegacy_print_queueInput
    upsert?: ordersUpsertWithoutLegacy_print_queueInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutLegacy_print_queueInput, ordersUpdateWithoutLegacy_print_queueInput>, ordersUncheckedUpdateWithoutLegacy_print_queueInput>
  }

  export type feedbackCreateNestedManyWithoutMenu_itemsInput = {
    create?: XOR<feedbackCreateWithoutMenu_itemsInput, feedbackUncheckedCreateWithoutMenu_itemsInput> | feedbackCreateWithoutMenu_itemsInput[] | feedbackUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: feedbackCreateOrConnectWithoutMenu_itemsInput | feedbackCreateOrConnectWithoutMenu_itemsInput[]
    createMany?: feedbackCreateManyMenu_itemsInputEnvelope
    connect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
  }

  export type categoriesCreateNestedOneWithoutMenu_itemsInput = {
    create?: XOR<categoriesCreateWithoutMenu_itemsInput, categoriesUncheckedCreateWithoutMenu_itemsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutMenu_itemsInput
    connect?: categoriesWhereUniqueInput
  }

  export type order_itemsCreateNestedManyWithoutMenu_itemsInput = {
    create?: XOR<order_itemsCreateWithoutMenu_itemsInput, order_itemsUncheckedCreateWithoutMenu_itemsInput> | order_itemsCreateWithoutMenu_itemsInput[] | order_itemsUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutMenu_itemsInput | order_itemsCreateOrConnectWithoutMenu_itemsInput[]
    createMany?: order_itemsCreateManyMenu_itemsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type recipe_bomCreateNestedManyWithoutMenu_itemsInput = {
    create?: XOR<recipe_bomCreateWithoutMenu_itemsInput, recipe_bomUncheckedCreateWithoutMenu_itemsInput> | recipe_bomCreateWithoutMenu_itemsInput[] | recipe_bomUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: recipe_bomCreateOrConnectWithoutMenu_itemsInput | recipe_bomCreateOrConnectWithoutMenu_itemsInput[]
    createMany?: recipe_bomCreateManyMenu_itemsInputEnvelope
    connect?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
  }

  export type feedbackUncheckedCreateNestedManyWithoutMenu_itemsInput = {
    create?: XOR<feedbackCreateWithoutMenu_itemsInput, feedbackUncheckedCreateWithoutMenu_itemsInput> | feedbackCreateWithoutMenu_itemsInput[] | feedbackUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: feedbackCreateOrConnectWithoutMenu_itemsInput | feedbackCreateOrConnectWithoutMenu_itemsInput[]
    createMany?: feedbackCreateManyMenu_itemsInputEnvelope
    connect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
  }

  export type order_itemsUncheckedCreateNestedManyWithoutMenu_itemsInput = {
    create?: XOR<order_itemsCreateWithoutMenu_itemsInput, order_itemsUncheckedCreateWithoutMenu_itemsInput> | order_itemsCreateWithoutMenu_itemsInput[] | order_itemsUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutMenu_itemsInput | order_itemsCreateOrConnectWithoutMenu_itemsInput[]
    createMany?: order_itemsCreateManyMenu_itemsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type recipe_bomUncheckedCreateNestedManyWithoutMenu_itemsInput = {
    create?: XOR<recipe_bomCreateWithoutMenu_itemsInput, recipe_bomUncheckedCreateWithoutMenu_itemsInput> | recipe_bomCreateWithoutMenu_itemsInput[] | recipe_bomUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: recipe_bomCreateOrConnectWithoutMenu_itemsInput | recipe_bomCreateOrConnectWithoutMenu_itemsInput[]
    createMany?: recipe_bomCreateManyMenu_itemsInputEnvelope
    connect?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
  }

  export type NullableEnummenu_items_statusFieldUpdateOperationsInput = {
    set?: $Enums.menu_items_status | null
  }

  export type feedbackUpdateManyWithoutMenu_itemsNestedInput = {
    create?: XOR<feedbackCreateWithoutMenu_itemsInput, feedbackUncheckedCreateWithoutMenu_itemsInput> | feedbackCreateWithoutMenu_itemsInput[] | feedbackUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: feedbackCreateOrConnectWithoutMenu_itemsInput | feedbackCreateOrConnectWithoutMenu_itemsInput[]
    upsert?: feedbackUpsertWithWhereUniqueWithoutMenu_itemsInput | feedbackUpsertWithWhereUniqueWithoutMenu_itemsInput[]
    createMany?: feedbackCreateManyMenu_itemsInputEnvelope
    set?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    disconnect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    delete?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    connect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    update?: feedbackUpdateWithWhereUniqueWithoutMenu_itemsInput | feedbackUpdateWithWhereUniqueWithoutMenu_itemsInput[]
    updateMany?: feedbackUpdateManyWithWhereWithoutMenu_itemsInput | feedbackUpdateManyWithWhereWithoutMenu_itemsInput[]
    deleteMany?: feedbackScalarWhereInput | feedbackScalarWhereInput[]
  }

  export type categoriesUpdateOneWithoutMenu_itemsNestedInput = {
    create?: XOR<categoriesCreateWithoutMenu_itemsInput, categoriesUncheckedCreateWithoutMenu_itemsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutMenu_itemsInput
    upsert?: categoriesUpsertWithoutMenu_itemsInput
    disconnect?: categoriesWhereInput | boolean
    delete?: categoriesWhereInput | boolean
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutMenu_itemsInput, categoriesUpdateWithoutMenu_itemsInput>, categoriesUncheckedUpdateWithoutMenu_itemsInput>
  }

  export type order_itemsUpdateManyWithoutMenu_itemsNestedInput = {
    create?: XOR<order_itemsCreateWithoutMenu_itemsInput, order_itemsUncheckedCreateWithoutMenu_itemsInput> | order_itemsCreateWithoutMenu_itemsInput[] | order_itemsUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutMenu_itemsInput | order_itemsCreateOrConnectWithoutMenu_itemsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutMenu_itemsInput | order_itemsUpsertWithWhereUniqueWithoutMenu_itemsInput[]
    createMany?: order_itemsCreateManyMenu_itemsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutMenu_itemsInput | order_itemsUpdateWithWhereUniqueWithoutMenu_itemsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutMenu_itemsInput | order_itemsUpdateManyWithWhereWithoutMenu_itemsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type recipe_bomUpdateManyWithoutMenu_itemsNestedInput = {
    create?: XOR<recipe_bomCreateWithoutMenu_itemsInput, recipe_bomUncheckedCreateWithoutMenu_itemsInput> | recipe_bomCreateWithoutMenu_itemsInput[] | recipe_bomUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: recipe_bomCreateOrConnectWithoutMenu_itemsInput | recipe_bomCreateOrConnectWithoutMenu_itemsInput[]
    upsert?: recipe_bomUpsertWithWhereUniqueWithoutMenu_itemsInput | recipe_bomUpsertWithWhereUniqueWithoutMenu_itemsInput[]
    createMany?: recipe_bomCreateManyMenu_itemsInputEnvelope
    set?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
    disconnect?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
    delete?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
    connect?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
    update?: recipe_bomUpdateWithWhereUniqueWithoutMenu_itemsInput | recipe_bomUpdateWithWhereUniqueWithoutMenu_itemsInput[]
    updateMany?: recipe_bomUpdateManyWithWhereWithoutMenu_itemsInput | recipe_bomUpdateManyWithWhereWithoutMenu_itemsInput[]
    deleteMany?: recipe_bomScalarWhereInput | recipe_bomScalarWhereInput[]
  }

  export type feedbackUncheckedUpdateManyWithoutMenu_itemsNestedInput = {
    create?: XOR<feedbackCreateWithoutMenu_itemsInput, feedbackUncheckedCreateWithoutMenu_itemsInput> | feedbackCreateWithoutMenu_itemsInput[] | feedbackUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: feedbackCreateOrConnectWithoutMenu_itemsInput | feedbackCreateOrConnectWithoutMenu_itemsInput[]
    upsert?: feedbackUpsertWithWhereUniqueWithoutMenu_itemsInput | feedbackUpsertWithWhereUniqueWithoutMenu_itemsInput[]
    createMany?: feedbackCreateManyMenu_itemsInputEnvelope
    set?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    disconnect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    delete?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    connect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    update?: feedbackUpdateWithWhereUniqueWithoutMenu_itemsInput | feedbackUpdateWithWhereUniqueWithoutMenu_itemsInput[]
    updateMany?: feedbackUpdateManyWithWhereWithoutMenu_itemsInput | feedbackUpdateManyWithWhereWithoutMenu_itemsInput[]
    deleteMany?: feedbackScalarWhereInput | feedbackScalarWhereInput[]
  }

  export type order_itemsUncheckedUpdateManyWithoutMenu_itemsNestedInput = {
    create?: XOR<order_itemsCreateWithoutMenu_itemsInput, order_itemsUncheckedCreateWithoutMenu_itemsInput> | order_itemsCreateWithoutMenu_itemsInput[] | order_itemsUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutMenu_itemsInput | order_itemsCreateOrConnectWithoutMenu_itemsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutMenu_itemsInput | order_itemsUpsertWithWhereUniqueWithoutMenu_itemsInput[]
    createMany?: order_itemsCreateManyMenu_itemsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutMenu_itemsInput | order_itemsUpdateWithWhereUniqueWithoutMenu_itemsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutMenu_itemsInput | order_itemsUpdateManyWithWhereWithoutMenu_itemsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type recipe_bomUncheckedUpdateManyWithoutMenu_itemsNestedInput = {
    create?: XOR<recipe_bomCreateWithoutMenu_itemsInput, recipe_bomUncheckedCreateWithoutMenu_itemsInput> | recipe_bomCreateWithoutMenu_itemsInput[] | recipe_bomUncheckedCreateWithoutMenu_itemsInput[]
    connectOrCreate?: recipe_bomCreateOrConnectWithoutMenu_itemsInput | recipe_bomCreateOrConnectWithoutMenu_itemsInput[]
    upsert?: recipe_bomUpsertWithWhereUniqueWithoutMenu_itemsInput | recipe_bomUpsertWithWhereUniqueWithoutMenu_itemsInput[]
    createMany?: recipe_bomCreateManyMenu_itemsInputEnvelope
    set?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
    disconnect?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
    delete?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
    connect?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
    update?: recipe_bomUpdateWithWhereUniqueWithoutMenu_itemsInput | recipe_bomUpdateWithWhereUniqueWithoutMenu_itemsInput[]
    updateMany?: recipe_bomUpdateManyWithWhereWithoutMenu_itemsInput | recipe_bomUpdateManyWithWhereWithoutMenu_itemsInput[]
    deleteMany?: recipe_bomScalarWhereInput | recipe_bomScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
  }

  export type menu_itemsCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<menu_itemsCreateWithoutOrder_itemsInput, menu_itemsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: menu_itemsCreateOrConnectWithoutOrder_itemsInput
    connect?: menu_itemsWhereUniqueInput
  }

  export type ordersUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    upsert?: ordersUpsertWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_itemsInput, ordersUpdateWithoutOrder_itemsInput>, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type menu_itemsUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<menu_itemsCreateWithoutOrder_itemsInput, menu_itemsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: menu_itemsCreateOrConnectWithoutOrder_itemsInput
    upsert?: menu_itemsUpsertWithoutOrder_itemsInput
    connect?: menu_itemsWhereUniqueInput
    update?: XOR<XOR<menu_itemsUpdateToOneWithWhereWithoutOrder_itemsInput, menu_itemsUpdateWithoutOrder_itemsInput>, menu_itemsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type feedbackCreateNestedManyWithoutOrdersInput = {
    create?: XOR<feedbackCreateWithoutOrdersInput, feedbackUncheckedCreateWithoutOrdersInput> | feedbackCreateWithoutOrdersInput[] | feedbackUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: feedbackCreateOrConnectWithoutOrdersInput | feedbackCreateOrConnectWithoutOrdersInput[]
    createMany?: feedbackCreateManyOrdersInputEnvelope
    connect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
  }

  export type legacy_print_queueCreateNestedManyWithoutOrdersInput = {
    create?: XOR<legacy_print_queueCreateWithoutOrdersInput, legacy_print_queueUncheckedCreateWithoutOrdersInput> | legacy_print_queueCreateWithoutOrdersInput[] | legacy_print_queueUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: legacy_print_queueCreateOrConnectWithoutOrdersInput | legacy_print_queueCreateOrConnectWithoutOrdersInput[]
    createMany?: legacy_print_queueCreateManyOrdersInputEnvelope
    connect?: legacy_print_queueWhereUniqueInput | legacy_print_queueWhereUniqueInput[]
  }

  export type order_itemsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type tablesCreateNestedOneWithoutOrdersInput = {
    create?: XOR<tablesCreateWithoutOrdersInput, tablesUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: tablesCreateOrConnectWithoutOrdersInput
    connect?: tablesWhereUniqueInput
  }

  export type promotionsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<promotionsCreateWithoutOrdersInput, promotionsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: promotionsCreateOrConnectWithoutOrdersInput
    connect?: promotionsWhereUniqueInput
  }

  export type feedbackUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<feedbackCreateWithoutOrdersInput, feedbackUncheckedCreateWithoutOrdersInput> | feedbackCreateWithoutOrdersInput[] | feedbackUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: feedbackCreateOrConnectWithoutOrdersInput | feedbackCreateOrConnectWithoutOrdersInput[]
    createMany?: feedbackCreateManyOrdersInputEnvelope
    connect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
  }

  export type legacy_print_queueUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<legacy_print_queueCreateWithoutOrdersInput, legacy_print_queueUncheckedCreateWithoutOrdersInput> | legacy_print_queueCreateWithoutOrdersInput[] | legacy_print_queueUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: legacy_print_queueCreateOrConnectWithoutOrdersInput | legacy_print_queueCreateOrConnectWithoutOrdersInput[]
    createMany?: legacy_print_queueCreateManyOrdersInputEnvelope
    connect?: legacy_print_queueWhereUniqueInput | legacy_print_queueWhereUniqueInput[]
  }

  export type order_itemsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type NullableEnumorders_statusFieldUpdateOperationsInput = {
    set?: $Enums.orders_status | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type feedbackUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<feedbackCreateWithoutOrdersInput, feedbackUncheckedCreateWithoutOrdersInput> | feedbackCreateWithoutOrdersInput[] | feedbackUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: feedbackCreateOrConnectWithoutOrdersInput | feedbackCreateOrConnectWithoutOrdersInput[]
    upsert?: feedbackUpsertWithWhereUniqueWithoutOrdersInput | feedbackUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: feedbackCreateManyOrdersInputEnvelope
    set?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    disconnect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    delete?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    connect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    update?: feedbackUpdateWithWhereUniqueWithoutOrdersInput | feedbackUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: feedbackUpdateManyWithWhereWithoutOrdersInput | feedbackUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: feedbackScalarWhereInput | feedbackScalarWhereInput[]
  }

  export type legacy_print_queueUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<legacy_print_queueCreateWithoutOrdersInput, legacy_print_queueUncheckedCreateWithoutOrdersInput> | legacy_print_queueCreateWithoutOrdersInput[] | legacy_print_queueUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: legacy_print_queueCreateOrConnectWithoutOrdersInput | legacy_print_queueCreateOrConnectWithoutOrdersInput[]
    upsert?: legacy_print_queueUpsertWithWhereUniqueWithoutOrdersInput | legacy_print_queueUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: legacy_print_queueCreateManyOrdersInputEnvelope
    set?: legacy_print_queueWhereUniqueInput | legacy_print_queueWhereUniqueInput[]
    disconnect?: legacy_print_queueWhereUniqueInput | legacy_print_queueWhereUniqueInput[]
    delete?: legacy_print_queueWhereUniqueInput | legacy_print_queueWhereUniqueInput[]
    connect?: legacy_print_queueWhereUniqueInput | legacy_print_queueWhereUniqueInput[]
    update?: legacy_print_queueUpdateWithWhereUniqueWithoutOrdersInput | legacy_print_queueUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: legacy_print_queueUpdateManyWithWhereWithoutOrdersInput | legacy_print_queueUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: legacy_print_queueScalarWhereInput | legacy_print_queueScalarWhereInput[]
  }

  export type order_itemsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrdersInput | order_itemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrdersInput | order_itemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrdersInput | order_itemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type tablesUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<tablesCreateWithoutOrdersInput, tablesUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: tablesCreateOrConnectWithoutOrdersInput
    upsert?: tablesUpsertWithoutOrdersInput
    connect?: tablesWhereUniqueInput
    update?: XOR<XOR<tablesUpdateToOneWithWhereWithoutOrdersInput, tablesUpdateWithoutOrdersInput>, tablesUncheckedUpdateWithoutOrdersInput>
  }

  export type promotionsUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<promotionsCreateWithoutOrdersInput, promotionsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: promotionsCreateOrConnectWithoutOrdersInput
    upsert?: promotionsUpsertWithoutOrdersInput
    disconnect?: promotionsWhereInput | boolean
    delete?: promotionsWhereInput | boolean
    connect?: promotionsWhereUniqueInput
    update?: XOR<XOR<promotionsUpdateToOneWithWhereWithoutOrdersInput, promotionsUpdateWithoutOrdersInput>, promotionsUncheckedUpdateWithoutOrdersInput>
  }

  export type feedbackUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<feedbackCreateWithoutOrdersInput, feedbackUncheckedCreateWithoutOrdersInput> | feedbackCreateWithoutOrdersInput[] | feedbackUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: feedbackCreateOrConnectWithoutOrdersInput | feedbackCreateOrConnectWithoutOrdersInput[]
    upsert?: feedbackUpsertWithWhereUniqueWithoutOrdersInput | feedbackUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: feedbackCreateManyOrdersInputEnvelope
    set?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    disconnect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    delete?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    connect?: feedbackWhereUniqueInput | feedbackWhereUniqueInput[]
    update?: feedbackUpdateWithWhereUniqueWithoutOrdersInput | feedbackUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: feedbackUpdateManyWithWhereWithoutOrdersInput | feedbackUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: feedbackScalarWhereInput | feedbackScalarWhereInput[]
  }

  export type legacy_print_queueUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<legacy_print_queueCreateWithoutOrdersInput, legacy_print_queueUncheckedCreateWithoutOrdersInput> | legacy_print_queueCreateWithoutOrdersInput[] | legacy_print_queueUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: legacy_print_queueCreateOrConnectWithoutOrdersInput | legacy_print_queueCreateOrConnectWithoutOrdersInput[]
    upsert?: legacy_print_queueUpsertWithWhereUniqueWithoutOrdersInput | legacy_print_queueUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: legacy_print_queueCreateManyOrdersInputEnvelope
    set?: legacy_print_queueWhereUniqueInput | legacy_print_queueWhereUniqueInput[]
    disconnect?: legacy_print_queueWhereUniqueInput | legacy_print_queueWhereUniqueInput[]
    delete?: legacy_print_queueWhereUniqueInput | legacy_print_queueWhereUniqueInput[]
    connect?: legacy_print_queueWhereUniqueInput | legacy_print_queueWhereUniqueInput[]
    update?: legacy_print_queueUpdateWithWhereUniqueWithoutOrdersInput | legacy_print_queueUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: legacy_print_queueUpdateManyWithWhereWithoutOrdersInput | legacy_print_queueUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: legacy_print_queueScalarWhereInput | legacy_print_queueScalarWhereInput[]
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrdersInput | order_itemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrdersInput | order_itemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrdersInput | order_itemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type ordersCreateNestedManyWithoutPromotionsInput = {
    create?: XOR<ordersCreateWithoutPromotionsInput, ordersUncheckedCreateWithoutPromotionsInput> | ordersCreateWithoutPromotionsInput[] | ordersUncheckedCreateWithoutPromotionsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutPromotionsInput | ordersCreateOrConnectWithoutPromotionsInput[]
    createMany?: ordersCreateManyPromotionsInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutPromotionsInput = {
    create?: XOR<ordersCreateWithoutPromotionsInput, ordersUncheckedCreateWithoutPromotionsInput> | ordersCreateWithoutPromotionsInput[] | ordersUncheckedCreateWithoutPromotionsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutPromotionsInput | ordersCreateOrConnectWithoutPromotionsInput[]
    createMany?: ordersCreateManyPromotionsInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type Enumpromotions_typeFieldUpdateOperationsInput = {
    set?: $Enums.promotions_type
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ordersUpdateManyWithoutPromotionsNestedInput = {
    create?: XOR<ordersCreateWithoutPromotionsInput, ordersUncheckedCreateWithoutPromotionsInput> | ordersCreateWithoutPromotionsInput[] | ordersUncheckedCreateWithoutPromotionsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutPromotionsInput | ordersCreateOrConnectWithoutPromotionsInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutPromotionsInput | ordersUpsertWithWhereUniqueWithoutPromotionsInput[]
    createMany?: ordersCreateManyPromotionsInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutPromotionsInput | ordersUpdateWithWhereUniqueWithoutPromotionsInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutPromotionsInput | ordersUpdateManyWithWhereWithoutPromotionsInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutPromotionsNestedInput = {
    create?: XOR<ordersCreateWithoutPromotionsInput, ordersUncheckedCreateWithoutPromotionsInput> | ordersCreateWithoutPromotionsInput[] | ordersUncheckedCreateWithoutPromotionsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutPromotionsInput | ordersCreateOrConnectWithoutPromotionsInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutPromotionsInput | ordersUpsertWithWhereUniqueWithoutPromotionsInput[]
    createMany?: ordersCreateManyPromotionsInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutPromotionsInput | ordersUpdateWithWhereUniqueWithoutPromotionsInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutPromotionsInput | ordersUpdateManyWithWhereWithoutPromotionsInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type recipe_bomCreateNestedManyWithoutRaw_materialsInput = {
    create?: XOR<recipe_bomCreateWithoutRaw_materialsInput, recipe_bomUncheckedCreateWithoutRaw_materialsInput> | recipe_bomCreateWithoutRaw_materialsInput[] | recipe_bomUncheckedCreateWithoutRaw_materialsInput[]
    connectOrCreate?: recipe_bomCreateOrConnectWithoutRaw_materialsInput | recipe_bomCreateOrConnectWithoutRaw_materialsInput[]
    createMany?: recipe_bomCreateManyRaw_materialsInputEnvelope
    connect?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
  }

  export type recipe_bomUncheckedCreateNestedManyWithoutRaw_materialsInput = {
    create?: XOR<recipe_bomCreateWithoutRaw_materialsInput, recipe_bomUncheckedCreateWithoutRaw_materialsInput> | recipe_bomCreateWithoutRaw_materialsInput[] | recipe_bomUncheckedCreateWithoutRaw_materialsInput[]
    connectOrCreate?: recipe_bomCreateOrConnectWithoutRaw_materialsInput | recipe_bomCreateOrConnectWithoutRaw_materialsInput[]
    createMany?: recipe_bomCreateManyRaw_materialsInputEnvelope
    connect?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
  }

  export type Enumraw_materials_unitFieldUpdateOperationsInput = {
    set?: $Enums.raw_materials_unit
  }

  export type recipe_bomUpdateManyWithoutRaw_materialsNestedInput = {
    create?: XOR<recipe_bomCreateWithoutRaw_materialsInput, recipe_bomUncheckedCreateWithoutRaw_materialsInput> | recipe_bomCreateWithoutRaw_materialsInput[] | recipe_bomUncheckedCreateWithoutRaw_materialsInput[]
    connectOrCreate?: recipe_bomCreateOrConnectWithoutRaw_materialsInput | recipe_bomCreateOrConnectWithoutRaw_materialsInput[]
    upsert?: recipe_bomUpsertWithWhereUniqueWithoutRaw_materialsInput | recipe_bomUpsertWithWhereUniqueWithoutRaw_materialsInput[]
    createMany?: recipe_bomCreateManyRaw_materialsInputEnvelope
    set?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
    disconnect?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
    delete?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
    connect?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
    update?: recipe_bomUpdateWithWhereUniqueWithoutRaw_materialsInput | recipe_bomUpdateWithWhereUniqueWithoutRaw_materialsInput[]
    updateMany?: recipe_bomUpdateManyWithWhereWithoutRaw_materialsInput | recipe_bomUpdateManyWithWhereWithoutRaw_materialsInput[]
    deleteMany?: recipe_bomScalarWhereInput | recipe_bomScalarWhereInput[]
  }

  export type recipe_bomUncheckedUpdateManyWithoutRaw_materialsNestedInput = {
    create?: XOR<recipe_bomCreateWithoutRaw_materialsInput, recipe_bomUncheckedCreateWithoutRaw_materialsInput> | recipe_bomCreateWithoutRaw_materialsInput[] | recipe_bomUncheckedCreateWithoutRaw_materialsInput[]
    connectOrCreate?: recipe_bomCreateOrConnectWithoutRaw_materialsInput | recipe_bomCreateOrConnectWithoutRaw_materialsInput[]
    upsert?: recipe_bomUpsertWithWhereUniqueWithoutRaw_materialsInput | recipe_bomUpsertWithWhereUniqueWithoutRaw_materialsInput[]
    createMany?: recipe_bomCreateManyRaw_materialsInputEnvelope
    set?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
    disconnect?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
    delete?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
    connect?: recipe_bomWhereUniqueInput | recipe_bomWhereUniqueInput[]
    update?: recipe_bomUpdateWithWhereUniqueWithoutRaw_materialsInput | recipe_bomUpdateWithWhereUniqueWithoutRaw_materialsInput[]
    updateMany?: recipe_bomUpdateManyWithWhereWithoutRaw_materialsInput | recipe_bomUpdateManyWithWhereWithoutRaw_materialsInput[]
    deleteMany?: recipe_bomScalarWhereInput | recipe_bomScalarWhereInput[]
  }

  export type menu_itemsCreateNestedOneWithoutRecipe_bomInput = {
    create?: XOR<menu_itemsCreateWithoutRecipe_bomInput, menu_itemsUncheckedCreateWithoutRecipe_bomInput>
    connectOrCreate?: menu_itemsCreateOrConnectWithoutRecipe_bomInput
    connect?: menu_itemsWhereUniqueInput
  }

  export type raw_materialsCreateNestedOneWithoutRecipe_bomInput = {
    create?: XOR<raw_materialsCreateWithoutRecipe_bomInput, raw_materialsUncheckedCreateWithoutRecipe_bomInput>
    connectOrCreate?: raw_materialsCreateOrConnectWithoutRecipe_bomInput
    connect?: raw_materialsWhereUniqueInput
  }

  export type menu_itemsUpdateOneRequiredWithoutRecipe_bomNestedInput = {
    create?: XOR<menu_itemsCreateWithoutRecipe_bomInput, menu_itemsUncheckedCreateWithoutRecipe_bomInput>
    connectOrCreate?: menu_itemsCreateOrConnectWithoutRecipe_bomInput
    upsert?: menu_itemsUpsertWithoutRecipe_bomInput
    connect?: menu_itemsWhereUniqueInput
    update?: XOR<XOR<menu_itemsUpdateToOneWithWhereWithoutRecipe_bomInput, menu_itemsUpdateWithoutRecipe_bomInput>, menu_itemsUncheckedUpdateWithoutRecipe_bomInput>
  }

  export type raw_materialsUpdateOneRequiredWithoutRecipe_bomNestedInput = {
    create?: XOR<raw_materialsCreateWithoutRecipe_bomInput, raw_materialsUncheckedCreateWithoutRecipe_bomInput>
    connectOrCreate?: raw_materialsCreateOrConnectWithoutRecipe_bomInput
    upsert?: raw_materialsUpsertWithoutRecipe_bomInput
    connect?: raw_materialsWhereUniqueInput
    update?: XOR<XOR<raw_materialsUpdateToOneWithWhereWithoutRecipe_bomInput, raw_materialsUpdateWithoutRecipe_bomInput>, raw_materialsUncheckedUpdateWithoutRecipe_bomInput>
  }

  export type NullableEnumreservations_budget_typeFieldUpdateOperationsInput = {
    set?: $Enums.reservations_budget_type | null
  }

  export type NullableEnumreservations_statusFieldUpdateOperationsInput = {
    set?: $Enums.reservations_status | null
  }

  export type ordersCreateNestedManyWithoutTablesInput = {
    create?: XOR<ordersCreateWithoutTablesInput, ordersUncheckedCreateWithoutTablesInput> | ordersCreateWithoutTablesInput[] | ordersUncheckedCreateWithoutTablesInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutTablesInput | ordersCreateOrConnectWithoutTablesInput[]
    createMany?: ordersCreateManyTablesInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutTablesInput = {
    create?: XOR<ordersCreateWithoutTablesInput, ordersUncheckedCreateWithoutTablesInput> | ordersCreateWithoutTablesInput[] | ordersUncheckedCreateWithoutTablesInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutTablesInput | ordersCreateOrConnectWithoutTablesInput[]
    createMany?: ordersCreateManyTablesInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUpdateManyWithoutTablesNestedInput = {
    create?: XOR<ordersCreateWithoutTablesInput, ordersUncheckedCreateWithoutTablesInput> | ordersCreateWithoutTablesInput[] | ordersUncheckedCreateWithoutTablesInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutTablesInput | ordersCreateOrConnectWithoutTablesInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutTablesInput | ordersUpsertWithWhereUniqueWithoutTablesInput[]
    createMany?: ordersCreateManyTablesInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutTablesInput | ordersUpdateWithWhereUniqueWithoutTablesInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutTablesInput | ordersUpdateManyWithWhereWithoutTablesInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutTablesNestedInput = {
    create?: XOR<ordersCreateWithoutTablesInput, ordersUncheckedCreateWithoutTablesInput> | ordersCreateWithoutTablesInput[] | ordersUncheckedCreateWithoutTablesInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutTablesInput | ordersCreateOrConnectWithoutTablesInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutTablesInput | ordersUpsertWithWhereUniqueWithoutTablesInput[]
    createMany?: ordersCreateManyTablesInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutTablesInput | ordersUpdateWithWhereUniqueWithoutTablesInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutTablesInput | ordersUpdateManyWithWhereWithoutTablesInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type Enumusers_roleFieldUpdateOperationsInput = {
    set?: $Enums.users_role
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumlegacy_print_queue_status_printNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.legacy_print_queue_status_print | Enumlegacy_print_queue_status_printFieldRefInput<$PrismaModel> | null
    in?: $Enums.legacy_print_queue_status_print[] | null
    notIn?: $Enums.legacy_print_queue_status_print[] | null
    not?: NestedEnumlegacy_print_queue_status_printNullableFilter<$PrismaModel> | $Enums.legacy_print_queue_status_print | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumlegacy_print_queue_status_printNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.legacy_print_queue_status_print | Enumlegacy_print_queue_status_printFieldRefInput<$PrismaModel> | null
    in?: $Enums.legacy_print_queue_status_print[] | null
    notIn?: $Enums.legacy_print_queue_status_print[] | null
    not?: NestedEnumlegacy_print_queue_status_printNullableWithAggregatesFilter<$PrismaModel> | $Enums.legacy_print_queue_status_print | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumlegacy_print_queue_status_printNullableFilter<$PrismaModel>
    _max?: NestedEnumlegacy_print_queue_status_printNullableFilter<$PrismaModel>
  }

  export type NestedEnummenu_items_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.menu_items_status | Enummenu_items_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.menu_items_status[] | null
    notIn?: $Enums.menu_items_status[] | null
    not?: NestedEnummenu_items_statusNullableFilter<$PrismaModel> | $Enums.menu_items_status | null
  }

  export type NestedEnummenu_items_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.menu_items_status | Enummenu_items_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.menu_items_status[] | null
    notIn?: $Enums.menu_items_status[] | null
    not?: NestedEnummenu_items_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.menu_items_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummenu_items_statusNullableFilter<$PrismaModel>
    _max?: NestedEnummenu_items_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumorders_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_status | Enumorders_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orders_status[] | null
    notIn?: $Enums.orders_status[] | null
    not?: NestedEnumorders_statusNullableFilter<$PrismaModel> | $Enums.orders_status | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumorders_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_status | Enumorders_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orders_status[] | null
    notIn?: $Enums.orders_status[] | null
    not?: NestedEnumorders_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.orders_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumorders_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumorders_statusNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumpromotions_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.promotions_type | Enumpromotions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.promotions_type[]
    notIn?: $Enums.promotions_type[]
    not?: NestedEnumpromotions_typeFilter<$PrismaModel> | $Enums.promotions_type
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumpromotions_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.promotions_type | Enumpromotions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.promotions_type[]
    notIn?: $Enums.promotions_type[]
    not?: NestedEnumpromotions_typeWithAggregatesFilter<$PrismaModel> | $Enums.promotions_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpromotions_typeFilter<$PrismaModel>
    _max?: NestedEnumpromotions_typeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumraw_materials_unitFilter<$PrismaModel = never> = {
    equals?: $Enums.raw_materials_unit | Enumraw_materials_unitFieldRefInput<$PrismaModel>
    in?: $Enums.raw_materials_unit[]
    notIn?: $Enums.raw_materials_unit[]
    not?: NestedEnumraw_materials_unitFilter<$PrismaModel> | $Enums.raw_materials_unit
  }

  export type NestedEnumraw_materials_unitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.raw_materials_unit | Enumraw_materials_unitFieldRefInput<$PrismaModel>
    in?: $Enums.raw_materials_unit[]
    notIn?: $Enums.raw_materials_unit[]
    not?: NestedEnumraw_materials_unitWithAggregatesFilter<$PrismaModel> | $Enums.raw_materials_unit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumraw_materials_unitFilter<$PrismaModel>
    _max?: NestedEnumraw_materials_unitFilter<$PrismaModel>
  }

  export type NestedEnumreservations_budget_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.reservations_budget_type | Enumreservations_budget_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.reservations_budget_type[] | null
    notIn?: $Enums.reservations_budget_type[] | null
    not?: NestedEnumreservations_budget_typeNullableFilter<$PrismaModel> | $Enums.reservations_budget_type | null
  }

  export type NestedEnumreservations_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.reservations_status | Enumreservations_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.reservations_status[] | null
    notIn?: $Enums.reservations_status[] | null
    not?: NestedEnumreservations_statusNullableFilter<$PrismaModel> | $Enums.reservations_status | null
  }

  export type NestedEnumreservations_budget_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reservations_budget_type | Enumreservations_budget_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.reservations_budget_type[] | null
    notIn?: $Enums.reservations_budget_type[] | null
    not?: NestedEnumreservations_budget_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.reservations_budget_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumreservations_budget_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumreservations_budget_typeNullableFilter<$PrismaModel>
  }

  export type NestedEnumreservations_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reservations_status | Enumreservations_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.reservations_status[] | null
    notIn?: $Enums.reservations_status[] | null
    not?: NestedEnumreservations_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.reservations_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumreservations_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumreservations_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumusers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleFilter<$PrismaModel> | $Enums.users_role
  }

  export type NestedEnumusers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleWithAggregatesFilter<$PrismaModel> | $Enums.users_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_roleFilter<$PrismaModel>
    _max?: NestedEnumusers_roleFilter<$PrismaModel>
  }

  export type menu_itemsCreateWithoutCategoriesInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    status?: $Enums.menu_items_status | null
    feedback?: feedbackCreateNestedManyWithoutMenu_itemsInput
    order_items?: order_itemsCreateNestedManyWithoutMenu_itemsInput
    recipe_bom?: recipe_bomCreateNestedManyWithoutMenu_itemsInput
  }

  export type menu_itemsUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    status?: $Enums.menu_items_status | null
    feedback?: feedbackUncheckedCreateNestedManyWithoutMenu_itemsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutMenu_itemsInput
    recipe_bom?: recipe_bomUncheckedCreateNestedManyWithoutMenu_itemsInput
  }

  export type menu_itemsCreateOrConnectWithoutCategoriesInput = {
    where: menu_itemsWhereUniqueInput
    create: XOR<menu_itemsCreateWithoutCategoriesInput, menu_itemsUncheckedCreateWithoutCategoriesInput>
  }

  export type menu_itemsCreateManyCategoriesInputEnvelope = {
    data: menu_itemsCreateManyCategoriesInput | menu_itemsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type menu_itemsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: menu_itemsWhereUniqueInput
    update: XOR<menu_itemsUpdateWithoutCategoriesInput, menu_itemsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<menu_itemsCreateWithoutCategoriesInput, menu_itemsUncheckedCreateWithoutCategoriesInput>
  }

  export type menu_itemsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: menu_itemsWhereUniqueInput
    data: XOR<menu_itemsUpdateWithoutCategoriesInput, menu_itemsUncheckedUpdateWithoutCategoriesInput>
  }

  export type menu_itemsUpdateManyWithWhereWithoutCategoriesInput = {
    where: menu_itemsScalarWhereInput
    data: XOR<menu_itemsUpdateManyMutationInput, menu_itemsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type menu_itemsScalarWhereInput = {
    AND?: menu_itemsScalarWhereInput | menu_itemsScalarWhereInput[]
    OR?: menu_itemsScalarWhereInput[]
    NOT?: menu_itemsScalarWhereInput | menu_itemsScalarWhereInput[]
    id?: IntFilter<"menu_items"> | number
    category_id?: IntNullableFilter<"menu_items"> | number | null
    name?: StringFilter<"menu_items"> | string
    description?: StringNullableFilter<"menu_items"> | string | null
    price?: DecimalFilter<"menu_items"> | Decimal | DecimalJsLike | number | string
    image_url?: StringNullableFilter<"menu_items"> | string | null
    status?: Enummenu_items_statusNullableFilter<"menu_items"> | $Enums.menu_items_status | null
  }

  export type ordersCreateWithoutFeedbackInput = {
    status?: $Enums.orders_status | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    final_total?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    legacy_print_queue?: legacy_print_queueCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    tables: tablesCreateNestedOneWithoutOrdersInput
    promotions?: promotionsCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutFeedbackInput = {
    id?: number
    table_id: number
    status?: $Enums.orders_status | null
    subtotal?: Decimal | DecimalJsLike | number | string
    promo_id?: number | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    final_total?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    legacy_print_queue?: legacy_print_queueUncheckedCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutFeedbackInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutFeedbackInput, ordersUncheckedCreateWithoutFeedbackInput>
  }

  export type menu_itemsCreateWithoutFeedbackInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    status?: $Enums.menu_items_status | null
    categories?: categoriesCreateNestedOneWithoutMenu_itemsInput
    order_items?: order_itemsCreateNestedManyWithoutMenu_itemsInput
    recipe_bom?: recipe_bomCreateNestedManyWithoutMenu_itemsInput
  }

  export type menu_itemsUncheckedCreateWithoutFeedbackInput = {
    id?: number
    category_id?: number | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    status?: $Enums.menu_items_status | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutMenu_itemsInput
    recipe_bom?: recipe_bomUncheckedCreateNestedManyWithoutMenu_itemsInput
  }

  export type menu_itemsCreateOrConnectWithoutFeedbackInput = {
    where: menu_itemsWhereUniqueInput
    create: XOR<menu_itemsCreateWithoutFeedbackInput, menu_itemsUncheckedCreateWithoutFeedbackInput>
  }

  export type ordersUpsertWithoutFeedbackInput = {
    update: XOR<ordersUpdateWithoutFeedbackInput, ordersUncheckedUpdateWithoutFeedbackInput>
    create: XOR<ordersCreateWithoutFeedbackInput, ordersUncheckedCreateWithoutFeedbackInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutFeedbackInput, ordersUncheckedUpdateWithoutFeedbackInput>
  }

  export type ordersUpdateWithoutFeedbackInput = {
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    legacy_print_queue?: legacy_print_queueUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    tables?: tablesUpdateOneRequiredWithoutOrdersNestedInput
    promotions?: promotionsUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutFeedbackInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    promo_id?: NullableIntFieldUpdateOperationsInput | number | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    legacy_print_queue?: legacy_print_queueUncheckedUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type menu_itemsUpsertWithoutFeedbackInput = {
    update: XOR<menu_itemsUpdateWithoutFeedbackInput, menu_itemsUncheckedUpdateWithoutFeedbackInput>
    create: XOR<menu_itemsCreateWithoutFeedbackInput, menu_itemsUncheckedCreateWithoutFeedbackInput>
    where?: menu_itemsWhereInput
  }

  export type menu_itemsUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: menu_itemsWhereInput
    data: XOR<menu_itemsUpdateWithoutFeedbackInput, menu_itemsUncheckedUpdateWithoutFeedbackInput>
  }

  export type menu_itemsUpdateWithoutFeedbackInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnummenu_items_statusFieldUpdateOperationsInput | $Enums.menu_items_status | null
    categories?: categoriesUpdateOneWithoutMenu_itemsNestedInput
    order_items?: order_itemsUpdateManyWithoutMenu_itemsNestedInput
    recipe_bom?: recipe_bomUpdateManyWithoutMenu_itemsNestedInput
  }

  export type menu_itemsUncheckedUpdateWithoutFeedbackInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnummenu_items_statusFieldUpdateOperationsInput | $Enums.menu_items_status | null
    order_items?: order_itemsUncheckedUpdateManyWithoutMenu_itemsNestedInput
    recipe_bom?: recipe_bomUncheckedUpdateManyWithoutMenu_itemsNestedInput
  }

  export type ordersCreateWithoutLegacy_print_queueInput = {
    status?: $Enums.orders_status | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    final_total?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    feedback?: feedbackCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    tables: tablesCreateNestedOneWithoutOrdersInput
    promotions?: promotionsCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutLegacy_print_queueInput = {
    id?: number
    table_id: number
    status?: $Enums.orders_status | null
    subtotal?: Decimal | DecimalJsLike | number | string
    promo_id?: number | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    final_total?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    feedback?: feedbackUncheckedCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutLegacy_print_queueInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutLegacy_print_queueInput, ordersUncheckedCreateWithoutLegacy_print_queueInput>
  }

  export type ordersUpsertWithoutLegacy_print_queueInput = {
    update: XOR<ordersUpdateWithoutLegacy_print_queueInput, ordersUncheckedUpdateWithoutLegacy_print_queueInput>
    create: XOR<ordersCreateWithoutLegacy_print_queueInput, ordersUncheckedCreateWithoutLegacy_print_queueInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutLegacy_print_queueInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutLegacy_print_queueInput, ordersUncheckedUpdateWithoutLegacy_print_queueInput>
  }

  export type ordersUpdateWithoutLegacy_print_queueInput = {
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: feedbackUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    tables?: tablesUpdateOneRequiredWithoutOrdersNestedInput
    promotions?: promotionsUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutLegacy_print_queueInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    promo_id?: NullableIntFieldUpdateOperationsInput | number | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: feedbackUncheckedUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type feedbackCreateWithoutMenu_itemsInput = {
    rating?: number | null
    review_text?: string | null
    created_at?: Date | string
    orders: ordersCreateNestedOneWithoutFeedbackInput
  }

  export type feedbackUncheckedCreateWithoutMenu_itemsInput = {
    id?: number
    order_id: number
    rating?: number | null
    review_text?: string | null
    created_at?: Date | string
  }

  export type feedbackCreateOrConnectWithoutMenu_itemsInput = {
    where: feedbackWhereUniqueInput
    create: XOR<feedbackCreateWithoutMenu_itemsInput, feedbackUncheckedCreateWithoutMenu_itemsInput>
  }

  export type feedbackCreateManyMenu_itemsInputEnvelope = {
    data: feedbackCreateManyMenu_itemsInput | feedbackCreateManyMenu_itemsInput[]
    skipDuplicates?: boolean
  }

  export type categoriesCreateWithoutMenu_itemsInput = {
    name: string
  }

  export type categoriesUncheckedCreateWithoutMenu_itemsInput = {
    id?: number
    name: string
  }

  export type categoriesCreateOrConnectWithoutMenu_itemsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutMenu_itemsInput, categoriesUncheckedCreateWithoutMenu_itemsInput>
  }

  export type order_itemsCreateWithoutMenu_itemsInput = {
    quantity: number
    notes?: string | null
    orders: ordersCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutMenu_itemsInput = {
    id?: number
    order_id: number
    quantity: number
    notes?: string | null
  }

  export type order_itemsCreateOrConnectWithoutMenu_itemsInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutMenu_itemsInput, order_itemsUncheckedCreateWithoutMenu_itemsInput>
  }

  export type order_itemsCreateManyMenu_itemsInputEnvelope = {
    data: order_itemsCreateManyMenu_itemsInput | order_itemsCreateManyMenu_itemsInput[]
    skipDuplicates?: boolean
  }

  export type recipe_bomCreateWithoutMenu_itemsInput = {
    quantity_required: Decimal | DecimalJsLike | number | string
    raw_materials: raw_materialsCreateNestedOneWithoutRecipe_bomInput
  }

  export type recipe_bomUncheckedCreateWithoutMenu_itemsInput = {
    id?: number
    raw_material_id: number
    quantity_required: Decimal | DecimalJsLike | number | string
  }

  export type recipe_bomCreateOrConnectWithoutMenu_itemsInput = {
    where: recipe_bomWhereUniqueInput
    create: XOR<recipe_bomCreateWithoutMenu_itemsInput, recipe_bomUncheckedCreateWithoutMenu_itemsInput>
  }

  export type recipe_bomCreateManyMenu_itemsInputEnvelope = {
    data: recipe_bomCreateManyMenu_itemsInput | recipe_bomCreateManyMenu_itemsInput[]
    skipDuplicates?: boolean
  }

  export type feedbackUpsertWithWhereUniqueWithoutMenu_itemsInput = {
    where: feedbackWhereUniqueInput
    update: XOR<feedbackUpdateWithoutMenu_itemsInput, feedbackUncheckedUpdateWithoutMenu_itemsInput>
    create: XOR<feedbackCreateWithoutMenu_itemsInput, feedbackUncheckedCreateWithoutMenu_itemsInput>
  }

  export type feedbackUpdateWithWhereUniqueWithoutMenu_itemsInput = {
    where: feedbackWhereUniqueInput
    data: XOR<feedbackUpdateWithoutMenu_itemsInput, feedbackUncheckedUpdateWithoutMenu_itemsInput>
  }

  export type feedbackUpdateManyWithWhereWithoutMenu_itemsInput = {
    where: feedbackScalarWhereInput
    data: XOR<feedbackUpdateManyMutationInput, feedbackUncheckedUpdateManyWithoutMenu_itemsInput>
  }

  export type feedbackScalarWhereInput = {
    AND?: feedbackScalarWhereInput | feedbackScalarWhereInput[]
    OR?: feedbackScalarWhereInput[]
    NOT?: feedbackScalarWhereInput | feedbackScalarWhereInput[]
    id?: IntFilter<"feedback"> | number
    order_id?: IntFilter<"feedback"> | number
    menu_item_id?: IntFilter<"feedback"> | number
    rating?: IntNullableFilter<"feedback"> | number | null
    review_text?: StringNullableFilter<"feedback"> | string | null
    created_at?: DateTimeFilter<"feedback"> | Date | string
  }

  export type categoriesUpsertWithoutMenu_itemsInput = {
    update: XOR<categoriesUpdateWithoutMenu_itemsInput, categoriesUncheckedUpdateWithoutMenu_itemsInput>
    create: XOR<categoriesCreateWithoutMenu_itemsInput, categoriesUncheckedCreateWithoutMenu_itemsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutMenu_itemsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutMenu_itemsInput, categoriesUncheckedUpdateWithoutMenu_itemsInput>
  }

  export type categoriesUpdateWithoutMenu_itemsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesUncheckedUpdateWithoutMenu_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type order_itemsUpsertWithWhereUniqueWithoutMenu_itemsInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutMenu_itemsInput, order_itemsUncheckedUpdateWithoutMenu_itemsInput>
    create: XOR<order_itemsCreateWithoutMenu_itemsInput, order_itemsUncheckedCreateWithoutMenu_itemsInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutMenu_itemsInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutMenu_itemsInput, order_itemsUncheckedUpdateWithoutMenu_itemsInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutMenu_itemsInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutMenu_itemsInput>
  }

  export type order_itemsScalarWhereInput = {
    AND?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    OR?: order_itemsScalarWhereInput[]
    NOT?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    id?: IntFilter<"order_items"> | number
    order_id?: IntFilter<"order_items"> | number
    menu_item_id?: IntFilter<"order_items"> | number
    quantity?: IntFilter<"order_items"> | number
    notes?: StringNullableFilter<"order_items"> | string | null
  }

  export type recipe_bomUpsertWithWhereUniqueWithoutMenu_itemsInput = {
    where: recipe_bomWhereUniqueInput
    update: XOR<recipe_bomUpdateWithoutMenu_itemsInput, recipe_bomUncheckedUpdateWithoutMenu_itemsInput>
    create: XOR<recipe_bomCreateWithoutMenu_itemsInput, recipe_bomUncheckedCreateWithoutMenu_itemsInput>
  }

  export type recipe_bomUpdateWithWhereUniqueWithoutMenu_itemsInput = {
    where: recipe_bomWhereUniqueInput
    data: XOR<recipe_bomUpdateWithoutMenu_itemsInput, recipe_bomUncheckedUpdateWithoutMenu_itemsInput>
  }

  export type recipe_bomUpdateManyWithWhereWithoutMenu_itemsInput = {
    where: recipe_bomScalarWhereInput
    data: XOR<recipe_bomUpdateManyMutationInput, recipe_bomUncheckedUpdateManyWithoutMenu_itemsInput>
  }

  export type recipe_bomScalarWhereInput = {
    AND?: recipe_bomScalarWhereInput | recipe_bomScalarWhereInput[]
    OR?: recipe_bomScalarWhereInput[]
    NOT?: recipe_bomScalarWhereInput | recipe_bomScalarWhereInput[]
    id?: IntFilter<"recipe_bom"> | number
    menu_item_id?: IntFilter<"recipe_bom"> | number
    raw_material_id?: IntFilter<"recipe_bom"> | number
    quantity_required?: DecimalFilter<"recipe_bom"> | Decimal | DecimalJsLike | number | string
  }

  export type ordersCreateWithoutOrder_itemsInput = {
    status?: $Enums.orders_status | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    final_total?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    feedback?: feedbackCreateNestedManyWithoutOrdersInput
    legacy_print_queue?: legacy_print_queueCreateNestedManyWithoutOrdersInput
    tables: tablesCreateNestedOneWithoutOrdersInput
    promotions?: promotionsCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    table_id: number
    status?: $Enums.orders_status | null
    subtotal?: Decimal | DecimalJsLike | number | string
    promo_id?: number | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    final_total?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    feedback?: feedbackUncheckedCreateNestedManyWithoutOrdersInput
    legacy_print_queue?: legacy_print_queueUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutOrder_itemsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type menu_itemsCreateWithoutOrder_itemsInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    status?: $Enums.menu_items_status | null
    feedback?: feedbackCreateNestedManyWithoutMenu_itemsInput
    categories?: categoriesCreateNestedOneWithoutMenu_itemsInput
    recipe_bom?: recipe_bomCreateNestedManyWithoutMenu_itemsInput
  }

  export type menu_itemsUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    category_id?: number | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    status?: $Enums.menu_items_status | null
    feedback?: feedbackUncheckedCreateNestedManyWithoutMenu_itemsInput
    recipe_bom?: recipe_bomUncheckedCreateNestedManyWithoutMenu_itemsInput
  }

  export type menu_itemsCreateOrConnectWithoutOrder_itemsInput = {
    where: menu_itemsWhereUniqueInput
    create: XOR<menu_itemsCreateWithoutOrder_itemsInput, menu_itemsUncheckedCreateWithoutOrder_itemsInput>
  }

  export type ordersUpsertWithoutOrder_itemsInput = {
    update: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type ordersUpdateWithoutOrder_itemsInput = {
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: feedbackUpdateManyWithoutOrdersNestedInput
    legacy_print_queue?: legacy_print_queueUpdateManyWithoutOrdersNestedInput
    tables?: tablesUpdateOneRequiredWithoutOrdersNestedInput
    promotions?: promotionsUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    promo_id?: NullableIntFieldUpdateOperationsInput | number | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: feedbackUncheckedUpdateManyWithoutOrdersNestedInput
    legacy_print_queue?: legacy_print_queueUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type menu_itemsUpsertWithoutOrder_itemsInput = {
    update: XOR<menu_itemsUpdateWithoutOrder_itemsInput, menu_itemsUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<menu_itemsCreateWithoutOrder_itemsInput, menu_itemsUncheckedCreateWithoutOrder_itemsInput>
    where?: menu_itemsWhereInput
  }

  export type menu_itemsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: menu_itemsWhereInput
    data: XOR<menu_itemsUpdateWithoutOrder_itemsInput, menu_itemsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type menu_itemsUpdateWithoutOrder_itemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnummenu_items_statusFieldUpdateOperationsInput | $Enums.menu_items_status | null
    feedback?: feedbackUpdateManyWithoutMenu_itemsNestedInput
    categories?: categoriesUpdateOneWithoutMenu_itemsNestedInput
    recipe_bom?: recipe_bomUpdateManyWithoutMenu_itemsNestedInput
  }

  export type menu_itemsUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnummenu_items_statusFieldUpdateOperationsInput | $Enums.menu_items_status | null
    feedback?: feedbackUncheckedUpdateManyWithoutMenu_itemsNestedInput
    recipe_bom?: recipe_bomUncheckedUpdateManyWithoutMenu_itemsNestedInput
  }

  export type feedbackCreateWithoutOrdersInput = {
    rating?: number | null
    review_text?: string | null
    created_at?: Date | string
    menu_items: menu_itemsCreateNestedOneWithoutFeedbackInput
  }

  export type feedbackUncheckedCreateWithoutOrdersInput = {
    id?: number
    menu_item_id: number
    rating?: number | null
    review_text?: string | null
    created_at?: Date | string
  }

  export type feedbackCreateOrConnectWithoutOrdersInput = {
    where: feedbackWhereUniqueInput
    create: XOR<feedbackCreateWithoutOrdersInput, feedbackUncheckedCreateWithoutOrdersInput>
  }

  export type feedbackCreateManyOrdersInputEnvelope = {
    data: feedbackCreateManyOrdersInput | feedbackCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type legacy_print_queueCreateWithoutOrdersInput = {
    table_number: number
    total_amount: Decimal | DecimalJsLike | number | string
    status_print?: $Enums.legacy_print_queue_status_print | null
    created_at?: Date | string
  }

  export type legacy_print_queueUncheckedCreateWithoutOrdersInput = {
    id?: number
    table_number: number
    total_amount: Decimal | DecimalJsLike | number | string
    status_print?: $Enums.legacy_print_queue_status_print | null
    created_at?: Date | string
  }

  export type legacy_print_queueCreateOrConnectWithoutOrdersInput = {
    where: legacy_print_queueWhereUniqueInput
    create: XOR<legacy_print_queueCreateWithoutOrdersInput, legacy_print_queueUncheckedCreateWithoutOrdersInput>
  }

  export type legacy_print_queueCreateManyOrdersInputEnvelope = {
    data: legacy_print_queueCreateManyOrdersInput | legacy_print_queueCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type order_itemsCreateWithoutOrdersInput = {
    quantity: number
    notes?: string | null
    menu_items: menu_itemsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutOrdersInput = {
    id?: number
    menu_item_id: number
    quantity: number
    notes?: string | null
  }

  export type order_itemsCreateOrConnectWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsCreateManyOrdersInputEnvelope = {
    data: order_itemsCreateManyOrdersInput | order_itemsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type tablesCreateWithoutOrdersInput = {
    table_number: number
    qr_code_url?: string | null
  }

  export type tablesUncheckedCreateWithoutOrdersInput = {
    id?: number
    table_number: number
    qr_code_url?: string | null
  }

  export type tablesCreateOrConnectWithoutOrdersInput = {
    where: tablesWhereUniqueInput
    create: XOR<tablesCreateWithoutOrdersInput, tablesUncheckedCreateWithoutOrdersInput>
  }

  export type promotionsCreateWithoutOrdersInput = {
    name: string
    type: $Enums.promotions_type
    value: Decimal | DecimalJsLike | number | string
    min_purchase?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean | null
  }

  export type promotionsUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    type: $Enums.promotions_type
    value: Decimal | DecimalJsLike | number | string
    min_purchase?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean | null
  }

  export type promotionsCreateOrConnectWithoutOrdersInput = {
    where: promotionsWhereUniqueInput
    create: XOR<promotionsCreateWithoutOrdersInput, promotionsUncheckedCreateWithoutOrdersInput>
  }

  export type feedbackUpsertWithWhereUniqueWithoutOrdersInput = {
    where: feedbackWhereUniqueInput
    update: XOR<feedbackUpdateWithoutOrdersInput, feedbackUncheckedUpdateWithoutOrdersInput>
    create: XOR<feedbackCreateWithoutOrdersInput, feedbackUncheckedCreateWithoutOrdersInput>
  }

  export type feedbackUpdateWithWhereUniqueWithoutOrdersInput = {
    where: feedbackWhereUniqueInput
    data: XOR<feedbackUpdateWithoutOrdersInput, feedbackUncheckedUpdateWithoutOrdersInput>
  }

  export type feedbackUpdateManyWithWhereWithoutOrdersInput = {
    where: feedbackScalarWhereInput
    data: XOR<feedbackUpdateManyMutationInput, feedbackUncheckedUpdateManyWithoutOrdersInput>
  }

  export type legacy_print_queueUpsertWithWhereUniqueWithoutOrdersInput = {
    where: legacy_print_queueWhereUniqueInput
    update: XOR<legacy_print_queueUpdateWithoutOrdersInput, legacy_print_queueUncheckedUpdateWithoutOrdersInput>
    create: XOR<legacy_print_queueCreateWithoutOrdersInput, legacy_print_queueUncheckedCreateWithoutOrdersInput>
  }

  export type legacy_print_queueUpdateWithWhereUniqueWithoutOrdersInput = {
    where: legacy_print_queueWhereUniqueInput
    data: XOR<legacy_print_queueUpdateWithoutOrdersInput, legacy_print_queueUncheckedUpdateWithoutOrdersInput>
  }

  export type legacy_print_queueUpdateManyWithWhereWithoutOrdersInput = {
    where: legacy_print_queueScalarWhereInput
    data: XOR<legacy_print_queueUpdateManyMutationInput, legacy_print_queueUncheckedUpdateManyWithoutOrdersInput>
  }

  export type legacy_print_queueScalarWhereInput = {
    AND?: legacy_print_queueScalarWhereInput | legacy_print_queueScalarWhereInput[]
    OR?: legacy_print_queueScalarWhereInput[]
    NOT?: legacy_print_queueScalarWhereInput | legacy_print_queueScalarWhereInput[]
    id?: IntFilter<"legacy_print_queue"> | number
    order_id_pwa?: IntFilter<"legacy_print_queue"> | number
    table_number?: IntFilter<"legacy_print_queue"> | number
    total_amount?: DecimalFilter<"legacy_print_queue"> | Decimal | DecimalJsLike | number | string
    status_print?: Enumlegacy_print_queue_status_printNullableFilter<"legacy_print_queue"> | $Enums.legacy_print_queue_status_print | null
    created_at?: DateTimeFilter<"legacy_print_queue"> | Date | string
  }

  export type order_itemsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutOrdersInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type tablesUpsertWithoutOrdersInput = {
    update: XOR<tablesUpdateWithoutOrdersInput, tablesUncheckedUpdateWithoutOrdersInput>
    create: XOR<tablesCreateWithoutOrdersInput, tablesUncheckedCreateWithoutOrdersInput>
    where?: tablesWhereInput
  }

  export type tablesUpdateToOneWithWhereWithoutOrdersInput = {
    where?: tablesWhereInput
    data: XOR<tablesUpdateWithoutOrdersInput, tablesUncheckedUpdateWithoutOrdersInput>
  }

  export type tablesUpdateWithoutOrdersInput = {
    table_number?: IntFieldUpdateOperationsInput | number
    qr_code_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tablesUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_number?: IntFieldUpdateOperationsInput | number
    qr_code_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type promotionsUpsertWithoutOrdersInput = {
    update: XOR<promotionsUpdateWithoutOrdersInput, promotionsUncheckedUpdateWithoutOrdersInput>
    create: XOR<promotionsCreateWithoutOrdersInput, promotionsUncheckedCreateWithoutOrdersInput>
    where?: promotionsWhereInput
  }

  export type promotionsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: promotionsWhereInput
    data: XOR<promotionsUpdateWithoutOrdersInput, promotionsUncheckedUpdateWithoutOrdersInput>
  }

  export type promotionsUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumpromotions_typeFieldUpdateOperationsInput | $Enums.promotions_type
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_purchase?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type promotionsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: Enumpromotions_typeFieldUpdateOperationsInput | $Enums.promotions_type
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_purchase?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ordersCreateWithoutPromotionsInput = {
    status?: $Enums.orders_status | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    final_total?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    feedback?: feedbackCreateNestedManyWithoutOrdersInput
    legacy_print_queue?: legacy_print_queueCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    tables: tablesCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutPromotionsInput = {
    id?: number
    table_id: number
    status?: $Enums.orders_status | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    final_total?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    feedback?: feedbackUncheckedCreateNestedManyWithoutOrdersInput
    legacy_print_queue?: legacy_print_queueUncheckedCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutPromotionsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutPromotionsInput, ordersUncheckedCreateWithoutPromotionsInput>
  }

  export type ordersCreateManyPromotionsInputEnvelope = {
    data: ordersCreateManyPromotionsInput | ordersCreateManyPromotionsInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutPromotionsInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutPromotionsInput, ordersUncheckedUpdateWithoutPromotionsInput>
    create: XOR<ordersCreateWithoutPromotionsInput, ordersUncheckedCreateWithoutPromotionsInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutPromotionsInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutPromotionsInput, ordersUncheckedUpdateWithoutPromotionsInput>
  }

  export type ordersUpdateManyWithWhereWithoutPromotionsInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutPromotionsInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: IntFilter<"orders"> | number
    table_id?: IntFilter<"orders"> | number
    status?: Enumorders_statusNullableFilter<"orders"> | $Enums.orders_status | null
    subtotal?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    promo_id?: IntNullableFilter<"orders"> | number | null
    discount_amount?: DecimalNullableFilter<"orders"> | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"orders"> | Date | string
  }

  export type recipe_bomCreateWithoutRaw_materialsInput = {
    quantity_required: Decimal | DecimalJsLike | number | string
    menu_items: menu_itemsCreateNestedOneWithoutRecipe_bomInput
  }

  export type recipe_bomUncheckedCreateWithoutRaw_materialsInput = {
    id?: number
    menu_item_id: number
    quantity_required: Decimal | DecimalJsLike | number | string
  }

  export type recipe_bomCreateOrConnectWithoutRaw_materialsInput = {
    where: recipe_bomWhereUniqueInput
    create: XOR<recipe_bomCreateWithoutRaw_materialsInput, recipe_bomUncheckedCreateWithoutRaw_materialsInput>
  }

  export type recipe_bomCreateManyRaw_materialsInputEnvelope = {
    data: recipe_bomCreateManyRaw_materialsInput | recipe_bomCreateManyRaw_materialsInput[]
    skipDuplicates?: boolean
  }

  export type recipe_bomUpsertWithWhereUniqueWithoutRaw_materialsInput = {
    where: recipe_bomWhereUniqueInput
    update: XOR<recipe_bomUpdateWithoutRaw_materialsInput, recipe_bomUncheckedUpdateWithoutRaw_materialsInput>
    create: XOR<recipe_bomCreateWithoutRaw_materialsInput, recipe_bomUncheckedCreateWithoutRaw_materialsInput>
  }

  export type recipe_bomUpdateWithWhereUniqueWithoutRaw_materialsInput = {
    where: recipe_bomWhereUniqueInput
    data: XOR<recipe_bomUpdateWithoutRaw_materialsInput, recipe_bomUncheckedUpdateWithoutRaw_materialsInput>
  }

  export type recipe_bomUpdateManyWithWhereWithoutRaw_materialsInput = {
    where: recipe_bomScalarWhereInput
    data: XOR<recipe_bomUpdateManyMutationInput, recipe_bomUncheckedUpdateManyWithoutRaw_materialsInput>
  }

  export type menu_itemsCreateWithoutRecipe_bomInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    status?: $Enums.menu_items_status | null
    feedback?: feedbackCreateNestedManyWithoutMenu_itemsInput
    categories?: categoriesCreateNestedOneWithoutMenu_itemsInput
    order_items?: order_itemsCreateNestedManyWithoutMenu_itemsInput
  }

  export type menu_itemsUncheckedCreateWithoutRecipe_bomInput = {
    id?: number
    category_id?: number | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    status?: $Enums.menu_items_status | null
    feedback?: feedbackUncheckedCreateNestedManyWithoutMenu_itemsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutMenu_itemsInput
  }

  export type menu_itemsCreateOrConnectWithoutRecipe_bomInput = {
    where: menu_itemsWhereUniqueInput
    create: XOR<menu_itemsCreateWithoutRecipe_bomInput, menu_itemsUncheckedCreateWithoutRecipe_bomInput>
  }

  export type raw_materialsCreateWithoutRecipe_bomInput = {
    name: string
    unit: $Enums.raw_materials_unit
    current_stock?: Decimal | DecimalJsLike | number | string
    min_stock_alert?: Decimal | DecimalJsLike | number | string
  }

  export type raw_materialsUncheckedCreateWithoutRecipe_bomInput = {
    id?: number
    name: string
    unit: $Enums.raw_materials_unit
    current_stock?: Decimal | DecimalJsLike | number | string
    min_stock_alert?: Decimal | DecimalJsLike | number | string
  }

  export type raw_materialsCreateOrConnectWithoutRecipe_bomInput = {
    where: raw_materialsWhereUniqueInput
    create: XOR<raw_materialsCreateWithoutRecipe_bomInput, raw_materialsUncheckedCreateWithoutRecipe_bomInput>
  }

  export type menu_itemsUpsertWithoutRecipe_bomInput = {
    update: XOR<menu_itemsUpdateWithoutRecipe_bomInput, menu_itemsUncheckedUpdateWithoutRecipe_bomInput>
    create: XOR<menu_itemsCreateWithoutRecipe_bomInput, menu_itemsUncheckedCreateWithoutRecipe_bomInput>
    where?: menu_itemsWhereInput
  }

  export type menu_itemsUpdateToOneWithWhereWithoutRecipe_bomInput = {
    where?: menu_itemsWhereInput
    data: XOR<menu_itemsUpdateWithoutRecipe_bomInput, menu_itemsUncheckedUpdateWithoutRecipe_bomInput>
  }

  export type menu_itemsUpdateWithoutRecipe_bomInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnummenu_items_statusFieldUpdateOperationsInput | $Enums.menu_items_status | null
    feedback?: feedbackUpdateManyWithoutMenu_itemsNestedInput
    categories?: categoriesUpdateOneWithoutMenu_itemsNestedInput
    order_items?: order_itemsUpdateManyWithoutMenu_itemsNestedInput
  }

  export type menu_itemsUncheckedUpdateWithoutRecipe_bomInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnummenu_items_statusFieldUpdateOperationsInput | $Enums.menu_items_status | null
    feedback?: feedbackUncheckedUpdateManyWithoutMenu_itemsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutMenu_itemsNestedInput
  }

  export type raw_materialsUpsertWithoutRecipe_bomInput = {
    update: XOR<raw_materialsUpdateWithoutRecipe_bomInput, raw_materialsUncheckedUpdateWithoutRecipe_bomInput>
    create: XOR<raw_materialsCreateWithoutRecipe_bomInput, raw_materialsUncheckedCreateWithoutRecipe_bomInput>
    where?: raw_materialsWhereInput
  }

  export type raw_materialsUpdateToOneWithWhereWithoutRecipe_bomInput = {
    where?: raw_materialsWhereInput
    data: XOR<raw_materialsUpdateWithoutRecipe_bomInput, raw_materialsUncheckedUpdateWithoutRecipe_bomInput>
  }

  export type raw_materialsUpdateWithoutRecipe_bomInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: Enumraw_materials_unitFieldUpdateOperationsInput | $Enums.raw_materials_unit
    current_stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_stock_alert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type raw_materialsUncheckedUpdateWithoutRecipe_bomInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: Enumraw_materials_unitFieldUpdateOperationsInput | $Enums.raw_materials_unit
    current_stock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    min_stock_alert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ordersCreateWithoutTablesInput = {
    status?: $Enums.orders_status | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    final_total?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    feedback?: feedbackCreateNestedManyWithoutOrdersInput
    legacy_print_queue?: legacy_print_queueCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    promotions?: promotionsCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutTablesInput = {
    id?: number
    status?: $Enums.orders_status | null
    subtotal?: Decimal | DecimalJsLike | number | string
    promo_id?: number | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    final_total?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    feedback?: feedbackUncheckedCreateNestedManyWithoutOrdersInput
    legacy_print_queue?: legacy_print_queueUncheckedCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutTablesInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutTablesInput, ordersUncheckedCreateWithoutTablesInput>
  }

  export type ordersCreateManyTablesInputEnvelope = {
    data: ordersCreateManyTablesInput | ordersCreateManyTablesInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutTablesInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutTablesInput, ordersUncheckedUpdateWithoutTablesInput>
    create: XOR<ordersCreateWithoutTablesInput, ordersUncheckedCreateWithoutTablesInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutTablesInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutTablesInput, ordersUncheckedUpdateWithoutTablesInput>
  }

  export type ordersUpdateManyWithWhereWithoutTablesInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutTablesInput>
  }

  export type menu_itemsCreateManyCategoriesInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    image_url?: string | null
    status?: $Enums.menu_items_status | null
  }

  export type menu_itemsUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnummenu_items_statusFieldUpdateOperationsInput | $Enums.menu_items_status | null
    feedback?: feedbackUpdateManyWithoutMenu_itemsNestedInput
    order_items?: order_itemsUpdateManyWithoutMenu_itemsNestedInput
    recipe_bom?: recipe_bomUpdateManyWithoutMenu_itemsNestedInput
  }

  export type menu_itemsUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnummenu_items_statusFieldUpdateOperationsInput | $Enums.menu_items_status | null
    feedback?: feedbackUncheckedUpdateManyWithoutMenu_itemsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutMenu_itemsNestedInput
    recipe_bom?: recipe_bomUncheckedUpdateManyWithoutMenu_itemsNestedInput
  }

  export type menu_itemsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnummenu_items_statusFieldUpdateOperationsInput | $Enums.menu_items_status | null
  }

  export type feedbackCreateManyMenu_itemsInput = {
    id?: number
    order_id: number
    rating?: number | null
    review_text?: string | null
    created_at?: Date | string
  }

  export type order_itemsCreateManyMenu_itemsInput = {
    id?: number
    order_id: number
    quantity: number
    notes?: string | null
  }

  export type recipe_bomCreateManyMenu_itemsInput = {
    id?: number
    raw_material_id: number
    quantity_required: Decimal | DecimalJsLike | number | string
  }

  export type feedbackUpdateWithoutMenu_itemsInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type feedbackUncheckedUpdateWithoutMenu_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbackUncheckedUpdateManyWithoutMenu_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_itemsUpdateWithoutMenu_itemsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutMenu_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_itemsUncheckedUpdateManyWithoutMenu_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type recipe_bomUpdateWithoutMenu_itemsInput = {
    quantity_required?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    raw_materials?: raw_materialsUpdateOneRequiredWithoutRecipe_bomNestedInput
  }

  export type recipe_bomUncheckedUpdateWithoutMenu_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    raw_material_id?: IntFieldUpdateOperationsInput | number
    quantity_required?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type recipe_bomUncheckedUpdateManyWithoutMenu_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    raw_material_id?: IntFieldUpdateOperationsInput | number
    quantity_required?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type feedbackCreateManyOrdersInput = {
    id?: number
    menu_item_id: number
    rating?: number | null
    review_text?: string | null
    created_at?: Date | string
  }

  export type legacy_print_queueCreateManyOrdersInput = {
    id?: number
    table_number: number
    total_amount: Decimal | DecimalJsLike | number | string
    status_print?: $Enums.legacy_print_queue_status_print | null
    created_at?: Date | string
  }

  export type order_itemsCreateManyOrdersInput = {
    id?: number
    menu_item_id: number
    quantity: number
    notes?: string | null
  }

  export type feedbackUpdateWithoutOrdersInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    menu_items?: menu_itemsUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type feedbackUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbackUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    review_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type legacy_print_queueUpdateWithoutOrdersInput = {
    table_number?: IntFieldUpdateOperationsInput | number
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status_print?: NullableEnumlegacy_print_queue_status_printFieldUpdateOperationsInput | $Enums.legacy_print_queue_status_print | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type legacy_print_queueUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_number?: IntFieldUpdateOperationsInput | number
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status_print?: NullableEnumlegacy_print_queue_status_printFieldUpdateOperationsInput | $Enums.legacy_print_queue_status_print | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type legacy_print_queueUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_number?: IntFieldUpdateOperationsInput | number
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status_print?: NullableEnumlegacy_print_queue_status_printFieldUpdateOperationsInput | $Enums.legacy_print_queue_status_print | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_itemsUpdateWithoutOrdersInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    menu_items?: menu_itemsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordersCreateManyPromotionsInput = {
    id?: number
    table_id: number
    status?: $Enums.orders_status | null
    subtotal?: Decimal | DecimalJsLike | number | string
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    final_total?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type ordersUpdateWithoutPromotionsInput = {
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: feedbackUpdateManyWithoutOrdersNestedInput
    legacy_print_queue?: legacy_print_queueUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    tables?: tablesUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutPromotionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: feedbackUncheckedUpdateManyWithoutOrdersNestedInput
    legacy_print_queue?: legacy_print_queueUncheckedUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutPromotionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recipe_bomCreateManyRaw_materialsInput = {
    id?: number
    menu_item_id: number
    quantity_required: Decimal | DecimalJsLike | number | string
  }

  export type recipe_bomUpdateWithoutRaw_materialsInput = {
    quantity_required?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menu_items?: menu_itemsUpdateOneRequiredWithoutRecipe_bomNestedInput
  }

  export type recipe_bomUncheckedUpdateWithoutRaw_materialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    quantity_required?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type recipe_bomUncheckedUpdateManyWithoutRaw_materialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_item_id?: IntFieldUpdateOperationsInput | number
    quantity_required?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ordersCreateManyTablesInput = {
    id?: number
    status?: $Enums.orders_status | null
    subtotal?: Decimal | DecimalJsLike | number | string
    promo_id?: number | null
    discount_amount?: Decimal | DecimalJsLike | number | string | null
    final_total?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type ordersUpdateWithoutTablesInput = {
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: feedbackUpdateManyWithoutOrdersNestedInput
    legacy_print_queue?: legacy_print_queueUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    promotions?: promotionsUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutTablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    promo_id?: NullableIntFieldUpdateOperationsInput | number | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: feedbackUncheckedUpdateManyWithoutOrdersNestedInput
    legacy_print_queue?: legacy_print_queueUncheckedUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutTablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    promo_id?: NullableIntFieldUpdateOperationsInput | number | null
    discount_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    final_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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