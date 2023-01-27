
let cantidad = prompt("¿Cuantos alumnos son ?");
let alumnosTotales = [];
//                                 //356
for (let index = 0; index < cantidad; index++) {
    alumnosTotales[index] = prompt("Ingrese el nombre " + (index + 1));
    document.write(`<b style='color:green; font-family:Arial;'>El nombre del alumno </b> ${(index + 1)} <b style='color:green; font-family:Arial;'>es:</b> [ ${alumnosTotales[index]} ] <br>`);
}
document.write("------------------------------------------------------------" + "<br>");
document.write("<b style='font-family:Arial; color: red;'>La cantidad de alumnos son: </b>" + cantidad);


//HOLAAAAA
