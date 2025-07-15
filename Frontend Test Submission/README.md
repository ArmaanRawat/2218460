# React URL Shortener Web App

## Overview

This is a fully client-side React URL Shortener application. It allows users to shorten URLs, optionally set custom shortcodes and validity periods, and view analytics for all shortened links. The app is styled with Material UI and features robust error handling and a clean, responsive UI.

## Features

- Shorten up to 5 URLs at once
- Optional custom shortcode and validity (in minutes, default 30)
- All shortcodes are unique and managed client-side
- Redirection handled via client-side routing
- Statistics page shows all shortened URLs, creation/expiry, and click analytics
- Clicks are tracked with timestamp (and can be extended for more analytics)
- All data is persisted in `localStorage` for session/history
- **Mandatory logging**: All major actions are logged using the provided logging middleware (no console logging)

## Project Structure

- `src/App.jsx`: Main app logic, routing, and all pages/components
- `src/logging.js`: Logging middleware (requires environment variables)
- `src/main.jsx`: App entry point, sets up React Router

## Setup & Running

1. **Install dependencies**
   ```sh
   npm install
   npm install @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom
   ```
2. **Set up environment variables**
   Create a `.env` file in the project root with the following (replace with your values):
   ```env
   VITE_EMAIL=your.email@example.com
   VITE_NAME=Your Name
   VITE_ROLLNO=YourRollNo
   VITE_CLIENT_ID=yourClientId
   VITE_CLIENT_SECRET=yourClientSecret
   VITE_ACCESS_CODE=yourAccessCode
   ```
3. **Run the app**
   ```sh
   npm run dev -- --port 3000
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000)

## Usage

- **Shorten URLs**: Enter up to 5 URLs, set optional validity and shortcode, and click "Shorten".
- **View Statistics**: Go to `/stats` to see all shortened URLs and analytics.
- **Redirection**: Visiting `/shortcode` will redirect to the original URL if valid and not expired.

## Architecture & Design

- **Routing**: Uses React Router for `/` (shortener), `/stats` (analytics), and `/:shortcode` (redirection)
- **Persistence**: All data is stored in `localStorage` for session and history
- **Logging**: All actions are logged to the evaluation service using the provided middleware (see `src/logging.js`)
- **Styling**: Material UI is used for all UI components

## Assumptions

- No user authentication is required for shortening or redirecting
- All analytics and URLs are managed client-side (no backend)
- Logging credentials are provided via environment variables

## Error Handling

- All user inputs are validated before processing
- User-friendly error messages are shown for invalid URLs, expired links, or duplicate shortcodes

## License

This project is for evaluation/demo purposes only.
