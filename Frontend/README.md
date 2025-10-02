# CareerConnect Frontend

React web application for the CareerConnect job portal.

## Folder Structure

```
Frontend/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/              # Static images and icons
├── src/
│   ├── Components/
│   │   ├── Header/          # Navigation components
│   │   ├── Footer/          # Footer components
│   │   ├── SignUpLogin/     # Authentication components
│   │   ├── FindJobs/        # Job search components
│   │   ├── FindTalent/      # Talent search components
│   │   ├── Profile/         # User profile components
│   │   ├── JobDesc/         # Job description components
│   │   └── CompanyProfile/  # Company profile components
│   ├── Pages/               # Main page components
│   ├── Services/            # API service functions
│   ├── Slices/              # Redux state management
│   ├── Data/                # Static data and constants
│   ├── Interceptor/         # Axios HTTP interceptor
│   ├── App.tsx              # Main app component
│   ├── index.tsx            # Entry point
│   └── Store.tsx            # Redux store configuration
├── build/                   # Production build output
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## Technologies Used

- **Framework**: React 18 with TypeScript
- **UI Library**: Mantine UI Components
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **Animations**: AOS (Animate On Scroll)
- **Rich Text Editor**: Tiptap
- **Notifications**: React Hot Toast

## How to Use

### Prerequisites
- Node.js 16+ and npm
- Backend API running on port 8080

### Setup & Run

1. **Navigate to Frontend**
   ```bash
   cd Frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure API URL**
   - Development: Automatically uses `http://localhost:8080`
   - Production: Update `.env.production` with your backend URL

4. **Start Development Server**
   ```bash
   npm start
   ```

5. **Access Application**
   - Open `http://localhost:3000` in your browser

### Production Build

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Serve Production Build**
   ```bash
   npm install -g serve
   serve -s build
   ```

## Environment Variables

- `REACT_APP_API_URL`: Backend API base URL

## Available Scripts

- `npm start`: Start development server
- `npm run build`: Create production build
- `npm test`: Run test suite

## Features

- **Authentication**: Login/Register for Job Seekers and Employers
- **Job Search**: Advanced filtering and search capabilities
- **User Profiles**: Complete profile management with resume upload
- **Job Management**: Post, edit, and manage job listings
- **Application Tracking**: Track job applications and status
- **Responsive Design**: Mobile-friendly interface
- **Rich Text Editor**: Create detailed job descriptions
- **Email Notifications**: Real-time notifications

## Deployment

1. Run `npm run build`
2. Upload `build/` folder to your hosting provider
3. Set `REACT_APP_API_URL` environment variable to your backend URL