This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Netlify

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Currently using Node Version: 20.5.0

**Ideas for the project:**

- Have all the movements on the website
- Have registration forms for all courses and curriculums
- Have the daily gospel as well as the audio
- Have the weekly bulletins from church on the website
- Have calendar of event on the website
- Have AI Bot (ChatGPT) enabled for any questions that may arise

  - Make sure to have a file that has the questions and ansrs
- Make sure the application is multilingual
- Add Scrollmagic and GSAP for Advanced CSS Animations
- Add Firebase for User Authentifation for Log in, and for tables for events
- Add topics about the Jubilee Year
- Email Marketing such as newsletter if users sign up for newsletters

  - Use Klaviyo for subscriber and have a subscribe form before the footer
- Add a page for group pictures as well
- Terms of Policy for the Page
- Make sure to add Google Analytics 4 (Review the Real Estate Application to see what was done)
- Make sure it is responsive for mobile devices
- Deploiy on Netlify, and custom domain for seguidoresdejesus.com remove from heroku
- Have a .env file for passwords and API Keys, and make sure to add them onto Netlify
- Make sure that each page has a unique name for the tabname
- Add these links:

  - Contact Us
  - Weekly Bulletin from St.Kilian
  - Mass

**Create Components that are going to be global for several purposes:**

- Create a jumbotron for each ministry that props can be passed down for the image and the title
- Create a form that will be similiar for all registrations, pass in props for the names for email.js configuration
- Make a automatic filling PDF when data is sent from the registration form within Email.js
-
