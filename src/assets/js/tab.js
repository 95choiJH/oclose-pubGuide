function TabD1Base() {
    const tabD1Base = document.querySelector('.tab.d1.base')
    const tabList = tabD1Base.querySelectorAll('.l_tab')

    tabList.forEach((li, i) => {
        li.addEventListener("click", function () {
            tabList.forEach(li => {
                li.classList.remove('active')
            });
            this.classList.add('active')

            const tabPage = tabD1Base.querySelectorAll('.l_tab-page')
            tabPage.forEach(page => {
                page.classList.remove('active')
            });
            const tabPageActive = tabD1Base.querySelector(`.l_tab-page:nth-child(${i + 1}`)
            tabPageActive.classList.add('active')
        })
    });
}

function TabD2Base() {
    const tabD1Base = document.querySelector('.tab.d2.base')
    const tabList = tabD1Base.querySelectorAll('.l_tab')

    tabList.forEach((li, i) => {
        li.addEventListener("click", function () {
            tabList.forEach(li => {
                li.classList.remove('active')
            });
            this.classList.add('active')

            const tabPage = tabD1Base.querySelectorAll('.l_tab-page')
            tabPage.forEach(page => {
                page.classList.remove('active')
            });
            const tabPageActive = tabD1Base.querySelector(`.l_tab-page:nth-child(${i + 1}`)
            tabPageActive.classList.add('active')
        })
    });
}