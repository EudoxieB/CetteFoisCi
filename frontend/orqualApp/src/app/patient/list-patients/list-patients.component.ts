import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiPatientService } from 'src/app/services/api-patient.service';
import { MatDialog } from '@angular/material/dialog';
import { EditPatientComponent } from '../edit-patient/edit-patient.component';
import { DeletePatientComponent } from '../delete-patient/delete-patient.component';
import { DeleteDialogService } from 'src/app/services/delete-dialog.service';




@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  patients: any;
  patientNull = ""
  displayedColumns: string[] = ['id', 'surname', 'name', 'birth_date', 'next_appointment', 'created_at', 'action'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private apiPatientService: ApiPatientService,
    private editPatientDialog: MatDialog,
    private deletePatientDialog: MatDialog,
    private deleteDialogService: DeleteDialogService) { }

  ngOnInit(): void {
    this.getAllPatients();


  }

  //get all patients
  getAllPatients() {
    this.apiPatientService.getAllPatients()
      .subscribe((res) => {
        console.log(res, "res==>");
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      })
  }

  // pop up for edit a patient
  editDialog(row: any) {
    this.editPatientDialog.open(EditPatientComponent, {
      width: '30%',
      data: row
    })
  };


  OnDelete(id: any) {
    this.deleteDialogService.openConfirmDeleteDialog()
      .afterClosed().subscribe(res => {
        if (res) {
          this.apiPatientService.deletePatient(id)
            .subscribe({
              next: (res) => {
                alert("Add Suvce")
              }
            })
          location.reload();
        }
      })
  }







  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


