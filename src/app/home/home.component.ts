import { Component, OnInit } from '@angular/core';
import { DownloadService } from 'app/services/download.service';
import * as THREE from 'three';
import { OBJLoader } from "three-obj-loader";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  protected tableData1;
  protected files;
 
  constructor(private downloadService:DownloadService) {

    
  }
  ngOnInit() {
    // get files 
    this.downloadService.getAllFiles().subscribe(
      (data:any[])=>{
        console.log("got data :",data);
        this.files = data;
      }
    );

    setInterval(()=>{
      this.downloadService.getAllFiles().subscribe(
        (data:any[])=>{
          console.log("got data :",data);
          this.files = data;
        }
      );
    },2000)
    
    this.tableData1 = {
      headerRow: [ 'File', 'Download'],

  };
}





 saveFile (file) {
   console.log("downloading");
   
   this.downloadService.downloadFile(file.url).subscribe(
     data=> {
       console.log("downloaded file: ",data);
       
      if (data != null && navigator.msSaveBlob)
      return navigator.msSaveBlob(new Blob([data], { type: data.type }), file.name);
    var url = window.URL.createObjectURL(new Blob([data], {type: data.type},));
 
    //  window.URL.revokeObjectURL(url);
    window.open(url,file.name);
     }
   )


    }







}
