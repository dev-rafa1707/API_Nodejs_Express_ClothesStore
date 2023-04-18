var path = require('path');

const controller = {}

let indice = 4

var lista = [
{
"id": 1,
"descricao": "Camiseta",
"preco": 29.99,
"cores": ["preto", "branco", "cinza"]
},
{
"id": 2,
"descricao": "Calça Jeans",
"preco": 79.99,
"cores": ["azul claro", "azul escuro"]
},
{
"id": 3,
"descricao": "Tênis Esportivo",
"preco": 149.99,
"cores": ["preto", "branco", "cinza", "azul"]
},
{
"id": 4,
"descricao": "Jaqueta de Couro",
"preco": 99.99,
"cores": ["preto", "marrom"]
}
];

 controller.getAll = (req,res)=>{
    res.status(200).send(lista)
}

controller.getItemById = (req,res)=>{
    item = lista.find(i => i.id == req.params.id)
  
    if(item){
      res.status(200).send(item)
    } else{
      res.status(404).sendFile(path.resolve(__dirname+"/../views/notfound.html"))
    }
  }

controller.createItem = (req,res)=>{
    const novoItem = req.body
    novoItem.id = indice + 1
    lista.push(novoItem)
    res.status(200).redirect("/")
}

controller.updateItem = (req,res)=>{
    itemIndice = lista.findIndex(p => p.id == req.params.id)
    console.log(itemIndice)
    if(itemIndice >= 0){
      const newItem = req.body;
      lista[itemIndice] = newItem;
      res.status(200).send("OK")
    }else{
      res.status(404).sendFile(path.resolve(__dirname+"/../views/notfound.html"))
    }
}

controller.deleteItem = (req,res)=>{
  const item = lista.findIndex(p => p.id == req.params.id);
  if (item >= 0) {
    lista.splice(item, 1);
    res.status(200).send("OK")
  }else{
    res.status(404).sendFile(path.resolve(__dirname+"/../views/notfound.html"))
  }
}

module.exports = controller