// draggableNode.js

import { useRef } from 'react';

const TAP_THRESHOLD_PX = 10;

export const DraggableNode = ({ type, label, onTapAdd }) => {
  const touchStart = useRef(null);

  const onDragStart = (event) => {
    const appData = { nodeType: type };
    event.currentTarget.style.cursor = 'grabbing';
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleTouchStart = (event) => {
    if (!onTapAdd) return;
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event) => {
    if (!onTapAdd || !touchStart.current) return;

    const touch = event.changedTouches[0];
    const dx = Math.abs(touch.clientX - touchStart.current.x);
    const dy = Math.abs(touch.clientY - touchStart.current.y);

    if (dx < TAP_THRESHOLD_PX && dy < TAP_THRESHOLD_PX) {
      event.preventDefault();
      onTapAdd(type);
    }

    touchStart.current = null;
  };

  return (
    <div
      className={`vs-palette-node ${type}${onTapAdd ? ' vs-palette-node--touch' : ''}`}
      onDragStart={onTapAdd ? undefined : (event) => onDragStart(event)}
      onDragEnd={
        onTapAdd
          ? undefined
          : (event) => {
              event.currentTarget.style.cursor = 'grab';
            }
      }
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      draggable={!onTapAdd}
      role="button"
      tabIndex={onTapAdd ? 0 : undefined}
      onKeyDown={
        onTapAdd
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onTapAdd(type);
              }
            }
          : undefined
      }
    >
      <span>{label}</span>
    </div>
  );
};
