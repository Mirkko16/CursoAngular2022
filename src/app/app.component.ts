import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  title = 'Primer App en ANGULAR'; 
  public  ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void {
    this.ArregloTarjetas=[
      {titulo:'Video1',subtitulo:'Subtitulo1',image:"https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000"},
      {titulo:'Video2',subtitulo:'Subtitulo2',image:"https://img.wattpad.com/cc4eb1c5196982145e7a98475c6374d071469f7f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f44743562417468506b514f5961673d3d2d39352e313634343265643862373638383630323237383232343331313433372e6a7067?s=fit&w=720&h=720"},
      {titulo:'Video3',subtitulo:'Subtitulo3',image:"https://i.redd.it/j2ex7z8tyqf21.jpg"},
    ]
  }

}
