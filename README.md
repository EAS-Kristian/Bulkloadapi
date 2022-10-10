# Bulkloadapi
After the connection is made with the database i made an instance of express using const app = express();
app.use(express.json())

Following this i used a get request to retrieve all the data from a table i created and named payments. The 'select * from' signifies that i am asking for all the data from the table. I could use the route "api/payments" to search for the data via postman

For the next Get request i changed the route to "api/payments/:id" which allowed me to search for payments of a specific ID for example:

``http://localhost:8080/api/payments/5678``

I then did a post request using `INSERT INTO payments SET ?`. Using this meant i didn't have to write out all of the columns partened with 'req.body', but instead i put 'req.body' in the con.query


As for the bashscript part of the task i began by using an Input Field Separator (IFS) and a loop so that i could asign the correct names to the relevant columns, this is so that the data would go into the correct columns. A curl -X Post command along with the link to the data allowed me to pull the data from the correct source 







