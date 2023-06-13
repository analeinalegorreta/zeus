import { Injectable } from '@angular/core';


@Injectable()

export class HeroinasService {

    private heroes:Heroina[]=[
        
            {
              nombre: "Sailor Mercury",
              bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.Sailor Mercury fue consistentemente el personaje más popular entre el público japonés. A veces, ella era incluso más popular que el personaje principal.",
              img: "assets/img/mercuri.jpg",
              aparicion: "1941-11-01",
              casa:"DC"
            },
            {
              nombre: "Sailor Jupiter",
              bio: "Sailor Jupiter es la más poderosa físicamente de las Sailor Scouts del Sistema Solar Interior, lo suficientemente fuerte como para levantar y golpear a un Youma contra el suelo antes de que se transforme en su forma Scout.",
                img: "assets/img/jupiter.jpg",
              aparicion: "1939-05-01",
              casa:"DC"
            },
            {
              nombre: "Sailor Mars",
              bio: "Sailor Mars tiene un trasfondo bastante interesante. Además de ser una guardiana mágica del Sistema Solar, también es una doncella del santuario sintoísta. Su entrenamiento espiritual le da habilidades precognitivas y el poder de exorcizar espíritus malignos incluso antes de que ella se despierte como una Sailor Scout.",
                img: "assets/img/marcs.jpg",
              aparicion: "1964-01-01",
              casa: "Marvel"
            },
            {
              nombre: "Sailor V.",
              bio: "Antes de que existiera Sailor Moon, existía la serie de manga Codename : Sailor V. Sailor Venus es la primera Sailor Scout en despertar con la ayuda de su gato guardián Artemis.",
                img: "assets/img/venus.jpg",
              aparicion: "1962-05-01",
              casa:"Marvel"
            },
            {
              nombre: "Sailor Moon",
              bio: "Sailor Moon puede ser una llorona perezosa a veces. Muchos fanáticos encontraron esto desagradable al comienzo de la serie. Sin embargo, al final, está destinada a convertirse en la elegante y poderosa Neo Reina Serenity del Reino de la Luna.",
              img: "assets/img/sailormoon.jpg",
              aparicion: "1940-06-01",
              casa: "DC"
            },
        
          
    ];


  constructor() {
    console.log("Servicio listo ...")
  }


  getHeroes():Heroina[]{
    return this.heroes;
  }

  getHeroe(idx:number){
    return this.heroes[idx];
  }

  buscarHeroes(termino:string):Heroina[]{
    let heroesArr:Heroina[]=[];
    termino=termino.toLocaleLowerCase();
     for(let heroe of this.heroes){
      let nombre=heroe.nombre.toLowerCase();
      if(nombre.indexOf(termino)>=0){
        heroesArr.push(heroe)
      }
     }

     return heroesArr;
  }
  

}


export interface Heroina{
    nombre:string,
    bio:string, 
    img:string,
    aparicion:string, 
    casa: string,
}