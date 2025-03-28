# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations using Framer Motion and a clean, professional design.

## 🚀 Live Demo

[View Live Demo](https://your-portfolio-url.netlify.app)

## ✨ Features

- Responsive design that works on all devices
- Smooth scroll animations
- Project showcase with links
- Contact information section
- Modern UI with Tailwind CSS
- Interactive animations with Framer Motion
- TypeScript for better code quality
- Lucide React icons

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🚀 Deployment to Netlify

### Option 1: Deploy with Netlify UI (Recommended for Beginners)

1. Create a Netlify account at [https://www.netlify.com](https://www.netlify.com)

2. Click the "New site from Git" button

3. Choose your Git provider (GitHub, GitLab, or Bitbucket)

4. Select your repository

5. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

6. Click "Deploy site"

### Option 2: Deploy with Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install netlify-cli -g
   ```

2. Build your project:
   ```bash
   npm run build
   ```

3. Login to Netlify:
   ```bash
   netlify login
   ```

4. Initialize Netlify:
   ```bash
   netlify init
   ```

5. Deploy:
   ```bash
   netlify deploy --prod
   ```

## 📝 Environment Variables

No environment variables are required for basic setup. However, if you add features that need environment variables, create a `.env` file in the root directory:

```env
VITE_SOME_KEY=your_value
```

## 🔄 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── README.md          # Project documentation
```

## 🎨 Customization

1. Update personal information in `src/App.tsx`:
   - Edit the `personalInfo` object
   - Modify the experience array
   - Update the projects array

2. Change the hero section background:
   - Find a new image on Unsplash
   - Update the `backgroundImage` URL in the hero section

3. Modify colors and styling:
   - Edit Tailwind classes in components
   - Update the theme in `tailwind.config.js`

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Mobile devices
- Tablets
- Desktop computers
- Large screens

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).