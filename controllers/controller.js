var path = require('path');

const controller = {}

let indice = 15

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

controller.getPessoaById = (req,res)=>{
    item = lista.find(i => i.id == req.params.id)
  
    if(item){
      res.status(200).send(item)
    } else{
      res.status(404).sendFile(path.resolve(__dirname+"/../views/notfound.html"))
    }
  }

controller.createPessoa = (req,res)=>{
    const novaPessoa = req.body
    novaPessoa.id = indice + 1
    lista.push(novaPessoa)
    res.status(200).redirect("/pessoas")
}

controller.updatePessoa = (req,res)=>{
    pessoaIndice = lista.findIndex(p => p.id == req.params.id)
    console.log(pessoaIndice)
    if(pessoaIndice >= 0){
      const pessoaAtualizada = req.body;
      lista[pessoaIndice] = pessoaAtualizada;
      res.status(200).send("OK")
    }else{
      res.status(404).sendFile(path.resolve(__dirname+"/../views/notfound.html"))
    }
}

controller.deletePessoa = (req,res)=>{
  const pessoaIndice = lista.findIndex(p => p.id == req.params.id);
  if (pessoaIndice >= 0) {
    lista.splice(pessoaIndice, 1);
    res.status(200).send("OK")
  }else{
    res.status(404).sendFile(path.resolve(__dirname+"/../views/notfound.html"))
  }
}

module.exports = controller