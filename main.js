document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple form submission handler (optional enhancement)
    // Form submission handler
    const form = document.querySelector('form');
    const status = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerText = 'Sending...';
            status.style.display = 'none';
            status.className = '';

            const data = new FormData(e.target);

            try {
                const response = await fetch("https://formspree.io/f/xdkqppgk", {
                    method: "POST",
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    status.innerHTML = "Thanks for your feedback!";
                    status.style.color = "#4ade80"; // Green
                    status.style.display = "block";
                    form.reset();
                } else {
                    const result = await response.json();
                    if (Object.hasOwn(result, 'errors')) {
                        status.innerHTML = result.errors.map(error => error["message"]).join(", ");
                    } else {
                        status.innerHTML = "Oops! There was a problem submitting your form";
                    }
                    status.style.color = "#f87171"; // Red
                    status.style.display = "block";
                }
            } catch (error) {
                status.innerHTML = "Oops! There was a problem submitting your form";
                status.style.color = "#f87171"; // Red
                status.style.display = "block";
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerText = originalBtnText;
            }
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.8)';
            header.style.boxShadow = 'none';
        }
    });
});
