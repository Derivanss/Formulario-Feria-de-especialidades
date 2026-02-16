function resultados() {
    const nombre = document.getElementById("name").value;
    const edad = document.getElementById("age").value;
    const grupo = document.getElementById("grupo").value;
    const text_1 = document.getElementById("nombre-texto");
    const text_2 = document.getElementById("edad-texto");
    const text_3 = document.getElementById("grupo-texto");
    text_1.textContent = "Tu nombre es: "+nombre;
    text_2.textContent = "Tienes "+edad+" años";
    text_3.textContent = "Estás en el "+grupo;
    if (edad == "100") {
        text_2.textContent = "Que dijimos del 100 eh?";
    }
    if (nombre == "") {
        text_1.textContent = "Ingresa un nombre";
    }
    if (edad == "") {
        text_2.textContent = "Ingresa tu edad";
    }
}