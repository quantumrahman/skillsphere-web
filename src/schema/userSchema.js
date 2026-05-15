import z from 'zod';

export const userSchema = z.object({
    name: z
        .string()
        .trim()
        .nonempty({
            message: "Please enter your name."
        })
        .min(4, {
            message: "Name must be at least 20 characters."
        })
        .regex(/^[A-Za-z\s]+$/, {
            message: "Name can only contain letters and spaces"
        }),

    photo: z
        .string()
        .trim()
        .nonempty({
            message: "Please enter photo your."
        })
        .url({
            message: "Please enter a valid url."
        }),
});