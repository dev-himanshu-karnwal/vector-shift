import { Position } from 'reactflow';
import { createNode } from './createNode';

export const LLMNode = createNode({
  title: 'LLM',
  handles: [
    {
      type: 'target',
      position: Position.Left,
      id: 'system',
      label: 'System',
      style: { top: `${100 / 3}%` },
    },
    {
      type: 'target',
      position: Position.Left,
      id: 'prompt',
      label: 'Prompt',
      style: { top: `${200 / 3}%` },
    },
    { type: 'source', position: Position.Right, id: 'response', label: 'Response' },
  ],
  render: () => (
    <div>
      <span>This is a LLM.</span>
    </div>
  ),
});
