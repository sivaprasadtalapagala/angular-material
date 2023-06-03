import { Component } from '@angular/core';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent {
  //first example 


  // title = 'app';

	// columnDefs = [
	// 	{headerName: 'Make', field: 'make' },
	// 	{headerName: 'Model', field: 'model' },
	// 	{headerName: 'Price', field: 'price'}
	// ];

	// rowData = [
	// 	{ make: 'Toyota', model: 'Celica', price: 35000 },
	// 	{ make: 'Ford', model: 'Mondeo', price: 32000 },
	// 	{ make: 'Porsche', model: 'Boxster', price: 72000 }
	// ];


  // second exapmle 

  // private gridApi: any;
  // private gridColumnApi: any;
  // columnDefs = [
  //   { headerName: 'ID', field: 'id' },
  //   { headerName: 'Name', field: 'name', editable: true },
  //   { headerName: 'Age', field: 'age', editable: true },
  //   { headerName: 'Email', field: 'email', editable: true }
  // ];
  // rowData = [
  //   { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
  //   { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
  //   { id: 3, name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
  //   // Add more dummy data rows as needed
  // ];
  // selectedRows: any[]=[];

  // onGridReady(params: any) {
  //   this.gridApi = params.api;
  //   this.gridColumnApi = params.columnApi;
  // }

  // onSelectionChanged() {
  //   this.selectedRows = this.gridApi.getSelectedRows();
  // }

  // deleteRows() {
  //   // Perform deletion logic here
  //   // ...
  //   console.log('Deleted rows:', this.selectedRows);
  // }



  //3rd example

  private gridApi: any;
  private gridColumnApi: any;
  columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'name', editable: true, checkboxSelection: true, filter: true },
    { headerName: 'Age', field: 'age', editable: true, checkboxSelection: true, filter: true },
    { headerName: 'Email', field: 'email', editable: true, checkboxSelection: true, filter: true }
  ];
  rowData = [
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
    { id: 4, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 5, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
    { id: 6, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 7, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
    { id: 8, name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
    { id: 9, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 10, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
    { id: 11, name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
    { id: 12, name: 'Bob Johnson', age: 35, email: 'bob@example.com' },

    // Add more dummy data rows as needed
  ];
  selectedRows: any[]=[];

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onSelectionChanged() {
    this.selectedRows = this.gridApi.getSelectedRows();
  }

  deleteRows() {
    // Perform deletion logic here
    // ...
    console.log('Deleted rows:', this.selectedRows);
  }

  toggleFilter(fieldName: string) {
    const column = this.gridColumnApi.getColumn(fieldName);
    column.setFilterActive(!column.isFilterActive());
  }

}
