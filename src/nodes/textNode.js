import { useState, useMemo, useRef, useLayoutEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { getHandleTopPercent, parseTextVariables } from './textNodeUtils';

const CONTENT_MAX_WIDTH = 448;
const mirrorContent = (text) => `${text}\n`;

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text ?? '{{input}}');
  const [wrap, setWrap] = useState(false);
  const growRef = useRef(null);

  const variables = useMemo(() => parseTextVariables(text), [text]);

  const handles = useMemo(() => {
    const variableHandles = variables.map((name, index) => ({
      type: 'target',
      position: Position.Left,
      id: name,
      label: name,
      style: { top: getHandleTopPercent(index, variables.length) },
    }));

    return [
      ...variableHandles,
      { type: 'source', position: Position.Right, id: 'output', label: 'Output' },
    ];
  }, [variables]);

  useLayoutEffect(() => {
    const grow = growRef.current;
    const mirror = grow?.querySelector('.vs-text-node__mirror');
    if (!grow || !mirror) return;

    grow.style.maxWidth = 'none';
    mirror.style.whiteSpace = 'pre';
    const naturalWidth = mirror.scrollWidth;
    grow.style.maxWidth = '';

    setWrap(text.includes('\n') || naturalWidth > CONTENT_MAX_WIDTH);
  }, [text]);

  return (
    <BaseNode id={id} title="Text" autoSize handles={handles}>
      <div className="vs-node__fields vs-text-node">
        <label className="vs-node__field">
          <span className="vs-node__field-label">Text</span>
          <div
            ref={growRef}
            className={`vs-text-node__grow${wrap ? ' vs-text-node__grow--wrap' : ''}`}
          >
            <textarea
              className="vs-text-node__textarea"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={1}
              spellCheck={false}
            />
            <div className="vs-text-node__mirror" aria-hidden="true">
              {mirrorContent(text)}
            </div>
          </div>
        </label>
      </div>
    </BaseNode>
  );
};
