import {z} from "zod"

export const UserSignupSchema = z.object({
    name: z.string().min(2),
    username: z.string().min(3).refine(s => !s.includes(' '), 'No Spaces!'),
    password: z.string().min(5).refine(s => !s.includes(' '), 'No Spaces!')
})

export type UserSignupType = z.infer<typeof UserSignupSchema>

export const UserSigninSchema = z.object({
    username: z.string().min(3).refine(s => !s.includes(' '), 'No Spaces!'),
    password: z.string().min(5).refine(s => !s.includes(' '), 'No Spaces!')
})

export type UserSigninType = z.infer<typeof UserSigninSchema>

