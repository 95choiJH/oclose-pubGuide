// function menuActive() {
//     const sideArea = document.querySelector('.article.a_side')
//     const menuList = sideArea.querySelectorAll('.l_menu')

//     menuList.forEach(menu => {
//         menu.addEventListener('click', function () {
//             menuList.forEach(item => {
//                 item.classList.remove('active');
//             });
//             const comp = menu.querySelector('.btn').innerText
//             window.location.href = `../components/${comp}.html`
//             menu.classList.add('active');
//         });
//     });
// }