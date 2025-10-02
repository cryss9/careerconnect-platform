<div align="center">

# 🚀 CareerConnect

<img src="https://media1.tenor.com/m/MMo4B6tp-GMAAAAC/job-application.gif" alt="CareerConnect Logo" width="400"/>

### *Connecting Talent with Opportunity*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-blue?style=for-the-badge)](https://careerconnect-platform.vercel.app)
[![Backend API](https://img.shields.io/badge/🔗_Backend_API-Visit_API-green?style=for-the-badge)](https://careerconnect-platform.onrender.com)

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=spring&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)

</div>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Key Features](#-key-features)
- [� Screenshots](#-screenshots)
- [🏗️ Architecture](#️-architecture)
- [🛠️ Technology Stack](#️-technology-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🔧 Configuration](#-configuration)
- [🐳 Docker Setup](#-docker-setup)
- [📊 API Documentation](#-api-documentation)
- [🔐 Security Features](#-security-features)
- [🌐 Deployment](#-deployment)
- [👥 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🎯 Overview

**CareerConnect** is a modern, full-stack job portal application that bridges the gap between talented professionals and innovative companies. Built with cutting-edge technologies, it provides an intuitive platform for job seekers to find their dream opportunities and for employers to discover exceptional talent.

### 🎯 Mission
To revolutionize the job search and recruitment process by providing a seamless, efficient, and user-friendly platform that benefits both job seekers and employers.

---

## ✨ Key Features

### 🔍 **For Job Seekers**
- 🔎 **Smart Job Search** - Advanced filtering by location, salary, experience, and skills
- 📄 **Resume Builder** - Integrated resume management and profile building
- 📊 **Application Tracking** - Real-time status updates on job applications
- 🔔 **Instant Notifications** - Email alerts for new opportunities and application updates
- 🏢 **Company Insights** - Detailed company profiles and culture information

### 💼 **For Employers**
- 📝 **Easy Job Posting** - Rich text editor with draft and publish options
- 👥 **Talent Discovery** - Advanced candidate search and filtering
- 📈 **Analytics Dashboard** - Track job performance and application metrics
- ⚡ **Quick Actions** - Streamlined candidate review and selection process
- 🎯 **Targeted Recruitment** - Skill-based candidate matching

### 🔒 **Security & Admin**
- 🛡️ **JWT Authentication** - Secure login with role-based access control
- 🔐 **Data Protection** - Encrypted sensitive information storage
- 👤 **Multi-Role Support** - Applicant, Employer, and Admin roles
- 📧 **Email Verification** - OTP-based account verification system
- 🔄 **Session Management** - Secure token refresh and logout mechanisms

---

## � Screenshots

<div align="center">

### 🏠 Dashboard
<img src="./screenshots/dashboard.png" alt="Dashboard" width="800"/>

### 🔐 Login Page
<img src="./screenshots/login.png" alt="Login Page" width="800"/>

### 🔍 Find Jobs
<img src="./screenshots/findjobs.png" alt="Find Jobs Page" width="800"/>

### 📝 Post Job
<img src="./screenshots/postjob.png" alt="Post Job Page" width="800"/>

### 📋 Posted Jobs Management
<img src="./screenshots/postedjobs.png" alt="Posted Jobs Page" width="800"/>

</div>

---

## 🏗️ Architecture

```mermaid
graph TB
    subgraph "Client Layer"
        A[React Frontend]
        B[Redux Store]
        C[Mantine UI Components]
    end
    
    subgraph "API Gateway"
        D[Axios HTTP Client]
        E[JWT Interceptor]
    end
    
    subgraph "Backend Services"
        F[Spring Boot Application]
        G[Spring Security]
        H[JWT Authentication]
    end
    
    subgraph "Business Logic"
        I[Job Service]
        J[User Service]
        K[Profile Service]
        L[Notification Service]
    end
    
    subgraph "Data Layer"
        M[MongoDB Atlas]
        N[User Collection]
        O[Job Collection]
        P[Profile Collection]
    end
    
    subgraph "External Services"
        Q[Email Service]
        R[File Storage]
    end
    
    A --> D
    B --> A
    C --> A
    D --> E
    E --> F
    F --> G
    G --> H
    F --> I
    F --> J
    F --> K
    F --> L
    I --> M
    J --> M
    K --> M
    L --> M
    M --> N
    M --> O
    M --> P
    F --> Q
    F --> R
    
    classDef frontend fill:#61dafb,stroke:#000,color:#000
    classDef backend fill:#6db33f,stroke:#000,color:#000
    classDef database fill:#47a248,stroke:#000,color:#fff
    classDef external fill:#ff9800,stroke:#000,color:#000
    
    class A,B,C frontend
    class F,G,H,I,J,K,L backend
    class M,N,O,P database
    class Q,R external
```

### � Data Flow Architecture

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant A as API Gateway
    participant B as Backend
    participant D as Database
    participant E as External Services
    
    U->>F: User Action
    F->>A: HTTP Request + JWT
    A->>B: Authenticated Request
    
    alt Authentication Required
        B->>B: Validate JWT Token
        B->>B: Check User Permissions
    end
    
    B->>D: Database Query
    D-->>B: Query Result
    
    alt External Service Needed
        B->>E: Service Call
        E-->>B: Service Response
    end
    
    B-->>A: API Response
    A-->>F: Processed Response
    F-->>U: Updated UI
```

---

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1** - Modern UI framework
- **TypeScript 4.9.5** - Type safety
- **Mantine 7.13.0** - Component library
- **Tailwind CSS 3.4.7** - Utility-first styling
- **Redux Toolkit 2.2.7** - State management
- **React Router 6.26.0** - Navigation

### Backend
- **Spring Boot 3.3.2** - Java framework
- **Java 17** - Programming language
- **MongoDB** - NoSQL database
- **JWT 0.11.5** - Authentication
- **Spring Security** - Security framework
- **Maven** - Dependency management

### DevOps & Deployment
- **Docker** - Containerization
- **Vercel** - Frontend hosting
- **Render** - Backend hosting
- **MongoDB Atlas** - Cloud database

---

## 📁 Project Structure

```mermaid
graph TD
    A[careerconnect/] --> B[Backend/]
    A --> C[Frontend/]
    A --> D[screenshots/]
    A --> E[README.md]
    
    B --> B1[src/main/java/]
    B --> B2[pom.xml]
    B --> B3[Dockerfile]
    
    B1 --> B11[com.jobportal.api/]
    B1 --> B12[com.jobportal.entity/]
    B1 --> B13[com.jobportal.service/]
    B1 --> B14[com.jobportal.repository/]
    B1 --> B15[com.jobportal.jwt/]
    
    C --> C1[src/]
    C --> C2[public/]
    C --> C3[package.json]
    
    C1 --> C11[Components/]
    C1 --> C12[Pages/]
    C1 --> C13[Services/]
    C1 --> C14[Slices/]
    
    D --> D1[dashboard.png]
    D --> D2[login.png]
    D --> D3[findjobs.png]
    D --> D4[postjob.png]
    D --> D5[postedjobs.png]
    
    style A fill:#f9f9f9
    style B fill:#6db33f,color:#fff
    style C fill:#61dafb,color:#000
    style D fill:#ff9800,color:#fff
```

### 🗂️ Detailed Structure

```
careerconnect/
├── Backend/                     # Spring Boot Application
│   ├── src/main/java/com/jobportal/
│   │   ├── api/                    # REST Controllers
│   │   ├── entity/                 # JPA Entities
│   │   ├── service/                # Business Logic
│   │   ├── repository/             # Data Access Layer
│   │   ├── jwt/                    # JWT Security
│   │   └── config/                 # Configuration
│   ├── src/main/resources/
│   ├── pom.xml
│   └── Dockerfile
│
├── Frontend/                       # React Application
│   ├── src/
│   │   ├── Components/             # React Components
│   │   ├── Pages/                  # Main Pages
│   │   ├── Services/               # API Services
│   │   ├── Slices/                 # Redux State
│   │   └── Data/                   # Constants
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
│
├── screenshots/                    # Project Screenshots
│   ├── dashboard.png
│   ├── login.png
│   ├── findjobs.png
│   ├── postjob.png
│   └── postedjobs.png
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

<div align="center">

| Requirement | Version | Download |
|-------------|---------|----------|
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" width="20"/> **Java** | 17+ | [Download](https://adoptium.net/) |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" width="20"/> **Node.js** | 16+ | [Download](https://nodejs.org/) |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" width="20"/> **MongoDB** | 5.0+ | [Download](https://www.mongodb.com/try/download/community) |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" width="20"/> **Git** | Latest | [Download](https://git-scm.com/) |

</div>

### 🔄 Quick Setup

<details>
<summary><b>1️⃣ Clone Repository</b></summary>

```bash
# Clone the repository
git clone https://github.com/Anuj-er/careerconnect-platform.git

# Navigate to project directory
cd careerconnect-platform
```

</details>

<details>
<summary><b>2️⃣ Backend Setup</b></summary>

```bash
# Navigate to backend directory
cd Backend

# Create configuration file
cp src/main/resources/application.properties.example src/main/resources/application.properties

# Edit configuration with your MongoDB URI and other settings
nano src/main/resources/application.properties

# Build and run the application
./mvnw clean install
./mvnw spring-boot:run
```

**Backend will be available at:** `http://localhost:8080`

</details>

<details>
<summary><b>3️⃣ Frontend Setup</b></summary>

```bash
# Navigate to frontend directory
cd Frontend

# Install dependencies
npm install

# Start development server
npm start
```

**Frontend will be available at:** `http://localhost:3000`

</details>

<details>
<summary><b>4️⃣ Environment Configuration</b></summary>

Create `.env` file in Frontend directory:
```env
REACT_APP_API_URL=http://localhost:8080/api
REACT_APP_ENVIRONMENT=development
```

</details>

---

## 🔧 Configuration

### Backend Configuration

<details>
<summary><b>📄 application.properties</b></summary>

```properties
# Server Configuration
server.port=8080
server.servlet.context-path=/api

# MongoDB Configuration
spring.data.mongodb.uri=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>

# JWT Configuration
jwt.secret=your-secret-key-here
jwt.expiration=86400000

# Email Configuration
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=your-email@gmail.com
spring.mail.password=your-app-password
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true

# Application Configuration
app.name=CareerConnect
app.version=1.0.0
app.frontend.url=http://localhost:3000
```

</details>

---

## 🐳 Docker Setup

<details>
<summary><b>🐋 Complete Docker Configuration</b></summary>

**Backend Dockerfile**
```dockerfile
FROM openjdk:17-jdk-alpine
VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 8080
```

**Frontend Dockerfile**
```dockerfile
FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**docker-compose.yml**
```yaml
version: '3.8'

services:
  mongodb:
    image: mongo:5.0
    container_name: careerconnect-db
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: password
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

  backend:
    build: ./Backend
    container_name: careerconnect-backend
    environment:
      SPRING_DATA_MONGODB_URI: mongodb://admin:password@mongodb:27017/careerconnect?authSource=admin
    ports:
      - "8080:8080"
    depends_on:
      - mongodb

  frontend:
    build: ./Frontend
    container_name: careerconnect-frontend
    environment:
      REACT_APP_API_URL: http://localhost:8080/api
    ports:
      - "3000:80"
    depends_on:
      - backend

volumes:
  mongodb_data:
```

**Run with Docker:**
```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

</details>

---

## 📊 API Documentation

<div align="center">

### 🔗 Core API Endpoints

**Base URL:** `https://careerconnect-platform.onrender.com/api`

| Endpoint Category | Description | Authentication |
|------------------|-------------|----------------|
| 🔐 **Authentication** | User login, registration, password reset | Public |
| 💼 **Jobs** | Job creation, search, applications | Role-based |
| 👤 **Users** | Profile management, user data | Authenticated |
| 🔔 **Notifications** | Real-time alerts and messages | Authenticated |

</div>

<details>
<summary><b>🔐 Authentication APIs</b></summary>

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `POST` | `/api/auth/signup` | Register new user | `{email, password, name, role}` |
| `POST` | `/api/auth/login` | User login | `{email, password}` |
| `POST` | `/api/auth/logout` | User logout | `{token}` |
| `POST` | `/api/auth/refresh` | Refresh JWT token | `{refreshToken}` |
| `POST` | `/api/auth/verify-email` | Verify email with OTP | `{email, otp}` |
| `POST` | `/api/auth/forgot-password` | Send reset password email | `{email}` |
| `POST` | `/api/auth/reset-password` | Reset password | `{token, newPassword}` |

</details>

<details>
<summary><b>💼 Job Management APIs</b></summary>

| Method | Endpoint | Description | Access Level |
|--------|----------|-------------|--------------|
| `GET` | `/api/jobs` | Get all jobs with filters | Public |
| `GET` | `/api/jobs/{id}` | Get job by ID | Authenticated |
| `POST` | `/api/jobs` | Create new job | Employer/Admin |
| `PUT` | `/api/jobs/{id}` | Update job | Employer/Admin |
| `DELETE` | `/api/jobs/{id}` | Delete job | Employer/Admin |
| `POST` | `/api/jobs/{id}/apply` | Apply to job | Applicant |
| `GET` | `/api/jobs/company/{companyId}` | Get jobs by company | Public |
| `GET` | `/api/jobs/posted/{userId}` | Get user's posted jobs | Employer |

</details>

---

## 🎨 UI Components

<div align="center">

### 🧩 Component Architecture

</div>

<details>
<summary><b>🎯 Core Components Overview</b></summary>

```typescript
// Component Props Interface Example
interface JobCardProps {
  job: JobDTO;
  onApply: (jobId: string) => void;
  onSave: (jobId: string) => void;
  showCompany?: boolean;
  compact?: boolean;
}

// Component Implementation
const JobCard: React.FC<JobCardProps> = ({
  job,
  onApply,
  onSave,
  showCompany = true,
  compact = false
}) => {
  // Component logic
  return (
    <Card className="job-card">
      {/* Component JSX */}
    </Card>
  );
};
```

</details>

<details>
<summary><b>🎨 Design System</b></summary>

### Color Palette
```css
:root {
  --primary-50: #fefce8;
  --primary-100: #fef9c3;
  --primary-200: #fef08a;
  --primary-300: #fde047;
  --primary-400: #facc15; /* Primary Brand Color */
  --primary-500: #eab308;
  --primary-600: #ca8a04;
  --primary-700: #a16207;
  --primary-800: #854d0e;
  --primary-900: #713f12;
  --primary-950: #422006;
}
```

### Typography Scale
```css
.text-scale {
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
}
```

</details>

---

## 🔐 Security Features

<div align="center">

### 🛡️ Multi-Layer Security Implementation

| Security Layer | Technology | Purpose |
|---------------|------------|---------|
| 🔑 **Authentication** | JWT + BCrypt | Secure user login and password hashing |
| 🛡️ **Authorization** | Role-based Access Control | Resource protection by user roles |
| 🚫 **CORS Protection** | Spring Security | Cross-origin request validation |
| 🔒 **Input Validation** | Bean Validation + Sanitization | Prevent injection attacks |
| ⚡ **Rate Limiting** | Custom Filter | API abuse prevention |

</div>

<details>
<summary><b>🔑 Authentication & Authorization</b></summary>

### JWT Token Structure
```typescript
interface JWTPayload {
  sub: string;          // User ID
  email: string;        // User email
  role: 'APPLICANT' | 'EMPLOYER' | 'ADMIN';
  iat: number;          // Issued at
  exp: number;          // Expiration time
  authorities: string[]; // User permissions
}
```

### Role-Based Access Control
```typescript
// Route Protection Example
const ProtectedRoute: React.FC<{
  children: React.ReactNode;
  allowedRoles: string[];
}> = ({ children, allowedRoles }) => {
  const user = useSelector((state: any) => state.user);
  
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }
  
  return <>{children}</>;
};
```

</details>

---

## 🌐 Deployment

<div align="center">

### 🚀 Live Deployment Status

| Service | Platform | Status | URL |
|---------|----------|--------|-----|
| 🎨 **Frontend** | Vercel | ✅ Live | [careerconnect-platform.vercel.app](https://careerconnect-platform.vercel.app) |
| ⚙️ **Backend** | Render | ✅ Live | [careerconnect-platform.onrender.com](https://careerconnect-platform.onrender.com) |
| 🗄️ **Database** | MongoDB Atlas | ✅ Connected | Cloud Hosted |

</div>

<details>
<summary><b>☁️ Cloud Deployment</b></summary>

### Vercel (Frontend)
```json
{
  "name": "careerconnect-frontend",
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "buildCommand": "npm run build",
        "outputDirectory": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "env": {
    "REACT_APP_API_URL": "@api_url",
    "REACT_APP_ENVIRONMENT": "production"
  }
}
```

### Render (Backend)
```yaml
# render.yaml
services:
  - type: web
    name: careerconnect-backend
    env: java
    buildCommand: ./mvnw clean install -DskipTests
    startCommand: java -jar target/*.jar
    envVars:
      - key: SPRING_PROFILES_ACTIVE
        value: prod
      - key: MONGODB_URI
        fromDatabase:
          name: careerconnect-db
          property: connectionString
    healthCheckPath: /api/actuator/health
```

</details>

---

## 👥 Contributing

<div align="center">



</div>

### 🔄 Development Workflow

1. **Fork & Clone** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Submit** a Pull Request

### 📋 Development Guidelines

- Follow TypeScript/Java coding standards
- Write comprehensive tests
- Update documentation for new features
- Ensure responsive design compatibility
- Follow conventional commit messages

---

## 📄 License

<div align="center">

### 📋 MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Free to use, modify, and distribute with attribution**

</div>

---

<div align="center">

## 🚀 Ready to Get Started?

### 🔗 Quick Links

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Application-blue?style=for-the-badge&logo=vercel)](https://careerconnect-platform.vercel.app)
[![API Docs](https://img.shields.io/badge/📊_API_Docs-View_Documentation-green?style=for-the-badge&logo=swagger)](https://careerconnect-platform.onrender.com/api/actuator/health)
[![GitHub](https://img.shields.io/badge/⭐_GitHub-Star_Repository-black?style=for-the-badge&logo=github)](https://github.com/Anuj-er/careerconnect-platform)

### ⭐ Found this project helpful? 

**Give us a star on GitHub to show your support!**

[![GitHub stars](https://img.shields.io/github/stars/Anuj-er/careerconnect-platform?style=social)](https://github.com/Anuj-er/careerconnect-platform/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Anuj-er/careerconnect-platform?style=social)](https://github.com/Anuj-er/careerconnect-platform/network/members)

---

### 🎯 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/Anuj-er/careerconnect-platform?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/Anuj-er/careerconnect-platform?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/Anuj-er/careerconnect-platform?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/Anuj-er/careerconnect-platform?style=flat-square)

---



*Connecting dreams with opportunities, one click at a time.*

</div>