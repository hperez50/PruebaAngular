import { Component, OnInit } from '@angular/core';
import { Empresa } from './empresa';
import { EmpresaService } from './empresa.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  empresas:Empresa[] = [];

  constructor(private empresaService:EmpresaService) { }

  ngOnInit(): void {
    this.empresaService.getAll().subscribe(
      e => this.empresas = e
    );



  }

}
