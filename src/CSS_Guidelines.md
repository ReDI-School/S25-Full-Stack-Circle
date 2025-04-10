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
