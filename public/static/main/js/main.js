// FAQ expand/collapse logic
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
        const item = this.closest('.faq-item');
        // Close all other open
        document.querySelectorAll('.faq-item.open').forEach(el => {
            if(el !== item) el.classList.remove('open');
        });
        // Toggle this one
        item.classList.toggle('open');
    });
});

// Testimonials slider logic
const testimonials = document.querySelectorAll('.testimonial-card');
let activeTestimonial = 0;
function showTestimonial(idx) {
    testimonials.forEach((card, i) => {
        card.classList.toggle('active', i === idx);
    });
}
document.querySelector('.testimonial-prev').onclick = function() {
    activeTestimonial = (activeTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(activeTestimonial);
};
document.querySelector('.testimonial-next').onclick = function() {
    activeTestimonial = (activeTestimonial + 1) % testimonials.length;
    showTestimonial(activeTestimonial);
};
showTestimonial(0);
