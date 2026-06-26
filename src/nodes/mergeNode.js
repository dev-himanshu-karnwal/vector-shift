import { Position } from 'reactflow';
import { createNode } from './createNode';

export const MergeNode = createNode({
  title: 'Merge',
  height: 120,
  handles: [
    { type: 'target', position: Position.Left, id: 'a', style: { top: '25%' } },
    { type: 'target', position: Position.Left, id: 'b', style: { top: '50%' } },
    { type: 'target', position: Position.Left, id: 'c', style: { top: '75%' } },
    { type: 'source', position: Position.Right, id: 'merged' },
  ],
  fields: [
    {
      name: 'strategy',
      label: 'Strategy',
      type: 'select',
      options: ['Concatenate', 'Zip', 'First available'],
      defaultValue: 'Concatenate',
    },
  ],
});
