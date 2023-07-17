import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent {
  gridApi: any;
  columnApi: any;

  constructor(private apiService : ApiserviceService) {
  }

  public rowData: any;
  public columnData: any = [{
    "headerName":"Id",
    "field":"id"
  },
  {
    "headerName":"Title",
    "field":"title",
    "sortable": "true",
    "filter": "true"
  },
  {
    "headerName":"Description",
    "field":"description"
  },
  {
    "headerName":"Price",
    "field":"price",
    "sortable": "true"
  },
  {
    "headerName":"DiscountPercentage",
    "field":"discountPercentage",
    "sortable": "true"
  },
  {
    "headerName":"Rating",
    "field":"rating"
  },
  {
    "headerName":"Stock",
    "field":"stock"
  },
  {
    "headerName":"Brand",
    "field":"brand"
  },
  {
    "headerName":"Category",
    "field":"category"
  },
  {
    "headerName":"Thumbnail",
    "field":"thumbnail"
  },
  {
    "headerName":"Images",
    "field":"images"
  }
];

  ngOnInit() {
    this.apiService.getData().subscribe(data => {
      this.rowData = data.products;
    })
  }

  onGridReady(e:any) {
    this.gridApi = e.api;
    this.columnApi = e.columnApi;
  }
}
