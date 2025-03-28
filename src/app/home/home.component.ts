import { AfterViewInit, Component, ElementRef, Sanitizer, SecurityContext, ViewChild } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  currentIndex = 0;
  interval: any;
  selectedTab: 'parleys' | 'events' | 'films' = 'parleys'; // Explicit type
  activeTab = 0;
  @ViewChild('newsList') newsList!: ElementRef;

  constructor(private newsService: NewsService, private sanitizer: Sanitizer, private router: Router) {
    this.autoSlide();

  }

  powerNews: string[] = [
    "Ujjwala scheme to enable women to cook in healthy environment: Assam Chief Minister",
    "India heavily investing in its gas distribution network: Dharmendra Pradhan",
    "Petrol pumps unable to exploit oil companies with daily rates",
    "India only country where energy demand will continue to rise: Pradhan",
    "India's fuel demand rose 0.4 percent in June",
    "Dharmendra Pradhan rejects demand for ethanol price hike",
    "Fundamental shift in oil supply, demand centres with tech disruption: Pradhan",
    "MHA backs CBI, endorses repatriation of a DIG associated with coal scam probe",
    "Court concludes hearing in coal case against ex-Jharkhand CM",
    "PPP Model could give a fillip to India's mineral exploration activity: Piyush Goyal",
    "Coal ministry mulls easing evacuation mode before third tranche of linkage auction",
    "Luminous aims at 35 per cent business from solar power in next 5 years",
    "Solar plants to power streetlights in UP",
    "Tangedco evacuates 5,079 MW of wind power, sets national record",
    "India Power hopes to supply power in West Bengal’s East Midnapore",
    "Approached lenders for NOC on slump sale of Mundra Power: Adani Power",
    "Commerce ministry defers decision on Adani's Mundra power transfer",
    "Power projects may get their very own ‘Aadhaar’ identity",
    "NLC India invests big money into renewable energy",
    "UP’s electricity quest may hold the key to Indian power sector revival",
    "Govt may seek SBI Capital Markets’ aid to resolve stressed power assets",
    "Adani Power’s Mundra plant slump sale lacks lenders’ NOC",
    "Renewable energy long-term demand outlook is positive: ICRA",
    "Adani Power slump sale of 4,600 MW Mundra plant in Gujarat deferred",
    "Greenko to raise $1 billion through dollar bonds route",
    "Wind, solar will be cheapest power source in G20 countries by 2030, says Greenpeace study",
    "Government revises price of appliances under UJALA post GST",
    "Delhi Lt Governor for enhancing capacity of waste-to-energy plants",
    "India emerging as front-runner in fight against climate change: World Bank",
    "Waste-to-energy plant will be a new problem for Gurgaon, say greens and RWAs",
    "NITI Aayog suggests tax sops, viability gap funding for eco-labelled products",
    "Piyush Goyal urges states to clear arrears of renewable energy companies",
    "HPCL raises USD 500 mn via bonds issue in foreign markets",
    "Petrol pump dealers defer protest against daily price revision till month-end",
    "Dharmendra Pradhan meets Lebanon, Russia Energy Ministers at WPC",
    "IOC, LanzaTech ink Rs 350-cr pact to build first off gas-to-bioethanol unit",
    "ONGC Videsh to bid in Lebanon gas field auction",
    "HC moved against petrol pump strike",
    "Gujarat Gas stock rated ‘Sell’ by Motilal Oswal, puts target price at Rs 697",
    "Indian Oil to import US crude for first time, delivery in October",
    "Singareni signs pact with Karnataka Power Corp to supply 81 lakh tons of coal",
    "Coal scam: SC appoints four more officers to probe ex-CBI chief Ranjit Sinha case",
    "Thermal power rates to stay under stress",
    "Tata Steel's Noamundi first iron ore mine with solar power plant in India",
    "Karnataka: Round-the-clock power for 1,260 model villages in a year",
    "Tamil Nadu seeks entire 2,000 MW power from Kudankulam 3, 4 units",
    "No nuclear power for states that oppose it: Power minister",
    "Greenko Energy to raise up to $1 billion via dollar bonds",
    "Tata Power-CDPQ platform in talks to buy DB Power assets",
    "Falling renewable power tariffs could worsen bad loan problems for banks",
    "Ujjwala scheme to enable women to cook in healthy environment: Assam Chief Minister",
    "India heavily investing in its gas distribution network: Dharmendra Pradhan",
    "Petrol pumps unable to exploit oil companies with daily rates",
    "India only country where energy demand will continue to rise: Pradhan",
    "India's fuel demand rose 0.4 percent in June",
    "Dharmendra Pradhan rejects demand for ethanol price hike",
    "Fundamental shift in oil supply, demand centres with tech disruption: Pradhan",
    "MHA backs CBI, endorses repatriation of a DIG associated with coal scam probe",
    "Court concludes hearing in coal case against ex-Jharkhand CM",
  ];

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(): void {
    this.startAutoScroll();
    this.newsService.injectWidget('10682518-5c5b-4188-835c-ffbf2fee97aa', 'news-widget');
    this.newsService.injectWidget('59e4879e-d121-4f08-8046-5018c9492f1b', 'podcast-widget');
  }

  startAutoScroll() {
    const newsList = this.newsList.nativeElement;
    let scrollSpeed = 50; // Adjust scroll speed

    setInterval(() => {
      if (newsList.scrollTop + newsList.clientHeight >= newsList.scrollHeight) {
        newsList.scrollTop = 0; // Reset to the start when it reaches the bottom
      } else {
        newsList.scrollTop += 1; // Scroll up smoothly
      }
    }, scrollSpeed);
  }

  images = [
    'assets/images/banner6.jpg',
    'assets/images/banner1.jpg',
    'assets/images/banner4.jpg',
    'assets/images/banner3.jpg',
    'assets/images/banner2.jpg'
  ];

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  autoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  services = [
    { title: 'KNOWLEDGE EVENTS' },
    { title: 'RESEARCH AND REPORTS' },
    { title: 'POLICY RECOMMENDATIONS' }
  ];

  openPdf(fileName: string) {
    const url = `/view-pdf/${fileName}`;
    window.open(url, '_blank'); // Opens in a new tab
  }
  
  tabs = ["POWER NEWS", "ARTICLES", "WATTS OF WISDOM", "VIDEO"];

  videos = {
    parleys: [
      { url: 'https://www.youtube.com/embed/video1' },
      { url: 'https://www.youtube.com/embed/video2' },
      { url: 'https://www.youtube.com/embed/video3' },
      { url: 'https://www.youtube.com/embed/video4' }
    ],
    events: [
      { url: 'https://www.youtube.com/embed/video5' },
      { url: 'https://www.youtube.com/embed/video6' },
      { url: 'https://www.youtube.com/embed/video7' },
      { url: 'https://www.youtube.com/embed/video8' }
    ],
    films: [
      { url: 'https://www.youtube.com/embed/video9' },
      { url: 'https://www.youtube.com/embed/video10' },
      { url: 'https://www.youtube.com/embed/video11' },
      { url: 'https://www.youtube.com/embed/video12' }
    ]
  };

  setActiveTab(index: number) {
    this.activeTab = index;
  }

  changeTab(tab: 'parleys' | 'events' | 'films') {
    this.selectedTab = tab;
  }

  viewMore() {
    console.log('View More clicked for:', this.selectedTab);
  }

  getSafeUrl(url: string) {
    return this.sanitizer.sanitize(SecurityContext.URL, url);
  }

  gotoRPR() {
    window.open('/rpr', '_blank');
  }
  
}
