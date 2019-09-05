class Restaurant {
    constructor(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
        this.id = id;
        this.nombre = nombre;
        this.rubro = rubro;
        this.ubicacion = ubicacion;
        this.horarios = horarios;
        this.imagen = imagen;
        this.calificaciones = calificaciones;
    }
    reservarHorario(horarioReservado) {
        let horarios = this.horarios;
        horarios = horarios.filter(horario => horario !== horarioReservado);
        this.horarios = horarios;
    }
    calificar(nuevaCalificacion) {
        if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
            this.calificaciones.push(nuevaCalificacion);
        }
    }
    obtenerSumatoria = function (numeros) {
        let sumatoria = numeros.reduce((sumatoria, numero) => sumatoria + numero);
        return sumatoria;
    }

    obtenerPromedio = function (arreglo) {
        let promedio = this.obtenerSumatoria(arreglo) / arreglo.length;
        return Math.round(promedio * 10) / 10;
    }

    obtenerPuntuacion() {
        if (this.calificaciones.length === 0) {
            return 0;
        } else {
            return this.obtenerPromedio(this.calificaciones);
        }

    }
}







