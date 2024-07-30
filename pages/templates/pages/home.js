let selectedAppointment, selectedDate, selectedTime;

        function showPopup(service, duration) {
            selectedAppointment = service;
            const popup = document.getElementById('timePopup');
            const timeSlots = generateTimeSlots(duration);
            const ul = popup.querySelector('ul');
            ul.innerHTML = '';

            timeSlots.forEach(slot => {
                const li = document.createElement('li');
                const button = document.createElement('button');
                button.textContent = slot;
                button.onclick = function () {
                    selectTime(slot);
                };
                li.appendChild(button);
                ul.appendChild(li);
            });

            popup.style.display = 'block';
        }

        function closePopup() {
            document.getElementById('timePopup').style.display = 'none';
        }

        function generateTimeSlots(duration) {
            const days = ['Monday', 'Wednesday', 'Friday'];
            const startTime = 13 * 60; // 1 pm in minutes
            const endTime = 17 * 60; // 5 pm in minutes
            const timeSlots = [];

            days.forEach(day => {
                for (let time = startTime; time < endTime; time += duration) {
                    timeSlots.push(`${day} ${formatTime(time)}`);
                }
            });

            return timeSlots;
        }

        function formatTime(minutes) {
            const hours = Math.floor(minutes / 60);
            const mins = minutes % 60;
            const period = hours >= 12 ? 'PM' : 'AM';
            const formattedHour = hours % 12 === 0 ? 12 : hours % 12;
            const formattedMinutes = mins === 0 ? '00' : mins;
            return `${formattedHour}:${formattedMinutes} ${period}`;
        }

        function selectTime(slot) {
            closePopup();
            selectedTime = slot;
            selectedDate = slot.split(' ')[0]; // Extract the day as date
            document.querySelector('.appointment-options').style.display = 'none';
            document.querySelector('.info-form-after').style.display = 'block';
            document.querySelector('.info-form').style.display = 'none';
            document.getElementById('info-section').scrollIntoView({ behavior: 'smooth' });
        }

        function goBack() {
            document.querySelector('.info-form-after').style.display = 'none';
            document.querySelector('.info-form').style.display = 'block';
            document.querySelector('.appointment-options').style.display = 'flex';
            document.querySelector('.appointment-options').scrollIntoView({ behavior: 'smooth' });
        }

        function goBackInfo() {
            document.querySelector('.info-form-after').style.display = 'block';
            document.querySelector('.info-form').style.display = 'none';
            document.querySelector('.appointment-options').style.display = 'none';
            document.getElementById('confirmation-section').style.display = 'none';
            document.querySelector('.appointment-options').scrollIntoView({ behavior: 'smooth' });
        }


        function showConfirmation() {
            const firstName = document.getElementById('fname').value;
            const lastName = document.getElementById('lname').value;

            document.getElementById('confirmation-appointment').textContent = `Appointment: ${selectedAppointment}`;
            document.getElementById('confirmation-date').textContent = `Date: ${selectedDate}`;
            document.getElementById('confirmation-time').textContent = `Time: ${selectedTime}`;
            document.getElementById('confirmation-name').textContent = `Name: ${firstName} ${lastName}`;

            document.querySelector('.info-form-after').style.display = 'none';
            document.querySelector('.info-form').style.display = 'block';
            document.getElementById('confirmation-section').style.display = 'block';
            document.getElementById('confirmation-section').scrollIntoView({ behavior: 'smooth' });
        }

        document.querySelector('.submit-button').addEventListener('click', function (e) {
            e.preventDefault();
            showConfirmation();
        });

        function cancel() {
            document.getElementById('confirmation-section').style.display = 'none';
            document.querySelector('.appointment-options').style.display = 'flex';
        }

        document.querySelector('.book-now').addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById('booking-container').scrollIntoView({ behavior: 'smooth' });
          });

          
        document.querySelector('.service_button').addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
          });