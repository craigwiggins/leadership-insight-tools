# LIT | Performance Support Tool

## Project Description

This project is part of the **Leadership Insight Tools (LIT)** portfolio. It demonstrates an **xAPI-Powered Performance Support Tool (PST)**, a "just-in-time" learning solution designed to provide contextual guidance to users within their workflow.
 The demo simulates a "Create New Opportunity" form within a Customer Relationship Management (CRM) system. As users interact with the form, their actions are tracked using the Experience API (xAPI) and stored in a mock Learning Record Store (LRS). The PST dynamically analyzes these xAPI statements to offer relevant help resources (articles, videos, job aids) in real-time, based on the user's current context and observed behavior (e.g., focusing on a specific field, struggling with a task).

## Core Functionality

*   **Simulated CRM Form:** A React-based form for creating new sales opportunities, complete with input fields for various opportunity details.
*   **xAPI Instrumentation:** User interactions with the CRM form (e.g., `focused`, `selected`, `struggled`) are captured and sent as xAPI statements.
*   **Mock Learning Record Store (LRS):** Statements are stored locally using `localStorage`, simulating a real LRS for demonstration purposes.
*   **Contextual Performance Support Panel:** A dynamic sidebar that listens for xAPI statements and displays targeted help resources based on the user's current activity or potential difficulties.
*   **Dynamic Resource Display:** Help resources (e.g., job aids, articles, videos) are presented to the user only when relevant to their immediate need.

## Showcase Goals

This project is designed to showcase expertise in:

*   **xAPI & Total Learning Architecture (TLA):** Demonstrating practical application of xAPI for tracking and influencing learning within a workflow, highlighting deep understanding of modern learning ecosystem components.
*   **Contextual Learning & Performance Support:** Designing and implementing systems that provide "just-in-time" support, moving beyond traditional course-based learning.
*   **Front-end Development with React:** Building interactive and responsive user interfaces using modern React best practices.
*   **Data-Driven Interventions:** Using captured learning data (xAPI statements) to trigger intelligent, personalized interventions that improve performance.

## Technologies Used

*   **React 19:** Frontend library for building user interfaces.
*   **Vite (Rolldown-Vite):** Fast development build tool.
*   **@xapi/xapi:** A robust JavaScript library for working with the xAPI specification.
*   **CSS:** For styling the application.
*   **localStorage:** Used as a mock LRS for storing xAPI statements.

## How to Run the Application

1.  **Navigate to the project directory:**
    ```bash
    cd xapi-support-tool
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will typically open in your browser at `http://localhost:5173/`.

## How to Interact with the Demo

1.  Open the application in your browser (`http://localhost:5173/`).
2.  Open your browser's developer console (usually by pressing `F12` and navigating to the "Console" tab) to observe the xAPI statements being logged.
3.  **Interact with the CRM Form:**
    *   Click into different input fields (e.g., "Opportunity Name", "Sales Stage"). Observe how the "Recommended Resources" in the Performance Support panel change contextually.
    *   Select different options in the "Sales Stage" dropdown.
    *   Focus on the "Estimated Value" field and wait for about 10 seconds without typing. This will trigger a "struggled" statement, and the panel should offer more targeted help for estimating value.
4.  The "xAPI Statement History" in the panel will update with every interaction.

## Troubleshooting / Learnings

During development, a "blank page" issue was encountered due to an incorrect import of the `XAPI` constructor from the `@xapi/xapi` library. The resolution involved changing the import from a named import (`import { XAPI } from '@xapi/xapi';`) to a default import (`import XAPI from '@xapi/xapi';`), which correctly instantiated the XAPI client. This highlights a common challenge with module interoperability in modern JavaScript environments and the importance of precise import syntax.