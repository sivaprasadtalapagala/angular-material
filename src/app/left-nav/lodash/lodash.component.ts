import { Component } from '@angular/core';
import { debounce, map } from 'lodash';
@Component({
  selector: 'app-lodash',
  templateUrl: './lodash.component.html',
  styleUrls: ['./lodash.component.scss']
})
export class LodashComponent {



constructor(){

  // Example usage of lodash debounce
const debouncedFunction = debounce(() => {
  // Code to execute after debounce delay
}, 300);

// Example usage of lodash map
const array = [1, 2, 3];
  const doubledArray = map(array, (value) => value * 2);

  console.log(doubledArray); // Output: [2, 4, 6]
}





}
