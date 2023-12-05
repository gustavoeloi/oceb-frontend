import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent {
  membrosDiretoria: any[] = [
    {
      img: 'https://i.pinimg.com/736x/c8/60/a5/c860a5db7ba917e8690e7f01e06f5f90.jpg',
      nome: 'Neymar Jr',
      funcao: 'Presidente da OCEB',
      descricao:
        'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    },
    {
      img: 'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2020/08/egstdzawkaed_n7-e1598388038227.jpg',
      nome: 'Lionel Messi',
      funcao: 'Presidente da OCEB',
      descricao:
        'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    },
    {
      img: 'https://static.vakinha.com.br/uploads/vakinha/image/2168875/22-53-42-images.jpg?ims=700x410',
      nome: 'Cristiano Ronaldo',
      funcao: 'Presidente da OCEB',
      descricao:
        'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjFzZYl-cjMRs94_LT-tkFjo-WMH9a-lPGoFBvijolUAzVJaNJomezJx0-99apUIS4Prk&usqp=CAU',
      nome: ' Pelé',
      funcao: 'Presidente da OCEB',
      descricao:
        'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    },
  ];

  mvv: any[] = [
    {
      icon: '../../../assets/images/missao.png',
      title: 'Missão',
      content:
        'Se tornar a maior referência na prática dos esportes aéreos de paraquedas, asa-delta e balonismo no Brasil e no mundo.',
    },
    {
      icon: '../../../assets/images/visao.png',
      title: 'Visão',
      content:
        'Se tornar a maior referência na prática dos esportes aéreos de paraquedas, asa-delta e balonismo no Brasil e no mundo.',
    },
    {
      icon: '../../../assets/images/valores.png',
      title: 'Valores',
      content:
        'Liberdade, Inovação, Segurança, Integridade, Respeito à vida, Respeito ao Meio Ambiente e Sustentabilidade.',
    },
  ];
}
