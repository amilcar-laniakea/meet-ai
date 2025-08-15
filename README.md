# Meet AI

A modern, full-stack web application built with Next.js 15, featuring a
comprehensive UI component library, database integration, and advanced styling
system.

## 🚀 Features

### 🔐 **Authentication System**

- **Professional Authentication UI** with modern, polished design
- **Email/Password Authentication** with secure validation and password
  confirmation
- **Dedicated Authentication Pages** at `/sign-in` and `/sign-up` routes
- **Session Management** with persistent login state
- **Brand Integration** with custom Meet.AI logo and consistent styling
- **Social Authentication:** Google and GitHub OAuth login fully integrated with
  branded buttons and secure callback handling
- **Better-Auth Integration** with type-safe APIs and comprehensive error
  handling

### 🌐 **Social Login**

- **Google and GitHub OAuth:** Sign in and sign up with your Google or GitHub
  account
- **Branded Social Buttons:** UI includes Google and GitHub icons (via
  `react-icons`) and loading/error states
- **Centralized Provider Config:** Social provider setup managed in `auth.ts`
  for maintainability

### 🎨 **Modern UI Components**

### 🧑‍💼 **Dashboard & Sidebar**

- **Dashboard Layout:** `/dashboard` route group with sidebar navigation for
  authenticated users
- **Sidebar Navigation:** Modular sidebar with navigation, user menu, and avatar
- **DiceBear Avatars:** Dynamic user avatars using DiceBear for personalized
  experience
- **Dashboard Navbar:** Modular dashboard navigation bar for improved navigation
  and user experience
- **Command Palette:** Global search with CMD+K shortcut for quick navigation

### 🔌 **API & Data Management**

- **tRPC v11:** End-to-end type-safe API with TanStack Query v5 integration
- **Type-Safe Procedures:** Fully typed client-server communication
- **Query Caching:** Efficient data fetching and caching with TanStack Query
- **Server Components:** Proper server/client boundary with tRPC integration
- **Agents System:** Complete agents management with database integration
- **Error Boundaries:** React error boundary for robust error handling

### 🤖 **Agents Management**

- **Agents Module:** Full-featured agents system with CRUD operations
- **Database Schema:** Dedicated agents table with user relationships
- **Type-Safe API:** tRPC procedures for agents data management
- **Loading States:** Comprehensive loading and error handling
- **Suspense Integration:** React Suspense for optimal user experience
- **Agent Creation Form:** Complete form system with validation, avatar preview, and responsive design
- **Protected Routes:** Authentication-required API endpoints with automatic redirects
- **Toast Notifications:** Real-time feedback for agent operations with success/error messages

### 🎨 **Modern UI Components**

- **40+ shadcn/ui components** with Radix UI primitives
- **Complete accessibility** with ARIA compliance and keyboard navigation
- **Responsive design** with mobile-first approach
- **Dark/Light theme support** with automatic system detection
- **Responsive Dialog System:** Adaptive components that switch between Dialog
  and Drawer based on device type
- **Mobile-Responsive Command Palette:** Command interface that adapts to
  mobile/desktop with optimal UX

### 🗄️ **Database Integration**

- **Drizzle ORM** with type-safe database operations
- **Neon PostgreSQL** serverless database
- **Database studio** for visual data management
- **Authentication Schema** with users, sessions, accounts, and verification
  tables

### 🎯 **Advanced Styling**

- **Tailwind CSS 4.0** with modern CSS engine
- **OKLCH color system** for improved color accuracy
- **Custom design tokens** and CSS variables
- **Animation system** with smooth transitions

### ⚡ **Performance & Developer Experience**

- **Turbopack** for lightning-fast development builds
- **TypeScript** with strict type checking
- **Enhanced VS Code Settings** with optimized workspace configuration
- **ESLint + Prettier** with streamlined configuration
- **Hot reload** with instant feedback
- **Modular Architecture** with feature-based organization

## 🛠️ Tech Stack

- **Frontend:** Next.js 15.4.6, React 19.1.0, TypeScript 5
- **Authentication:** Better-Auth v1.2.8 with WebAuthn support
- **API:** tRPC v11 with TanStack Query v5 for type-safe data fetching
- **Styling:** Tailwind CSS 4.0, PostCSS, tw-animate-css
- **UI Components:** shadcn/ui, Radix UI, Lucide Icons
- **Database:** Drizzle ORM, Neon PostgreSQL
- **Development:** ESLint, Prettier, Turbopack
- **Forms:** React Hook Form, Zod validation
- **Charts:** Recharts for data visualization
- **Utils:** nanoid v5 for unique ID generation
- **Error Handling:** react-error-boundary for robust error boundaries
- **Notifications:** Sonner for toast notifications and user feedback

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
npm run db:studio    # Open Drizzle Studio
```

## 🎨 Authentication Features

### 🔑 **Modern Authentication Flow**

- **Professional Sign-In/Sign-Up Pages** with responsive two-column design
- **Brand Integration** with Meet.AI logo and consistent blue theme
- **Form Validation** with real-time feedback and error handling
- **Loading States** with smooth animations during authentication
- **Password Confirmation** for secure user registration
- **Social Login:** Google and GitHub OAuth login with branded buttons and
  error/loading feedback

### 📱 **Responsive Design**

- **Mobile-First** authentication forms optimized for all devices
- **Desktop Enhancement** with branded side panels on larger screens
- **Touch-Friendly** interactions with proper button sizing
- **Adaptive Layouts** that work seamlessly across screen sizes

### 🛡️ **Security Features**

- **Form Protection** against multiple submissions with loading states
- **Input Validation** with Zod schema and TypeScript type safety
- **Secure Error Handling** without exposing sensitive information
- **Legal Compliance** with terms of service and privacy policy integration

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

// Agents table for AI agent management
export const agents = pgTable('agents', {
  id: text('id')
    .primaryKey()
    .$default(() => nanoid()),
  name: text('name').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id),
  instructions: text('instructions').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
});

// Sessions table for authentication
export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expires_at').notNull(),
  token: text('token').notNull().unique(),
  userId: text('user_id').references(() => user.id)
  // ... additional session fields
});

// Accounts table for OAuth providers
export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id').references(() => user.id)
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

````
src/
├── app/
│   ├── (auth)/                # Authentication route group
│   │   ├── layout.tsx         # Auth-specific layout
│   │   ├── sign-in/page.tsx   # Sign-in page
│   │   └── sign-up/page.tsx   # Sign-up page
│   ├── (dashboard)/           # Dashboard route group for authenticated users
│   │   ├── agents/page.tsx    # Agents management page
│   │   ├── meetings/page.tsx  # Meetings page
│   │   ├── layout.tsx         # Dashboard layout with sidebar/navbar
│   │   └── page.tsx           # Dashboard home page
│   ├── api/
│   │   ├── auth/[...all]/     # Authentication API routes
│   │   └── trpc/[trpc]/       # tRPC API endpoint
│   ├── favicon.ico            # App favicon
│   ├── globals.css            # Global styles and theme
│   ├── layout.tsx             # Root layout component
├── modules/
│   ├── agents/
│   │   ├── schemas.ts         # Zod validation schemas for agents
│   │   ├── types.ts           # TypeScript type definitions for agents
│   │   ├── server/
│   │   │   └── procedures.ts  # tRPC agents procedures with auth protection
│   │   └── ui/
│   │       ├── components/
│   │       │   ├── agent-form.tsx        # Agent creation/edit form
│   │       │   ├── agents-list-header.tsx # Header with New Agent button
│   │       │   └── new-agent-dialog.tsx  # Responsive dialog for agent creation
│   │       └── views/
│   │           └── agents-view.tsx
│   ├── auth/
│   │   └── ui/
│   │       └── views/
│   │           ├── sign-in-view.tsx
│   │           └── sign-up-view.tsx
│   ├── dashboard/
│   │   └── ui/
│   │       └── components/
│   │           ├── dashboard-navbar.tsx
│   │           ├── dashboard-command.tsx
│   │           ├── dashboard-sidebar.tsx
│   │           └── dashboard-user-button.tsx
│   └── home/
│       └── ui/
│           └── views/
│               └── home-view.tsx
├── components/
│   ├── ui/                    # shadcn/ui components (enhanced with responsive variants)
│   ├── responsive-dialog.tsx  # Adaptive Dialog/Drawer component for mobile/desktop
│   ├── error-state.tsx        # Reusable error state component
│   ├── loading-state.tsx      # Reusable loading state component
│   └── generated-avatar.tsx   # DiceBear avatar component
├── db/
│   ├── index.ts               # Database connection
│   └── schema.ts              # Database schema with auth and agents tables
├── hooks/
│   └── use-mobile.ts          # Mobile detection hook
├── lib/
│   ├── auth.ts                # Better-auth server configuration
│   ├── auth-client.ts         # Better-auth client configuration
│   └── utils.ts               # Utility functions
├── trpc/                      # tRPC setup and configuration
│   ├── client.tsx             # Client-side tRPC and React Query setup
│   ├── server.tsx             # Server-side tRPC setup
│   ├── init.ts                # tRPC initialization, context, and protected procedures
│   ├── query-client.ts        # TanStack Query client configuration
│   └── routers/
│       └── _app.ts            # Main tRPC router with agents
└── public/
    └── logo.svg               # Meet.AI brand logo
```## 🌙 Theme System

The application features a sophisticated theme system:

- **OKLCH color space** for accurate colors
- **CSS custom properties** for consistency
- **Automatic theme detection** based on system preferences
- **Manual theme switching** capability

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind breakpoints
- **Flexible layouts** that adapt to different screen sizes
- **Adaptive Components** that automatically switch between mobile and desktop variants
- **Responsive Dialog System** that uses Drawer on mobile and Dialog on desktop
- **Context-Aware UI** with automatic mobile detection and component adaptation
- **Touch-friendly interactions** for mobile devices

## 🔧 Development

### Code Quality

- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Strict type checking** enabled

### New & Updated Dependencies

- **react-icons:** Used for scalable Google and GitHub icons in social login
  buttons
- **@dicebear/collection, @dicebear/core:** Used for dynamic user avatars in
  dashboard sidebar

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

This is a personal project. If you have suggestions or find issues, please
create an issue in the repository.
````
