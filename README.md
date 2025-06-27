
# 🚀 Welcome to Dyenxia Agency Website! 🌟

**Dyenxia** is a sleek, modern, and responsive agency website built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. It’s packed with dynamic features, a stunning portfolio showcase, and a blog system that’s as smooth as it gets. Whether you're here to explore our code or get inspired by our design, we’re thrilled to have you! 🎉

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC)](https://tailwindcss.com/)

## ✨ What Makes Dyenxia Awesome?

- **Responsive & Polished**: Mobile-first design with Tailwind CSS, looking sharp on every screen size! 📱💻
- **Light & Dark Mode**: Toggle between themes with a slick UI, powered by customizable color schemes. 🌙☀️
- **Dynamic Blogging**: Slug-based blog pages for seamless content navigation. 📝
- **Toast Notifications**: Pop-up feedback messages inspired by `react-hot-toast` to keep users in the loop. 🔔
- **Smooth Animations**: Eye-catching marquees and accordions that bring the site to life. 🎬
- **TypeScript Power**: Type-safe code for a buttery-smooth developer experience. 🛠️
- **UI Component Library**: A treasure trove of reusable components like buttons, cards, and modals! 🧰

> **Ready to dive in?** Clone the repo and see the magic for yourself! 🚀

## 📂 Project Structure

Here’s a peek at how Dyenxia is organized:

```
dyenxia/
├── app/                             # Core pages and layout
│   ├── about/page.tsx              # About us page
│   ├── blog/                       # Blog system
│   │   ├── [slug]/page.tsx         # Dynamic blog detail pages
│   │   ├── blogData.tsx            # Blog data logic
│   │   └── page.tsx                # Blog listing page
│   ├── book/page.tsx               # Book page
│   ├── contact/page.tsx            # Contact page
│   ├── portfolio/page.tsx          # Portfolio showcase
│   ├── services/page.tsx           # Services page
│   ├── globals.css                 # Global styles
│   ├── layout.tsx                  # Root layout with Head component
│   └── page.tsx                    # Home page
├── components/                      # Reusable UI components
│   ├── cta-section.tsx             # Call-to-action section
│   ├── faq-section.tsx             # FAQ section
│   ├── features-section.tsx        # Features showcase
│   ├── footer.tsx                  # Footer
│   ├── hero-section.tsx            # Hero section with transitions
│   ├── magicui/marquee.tsx         # Animated marquee for portfolio
│   ├── mode-toggle.tsx             # Light/dark mode toggle
│   ├── navbar.tsx                  # Navigation bar
│   ├── testimonial-section.tsx     # Client testimonials
│   ├── theme-provider.tsx          # Theme management
│   ├── tool-section.tsx            # Tools showcase
│   ├── ui/                         # UI component library
│   │   ├── HoverEffectCards.tsx    # Hover effect cards
│   │   ├── accordion.tsx           # Collapsible accordion
│   │   ├── button.tsx              # Custom buttons
│   │   ├── card.tsx                # Card components
│   │   ├── toast.tsx               # Toast notifications
│   │   ├── toaster.tsx             # Toast container
│   │   └── [30+ more components]   # Modals, forms, sliders, and more!
│   ├── webPreview-section.tsx      # Web preview section
│   └── workingflow-section.tsx     # Workflow section
├── hooks/                          # Custom React hooks
│   ├── use-mobile.tsx             # Mobile detection hook
│   └── use-toast.ts               # Toast notification hook
├── lib/utils.ts                   # Utility functions
├── public/                         # Static assets
│   ├── Dynexia-Pheonix.jpeg       # Branding image
│   ├── app-dark.webp              # Dark mode preview
│   ├── hero-shape-1.svg           # Hero graphic
│   ├── logo-txt-dark.jpeg         # Dark theme logo
│   ├── placeholder-logo.png       # Placeholder logo
│   └── [more assets]              # SVGs, images, and placeholders
├── styles/globals.css              # Tailwind CSS global styles
├── .gitignore
├── components.json
├── LICENSE
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── project_code.txt
├── tailwind.config.ts
├── tsconfig.json
├── web content.docx
├── yarn.lock
└── ~$b content.docx
```

> **Pro Tip**: Check out `components/ui/` for a goldmine of reusable components to supercharge your next project! 💡

## 📰 Recent Updates

We’ve been busy making Dyenxia better! Here’s what’s new:

- **Last Month** 📅:
  - Swapped meta tags for a shiny new `Head` component in `app/layout.tsx` for top-notch SEO. 🔍
- **2 Months Ago** 🛠️:
  - Launched slug-based blog detail pages in `app/blog/[slug]/page.tsx`. 📖
  - Added a **vertical marquee** in `components/magicui/marquee.tsx` to show off our portfolio in style. 🎥
  - Polished hero section transitions in `components/hero-section.tsx`. ✨
- **3 Months Ago** 🚀:
  - Rolled out core pages: `about`, `blog`, `book`, `contact`, `portfolio`, and `services`. 🏗️
  - Gave the about page a fresh design with cool effects. 🎨
  - Added background gradients, fixed navbar links, and introduced a theme toggle. 🌈

## 🚀 Get Started

Ready to bring Dyenxia to life on your machine? Follow these steps:

1. **Clone the Repo**:
   ```bash
   git clone https://github.com/your-username/dyenxia.git
   cd dyenxia
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Fire Up the Dev Server**:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
   Visit `http://localhost:3000` to see the magic! 🌐

## 🧰 Tech Stack

- **Next.js**: Server-side rendering and static site generation. ⚡
- **React**: Component-based UI awesomeness. 🖼️
- **TypeScript**: Type-safe coding for fewer bugs. 🐛
- **Tailwind CSS**: Utility-first styling with a custom twist. 🎨
- **tailwindcss-animate**: Smooth animations for marquees and accordions. 🎞️
- **clsx** & **tailwind-merge**: Class name management made easy. 🔗
- Check `package.json` for the full lineup!

## 🎨 Tailwind CSS Magic

Our `tailwind.config.ts` is where the styling magic happens:
- **Dark Mode**: Toggle with `class` strategy for seamless theme switching. 🌗
- **Custom Colors**: Vibrant palette with `primary`, `secondary`, `accent`, `destructive`, and `sidebar` shades. 🖌️
- **Animations**: Keyframes for `accordion-down`, `accordion-up`, `marquee`, and `marquee-vertical`. 🎬
- **Container**: Centered layout with 2rem padding and 1400px max-width for `2xl` screens. 📏
- **Typography**: Clean and modern with Arial, Helvetica, sans-serif. ✍️

## 🔔 Toast Notifications

Our custom toast system in `components/ui/use-toast.ts` and `lib/utils.ts` is a game-changer:
- Displays one toast at a time (`TOAST_LIMIT = 1`). 🛑
- Auto-dismisses after a delay (`TOAST_REMOVE_DELAY = 1000000ms`). ⏳
- Supports adding, updating, dismissing, and removing toasts. 🔄
- Try it out:
  ```tsx
  import { toast } from "@/components/ui/use-toast";

  toast({
    title: "Success! 🎉",
    description: "Your action was completed!",
  });
  ```

## 💅 Styling Highlights

- **Global Styles**: Defined in `styles/globals.css` with Tailwind’s `@layer base` for consistent borders and colors. 🖼️
- **Custom Utility**: `text-balance` for perfectly wrapped text. 📜
- **CSS Reset**: Zaps default margins and paddings with `overflow-x: hidden`. 🧹

## 🛠️ Development Tips

- **Linting**: Run `npm run lint` or `yarn lint` to keep code squeaky clean. 🧼
- **Building**: Use `npm run build` or `yarn build` for production-ready output. 📦
- **Testing**: Add Jest or Vitest scripts to `package.json` for testing. 🧪

## 🤝 Contribute to Dyenxia

Love what you see? Want to make it even better? Here’s how to contribute:

1. Fork the repo. 🍴
2. Create a feature branch: `git checkout -b feature/your-cool-idea`. 🌟
3. Commit your changes: `git commit -m "Add my cool idea"`. 💾
4. Push to your branch: `git push origin feature/your-cool-idea`. 🚀
5. Open a pull request and join the party! 🎈

> **Got ideas?** Share them in the [issues](https://github.com/your-username/dyenxia/issues) section!

## 📜 License

Dyenxia is licensed under the [MIT License](LICENSE). Feel free to use, modify, and share! 🗽

## 🌐 Connect With Us

- **Portfolio**: Check out our work in `app/portfolio/page.tsx`. 🖼️
- **Contact**: Reach out via `app/contact/page.tsx`. 📧
- **Blog**: Dive into our latest posts in `app/blog/page.tsx`. 📚

**Let’s build something amazing together!** 🎉


