import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speechSearch'
})
export class SpeechSearchPipe implements PipeTransform {

  transform(speeches: any, searchFilter: any): any {
    if (searchFilter === '' || searchFilter === null) return speeches

    return speeches.filter(function(filteredSpeeches) {
    	let isValid = false
    	filteredSpeeches.keywords.forEach(subString => {
    		if (subString.toLowerCase() === searchFilter.toLowerCase()) { isValid = true }
    	})
    	return (filteredSpeeches.author.toLowerCase().includes(searchFilter.toLowerCase()) || 
    					filteredSpeeches.content.toLowerCase().includes(searchFilter.toLowerCase()) || isValid)
    })
  }

}


