export default function useTouch<E extends HTMLElement>(onDragCallback: (deltaX: number) => void) {
  return {
    onTouchStart: (touchEvent: React.TouchEvent<E>) => {
      // clickEvent.stopPropagation();

      const ondrag = (moveEvent: TouchEvent) => {
        const deltaX = moveEvent.changedTouches[0].screenX - touchEvent.changedTouches[0].screenX;
        onDragCallback(deltaX);
      };

      const dragEnd = (moveEvent: TouchEvent) => {
        const deltaX = moveEvent.changedTouches[0].screenX - touchEvent.changedTouches[0].screenX;
        onDragCallback(deltaX);
        document.removeEventListener('touchend', ondrag);
      };

      document.addEventListener('touchmove', ondrag);
      document.addEventListener('touchend', dragEnd, { once: true });
    },
  };
}
