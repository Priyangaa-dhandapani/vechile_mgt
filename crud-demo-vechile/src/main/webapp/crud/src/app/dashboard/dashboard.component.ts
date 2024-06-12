import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CrudEnum } from '../enums/crud.enum';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})



export class DashboardComponent implements OnInit, AfterViewInit {
  title = CrudEnum.dashBoardHead;
  editTitle = CrudEnum.dashBoardeditHead;
  selectorDropDown = [{ id: '1', desc: 'Owner Name' }, { id: '2', desc: 'Make' }, { id: '3', desc: 'Model' }, { id: '4', desc: 'Vin' }, { id: '5', desc: 'Year' }]

  dashBoardform = this.builder.group({
    ownerName: this.builder.control('', Validators.required),
    make: this.builder.control('', Validators.required),
    model: this.builder.control('', Validators.required),
    vehicleYear: this.builder.control('', Validators.required),
    vin: this.builder.control('', Validators.required),
    id: this.builder.control('')
  })
  DropValue: any;

  displayedColumns: string[] = ['position', 'ownerName', 'Make', 'Model', 'Year', 'VIN', 'ACTION'];
  public dataSource!: MatTableDataSource<PeriodicElement>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {

  }

  constructor(private builder: FormBuilder, public _service: VechileService) {

  }


  ngOnInit(): void {
    this.DropValue = this.selectorDropDown[0].desc;
    this.getAllRecords();
  }

  getAllRecords() {
    let obj = {
      field: null,
      value: null
    }
    this._service.getProducts(obj).subscribe((data) => {

      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })

  }

  SelectedChange(event: any) {
    let value = event.target.innerText;
    this.DropValue = value;
  }

  searchText(event: any) {
    console.log(event.target.value);
    let targetVal = event.target.value;

  }

  handleSave() {

    if (this.dashBoardform.invalid) {
      return;
    }
    this._service.postData(this.dashBoardform.value)
      .subscribe(response => {
        this.getAllRecords();
        this.dashBoardform.reset();
      })
  }

  handleClear() {
    this.dashBoardform.reset();
  }

  handleEdit(selectElem: any) {
    this.dashBoardform.get('ownerName')?.setValue(selectElem.ownerName);
    this.dashBoardform.get('make')?.setValue(selectElem.make);
    this.dashBoardform.get('vehicleYear')?.setValue(selectElem.vehicleYear);
    this.dashBoardform.get('vin')?.setValue(selectElem.vin);
    this.dashBoardform.get('model')?.setValue(selectElem.model);
    this.dashBoardform.get('id')?.setValue(selectElem.id);
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleDelete(selectElem: any) {
    console.log(selectElem, "dele");

    this._service.deleteData(selectElem.id).subscribe((data) => {
      console.log('data-res', data);
      this.getAllRecords();
    })

  }

  handleSearch() {

  }



}



export interface PeriodicElement {
  ownerName: string;
  Make: string;
  Model: string;
  vehicleYear: string;
  vin: string;
  ACTION: string;
}

