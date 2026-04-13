window.onload = function() {
    let forms = document.getElementsByTagName("form");
  
    if (forms.length > 0) {
      let bookingForm = forms[0];
  
      bookingForm.onsubmit = function(event) {
        let inputs = bookingForm.getElementsByTagName("input");
        let dateInput = null;
        let timeInput = null;
  
        // Find date and time inputs
        for (let i = 0; i < inputs.length; i++) {
          if (inputs[i].type === "date") {
            dateInput = inputs[i];
          } else if (inputs[i].type === "time") {
            timeInput = inputs[i];
          }
        }
  
        if (dateInput && timeInput) {
          let dateValue = dateInput.value;
          let timeValue = timeInput.value;
  
          if (!dateValue || !timeValue) {
            alert("Please select both date and time.");
            event.preventDefault();
            return false;
          }
  
          let selectedDateTime = new Date(dateValue + "T" + timeValue);
          let now = new Date();
  
          if (selectedDateTime < now) {
            alert("You cannot book in the past. Please select a valid date and time.");
            event.preventDefault();
            return false;
          }
  
          let [hours, minutes] = timeValue.split(":").map(Number);
          let totalMinutes = hours * 60 + minutes;
  
          let minMinutes = 11 * 60;       
          let maxMinutes = 21 * 60 + 30;  
  
          if (totalMinutes < minMinutes || totalMinutes > maxMinutes) {
            alert("Booking time must be between 11:00 AM and 9:30 PM.");
            event.preventDefault();
            return false;
          }
        }
  
        event.preventDefault();
        alert("Thank you for your booking! We will contact you soon to confirm.");
        bookingForm.reset();
      };
    }
  };
  
  
  
  
  if (forms.length > 1) {
      var messageForm = forms[1];
      messageForm.onsubmit = function(event) {
          event.preventDefault();
          alert("Thank you for your message! We will get back to you soon.");
          messageForm.reset();
      };
  }

  