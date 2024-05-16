import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnDestroy, OnChanges {

  isChild: boolean = true;
  name: string = "";
  constructor() {
    console.log("Parent Constructor is called");
  }

  ngOnInit(): void {
    console.log("Parent OnInit is called");
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Parent OnChanges is called");
  }

  ngDoCheck(): void {
    console.log("Parent DoCheck is called");
  }

  // ngAfterContentInit(): void {
  //   console.log("in Parent After Content Init");
   
  // }

  // ngAfterContentChecked(): void {
  //   console.log("in Parent After Content Checked");
  // }

  // ngAfterViewInit(): void {
  //   console.log("in Parent After View Init");
  // }

  // ngAfterViewChecked(): void {
  //   console.log("in Parent After View Checked");
  // }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
