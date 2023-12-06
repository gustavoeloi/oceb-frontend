import { Component } from '@angular/core';

@Component({
  selector: 'app-capelanias',
  templateUrl: './capelanias.component.html',
  styleUrls: ['./capelanias.component.scss'],
})
export class CapelaniasComponent {
  nossasCapelanias: any[] = [
    {
      img: '../../../assets/images/capelania-hospitalar.png',
      capelania: 'Capelania Hospitalar',
      texto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio blanditiis eaque quis. Harum numquam iste necessitatibus beatae earum quaerat nisi cupiditate velit odio sequi illo, qui molestiae exercitationem totam tenetur id veniam, eaque vero? Ipsum maxime similique quas distinctio sit sunt excepturi deserunt asperiores harum omnis aliquam aliquid, aperiam quos!',
    },
    {
      img: '../../../assets/images/foto-escolar.png',
      capelania: 'Capelania Escolar',
      texto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio blanditiis eaque quis. Harum numquam iste necessitatibus beatae earum quaerat nisi cupiditate velit odio sequi illo, qui molestiae exercitationem totam tenetur id veniam, eaque vero? Ipsum maxime similique quas distinctio sit sunt excepturi deserunt asperiores harum omnis aliquam aliquid, aperiam quos',
    },
    {
      img: '../../../assets/images/foto-prisao.png',
      capelania: 'Capelania Prisional',
      texto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio blanditiis eaque quis. Harum numquam iste necessitatibus beatae earum quaerat nisi cupiditate velit odio sequi illo, qui molestiae exercitationem totam tenetur id veniam, eaque vero? Ipsum maxime similique quas distinctio sit sunt excepturi deserunt asperiores harum omnis aliquam aliquid, aperiam quos!',
    },
  ];

  imagesGalery: any[] = [
    {
      img: '../../../assets/images/cursos-fotos 1.png',
      alt: 'Curso ministrado pela OCEB',
    },
    {
      img: '../../../assets/images/cursos-foto4 2.png',
      alt: 'Curso ministrado pela OCEB',
    },
    {
      img: '../../../assets/images/cursos-fotos2 1.png',
      alt: 'Curso ministrado pela OCEB',
    },
    {
      img: '../../../assets/images/foto4-galeria 2.png',
      alt: 'Curso ministrado pela OCEB',
    },
  ];
}
