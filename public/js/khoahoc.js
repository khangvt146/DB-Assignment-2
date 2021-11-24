function SetShowDetail() {
    var courseSelected = document.querySelectorAll(".khoahoc_container .button");
    courseSelected.forEach((course) => {
        course.onclick = function(e) {
            var tem = document.querySelector(".info-course-container");
            tem.classList.add("info__active");
            var info = course.innerText.split("\n");
        };
        return course;
    });
}

var outinfo = document.querySelector(".close__info-icon");
outinfo.onclick = function(e) {
    var tem = document.querySelector(".info-course-container");
    tem.classList.remove("info__active");
};

SetShowDetail();