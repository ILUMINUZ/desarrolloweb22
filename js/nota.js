//Variable globales
let notas=[{nombre:'Juan',nota:0},
            {nombre:'Maria',nota:0},
            {nombre:'Jose',nota:0},
            {nombre:'Rene',nota:0},
            {nombre:'Pedro',nota:0},];
function genRandomico($max,$min){
    return Math.floor(Math.random()*($max-$min+1)+2);
}
function cargarnotas(){
    notas.forEach(nota=>{
        nota.nota=genRandomico(10,2);
    });
}
function fclasificar(nota){
    let $clasificar;
        switch(nota){
            case 2: case 3: case 4:
                $clasificar="Insuficiente";
                break;
            case 5: case 6:
                $clasificar="Suficiente";
                break;
            case 7: case 8:
                $clasificar="Bien";
                break;
            case 10: 
                $clasificar="NOtable";
                break;
            default:
                $clasificar="Fuera de rango"
        }
        return $clasificar;
}