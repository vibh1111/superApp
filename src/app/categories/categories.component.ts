import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  templateUrl: './categories.component.html',
  imports: [RouterLink],
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
   
  selectedCategories: string[] = []; 
  displayError:boolean=false;

  select(movieName: string) {
    const index = this.selectedCategories.indexOf(movieName);
    if (index === -1) {
      this.selectedCategories.push(movieName); 
      this.displayError = false;
    } else {
      this.selectedCategories.splice(index, 1);
    }
    console.log('Selected Movies:', this.selectedCategories);
  }
  checking(){
    const index=this.selectedCategories.length;
    if(index>=3){
      console.log('you can go to next page');
    }else{
      this.displayError=true;
      console.log("youu have to select minimum 3 categories");

    }
  }
  removing(movieName:string){
    const index=this.selectedCategories.indexOf(movieName);
    if(index!=-1){
      this.selectedCategories.pop();
    }
  }

  submitingCategories(){
    // localStorage.setItem("Category",JSON.stringify(this.selectedCategories));
    localStorage.setItem('Category', JSON.stringify(this.selectedCategories));
    console.log('Categories submitted to local storage:', this.selectedCategories);
  }
}
