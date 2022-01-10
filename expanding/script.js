const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeClassAttribute(panels, "active");
        panel.classList.add("active");
    })
})

function removeClassAttribute(clazz, attribute) {
    clazz.forEach((ele) => {
        ele.classList.remove(attribute);
    });
}