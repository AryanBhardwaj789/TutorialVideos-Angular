/* app.component.ts 
AUTHOR: Aryan Bhardwaj
CREATED: 2024-03-18
UPDATED: 2024-03-30
*/

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

// constant
declare let Logger: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // properties
  videos: any;

  constructor(private http: HttpClient, private dialog: MatDialog) {
    Logger.init(); // Initializing logger
    Logger.enable(); // Enable logging

    // fetch JSON locally
    const URL = "assets/videos_aryanbhardwaj.json";
    http.get(URL).subscribe({
      // success
      next: json => {
        this.videos = json;
        Logger.print("Loaded JSON: " + this.videos.length);
      },
      // failed
      error: error => {
        Logger.print(error.message);
        this.videos = [];
      }
    });
  }

  openVideo(index: number): void {
    if (index >= 0 && index < this.videos.length) {
      const videoUrl = this.videos[index].url;
      window.open(videoUrl, "_blank");
      Logger.print("Opening video: " + videoUrl);
    } else {
      Logger.print("Invalid index: " + index);
    }
  }

  getAvatarUrl(video: any): string {
    if (video && video.avatarUrl) {
      return video.avatarUrl;
    } else {
      // Return a default avatar icon URL
      return "assets/debugger_profile.png";
    }
  }

  openDialog(video: any): void {
    this.dialog.open(MyDialogComponent, {
      width: '250px',
      data: { video }
    });
  }

}
