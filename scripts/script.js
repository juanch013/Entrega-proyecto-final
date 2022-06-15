let campos = document.querySelectorAll('input');
let contador=1;

// let input = document.getElementById('inputNombre');
// input.addEventListener('focus',()=>{
//                 input.className = "input1 destacado" 
//             })

for (input in campos){
    if(input.type != "submit"){
        input.addEventListener('focus',()=>{
                            input.className = "input1 destacado" 
                        })
        // input.addEventListener("focus",()=>{
        //     input.className = "input"+i+" destacado" 
        // })

        input.addEventListener("blur",()=>{
            input.className = "input"+i+""
        })
    }
    contador++
}


