import { Injectable } from '@angular/core';
import {AbstractItemsService} from "./abstract-items.service";
import{Item} from "../../_model/Item";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractItemsService {

items:Item[];

  constructor() { 
  	super();
  	this.items=[
  	  	 new Item("comprar carne"),
  		 new Item("ir a la verduleria"),
  		 new Item("comprar carbon")
  	]
  }

  getItems():Observable <Item[]>{
  	return new Observable((observable) =>{
  		observable.next(this.items);
  		observable.complete();
  	})


  };

  remove(item : Item):Observable<Item[]>{
  	 	return new Observable((observable)=>{
  	 		console.log("borrado desde el servicio");
  	 		this.items = this.items.filter(it => it !== item);
  	 		observable.next(this.items);
  	 		observable.complete();
  });
  	
  }

    addItem(item : Item):Observable<Item[]>{
       return new Observable((observable)=>{
        this.items.push(item);
         observable.next(this.items);
         observable.complete();
  });
    
  }
}
