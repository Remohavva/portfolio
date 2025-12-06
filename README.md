# My Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with dark mode support
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14 App Router
- 🎯 TypeScript for type safety
- 💅 Styled with Tailwind CSS
- 📝 Blog section for sharing thoughts
- 💼 Projects showcase
- 📬 Contact form with validation

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your information:

- `app/page.tsx` - Hero section
- `app/about/page.tsx` - About page content
- `components/footer.tsx` - Social links
- `components/navbar.tsx` - Navigation
- `lib/projects.ts` - Your projects
- `lib/blog.ts` - Your blog posts

### Styling

- `styles/globals.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind configuration

### Contact Form

To enable the contact form, implement email sending in `app/api/contact/route.ts`:

1. Choose an email service (SendGrid, Resend, etc.)
2. Add API keys to `.env.local`
3. Implement the email sending logic

## Project Structure

```
my-portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── projects/          # Projects pages
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   └── api/               # API routes
├── components/            # React components
├── lib/                   # Utility functions and data
├── types/                 # TypeScript types
├── styles/                # Global styles
└── public/                # Static assets
```

## Deployment

Deploy easily on [Vercel](https://vercel.com):

```bash
npm run build
```

## License

MIT
