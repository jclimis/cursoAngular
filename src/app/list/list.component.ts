import { Component, OnInit } from '@angular/core';
import {Item } from "../../_model/Item";
import {MockItemsService} from "../_services/mock-items.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	items:Item[];
	//service: MockItemsService;

  constructor(private service: MockItemsService) {
/*  		this.items=[
  		 new Item("comprar carne"),
  		 new Item("ir a la verduleria"),
  		 new Item("comprar carbon")
  		]*/
  		//this.service = new MockItemsService();
  		this.service.getItems().subscribe(serviceItems =>{
  			this.items = serviceItems;
  		})
   }

  ngOnInit() {
  }
  onRemove(anItem){
   this.service.remove(anItem).subscribe(serviceItems =>{
  			this.items = serviceItems;
  })

}
}
