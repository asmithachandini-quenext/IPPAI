import { AfterViewInit, Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements AfterViewInit{
  constructor(private newsService: NewsService) {}
  
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(): void {
    this.newsService.injectWidget('10682518-5c5b-4188-835c-ffbf2fee97aa', 'news-widget');
    this.newsService.injectWidget('59e4879e-d121-4f08-8046-5018c9492f1b', 'podcast-widget');
  }
}
