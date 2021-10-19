class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
        this.siguiente=null;
        this.info = `|Nombre:${this.nombre}, Edad:${this.edad}|`
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
        let aux=this.inicio
        let lista = ""
        while(aux!=null){
            lista += aux.info;
            aux=aux.siguiente;
        }
        return lista
    }

    buscar(nombre){
        let temp = this.inicio;
        while(temp!=null){
            if(temp.nombre == nombre){
                return temp
            }
            temp = temp.siguiente
        }
        return null;
    }

    elim(nombre){
        let del = null;
        if (nombre==this.inicio.nombre){
            del = this.inicio
            this.inicio = this.inicio.siguiente
            del.siguiente = null
            return del;
        }
        let temp=this.inicio;
        while(temp.siguiente != null ){
        if (temp.siguiente.nombre==nombre)
        {
            del=temp.siguiente;
            temp.siguiente=temp.siguiente.siguiente;
            del.siguiente=null;
            return del;
        } else
            temp=temp.siguiente;
        }
        return del;
    }
}

let G1 = new Grupo();
let p1 = new Persona("Andrés", 18);
let p2 = new Persona("Germán",19);

G1.agregar(p1);
G1.agregar(p2);
console.log(G1.listar())