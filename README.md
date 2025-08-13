# Meet AI

A modern, full-stack web application built with Next.js 15, featuring a comprehensive UI component library, database integration, and advanced styling system.

## 🚀 Features

### 🔐 **Authentication System**
- **Email/Password Authentication** with secure validation
- **Session Management** with persistent login state
- **User Registration** with email verification support
- **WebAuthn/Passkey Support** for enhanced security
- **Better-Auth Integration** with type-safe APIs

### 🎨 **Modern UI Components**
- **40+ shadcn/ui components** with Radix UI primitives
- **Complete accessibility** with ARIA compliance and keyboard navigation
- **Responsive design** with mobile-first approach
- **Dark/Light theme support** with automatic system detection

### 🗄️ **Database Integration**
- **Drizzle ORM** with type-safe database operations
- **Neon PostgreSQL** serverless database
- **Database studio** for visual data management
- **Authentication Schema** with users, sessions, accounts, and verification tables

### 🎯 **Advanced Styling**
- **Tailwind CSS 4.0** with modern CSS engine
- **OKLCH color system** for improved color accuracy
- **Custom design tokens** and CSS variables
- **Animation system** with smooth transitions

### ⚡ **Performance & Developer Experience**
- **Turbopack** for lightning-fast development builds
- **TypeScript** with strict type checking
- **ESLint + Prettier** for code quality
- **Hot reload** with instant feedback

## 🛠️ Tech Stack

- **Frontend:** Next.js 15.4.6, React 19.1.0, TypeScript 5
- **Authentication:** Better-Auth v1.2.8 with WebAuthn support
- **Styling:** Tailwind CSS 4.0, PostCSS, tw-animate-css
- **UI Components:** shadcn/ui, Radix UI, Lucide Icons
- **Database:** Drizzle ORM, Neon PostgreSQL
- **Development:** ESLint, Prettier, Turbopack
- **Forms:** React Hook Form, Zod validation
- **Charts:** Recharts for data visualization

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/amilcar-laniakea/meet-ai.git
cd meet-ai
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
# Create .env.local file
DATABASE_URL="your-neon-postgresql-connection-string"
```

4. **Push database schema:**
```bash
npm run db:push
```

## 🚀 Getting Started

### Development Server

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run db:push      # Push database schema
npm run db-studio    # Open Drizzle Studio
```

## 🎨 UI Components

The project includes a comprehensive component library:

### Navigation & Layout
- Sidebar, Navigation Menu, Breadcrumb
- Menubar, Header components

### Form Controls
- Input, Textarea, Select, Checkbox
- Radio Group, Switch, Slider
- Calendar with Date Picker

### Interactive Elements
- Button variants, Dropdown Menus
- Context Menus, Hover Cards
- Tooltips, Popover components

### Data Display
- Card, Table, Badge, Avatar
- Skeleton Loading, Chart components
- Progress indicators

### Overlay Components
- Dialog, Alert Dialog, Sheet
- Drawer, Command Palette

## 🗄️ Database Schema

Current schema includes authentication tables:

```typescript
// Users table
export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').notNull(),
  image: text('image'),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull()
});

// Sessions table for authentication
export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expires_at').notNull(),
  token: text('token').notNull().unique(),
  userId: text('user_id').references(() => user.id),
  // ... additional session fields
});

// Accounts table for OAuth providers
export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id').references(() => user.id),
  // ... OAuth token fields
});

// Verification table for email verification
export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull()
});
```

## 🎯 Project Structure

```
src/
├── app/
│   ├── api/auth/[...all]/ # Authentication API routes
│   ├── globals.css        # Global styles and theme
│   ├── layout.tsx         # Root layout component
│   └── page.tsx          # Home page with auth demo
├── components/
│   └── ui/               # shadcn/ui components
├── db/
│   ├── index.ts          # Database connection
│   └── schema.ts         # Database schema with auth tables
├── hooks/
│   └── use-mobile.ts     # Mobile detection hook
└── lib/
    ├── auth.ts           # Better-auth server configuration
    ├── auth-client.ts    # Better-auth client configuration
    └── utils.ts          # Utility functions
```

## 🌙 Theme System

The application features a sophisticated theme system:

- **OKLCH color space** for accurate colors
- **CSS custom properties** for consistency
- **Automatic theme detection** based on system preferences
- **Manual theme switching** capability

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind breakpoints
- **Flexible layouts** that adapt to different screen sizes
- **Touch-friendly interactions** for mobile devices

## 🔧 Development

### Code Quality
- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Strict type checking** enabled

### Performance
- **Turbopack** for fast development builds
- **Tree-shaking** for optimized bundles
- **Component lazy loading** where appropriate

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - comprehensive Next.js guide
- [Learn Next.js](https://nextjs.org/learn) - interactive tutorial
- [Next.js GitHub](https://github.com/vercel/next.js) - source code and issues

### Component Library
- [shadcn/ui Documentation](https://ui.shadcn.com) - component library docs
- [Radix UI](https://www.radix-ui.com) - primitive components
- [Tailwind CSS](https://tailwindcss.com) - utility-first CSS framework

### Database
- [Drizzle ORM](https://orm.drizzle.team) - TypeScript ORM
- [Neon](https://neon.tech) - serverless PostgreSQL

## 🚀 Deployment

### Vercel (Recommended)

Deploy easily on [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables
4. Deploy automatically

### Other Platforms

The application can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- Digital Ocean
- AWS
- Google Cloud Platform

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a personal project. If you have suggestions or find issues, please create an issue in the repository.
