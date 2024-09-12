
# Luganodes Ethereum Deposit Tracker

## Overview

The **Luganodes Ethereum Deposit Tracker** is a Node.js application that monitors Ethereum deposit transactions on the blockchain and stores them in a MongoDB database. It offers real-time tracking and can be extended with additional features like REST APIs or analytics tools. The project is built with modularity in mind to ensure easy scaling and maintenance.

## Features

- **Real-Time Blockchain Monitoring**: Tracks Ethereum deposit transactions as they happen.
- **Database Integration**: Persist deposit data in MongoDB for long-term storage and analysis.
- **Extensible Design**: Easily add new features or modify the existing functionality.

## Prerequisites

To set up the project, ensure you have the following installed:

- **Node.js** (v16 or above)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance like MongoDB Atlas)

## Setup Instructions

### 1. Clone the Repository

Start by cloning the repository to your local machine.

```bash
git clone https://github.com/okaydivyansh/luganodesTask21BIT0708.git
cd luganodesTask21BIT0708
```

### 2. Install Dependencies

Run the following command to install all necessary Node.js dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the project root to configure your environment variables:

```plaintext
ALCHEMY_API_KEY= your alchemy api key
MONGO_URI= your mongoDB string
ETH_BLOCK_FROM=14343 (eg.)
```

### 4. Start MongoDB

Ensure that your MongoDB instance is running locally or available via MongoDB Atlas. You can start a local instance by running:

```bash
mongod
```

### 5. Start the Application

To launch the application, run:

```bash
npm start
```

This will initiate the tracking process and listen for new Ethereum deposits on the blockchain.

## Usage

### 1. Blockchain Deposit Tracking

Once the application is running, it will automatically start monitoring Ethereum deposits in real-time. Every new deposit is stored in the MongoDB database under the `deposits` collection.

### 2. REST API (Optional)

The project has the capability to expose data via a REST API. If you decide to implement or extend this functionality, you can add the following endpoints:

- **GET** `/api/deposits`: Retrieve all deposit records.
- **GET** `/api/deposits/:id`: Retrieve a specific deposit record by its ID.

Example API call using `curl`:

```bash
curl http://localhost:3000/api/deposits
```

### 3. Querying the Database

You can also directly query the MongoDB database to fetch deposit details. For example, using MongoDB Shell or Compass, you can query the `deposits` collection like so:

```javascript
db.deposits.find({}).pretty()
```

### 4. Adding More Features

The modular structure allows you to easily expand the application. For example, to add notification features or integrate additional blockchain networks, you can modify the service files in the `core/services/` directory.

## Example

### Sample Deposit Data

Here is an example of how a deposit record might be stored in MongoDB:

```json
{
  "_id": "6500e8b2f3d2a5a4b6f5c9d1",
  "transactionHash": "0x12345abcdef67890...",
  "amount": "1.5",
  "fromAddress": "0xabcdef1234567890...",
  "timestamp": "2024-09-13T10:25:30.000Z",
  "__v": 0
}
```

### Example Configuration

Here is an example `.env` file setup:

```plaintext
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/eth-deposits?retryWrites=true&w=majority
ETHEREUM_RPC_URL=https://mainnet.infura.io/v3/your-infura-project-id
PORT=3000
```

### Example Command to Start the Server

```bash
npm start
```

After running the above command, the server will monitor Ethereum blockchain deposits and store them in the MongoDB database.

## Extending the Project

You can further extend the project by adding:

1. **Prometheus Metrics**: For tracking performance.
2. **Webhooks or Notifications**: To alert users of new deposits.
3. **Graphical Dashboard**: To visualize deposit activity over time.
4. **Additional Blockchain Networks**: Expand monitoring to support more networks like Binance Smart Chain or Polygon.

## Troubleshooting

- **MongoDB Connection Errors**: Ensure the `MONGO_URI` is correctly set up and the database is accessible.
- **Missing Environment Variables**: Make sure your `.env` file is correctly populated.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. **Fork the repository**.
2. **Create a feature branch**: `git checkout -b feature/your-feature`.
3. **Commit your changes**: `git commit -m 'Add your feature'`.
4. **Push to the branch**: `git push origin feature/your-feature`.
5. **Create a pull request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, feel free to reach out at [mishradivyansh2002@gmail.com](mailto:mishradivyansh2002@gmail.com).

---

This README covers setup, usage instructions, examples, and guidelines for contributing and extending the project. Feel free to modify any details as needed!
