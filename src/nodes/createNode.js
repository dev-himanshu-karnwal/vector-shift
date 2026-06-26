import { useState } from 'react';
import { BaseNode } from './BaseNode';

const resolveDefaultValue = (field, id, data) => {
  if (typeof field.defaultValue === 'function') {
    return field.defaultValue(id, data);
  }
  return data?.[field.name] ?? field.defaultValue;
};

const renderFieldInput = (field, value, onChange) => {
  if (field.type === 'select') {
    return (
      <select
        className="vs-node__select"
        value={value}
        onChange={onChange}
      >
        {field.options.map((option) => {
          const optionValue =
            typeof option === 'object' ? option.value : option;
          const optionLabel =
            typeof option === 'object' ? option.label : option;
          return (
            <option key={optionValue} value={optionValue}>
              {optionLabel}
            </option>
          );
        })}
      </select>
    );
  }

  if (field.type === 'textarea') {
    return (
      <textarea
        className="vs-node__textarea"
        value={value}
        onChange={onChange}
        rows={field.rows ?? 3}
        {...field.inputProps}
      />
    );
  }

  return (
    <input
      className="vs-node__input"
      type={field.type || 'text'}
      value={value}
      onChange={onChange}
      {...field.inputProps}
    />
  );
};

export function createNode({
  title,
  width = 200,
  height = 80,
  style,
  handles = [],
  fields = [],
  render,
}) {
  const NodeComponent = ({ id, data }) => {
    const [fieldValues, setFieldValues] = useState(() =>
      Object.fromEntries(
        fields.map((field) => [
          field.name,
          resolveDefaultValue(field, id, data),
        ])
      )
    );

    const setField = (name, value) => {
      setFieldValues((prev) => ({ ...prev, [name]: value }));
    };

    const renderFields = () => (
      <div className="vs-node__fields">
        {fields.map((field) => (
          <label key={field.name} className="vs-node__field">
            <span className="vs-node__field-label">{field.label}</span>
            {renderFieldInput(
              field,
              fieldValues[field.name],
              (e) => setField(field.name, e.target.value)
            )}
          </label>
        ))}
      </div>
    );

    const content = (
      <>
        {fields.length > 0 && renderFields()}
        {render && (
          <div className="vs-node__content">
            {render({ id, data, values: fieldValues, setField })}
          </div>
        )}
      </>
    );

    return (
      <BaseNode
        id={id}
        title={title}
        width={width}
        height={height}
        style={style}
        handles={handles}
      >
        {content}
      </BaseNode>
    );
  };

  NodeComponent.displayName = title ? `${title}Node` : 'Node';
  return NodeComponent;
}
