const stars = document.querySelectorAll(".stars i");
const header = document.querySelector("header");

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {

        stars.forEach((star, index2) => {
            if (index1 >= index2) {
                star.classList.add("active");
            } else {
                star.classList.remove("active");
            }
        })

        if (index1 === 4) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    })
})