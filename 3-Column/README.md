# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See active states for interactive elements

### Screenshot

![](./screenshots/3-Cards screenshot.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/responsive-landing-page-using-css-grid-DSGRC-poKB](https://www.frontendmentor.io/solutions/responsive-landing-page-using-css-grid-DSGRC-poKB)
- Live Site URL: [https://jeanneveev.github.io/Frontend-Mentor-Projects/3-Column/](https://jeanneveev.github.io/Frontend-Mentor-Projects/3-Column/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- CSS Subgrid
- Mobile-first workflow

### What I learned

I learned that Windows has a setting called "Make everything bigger" which does just that, causing all text to look larger than it should be, and forcing me to rewrite much of the CSS when I realized it. Also, I learned to check the line height early on, as I had initially geustimated it to be 1.7, only to realize it was 1.5 later on, which also affected the padding of the other parts of each card.
I learned, or rather realized, that setting your design to center immediately isn't always the best idea, as any changes to the internal elements of a container will shift the position of that container as well, making it hard to judge how much to adjust the offset or if you got it right.
I also learned more about box-shadows, which was a goal from my last project. For the active state of the buttons, I realized that the buttons didn't change size when pressed, so there had to be some sort of internal border around it. I first thought of having a border always on while just changing the backround and text color, but that threw my sizings off, so I did some searching and found Shukhrat Raimov's answer to a similar question on Stack Overflow [here](https://stackoverflow.com/questions/9601357/placing-border-inside-of-div-and-not-on-its-edge). This led to the code snippet below, which I am very proud of.
```css
.card__btn:active{
    box-shadow: inset 0 0 0 .125rem var(--clr-neutral-lgray);
}
```
Lastly, I learned not to use ids to change CSS, on advice of Darkstar from the Frontend Mentor Discord. 

### Continued development

I want to refine my knowledge about grids and subgrids going forward. Also, I need to learn more about git branches and histories as I had some trouble merging my dev branch to the main branch at the end.

### Useful resources

- [ModernCSS.dev's Guide to Centering](https://moderncss.dev/complete-guide-to-centering-in-css/) - This helped me figure out how to center my wrapper in a more efficient way.
- [Slaying the Dragon's Subgrid Tutorial](https://www.youtube.com/watch?v=Yl8hg2FG20Q&t=490s) - This is an amazing video that helped me with my exact problem trying to space the buttons to be inline at different screen sizes.
- [Inner Border Solution](https://stackoverflow.com/questions/9601357/placing-border-inside-of-div-and-not-on-its-edge) - The answers to this question helped a lot when making the active states of my buttons, especially Shukrat Raimov's answer on using box-shadows.

## Author

- GitHub - [Jeanneveev](https://github.com/Jeanneveev)
- Frontend Mentor - [@Jeanneveev](https://www.frontendmentor.io/profile/Jeanneveev)


## Acknowledgments

I want to thank the Frontend Mentor Discord which helped me with my text size problem, a fact that, if went unchecked, would have surely messed up all my later projects.