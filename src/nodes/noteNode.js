import { createNode } from './createNode';

export const NoteNode = createNode({
  title: 'Note',
  width: 220,
  height: 120,
  handles: [],
  fields: [
    {
      name: 'content',
      label: 'Note',
      type: 'textarea',
      rows: 4,
      defaultValue: 'Add a pipeline annotation here...',
    },
  ],
});
