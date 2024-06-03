import vine from '@vinejs/vine';

/**
 * Validates the post's creation action
 */
  

export const creatPostValidator = vine.compile(
    vine.object({
        nom:vine.string().trim().minLength(2),
        prenom:vine.string().trim(),
        email:vine.string().email(),
    })
);