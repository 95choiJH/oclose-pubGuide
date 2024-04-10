var currentClass, controlBtnSvg;
export const copy = {
    // swiper
    SwiperD1Base: [
        {
            HTML_PC: `
            <div class="swiperCustom d1 base">
                <div class="swiper a_swiper">
                    <div class="swiper-wrapper w_swiper">
                        <div class="swiper-slide s_swiper">
                            <img src="https://unsplash.it/1640/878" alt=" ">
                        </div>
                        <div class="swiper-slide s_swiper">
                            <img src="https://unsplash.it/1641/878" alt=" ">
                        </div>
                        <div class="swiper-slide s_swiper">
                            <img src="https://unsplash.it/1642/878" alt=" ">
                        </div>
                        <div class="swiper-slide s_swiper">
                            <img src="https://unsplash.it/1643/878" alt=" ">
                        </div>
                        <div class="swiper-slide s_swiper">
                            <img src="https://unsplash.it/1644/878" alt=" ">
                        </div>
                        <div class="swiper-slide s_swiper">
                            <img src="https://unsplash.it/1645/878" alt=" ">
                        </div>
                        <div class="swiper-slide s_swiper">
                            <img src="https://unsplash.it/1646/878" alt=" ">
                        </div>
                        <div class="swiper-slide s_swiper">
                            <img src="https://unsplash.it/1647/878" alt=" ">
                        </div>
                        <div class="swiper-slide s_swiper">
                            <img src="https://unsplash.it/1648/878" alt=" ">
                        </div>
                        <div class="swiper-slide s_swiper">
                            <img src="https://unsplash.it/1649/878" alt=" ">
                        </div>
                    </div>
                    <div class="w_pagination">
                        <div class="swiper-pagination a_progress">
                        </div>
                        <div class="progress-bar">
                            <span class="blind">progress</span>
                            <svg class="progress"  viewBox="0 0 1 214" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="0" x2="0" y2="214" stroke="white" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            `,
            SCSS_PC: `
            .section {
                &.component {
                    position: relative;
                    height: 100vh;
                    padding: 2rem;
                    background-color: rgba(255, 255, 255, 1);
                    .i_component {
                        display: flex;
                        width: 100%;
                        height: 100%;
                        .a_side {
                            position: relative;
                            height: 100%;
                            max-width: 20rem;
                            .i_side{
                                display: flex;
                                position: relative;
                                height: 100%;
                                flex-direction: column;
                                .a_top {
                                    .a_logo {
                                        position: relative;
                                        text-align: center;
                                        .logo {
                                            display: inline-block;
                                            color: rgba(9, 21, 64, 1);
                                            font-size: 12.5rem;
                                            line-height: 12.5rem;
                                            font-family: "Saira Stencil One", sans-serif;
                                            transform: skew(10deg, 15deg);
                                            @include mobile {
                                                font-size: 3.5rem;
                                                line-height: 3.5rem;
                                            }
                                        }
                                        &::after {
                                            display: block;
                                            position: absolute;
                                            bottom: -2rem;
                                            width: 100%;
                                            height: 0.1rem;
                                            content: '';
                                            background-color: rgba(0, 0, 34, 1);
                                        }
                                    }
                                    &::after {
                                        position: absolute;
                                        top: 0;
                                        right: 0;
                                        width: 0.1rem;
                                        height: 12.5rem;
                                        content: '';
                                        background-color: rgba(0, 0, 34, 1);
                                        @include mobile {
                                            height: 4.5rem;
                                        }
                                    }
                                    +.a_bottom {
                                        margin-top: 4rem;
                                        @include mobile {
                                            margin-top: 3rem;
                                        }
                                    }
                                }
                                .a_bottom {
                                    display: flex;
                                    height: 100%;
                                    flex-direction: column;
                                    border-right: .1rem solid rgba(0, 0, 34, 1);
                                    .a_menu {
                                        width: 20rem;
                                        flex: 1;
                                        @include mobile {
                                            width: 10rem;
                                        }
                                    }
                                    .copyright {
                                        display: inline-block;
                                        color: #091540;
                                        font-size: 2rem;
                                        line-height: 2rem;
                                        @include mobile {
                                            display: none;
                                        }
                                    }
                                }
                            }
                        }
                        .a_component {
                            width: 100%;
                            .a_header {
                                display: flex;
                                position: relative;
                                flex-direction: column;
                                .a_tit {
                                    flex: 1;
                                    padding-left: 4rem;
                                    @include mobile {
                                        padding-left: 3rem;
                                    }
                                    .cate {
                                        color: rgba(118, 146, 255, 1);
                                        font-size: 3.9rem;
                                        line-height: 4.1rem;
                                        @include mobile {
                                            display: none;
                                        }
                                    }
                                    .tit {
                                        color: rgba(61, 81, 140, 1);
                                        font-size: 8.4rem;
                                        line-height: 8.4rem;
                                        @include mobile {
                                            font-size: 3.5rem;
                                            line-height: 3.5rem;
                                        }
                                    }
                                }
                                &::after {
                                    display: block;
                                    position: absolute;
                                    bottom: -2rem;
                                    width: 100%;
                                    height: 0.1rem;
                                    content: '';
                                    background-color: rgba(0, 0, 34, 1);
                                }
                                +.a_contents {
                                    margin-top: 4rem;
                                }
                            }
                            .a_contents {
                                position: relative;
                                padding: 0 2rem;
                                .l_contents {
                                    position: relative;
                                    .w_guide-detail {
                                        position: absolute;
                                        top: 3rem;
                                        right: 3rem;
                                        z-index: 10;
                                        .a_button {
                                            display: block;
                                            position: relative;
                                            width: 3rem;
                                            height: 3rem;
                                            background-color: rgba(0, 0, 0, 1);
                                            border-radius: .8rem;
                                            svg {
                                                position: absolute;
                                                top: 50%;
                                                left: 50%;
                                                transform: translate(-50%, -50%);
                                            }
                                        }
                                    }
                                    .a_guide-detailView {
                                        position: absolute;
                                        bottom: 0;
                                        left: 0;
                                        width: 100%;
                                        height: 0;
                                        background-color: rgba(255, 255, 255, 1);
                                        z-index: 10;
                                        overflow: hidden;
                                        opacity: 0;
                                        transition: .3s ease;
                                        box-sizing: content-box;
                                        .w_guide-detailView {
                                            display: flex;
                                            padding: 3rem;
                                            flex-wrap: wrap;
                                            gap: 2rem;
                                            border-top: .2rem solid transparent;
                                            border-bottom: .2rem solid transparent;
                                            .l_guide-detailViewList {
                                                width: 46.5rem;
                                                padding: 2rem;
                                                border-bottom: .1rem solid rgba(9, 21, 64, 0.5);
                                                .list {
                                                    ~.list {
                                                        padding-top: 1rem;
                                                    }
                                                }
                                                .tit,
                                                .content {
                                                    font-family: "Pretendard";
                                                }
                                                .tit {
                                                    font-weight: 700;
                                                    font-size: 1.6rem;
                                                    line-height: 2.4rem;
                                                }
                                                .w_contents {
                                                    display: flex;
                                                    .content {
                                                        font-weight: 400;
                                                        font-size: 1.8rem;
                                                        line-height: 2.7rem;
                                                        +.content {
                                                            &::before {
                                                                margin: 0 1rem;
                                                                color: rgb(200, 200, 200);
                                                                font-size: 1.4rem;
                                                                content: '|';
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        .w_btn {
                                            display: flex;
                                            position: absolute;
                                            top: 4.4rem;
                                            right: 3rem;
                                            width: 9.2rem;
                                            flex-direction: column;
                                            gap: 0.5rem;
                                            .l_btn {
                                                position: relative;
                                                height: 3.2rem;
                                                svg {
                                                    position: absolute;
                                                    top: 50%;
                                                    left: 50%;
                                                    width: 100%;
                                                    height: 100%;
                                                    transform: translate(-50%, -50%);
                                                }
                                            }
                                        }
                                        &.active {
                                            padding-top: 1rem;
                                            opacity: 1;
                                            .w_guide-detailView {
                                                border-color: rgba(9, 21, 64, 1);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            `,
            JS: `
            function 함수이름입력() {
                const progressLine = document.querySelector('.progress-bar svg')
                const swiper = new Swiper('.a_swiper', {
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
                            const controlBtnSvg = \`<svg class="remote" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="5" width="4" height="14" rx="1" fill="#ffffff"/><rect x="14" y="5" width="4" height="14" rx="1" fill="#ffffff"/></svg>\`
                            return \`
                                <span class="\${currentClass}></span>
                                <div class="swiper-controller">
                                    <button class="a_button">\${controlBtnSvg}</button>
                                </div>
                            \`
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
                        swiper.autoplay.pause()
                        controllerBtn.innerHTML = controllRemoteSvg
                    } else {
                        controllRemote.classList.remove('pause')
                        swiper.autoplay.resume()
                        controllerBtn.innerHTML = controllRemoteSvg
                    }
                })
            }
            `
        }
    ]
}