import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent {
  pdfUrl: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const fileName = params.get('fileName'); // Get PDF name from URL
      if (fileName) {
        this.pdfUrl = `assets/pdf/${fileName}#toolbar=0&navpanes=0&scrollbar=0`;
      }
    });
  }
}
