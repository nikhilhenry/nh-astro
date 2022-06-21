---
title: Why & How I rebuilt this site
coverImg: /assets/blog/lighthouse.png
description: Another hello world post, but built with Astro 🚀 this time!
collection: DevDiaries
publishDate: 18 Jun 2022
alt: an image
setup: import Layout from '../../layouts/BlogPost.astro'
---

## The Why
Yes, I must admit that I did fall into the typical developer-writer trap: building an overcomplicated site to seldom post content. Apart from the the other commitments that held me up, the site itself felt super dry. Write after building the previous iteration of this site, I got my feet wet with Vue 3 and the world of typescript. Needless to say, I was blown away with the composition API and the type-safety which I always desired from javascript. To further fortify my inclination, tailwind was added to the mix. I now no longer write css any other way! Besides the new flashy technology which made my site redundant, I wasn't too proud of the bundle size of the nuxt powered site and poor performance of sever-side rendering all the content. With this pretext in mind, I was clear with what I wanted: Typescript, Tailwind and **blazingly fast** load times. 

## The How
What really kicked of the new hype-train was my introduction to [Astro](https://astro.build) from [Theo](https://t3.gg). The concept of partial hydration instantly blew my away and its **blazingly fast** performance left me in awe. tl;dr on Astro: it's component syntax is super intuitive and its rich integration ecosystem makes it super easy to pick up. *A more in-depth article on Astro is in the works. There's just so much to unpack here 🤯!*

For styling, I went all out with [Tailwind CSS](https://tailwindcss.com). This has been the most convenient experience I've had with styling and it comes built-in with an [official Astro plugin](https://github.com/withastro/astro/tree/main/packages/integrations/tailwind). Tailwind also provides an elegantly styled of classes for markdown content, which is why the typography for this article 10x better than the previous iteration. 

What makes this combo truly incredible is the dark mode toggle, powered by Astro and Tailwind. This was where I tried out Astro's stellar feature of [partial hydration](https://docs.astro.build/en/core-concepts/partial-hydration/). The only JS on this site comes from a tiny [Svelte component](https://svelte.dev) which dynamically appends a *'dark'* class to the entire site instantly. From here, tailwind handles the rest and voila we have dark mode!


## Thoughts

The entire migration process took around 2 weeks with a few breaks sprinkled in for fun. Would I say its worth it? **Absolutely !** I'm way too proud of the [lighthouse score](/assets/blog/lighthouse.png) and couldn't be happier to tick off all the items on my checklist. More importantly, we also got into the [512kb Club](https://512kb.club)! Building with Astro has been an absolute breeze and more than excited to build with this stack again. The only minor concern I have is that Astro is still in beta pending its final integration API so hopefully I won't have to write another version of this post if no breaking changes occur 🤞.

Thanks for stopping by 🙂

-Nikhil
