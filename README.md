# messenger.net

A social media project with a messaging platform designed to facilitate real-time communication and interaction between users. 

## Features

- **Post Management**: Users can create, delete, like, dislike, and comment on posts.
- **User Interaction**: Users can follow or unfollow others, and temporarily deactivate their accounts.
- **Mode Switching**: The application supports both light and dark themes.
- **Responsive Design**: The app is optimized for various screen sizes and devices.
- **Enhanced Chat**: Users can exchange messages and images, with read receipts for messages.

## Technologies

- MongoDB
- Express
- React
- JavaScript
- Node.js
- JWT
- Chakra UI

## Getting Started

- Clone the Repository

- Install the dependencies for both the backend and frontend:

```bash
npm install
npm install --prefix frontend
```
Set Up Environment Variables

- Create a .env file in the root directory of the project with the following variables:

```bash
PORT=your_port
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

- Start the Backend and Frontend

- Open a terminal and run:

bash
Copy code
npm run dev
This command will start both the backend and frontend servers in development mode.

- Build for Production

To build the frontend for production and ensure everything is up to date, run:

bash
Copy code
npm run build
This will install any missing dependencies and build the frontend assets.

The application should now be running on http://localhost:3000 (frontend) and http://localhost:5000 (backend) during development.


## License

MIT License
