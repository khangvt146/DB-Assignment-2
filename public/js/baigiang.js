/* Show baigiang detail js */
function SetShowDetailBaigiang() {
    var baigiangSelected = document.querySelectorAll(".baigiang_container #i_btn");
    baigiangSelected.forEach((baigiang) => {
        baigiang.onclick = function(e) {
            var tem = document.querySelector(".info-baigiang-container");
            tem.classList.add("info__active");
            var info = baigiang.innerText.split("\n");
        };
        return baigiang;
    });
}

var outBaigiangInfo = document.querySelector(".close__info_baigiang-icon");
outBaigiangInfo.onclick = function(e) {
    var tem = document.querySelector(".info-baigiang-container");
    tem.classList.remove("info__active");
};

/* Add baigiang js */
function SetAddbaigiang() {
    var baigiangAdd = document.querySelectorAll(".dropdown_baigiang .add_baigiang_button");
    baigiangAdd.forEach((baigiang) => {
        baigiang.onclick = function(e) {
            var tem = document.querySelector(".add-baigiang-container");
            tem.classList.add("add-baigiang--active");
        };
        return baigiang;
    });
}

var outAddBaigiang = document.querySelector(".close__add-baigiang-icon");
outAddBaigiang.onclick = function(e) {
    var tem = document.querySelector(".add-baigiang-container");
    tem.classList.remove("add-baigiang--active");
};


/* Update baigiang js */
function SetUpdatebaigiang() {
    var baigiangUpdate = document.querySelectorAll(".baigiang_container #u_btn");
    baigiangUpdate.forEach((baigiang) => {
        baigiang.onclick = function(e) {
            var tem = document.querySelector(".update-baigiang-container");
            tem.classList.add("update-baigiang--active");
        };
        return baigiang;
    });
}

var outUpdateBaigiang = document.querySelector(".close__update-baigiang-icon");
outUpdateBaigiang.onclick = function(e) {
    var tem = document.querySelector(".update-baigiang-container");
    tem.classList.remove("update-baigiang--active");
};



/* Call function */
SetShowDetailBaigiang();
SetAddbaigiang();
SetUpdatebaigiang();