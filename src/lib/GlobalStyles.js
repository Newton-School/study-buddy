"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        .light {
            --text-primary: #333;
            --text-secondary: #666;
            --text-action: #fff;

            --bg-primary: #fff;
            --bg-secondary: #f9f9f9;
            --bg-brand: #0070f3;

            --border-primary: #ddd;
        }
        .dark {
            --text-primary: #fff;
            --text-secondary: #ccc;
            --text-action: #333;

            --bg-primary: #333;
            --bg-secondary: #444;
            --bg-brand: #0053b3;

            --border-primary: #555;
        }
    }
`;
