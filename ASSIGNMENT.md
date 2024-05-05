# Assignment: `ColorGridSelectComponent` Implementation

## Overview

This assignment involves completing the implementation of `ColorGridSelectComponent`, a custom Angular form control designed to select colors from a grid. The component partially mimics the behavior of a radio group for color selection, displaying colors in a grid layout with support for keyboard navigation and accessibility features.

## Requirements

### Input Data

- The component should accept a list of colors as input (`string[]`). Each color is represented in the format `rgb(255, 0, 0)`.
- A default list of colors is provided, but the component should be capable of displaying any set of colors passed as input.

### Functionality

- **Grid Layout:** Colors should be displayed in a grid. The row width must be dynamically calculated based on the maximum number of color items that can fit within the component's width.
- **Form Control Compatibility:** Ensure the component works with both `ReactiveFormsModule` and `FormsModule`.
- **Keyboard Navigation:** Implement `FocusKeyManager` (or a custom key manager) to support navigation through the color grid using arrow keys. Selection of a color item should automatically update the form control value.
- **Color Item Component:** Each color item in the grid is represented by its own component, which accepts three inputs: `value` (the color, as a string), `checked` (boolean), and `disabled` (boolean).

### Accessibility

- The grid & item should have an relevant ARIA roles as needed, like `radiogroup`, `option` etc.
- Enhance the component's accessibility, ensuring it is usable with screen readers and supports keyboard navigation effectively.

### Expected Behavior

- **Navigation:** Arrow key navigation should reflect visual layout:
  - **Up Arrow:** Moves selection to the item directly above.
  - **Right Arrow:** Moves to the next item to the right, or wraps to the first item in the next row if at the end of a row.
  - **Down Arrow:** At the end of the list, wraps back to the top item in the same column. If pressed on other items, moves to the item directly below.
  - **Left Arrow:** Moves to the previous item to the left, or wraps to the last item in the previous row if at the beginning of a row.

## Tasks

1. **Complete Grid Layout Calculation:** Implement the logic to calculate the grid's row width based on the component's width and the number of colors.
2. **Implement Navigation:** Complete the keyboard navigation functionality using `FocusKeyManager` (or a custom key manager), ensuring the navigation logic follows the specified behavior.
3. **Improve Accessibility:** Review and enhance the accessibility of both the Grid and Item components, ensuring compliance with ARIA roles and keyboard navigation, mimicing a radio group's behavior, similar to [`MatSelectionList`](https://github.com/angular/components/blob/main/src/material/list/selection-list.ts) and [`MatListOption`](https://github.com/angular/components/blob/main/src/material/list/list-option.ts).

## Bonus Challenge

- **Signal Inputs**: Take it further to the newer version of Angular and implement [Signal Inputs](https://blog.angular.io/signal-inputs-available-in-developer-preview-6a7ff1941823) wherever possible.
- **Unit Tests:** Write unit tests for the `ColorGridSelectComponent`, covering key functionalities such as input handling, grid layout calculation, navigation and value changes.
- **Storybook Integration:** Create Storybook stories for the `ColorGridSelectComponent` and its Color Item component. Demonstrate different states (default, selected, disabled) and ensure the component's functionality is clearly showcased. Implement [Interaction tests](https://storybook.js.org/docs/writing-tests/interaction-testing).

## Submission Guidelines

To complete your submission for this assignment, please adhere to the following steps:

1. **Code Upload:** Once you have completed the assignment, upload your working code to Stackblitz. Ensure that your project is properly configured and runnable within the Stackblitz environment.

2. **Share Your Work:** After uploading your project to Stackblitz, please share the URL of your project by emailing it to us in an ongoing discussion thread.

3. **Initial Review:** Our development team will review your submission to assess the code quality and implementation details. We're looking for clean, efficient, and well-structured code that meets the assignment requirements.

4. **Code Review Session:** Should your submission meet our criteria for quality and completeness, we will schedule a code review session with our Development Lead. During this session, we may discuss various aspects of your code and possibly request updates or improvements based on the review.

5. **Further Interview Rounds:** If the code review session concludes positively, and we are satisfied with your submission and any subsequent updates, we will invite you to the next interview rounds. These will include discussions with our HR team and Executive leadership, focusing on your fit within the team and the company.

We appreciate your interest in joining our team and look forward to seeing your innovative solutions. Good luck with your assignment, and we hope to discuss your work soon!
