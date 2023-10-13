//AQUI IREMOS REALIZAR ALGUNS EXERCÍCIOS E EXEMPLOS DE HASH TABLES em JAVASCRIPT

//Você normalmente usará uma hash table por suas rápidas operações de busca, inserção e remoção:

//VAMOS UTILIZAR HASH TABLES COM OBJECT E MAP
//A classe Map em JavaScript é outra implementação de uma hash table

let obj = {
    Leonardo: "4002-8922",
    Leonardo1: "1234-5678"
}
console.log(obj);

const exemplo1 = new Map();
//O objeto Set permite que você armazene valores únicos de qualquer tipo, desde valores primitivos a referências a objetos
exemplo1.set("Nathan", "555-0182");
exemplo1.set("Jane", "555-0182");
//COM SET VOCÊ INSERE VALORES
//método set() que aceita como parâmetros (chave, valor):
//COM GET VOCÊ PUXA OS VALORES JÁ ESTABELECIDOS
console.log(exemplo1.get("Nathan")); // 555-0182, AQUI MOSTRAMOS O VALOR QUE ESTÁ INSERIDO NO NATHAN
console.log(exemplo1.size); // 2, AQUI MOSTRAMOS QUANTOS ELEMENTOS FORAM INSERIDOS NO NEW MAP EXEMPLO1

//Você também não consegue sobrescrever, em  Map, propriedades herdadas. Por exemplo, o código a seguir tentou sobrescrever o valor da propriedade size para  false:

const collection = new Map();

collection.set("Nathan", "555-0182");
collection["size"] = false;

console.log(collection.get("size")); // undefined
console.log(collection.size); // 1

//Propriedades em estruturas do tipo Map não podem ser sobrescritas
//Map requer que você use os métodos set() e get() para definir e buscar quaisquer valores de chave/valor que desejar adicionar à estrutura de dados.


//Aqui você consegue fazer um loop para percorrer todos os dados inseridos no código e mostrar o resultado na tela.
const myMap = new Map();

myMap.set("Nathan", "555-0182");
myMap.set("Jane", "315-0322");

for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}



const ht = new HashTable();
ht.set("Canada", 300);//COM SET VOCÊ INSERE VALORES
ht.set("France", 100);//COM SET VOCÊ INSERE VALORES
ht.set("Spain", 110);//COM SET VOCÊ INSERE VALORES
console.log(ht.get("Canada")); // [ 'Canada', 300 ] //COM GET VOCÊ OBTEM OS VALORES //MOSTRAR NA TELA
console.log(ht.get("France")); // [ 'France', 100 ] //COM GET VOCÊ OBTEM OS VALORES //MOSTRAR NA TELA
console.log(ht.get("Spain")); // [ 'Spain', 110 ] //COM GET VOCÊ OBTEM OS VALORES //MOSTRAR NA TELA
console.log(ht.remove("Spain")); // true // ou seja, encontrou o valor e removeu
console.log(ht.get("Spain")); // undefined, ou seja, o valor já foi removido! 




class HashTable {
    constructor(size) {
      this.size = size;
      this.table = new Array(size);
    }
  
    // Função de hash simples que converte uma chave em um índice na tabela
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.size;
    }
  
    // Função para inserir uma chave e valor na tabela hash
    insert(key, value) {
      const index = this.hash(key);
      if (!this.table[index]) {
        this.table[index] = [];
      }
      this.table[index].push({ key, value });
    }
  
    // Função para buscar um valor com base na chave
    search(key) {
      const index = this.hash(key);
      if (!this.table[index]) {
        return null; // Chave não encontrada
      }
      for (const entry of this.table[index]) {
        if (entry.key === key) {
          return entry.value;
        }
      }
      return null; // Chave não encontrada
    }
  }
  
  // Exemplo de uso:
  const hashTable = new HashTable(10);
  
  hashTable.insert("nome", "João");
  hashTable.insert("idade", 25);
  hashTable.insert("cidade", "São Paulo");
  
  console.log(hashTable.search("nome")); // Saída: "João"
  console.log(hashTable.search("idade")); // Saída: 25
  console.log(hashTable.search("cidade")); // Saída: "São Paulo"
  console.log(hashTable.search("email")); // Saída: null (chave não encontrada)



  ///


  class HashTable {
    constructor(size) {
      this.size = size;
      this.table = new Array(size);
    }
  
    // Função de hash simples que converte uma chave em um índice na tabela
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.size;
    }
  
    // Função para inserir uma chave e valor na tabela hash
    insert(key, value) {
      const index = this.hash(key);
      if (!this.table[index]) {
        this.table[index] = [];
      }
      // Verifica se a chave já existe na tabela antes de inseri-la
      const existingEntry = this.table[index].find((entry) => entry.key === key);
      if (existingEntry) {
        existingEntry.value = value; // Atualiza o valor da chave existente
      } else {
        this.table[index].push({ key, value });
      }
    }
  
    // Função para buscar um valor com base na chave
    search(key) {
      const index = this.hash(key);
      if (!this.table[index]) {
        return null; // Chave não encontrada
      }
      const entry = this.table[index].find((entry) => entry.key === key);
      return entry ? entry.value : null;
    }
  
    // Função para excluir uma chave
    delete(key) {
      const index = this.hash(key);
      if (!this.table[index]) {
        return; // Nada a fazer se a chave não existir
      }
      this.table[index] = this.table[index].filter((entry) => entry.key !== key);
    }
  }
  
  // Exemplo de uso:
  const hashTable = new HashTable(10);
  
  hashTable.insert("nome", "João");
  hashTable.insert("idade", 25);
  hashTable.insert("cidade", "São Paulo");
  
  console.log(hashTable.search("nome")); // Saída: "João"
  console.log(hashTable.search("idade")); // Saída: 25
  console.log(hashTable.search("cidade")); // Saída: "São Paulo"
  
  hashTable.delete("idade");
  console.log(hashTable.search("idade")); // Saída: null (chave excluída)



