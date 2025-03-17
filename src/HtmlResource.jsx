const HtmlResource = `HTML Complete Revision Guide
1. Introduction to HTML
HTML (HyperText Markup Language) is the standard language for creating web pages. It defines the structure of web content using elements enclosed in tags.

Basic Structure of an HTML Document:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a simple HTML document.</p>
</body>
</html>
\`\`\`

2. HTML Elements & Attributes
Elements are the building blocks of an HTML page, and attributes provide additional information about elements.

Example:

\`\`\`html
<a href="https://example.com" target="_blank" title="Visit Example">Click Here</a>
\`\`\`

Common Attributes:
- **href** (for links)
- **src** (for images, videos)
- **alt** (alternative text for images)
- **id** and **class** (for styling and scripting)
- **title** (tooltip text)

3. Text Formatting in HTML
HTML provides various tags for formatting text:

\`\`\`html
<p><b>Bold</b>, <i>Italic</i>, <u>Underlined</u>, <mark>Highlighted</mark></p>
<p><small>Small Text</small>, <strong>Strong</strong>, <em>Emphasized</em></p>
<p>Superscript: 2<sup>2</sup> and Subscript: H<sub>2</sub>O</p>
\`\`\`

4. Lists in HTML
HTML supports ordered and unordered lists:

Unordered List:
\`\`\`html
<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
</ul>
\`\`\`

Ordered List:
\`\`\`html
<ol>
    <li>First Item</li>
    <li>Second Item</li>
</ol>
\`\`\`

5. Tables in HTML
HTML tables are used to display tabular data.

\`\`\`html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>25</td>
    </tr>
</table>
\`\`\`

6. Forms in HTML
Forms allow users to enter data.

\`\`\`html
<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <input type="submit" value="Submit">
</form>
\`\`\`

7. Multimedia in HTML
Adding images, audio, and videos:

\`\`\`html
<img src="image.jpg" alt="Sample Image">
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>
<video controls width="300">
    <source src="video.mp4" type="video/mp4">
</video>
\`\`\`

8. Semantic HTML
Semantic elements provide meaningful structure:

\`\`\`html
<header>Site Header</header>
<nav>Navigation Links</nav>
<section>Main Content</section>
<footer>Footer Information</footer>
\`\`\`

9. HTML5 Features
New HTML5 features include:
- **Canvas**: Used for graphics and animations
- **Local Storage**: Store data on the browser
- **Geolocation**: Get user location

\`\`\`html
<canvas id="myCanvas"></canvas>
<script>
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 100, 100);
</script>
\`\`\`

10. HTML Interview & Competitive Programming Topics
Key topics to prepare:
- HTML tags & attributes
- Forms and validations
- Semantic HTML
- Responsive web design
- Performance optimizations

Example Question: What is the difference between **id** and **class**?

Answer: 
- **id** is unique and can only be assigned to one element.
- **class** can be assigned to multiple elements.

This structured guide will help you quickly revise HTML for interviews and projects. 🚀`;

export default HtmlResource;
