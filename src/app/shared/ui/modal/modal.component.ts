import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
})
export class ModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}

  @Input() message: string;
  @Input() body: string;

  @Output() confirmationResponse: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {}

  dismissModal() {
    this.activeModal.close(false);
  }
}
