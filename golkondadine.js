function validateData(){
    var guestName = document.getElementById("guest_name").value;
    var guestMobile = document.getElementById("guest_mobile").value;
    var guestEmail = document.getElementById("guest_email").value;
   
    var nameRegex = /^[a-zA-Z\s'-]+$/;
    var mobileRegex = /^[1-9][0-9]{9}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(guestName)) {
        alert("Please enter a valid name.");
        return false; // Returning false to prevent form submission
    } else {
        if(!mobileRegex.test(guestMobile)){
            alert("Please enter a valid mobile no.");
            return false; 
        } else {
            if(!(guestEmail ==='' || emailRegex.test(guestEmail))){
                alert("Please enter a valid email id.");
                return false;  
            }
            else {
                window.location.href = "golkondadinebooking.html";
                return true;
            }
        }  
    }
}

function addOption(selectElement, value, text) {
    var option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.appendChild(option);
}

function populateDropdown(selectElement, options) {
    // Clear previous options
    selectElement.innerHTML = "";

    // Populate options
    options.forEach(option => {
        addOption(selectElement, option.value, option.text);
    });
}

function populateScheduleDropdown() {
    var schedule = document.getElementById("dine_schedule");
    var dineDate = document.getElementById("dine_date").value;
    var selectedDate = new Date(dineDate);
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
   
    var options = [];

    // Populate options based on the selected schedule
    if (selectedDate < currentDate) {
        options = [
            {value: "", text: "Select"}
        ];
    } else {
        options = [
            { value: "", text: "Select" }, 
            { value: "1", text: "Lunch" },
            { value: "2", text: "Dinner" }
        ];
    }
    populateDropdown(schedule, options);
}


function populateSecondDropdown() {
    var schedule = document.getElementById("dine_schedule").value;
    var secondDropdown = document.getElementById("dine_time");
    var options = [];

    // Populate options based on the selected schedule
    if (schedule === "1") {
        options = [
            { value: "", text: "Select" }, 
            { value: "12:30PM", text: "12:30PM" },
            { value: "02:30PM", text: "02:30PM" }
        ];
    } else if (schedule === "2") {
        options = [
            { value: "", text: "Select" },
            { value: "07:30PM", text: "07:30PM" },
            { value: "09:30PM", text: "09:30PM" }
        ];
    }

    populateDropdown(secondDropdown, options);
}

function populateGuestDropdown() {
    var time = document.getElementById("dine_time").value;
    var guestsDropdown = document.getElementById("dine_guests");
    var options = [];

    // Populate options based on the selected time
    if (time === "12:30PM" || time === "02:30PM" || time === "07:30PM" || time === "09:30PM") {
        options.push( { value: "", text: "Select" });
        for (var i = 1; i <= 10; i++) {
            options.push({ value: i.toString(), text: i.toString() });
        }
    }

    populateDropdown(guestsDropdown, options);
}

function populateTableDropdown() {
    var guest = document.getElementById("dine_guests").value;
    var tableDropdown = document.getElementById("dine_table");
    var options = [];

    var container = document.getElementById("container");
   
    // Clear previous image if any
    container.innerHTML = "";

    // Create and append new image element
    var image = document.createElement("img");
   
    // Populate options based on the selected number of guests
    if (guest >= 1 && guest <= 2) {
        
        image.src = "../gkTableImage/Blank1-2.png";

        options = [
            { value: "", text: "Select" },
            { value: "5F", text: "5F" },
            { value: "6F", text: "6F" },
            { value: "7F", text: "7F" },
            { value: "12F", text: "12F" },
            { value: "13F", text: "13F" },
            { value: "14F", text: "14F" },
            { value: "16F", text: "16F" },
            { value: "17F", text: "17F" },
            { value: "18F", text: "18F" }
            // Add more options as needed
        ];
    } else if (guest >= 3 && guest <= 4) {

        image.src = "../gkTableImage/Blank3-4.jpg";

        options = [
            { value: "", text: "Select" },
            { value: "2F", text: "2F" },
            { value: "3F", text: "3F" },
            { value: "9F", text: "9F" },
            { value: "10F", text: "10F" },
            { value: "11F", text: "11F" },
            { value: "19F", text: "19F" },
            { value: "20F", text: "20F" },
            { value: "21F", text: "21F" },
            { value: "23F", text: "23F" },
            { value: "24F", text: "24F" }
            // Add more options as needed
        ];
    } else if (guest == 5) {

        image.src = "../gkTableImage/Blank5.jpg";
        
        options = [
            { value: "", text: "Select" },
            { value: "1F", text: "1F" },
            { value: "4F", text: "4F" },
            { value: "8F", text: "8F" },
            { value: "15F", text: "15F" },
            { value: "19F", text: "19F" },
            { value: "21F", text: "21F" },
            { value: "22F", text: "22F" },
            { value: "25F", text: "25F" }
            // Add more options as needed
        ];
    } else if (guest >= 6 && guest <= 7) {

        image.src = "../gkTableImage/Blank6-7.jpg";

        options = [
            { value: "", text: "Select" },
            { value: "1F", text: "1F" },
            { value: "4F", text: "4F" },
            { value: "8F", text: "8F" },
            { value: "15F", text: "15F" },
            { value: "22F", text: "22F" },
            { value: "25F", text: "25F" }
            // Add more options as needed
        ];
    } else if (guest == 8) {
        
        image.src = "../gkTableImage/Blank8.jpg";

        options = [
            { value: "", text: "Select" },
            { value: "1F", text: "1F" },
            { value: "4F", text: "4F" },
            { value: "8F", text: "8F" },
            { value: "15F", text: "15F" },
            { value: "22F", text: "22F" },
            { value: "25F", text: "25F" },
            { value: "30F", text: "30F" }
            // Add more options as needed
        ];
    } else if (guest >= 9 && guest <= 10) {

        image.src = "../gkTableImage/Blank9-10.jpg";

        options = [
            { value: "", text: "Select" },
            { value: "30F", text: "30F" }
            // Add more options as needed
        ];
    }

    container.appendChild(image);
    // Add more conditions for other guest ranges

    populateDropdown(tableDropdown, options);
}

// Attach event listeners
document.getElementById("dine_date").addEventListener("change", populateScheduleDropdown);
document.getElementById("dine_schedule").addEventListener("change", populateSecondDropdown);
document.getElementById("dine_time").addEventListener("change", populateGuestDropdown);
document.getElementById("dine_guests").addEventListener("change", populateTableDropdown);

// Initially populate the second dropdown based on the default selection of the first dropdown
populateSecondDropdown();


function updateImage() {
    var container = document.getElementById("container");
    var selector = document.getElementById("dine_table");
    var selectedValue = selector.value;

    // Clear previous image if any
    container.innerHTML = "";

    // Create and append new image element
    var image = document.createElement("img");
    image.src = "../gkTableImage/"+selectedValue+".jpg";
    container.appendChild(image);
}

function navigate(buttonId) {
    var previousButton = document.getElementById("prevBtn").value;
    var submitButton = document.getElementById("submitRequest").value;
    var payButton = document.getElementById("payBtn").value;
    
    if(buttonId === "prevBtn") {
        window.location.href = "golkondadine.html";
    } else if(buttonId === "submitRequest") {
        var date = document.getElementById("dine_date").value;
        var scheduleId = document.getElementById("dine_schedule").value;
        var time = document.getElementById("dine_time").value;
        var guests = document.getElementById("dine_guests").value;
        var table = document.getElementById("dine_table").value;
        var specialInstructions = document.getElementById("special-instructions").value;

        // Create an object to store the data
        var formData = {
            "date": date,
            "scheduleId": scheduleId,
            "time": time,
            "guests": guests,
            "table": table,
            "specialInstructions": specialInstructions
        };

        // Log the form data to the console
        console.log(formData);
    } else if(buttonId === "payBtn") {

    }

}
