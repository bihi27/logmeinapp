import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookDetails = [];

  constructor(private http: Http, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const bookId = this.route.snapshot.queryParams['id'];
    this.http.get('https://www.googleapis.com/books/v1/volumes/'
      + bookId + '?key=AIzaSyDvavdq0tujZSNeBjHM4YvuV_2Vr1JAj8A')
      .subscribe((respose: Response) => {
          const data = respose.json();
          this.bookDetails.push(data);
        }
      );
  }
}
