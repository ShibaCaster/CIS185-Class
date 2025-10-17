# Week 3 - Responsive portfolio Website

**Author:** Matthew Hockett 
**Course:** CIS 185 - HTML, CSS, JavaScript 
**Date:** Oct. 16th, 2025

---

## Project Overview

This assignment demonstrates two different approaches to building a **responsive personal portfolio website**.  
The goal was to design a site that adaps to mutliple screen sizes - mobile, tablet, and desktop - while maintaining a clean, readable layout and consistent styling.

There are **two versions** of the portfolio:

1. **Manual Responsive Design** - Using cutsom CSS with media queries, Flexbox, and CSS Grid.
2. **Bootstrap Responsive Design** - Using Bootstrap 5's built-in grid system and responsive utilities.

---

## Version 1: Manual Responsive Design

**File:** `PersonalPortfolio_Manual.html`
**Stylesheet:** `portfolio_manual.css`

This version uses:
- Custom CSS variables for colors and fonts
- `@media` queries for 3 breakpoints
- Flexbox and Grid Layout for responsive sections
- Manually styled navigation and buttons
-Background imagies with `background-size: cover` and flexible content containers

## Version 2: Bootstrap Responsive Design

**File:** `PersonalPortfolio_Bootstrap.html

This version replaces most of the manual layout code with Bootstrap 5 components, including:

- The Bootstrap grid system (.container, .row, .col-md-*)
- A responsive navbar with a hamburger menu for mobile
- Cards for Project previews
- Form controls with built-in styling
- Utility classes for padding, margins, colors, and spacing

Bootstrap automatically adjusts layouts across screen sizes, reducing the need for manual media queries.

## Comparison: Manual vs. Bootstrap

### Manual Responsive Design
- **Pros:**
    - Full control over layout, colors, and breakpoints.
    - encourages understanding of css fundamentals.
    - Custom design flexibility without external dependencies.

- **Cons:**
    - Requires more code for respnsiveness.
    - More time-consuming to maintain and adjust for multiple screen sizes.

### Bootstrap Responsive Design
- **Pros:**
    - Faster to implement responsive layouts using predefined grid classes.
    - built-in utility classes simplify spacing, alignment, and typography.
    - consistent, modern design out of the box.

- **Cons:**
    - Less control over fine-tuned styling.
    - Requires understanding of Bootstrap's class system.
    - May feel more "template-like" if not customized.

**Beakpoints used:**
```css
/* Mobile (up to 767px) */
/* tablet (768px = 1023px) */
/* Desktop (1024px and above) */
```

---

## What I learned
- How to manually design for multiple screen sizes using CSS media queries.
- How to use Bootstrap's **grid-system**, **cards**, and **utility classes** to quickly build a responsive site.
- The advantages and trade-offs between writing custom CSS cs. using a framework.
- How to compare and test responsiveness using browser developer tools.

---

## How to Run

1. Download or clone repository.
2. Open either of the HTML files in your web browser.
    - `PersonalPortfolio_Manual.html`
    - `PErsonalPortfolio_Bootstrap.html`
3. Resize the browser window or use the **Inspect tool -> Device Toolbar** to test responsiveness across screen sizes.

---

## Personal Preference

For me I like the Manual method over Bootstrap. Although Manual requires more time to maintain and adjust, I feel like it is easier to follow along with the code. I also like that you have more control over how you style your websites, the flexibility you have means you can be more creative and also means you don't need to rely on external dependencies like with Bootstrap.

---

## Screenshot Comparison Manual vs. Bootstrap

**Manual Version Example:**
```html
    <section id="about" class="hero">
        <h2>About Me</h2>
        <div class="about-containter">
            <img src="https://cdn.discordapp.com/attachments/974857296561709059/1426728478191128688/att.nMXnRZSXg8BklM2B-PKT-DPCDMkW__y8ZP8_nJdtsWI.jpg?ex=68ec47f0&is=68eaf670&hm=247cfd2f3519b87794d79ddd1e0dbdc8d7da8346d96d47480ddeb81c130aa042&" alt="Portrait of Matthew and Link" />
            <p>
                Hello, my name is Matthew I'm a student at SPSCC currently learning about Web Development.
                Im currently learning how to make responsive, user-friendly websites and apps through front-end development using HTML, CSS, and JavaScript.
            </p>
        </div>
     </section>
```

**Bootstrap Version Example:**
```html
     <section id="about" class="py-5 bg-light">
            <div class="container">
                <h2 class="text-center mb-4">About Me</h2>
                <div class="row align-items-center">
                    <div class="col-md-6 text-center">
                        <img
                            src="https://cdn.discordapp.com/attachments/974857296561709059/1426728478191128688/att.nMXnRZSXg8BklM2B-PKT-DPCDMkW__y8ZP8_nJdtsWI.jpg?ex=68ec47f0&is=68eaf670&hm=247cfd2f3519b87794d79ddd1e0dbdc8d7da8346d96d47480ddeb81c130aa042&"
                            alt="Portrait of Matthew and Link"
                            class="img-fluid rounded-circle shadow"
                        />
                    </div>
                    <div class="col-md-6 mt-4 mt-md-0">
                        <p class="fs-5">
                            Hello! My name is Matthew. I'm a student at SPSCC currently learning about
                            Web Development. I'm currently learning how to make responsive, user-friendly
                            websites and apps through front-end development using HTML, CSS, and Javascript.
                        </p>
                    </div>
                </div>
            </div>
         </section>
```

---

## Author

**Matthew Hockett** 
Student Web Developer   
[GitHub: ShibaCaster](https://github.com/ShibaCaster)   