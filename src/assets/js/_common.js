var guideCommon = guideCommon || {}
guideCommon.Html = (function () {
    var instance = null
    function init() {
        instance = {
            reset: function () {}
        }
        return instance
    }
    if (instance) {
        return instance
    } else {
        return init()
    }
})()

function guideCommonResize() {
    window.addEventListener('resize', () => {})
}

function guideCommonScroll() {
    window.addEventListener('scroll', () => {})
}

function detailView() {
    // 상세보기 버튼 기능
    const detailButton = document.querySelectorAll('.a_button.detail')
    detailButton.forEach(btn => {
        btn.addEventListener('click', function () {
            const contentsList = this.closest('.l_contents')
            const detailViewArea = contentsList.querySelector('.a_guide-detailView')
            const detailViewWrap = detailViewArea.querySelector('.w_guide-detailView')
            const detailViewWrapH = detailViewWrap.offsetHeight
            const detailIcon =
                '<svg width="24" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="7" stroke="#ffffff" stroke-width="2"/><path d="M20 20L17 17"stroke="#ffffff" stroke-width="2" stroke-linecap="round"/></svg><span class="blind">자세히보기/닫기</span>'
            const closeIcon =
                '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.021 512.021" style="enable-background:new 0 0 512.021 512.021;" xml:space="preserve" width="512" height="512"><g><path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z" fill="white"/></g></svg><span class="blind">자세히보기/닫기</span>'

            if (detailViewArea.classList.contains('active')) {
                btn.innerHTML = detailIcon
                detailViewArea.style.height = 0
                detailViewArea.classList.remove('active')
            } else {
                btn.innerHTML = closeIcon
                detailViewArea.style.height = detailViewWrapH + 'px'
                detailViewArea.classList.add('active')
            }
        })
    })

    //Copy 기능
    const detailViewArea = document.querySelector('.a_contents')
    console.log(detailViewArea)
    const componentName = detailViewArea.getAttribute('data-comp')
    console.log(componentName)
    const copyBtn = detailViewArea.querySelectorAll('.l_btn')

    copyBtn.forEach(btn => {
        btn.addEventListener('click', function () {
            if (this.classList.contains('copyHTML')) {
            } else if (this.classList.contains('copyCSS')) {
            } else if (this.classList.contains('copyJS')) {
            }
        })
    })
}

function filterBtn() {
    const filterBtn = document.querySelectorAll('.a_header .a_filter .btn')

    filterBtn.forEach(btn => {
        btn.addEventListener("click", function() {
            this.classList.toggle('active')
        })
    });
}
