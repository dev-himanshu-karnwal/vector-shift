import { Handle, Position } from 'reactflow';
import { formatHandleLabel } from './handleUtils';

const HandleWithLabel = ({ nodeId, handle, side }) => {
  const label = handle.label ?? formatHandleLabel(handle.id);
  const top = handle.style?.top ?? '50%';
  const isLeft = side === 'left';

  return (
    <div
      className={`vs-handle-slot vs-handle-slot--${side}`}
      style={{ top }}
    >
      <Handle
        type={handle.type}
        position={isLeft ? Position.Left : Position.Right}
        id={`${nodeId}-${handle.id}`}
        title={label}
        aria-label={label}
      />
      <span className="vs-handle-slot__label">{label}</span>
    </div>
  );
};

export const BaseNode = ({
  id,
  title,
  width = 200,
  height = 80,
  style,
  handles = [],
  children,
  autoSize = false,
}) => {
  const leftHandles = handles.filter(
    (h) => h.position === 'left' || h.position === Position.Left
  );
  const rightHandles = handles.filter(
    (h) => h.position === 'right' || h.position === Position.Right
  );

  const sizeStyle = autoSize
    ? { width: 'max-content', height: 'auto', minHeight: 'unset' }
    : { width, minHeight: height };

  return (
    <div
      className={`vs-node${autoSize ? ' vs-node--auto-size' : ''}`}
      style={{ ...sizeStyle, ...style }}
    >
      {leftHandles.map((handle) => (
        <HandleWithLabel
          key={handle.id}
          nodeId={id}
          handle={handle}
          side="left"
        />
      ))}
      <div className="vs-node__header">
        <span className="vs-node__title">{title}</span>
      </div>
      <div className="vs-node__body">{children}</div>
      {rightHandles.map((handle) => (
        <HandleWithLabel
          key={handle.id}
          nodeId={id}
          handle={handle}
          side="right"
        />
      ))}
    </div>
  );
};
