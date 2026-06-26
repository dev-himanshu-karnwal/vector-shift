import { Position } from 'reactflow';
import { createNode } from './createNode';

export const TextNode = createNode({
  title: 'Text',
  handles: [{ type: 'source', position: Position.Right, id: 'output' }],
  fields: [
    {
      name: 'text',
      label: 'Text',
      defaultValue: '{{input}}',
    },
  ],
});
