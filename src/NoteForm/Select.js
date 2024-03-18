import React, { useEffect, useRef } from "react"

export const Select = ({ label, fieldName, defaultValue, options, onChange, resetCounter }) => {
  const select = useRef(null)
  useEffect(() => {
    if (select && select.current) {
      select.current.value = defaultValue
    }
  }, [resetCounter])
  return (
    <div>
      <label htmlFor={fieldName} style={{padding:"10px", minWidth: "80px", display: "inline-block"}}>{label}: </label>
      <select ref={select} id={fieldName} name={fieldName} defaultValue={defaultValue} onChange={onChange} style={{ minWidth: "120px", padding: "5px 10px" }}>
        {options.map((x, i) => (
          <option key={i} value={x}>
            {x}
          </option>
        ))}
      </select>
    </div>
  )
}