function swiperD1Base() {
    const progressLine = document.querySelector('.progress-bar svg')
    var swiperD1Base = new Swiper('.swiperCustom.d1.base .a_swiper', {
        effect: 'fade',
        loop: 'true',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2)
            },
            renderFraction: function (currentClass) {
                const controlBtnSvg = `<svg class="remote" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="5" width="4" height="14" rx="1" fill="#ffffff"/><rect x="14" y="5" width="4" height="14" rx="1" fill="#ffffff"/></svg>`
                return `
                    <span class="${currentClass}"></span>
                    <div class="swiper-controller">
                        <button class="a_button">${controlBtnSvg}</button>
                    </div>
                `
            }
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                progressLine.style.setProperty('--progress', 1 - progress)
            }
        }
    })

    const controllerBtn = document.querySelector('.swiperCustom.d1.base .swiper-controller .a_button')
    const controllRemote = controllerBtn.querySelector('.remote')
    // 슬라이드 재생/정지 기능
    controllerBtn.addEventListener('click', function () {
        var controllRemoteSvg = controllRemote.classList.contains('pause')
            ? '<svg class="remote" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="5" width="4" height="14" rx="1" fill="#ffffff"/><rect x="14" y="5" width="4" height="14" rx="1" fill="#ffffff"/></svg>'
            : '<svg class="remote pause" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1378 10.5689L9.60498 7.30249C8.40816 6.70408 7 7.57437 7 8.91246V15.0875C7 16.4256 8.40816 17.2959 9.60498 16.6975L16.1378 13.4311C17.3171 12.8414 17.3171 11.1586 16.1378 10.5689Z" fill="#ffffff"/></svg>'

        if (!controllRemote.classList.contains('pause')) {
            controllRemote.classList.add('pause')
            swiperD1Base.autoplay.pause()
            controllerBtn.innerHTML = controllRemoteSvg
        } else {
            controllRemote.classList.remove('pause')
            swiperD1Base.autoplay.resume()
            controllerBtn.innerHTML = controllRemoteSvg
        }
    })
}

function swiperD2Base() {
    new Swiper('.swiperCustom.d2.base .a_swiper', {
        slidesPerView: 'auto',
        loop: 'true',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
    })
}

function swiperD3Base() {
    new Swiper('.swiperCustom.d3.base .a_swiper', {
        slidesPerView: 'auto',
        loop: 'true',
        spaceBetween: 20,
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
    })
}
