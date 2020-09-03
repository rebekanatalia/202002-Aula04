class ex3{
    a:string;
    constructor(a:string){
        this.a = a;
    }
    sb():string{
        return "numero, " + this.a;
    }
}

var soma = new array("soma");
var mult = new array("mult");

var arrays:array[]= new Array();
arrays.push(soma);
arrays.push(mult);

arrays.forEach( (p:array)=>
    console.log(p.sb())
    );