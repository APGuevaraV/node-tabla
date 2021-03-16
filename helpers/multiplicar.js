const fs = require ('fs');
const colors =require('colors')
const crearArchivo = async (base =5,show ,hasta=10)=>{
    try {
    
    let salida = '';
    for (let i = 1; i <= hasta; i++) {   
        salida = salida +`${base} x ${i} = ${base*i}\n`;    
    }
   
    if (show) {
        
        console.log('============'.green);
        console.log(`Tabla del ${base}`.rainbow);
        console.log('============'.green);
        console.log(salida.zebra);
    }


       fs.writeFileSync( `./salida/tabla-${base}.txt`,salida);
       return `Tabla-${base}.txt creado`;
       
   } catch (error) {
       throw error;
   } 
}

module.exports = {
    crearArchivo
}