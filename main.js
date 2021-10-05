class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
        this.siguiente=null;
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
            let lista=[]
            while(aux!=null){
                lista.push(aux)
                aux=aux.siguiente;
            }
            return lista
        }
    }
}

let G1 = new Grupo();
let Andres = new Persona("Andrés", 18);
let German = new Persona("Germán",19);

G1.agregar(Andres);
G1.agregar(German);
console.log(G1.listar())