import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent{ 

  @Input()
  isFavorite =  false;
  @Output()
  change = new EventEmitter();

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }
}
