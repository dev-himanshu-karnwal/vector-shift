import { Position } from 'reactflow';
import { createNode } from './createNode';

export const ConditionNode = createNode({
  title: 'Condition',
  height: 100,
  handles: [
    { type: 'target', position: Position.Left, id: 'input', label: 'Input' },
    {
      type: 'source',
      position: Position.Right,
      id: 'true',
      label: 'True',
      style: { top: '35%' },
    },
    {
      type: 'source',
      position: Position.Right,
      id: 'false',
      label: 'False',
      style: { top: '65%' },
    },
  ],
  fields: [
    {
      name: 'condition',
      label: 'If',
      defaultValue: 'value > 0',
    },
  ],
  render: ({ values }) => (
    <div>
      <div>
        <span>Branches: true / false</span>
      </div>
      <div>
        <span>Evaluating: {values.condition}</span>
      </div>
    </div>
  ),
});
