
import { copy } from './_copy.js'

export function copyFunction() {
    // HTML 복사 버튼 기능
    const detailView = document.querySelector('.a_guide-detailView')
    const btnHTML = detailView.querySelectorAll('.l_btn')

    btnHTML.forEach(btn => {
        btn.addEventListener("click", function () {
            const functionName = this.closest('.l_contents').getAttribute('data-copy')
            if (this.classList.contains('copyHTML')) {
                const HTML = copy[functionName][0].HTML_PC
                window.navigator.clipboard.writeText(HTML)
            } else if (this.classList.contains('copyCSS')) {
                const CSS = copy[functionName][0].SCSS_PC
                window.navigator.clipboard.writeText(CSS)
            } else if (this.classList.contains('copyJS')) {
                const JS = copy[functionName][0].JS
                window.navigator.clipboard.writeText(JS)
            }
            clearTimeout();
            const copyPop = document.querySelector('.copyPop')
            copyPop.classList.add('active')
            setTimeout(() => {
                copyPop.classList.remove('active');
            }, 1000);
        })
    });
}