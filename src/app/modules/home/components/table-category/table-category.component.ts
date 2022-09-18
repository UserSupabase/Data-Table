import { Component, Input, OnInit } from '@angular/core';
import { Type, User } from 'src/app/core/interfaces/acount';

@Component({
  selector: 'app-table-category',
  templateUrl: './table-category.component.html',
  styleUrls: ['./table-category.component.scss']
})
export class TableCategoryComponent implements OnInit {

  @Input() public users!: User[];
  public Type = Type;

  constructor() {}

  public ngOnInit(): void {}

}
