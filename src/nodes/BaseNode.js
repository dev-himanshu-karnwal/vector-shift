import { Handle, Position } from 'reactflow';

const DEFAULT_STYLE = { width: 200, height: 80, border: '1px solid black' };

const resolvePosition = (position) =>
  position === 'left' || position === Position.Left ? Position.Left : Position.Right;

export const BaseNode = ({
  id,
  title,
  width = 200,
  height = 80,
  style,
  handles = [],
  children,
}) => {
  const leftHandles = handles.filter((h) => resolvePosition(h.position) === Position.Left);
  const rightHandles = handles.filter((h) => resolvePosition(h.position) === Position.Right);

  return (
    <div style={{ ...DEFAULT_STYLE, width, height, ...style }}>
      {leftHandles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={Position.Left}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
      <div>
        <span>{title}</span>
      </div>
      {children}
      {rightHandles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={Position.Right}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
    </div>
  );
};
