
//Connect BackEnd to FrontEnd

// fetch('/products/123', { 
//     method: 'GET', 
//     }) 
//     // Handling the response by converting it to JSON 
//     .then(response => response.json()) 
//     // Handling the data obtained from the response 
//     .then(data => { 
//         // Update UI with product details from the response 
// //     }); 
    
// // Creating a new WebSocket instance and connecting to 'ws://localhost:3000' 
// const ws = new WebSocket('mongodb://localhost:27017'); 

// // Event listener for handling incoming messages 
// ws.onmessage = (event) => { 
// // Parsing the JSON message received from the server 
// const message = JSON.parse(event.data); 
// // Updating the UI based on the received message data 
// }; 

// // Sending a message from the client to the server 
// ws.send('Hello from the client!'); 


// Import Mongoose
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/website', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Define a schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

// Create a model
const User = mongoose.model('User', userSchema);

// CRUD operations

// Create a new user
const createUser = async () => {
    const newUser = new User({
        name: 'John Doe',
        email: 'john.doe@example.com',
        message: 'hello i am Ritik'
    });

    try {
        const savedUser = await newUser.save();
        console.log('User saved:', savedUser);
    } catch (error) {
        console.error('Error saving user:', error);
    }
};

// Read users
const getUsers = async () => {
    try {
        const users = await User.find();
        console.log('Users:', users);
    } catch (error) {
        console.error('Error getting users:', error);
    }
};

// Update a user
const updateUser = async (userId) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { message: 'hello' },
            { new: true } // Return the updated document
        );
        console.log('User updated:', updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
    }
};

// Delete a user
const deleteUser = async (userId) => {
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        console.log('User deleted:', deletedUser);
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};

// Run the functions
createUser();
getUsers();
// Replace 'userId' with a valid user ID for updating and deleting
// updateUser('userId');
// deleteUser('userId');


// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll Selection


let Sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {

    Sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if you want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


