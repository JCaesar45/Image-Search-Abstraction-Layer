```markdown
# Image Search Abstraction Layer

A full-stack JavaScript app that allows users to search for images via an abstraction layer API, browse through results with pagination, and view recent search queries.

---

## Features
- Search for images based on a query string
- Paginate through search results with a `?page=` parameter
- View a list of the most recent search queries
- Hosted on a public URL for demo purposes

---

## Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js with Express.js
- **Image API:** Unsplash API
- **Hosting Platforms:** [Vercel/Netlify/Render/Your choice]
- **Other:** Axios for HTTP requests

---

## Setup Instructions

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/image-search-abstraction-layer.git
cd image-search-abstraction-layer
``

### 2. Backend Setup

```bash
# Navigate to the backend directory (if separated), or use the root
# Install dependencies
npm install express cors node-fetch
``

### 3. Obtain Unsplash API Access Key
- Sign up at [Unsplash Developers](https://unsplash.com/developers)
- Create an app and get your **Access Key**

### 4. Configure Backend

- In `server.js`, replace `'YOUR_UNSPLASH_ACCESS_KEY'` with your actual Unsplash API key

```js
const accessKey = 'YOUR_UNSPLASH_ACCESS_KEY'; // <-- Insert your key here
``

### 5. Run the Backend Server

```bash
node server.js
# or with nodemon for development
npx nodemon server.js
``

The backend will run on `http://localhost:3001`

---

### 6. Frontend Setup

```bash
# Navigate to the frontend directory
cd image-search-frontend

# Install dependencies
npm install axios
``

### 7. Run the React App

```bash
npm start
``

The frontend will run on `http://localhost:3000`

*Ensure the backend server is running to allow API requests.*

---

## Usage

- Enter a search term in the search bar and click **Search**.
- Browse through results; click **Load More** to paginate.
- View recent searches listed below the results.
- Click on images to view the original source.

---

## Deployment

### Deploy Backend
- Use platforms like [Render](https://render.com/), [Railway](https://railway.app/), or [Vercel](https://vercel.com/).
- Make sure to set environment variables for API keys securely.

### Deploy Frontend
- Use [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/).

### Environment Variables
- For production, store your API keys in environment variables (e.g., `.env`) and update your code to access them securely.

---

## Notes
- The app currently stores recent searches in memory; for persistence, consider integrating a database.
- Ensure CORS policies are correctly configured for deployment.
- You can replace the image API with another provider if desired.

---

## License
This project is for educational purposes.

---

## Contact
Jordan Leturgez - jordanleturgez@gmail.com
---

## Acknowledgments
- [Unsplash API](https://unsplash.com/developers)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
