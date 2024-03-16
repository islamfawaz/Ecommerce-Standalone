import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent  implements OnInit{
  constructor(private _CartService:CartService){}
  allOrder:any;
  ngOnInit(): void {
    this._CartService.getAllOrder().subscribe({
      next:(response)=>{
         console.log(response);
         this.allOrder=response.data;
      }
    })
  }
}
