import { Position } from 'reactflow';
import { createNode } from './createNode';

export const FilterNode = createNode({
  title: 'Filter',
  handles: [
    { type: 'target', position: Position.Left, id: 'input' },
    { type: 'source', position: Position.Right, id: 'output' },
  ],
  fields: [
    {
      name: 'expression',
      label: 'Expression',
      defaultValue: 'item => item.active',
    },
    {
      name: 'mode',
      label: 'Mode',
      type: 'select',
      options: ['Include', 'Exclude'],
      defaultValue: 'Include',
    },
  ],
});
