import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-parcela-selection',
  templateUrl: './parcela-selection.component.html',
  styleUrls: ['./parcela-selection.component.css']
})
export class ParcelaSelectionComponent implements OnInit {

  private parcelas: any = [];
  private id_finca: string;

  constructor(private service:StorageService, private activedRoute:ActivatedRoute) {

    this.id_finca = this.activedRoute.snapshot.params.id_finca;
    
    this.service.getParcelas(this.id_finca).subscribe(
      data => {
        this.parcelas = data;
      },
      error => console.log(error)
    );
    
  }

  ngOnInit() {
  }

}
