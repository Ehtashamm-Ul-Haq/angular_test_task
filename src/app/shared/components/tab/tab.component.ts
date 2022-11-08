import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ContentChildren,
  QueryList,
  ViewChild
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatTab, MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';

import { TabItemComponent } from '../tab-item/tab-item.component';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @ViewChild(MatTabGroup)
  public tabGroup!: MatTabGroup;

  @ViewChild(MatTab)
  public _blankTab!: MatTab;

  @ContentChildren(TabItemComponent)
  protected tabs!: QueryList<TabItemComponent>;

  /**
    * @description Background color of the tab group.
    */
  @Input()
  backgroundColor?: ThemePalette;
  /**
   * @description Theme color palette for the component.
   */
  @Input()
  color?: ThemePalette;
  /**
   * @description Disables the ripple effects for the whole tab group.
   */
  @Input()
  disableRipple?: boolean;

  /**
   * @description Whether the tab group should grow to the size of the active tab.
   * Applicable when the height of the tab group is fixed.When set to `false` a scrollbar appears.
   */
  @Input()
  dynamicHeight?: boolean;

  /**
   * @description Specifies the header position of the tabs.Accepts two values `above` & `below`.
   */
  @Input()
  headerPosition?: any;

  /**
   * @description Defines whether the label should appear `before` or `after` the icon.Defaults to after.
   */
  @Input() labelPosition?: 'before' | 'after' = 'after';

  /**
   * @description Sets the active tab.Index starts with zero.
   */
  @Input()
  selectedIndex?: number | null;

  /**
   * @description Event emitted when selectedIndex changes.
   */
  @Output()
  sqSelectedIndexChange?: EventEmitter<number> = new EventEmitter;
  /**
   * @description Event emitted when active tab changes.
   */
  @Output()
  sqSelectedTabChange?: EventEmitter<MatTabChangeEvent> = new EventEmitter;
  /**
   * @description Event emitted when focus is put on any of the tab labels in the header,
   * usually through keyboard navigation.
   */
  @Output()
  sqFocusChange?: EventEmitter<MatTabChangeEvent> = new EventEmitter;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  public ngAfterViewInit() {
    const matTabsFromQueryList = this.tabs.map((tab) => tab.matTab);
    // matTabsFromQueryList.unshift(this._blankTab);
    const list = new QueryList<MatTab>();
    list.reset([matTabsFromQueryList]);
    this.tabGroup._allTabs = list;
    this.tabGroup.ngAfterContentInit();
    this.cd.detectChanges();
  }

  /**
   * @hidden
   * Emits the sqSelectedIndexChange event.
   */
  selectedIndexChange(event: number) {
    (this.sqSelectedIndexChange as any).emit(event);
  }
  /**
   * @hidden
   *  Emits the sqSelectedTabChange event.
   */
  selectedTabChange(event: MatTabChangeEvent) {
    (this.sqSelectedTabChange as any).emit(event);
  }
  /**
   * @hidden
   * Emits the sqFocusChange event.
   */
  focusChange(event: MatTabChangeEvent) {
    (this.sqFocusChange as any).emit(event);
  }
}
