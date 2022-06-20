---
setup: |
 import Layout from "../../layouts/BlogPost.astro"
 import ProjectLinks from "../../components/ProjectLinks.astro"
title: UNA VOCA
coverImg: /assets/blog/unavoca.png
alt: unavoca homepage
description: Collaborated with the United Nations, ODC to intiate a student-led organisation to promote information and perspectives of students during the COVID-19 pandemic. 
publishDate: 12 May 2020
source: https://github.com/nikhilhenry/thecovid19survivalguide
live: http://unavoca.lsb.edu.in
---
<div class="not-prose">
<ProjectLinks source={frontmatter.source} live={frontmatter.live}></ProjectLinks>
</div>
## About

Collaborated with the **United Nations Office on Drugs and Crime** (UNODC) to intiate a student-led organisation to create a portal for students to voice their perspectives and thoughts during a world-changing period in history. *Received honour from UNODC for an outstanding design and implementaion of the website*

Server-side render application using [Nuxt](https://nuxtjs.org/) and [Ghost](https://ghost.org) for improved SEO and multiplatform performance. 

## Stack

- [Nuxt](https://nuxtjs.org/) and [Vue](https://vuejs.org) for the front-end.
- [Ghost](https://ghost.org) headless content management system
- AWS E2C instance to host [Ghost](https://ghost.org)
- SASS for styling 
- [SendGrid](https://sendgrid.com) for newsletter and user sign-ups.
