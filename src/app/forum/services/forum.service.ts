import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../entities/forumCP.component';
import { Topic } from '../entities/topic.component';

@Injectable()
export class PostService {

  private postsUrl: string;
  private addPostUrl : string
  private deletePostUrl : string
  private getAllTopics :string
  private addTopicUrl : string
  private deleteTopicUrl : string
  private deleteAllPosts : string
  private updatePostUrl : string

  constructor(private http: HttpClient) {
    this.postsUrl = 'http://localhost:9999/post/getPosts';
    this.addPostUrl = 'http://localhost:9999/post/addpost';
    this.updatePostUrl = 'http://localhost:9999/post/updatePost/';
    this.deletePostUrl = 'http://localhost:9999/post/delete/';
    this.addTopicUrl = 'http://localhost:9999/topic/addtopic';
    this.deleteTopicUrl = 'http://localhost:9999/topic/delete/';
    this.deleteAllPosts = 'http://localhost:9999/post/deleteAll';
    this.getAllTopics = 'http://localhost:9999/topic/getTopic';
  }

  public findAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  public save(post: Post) {
    return this.http.post<Post>(this.addPostUrl, post);
  }

  public deletePost(id : any) : Observable<Post> {
    return this.http.delete<Post>(this.deletePostUrl+id)

  }
  public findAllTopics() : Observable<Topic[]> {
    return this.http.get<Topic[]>(this.getAllTopics);
  }
  public updatePost(post : Post , id: number) : Observable<Topic> {
    console.log(id)
    return this.http.put<Topic>(this.updatePostUrl+id , post)
  }
  public addTopic(topic: Topic) {
    return this.http.post<Topic>(this.addTopicUrl, topic);
  }

  public deleteTopics(id: any) {
    return this.http.delete<Topic>(this.deleteTopicUrl+id)
  }
}