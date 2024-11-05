var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");

var data = [
    {
        name: "Sajek Valley", 
        image: "https://images.unsplash.com/photo-1558981403-c5f98963a1a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Sajek Valley, located in the Rangamati district, is one of Bangladesh's most beautiful camping spots. Known as the 'Roof of Rangamati,' it offers stunning hilltop views, lush greenery, and an experience of the indigenous Chakma culture. Perfect for stargazing and sunrise views."
    },
    {
        name: "Lalakhal", 
        image: "https://images.unsplash.com/photo-1558981157-b2844b4b9f4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Lalakhal, situated in the Sylhet district, is famous for its crystal-clear blue water, surrounded by hills and forests. Camping here allows for boating in the serene river, hiking in the hills, and enjoying the natural beauty of Sylhet."
    },
    {
        name: "Kuakata Beach", 
        image: "https://images.unsplash.com/photo-1587980860474-8b4a54aa1150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Kuakata Beach, known as the 'Daughter of the Sea,' offers breathtaking views of both sunrise and sunset. Located in the Patuakhali district, it's a serene location for beach camping, complete with views of fishing boats and mangrove forests in the distance."
    }
];

function seedDB(){
   // Remove all campgrounds
   Campground.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed campgrounds!");
        
        // Add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("Added a campground");
                    
                    // Create a comment
                    Comment.create(
                        {
                            text: "This place is amazing for a weekend getaway!",
                            author: "Explorer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    });
    // Add a few comments
}

module.exports = seedDB;
