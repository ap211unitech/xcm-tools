import { z } from 'zod';

export type JunctionType =
  | 'Parachain'
  | 'AccountId32'
  | 'AccountIndex64'
  | 'AccountKey20'
  | 'PalletInstance'
  | 'GeneralIndex'
  | 'GeneralKey'
  | 'OnlyChild'
  | 'Plurality'
  | 'GlobalConsensus';

const JunctionParachain = z.object({ Parachain: z.string() });
const JunctionAccountId32 = z.object({
  AccountId32: z.object({ network: z.string().nullable(), id: z.string() }),
});
const JunctionAccountIndex64 = z.object({
  AccountIndex64: z.object({ network: z.string().nullable(), index: z.string() }),
});
const JunctionAccountKey20 = z.object({
  AccountKey20: z.object({ network: z.string().nullable(), key: z.string() }),
});
const JunctionPalletInstance = z.object({ PalletInstance: z.string() });
const JunctionGeneralIndex = z.object({ GeneralIndex: z.string() });
const JunctionGeneralKey = z.object({
  GeneralKey: z.object({ length: z.string(), data: z.string() }),
});
const JunctionOnlyChild = z.object({ OnlyChild: z.string() });
const JunctionPlurality = z.object({
  Plurality: z.object({ id: z.string(), part: z.string().nullable() }),
});
const JunctionGlobalConsensus = z.object({ GlobalConsensus: z.string() });

const JunctionSchema = z.union([
  JunctionParachain,
  JunctionAccountId32,
  JunctionAccountIndex64,
  JunctionAccountKey20,
  JunctionPalletInstance,
  JunctionGeneralIndex,
  JunctionGeneralKey,
  JunctionOnlyChild,
  JunctionPlurality,
  JunctionGlobalConsensus,
]);

const Junctions = z.lazy(() =>
  z.object({
    X1: JunctionSchema.optional(),
    X2: z.tuple([JunctionSchema, JunctionSchema]).optional(),
    X3: z.tuple([JunctionSchema, JunctionSchema, JunctionSchema]).optional(),
    X4: z.tuple([JunctionSchema, JunctionSchema, JunctionSchema, JunctionSchema]).optional(),
    X5: z
      .tuple([JunctionSchema, JunctionSchema, JunctionSchema, JunctionSchema, JunctionSchema])
      .optional(),
    X6: z
      .tuple([
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
      ])
      .optional(),
    X7: z
      .tuple([
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
      ])
      .optional(),
    X8: z
      .tuple([
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
      ])
      .optional(),
    X9: z
      .tuple([
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
      ])
      .optional(),
    X10: z
      .tuple([
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
        JunctionSchema,
      ])
      .optional(),
  }),
);

export const MultiLocationSchema = z.object({
  parents: z.string(),
  interior: Junctions,
});

export type MultiLocation = z.infer<typeof MultiLocationSchema>;
export type Junction = z.infer<typeof JunctionSchema>;
