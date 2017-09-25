export class Endereco {
  estado: string;
  cidade: string;
  rua: string;
}

export class Produto {
    _id: string;
    nome: string;
    descricao: string;
    endereco: Endereco;
    image: any;
    status: boolean;
    dono: string;
    constructor(){}
}
