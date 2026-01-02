# LIT | Competency Architect

This tool is part of the **Leadership Insight Tools (LIT)** portfolio. It is a strategic planning tool for executive development, allowing users to select key competencies for a specific role and leverage AI to generate a comprehensive, personalized, and blended-learning curriculum.

## Core Functionality

*   **Competency Selection:** Users can select from a pre-defined competency model for a high-level role.
*   **AI-Powered Curriculum Generation:** A Gemini model processes the selected competencies and generates a multi-week learning plan.
*   **Blended Learning Pathways:** The generated plan includes a mix of learning assets like eLearning modules, articles, podcasts, and on-the-job projects.
*   **Instructional Justification:** The AI explains *why* it has structured the curriculum in a certain way, linking its recommendations to established instructional design principles.

## Getting Started

### Prerequisites

*   Node.js and npm (or yarn)
*   A Gemini API key

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd competency-architect
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

1.  Start the development server:
    ```bash
    npm run dev
    ```
2.  Open your browser and navigate to `http://localhost:5173` (or the address shown in your terminal).
3.  Enter your Gemini API key in the input field.
4.  Select the desired competencies.
5.  Click the "Generate Curriculum" button.

## Project Structure

*   `src/App.jsx`: The main application component.
*   `src/components/CompetencySelector.jsx`: The UI for selecting competencies.
*   `src/components/CurriculumDisplay.jsx`: The component for displaying the generated curriculum.
*   `src/competencies.js`: The data structure for the competency model.

## Showcase Goals

This project is designed to showcase expertise in:

*   Executive Education
*   Strategic Curriculum Design
*   Performance Improvement
*   AI in Learning


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
