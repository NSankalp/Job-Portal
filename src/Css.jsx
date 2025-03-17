const Css = `CSS Complete Revision Guide
1. Introduction to CSS
CSS (Cascading Style Sheets) is used to style HTML elements. It allows for separation of content and design.

Types of CSS:
- **Inline CSS** (within an element)
- **Internal CSS** (inside <style> in HTML)
- **External CSS** (linked via .css file)

Example:

\`\`\`css
/* External CSS file */
h1 {
    color: blue;
    font-size: 24px;
}
\`\`\`

2. Selectors in CSS
Selectors define which HTML elements styles apply to.

Common Selectors:
- **Element Selector**: \`h1 { color: red; }\`
- **Class Selector**: \`.title { font-size: 20px; }\`
- **ID Selector**: \`#unique { text-align: center; }\`
- **Universal Selector**: \`* { margin: 0; }\`
- **Grouping Selector**: \`h1, p { color: blue; }\`

Example:

\`\`\`css
/* Selecting elements */
h1, p {
    color: blue;
}
\`\`\`

3. Box Model
The Box Model consists of:
- **Content** (text, image, etc.)
- **Padding** (space around content)
- **Border** (around padding)
- **Margin** (space outside border)

Example:

\`\`\`css
.box {
    width: 200px;
    padding: 10px;
    border: 2px solid black;
    margin: 20px;
}
\`\`\`

4. Flexbox
Flexbox is used to align items dynamically.

\`\`\`css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
\`\`\`

Flex Properties:
- **justify-content** (aligns items horizontally)
- **align-items** (aligns items vertically)
- **flex-direction** (row/column layout)

5. Grid Layout
Grid allows for advanced layouts.

\`\`\`css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
\`\`\`

6. Positioning in CSS
- **static** (default)
- **relative** (relative to itself)
- **absolute** (relative to nearest positioned ancestor)
- **fixed** (relative to viewport)
- **sticky** (scrolls with the page)

Example:

\`\`\`css
.fixed-box {
    position: fixed;
    bottom: 0;
    right: 0;
}
\`\`\`

7. CSS Transitions & Animations
Transitions:

\`\`\`css
button {
    background-color: blue;
    transition: background-color 0.5s ease-in-out;
}

button:hover {
    background-color: red;
}
\`\`\`

Animations:

\`\`\`css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.fade {
    animation: fadeIn 2s ease-in;
}
\`\`\`

8. Responsive Design with Media Queries
Media queries allow responsiveness:

\`\`\`css
@media (max-width: 600px) {
    body {
        background-color: lightgray;
    }
}
\`\`\`

9. Dark & Light Mode
Example:

\`\`\`css
:root {
    --bg-color: white;
    --text-color: black;
}

.dark-mode {
    --bg-color: black;
    --text-color: white;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
}
\`\`\`

10. CSS Interview Topics
Key concepts:
- Box Model
- Specificity & Inheritance
- Flexbox & Grid
- Positioning & Z-index
- Animations & Transitions
- Media Queries

Example Question: Difference between absolute and relative positioning?
- **Relative** moves relative to itself.
- **Absolute** moves relative to its nearest positioned ancestor.

This guide will help you quickly revise CSS for projects and interviews. 🚀`;

export default Css;
