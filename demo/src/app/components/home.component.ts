import {Component} from '@angular/core';
import {IOption} from 'ng-select';
import {OptionService} from '../services/option.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class Home {

    version: string = 'beta.6';

    countries: Array<IOption> = this.optionService.getCountries();
    singleSelectValue: string = 'NL';
    multiSelectValue: Array<string> = ['BE', 'LU', 'NL'];

    constructor(
        private optionService: OptionService
    ) {}

    onOptionsListScrollDown() {
        console.log('load remote data');
    }

    onSearchInputChanged(value: any) {
        console.log('search value :', value);
    }
}
