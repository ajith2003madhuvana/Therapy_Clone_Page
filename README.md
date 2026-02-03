# Therapy Clone Web Application

A professional, responsive therapy and wellness website built with React 18, TypeScript, and Tailwind CSS. This project demonstrates modern frontend architecture with focus on user experience, accessibility, and clean component design.

## Features

- **Dynamic Navigation** - Header navigation adapts based on the current page, showing relevant links
- **Scroll-Based Animations** - Smooth fade-in animations triggered when sections enter the viewport using Framer Motion
- **Responsive Design** - Mobile-first approach with seamless experience across all screen sizes
- **Consistent Design System** - Unified color palette, typography, and spacing throughout the application
- **Component-Based Architecture** - Reusable, well-structured React components with TypeScript support
- **Interactive UI Elements** - Expandable accordion for professional credentials, functional form handling
- **Professional Aesthetic** - Warm, approachable design suitable for therapy and wellness services

## Technology Stack

| Layer | Technology |
|-------|------------|
| Frontend Framework | React 18.2 |
| Language | TypeScript 5.8 |
| Routing | React Router v6 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 12 |
| Build Tool | Vite 6 |
| Package Manager | npm |

## Project Structure

```
src/
├── components/
│   ├── Header.tsx               # Dynamic navigation header
│   ├── Hero.tsx                 # Landing hero section
│   ├── Intro.tsx                # Introduction section
│   ├── Support.tsx              # Support/features section
│   ├── ProfessionalBackground.tsx # Credentials accordion
│   ├── Specialties.tsx          # Therapy specialties
│   ├── Testimonials.tsx         # Client testimonials
│   ├── FAQs.tsx                 # Frequently asked questions
│   ├── BottomCTA.tsx            # Call-to-action section
│   ├── Office.tsx               # Office information
│   ├── FadeIn.tsx               # Scroll animation wrapper
│   └── Footer.tsx               # Footer component
├── pages/
│   ├── Home.tsx                 # Home/landing page
│   ├── AboutPage.tsx            # About & credentials
│   ├── ServicesPage.tsx         # Services overview
│   └── ContactPage.tsx          # Contact & scheduling
├── App.tsx                      # Main router
└── index.tsx                    # Entry point
```

## Color Palette

| Element | Hex Code | Purpose |
|---------|----------|---------|
| Primary Dark | #24302A | Headings, main text |
| Accent Teal | #6B9B8F | Buttons, CTAs |
| Muted Sage | #5F6D64 | Body text, secondary content |
| Warm Beige | #F6F2EC | Section backgrounds |
| Light Cream | #ECE8E1 | Borders, dividers |
| White | #FFFFFF | Clean backgrounds |

## Design Principles

- **Minimal & Professional** - Clean layouts with generous whitespace
- **Warm & Approachable** - Beige and cream tones for therapeutic context
- **Readable** - High contrast typography with careful line-height
- **Subtle Animations** - Smooth transitions without distraction

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Pages Overview

### Home Page
- Hero section with primary value proposition
- Therapy specialties overview
- Client support messaging
- Professional background section
- Call-to-action buttons

### About Page
- Therapist introduction and credentials
- Expandable accordion with:
  - Education details
  - Licensure information
  - Certifications
- Practice philosophy and approach

### Services Page
- Comprehensive service offerings
- Therapy type descriptions
- Service-specific benefits
- CTA for scheduling

### Contact Page
- Contact form for inquiries
- Scheduling consultation interface
- Practice information
- Location details

## Key Components

### Header
Adaptive navigation that displays different links based on the current page. When on the Home page, users see Services, About, and Schedule. When on Services, users see Home, About, and Schedule.

### FadeIn
Wrapper component using Framer Motion's `whileInView` property. Triggers smooth fade-in animations when sections enter the viewport during scrolling. Animates only once using `viewport={{ once: true }}`.

### ProfessionalBackground
Interactive accordion component displaying professional credentials. Uses React hooks for state management and smooth expand/collapse animations with semantic HTML.

### Responsive Design
All pages and components use Tailwind's responsive breakpoints:
- **sm** (640px): Mobile devices
- **md** (768px): Tablets
- **lg** (1024px): Desktop
- **xl** (1280px): Large displays

## Navigation Flow

```
Home
├── Services
├── About
└── Schedule

Services
├── Home
├── About
└── Schedule

About
├── Home
├── Services
└── Schedule

Contact
├── Home
├── Services
└── About
```

## Performance Considerations

- Lazy-loaded components with React Router code splitting
- Optimized images with object-fit and size constraints
- Smooth animations using GPU-accelerated transforms
- Mobile-optimized for fast load times

## Getting Started Quickly

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/Therapy_Clone_Page.git
cd Therapy_Clone_Page
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Build & Deployment

To build for production:
```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready for deployment.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Code Quality

- TypeScript for type safety
- Consistent naming conventions
- Component composition best practices
- Responsive-first design approach

## Future Enhancements

- Appointment booking integration
- Client testimonials backend
- Email notification system
- Admin dashboard for content management
- Dark mode support
- Multi-language support

## Contributing

Contributions are welcome. Please ensure code follows the established patterns and includes proper TypeScript typing.

## License

This project is available for educational and commercial use.

## Contact

For questions or inquiries, please visit the contact page in the application.