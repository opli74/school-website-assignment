const observerOptions = {
    rootMargin: '0px 0px -10% 0px',
    threshold: .15
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

window.addEventListener('DOMContentLoaded', (event) => {

const sections = Array.from(document.getElementsByClassName('content'));

for (let section of sections) {
observer.observe(section);
}
});