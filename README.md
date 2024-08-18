# EG Mart Server

This is the backend server for the EG Mart shopping platform. It handles product management, authentication, pagination, search, filtering, and sorting functionalities. The server is built using **Node.js** and **Express**, with MongoDB as the database.

## Features

- **Product Management**: Handles product data, including product name, category, brand, price, and more.
- **Search**: Allows users to search for products by name or brand.
- **Filtering**: Products can be filtered by category, brand, price range, etc.
- **Sorting**: Products can be sorted by price, date added, and other criteria.
- **Pagination**: Supports pagination to display products in pages for easier navigation.
- **Authentication**: Secures routes and allows users to log in.
  
## Live Server

The server is live at: [EG Mart Server](https://server-ten-jade.vercel.app/)

## Getting Started

To run this project locally, follow the steps below:

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud-based MongoDB instance)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/codeamin-git/eg-mart-server.git
   ```

2. Navigate to the project directory:

   ```bash
   cd eg-mart-server
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Configuration

Before running the server, you need to set up environment variables for MongoDB and other configurations. Create a `.env` file in the root of the project and add the following:

```bash
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

- Replace `your_mongodb_uri` with your MongoDB connection string.
- Replace `your_jwt_secret` with a secret key for JWT authentication.

### Running the Server

To start the server in development mode:

```bash
npm run dev
```

The server will run on `http://localhost:5000` by default.

### Deployment

The server is deployed on Vercel. To deploy it, follow these steps:

1. Install Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Link the project to your Vercel account:

   ```bash
   vercel
   ```

3. Deploy the project:

   ```bash
   vercel --prod
   ```

Make sure you configure your environment variables on Vercel for production.

### API Endpoints

- **Products**: `/products`
  - GET: Get all products with search, filter, and pagination options.
  - POST: Add a new product.
- **Auth**: `/auth`
  - POST: User login or signup.
- **Filters**: `/filters`
  - GET: Fetch available filters (category, brand, etc.).

### Dependencies

- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: Database used to store products and user data.
- **JWT**: For authentication and authorization.

### Future Enhancements

- Add more robust authentication and authorization.
- Implement order and payment management.
- Improve API error handling and validation.

### License

This project is licensed under the MIT License.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### Contact

For any inquiries or issues, feel free to contact me:

- **Email**: [alaminkhan.codeamin@gmail.com](mailto:alaminkhan.codeamin@gmail.com)

---

Thank you for checking out the EG Mart Server! 🚀
