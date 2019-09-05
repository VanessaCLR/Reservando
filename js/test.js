let expect= chai.expect; 

describe ('Restaurant', () => {
    describe("reservarHorario", () => {
        it("Debería eliminar el horario reservado del arreglo horarios y debería quedar vacío el arreglo", () => {
            let restaurant = new Restaurant (001, "Suzume", "Asiatico", "Williamsburg", [], "", []);
            restaurant.horarios=(["18:00"]);
            restaurant.reservarHorario("18:00");
            expect(restaurant.horarios).to.eql([]);
        })
        it("Deberia mantener igual el arreglo horario si se intenta reservar un horario que no existe", () => {
            let restaurant = new Restaurant (001, "Suzume", "Asiatico", "Williamsburg", [], "", []);
            restaurant.horarios=(["18:00"]);
            restaurant.reservarHorario("17:00");
            expect(restaurant.horarios).to.eql(["18:00"]);
        })
        it("Deberia mantener igual el arreglo horario si se intenta reservar sin agregar parametro a la función", () => {
            let restaurant = new Restaurant (001, "Suzume", "Asiatico", "Williamsburg", [], "", []);
            restaurant.horarios=(["18:00"]);
            restaurant.reservarHorario();
            expect(restaurant.horarios).to.eql(["18:00"]);
        })     
    })

    describe("obtenerPuntuacion", () =>{
        it("Debería calcular la puntuación correctamente", () => {
            let restaurant = new Restaurant (001, "Suzume", "Asiatico", "Williamsburg", [], "", []);
            restaurant.calificar(8);
            restaurant.calificar(9);
            expect(restaurant.obtenerPuntuacion()).to.eql(8.5);
        })
        it("Debería dejar en 0 la puntuación de un restaurant que no tiene calificaciones", () => {
            let restaurant = new Restaurant (001, "Suzume", "Asiatico", "Williamsburg", [], "", []);
            expect(restaurant.obtenerPuntuacion()).to.eql(0);
        })
    })

    describe("calificar", () =>{
        it("Deberia permanecer el arreglo de calificaciones igual si se ingresa otro parámetro que no sea un numero", () => {
            let restaurant = new Restaurant (001, "Suzume", "Asiatico", "Williamsburg", [], "", []);
            restaurant.calificar(NaN);
            expect(restaurant.calificaciones).to.eql([]);
        })
        it("Deberia permanecer el arreglo de calificaciones igual si se ingresa un número negativo ", () => {
            let restaurant = new Restaurant (001, "Suzume", "Asiatico", "Williamsburg", [], "", []);
            restaurant.calificar(8);
            restaurant.calificar(-1);
            expect(restaurant.calificaciones).to.eql([8]);
        })
        it("Deberia permanecer el arreglo de calificaciones igual si se ingresa un número mayor a 10 ", () => {
            let restaurant = new Restaurant (001, "Suzume", "Asiatico", "Williamsburg", [], "", []);
            restaurant.calificar(12);
            expect(restaurant.calificaciones).to.eql([]);
        })
    })

})

describe("Listado", () =>{
    describe("buscarRestaurante(id)", () =>{
        it("Debería buscar un resturante por el id ingresado", () =>{
            let listado = new Listado ([001]);
            expect(listado.buscarRestaurante()).to.eql(001);
        })
    })
    describe("obtenerRestaurantes", () =>{
        it("Debería realizar una busqueda por horario al ingresar 18:00, el resultado debe corresponder a la posición en el arreglo del restaurante que coincida con la búsqueda", () =>{
            var listadoDeRestaurantes = [
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])];
            var listado = new Listado(listadoDeRestaurantes);
            expect(listado.obtenerRestaurantes(null,null,"18:00")[0]).to.eql(listadoDeRestaurantes[1]);

        })
    })
    describe("obtenerRestaurantes", () =>{
        it("Debería realizar una búsqueda por ciudad al ingresar Londres, el resultado debe corresponder a la posición en el arreglo del restaurante que coincida con la búsqueda", () =>{
            var listadoDeRestaurantes = [
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])];
            var listado = new Listado(listadoDeRestaurantes);
            expect(listado.obtenerRestaurantes(null,"Londres",null)[0]).to.eql(listadoDeRestaurantes[0]);

        })
    })
    describe("obtenerRestaurantes", () =>{
        it("Debería realizar una busqueda por ciudad al ingresar Londres, el resultado debe corresponder a la posición en el arreglo del restaurante que coincida con la búsqueda", () =>{
            var listadoDeRestaurantes = [
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])];
            var listado = new Listado(listadoDeRestaurantes);
            expect(listado.obtenerRestaurantes("Asiática",null,null)[0,1]).to.eql(listadoDeRestaurantes[0,1]);

        })
    })
})

describe("Reserva", () =>{
    describe("precioBase", () =>{
        it("Debería calcular correctamente el precio base de una reserva de dos persona, cada precio por persona es de 250", () => {
            let reserva = new Reserva (new Date(2019, 7, 31, 19, 00), 2, 250, "");
            expect(reserva.precioBase()).to.eql(500);
        })
    })

    describe("precioBase", () =>{
        it("Debería no calcular el precio base de una reserva si se ingresan números negativos", () => {
            let reserva = new Reserva (new Date(2019, 7, 31, 19, 00), -1, 250, "");
            expect(reserva.precioBase()).to.eql();
        })
    })

    describe("precioBase", () =>{
        it("Debería no calcular el precio base de una reserva al ingresar un parámetro que no sea un número", () => {
            let reserva = new Reserva (new Date(2019, 8, 7, 13, 00), NaN, 250, "");
            expect(reserva.precioBase()).to.eql();
        })
    })

    describe("precioFinal", () =>{
        it("Debería  calcular el precio final de una reserva para  2 personas, sin código de descuento, en un horario y día sin recargo adicional", () => {
            let reserva = new Reserva (new Date(2019, 8, 5, 16, 45), 2, 250, "");
            expect(reserva.precioFinal()).to.eql(500);
        })
    })

    describe("precioFinal", () =>{
        it("Debería  calcular el precio final de una reserva para  2 personas, con código de descuento equivalente al valor de una persona, en un horario con recargo y día con recargo adicional", () => {
            let reserva = new Reserva (new Date(2019, 8, 7, 20, 45), 2, 250, "DES1");
            expect(reserva.precioFinal()).to.eql(325);
        })
    })

    describe("precioFinal", () =>{
        it("Debería  calcular el precio final de una reserva para  4 personas, con adicional por día y por horario, y con descuento de 15%", () => {
            let reserva = new Reserva (new Date(2019, 8, 0, 20, 00), 4, 250, "DES15");
            expect(reserva.precioFinal()).to.eql(950);
        })
    })

    describe("precioFinal", () =>{
        it("Debería  calcular el precio final de una reserva para más de 7 personas, con adicional por día y por horario y con descuento de 200", () => {
            let reserva = new Reserva (new Date(2019, 8, 7 , 13, 30), 7, 250, "DES200");
            expect(reserva.precioFinal()).to.eql(1637.5);
        })
    })

    describe("precioFinal", () =>{
        it("Debería  calcular el precio final de una reserva para 1 persona con código de descuento de 1 persona, en un horario sin recargo y un día sin recargo", () => {
            let reserva = new Reserva (new Date(2019, 8, 3 , 10, 30), 1 , 250, "DES1");
            expect(reserva.precioFinal()).to.eql(0);
        })
    })
    describe("precioFinal", () =>{
        it("Debería  calcular el precio final de una reserva para 1 persona con código de descuento de 1 persona, en un horario con recargo y un día con recargo, ya que el requerimiento no explica si en estos casos se realiza el descuento por todo el monto incluyendo adicionales, se asume que se cobran a pesar del descuento", () => {
            let reserva = new Reserva (new Date(2019, 8, 6 , 13, 30), 1 , 250, "DES1");
            expect(reserva.precioFinal()).to.eql(37.5);
        })
    })

    describe("precioFinal", () =>{
        it("Debería  calcular el precio final de una reserva para más de 9 personas, en horario y día con recargo adicional ", () => {
            let reserva = new Reserva (new Date(2019, 8, 6 , 14, 00), 9 , 250, "DES1");
            expect(reserva.precioFinal()).to.eql(2000);
        })
    })
    
    
})