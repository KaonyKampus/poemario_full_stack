import crypto from "crypto"

class PoemsManager {
  static #all = [{
    id: crypto.randomBytes(12).toString("hex"),
    category:"horror",
    title:"Las penas de Werther",
    photo:"image.png",
    paragraph:"LoremIpsum",
    audio:"record1",
  },{
    id: crypto.randomBytes(12).toString("hex"),
    category:"horror",
    title:"Las penas de Werther",
    photo:"image.png",
    paragraph:"LoremIpsum",
    audio:"record1",
  }];


  create(data) {
    const promesa = new Promise((resolve, reject) => {
      try {
        data.id = crypto.randomBytes(12).toString("hex")

        PoemsManager.#all.push(data);
        console.log("Exito al crear: ID-" + data.id);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
    return promesa;
  }

  readAll() {
    try {
      const promesa = new Promise((resolve, reject) => {
        if (PoemsManager.#all.length > 0) {
          resolve(PoemsManager.#all);
        } else {
          reject("ERROR AL LEER TODOS");
        }
      });
      return promesa;
    } catch (error) {
      reject(error);
    }
  }
}

async function test() {
    try {
        const manager = new PoemsManager();
        await manager.readAll();
        manager.create({
            category:"horror",
            title:"Las penas de Werther",
            photo:"image.png",
            paragraph:"LoremIpsum",
            audio:"record1",
        });
        manager.create({
            category:"fantasy",
            title:"Hola Lola",
            photo:"image.png",
            paragraph:"LoremIpsum",
            audio:"record2",
        });
    } catch (error) {
        console.log(error)
    }
}


//test()

const poemsManager = new PoemsManager()
export default poemsManager