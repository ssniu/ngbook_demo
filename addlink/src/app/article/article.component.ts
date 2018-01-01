import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  article: Article;

  constructor() {
    this.article = new Article('angular link','http://google.com', 10);
   }

  ngOnInit() {
  }

  voteUp(): boolean{
      this.article.voteUp();
      return false;//prevent the default refresh of browser
  }

  voteDown(): boolean {
      this.article.voteDown();
      return false;
  }

}

export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes: number){
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp(){
        this.votes += 1;
    }
    voteDown(){
        this.votes -= 1;
    }
}
