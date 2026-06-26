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
  { type: 'customInput', label: 'Input', component: InputNode },
  { type: 'llm', label: 'LLM', component: LLMNode },
  { type: 'customOutput', label: 'Output', component: OutputNode },
  { type: 'text', label: 'Text', component: TextNode },
  { type: 'filter', label: 'Filter', component: FilterNode },
  { type: 'delay', label: 'Delay', component: DelayNode },
  { type: 'merge', label: 'Merge', component: MergeNode },
  { type: 'note', label: 'Note', component: NoteNode },
  { type: 'condition', label: 'Condition', component: ConditionNode },
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
