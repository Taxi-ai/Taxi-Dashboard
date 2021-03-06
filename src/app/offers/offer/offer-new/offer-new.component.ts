import { Component, OnInit } from '@angular/core';
import { Offer } from '../../offer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OffersService } from '../../offers.service';

@Component({
  selector: 'app-offer-new',
  templateUrl: './offer-new.component.html',
  styleUrls: ['./offer-new.component.css']
})
export class OfferNewComponent implements OnInit {

  offer: Offer = {
    code: '',
    discount: 0,
    body: '',
    startingDate: new Date(),
    endingDate: new Date()
  };

  spin = false;


  constructor(private route: ActivatedRoute, private router: Router, private offersService: OffersService) { }

  ngOnInit(): void {

  }


  postNewOffer() {
    console.log(this.offer);
    this.spin = true;

    this.offersService.postNewOffer(this.offer).subscribe(data => {
      console.log(data);
      this.spin = false;

      this.router.navigate(['../'], { relativeTo: this.route });
    });

  }

}
