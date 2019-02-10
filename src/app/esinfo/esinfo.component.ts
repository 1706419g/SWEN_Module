import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esinfo',
  templateUrl: './esinfo.component.html',
  styleUrls: ['./esinfo.component.css']
})
export class EsinfoComponent implements OnInit {
  staffs = [ {
    "id":62732,
    "name":"Sally Mar",
    "citi":"Singaporean",
    "duty":"Room Maintenance",
    "dob":"10/10/1950",
    "bank":"121-13412-5",
    "add":"11 Riverdale #09-53",
    "cont":"8232 3241"
  },{
    "id":12125,
    "name":"Richard Lo",
    "citi":"Singaporean",
    "duty":"General Maintenance",
    "dob":"09/11/1970",
    "bank":"153-21342-9",
    "add":"33 Sembawang #03-21",
    "cont":"9821 4823"
  },
  {
    "id":23467,
    "name":"Benny Johnson",
    "citi":"PR",
    "duty":"Estate Maintenence",
    "dob":"27/04/1990",
    "bank":"143-53262-3",
    "add":"22 Tampines Road #05-12",
    "cont":"9345 3435"
  },
  {
    "id":89424,
    "name":"Harry Tan",
    "citi":"Singaporean",
    "duty":"Room Maintenance",
    "dob":"14/02/1999",
    "bank":"174-63584-2",
    "add":"55 Bedok Ave #02-11",
    "cont":"9242 8435"
  },
  {
    "id":72329,
    "name":"John Doe",
    "citi":"PR",
    "duty":"Security",
    "dob":"23/01/1983",
    "bank":"132-44426-3",
    "add":"12 Sorra Street #10-21",
    "cont":"9283 2342"
  },
  {
    "id":84738,
    "name":"Ali Samad",
    "citi":"Singaporean",
    "duty":"Security",
    "dob":"07/02/1970",
    "bank":"173-64674-7",
    "add":"89 Paya Lebar #02-33",
    "cont":"8234 7546"
  },

  ];

  logs = [ {
    "id":1912479,
    "desc":"Added new staff // 'Sally Mar'",
    "date":"12/02/2019",
    "time":"22:32:45"
  },
  {
  "id":1912478,
  "desc":"Updated Details // 'John Doe'",
  "date":"11/02/2019",
  "time":"20:33:23"
},{
"id":1912477,
"desc":"Deleted Staff /// 'Franco Do'",
"date":"09/02/2019",
"time":"18:02:45"
},
]
  constructor() { }

  ngOnInit() {
  }

  addStaff(){
    confirm("Add new Staff?");
  }

  deleteStaff(){
    confirm("Delete this staff data?")
  }

  updateStaff(){
    confirm("Save changes?");
    window.location.reload()
  }

}
