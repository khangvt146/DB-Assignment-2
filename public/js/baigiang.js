// /* Show baigiang detail js */
// function SetShowDetail1() {
//     var baigiangSelected = document.querySelectorAll(".baigiang_container #i_btn");
//     baigiangSelected.forEach((baigiang) => {
//         baigiang.onclick = function(e) {
//             var tem = document.querySelector(".info-baigiang-container");
//             tem.classList.add("info__active");
//             var info = baigiang.innerText.split("\n");
//         };
//         return baigiang;
//     });
// }

// var outinfo = document.querySelector(".close__info-icon");
// outinfo.onclick = function(e) {
//     var tem = document.querySelector(".info-baigiang-container");
//     tem.classList.remove("info__active");
// };

// /* Add baigiang js */
// function SetAddbaigiang() {
//     var baigiangAdd = document.querySelectorAll(".dropdown_baigiang .add_button");
//     baigiangAdd.forEach((baigiang) => {
//         baigiang.onclick = function(e) {
//             var tem = document.querySelector(".add-baigiang-container");
//             tem.classList.add("add-baigiang--active");
//         };
//         return baigiang;
//     });
// }

// var outAdd = document.querySelector(".close__add-baigiang-icon");
// outAdd.onclick = function(e) {
//     var tem = document.querySelector(".add-baigiang-container");
//     tem.classList.remove("add-baigiang--active");
// };


// /* Update baigiang js */
// function SetUpdatebaigiang() {
//     var baigiangUpdate = document.querySelectorAll(".baigiang_container #u_btn");
//     baigiangUpdate.forEach((baigiang) => {
//         baigiang.onclick = function(e) {
//             var tem = document.querySelector(".update-baigiang-container");
//             tem.classList.add("update-baigiang--active");
//         };
//         return baigiang;
//     });
// }

// var outUpdate = document.querySelector(".close__update-baigiang-icon");
// outUpdate.onclick = function(e) {
//     var tem = document.querySelector(".update-baigiang-container");
//     tem.classList.remove("update-baigiang--active");
// };



// /* Call function */
// SetShowDetail1();
// SetAddbaigiang();
// SetUpdatebaigiang();