import { Component, OnInit, ElementRef, ViewChild, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName =this.nameInputRef.nativeElement.value;
    const ingAmout = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmout);
    this.ingredientAdded.emit(newIngredient);
  }

}
