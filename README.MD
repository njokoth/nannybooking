Babysitting/Nannying Booking System

This project is a web-based booking system for babysitting/nannying services. It allows users to view availability, submit their availability, and book available time slots. The project consists of three main components: a server, a form submission page, and an availability display page.

Server

The server is implemented using Express.js, a web application framework for Node.js, and connects to a PostgreSQL database to store availability data. The server provides the following API endpoints:

POST /submit: Accepts form submissions from users and saves the availability data to the database.
GET /availability: Retrieves availability data from the database and returns it as a JSON response.
POST /book/:id: Handles booking requests for specific availability time slots and updates the booked status in the database.
To run the server, make sure you have Node.js installed and install the necessary dependencies using npm or yarn. Set up a PostgreSQL database and provide the correct credentials in the server code. Then, execute the server script using Node.js.

Form Submission Page (sloane.html)

The form submission page allows users to submit their availability for babysitting/nannying services. It includes an HTML form with input fields for date, start time, and end time. When the form is submitted, it sends an AJAX request to the server's /submit endpoint to save the availability data. The page also displays loading animations and success messages to provide feedback to the user.

To use the form submission page, include the HTML code in an HTML file and open it in a web browser.

Availability Display Page (index.html)

The availability display page allows users to view available time slots for babysitting/nannying services. It fetches availability data from the server's /availability endpoint using JavaScript's fetch function and dynamically updates the page with the retrieved data. The page uses Bootstrap CSS for styling and includes a card layout to display the availability information. Users can book available time slots by clicking the "Book" button, which sends a request to the server's /book/:id endpoint.

To use the availability display page, include the HTML code in an HTML file and open it in a web browser. Make sure the server is running and the necessary API endpoints are implemented to provide availability data and handle booking requests.

Dependencies

The project uses the following dependencies:

Express.js: Web application framework for Node.js
pg: PostgreSQL client for Node.js
cors: Middleware for enabling Cross-Origin Resource Sharing
Bootstrap: CSS framework for styling the pages
Make sure to install these dependencies using npm or yarn before running the server or using the HTML pages.

Conclusion

This babysitting/nannying booking system provides a user-friendly interface for submitting availability and booking time slots. It can be customized and extended according to specific requirements. Feel free to modify the code and adapt it to your needs.