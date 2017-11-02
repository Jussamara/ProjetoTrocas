class Movel {
  id: string;
  dono: string;
  nome: string;
};

class Solicitante {
  id: string;
  nome: string;
}

export class Troca {
    _id: string;
    movel: Movel;
    solicitante: Solicitante;
    data: Date;
    dataCancelamento: Date;
    status: Boolean;

    constructor() {
      this.movel = new Movel();
      this.solicitante = new Solicitante();
    }
}
