export default function useDrag<E extends HTMLElement>(onDragCallback: (deltaX: number) => void) {
  return {
    onDragStart: (clickEvent: React.MouseEvent<E>) => {
      // clickEvent.stopPropagation();

      const ondrag = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.screenX - clickEvent.screenX;
        onDragCallback(deltaX);
      };

      const dragEnd = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.screenX - clickEvent.screenX;
        onDragCallback(deltaX);
        document.removeEventListener('mousemove', ondrag);
      };

      document.addEventListener('drag', ondrag);
      document.addEventListener('dragend', dragEnd, { once: true });
    },
  };
}
