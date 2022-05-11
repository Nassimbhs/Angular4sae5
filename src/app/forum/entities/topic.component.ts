import { Component, Inject, Injectable } from "@angular/core";
@Component({
    selector: 'app-comment',
    templateUrl : './entity.component.html'

})

@Injectable()
export class Topic {
    id!: number;
    nameTopic : string = "";

    constructor(@Inject(String) args) {
        this.nameTopic = args.nameTopic
    }
}