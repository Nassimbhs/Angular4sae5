import { Component, Inject, Injectable } from "@angular/core";
@Component({
    selector: 'app-comment',
    templateUrl : './entity.component.html'

})

@Injectable()
export class Post {
    id!: number;
    subject!: string;
    content!: string;
    photo!: number;
    datePost: string;
    comments : any ;
    likes : boolean ; 
    topic : any ;

    constructor(@Inject(String) args) {
        this.id = args.id
        this.subject = args.subject;
        this.content = args.content;
        this.datePost = args.datePost;
        this.comments = args.comments ;
        this.likes = args.likes;
        this.topic = args.topic
    }
}