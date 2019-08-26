let expect= chai.expect; 

describe ('Restaurant', () => {
    describe("reservarHorario", () => {
        it("Debería eliminar el horario reservado del arreglo horarios", () => {
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
        it("Debería dejar en 0 la puntuación de un restaurant sin calificaciones", () => {
            let restaurant = new Restaurant (001, "Suzume", "Asiatico", "Williamsburg", [], "", []);
            expect(restaurant.obtenerPuntuacion()).to.eql(0);
        })
    })

    describe("calificar", () =>{
        it("Deberia permanecer el arreglo de calificaciones igual si le paso otro parametro que no sea un numero", () => {
            let restaurant = new Restaurant (001, "Suzume", "Asiatico", "Williamsburg", [], "", []);
            restaurant.calificar(NaN);
            expect(restaurant.calificaciones).to.eql([]);
        })
        it("Deberia permanecer el arreglo de calificaciones igual si le paso un número negativo ", () => {
            let restaurant = new Restaurant (001, "Suzume", "Asiatico", "Williamsburg", [], "", []);
            restaurant.calificar(8);
            restaurant.calificar(-1);
            expect(restaurant.calificaciones).to.eql([8]);
        })
        it("Deberia permanecer el arreglo de calificaciones igual si le paso un número mayor a 10 ", () => {
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
        it("Debería realizar una busqueda por rubro, ciudad u horario", () =>{
            var listadoDeRestaurantes = [
                new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
                new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])];
            var listado = new Listado(listadoDeRestaurantes);
            expect(listado.obtenerRestaurantes(null,null,"18:00")[0]).to.eql(listadoDeRestaurantes[1]);

        })
    })
})