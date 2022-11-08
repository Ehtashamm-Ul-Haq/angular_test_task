import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatTab, MatTabLabel } from '@angular/material/tabs';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent implements OnInit {
  @Input() title!: string;

  @ViewChild(MatTab)
  public matTab!: MatTab;

  @ViewChild(MatTabLabel)
  public matTabLabel: any;

  constructor() { }

  ngOnInit(): void {
  }

}
