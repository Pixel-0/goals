import { Injectable } from '@angular/core';
import { Goals } from "../goals";

@Injectable({
  providedIn: 'root' // we declare that this service should be created by the root application injector
})
  export class GoalService{
  getGoals(){
    return Goals;
  }
  constructor() { }
}
