function torreHanoi(nDiscos: number, tOrigen: string, tDestino: string, tAuxiliar: string): void {
    //Si solo hay un disco, se mueve a la torre destino
    if (nDiscos === 1) {
        console.log(`Mueve el disco 1 de la torre ${tOrigen} a la torre ${tDestino}`);
    } else {
        torreHanoi(nDiscos - 1, tOrigen, tAuxiliar, tDestino);

        console.log(`Mueve el disco ${nDiscos} de la torre ${tOrigen} a la ${tDestino}`);
        
        torreHanoi(nDiscos - 1, tAuxiliar, tDestino, tOrigen);
    }
}

torreHanoi(5, 'A', 'C', 'B',);



