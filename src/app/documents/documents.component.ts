import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents: { title: string; links: { label: string; url: string }[] }[] = [];
  private apiUrl = 'https://9b96-106-222-203-105.ngrok-free.app/api/draft_regulations';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.apiUrl, { responseType: 'text' }).subscribe(
      response => {
        try {
          const jsonData = JSON.parse(response); // Parse JSON dynamically
          if (Array.isArray(jsonData)) {
            this.processData(jsonData);
          } else {
            console.error('Unexpected API response format:', jsonData);
          }
        } catch (error) {
          console.error('Invalid JSON response:', response);
        }
      },
      error => console.error('Error fetching documents:', error)
    );
  }

  processData(data: any[]): void {
    this.documents = data.map((doc: any) => {
      // Extract title dynamically
      const title = typeof doc?.Document === 'string'
        ? doc.Document.split(/\d+\./)[0].trim()
        : 'Unknown Document';

      // Extract labels dynamically
      const labels: string[] =
        typeof doc?.Document === 'string'
          ? (doc.Document.match(/(\d+\.\s*[^0-9]+)/g) as string[])?.map((item: string) =>
              item.replace(/^\d+\.\s*/, '').trim()
            ) || []
          : [];

      // Extract URLs dynamically (assuming it's an array)
      const urls: string[] = Array.isArray(doc?.URL) ? doc.URL : [];

      // Map labels with URLs safely
      const links = labels.slice(0, urls.length).map((label: string, index: number) => ({
        label,
        url: urls[index]
      }));

      return { title, links };
    });
  }

  openLink(url: string): void {
    if (url) window.open(url, '_blank');
  }
}
