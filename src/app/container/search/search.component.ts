import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchText:string= '';

@Output()
searchChange:EventEmitter<string> = new EventEmitter<string>();

@ViewChild('inputTextSearch') searchInputElement: ElementRef;

onClickSearch(){
  // console.log(value.value);
  this.searchText= this.searchInputElement.nativeElement.value;
  this.searchChange.emit(this.searchText);
}

}
