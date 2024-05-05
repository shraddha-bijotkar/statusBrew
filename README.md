# Statusbrew TechTalentStarterKit

> Managed by Statusbrew for recruitment purposes

Welcome to the Statusbrew TechTalentStarterKit, enhanced for rapid development and testing. This project is designed to assess your skills and understanding of [Angular within a monorepo setup using Nx tools](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial), emphasizing structured code, separation of concerns, and best practices in Angular development. With the integration of TailwindCSS for styling and Storybook for component development and testing, this starter kit aims to streamline the creation of visually consistent and accessible UI components.

## Getting Started

Ensure you have the latest version of Node.js and npm installed before beginning. This project utilizes Nx for monorepo management, allowing efficient organization and management of Angular applications and libraries.

### Installation

1. Clone this repository to your local environment.
2. Navigate to the project directory and install dependencies:

   ```bash
   npm install
   ```

3. Explore the starter kit to familiarize yourself with its structure and capabilities.

## Project Structure

Leveraging Nx, the project is organized into applications and libraries, promoting better separation of concerns and code reusability:

- `apps/`: Contains example Angular applications, serving as a reference for your assignment.
- `libs/`: Holds shared libraries applicable across various applications within the monorepo, including UI components, utilities, and services.

### Enhancements

- **TailwindCSS Integration:** For rapid UI development, TailwindCSS is configured to help you build custom designs without leaving your HTML.
- **Storybook:** Utilized for building and testing UI components in isolation, enhancing the development process and ensuring component reusability and consistency.

### Key Concepts

- **Efficient Monorepo Management:** Using Nx tools for streamlined development within a monorepo.
- **Structured and Modular Code:** Emphasis on maintainability and modularity.
- **Separation of Concerns:** Clear distinction between UI components and business logic.
- **Angular Reactive Forms:** Demonstrating advanced form handling capabilities.
- **Angular CDK & Material:** For creating accessible components and employing Material Design.
- **Web Accessibility:** Ensuring applications are accessible following WCAG guidelines.
- **Rapid Development:** Leveraging TailwindCSS for styling and Storybook for component testing.

## Assignment

Build an Angular application that adheres to the provided ASSIGNMENT.md requirements. Showcase your ability to navigate a structured monorepo environment and employ best practices in Angular development, alongside the integrated tools for UI development and testing.

### Requirements

- Maintain the project structure as per this starter kit.
- Ensure code quality and modularity.
- Implement Angular Reactive Forms for dynamic form scenarios.
- Use Angular CDK and Material alongside TailwindCSS for styling.
- Prioritize accessibility in your implementation.
- Develop and test UI components using Storybook.

## Running the Application

To serve example applications from the `apps/` directory:

```bash
nx serve <application-name>
```

## Running Storybook

To develop and test UI components in isolation with Storybook:

```bash
nx run <library-name>:storybook
```

## Feedback and Contributions

Feedback and contributions are welcome. Please feel free to suggest improvements, open issues, or submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
