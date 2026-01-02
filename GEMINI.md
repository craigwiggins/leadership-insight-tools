# Project Plan: Leadership Insight Tools (LIT)

This document outlines the strategic vision and development roadmap for the **Leadership Insight Tools (LIT)** portfolio, a suite of high-impact applications designed by Craig Wiggins to showcase expertise in executive development, learning analytics, and performance improvement.

## Portfolio Overview

LIT is comprised of three core applications that demonstrate a modern, data-driven approach to leadership growth:

1.  **AI-Powered Competency Architect:** A strategic curriculum design tool.
2.  **Executive Learning Analytics Dashboard:** A visualization platform for learning ROI and competency gains.
3.  **xAPI-Powered Performance Support Tool:** A "just-in-time" workflow intervention engine.

---

## Tool 1: AI-Powered Competency Architect

### Project Vision

The goal is to create a strategic planning tool for executive development. Unlike a simple course catalog, this tool will allow a user (such as a manager or an executive themselves) to select key competencies for a specific role. Based on these selections, the application will leverage AI to generate a comprehensive, personalized, and blended-learning curriculum.

## Core Functionality

*   **Competency Selection:** Users can select from a pre-defined competency model for a high-level role (e.g., "Chief Digital Transformation Officer").
*   **AI-Powered Curriculum Generation:** An AI model will process the selected competencies and generate a multi-week learning plan.
*   **Blended Learning Pathways:** The generated plan will include a mix of learning assets:
    *   eLearning modules
    *   Relevant articles and book chapters
    *   Podcast episodes
    *   On-the-job application projects
*   **Instructional Justification:** A key feature will be the AI's ability to explain *why* it has structured the curriculum in a certain way, linking its recommendations to established instructional design principles.

## Showcase Goals

This project is designed to showcase Craig's expertise in:

*   **Executive Education:** Crafting development plans for senior leaders.
*   **Strategic Curriculum Design:** Architecting complex, multi-faceted learning programs.
*   **Performance Improvement:** Focusing on learning that drives measurable outcomes.
*   **AI in Learning:** Applying AI for sophisticated personalization and instructional scaling.

## Current Status

The core functionality of the application has been implemented. Users can select competencies, provide an API key, and generate a personalized curriculum. The generated curriculum is displayed using markdown formatting.

## Initial Steps

1.  **Scaffold the Application:** Set up a basic web application structure. (Completed)
2.  **Develop the UI:** Create the user interface for selecting competencies. (Completed)
3.  **Define the Competency Model:** Create the data structure for the initial executive role and its associated competencies. (Completed)
4.  **Integrate AI Service:** Connect the application to a Gemini model to generate the curriculum based on user input. (Completed)

## Tool 2: Executive Learning Analytics Dashboard

### Project Vision

The goal is to create a simulated dashboard for C-suite leaders to visualize the business impact of their executive education programs. The project takes simulated data from a Learning Record Store (LRS) and business KPIs and presents it as clear, actionable insights for an executive audience.

## Core Functionality

*   **KPI Visualization:** Display key performance indicators (KPIs) such as Total Investment, Pipeline Impact, Average Competency Gain, and Program ROI.
*   **Competency Improvement Chart:** A bar chart that visualizes the "before and after" competency levels of the leadership team, demonstrating the impact of the learning programs.
*   **Detailed Learner Data Table:** A searchable and sortable table that provides a granular view of each leader's progress, including their role, the competencies they are developing, their course progress, and their assessment scores.

## Showcase Goals

This project is designed to showcase expertise in:

*   **Learning Analytics:** Translating raw learning data into meaningful business insights.
*   **Performance Improvement:** Connecting learning outcomes to tangible performance metrics.
*   **Data-Driven Storytelling:** Creating a clear and compelling narrative about the value of learning investments for an executive audience.
*   **Modern Web Development:** Demonstrating proficiency in React, data visualization libraries, and modern front-end development practices.

## Current Status

The initial version of the dashboard has been developed. It includes a header, KPI cards, a competency improvement chart, and a detailed data table. The application is populated with mock data to simulate a real-world scenario. The next steps would involve adding more interactivity, such as filtering and sorting the data, and potentially connecting to a live data source.

## Tool 3: xAPI-Powered Performance Support Tool

### Project Vision

The goal is to create a "just-in-time" learning tool that uses the Experience API (xAPI) to provide contextual support to users within their workflow. This project highlights deep technical expertise with xAPI, SCORM, and the Total Learning Architecture (TLA), demonstrating a forward-thinking approach to performance improvement that goes beyond traditional courses.

## Core Functionality

*   **Simulated CRM Form:** A React-based form for creating new sales opportunities, capturing user interactions.
*   **xAPI Instrumentation:** User actions (e.g., `focused`, `selected`, `struggled`) are tracked and sent as xAPI statements.
*   **Mock Learning Record Store (LRS):** Local storage is used to simulate an LRS for demonstration.
*   **Contextual Performance Support Panel:** A dynamic sidebar displays targeted help resources based on user activity and xAPI data.
*   **Dynamic Resource Display:** Help resources (articles, videos, job aids) are presented only when relevant.

## Showcase Goals

This project showcases expertise in:

*   **xAPI & Total Learning Architecture (TLA):** Practical application of xAPI for tracking and influencing learning within a workflow.
*   **Contextual Learning & Performance Support:** Designing systems for "just-in-time" support.
*   **Front-end Development with React:** Building interactive and responsive UIs.
*   **Data-Driven Interventions:** Using xAPI data to trigger intelligent, personalized interventions.

## Current Status

The initial version of the xAPI-Powered Performance Support Tool has been developed. It includes a simulated CRM form, a contextual performance support panel, and a mock LRS. User interactions are tracked via xAPI statements, which dynamically update the displayed help resources. The application is fully functional, demonstrating the core concepts of xAPI-driven contextual support.
