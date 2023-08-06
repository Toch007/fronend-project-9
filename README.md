# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

Intro component with sign up form challenge on Frontend Mentor

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./images/FireShot%20Capture%20002%20-%20Frontend%20Mentor%20-%20Intro%20component%20with%20sign%20up%20form%20-%20127.0.0.1.png)

### Links

- Solution URL: [Add solution URL here](https://https://github.com/Toch007/fronend-project-9)
- Live Site URL: [Add live site URL here](https://toch007.github.io/fronend-project-8/)

## My process

I created the page using grid and flexbox. I used grid in demacating the 2 parts of the page, then I used flexbox in constructing the form and also the part above the form because I didnt want a fixed hight on the "Try it" item above the form.
After setting up, I found it a bit difficult with the javascript due to the requirements of the project but I was able to pull it off successfully.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learnt so much from this project, especially as regards the responsiveness of the page. I learned about the best situations to use grid and flexbox interchangably. I is my first form project on Frontend Mentor so I really learned a lot about forms.

I think the aspect I learned most is the javascript. It is also my first javascript project on Frontend Mentor. It was a really tedious task getting to make sure the error message popped out along with the icon and the event listener. It was a really great experience and I enjoyed every bit of it.

```js
const spans = formControl.querySelectorAll("span:not(:last-child)");
  console.log('🎉')
I never knew an element could be selected this way in javascript.
```

### Continued development

I hope to code more on javascript. The challenge is really exciting.

### Useful resources

- [W3 SCHOOLS](https://www.w3schools.com) - A very good website for all kinds of development resources. There cant be any better.
- [CSS GENERATOR](https://https://cssgenerator.org/box-shadow-css-generator.html) - This is a great site for generating great CSS styling. I was able to generate my box-shadow using them.

## Author

- Website - [Tochukwu Uche](https://www.your-site.com)
- Frontend Mentor - [@toch007](https://www.frontendmentor.io/profile/Toch007)
- Twitter - [@toch0007](https://www.twitter.com/toch0007)

## Acknowledgments

A lot of thanks goes to the creators of chat gpt. They did an amazing job by bringing of the of best things that has ever happened to mankind.
