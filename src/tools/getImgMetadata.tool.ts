import { type ImageMetadata } from "astro";

export type Folder = "techs" | "experiences";

/*
  "glob" necesita un literal como parámetro, por lo tanto no se puede
  refactorizar y usar los template string.
*/
const assets: Record<Folder, any> = {
  techs: import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/techs/*.{jpeg,jpg,png,gif,webp,svg}",
  ),
  experiences: import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/experiences/*.{jpeg,jpg,png,gif,webp,svg}",
  ),
};

export const getImgMetadata = (folder: Folder, file: string) =>
  assets[folder][`/src/assets/${folder}/${file}`];

// Validación de los paths de las imágenes
export const validateImgMetadata = (folder: Folder, file: string) => {
  if (!getImgMetadata(folder, file))
    throw new Error(
      `"${file}" does not exist in glob: "src/assets/${folder}/"`,
    );
};
