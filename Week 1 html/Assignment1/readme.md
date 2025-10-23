# Elements Exploration

**Name:** Matthew Hockett
**Class:** CIS 185
**Assignment One:** HTML Elements Challenge
**Date:** Oct. 2nd, 2025

## My Project on Elements Exploration

This Project shows the different HTML elements I used with a personalized web page about my puppy along with some css styling.

## Elements used in the Project

### 1. `<figure>` and `<figcaption>`
**Purpose:** These elements let you group together media with a caption.    
**How I used it:** I addded an image of my Shiba Inu puppy with a description of why he had a muddy snout.  
**How it's useful:** It can be used to give meanings to images found on websites.

```html
<figure>
    <img src="https://media.discordapp.net/attachments/974857296561709059/1420237063319720047/IMG_8157.jpg?ex=68df3656&is=68dde4d6&hm=8a0d6b574d7ce9ee22863827d530c35906c07184fbe99dbd2b022ed6bdc1fa80&=&format=webp&width=621&height=828" alt="Link the Shiba">
    <figcaption>This is my Shiba Inu puppy after playing in mud.</figcaption>
</figure>
```    

### 2. `<details>` and `<summary>`
**Purpose:** Let's you create collapsible content on web pages. 
**How I used it:** I created a collapsible section where I told my puppy's name and where I got said name from. 
**Why it's useful:** This element let's you save space to help keep wep pages organized in an functional way.

```html
<details>
    <summary>Click here for more info on my Shiba!</summary>
    <p>The name of my Shiba is Link. I named him after the main protaganist from The Legend of Zelda series.</p>
</details>
```

### 3. `<progress>`
**Purpose:** Let's you display a progress of a task.    
**How I used it:** I created a visual representation of my puppy's progress to his for confirmation award.  
**Why it's useful:** Gives a visual representation of somethings progress without the use of javascript.

```html
<label for="task">Puppy Show Achievement</label>
<progress id="task" value="5" max="10"></progress>
```

### 4. `<mark>`
**Purpose:** Allow's you to mark specific area's of text.   
**How I used it:** I marked my my puppy's name, the most important part of the the sentence.    
**Why it's useful:** Provides people with a visual representation of what can be important and easily noticed by users.

```html
<p><mark>Link</mark> is the best puppy in the world!</p>
```

### 5. `<time>`
**Purpose:** Shows a specific period in time.   
**How I used it:** Showed the date when my puppy's next confirmation show is.
**Why it's useful:** Dates become machine-readable for search engines and browsers.

```html
<p>Link's next puppy show is on <time datetime="2025-10-24">October 24, 2025</time>.</p>
```


## Styling Applied with CSS
Elements I applied custom stylings to:  
- **`<Figure>`:** Added border, padding, pixel width, and background.   
- **`<details>`:** Added background, padding, and margin.   
- **`<progress>`:** Customized the size of the progress bar, changing the color of the bar didn't seem to work though.  
- **`<mark>`:** Changed background color and text color.


## What I learned
During this assignment I learned the following:
1. **HTML Elements importance** - How and when to use the right element to improve accessibility and space management.  
2. **Organization** - Using elements like `<details>` and `<figure>` give structure to important content.   
3. **CSS implementation** - A basic understanding for small amounts of styling to HTML5 elements.
4. **Interactive elements** Elements like `<progress>` can provide interactions without javascript.

## Files Included
- `ElementsChallenge.html` - The main HTML file with the elements used
- `readme.md` - The documentation file
- `style.css` - CSS styling file

## How to View
1. Clone this repository
2. Open `ElementsChallenge.html` in any modern browser
3. Look at web page and interact with different elements to view thier functionality