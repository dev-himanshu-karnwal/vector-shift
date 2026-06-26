// toolbar.js

import { DraggableNode } from './draggableNode';
import { nodeRegistry, nodeGroups } from './nodes';

export const PipelineToolbar = () => {
  return (
    <aside className="node-panel">
      <p className="node-panel__title">Nodes</p>
      <div className="node-panel__groups">
        {nodeGroups.map((group) => {
          const nodes = nodeRegistry.filter((node) => node.group === group.id);
          if (nodes.length === 0) return null;

          return (
            <section key={group.id} className="node-group">
              <p className="node-group__label">{group.label}</p>
              <div className="node-group__list">
                {nodes.map(({ type, label }) => (
                  <DraggableNode key={type} type={type} label={label} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </aside>
  );
};
