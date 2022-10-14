export class Empresa {
  id_empresa: number;
  tipo_id_empresa: string;
  direccion: string;
  ciudad: string;
  departamente: string;
  pais: string;
  telefono: number;
  tipo_id_repre: string;
  id_repre: number;
  nombre_repre: string;
  direccion_repre: string;
  ciudad_repre: string;
  departamento_repre: string;
  pais_repre: string;
  telefono_repre: number;

  constructor() {
    this.id_empresa = 0;
    this.tipo_id_empresa = '';
    this.direccion = '';
    this.ciudad = '';
    this.departamente = '';
    this.pais = '';
    this.telefono = 0;
    this.tipo_id_repre = '';
    this.id_repre = 0;
    this.nombre_repre = '';
    this.direccion_repre = '';
    this.ciudad_repre = '';
    this.departamento_repre = '';
    this.pais_repre = '';
    this.telefono_repre = 0;
  }
}
