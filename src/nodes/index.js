import { InputNode } from './inputNode';
import { OutputNode } from './outputNode';
import { LLMNode } from './llmNode';
import { TextNode } from './textNode';
import { FilterNode } from './filterNode';
import { DelayNode } from './delayNode';
import { MergeNode } from './mergeNode';
import { NoteNode } from './noteNode';
import { ConditionNode } from './conditionNode';

export const nodeRegistry = [
  { type: 'customInput', label: 'Input', component: InputNode, group: 'io' },
  { type: 'customOutput', label: 'Output', component: OutputNode, group: 'io' },
  { type: 'llm', label: 'LLM', component: LLMNode, group: 'core' },
  { type: 'text', label: 'Text', component: TextNode, group: 'core' },
  { type: 'filter', label: 'Filter', component: FilterNode, group: 'logic' },
  { type: 'condition', label: 'Condition', component: ConditionNode, group: 'logic' },
  { type: 'delay', label: 'Delay', component: DelayNode, group: 'logic' },
  { type: 'merge', label: 'Merge', component: MergeNode, group: 'logic' },
  { type: 'note', label: 'Note', component: NoteNode, group: 'utility' },
];

export const nodeGroups = [
  { id: 'io', label: 'Input / Output' },
  { id: 'core', label: 'Core' },
  { id: 'logic', label: 'Logic' },
  { id: 'utility', label: 'Utility' },
];

export const nodeTypes = Object.fromEntries(
  nodeRegistry.map(({ type, component }) => [type, component])
);

export {
  InputNode,
  OutputNode,
  LLMNode,
  TextNode,
  FilterNode,
  DelayNode,
  MergeNode,
  NoteNode,
  ConditionNode,
};
