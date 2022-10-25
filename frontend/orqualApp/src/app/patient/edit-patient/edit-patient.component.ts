import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiPatientService } from 'src/app/services/api-patient.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiPracticienService } from 'src/app/services/api-practicien.service';



@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  editPatientForm !: FormGroup;
  p: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiPatientService: ApiPatientService,
    private apiPracticienService: ApiPracticienService,
    private dialogRef: MatDialogRef<EditPatientComponent>,


    @Inject(MAT_DIALOG_DATA) public editPatientData: any,
  ) { }


  ngOnInit(): void {

    this.editPatientForm = this.formBuilder.group({
      id: [''],
      surname: [''],
      name: [''],
      birth_date: [''],
      next_appointment: [''],
      created_at: [''],
      practicien: ['']
    });


    this.apiPracticienService.getAllPracticiens().subscribe(res => {
      this.p = res;
    });

    if (this.editPatientData) {
      this.editPatientForm.controls['id'].disable();
      this.editPatientForm.controls['id'].setValue(this.editPatientData.id);
      this.editPatientForm.controls['surname'].setValue(this.editPatientData.surname);
      this.editPatientForm.controls['name'].setValue(this.editPatientData.name);
      this.editPatientForm.controls['birth_date'].setValue(this.editPatientData.birth_date);
      this.editPatientForm.controls['next_appointment'].setValue(this.editPatientData.next_appointment);
      this.editPatientForm.controls['created_at'].setValue(this.editPatientData.created_at);
    }

    console.log(this.editPatientData);
  }

  //edit anmd update Patient
  updatePatient() {
    this.apiPatientService.updatePatient(this.editPatientForm.value, this.editPatientData.id).subscribe({
      next: (res) => {
        alert("Patient ajoutE avec succes");
        this.editPatientForm.reset();
        this.dialogRef.close('update');

      }
    })
    location.reload();
  }


}
