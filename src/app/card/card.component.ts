import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image?:string;
  public Titulo:string="Angular con interpolacion";
  @Input() dataEntrante:any;
  constructor(){ }

  ngOnInit(): void {
    this.image ="https://cdn.ngamers.net/monthly_2018_12/IMG-20180927-WA0085.jpg.1e0c52d9817394ea427f099b42375fcf.jpg"   
  }

}
