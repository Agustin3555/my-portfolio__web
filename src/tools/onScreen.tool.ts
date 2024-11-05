interface Options {
  observed: Element;
  containerObserver?: Element;
  margin?: string;
  threshold?: number | number[];
}

export const onScreen = (
  { observed, containerObserver, margin, threshold }: Options,
  onIntersectionChange: (isIntersecting: boolean) => void,
) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      const { isIntersecting } = entry;

      onIntersectionChange(isIntersecting);
    },
    { root: containerObserver, rootMargin: margin, threshold },
  );

  observer.observe(observed);
};
