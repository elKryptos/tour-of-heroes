import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter<boolean>()
  enteredTitle: string = ''
  enteredSummary: string = ''
  enteredDate: string = ''

  onCancel() {
    this.cancel.emit()
    console.log("emesso " + this.cancel)
  }


}
