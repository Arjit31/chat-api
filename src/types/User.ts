import {z} from "zod"

export const UserSignupSchema = z.object({
    name: z.string().min(2),
    username: z.string().min(2),
    password: z.string().min(5)
})

export type UserSignupType = z.infer<typeof UserSignupSchema>

export const UserSigninSchema = z.object({
    username: z.string().min(2),
    password: z.string().min(5)
})

export type UserSigninType = z.infer<typeof UserSigninSchema>

