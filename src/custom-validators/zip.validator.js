import { helpers } from "@vuelidate/validators";

export const zipCodeValidator = helpers.regex(/^\d{4}\s?\w{2}$/);
