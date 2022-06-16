---
title: Upscape
coverImg: https://images.unsplash.com/photo-1623157879673-859a2d8d4522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80
alt: an image
description: What do you do when you can't find the perfect todo app? Build one yourself!
publishDate: 7 Jun 2022
source: https://github.com/nikhilhenry/upscape
live: https://upscape-nikhil.herokuapp.com
---
<div class="not-prose">
<ProjectLinks source={frontmatter.source} live={frontmatter.live}></ProjectLinks>
</div>
### The App for Do-ers

Built for productivity enthusiasts.

> Latest release version: **January 2022 / Production v2.0.4**

## Stack

- [Gin](https://gin-gonic.com/) backend
- [Go](https://golang.org) powered backend
- [MongoDB Atlas](https://cloud.mongodb.com/v2/5ea9386c468f9c5f315a6535#metrics/replicaSet/5ec2597012bfec1f1f998f60/explorer) (DaaS)
- [Vue.js V3](https://v3.vuejs.org/) Client SPA
- [JWT](jwt.io) for auth
- [Heroku](https://dashboard.heroku.com/apps/carenikhil) for PaaS
- [Github](https://github.com/nikhilhenry/) CI/CD
- [Tailwind](https://tailwind.com) CSS Utility Classes

## Development

### Installing dependencies

```
got get
cd client
npm ci
```

### Running server

```
make
cd client
npm run serve
```

Server running on port 5000 with DB collection. Client running on port 8080 with **local** API connection.

## Production

Use any PaaS system with support for **Docker** containers

1. Fork Project
2. Intialise GitHub Secrets with required build arguments from docker file
3. Create Heroku Project
4. Run workflow manually
