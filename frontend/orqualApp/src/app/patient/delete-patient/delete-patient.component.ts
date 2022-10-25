import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiPatientService } from 'src/app/services/api-patient.service';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent implements OnInit {

  pat: any;
  constructor(
    private apiPatientService: ApiPatientService,
    private dialogRef: MatDialogRef<DeletePatientComponent>,

    @Inject(MAT_DIALOG_DATA) public deletePatientData: any,

  ) { }

  ngOnInit(): void {
    this.apiPatientService.getAllPatients().subscribe(res => {
      this.pat = res;
    });
  
  }

  



}
