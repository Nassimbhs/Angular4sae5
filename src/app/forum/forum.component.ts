import { MatTableDataSource } from '@angular/material/table';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Ng2SmartTableModule , LocalDataSource} from 'ng2-smart-table';
import { Post } from './entities/forumCP.component';
import { PostService } from './services/forum.service';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Topic } from './entities/topic.component';
import { BehaviorSubject } from 'rxjs';
import { formatDate } from '@angular/common';
import { ToastService } from './toasts/toast-service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

const states = ['yes','no'];

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit , OnDestroy {
  closeResult = '';
  addPostForm! : FormGroup;
  addTopicForm : FormGroup;
  selectTopicForm : FormGroup;
  changeTopic :String = ""
  topicID;
  source = new LocalDataSource() 
  _postsAll = []
  topics : Topic[] = []
  isLoaded$ = new BehaviorSubject<boolean>(true);
  datasource;
  myDate = new Date();
  newDate: string;
  isTopicEmpty = true
  listPosts :any[];
  p: number = 1;

  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
  isEmptyData = true;
  likedPosts = 0 ;
  dislikedPosts = 0
  constructor(private postService: PostService, private _fb: FormBuilder , private cd: ChangeDetectorRef,
     private modalService: NgbModal, public toastService: ToastService) {
    this.newDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  }
  model: any;
  subject: any;

  getPosts() {
    this.postService.findAll().subscribe(res => {
      console.log(res);
      this.listPosts = res
    });
  }

  
  search2() {
  
      this.listPosts = this.listPosts.filter(res => {  
        return res.subject.toLocaleLowerCase().match(this.subject.toLocaleLowerCase());
        
      });  
    }
 
  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? states
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }
  validation_messages = {
    'subject': [
      { type: 'required', message: 'Title is required' },
      { type: 'minlength', message: 'Title must be at least 5 characters long' },
      { type: 'maxlength', message: 'Title cannot be more than 25 characters long' },
    ],
    'content': [
      { type: 'required', message: 'Description is required' },
      { type: 'minlength', message: 'Description must be at least 5 characters long' },
    ],
    'comments': [
      { type: 'required', message: 'Price is required' },
    ],
  }
  data = [
    
  ];
  settings = {
  
    edit: {
      editButtonContent: 'edit',
      saveButtonContent: 'update',
      cancelButtonContent: 'cancel',
      confirmSave: true,

    },
    delete: {
      deleteButtonContent: 'delete',
      confirmDelete: true,
    },
    columns: {
      subject: {
        title: 'Subject'
      },
      content: {
        title: 'Content'
      },
      comments: {
        title: 'Comment'
      }, 
      datePost: {
        title: 'Posted date',
        editable: false,
        addable: false,
      },
      likes: {
        title: 'Likes' ,
        editor: {
          type: 'checkbox',
          config: {
            true: 'true',
            false: 'false',
          },
        },
      }
    }
  };
  ngOnInit(): void {
    console.log(this.datasource)
    this.addTopicForm = this._fb.group({
      nameTopic : ['',  Validators.compose([Validators.required])],
    })
    this.addPostForm= this._fb.group({  
      subject: ['',  Validators.compose([Validators.required])],  
      content: ['',  Validators.compose([Validators.required])]  ,
      comments: ['',Validators.compose([Validators.required])],
      likes : ['', Validators.compose([Validators.required])]
  });  
  this.selectTopicForm = this._fb.group({
    topics: [[],  Validators.compose([Validators.required])],
  })
    
    this.postService.findAllTopics().subscribe(data => {
      this.topics = data ;

    });
  }
  reload() {
    console.log('reloading')
    setTimeout(() =>{this.refreshData()});
  }
  reloadTopic() {
    console.log('reloading')
    setTimeout(() =>{this.refreshDataTopic()});
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("change detected")
    this.isLoaded$.next(false);
    this.cd.detectChanges();
    this.refreshData()
    this.isLoaded$.next(true);
  }
  refreshData(){
    this.dislikedPosts = 0
    this.likedPosts = 0
    this.isLoaded$.next(true);
    this.datasource = new MatTableDataSource()
    this._postsAll = []
    this.postService.findAll().subscribe(data => {
      data.forEach(e =>{
        let postDt
        if (e.datePost) {
          let dt = e.datePost.split('T')
          postDt = dt[0]
        }
        else {
          postDt = e.datePost
        }
        
        if (e.topic.id === this.topicID) {
          if(e.likes[0].liked) {
            console.log('liked')
            this.likedPosts = this.likedPosts + 1
          }
          else {
            console.log("disliked")
            this.dislikedPosts = this.dislikedPosts +1
          }
          let post = new Post({
            id :e.id, 
            subject : e.subject, 
            content : e.content, 
            datePost : postDt,
            comments : e.comments[0].content, 
            likes : e.likes[0].liked,
            topic : e.topic.nameTopic })
          this._postsAll.push(post)
        }
      }
    
   ) 
   console.log(this.likedPosts , this.dislikedPosts)
   this.datasource = new MatTableDataSource(this._postsAll);
    this.data = this.datasource._data._value

    if (this.data.length === 0) {
      console.log("true")
      this.isEmptyData = true 
    } else {
      this.isEmptyData = false
    }
    this.data = [...this.data]
   
    });
  }

  refreshDataTopic () {
    this.postService.findAllTopics().subscribe(data => {
      console.log(data)
      this.topics = data ;

    });
  }
  ngOnDestroy(): void {
    this.toastService.clear();
  }
  selectChange(e:any) {
    console.log(e)
    this.changeTopic = e.nameTopic;
    this.topicID = e.id;
    this.reload()
    this.isTopicEmpty = false
  }
    onSubmit(e :any) {
      console.log(e)
    }
    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        console.log(result)
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
      console.log(this.closeResult)
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
    addPost(event:any) {
      let nb = 0;
      console.log(this._postsAll)
      this._postsAll.forEach(el=> {
        if (event.subject === el.subject) {
          nb = nb + 1 ;
        }
      })
      if (nb === 0) {
        let dt ;
        if (event.likes ) {
            dt = new Post({
            subject : event.subject,
            content : event.content,
            comments : [{content : event.comments, dateComment: this.newDate}],
            likes : [{liked: true}],
            topic : {id : this.topicID},
            datePost : this.newDate
          })
        }
        else {
            dt =new Post({
            subject : event.subject,
            content : event.content,
            comments : [{content : event.comments, dateComment: this.newDate}],
            likes : [{liked: false}],
            topic : {id : this.topicID},
            datePost : this.newDate
          })
        }
        
        console.log(dt);
        if (window.confirm('Are you sure you want to add new post?')) {
          this.postService.save(dt).subscribe(data => { 
              console.log(data)
          this.reload()
          
          } )
        } else {
          event.confirm.reject();
        }
  
      }else {
        this.showDanger("Post already exists!")
      }
      
    }

    onEditPost(event:any) {
      console.log(event)
      let dt =  new Post({
        subject : event.newData.subject,
        content : event.newData.content,
        comments : [{content : event.newData.comments, dateComment: this.newDate}],
        likes : [{liked: event.newData.likes}],
        topic : {id : this.topicID},
        datePost : this.newDate
      })
        if (window.confirm('Are you sure you want to edit this post?')) {
          this.postService.updatePost(dt, event.data.id).subscribe(data => { 
              console.log(data)
             this.reload()

          } )
        } else {
          event.confirm.reject();
        }
      
     

    }

    onDeleteConfirm(event:any) {
      console.log(event.data.id);
      if (window.confirm('Are you sure you want to delete this post?')) {
        this.postService.deletePost(event.data.id).subscribe(data => { 
            console.log(data)
        } )
        event.confirm.resolve(event.newData);
      } else {
        event.confirm.reject();
      }
    }

    addTopic(e) {
      let nb = 0;
      console.log(e)
      this.topics.forEach(el=> {
        console.log(el)
        if (e.nameTopic === el.nameTopic) {
          nb = nb + 1 ;
        }
      })
      if (nb === 0) {
      console.log(e)
      this.postService.addTopic(e).subscribe(data => {
        console.log(data)
        this.reloadTopic()
      })
    }else {
      this.showDanger("topic already exists")
    }
    }


    onDeletePosts() {
      if (window.confirm('Are you sure you want to delete posts from this topic?')) {
        console.log(this.data)
        this.data.forEach(element => {
          this.postService.deletePost(element.id).subscribe(data => { 
            console.log(data)
            this.reload()
        } )
        });
    }
  }

  deleteSelectedTopics(e) {
    let topics = e.topics ;
    if (window.confirm('Are you sure you want to delete these topics?')) {
        topics.forEach(element => {
          this.postService.findAll().subscribe(data=> {
            data.forEach(dt => {
              if(dt.topic.id === element.id) {
                this.postService.deletePost(dt.id).subscribe(data => {
                  this.reload()
                })
              }
            })
            this.reloadTopic()
            
          })
       
    });
    this.delete(e.topics)
  }
  
        }
        delete(e) {
          console.log(e)
          this.reloadTopic()
          
          e.forEach(element => {
            this.postService.deleteTopics(element.id).subscribe(data => { 
              console.log(data)
              this.reloadTopic()
          });
          });
          this.reloadDataTopics(e)
        }

      reloadDataTopics(e) {
        setTimeout(() =>{this.refreshDataTopics(e)});
      }

      refreshDataTopics(e) {
        e.forEach(element => {
          console.log(element)
          this.postService.findAllTopics().subscribe(data => {
            data.filter(el=>{
              let id = el.id
              console.log(id!==element.id)
              return id !== element.id
            })
            console.log(data)
      
          });
        });
        
      }
      showDanger(e) {
        this.toastService.show(e,{ classname: 'bg-danger text-light', delay: 5000 });
      }
}
