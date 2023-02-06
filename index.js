function burger_init() {
    // הכפתור של הבורגר צריך את האיי די הזה
    // console.log("burger")
    let burger_btn = document.querySelector("#burger_btn");

    // התפריט שייעלם ויחזור צריך
    // את האיי די הזה
    let id_nav_show_hide = document.querySelector("#id_nav_show_hide");

    burger_btn.addEventListener("click", function() {

        id_nav_show_hide.style.display = (id_nav_show_hide.style.display != "flex") ? "flex" : "none";
    })
}

burger_init();