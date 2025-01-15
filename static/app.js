document.addEventListener('DOMContentLoaded', () => {
    const navbar_items = document.querySelectorAll('#navbarContent ul li')
    const sections = document.querySelectorAll('.section')
    navbar_items.forEach((item) => {
        const item_button = item.firstElementChild
        item.onmouseenter = () => {
            item_button.classList.add('btn-info', 'rounded-pill')
        }
        item.onmouseleave = () => {
            const exception = item_button.innerText
            const path = window.location.href.split('#')
            if (path.length !== 1) {
                if(!exception.includes(path[1])){
                    item_button.classList.remove('btn-info', 'rounded-pill')
                }
            }
            else if(!exception.includes('About me')){
                item_button.classList.remove('btn-info', 'rounded-pill')
            }
        }
        item.onclick = () => {
            const btn_link = item.firstElementChild
            if(!btn_link.innerText.includes('Github') && !btn_link.innerText.includes('Resume')){
                const current_navs_buttons = document.querySelectorAll('.rounded-pill')
                current_navs_buttons.forEach(nav_button => {
                    if (nav_button.innerText !== item.innerText) {
                        nav_button.classList.remove('btn-info', 'rounded-pill')
                    }
                });
            }
        }
    })

    const observer = new IntersectionObserver((entries) => {
        console.log(entries)
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Find the corresponding nav link
                const id = entry.target.id
                // Remove active class from all links
                navbar_items.forEach(item => {
                    item.firstElementChild.classList.remove('btn-info', 'rounded-pill')
                });
                // Add active class to current section's link
                const currentLink = document.querySelector(`.btn[href="#${id}"]`);
                if (currentLink) {
                    currentLink.classList.add('btn-info', 'rounded-pill')  // or your active class
                }
            }
        });
    }, {
        threshold: 0.7  // Trigger when section is 70% visible
    });

    // Observe all sections
    sections.forEach(section => observer.observe(section));

})