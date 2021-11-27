/* Add hocvien js */
function SetAddhocvien() {
    var hocvienAdd = document.querySelectorAll(".dropdown_hocvien .add_button");
    hocvienAdd.forEach((hocvien) => {
        hocvien.onclick = function(e) {
            var tem = document.querySelector(".add-hocvien-container");
            tem.classList.add("add-hocvien--active");
        };
        return hocvien;
    });
}

var outAdd = document.querySelector(".close__add-hocvien-icon");
outAdd.onclick = function(e) {
    var tem = document.querySelector(".add-hocvien-container");
    tem.classList.remove("add-hocvien--active");
};


/* Update hocvien js */
function SetUpdatehocvien() {
    var hocvienUpdate = document.querySelectorAll(".hocvien_container #u_btn");
    hocvienUpdate.forEach((hocvien) => {
        hocvien.onclick = function(e) {
            var tem = document.querySelector(".update-hocvien-container");
            tem.classList.add("update-hocvien--active");
        };
        return hocvien;
    });
}

var outUpdate = document.querySelector(".close__update-hocvien-icon");
outUpdate.onclick = function(e) {
    var tem = document.querySelector(".update-hocvien-container");
    tem.classList.remove("update-hocvien--active");
};



/* Call function */
SetAddhocvien();
SetUpdatehocvien();