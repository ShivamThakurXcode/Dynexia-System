

# Dyenxia Agency Website

## Overview
Dyenxia is a modern, responsive agency website built with **React**, **TypeScript**, and **Tailwind CSS**. The website leverages a component-based architecture and includes features like toast notifications, dark mode support, and smooth animations. This README provides an overview of the project structure, setup instructions, and key features.

## Features
- **Responsive Design**: Utilizes Tailwind CSS with a mobile-first approach, ensuring compatibility across various screen sizes.
- **Dark Mode**: Supports light and dark themes with customizable color variables.
- **Toast Notifications**: Implements a toast system inspired by `react-hot-toast` for user feedback.
- **Animations**: Includes smooth animations for accordions and marquees using Tailwind CSS and the `tailwindcss-animate` plugin.
- **TypeScript**: Ensures type safety and better developer experience.
- **Custom Styling**: Uses a custom Tailwind CSS configuration with extended color schemes, border radius, and animation keyframes.

## Project Structure
```
dyenxia/
├── src/
│   ├── app/
│   ├── components/
│   ├── pages/
│   └── **/*.tsx
├── public/
├── tailwind.config.js
├── package.json
└── README.md
```

- **`src/`**: Contains the main source code, including React components, pages, and application logic.
- **`tailwind.config.js`**: Configures Tailwind CSS with custom themes, colors, and animations.
- **`public/`**: Stores static assets like images and favicon.
- **`package.json`**: Manages project dependencies and scripts.

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/dyenxia.git
   cd dyenxia
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:3000`.

## Dependencies
- **React**: Frontend library for building user interfaces.
- **TypeScript**: Adds static types to JavaScript for better maintainability.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **tailwindcss-animate**: Plugin for adding custom animations to Tailwind CSS.
- **clsx** and **tailwind-merge**: Utilities for managing conditional class names.
- **Other dependencies**: Refer to `package.json` for a complete list.

## Tailwind CSS Configuration
The project uses a customized Tailwind CSS configuration:
- **Dark Mode**: Enabled with the `class` strategy.
- **Custom Colors**: Defines a comprehensive color palette for light and dark themes, including `primary`, `secondary`, `accent`, `destructive`, and more.
- **Animations**: Custom keyframes for accordion (`accordion-down`, `accordion-up`) and marquee (`marquee`, `marquee-vertical`) effects.
- **Container**: Centered with 2rem padding and a max-width of 1400px for `2xl` screens.
- **Typography**: Uses Arial, Helvetica, sans-serif as the default font family.

## Toast Notification System
The toast system is implemented in `src/lib/toast.tsx` and supports:
- A limit of one toast at a time (`TOAST_LIMIT = 1`).
- Automatic removal after a delay (`TOAST_REMOVE_DELAY = 1000000ms`).
- Actions for adding, updating, dismissing, and removing toasts.
- Integration with React's state management for seamless updates.

## Styling
- **Global Styles**: Applied via Tailwind's `@layer base` to ensure consistent borders and background/text colors.
- **Custom Utilities**: Includes a `text-balance` utility for balanced text wrapping.
- **CSS Reset**: Removes default margins and paddings with `overflow-x: hidden` for a clean layout.

## Usage
- **Components**: Reusable React components are located in `src/components/`.
- **Pages**: Page-specific components are in `src/pages/`.
- **Toast Usage**:
  ```tsx
  import { toast } from "@/lib/toast";

  toast({
    title: "Success",
    description: "Your action was completed!",
  });
  ```

## Development
- **Linting**: Run `npm run lint` to check for code quality issues.
- **Building**: Run `npm run build` to create a production-ready build.
- **Testing**: Add testing scripts to `package.json` if needed (e.g., using Jest or Vitest).

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

