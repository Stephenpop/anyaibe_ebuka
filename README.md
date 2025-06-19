# Anyaibe Ebuka Stephen - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern dark theme with gradient accents
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js 14
- 🎭 Smooth animations and transitions
- 📧 Working contact form with server actions
- 🔍 SEO optimized
- 🎯 TypeScript for type safety

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Animations**: CSS animations + Tailwind

## Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information
Update the following files with your information:
- `app/components/Hero.tsx` - Name, roles, social links
- `app/components/About.tsx` - About section content
- `app/components/Skills.tsx` - Skills and proficiency levels
- `app/components/Experience.tsx` - Work experience
- `app/components/Projects.tsx` - Your projects
- `app/components/Contact.tsx` - Contact information

### Images
- Add your profile photo to `public/profiles.jpg`
- Add project screenshots to `public/projects/`
- Replace favicon files in `public/`
- Update `public/og-image.png` for social media previews

### Contact Form
Form submissions are saved to `data/submissions.json` and logged to the console. To view submissions, visit `/admin`.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Project Structure

\`\`\`
├── app/
│   ├── actions/          # Server actions
│   ├── admin/           # Admin panel for form submissions
│   ├── components/      # React components
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/ui/       # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
└── data/               # Form submissions storage
\`\`\`

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: anyaibeebuka@gmail.com
- **LinkedIn**: [Anyaibe Ebuka Stephen](https://www.linkedin.com/in/anyaibe-ebuka-stephen)
- **GitHub**: [Stephenpop](https://github.com/Stephenpop)
- **Website**: [bero.com.ng](https://bero.com.ng)
\`\`\`

```plaintext file=".env.example"
# Copy this file to .env.local and fill in your values

# Optional: Add email service configuration
# RESEND_API_KEY=your_resend_api_key
# SENDGRID_API_KEY=your_sendgrid_api_key
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_USER=your_email@gmail.com
# SMTP_PASS=your_app_password
