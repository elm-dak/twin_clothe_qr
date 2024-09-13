document.addEventListener('DOMContentLoaded', (event) => {
    const socialLinks = document.querySelectorAll('.social-link');

    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.getAttribute('data-platform');
            const url = this.getAttribute('href');
            
            if (confirm(`You're about to visit our ${platform} page. Continue?`)) {
                window.open(url, '_blank');
            }
        });

        link.addEventListener('mouseover', function() {
            this.style.transform = `translateY(-5px) rotate(${Math.random() * 2 - 1}deg)`;
        });

        link.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });

    // Add a simple animation to the title
    const title = document.querySelector('h1');
    title.style.opacity = '0';
    title.style.transform = 'translateY(-20px)';
    title.style.transition = 'opacity 0.5s, transform 0.5s';

    setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }, 200);
});
