import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public nav: Link[]=[
    {title: 'Acceuil', path:''},
    {title: 'Connexion', path:'auth'},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
