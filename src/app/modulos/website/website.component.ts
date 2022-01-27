import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { InsertLocationComponent } from './components/insert-location/insert-location.component';
import { EnterAdminComponent } from './components/enter-admin/enter-admin.component';
@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  constructor(private dialogService: NbDialogService) {
  }

  ngOnInit(): void {
  }

  openAdmin() {
    this.dialogService.open(EnterAdminComponent, {
    });
  }

  openLocation() {
    this.dialogService.open(InsertLocationComponent, {
    });
  }

  refreshPage(){
    window.location.reload();
  }

}
