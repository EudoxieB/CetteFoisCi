import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePatientComponent } from '../patient/delete-patient/delete-patient.component';

@Injectable({
  providedIn: 'root'
})
export class DeleteDialogService {

  constructor(
    private deleteDialog: MatDialog
  ) { }

  openConfirmDeleteDialog() {
    return this.deleteDialog.open(DeletePatientComponent, {
      width: '400px',
      panelClass: 'confirm-dialog-container',
      disableClose: true
    });
  }
}
