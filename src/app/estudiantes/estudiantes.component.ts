import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css'],
})
export class EstudiantesComponent implements OnInit {
  titulo: string = 'Lista Estudiante';
  prueba: string = 'Prueba componente estudiante';
  constructor() {}

  ngOnInit(): void {}
}
