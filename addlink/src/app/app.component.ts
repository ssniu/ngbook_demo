import { Component } from '@angular/core';
import { Article } from './article/article.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor(){
      this.articles = [
          new Article('angulr 3', 'http://angular33.net', 3),
          new Article('fullname', 'http://google.com', 2)
      ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): void{
      this.articles.push(new Article(title.value, link.value, 0));
      title.value = '';
      link.value = '';
  }

  /*
  sortedArticles(): Article[] {
  return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
}
  */
}
