import styled from "styled-components";

export const StyledButton = styled.button`
    // create a beautiful button like apple's
    background-color: var(--bg-brand, #0070f3);
    color: var(--text-action, #fff);
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        opacity: 0.8;
    }
    // add accessibility styles for keyboard navigation
    &:focus {
        outline: 3px solid #3493ff;
    }
    &:active {
        transform: scale(0.95);
    }
`;
