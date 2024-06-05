import { z } from "zod";

const envSchema = z.object({
    MODE: z.enum(['production', 'development', 'test']),
    VITE_API_URL: z.string(),
    //Para simular deley na página
    VITE_ENABLE_API_DELEY: z.string().transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)