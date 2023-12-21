interface IntersectionOptions {
  // Márgenes adicionales alrededor del root
  rootMargin?: string;
  // Umbral de intersección
  threshold?: number | number[];
}

export const onScreen = ({
  element,
  options,
  onIntersectionChange,
}: {
  element?: Element;
  options?: IntersectionOptions;
  onIntersectionChange?: (isIntersecting: boolean) => void;
}) => {
  const observer = new IntersectionObserver(([entry]) => {
    const { isIntersecting } = entry;

    if (onIntersectionChange) onIntersectionChange(isIntersecting);
  }, options);

  if (element) observer.observe(element);

  // TODO: que hacer cuando el elemento se elimine?

  // return () => {
  //   // Deja de observar el elemento actual
  //   if (currentElement) observer.unobserve(currentElement);
  // };
};
