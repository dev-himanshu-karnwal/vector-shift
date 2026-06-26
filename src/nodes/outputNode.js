import { Position } from 'reactflow';
import { createNode } from './createNode';

export const OutputNode = createNode({
  title: 'Output',
  handles: [{ type: 'target', position: Position.Left, id: 'value', label: 'Value' }],
  fields: [
    {
      name: 'outputName',
      label: 'Name',
      defaultValue: (id) => id.replace('customOutput-', 'output_'),
    },
    {
      name: 'outputType',
      label: 'Type',
      type: 'select',
      options: [
        { value: 'Text', label: 'Text' },
        { value: 'File', label: 'Image' },
      ],
      defaultValue: 'Text',
    },
  ],
});
