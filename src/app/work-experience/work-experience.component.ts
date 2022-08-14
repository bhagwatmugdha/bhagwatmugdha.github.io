import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { TimelineElement } from '../model/timeline-element';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  workExperience: TimelineElement[];

  constructor() {
    this.workExperience = [
      {
        header: "Morgan Stanley | Sr. Technology Associate",
        date: "January 2022 - Present",
        image: "../../assets/Morgan-Stanley-Logo.jpg",
        description: "As a Sr. Technology Associate I collaborated with Finance users to redesign a legacy application, offering sereval upgrades in the revamp. I closely worked on project planning, designing, and successful execution in an Agile manner.",
      },
      {
        header: "Morgan Stanley | Technology Associate",
        date: "January 2021 - January 2022",
        image: "../../assets/Morgan-Stanley-Logo.jpg",
        description: "As a Technology Associate, I developed, enhanced web applications using Angular v12, whilst also performing code and unit testing for complex scope modules and projects. I reasearched and evaluated technologies with  Proof of Concept projects for building new design solutions. I leveraged Kafka for data movement from several data sources and for asynchronous data updates."
      },
      {
        header: "Morgan Stanley | Technology Analyst",
        date: "August 2020 - January 2021",
        image: "../../assets/Morgan-Stanley-Logo.jpg",
        description: "As a Technology Analyst I created solutions for automating request approval process leveraging Activiti BPMN 6.0 an open source workflow engine. \n I used my previous knowledge of UX designs to create screens to help the support teams replay any failed tasks, thereby reducing the manual intervention required.",
      },
      {
        header: "Amazon Lab 126 | SDE Intern",
        status: "",
        date: "May 2019 - July 2019",
        image: "../../assets/Amazon-Logo.jpeg",
        description: "I interned at Amazon Lab126, a research and development company under Amazon, as a Software Development Engineering Intern. \n I leveraged React, AWS Lambas to create a solution for the Connectivity Solutions Group to help convert a manual, time consuming proccess to an autmated web based solution readily usable by the end users saving countless hours. Using the web based solution I was able to create and manage locations, clusters of devices, along with a RBAC system to prevent and decrease risks of data leakage and breaches.",
      }
    ];
  }

  ngOnInit(): void {

  }
}

