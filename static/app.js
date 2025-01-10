document.addEventListener('DOMContentLoaded', () => {
    const navbar_items = document.querySelectorAll('#navbarContent ul li')
    navbar_items.forEach((item) => {
        const item_button = item.querySelector('button')
        item.onmouseenter = () => {
            item_button.classList.add('btn-info', 'rounded-pill')
        }
        item.onmouseleave = () => {
            item_button.classList.remove('btn-info', 'rounded-pill')
        }
    })
})