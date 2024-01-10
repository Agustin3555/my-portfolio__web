export const adaptable = (
  adaptable: HTMLElement,
  content: HTMLElement,
  form?: boolean,
) => {
  const handleResize = (entries: ResizeObserverEntry[]) => {
    if (entries.length > 0) {
      const firstEntry = entries[0];
      const { width, height } = firstEntry.contentRect;

      if (form === undefined) {
        adaptable.style.width = `${width}px`;
        adaptable.style.height = `${height}px`;
      } else
        form
          ? (adaptable.style.width = `${width}px`)
          : (adaptable.style.height = `${height}px`);
    }
  };

  const resizeObserver = new ResizeObserver(handleResize);

  resizeObserver.observe(content);
};
