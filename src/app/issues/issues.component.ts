import { Component, OnInit } from '@angular/core';
import { IssuesService } from './issues.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issues = [];
  issuesStates = { Issue: 0, Solved: 0, Unsolved: 0 };
  countersArray = ['Issue', 'Solved', 'Unsolved', this.issuesStates];

  fetchingDataVars = { isFetchingError: false, isFetchingDone: false, issuesArrayLength: 0 };

  searchQueries = [
    { label: 'ID', value: 'id', type: 'text' },
    { label: 'Body', value: 'body', type: 'text' },
  ];
  filterQueries = [{
    label: 'Label', value: 'Label', type: 'select',
    selectOptions: [
      { label: 'Issue in the app', value: 'app' },
      { label: 'Issue in the car', value: 'car' },
      { label: 'Issue in the service', value: 'service' },
      { label: 'Others', value: 'others' }
    ]
  },
  { label: 'Registration Date', value: 'date', type: 'date' },
  ];

  constructor(private issuesService: IssuesService) { }

  ngOnInit() {
    this.issuesService.getAllIssues().subscribe(issues => {
      this.fetchingDataVars.isFetchingError = false;
      // console.log(issues);
      // console.log(typeof issues);
      this.issues = [...issues];

      if (this.issues.length > 0) {
        this.fetchingDataVars.issuesArrayLength = this.issues.length;
        this.issuesStates.Issue = this.issues.length;
        // this.handlingGraphData(); // there is no graph
        // this.gettingIssuesStates(); //company won't be banned
      }

      this.fetchingDataVars.isFetchingDone = true;

    }, error => {
      this.fetchingDataVars.isFetchingError = true;

      console.log(error.message);

    });
  }

}
