# GoSF-Stack

A production-ready, ultra-high-performance boilerplate and starter kit integrating **Go**lang, **S**olidJS, SolidUI, Cloud Run, and **F**irebase Hosting. Designed for microsecond-level responses, reactive UI, and fully containerized, serverless cloud deployments.

In modern high-performance SaaS platforms and web applications, users and systems demand near-zero latency. Traditional setups often experience performance bottlenecks at scale, leading to high cold-start latencies, bloated framework payloads, and slow API throughput.

The GoSF Stack addresses these challenges by eliminating unnecessary overhead and combining:

- Sub-millisecond API processing via Go-based microservices.
- Zero-overhead, highly reactive UI updates using SolidJS and SolidUI.
- Highly scalable, containerized serverless compute through Google Cloud Run.
- Blazing-fast global static asset delivery and real-time NoSQL data access via the Firebase ecosystem (Hosting and Firestore).

## Features

- **Ultra-Fast First Contentful Paint (FCP)**: Powered by SolidJS and Firebase CDN edge distribution.
- **Sub-10ms Real-Time Data Access**: Powered by Cloud Firestore, providing serverless, NoSQL document operations with sub-10ms read latencies, built-in offline caching, and automatic horizontal scaling to handle heavy concurrent traffic.
- **Optimized API Throughput**: Go-based containerized backend with extremely low cold-start times and a minimal memory footprint.
- **Ready-to-Use UI Components**: Pre-configured with SolidUI integration for immediate wireframe and prototyping workflows.

## Getting Started

### Prerequisites

- [Go](https://go.dev/doc/install) (1.26 or later)
- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Running the Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Run the API server:
   ```bash
   go run cmd/api/main.go
   ```
   The server will start on `http://localhost:8080`.

### Running the Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

To build the application for production, you need to inject the backend API URL during the build process.

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Run the build command (cmd):
   ```bash
   set VITE_BASE_URL=url_to_your_deployed_api && npm run build
   ```

## Project Structure

```text
.
├── backend/                # Go-based microservices
│   └── cmd/api/main.go     # API entry point
├── frontend/               # SolidJS application
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── services/       # API interaction logic
│   │   └── App.tsx         # Main application component
│   └── package.json        # Frontend dependencies and scripts
└── README.md               # Project documentation
```
