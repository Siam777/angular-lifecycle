import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() name: string = "";

  counter = 0;
  interval: any;

  @ContentChild('projectedContent') projectedContent: any;

  constructor() {
    console.log("Child Constructor is called");
  }

  ngOnInit(): void {
    console.log("Child OnInit is called");

    console.log('OnInit projected content - ' + this.projectedContent);

    // this.interval = setInterval(() => {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log("Child OnChanges is called");
  }

  ngDoCheck(): void {
    console.log("Child DoCheck is called");
    console.log("DoCheck projected content-" + this.projectedContent);
  }

  ngAfterContentInit(): void {
    console.log("in After Content Init");
    console.log("AfterContentInit projected content -" + this.projectedContent);
  }

  ngAfterContentChecked(): void {
    console.log("in After Content Checked");
  }

  ngAfterViewInit(): void {
    console.log("in Child After View Init");
  }

  ngAfterViewChecked(): void {
    console.log("in Child After View Checked");
  }

  ngOnDestroy(): void {
    //clearInterval(this.interval);
    console.log("Child OnDestroy is called");
  }
}
