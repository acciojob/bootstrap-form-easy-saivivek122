
        document.getElementById("form").addEventListener("submit", function (event) {
            const form = event.target;

            if (!form.checkValidity()) {
                event.preventDefault(); // prevent actual form submission
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        });


