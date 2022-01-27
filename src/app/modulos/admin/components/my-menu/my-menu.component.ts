import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.css']
})
export class MyMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: NbMenuItem[] = [
    {
      title: 'Localização',
      icon: 'person-outline',
    },
    {
      title: 'Meu Perfil',
      icon: 'lock-outline',
    },
    {
      title: 'Configurações',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
    },
    {
      title: 'Sair',
      icon: 'unlock-outline',
    },
  ];

}
