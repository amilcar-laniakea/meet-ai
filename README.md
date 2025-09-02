# Meet AI

A modern, full-stack AI-powered meeting platform built with Next.js 15,
featuring real-time video calls, AI meeting assistants, transcript analysis, and
a comprehensive premium subscription system.

## 🚀 Features

### � **Video Conferencing**

- **Real-time Video Calls:** Integrated Stream.io Video SDK for high-quality
  video meetings
- **Call Lobby Interface:** Pre-call setup with camera/microphone controls
- **Professional Call UI:** Dynamic speaker layout with call controls and
  branding
- **Recording Support:** Built-in meeting recording capabilities
- **Real-time Transcription:** Automatic meeting transcription for later
  reference
- **Custom Branding:** Professional meeting interface with logo and meeting info

### 🤖 **AI Meeting Assistant**

- **AI Agent Integration:** OpenAI-powered meeting assistants that join your
  calls
- **Real-time AI Responses:** Intelligent responses during meetings
- **Custom Instructions:** Configurable AI behavior per meeting
- **Automatic Connection:** AI agents automatically join calls with context
- **Meeting Analysis:** AI-powered meeting summaries and insights
- **Chat Interface:** Interactive AI chat for meeting-related questions

### 📝 **Meeting Transcripts**

- **Searchable Transcripts:** Full-text search within meeting transcripts
- **Timestamp Navigation:** Jump to specific moments in recordings
- **Highlight Support:** Search result highlighting in transcripts
- **Real-time Updates:** Live transcript updates during meetings
- **Export Options:** Download transcripts in various formats
- **Thread View:** Organized conversation view with speaker tracking

### 💳 **Premium Features & Payments**

- **Subscription Plans:** Flexible premium plans with different feature sets
- **Multiple Payment Providers:** Support for various payment gateways
- **Payment Management:** Add, update, and remove payment methods
- **Subscription Controls:** Easy upgrade/downgrade between plans
- **Invoice History:** View and download payment history
- **Trial System:** Free trial with smooth conversion to paid plans
- **Premium Access:** Granular control of premium features

### �🔐 **Authentication System**

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

- **40+ shadcn/ui components** with Radix UI primitives
- **Complete accessibility** with ARIA compliance and keyboard navigation
- **Responsive design** with mobile-first approach
- **Dark/Light theme support** with automatic system detection
- **Responsive Dialog System:** Adaptive components that switch between Dialog
  and Drawer based on device type
- **Mobile-Responsive Command Palette:** Command interface that adapts to
  mobile/desktop with optimal UX

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

### � **Meetings System**

- **Meetings Module:** Full-featured meetings system with CRUD-ready
  architecture
- **Meetings Database Schema:** Dedicated meetings table and status enum
- **Type-Safe API:** tRPC procedures for meetings data management
- **Meetings Pages:** `/meetings` and `/meetings/[meetingId]` with suspense,
  error, and loading states
- **Meeting Detail Page:** Individual meeting pages with dynamic routing and
  comprehensive information
- **Meeting Actions:** Edit and delete functionality accessible through dropdown
  menus on detail pages
- **Pagination & Filtering:** Server-side pagination and search for meetings
- **Modular Structure:** Separated meetings logic for scalability
- **Meetings Data Table:** Professional meetings list with TanStack React Table
  integration
- **Meeting Status Tracking:** Color-coded status badges with icons (upcoming,
  active, completed, cancelled, processing)
- **Duration Display:** Human-readable duration formatting using
  humanize-duration
- **Agent Integration:** Meetings display associated agent information with
  avatars
- **Meeting Creation:** Professional meeting creation forms with agent
  assignment
- **Advanced Filtering:** Comprehensive filter system with search, status, and
  agent filters
- **Real-time Search:** Live search functionality for meeting names and
  descriptions
- **Status Filtering:** Filter meetings by current status with dropdown
  selection
- **Agent Filtering:** Filter meetings by specific agents with "All Agents"
  option
- **URL State Persistence:** Filter states persist in URL parameters for
  bookmarking
- **Responsive Design:** Mobile-optimized filter interface with horizontal
  scroll navigation
- **Clear Filters:** One-click option to reset all applied filters
- **Confirmation Dialogs:** Prevent accidental deletions with responsive
  confirmation modals
- **Breadcrumb Navigation:** Professional navigation system for easy movement
  between meetings list and detail views

### 🤖 **Agents Management**

- **Agents Module:** Full-featured agents system with CRUD operations
- **Database Schema:** Dedicated agents table with user relationships
- **Type-Safe API:** tRPC procedures for agents data management
- **Loading States:** Comprehensive loading and error handling
- **Suspense Integration:** React Suspense for optimal user experience
- **Agent Creation Form:** Complete form system with validation, avatar preview,
  and responsive design
- **Protected Routes:** Authentication-required API endpoints with automatic
  redirects
- **Toast Notifications:** Real-time feedback for agent operations with
  success/error messages
- **Data Table System:** Professional agents listing with TanStack React Table
  integration
- **Interactive Table:** Clickable rows, custom columns, and responsive design
  for agent management
- **Empty State UI:** Beautiful empty state with custom illustrations when no
  agents exist
- **Search & Filtering:** Real-time search functionality with URL state
  persistence using nuqs
- **Pagination System:** Complete pagination with server-side data management
  and URL state
- **Advanced Query Management:** Server-side filtering, searching, and
  pagination with optimized database queries
- **Agent Detail Pages:** Individual agent pages with dynamic routing and
  comprehensive agent information
- **Breadcrumb Navigation:** Professional navigation system for easy movement
  between agents list and detail views
- **Agent Actions:** Edit and delete functionality accessible through dropdown
  menus on agent detail pages
- **User-specific Access:** Enhanced security ensuring users can only access
  their own agents
- **Agent Update:** Edit agent details with responsive dialog and validation
- **Agent Delete:** Remove agents with confirmation dialog and safe mutation
- **Confirmation Dialog:** Prevent accidental deletions with a custom
  confirmation modal
- **Optimistic UI:** Real-time feedback and toast notifications for
  update/delete
- **Robust Error Handling:** Error and forbidden state handling for agent
  mutations

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

### 📝 **Meetings Form**

- **Meetings Form:** Create and edit meetings with a modern, responsive form
- **Agent Selection:** Integrated agent picker and new agent dialog in meetings
  form

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
- **Video Calls:** Stream.io Video SDK for real-time video conferencing
- **AI Integration:** OpenAI API, Stream.io OpenAI Realtime API
- **Chat System:** Stream Chat SDK for real-time messaging
- **Authentication:** Better-Auth v1.2.8 with WebAuthn support
- **API:** tRPC v11 with TanStack Query v5 for type-safe data fetching
- **Data Tables:** TanStack React Table v8 for advanced table functionality
- **URL State Management:** nuqs v2.4.3 for type-safe URL parameter handling
- **Styling:** Tailwind CSS 4.0, PostCSS, tw-animate-css
- **UI Components:** shadcn/ui, Radix UI, Lucide Icons
- **Database:** Drizzle ORM, Neon PostgreSQL
- **Development:** ESLint, Prettier, Turbopack
- **Forms:** React Hook Form, Zod validation
- **Charts:** Recharts for data visualization
- **Payments:** Polar for subscription management
- **Background Jobs:** Inngest for reliable job processing
- **Utils:** nanoid v5, humanize-duration
- **Error Handling:** react-error-boundary for robust error boundaries
- **Notifications:** Sonner for toast notifications
- **Markdown:** React Markdown for rich text rendering
- **Search:** React Highlight Words for transcript search

## � Project Structure

```
meet-ai/
├── src/
│   ├── app/                      # Next.js app router pages and layouts
│   │   ├── (auth)/              # Authentication-related routes
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   │   ├── (dashboard)/         # Protected dashboard routes
│   │   │   ├── agents/
│   │   │   ├── meetings/
│   │   │   └── upgrade/
│   │   ├── api/                 # API routes
│   │   └── layout.tsx           # Root layout
│   ├── components/
│   │   └── ui/                  # Shared UI components
│   ├── db/                      # Database configuration
│   │   ├── index.ts            # Database client
│   │   └── schema.ts           # Drizzle schema
│   ├── hooks/                   # Shared React hooks
│   ├── inngest/                 # Background job handlers
│   ├── lib/                     # Utility libraries
│   │   ├── auth.ts             # Authentication setup
│   │   ├── polar.ts            # Payment integration
│   │   └── stream-chat.ts      # Chat integration
│   ├── modules/                 # Feature modules
│   │   ├── agents/             # Agents feature
│   │   │   ├── server/         # Backend logic
│   │   │   └── ui/             # Frontend components
│   │   ├── dashboard/          # Dashboard features
│   │   ├── meetings/           # Meetings feature
│   │   └── premium/            # Premium features
│   └── trpc/                   # tRPC API setup
├── public/                      # Static assets
├── .env                        # Environment variables
├── components.json             # shadcn/ui configuration
├── drizzle.config.ts          # Database configuration
├── next.config.ts             # Next.js configuration
└── package.json               # Project dependencies
```

## �📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/amilcar-laniakea/meet-ai.git
cd meet-ai
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure environment variables:**

Create a `.env` file in the root directory with the following variables:

```bash
# Database
DATABASE_URL=your_neon_postgres_url

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Video & Chat
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_secret_key
STREAM_CHAT_KEY=your_stream_chat_key
STREAM_CHAT_SECRET=your_stream_chat_secret

# AI Integration
OPENAI_API_KEY=your_openai_api_key
OPENAI_ORGANIZATION=your_openai_org_id

# Payments
POLAR_API_KEY=your_polar_api_key
POLAR_SECRET_KEY=your_polar_secret_key

# Background Jobs
INNGEST_EVENT_KEY=your_inngest_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

4. **Initialize the database:**

```bash
npm run db:push
```

5. **Start the development server:**

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

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

// Meeting status enum
export const meetingStatus = pgEnum('meeting_status', [
  'upcoming',
  'active',
  'completed',
  'processing',
  'cancelled'
]);

// Meetings table
export const meetings = pgTable('meetings', {
  id: text('id')
    .primaryKey()
    .$default(() => nanoid()),
  name: text('name').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id),
  agentId: text('agent_id')
    .notNull()
    .references(() => agents.id),
  status: meetingStatus('status').notNull().default('upcoming'),
  startedAt: timestamp('started_at'),
  endedAt: timestamp('ended_at'),
  transcriptUrl: text('transcript_url'),
  recordingUrl: text('recording_url'),
  summary: text('summary'),
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

## 🌙 Theme System

The application features a sophisticated theme system:

- **OKLCH color space** for accurate colors
- **CSS custom properties** for consistency
- **Automatic theme detection** based on system preferences
- **Manual theme switching** capability

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind breakpoints
- **Flexible layouts** that adapt to different screen sizes
- **Adaptive Components** that automatically switch between mobile and desktop
  variants
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
