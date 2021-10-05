class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
        this.siguiente=null;
    }

    getName(){
        return this.nombre;
    }
    getAge(){
        return this.edad;
    }
}


class Grupo{
    constructor(){
        this.inicio=null;
    }
    agregar(nuevo){
        if (this.inicio==null){
            this.inicio=nuevo;
        } else {
            let aux=this.inicio;
            while(aux.siguiente!=null)
                aux=aux.siguiente;
            aux.siguiente=nuevo;
        }
    }
    listar(){
        if(this.inicio == null){
            return null;
        }
        else {
            let aux=this.inicio
            let lista = ""
            while(aux!=null){
                lista += `|Nombre:${aux.getName()}, Edad:${aux.getAge()}|`
                aux=aux.siguiente;
            }
            return lista
        }
    }
}

let G1 = new Grupo();
let p1 = new Persona("Andrés", 18);
let p2 = new Persona("Germán",19);

G1.agregar(p1);
G1.agregar(p2);
console.log(G1.listar())