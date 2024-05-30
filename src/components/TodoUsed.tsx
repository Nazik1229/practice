import React, { useCallback } from 'react';

interface UsedProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: () => void;
  }

const TodoUsed: React.FC<UsedProps> = React.memo(({ value, onChange, onAdd }) => {
  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Послушать"
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
});

export default TodoUsed;