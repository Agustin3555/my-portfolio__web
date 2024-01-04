export const adaptable = (adaptable: HTMLElement, content: HTMLElement) => {
  const handleResize = (entries: ResizeObserverEntry[]) => {
    if (entries.length > 0) {
      const firstEntry = entries[0];
      const { width, height } = firstEntry.contentRect;

      adaptable.style.width = `${width}px`;
      adaptable.style.height = `${height}px`;
    }
  };

  const resizeObserver = new ResizeObserver(handleResize);

  resizeObserver.observe(content);
};
