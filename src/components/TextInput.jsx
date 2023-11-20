import React from 'react';

const TextInput = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div className="mb-2">
      <div className="text-black text-sm mb-1">{label}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default TextInput;