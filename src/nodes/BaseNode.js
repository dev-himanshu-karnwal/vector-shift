import { Handle, Position } from 'reactflow';

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
  const leftHandles = handles.filter(
    (h) => resolvePosition(h.position) === Position.Left
  );
  const rightHandles = handles.filter(
    (h) => resolvePosition(h.position) === Position.Right
  );

  return (
    <div className="vs-node" style={{ width, minHeight: height, ...style }}>
      {leftHandles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={Position.Left}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
      <div className="vs-node__header">
        <span className="vs-node__title">{title}</span>
      </div>
      <div className="vs-node__body">{children}</div>
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
