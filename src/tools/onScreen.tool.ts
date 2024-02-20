/**
 * Observa si un elemento se visualiza en su contenedor observador y ejecuta una función de devolución de llamada cuando cambia su intersección con su contenedor.
 * @param observed - El elemento que se va a observar.
 * @param containerObserver - El elemento contenedor observador. Por defecto, el viewport del navegador.
 * @param margin - Margen aplicado al área de intersección del contenedor.
 * @param threshold - Umbral o umbrales de intersección para activar la devolución de llamada.
 * @param onIntersectionChange - Función de devolución de llamada que se ejecuta cuando cambia la intersección del elemento con el contenedor.
 */
export const onScreen = ({
  observed,
  containerObserver,
  margin,
  threshold,
  onIntersectionChange,
}: {
  observed?: Element;
  containerObserver?: Element;
  margin?: string;
  threshold?: number | number[];
  onIntersectionChange?: (isIntersecting: boolean) => void;
}) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      const { isIntersecting } = entry;

      onIntersectionChange && onIntersectionChange(isIntersecting);
    },
    { root: containerObserver, rootMargin: margin, threshold },
  );

  observed && observer.observe(observed);
};
