//ASIGNAR VALOR A LAS VARIABLES
let parrafo = document.querySelectorAll(".parrafo");
let section = document.querySelectorAll(".flex-section");

//CLASE PARRAFO
parrafo.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastando el parrafo: " + parrafo.innerText);
        parrafo.classList.add("flex-dragging")
        event.dataTransfer.setData("id", parrafo.id)


    });

    parrafo.addEventListener("dragend", () => {
        // parrafo.classList.remove("flex-dragging")
    });
});

//CLASE SECTION
section.forEach(section => {
    section.addEventListener("dragover", (e) => {
        e.preventDefault()
    });

    section.addEventListener("drop", event => {
        let id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        section.appendChild(parrafo)
        

    });

});