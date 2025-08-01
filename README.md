# AI4 Institute Website

A modern, professional React website for the AI4 Institute of Artificial Intelligence Development.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and modern JavaScript
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Multi-language Support**: Internationalization ready
- **Performance Optimized**: Lazy loading, optimized images, and smooth animations
- **SEO Friendly**: Meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant components

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-github-repo-url>
   cd ai4-institute-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` (or the port shown in the terminal)

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── AboutTeam/      # Team information components
│   ├── AtosHero/       # Hero section components
│   ├── Awards/         # Awards and recognition
│   ├── ClientSuccess/  # Client success stories
│   ├── Expertise/      # Expertise and services
│   ├── Footer/         # Footer components
│   ├── Header/         # Navigation and header
│   ├── Hero/           # Main hero section
│   ├── Impact/         # Impact and results
│   ├── News/           # News and updates
│   ├── Partners/       # Partner organizations
│   ├── Products/       # Product showcase
│   └── UI/             # Common UI components
├── pages/              # Page components
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── styles/             # Global styles and themes
└── utils/              # Utility functions
```

## 🎨 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run lint` - Runs ESLint for code quality
- `npm run lint:fix` - Fixes ESLint issues automatically
- `npm run preview` - Serves the production build locally

## 🌐 Deployment

### For Production Deployment:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **The build folder** (`build/`) contains the production-ready files

3. **Deploy options:**
   - **Netlify**: Drag and drop the `build` folder
   - **Vercel**: Connect your GitHub repo and deploy automatically
   - **AWS S3**: Upload the `build` folder contents
   - **Traditional hosting**: Upload all files from `build` folder to your web server

### Environment Variables

If you need to configure environment variables, create a `.env` file in the root directory:

```env
REACT_APP_API_URL=your_api_url_here
REACT_APP_GOOGLE_ANALYTICS_ID=your_ga_id_here
```

## 🎯 Key Technologies

- **React 18** - Modern React with hooks and concurrent features
- **Styled Components** - CSS-in-JS styling
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations
- **GSAP** - Advanced animations
- **React Icons** - Icon library
- **AOS** - Scroll animations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For any questions or issues, please contact the development team.

---

**Note**: This is a production-ready React application. The build process optimizes the code for performance and creates static files that can be served from any web server.