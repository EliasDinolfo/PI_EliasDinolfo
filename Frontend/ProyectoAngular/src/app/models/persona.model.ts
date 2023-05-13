export class Persona{
    public id_persona?:number;
    public nombre:string;
    public apellido:string;
    public imagen:string;

    constructor(nombre:string,apellido:string,imagen:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.imagen=imagen;
    }
}