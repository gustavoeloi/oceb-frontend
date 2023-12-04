import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CursoAgendadoDetailComponent } from '../curso-agendado-detail/curso-agendado-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}

  capelanias = [
    {
      id: 'hospitalar',
      title: 'Hospitalar',
      description:
        'oferece suporte espiritual e emocional a pacientes, familiares e equipe médica dentro de ambientes hospitalares, promovendo conforto e apoio durante momentos difíceis.',
    },
    {
      id: 'prisional',
      title: 'Prisional',
      description:
        'A capelania prisional oferece suporte espiritual e emocional a detentos, ajudando na ressocialização e oferecendo apoio religioso e humanitário dentro do ambiente prisional.',
    },
    {
      id: 'escolar',
      title: 'Escolar',
      description:
        'A capelania escolar é um suporte espiritual e emocional oferecido dentro de instituições educacionais, promovendo aconselhamento, apoio religioso e moral, e contribuindo para o bem-estar dos alunos e funcionários.',
    },
  ];

  cardData = [
    {
      title: 'Riacho Fundo 1',
      uf: 'DF',
      local: 'Qnl 13 Conjunto A Lote 01, Taguatinga Norte, Brasília - DF',
      telefone: '(61) 3351-4077',
      responsavel: 'Gustavo Eloi',
      documentos: 'CPF e foto 3x4 para a credencial',
      data: '20/10/2021',
      img: '../../../assets/images/igreja-assembleia-dedeus.jpg',
      valor: 120,
    },
    {
      title: 'Samambaia',
      uf: 'DF',
      local: 'Qnl 13 Conjunto A Lote 01, Taguatinga Norte, Brasília - DF',
      telefone: '(61) 3351-4077',
      responsavel: 'Gustavo Eloi',
      documentos: 'CPF e foto 3x4 para a credencial',
      data: '27/10/2021',
      img: '../../../assets/images/igreja-de-deus.jpg',
      valor: 120,
    },
    {
      title: 'Taguatinga',
      uf: 'DF',
      local: 'Qnl 13 Conjunto A Lote 01, Taguatinga Norte, Brasília - DF',
      telefone: '(61) 3351-4077',
      responsavel: 'Gustavo Eloi',
      documentos: 'CPF e foto 3x4 para a credencial',
      data: '03/11/2021',
      img: '../../../assets/images/igreja-universal.jpg',
      valor: 120,
    },
  ];

  openDialog(curso: any): void {
    const dialogRef = this.dialog.open(CursoAgendadoDetailComponent, {
      width: '500px',
      data: { curso },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('O diálogo foi fechado', result);
    });
  }
}
