# Simplified CSS Coding Guidelines

This document outlines the basic standards for writing CSS in this project.

## 1. Key Principles

* **Consistency:** Write CSS in a consistent style.
* **Readability:** Make your CSS easy to read and understand.
* **Maintainability:** Structure your CSS for easy changes.
* **Semantic Class Names:** Use class names that describe the element's purpose (e.g., `product-title`, not `big-red-text`).

## 2. Formatting

* **Indentation:** Use 2 spaces.
* **Selector Grouping:**

    ```css
    .button,
    .link {
      /* Styles */
    }
    ```

* **Declaration Blocks:**

    ```css
    .container {
      display: flex;
      padding: 1rem;
    }
    ```

* **Rule Separation:** Use a blank line between rules.

    ```css
    .header {
      /* Styles */
    }

    .footer{
     /* Styles */
    }
    ```

## 3. Organization

* **File Structure:**
    * `components/`: For reusable parts (e.g., `_button.scss`, `_card.scss`).
    * `layout/`: For page structure (e.g., `_header.scss`, `_footer.scss`).
* **Naming:**
    * Use lowercase and hyphens (e.g., `main-navigation`).
    * For components, use prefixes (e.g., `.button--primary`).
* **File Naming:**
    * Use lowercase and hyphens (e.g., `button.css`, `main-navigation.scss`).
    * For partials (if using preprocessors), prefix with an underscore (e.g., `_variables.scss`).

## 4. Selectors

* Prefer classes over IDs for styling.
* Keep selectors short and simple.

## 5. Properties Order

    1.  Positioning
    2.  Box Model
    3.  Typography
    4.  Visual
    5.  Animation
    6.  Other

# CSS Modules Guidelines
CSS Modules are a system for writing CSS where class names and animation names are scoped locally by default. This helps to avoid style conflicts and improves the modularity of your CSS. Here's how to use them effectively:

## 1. File Naming Convention
Use the .module.css extension: For CSS Module files, use the .module.css extension. 

Example: MyComponent.module.css 

## 2. Importing and Using CSS Modules
Import in JavaScript: Import the CSS Module into your JavaScript component file. The import will typically return an object where the keys are the class names you've defined in your CSS Module, and the values are the generated, unique, locally scoped class names.

import styles from './MyComponent.module.css';

Apply styles using the imported object: Apply the styles to your HTML elements using the className attribute and the imported styles object.

<div className={styles.container}>
    <h1 className={styles.title}>Welcome</h1>
    <button className={styles.button}>Click Me</button>
</div>

## 3. CSS Module Structure
Component-Centric: Create a CSS Module for each component or a small set of closely related elements. This promotes encapsulation and reusability.

Keep it focused: A CSS Module should contain only the styles relevant to its component.  Avoid mixing styles for different components in the same file.

src/
└── components/
    ├── MyComponent.jsx
    ├── MyComponent.module.css
    └── AnotherComponent.jsx

## 4. Class Naming
Descriptive and concise: Use descriptive class names that clearly indicate the element or its purpose within the component.

Use lowercase and hyphens: Use lowercase letters and hyphens to separate words in your class names (e.g., my-component-title, button-primary).

Contextual names: Since CSS Modules scope class names locally, you don't need to use overly verbose prefixes to avoid conflicts.  You can use shorter, more intuitive names.

For example, within MyComponent.module.css, you can use .title instead of MyComponent__title.

## 5. Composition
Compose for reusability: CSS Modules support composition, allowing you to inherit styles from another class.  Use this to share common styles and reduce duplication.

/* base.module.css */
.baseButton {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

/* MyComponent.module.css */
.primaryButton {
  composes: baseButton;
  background-color: #007bff;
  color: white;
}
```jsx
import styles from './MyComponent.module.css';
<button className={styles.primaryButton}>Click</button>

## 6. Global Styles
Use sparingly: Minimize the use of global styles.  CSS Modules are designed to promote local scoping.

:global(...) for exceptions: If you need to define a global style (e.g., for a CSS reset or a third-party library), use the :global(...) syntax.

/* global.module.css */
:global(body) {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}
