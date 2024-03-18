import React, { useEffect, useRef } from "react";

export const Input = ({
  label,
  fieldName,
  onChangeHandler,
  defaultValue,
  type = "text",
  resetCounter,
}) => {
  const input = useRef(null);
  useEffect(() => {
    if (input && input.current) {
      input.current.value = defaultValue ? defaultValue : "";
    }
  }, [resetCounter]);

  return (
    <div style={{ position: "relative", marginBottom: "20px" }}>
      <label
        htmlFor={fieldName}
        style={{
          position: "absolute",
          top: input.current && input.current.value ? "-5px" : "40%",
          left: "12px",
          transformOrigin: "left",
          transform:
            input.current && input.current.value
              ? "translateY(-35%) scale(0.75)"
              : "translateY(-35%)",
          transition: "all 0.15s ease",
          color: input.current && input.current.value ? "#000" : "#aaa",
          pointerEvents: "none",
          zIndex: 1,
          backgroundColor: "#fff",
          padding: "0 4px",
        }}
      >
        {label}
      </label>
      <input
        ref={input}
        type={type}
        id={fieldName}
        name={fieldName}
        onChange={onChangeHandler}
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          width: "100%",
          transition: "border-color 0.3s ease",
        }}
      />
    </div>
  );
};
