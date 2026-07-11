document.addEventListener('DOMContentLoaded', () => {
    window.intersectingSection = 0
    const navbarItems = document.querySelectorAll('#navbarContent ul li')
    const sections = document.querySelectorAll('.section')
    navbarItems.forEach((item) => {
        const itemButton = item.firstElementChild
        item.onmouseenter = () => {
            itemButton.classList.add('btn-info', 'rounded-pill')
        }
        item.onmouseleave = () => {
            const exception = itemButton.innerText
            const path = window.location.href.split('#')
            if (path.length !== 1) {
                if(!exception.includes(path[1])){
                    itemButton.classList.remove('btn-info', 'rounded-pill')
                }
            }
            else if(!exception.includes('About me')){
                if (intersectingSection !== itemButton.innerText) {
                    itemButton.classList.remove('btn-info', 'rounded-pill')
                }
            }
        }
        item.onclick = () => {
            const btnLink = item.firstElementChild
            if(!btnLink.innerText.includes('Github') && !btnLink.innerText.includes('Resume')){
                const currentNavsButtons = document.querySelectorAll('.rounded-pill')
                currentNavsButtons.forEach(navButton => {
                    if (navButton.innerText !== item.innerText) {
                        navButton.classList.remove('btn-info', 'rounded-pill')
                    }
                });
            }
        }
    })
    // trigger tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Find the corresponding nav link
                const id = entry.target.id
                // Remove active class from all links
                navbarItems.forEach(item => {
                    item.firstElementChild.classList.remove('btn-info', 'rounded-pill')
                });
                // Add active class to current section's link
                const currentLink = document.querySelector(`.btn[href="#${id}"]`);
                if (currentLink) {
                    currentLink.classList.add('btn-info', 'rounded-pill')
                    intersectingSection = currentLink.innerText
                }
            }
        });
    }, {
        threshold: 0.7  // Trigger when section is 70% visible
    });

    // Observe all sections
    sections.forEach(section => observer.observe(section));

})