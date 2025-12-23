import { type ImageMetadata } from "astro";

export type ImgFolder = "techs" | "experiences";

/*
  "glob" necesita un literal como parámetro, por lo tanto no se puede
  refactorizar y usar los template string.
*/
const imgGlobs: Record<ImgFolder, any> = {
  techs: import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/techs/*.{jpeg,jpg,png,gif,webp,svg}",
  ),
  experiences: import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/experiences/*.{jpeg,jpg,png,gif,webp,svg}",
  ),
};

const resolveImgMeta = (folder: ImgFolder, file: string) =>
  imgGlobs[folder][`/src/assets/${folder}/${file}`];

// Validación de los paths de las imágenes
const validateImgExists = (folder: ImgFolder, file: string) => {
  if (!resolveImgMeta(folder, file))
    throw new Error(
      `"${file}" does not exist in glob: "src/assets/${folder}/"`,
    );
};

export const getImgMeta = (folder: ImgFolder, file: string) => {
  validateImgExists(folder, file);
  return resolveImgMeta(folder, file);
};
