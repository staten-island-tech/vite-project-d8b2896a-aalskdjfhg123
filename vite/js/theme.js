export function button(button1, button2) {
    button1.addEventListener("click", function () {

        document.body.classList.remove("funky")
        document.body.classList.add("tater")

        button2.addEventListener("click", function () {

            document.body.classList.remove("tater")
            document.body.classList.add("funky")

        })

    })
}