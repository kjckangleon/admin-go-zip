import React from "react";
import styled from "styled-components";

const LanguageWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const Select = styled.select`
  padding: 8px 40px 8px 12px;
  border: 2px solid #6a1b9a; /* Purple */
  border-radius: 20px;
  background-color: #fff;
  color: #6a1b9a;
  font-weight: 600;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  appearance: none;

  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='30,50 70,90 110,50' fill='none' stroke='%236A1B9A' stroke-width='14' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 12px;
`;

const LanguageDropdown = ({ value, onChange }) => {
  return (
    <LanguageWrapper>
      <Select value={value} onChange={onChange}>
        <option value="en">English</option>
        <option value="pl">Polish</option>
      </Select>
    </LanguageWrapper>
  );
};

export default LanguageDropdown;
