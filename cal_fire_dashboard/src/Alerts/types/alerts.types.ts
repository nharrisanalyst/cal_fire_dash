import * as z from "zod";

export const AlertData = z.object({
  event: z.string(),
  headline: z.string().nullable(),
  description: z.string(),
  instruction: z.string().nullable(),
  geocode:z.object({
    SAME:z.array(z.string()),
  })
})

export const AlertDataFeature = z.object({
  properties:AlertData,
});

export type AlertType = z.infer<typeof AlertData>;

export const AlertFeatures = z.object({ features: z.array(AlertDataFeature) });

export type AlerFeaturesType = z.infer<typeof AlertFeatures>;
