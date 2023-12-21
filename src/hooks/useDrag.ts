export default function useDrag<E extends HTMLElement>(onDragCallback: (deltaX: number) => void) {
  return {
    onMouseDown: (clickEvent: React.MouseEvent<E>) => {
      // clickEvent.stopPropagation();

      const onMouseMove = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.screenX - clickEvent.screenX;
        onDragCallback(deltaX);
      };

      const onMouseUp = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.screenX - clickEvent.screenX;
        onDragCallback(deltaX);
        document.removeEventListener('mousemove', onMouseMove);
      };

      document.addEventListener('drag', onMouseMove);
      document.addEventListener('dragend', onMouseUp, { once: true });
    },
  };
}
