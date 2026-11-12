// 1. Doctor Search

const search = document.getElementById("doctorSearch");

if (search) {
    search.addEventListener("input", function() {

        let value = search.value.toLowerCase();

        let doctors = document.querySelectorAll(".doctor-card");

        doctors.forEach(function(doctor) {

            let name = doctor.innerText.toLowerCase();
            let specialization =
                doctor.getAttribute("data-search").toLowerCase();

            if (name.includes(value) ||
                specialization.includes(value)) {

                doctor.style.display = "";

            } else {

                doctor.style.display = "none";

            }
        });
    });
}


// 2. Appointment Form Validation

const appointmentForm =
    document.getElementById("appointmentForm");

if (appointmentForm) {

    const dateInput =
        document.getElementById("appointmentDate");

    const today = new Date();
    const localDate = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    dateInput.min = localDate;

    appointmentForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let phone =
            document.getElementById("phone").value;

        let selectedDate = dateInput.value;

        let message =
            document.getElementById("appointmentMessage");

        if (!/^\d{10}$/.test(phone)) {

            message.innerText =
                "Please enter a valid 10-digit phone number.";

            return;
        }

        if (!selectedDate || selectedDate < localDate) {

            message.innerText =
                "Please select today or a future date.";

            return;
        }

        message.innerText =
            "Appointment request submitted successfully!";

        appointmentForm.reset();
        dateInput.min = localDate;

    });
}


// 3. BMI Calculator

const bmiForm = document.getElementById("bmiForm");

if (bmiForm) {

    bmiForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let height =
            Number(document.getElementById("height").value);

        let weight =
            Number(document.getElementById("weight").value);

        let result =
            document.getElementById("bmiResult");

        if (height <= 0 || weight <= 0) {

            result.innerText = "Enter valid height and weight.";
            return;

        }

        let bmi = weight / ((height / 100) ** 2);

        let category;

        if (bmi < 18.5) {
            category = "Below usual adult range";
        }

        else if (bmi < 25) {
            category = "Within usual adult range";
        }

        else if (bmi < 30) {
            category = "Above usual adult range";
        }

        else {
            category = "High range";
        }

        result.innerText =
            "Your BMI is " + bmi.toFixed(2) +
            " - " + category;

    });
}


// 4. FAQ Accordion

const questions =
    document.querySelectorAll(".faq-q");

questions.forEach(function(question) {

    question.addEventListener("click", function() {

        let answer = question.nextElementSibling;

        let isOpen = answer.style.display === "block";

        document.querySelectorAll(".faq-a").forEach(function(item) {
            item.style.display = "none";
        });

        answer.style.display = isOpen ? "none" : "block";

    });
});


// 5. Emergency Contact Popup

const emergencyBtn =
    document.getElementById("emergencyBtn");

if (emergencyBtn) {

    emergencyBtn.addEventListener("click", function() {

        document.getElementById("emergencyMessage").innerText =
            "For emergencies in India, call 112.";

    });
}