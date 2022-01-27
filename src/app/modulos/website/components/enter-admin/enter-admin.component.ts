import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enter-admin',
  templateUrl: './enter-admin.component.html',
  styleUrls: ['./enter-admin.component.css']
})
export class EnterAdminComponent implements OnInit {

  constructor(private rotas: Router) { }

  ngOnInit(): void {
  }

  entrarAdmin()
  {
    this.rotas.navigateByUrl('/admin')
  }

}
