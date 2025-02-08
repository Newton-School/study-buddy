"use client";
import { NSButton } from "@newtonschool/grauity";
import "./Style.css";
export const MyComponent = () => (
  <div className="centered">
    <NSButton
      ariaLabel="button"
      buttonProps={{}}
      className="my-class"
      icon="link"
      iconPosition="left"
      iconSize="24"
      onClick={() => {}}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      size="extra-large"
      style={{
        color: "",
      }}
      tabIndex={0}
      tooltip="button"
      type="button"
      variant="primary"
    >
      <span>Start Solving PYQs</span>
    </NSButton>
  </div>
);
