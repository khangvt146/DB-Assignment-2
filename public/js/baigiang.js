/* Show baigiang detail js */
function SetShowDetailBaigiang() {
    var baigiangSelected = document.querySelectorAll(".baigiang_container #i_btn");
    baigiangSelected.forEach((baigiang) => {
        baigiang.onclick = function(e) {
            var tem = document.querySelector(".info-baigiang-container");
            tem.classList.add("lesson-info__active");
            var ma_bai_giang = $(this).data("ma_bai_giang");
            var ma_gv = $(this).data("ma_gv");
            setDetail(ma_bai_giang, ma_gv)
        };
        return baigiang;
    });
}

function setDetail(ma_bai_giang, ma_gv) {
    var lessonList = document.querySelectorAll(".baigiang_item");
    lessonList = Array.from(lessonList);
    let lessonSelected = lessonList.find((lesson) => {
        return $(lesson).find("#i_btn").data('ma_bai_giang') === ma_bai_giang && $(lesson).find("#i_btn").data('ma_gv') === ma_gv;
    });
    $('.baigiang__name').text($(lessonSelected).find(".baigiang_name").text());
    $('.baigiang__subject_value').text(getSubject(Number($(lessonSelected).find(".baigiang_subject_value").text())));
    $('.baigiang__teacher_value').text($(lessonSelected).find(".baigiang_teacher_value").text());
    $('.baigiang__startDate_value').text($(lessonSelected).find(".baigiang_startDate_value").text());
    document.getElementById("link__video").src =($(lessonSelected).find(".link_video").text());
}


var outBaigiangInfo = document.querySelector(".close__info_baigiang-icon");
outBaigiangInfo.onclick = function(e) {
    var tem = document.querySelector(".info-baigiang-container");
    tem.classList.remove("lesson-info__active");
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
            var ma_bai_giang = $(this).data("ma_bai_giang");
            var ma_gv = $(this).data("ma_gv");
            setUpdateDetail(ma_bai_giang, ma_gv)
        };
    });
}

function setUpdateDetail(ma_bai_giang, ma_gv) {
    var lessonList = document.querySelectorAll(".baigiang_item");
    lessonList = Array.from(lessonList);
    let lessonSelected = lessonList.find((lesson) => {
        return $(lesson).find("#u_btn").data('ma_bai_giang') === ma_bai_giang && $(lesson).find("#u_btn").data('ma_gv') === ma_gv;
    });
    document.getElementById('update-baigiang_ten').value = ($(lessonSelected).find(".baigiang_name").text());
    document.getElementById('update-baigiang_giaovien').value = Number($(lessonSelected).find(".baigiang_teacher_id").text());
    document.getElementById('update-baigiang_thoiluong').value = ($(lessonSelected).find(".baigiang_thoiluong").text());
    document.getElementById('update-baigiang_videolink').value = ($(lessonSelected).find(".link_video").text());
    document.getElementById('update-baigiang_uploadtime').value = formatDate($(lessonSelected).find(".baigiang_startDate_value").text());
    document.getElementById('update-baigiang_khoahoc').value = ($(lessonSelected).find(".baigiang_course_id").text());
    console.log(document.getElementById('update-baigiang_khoahoc'))
    console.log($(lessonSelected).find(".baigiang_course_id").text())
}

var outUpdateBaigiang = document.querySelector(".close__update-baigiang-icon");
outUpdateBaigiang.onclick = function(e) {
    var tem = document.querySelector(".update-baigiang-container");
    tem.classList.remove("update-baigiang--active");
};


function getSubject(id) {
    switch(id) {
        case 0: return "Tổng hợp nhiều môn"; break;
        case 1: return "Ngữ Văn"; break;
        case 2: return "Toán học"; break;
        case 3: return "Tiếng Anh"; break;
        case 4: return "Tin học"; break;
        case 5: return "Vật lý"; break;
        case 6: return "Hóa học"; break;
        case 7: return "Sinh học"; break;
        case 8: return "Lịch sử"; break;
        default: return "Tổng hợp nhiều môn";
    }
}

function formatDate(date) {
    date = date.replace(/\s+/g, '');
    var tmpArray = date.split('-');
    return [tmpArray[2], tmpArray[1], tmpArray[0]].join('-');
}
/* Call function */
SetShowDetailBaigiang();
SetAddbaigiang();
SetUpdatebaigiang();