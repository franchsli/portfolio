document.addEventListener('DOMContentLoaded', () => {
    const navbar_items = document.querySelectorAll('#navbarContent ul li')
    navbar_items.forEach((item) => {
        const item_button = item.firstElementChild
        item.onmouseenter = () => {
            item_button.classList.add('btn-info', 'rounded-pill')
        }
        item.onmouseleave = () => {
            console.log(window.location.href)
            const exception = item_button.innerText
            const path = window.location.href.split('#')
            if (path.length !== 1) {
                console.log(path[1])
                console.log(exception)
                if(!exception.includes(path[1])){
                    item_button.classList.remove('btn-info', 'rounded-pill')
                }
            }
            else if(!exception.includes('About me')){
                console.log(exception)
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
})