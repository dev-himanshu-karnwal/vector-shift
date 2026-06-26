// toolbar.js

import { DraggableNode } from './draggableNode';
import { nodeRegistry, nodeGroups } from './nodes';
import { useTouchLike } from './hooks/useTouchLike';

export const PipelineToolbar = ({ onTapAdd }) => {
  const isTouchLike = useTouchLike();

  return (
    <aside className={`node-panel${isTouchLike ? ' node-panel--touch' : ''}`}>
      <p className="node-panel__title">
        {isTouchLike ? 'Tap to add nodes' : 'Nodes'}
      </p>
      <div className="node-panel__groups">
        {nodeGroups.map((group) => {
          const nodes = nodeRegistry.filter((node) => node.group === group.id);
          if (nodes.length === 0) return null;

          return (
            <section key={group.id} className="node-group">
              <p className="node-group__label">{group.label}</p>
              <div className="node-group__list">
                {nodes.map(({ type, label }) => (
                  <DraggableNode
                    key={type}
                    type={type}
                    label={label}
                    onTapAdd={isTouchLike ? onTapAdd : undefined}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </aside>
  );
};
