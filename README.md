# The DailyScript (News Aggregator)

The DailyScript is a React-based news aggregator application built with Vite. It aggregates and displays news articles from various sources, providing users with a comprehensive platform to stay updated with the latest happenings.

## Features

- **News Aggregation:**

  - Integrates APIs from NewsAPI.org, The Guardian, and The New York Times.
  - Allows users to search and filter news articles by keywords, date, category, and source.

- **Personalized News Feed:**

  - Users can select preferred sources, categories, and authors to create a personalized feed in the personal feed tab.

- **Mobile-Responsive Design:**

  - Fully responsive UI for seamless experience across different screen sizes.

- **Interactive Navigation:**
  - Clicking on a news card redirects users to the respective content for detailed reading.

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, Ant Design (AntD)
- **Build Tool:** Vite
- **Deployment:** Vercel
- **Containerization:** Docker

## Installation and Setup

### Prerequisites

- Node.js (>=16.x)
- Docker (with Docker Compose)

### Local Development Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/dailyscript.git
   cd dailyscript
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Environment Variables:**
   Create a `.env` file in the project root and configure the following variables:

   ```env
   VITE_NEWS_API_KEY=<your-newsapi-key>
   VITE_GUARDIAN_API_KEY=<your-guardian-api-key>
   VITE_NYT_API_KEY=<your-nyt-api-key>
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   The app will be accessible at `http://localhost:5173`.

### Docker Setup

1. **Build the Docker Image:**

   ```bash
   docker build -t dailyscript .
   ```

2. **Run the Docker Container:**

   ```bash
   docker run -d -p 3000:3000 --name dailyscript-container dailyscript
   ```

3. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`.

### Deployment to Vercel

1. **Login to Vercel:**
   If you don’t already have Vercel CLI installed, install it using:

   ```bash
   npm install -g vercel
   ```

   Then log in using:

   ```bash
   vercel login
   ```

2. **Deploy the Application:**
   From the project directory, run:

   ```bash
   vercel
   ```

3. **Set Environment Variables:**
   In the Vercel dashboard, configure the environment variables (`VITE_NEWS_API_KEY`, `VITE_GUARDIAN_API_KEY`, `VITE_NYT_API_KEY`).

4. **Access the Deployed App:**
   Vercel will provide you with a deployment URL. Use it to access your live application.

## Contribution

Feel free to fork this repository and submit pull requests. Suggestions and improvements are always welcome!

## License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy using **The DailyScript** and stay updated with the latest news!
