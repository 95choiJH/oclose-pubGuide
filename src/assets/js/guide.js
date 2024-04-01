var guideCommon = guideCommon || {};
guideCommon.Html = (function() {
    var instance = null;
    function init() {
        instance = {
            reset:function() {
                test();
            }
        }
        return instance;
    }
    if(instance){
        return instance;
    } else {
        return init();
    }
})();

function guideCommonRisize() {
    window.addEventListener('resize',() => {

    });
}

function guideCommonScroll() {
    window.addEventListener('scroll',() => {

    });
}

function test() {
    const progressLine = document.querySelector('.progress-bar svg')
    new Swiper(".a_swiper", {
        effect: "fade",
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
            },
            renderFraction: function (currentClass) {
                return '<span class="' + currentClass + '"></span>' +
                '<div class="swiper-controller">' +
                    '<svg class="pause" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '<g clip-path="url(#clip0_502_15)">' +
                    '<path d="M6.5 0C5.57174 0 4.6815 0.368749 4.02513 1.02513C3.36875 1.6815 3 2.57174 3 3.5V20.5C3 21.4283 3.36875 22.3185 4.02513 22.9749C4.6815 23.6313 5.57174 24 6.5 24C7.42826 24 8.3185 23.6313 8.97487 22.9749C9.63125 22.3185 10 21.4283 10 20.5V3.5C10 2.57174 9.63125 1.6815 8.97487 1.02513C8.3185 0.368749 7.42826 0 6.5 0V0ZM8 20.5C8 20.8978 7.84196 21.2794 7.56066 21.5607C7.27936 21.842 6.89782 22 6.5 22C6.10218 22 5.72064 21.842 5.43934 21.5607C5.15804 21.2794 5 20.8978 5 20.5V3.5C5 3.10218 5.15804 2.72064 5.43934 2.43934C5.72064 2.15804 6.10218 2 6.5 2C6.89782 2 7.27936 2.15804 7.56066 2.43934C7.84196 2.72064 8 3.10218 8 3.5V20.5Z" fill="white"/>' +
                    '<path d="M17.5001 0C16.5719 0 15.6816 0.368749 15.0252 1.02513C14.3689 1.6815 14.0001 2.57174 14.0001 3.5V20.5C14.0001 21.4283 14.3689 22.3185 15.0252 22.9749C15.6816 23.6313 16.5719 24 17.5001 24C18.4284 24 19.3186 23.6313 19.975 22.9749C20.6314 22.3185 21.0001 21.4283 21.0001 20.5V3.5C21.0001 2.57174 20.6314 1.6815 19.975 1.02513C19.3186 0.368749 18.4284 0 17.5001 0V0ZM19.0001 20.5C19.0001 20.8978 18.8421 21.2794 18.5608 21.5607C18.2795 21.842 17.8979 22 17.5001 22C17.1023 22 16.7208 21.842 16.4395 21.5607C16.1582 21.2794 16.0001 20.8978 16.0001 20.5V3.5C16.0001 3.10218 16.1582 2.72064 16.4395 2.43934C16.7208 2.15804 17.1023 2 17.5001 2C17.8979 2 18.2795 2.15804 18.5608 2.43934C18.8421 2.72064 19.0001 3.10218 19.0001 3.5V20.5Z" fill="white"/>' +
                    '</g>' +
                    '<rect x="15" y="2" width="5" height="20" fill="white"/>' +
                    '<rect x="4" y="2" width="5" height="20" fill="white"/>' +
                    '<defs>' +
                    '<clipPath id="clip0_502_15">' +
                    '<rect width="24" height="24" fill="white"/>' +
                    '</clipPath>' +
                    '</defs>' +
                    '</svg>' +
                '</div>'
            }
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                progressLine.style.setProperty("--progress", 1 - progress);
            }
        }
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
    });
}