import { Position } from 'reactflow';
import { createNode } from './createNode';

export const InputNode = createNode({
  title: 'Input',
  handles: [{ type: 'source', position: Position.Right, id: 'value' }],
  fields: [
    {
      name: 'inputName',
      label: 'Name',
      defaultValue: (id) => id.replace('customInput-', 'input_'),
    },
    {
      name: 'inputType',
      label: 'Type',
      type: 'select',
      options: ['Text', 'File'],
      defaultValue: 'Text',
    },
  ],
});
