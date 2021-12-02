import { helpers } from "@vuelidate/validators";

export const imageValidator = (image) =>
  !helpers.req(image) ||
  // If an image is to be uploaded (i.e. to be set as a file object), check its type
  image.type === "image/png" ||
  image.type === "image/jpeg" ||
  // If an image has been uploaded (i.e. its link has been set as a string), check its extension
  image.endsWith(".png") ||
  image.endsWith(".jpg") ||
  image.endsWith(".jpeg");
