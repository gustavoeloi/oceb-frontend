import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-curso-agendado-detail',
  templateUrl: './curso-agendado-detail.component.html',
  styleUrls: ['./curso-agendado-detail.component.scss'],
})
export class CursoAgendadoDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
