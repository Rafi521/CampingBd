



# Camping Website

A camping website application that allows users to browse, review, and find information about various camping sites. This application is built with Node.js, Express, and MongoDB, using Mongoose as the ODM for database interactions.


## Features

- Browse Campgrounds: View a variety of campgrounds and their details.
- Review and Rate: Users can submit reviews and rate campgrounds.
- User Authentication: Sign up and log in to interact with the site.
- Data Management: Campground and user data are stored securely in MongoDB.

## Installation

1. Clone the repository:
   
   git clone https://github.com/your-username/camping-website.git
   cd camping-website
   

2. Install dependencies:
   
   npm install
   

3. Set up MongoDB:
   - Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a local MongoDB instance.
   - Create a new MongoDB cluster (if using MongoDB Atlas) and get the connection URI.

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:


PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster3.dsudx.mongodb.net/campingDB?retryWrites=true&w=majority


Replace `<username>`, `<password>`, and `campingDB` with your actual MongoDB credentials and database name.



## Usage

1. **Run the application**:
   ```bash
   npm start
   ```
   By default, it will run on [http://localhost:3000](http://localhost:3000).

2. **Testing*:
   Open the browser and navigate to the URL to test and interact with the application.

## Deployment

This application has been deployed on Render. You can access it here:

**[Camping Website on Render](https://campingbd.onrender.com)**



#License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

