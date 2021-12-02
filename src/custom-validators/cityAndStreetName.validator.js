import { helpers } from "@vuelidate/validators";

export const cityAndStreetNameValidator = helpers.regex(
  /^[^\W\d_]+\.?(?:[-\s'’][^\W\d_]+\.?)*$/
);
