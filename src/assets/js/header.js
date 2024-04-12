function headerD1Base() {
    const headerD1Base = document.querySelector('.header.d1.base')
    const menuArea = headerD1Base.querySelector('.a_menu')
    const headerD1BaseH = headerD1Base.offsetHeight
    const menuAreaH = menuArea.offsetHeight

    headerD1Base.addEventListener("mouseover", function () {
        headerD1Base.style.height = headerD1BaseH + menuAreaH + "px"
    })
    headerD1Base.addEventListener("mouseout", function () {
        headerD1Base.style.height = headerD1BaseH + "px"
    })
}