import { Component, OnInit } from '@angular/core';
import { TableService } from '../../../../core/services/table/table.service';
import { User } from '../../../../core/interfaces/acount';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public users: User[] = [];
  public keysIncome!: number;
  public keysInvest!: number;
  public keysOutcome!: number;
  public keysLoan!: number;

  constructor(
    private tableService: TableService,
  ) {}

  public ngOnInit(): void {
    this.listUsers();
    this.lengthTypes();
  }

  public listUsers(): void {
    this.tableService
    .getAll()
    .subscribe(
      users => {
        this.users = users;
      }
    )
  }

  public lengthTypes(): void {
    this.tableService
    .getAll()
    .subscribe(
      users => {
        const user = this.users = users;
        const typeIncome =
        Object.keys(
          user.filter(itm => itm.type === 'income')
        ).length;
        const resIncome = this.keysIncome = typeIncome;
        const typeInves =
        Object.keys(
          user.filter(itm => itm.type === 'investment')
        ).length;
        const resInvest = this.keysInvest = typeInves;
        const typeOutcome =
        Object.keys(
          user.filter(itm => itm.type === 'outcome')
        ).length;
        const resOutcome = this.keysOutcome = typeOutcome;
        const typeLoan =
        Object.keys(
          user.filter(itm => itm.type === 'loan')
        ).length;
        const resLoan = this.keysLoan = typeLoan;
        const res = { resIncome, resInvest, resOutcome, resLoan }
        return res;
      }
    )
  }

}
