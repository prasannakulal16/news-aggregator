# NewsBridge (News Aggregator)

The NewsBridge is a React-based news aggregator application built with Vite. It aggregates and displays news articles from various sources, providing users with a comprehensive platform to stay updated with the latest happenings.

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
   git clone https://github.com/your-username/news-aggregator.git
   cd news-aggregator
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

#### Installing Docker

- **Windows:**

  1. Download Docker Desktop from the [Docker website](https://www.docker.com/products/docker-desktop).
  2. Run the installer and follow the on-screen instructions.
  3. Ensure that Docker Desktop is running after installation.

- **macOS:**

  1. Download Docker Desktop for Mac from the [Docker website](https://www.docker.com/products/docker-desktop).
  2. Open the downloaded `.dmg` file and drag Docker to the Applications folder.
  3. Launch Docker Desktop and follow the setup instructions.

- **Linux:**
  1. Follow the installation guide for your Linux distribution on the [official Docker documentation](https://docs.docker.com/engine/install/).
  2. Start the Docker service:
     ```bash
     sudo systemctl start docker
     ```
  3. Optionally, enable Docker to start on boot:
     ```bash
     sudo systemctl enable docker
     ```

#### Building and Running the Docker Image

1. **Navigate to the Project Directory:**
   Once Docker is installed, navigate to the root of your project (`news-aggregator`), where the `Dockerfile` is located:

   ```bash
   cd /path/to/news-aggregator
   ```

2. **Build the Docker Image:**
   Build the Docker image by running the following command:

   ```bash
   docker build -t news-aggregator .
   ```

   This command creates a Docker image named `news-aggregator` using the instructions in the `Dockerfile`.

3. **Run the Docker Container:**
   After building the image, run the container with:

   ```bash
   docker run -d -p 3000:3000 --name news-aggregator-container news-aggregator
   ```

   - The `-d` flag runs the container in detached mode.
   - The `-p` flag maps port 3000 of the container to port 3000 on your local machine.

4. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000` to access the application.

### Using Docker Compose

If you prefer using Docker Compose, create a `docker-compose.yml` file in the project root with the following content:

```yaml
version: '3.8'
services:
  news-aggregator:
    build: .
    ports:
      - '3000:3000'
    environment:
      VITE_NEWS_API_KEY: ${VITE_NEWS_API_KEY}
      VITE_GUARDIAN_API_KEY: ${VITE_GUARDIAN_API_KEY}
      VITE_NYT_API_KEY: ${VITE_NYT_API_KEY}
```

1. **Start the Application:**
   Run the following command to build and start the services:

   ```bash
   docker-compose up -d
   ```

2. **Stop the Application:**
   To stop the application, use:
   ```bash
   docker-compose down
   ```

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

### Notes:

**This project is hosted on Vercel! Access it at:**
:rocket: **xyz.com.vercel.app**

## Contribution

Feel free to fork this repository and submit pull requests. Suggestions and improvements are always welcome!

## License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy using **news-aggregator** and stay updated with the latest news!
