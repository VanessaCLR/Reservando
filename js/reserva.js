class Reserva {
    constructor(horario, cantidadDePersonas, precioPorPersona, codigoDeDescuento) {
        this.horario = horario;
        this.cantidadDePersonas = cantidadDePersonas;
        this.precioPorPersona = precioPorPersona;
        this.codigoDeDescuento = codigoDeDescuento;
    }
    //Función que calcula el precio base de la reserva//
    precioBase() {
        if(this.cantidadDePersonas >= 1 && this.cantidadDePersonas != NaN){
            let precioBase = this.cantidadDePersonas * this.precioPorPersona;
            return precioBase;
        } else{
        }   
    }
    //Función que calcula el adicional por día//
    adicionalPorDia(){
        let fechaReserva = this.horario;
        let precioB = this.precioBase(this.cantidadDePersonas, this.precioPorPersona);
        let adicional = 0;
        if (fechaReserva.getDay() == 5 || fechaReserva.getDay() ==6 || fechaReserva.getDay() == 0){
            adicional = ((precioB*10)/100);
        }
        return adicional;
    }
    //Función que calcula el adicional por horarios a través de los métodos de DATE//
    adicionalPorHorarios(){
        let fechaReserva = this.horario;
        let precioB = this.precioBase(this.cantidadDePersonas, this.precioPorPersona);
        let adicional = 0;
        if(fechaReserva.getHours() >= 13 && fechaReserva.getHours() <= 14 || fechaReserva.getHours() >= 20 && fechaReserva.getHours() <= 21){
            adicional = ((precioB*5)/100);
        }
        return adicional;
    }
    //Esta función calcula el  adicional total de la reserva//
    adicionalFinal(){
        let adicFinal = this.adicionalPorDia() + this.adicionalPorHorarios();
        return adicFinal;
    }
    //Función que calcula los descuentos por grupos de personas//
    descuentosPorGrupos(){
        let precioB = this.precioBase(this.cantidadDePersonas, this.precioPorPersona);
        let descuento;
            if (this.cantidadDePersonas >0 && this.cantidadDePersonas <=3){
            descuento = 0;
            } else if (this.cantidadDePersonas >=4 && this.cantidadDePersonas <=6) {
                descuento = ((precioB * 5)/100);
            } else if (this.cantidadDePersonas >=7 && this.cantidadDePersonas <=8) { 
                descuento = ((precioB * 10)/100);
            } else if (this.cantidadDePersonas >8) {
                descuento = ((precioB * 15)/100);
            }
        return descuento;
    }
    //Función que calcula los descuentos por código ingresado//
    descuentosPorCodigo(){
        let precioB = this.precioBase(this.cantidadDePersonas, this.precioPorPersona);
        let descuento;
        switch (this.codigoDeDescuento) {
            case "DES15":
                descuento = ((precioB*15)/100);
            break;
            case "DES200":
                descuento = 200;
            break;
            case "DES1": 
                 descuento = precioB/this.cantidadDePersonas;
            break;
            case "": 
            case NaN:
                descuento=0;
            break;
        }
        return descuento;
    }
    //Esta función realiza el calculo total de los descuentos en la reserva//
    descuentoFinal(){
        let descuentoTotal = this.descuentosPorGrupos() + this.descuentosPorCodigo();
        console.log("Este es el descuento total" + descuentoTotal);
        return descuentoTotal;
    }
    //Función que realiza el cálculo del precio final// 
    precioFinal() {
        let precioFinal = this.precioBase() + this.adicionalFinal() - this.descuentoFinal();
        return precioFinal;
    }
}
