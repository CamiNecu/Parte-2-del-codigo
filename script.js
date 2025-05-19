const students=[]
const tableBody=document.querySelector("#studentsTable tbody");
const averageDiv=document.getElementById("average");

document.getElementById("studentForm").addEventListener("submit",function(e){
    e.preventDefault();

    const name=document.getElementById("name").value.trim();
    const lastName=document.getElementById("lastName").value.trim();
    const grade=parseFloat(document.getElementById("grade").value);

    if(!name || !lastName || isNaN(grade) || grade<1 || grade>7){
        alert("Error al ingresar Datos")
        return
    }

    const student={name,lastName,grade};

    students.push(student);
    console.log(students)

//Este comando Ejecuta las Funciones y luego Borra la Consola
addStudentToTable(student);
calcularPromedio();
    this.reset()

});

//Funcion para Que los datos se pongan en la tabla
function addStudentToTable(student){
    const row=document.createElement("tr");
    row.innerHTML=`
    <td>${student.name}</td>
    <td>${student.lastName}</td>
    <td>${student.grade}</td>
    <td><button class="delete-btm">Eliminar</button></td>
    <td><button class="editar-btm">Editar</button></td>`;

//Se Agrega boton delete para eliminar datos
    row.querySelector(".delete-btm").addEventListener("click",function(){
        deleteEstudiante(student,row);
    });
    row.querySelector(".editar-btm").addEventListener("click",function(){
        editarEstudiante(student,row);
    });
    
    tableBody.appendChild(row);
}

//funcion para eliminar estudiante
function deleteEstudiante(student,row){
    const index=students.indexOf(student);
    if(index>-1){
        students.splice(index,1);
        row.remove();
        calcularPromedio();
       
    }
}

function editarEstudiante(student,row){
    
}

//funcion para calcular el promedio de notas
function calcularPromedio(){
    if (students.length==0){
        averageDiv.textContent="Promedio General del Curso : N/A"
        return
    }
    const total=students.reduce((sum,student)=>sum +student.grade,0);
    const prom=total/students.length;

    averageDiv.textContent="Promedio General del Curso : "+prom.toFixed(2)
}

// Agregar Boton Editar