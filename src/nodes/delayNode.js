import { Position } from 'reactflow';
import { createNode } from './createNode';

export const DelayNode = createNode({
  title: 'Delay',
  height: 100,
  handles: [
    { type: 'target', position: Position.Left, id: 'input' },
    { type: 'source', position: Position.Right, id: 'output' },
  ],
  fields: [
    {
      name: 'delayMs',
      label: 'Delay (ms)',
      type: 'number',
      defaultValue: '1000',
      inputProps: { min: 0, step: 100 },
    },
  ],
});
