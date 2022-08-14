import { Component, OnInit } from '@angular/core';
import { TimelineElement } from '../model/timeline-element';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education: TimelineElement[];

  constructor() {
    this.education = [
      {
        header: "BTech Computer Engineering | VJTI, Mumbai | 9.64",
        date: "July 2016 - June 2020",
        image: "../../assets/VJTI.png",
        // icon: PrimeIcons.BRIEFCASE,
        // iconBackground: "#3b82f6",
        description: "Relevant Coursework - \n • Data Structures \n • Algorithm Design \n • Databases \n • Operating Systems \n • Machine Learning \n • Object-Oriented Programming \n • Data Communication and Networking \n • Open Source Technologies \n • Blockchain Technology \n • Cryptography and Network Security \n • Mathematics and Statistics \n • Data Mining and Data Warehousing \n • Cloud Computing",
      },
      {
        header: "Diploma in Cyber Law | Asian School of Cyber Laws & The government Law College, Mumbai",
        date: "June 2017 - May 2018",
        image: "../../assets/ASCL.jpeg",
        description: "Relevant Coursework - \n • Fundamentals of Cyber Law \n The concept of Cyber Law and covers the Legislative, Judicial, Quasi-judicial, Investigative and International Cyber Law Framework. \n E-commerce-Legal issues Electronic Contracts and the technical and legal issues relating to Digital Signatures.\n • Intellectual Property Issues & Cyber space \n Computer Software & Copyright Law, Software Licenses, Computer Databases & the Law, Domain Names & the Law, Trademark issues in Cyberspace and Semiconductor Layout & Design Law.\n • Cyber Crime Law in India \n The legal issues pertaining to Cyber Frauds, Computer Source Code, Cyber Pornography, Cyber Terrorism, Data Privacy & confidentiality, Digital Signature, Freedom of speech, Information & Traffic Data, Intermediaries, Malware, Unauthorised Access and Violation of privacy.",
      },
      {
        header: "HSC | Ramnivas Ruia Jr. College | 95.23%",
        date: "July 2014 - June 2016",
        image: "../../assets/Ruia.png",
        description: "• Vocational Subject- Computer Science (99%) \n Studied Computer Science I: Software (C++, basic Data Structures, basics of Operating Systems and Web development) \n Computer Science II: Hardware (Basic of Microprocessors and Microcontrollers, 8085 Microprocessor with its organization, instruction set, programming of 8085) \n • Stood first among girls with a total score of 95.23%, earning the Meritorious Student Scholarship for Higher Education. \n • Activities and societies: Organizing committee (Fine Arts) for Utsav AarohanActivities and societies: Organizing committee (Fine Arts) for Utsav Aarohan",

      },
      {
        header: "SSC | I.E.S's V. N. Sule Guruji | 95.80%",
        status: "",
        date: "June 2008 - June 2014",
        image: "../../assets/IES.png",
        description: "",
      }
    ];
  }
  ngOnInit(): void {
  }

}
