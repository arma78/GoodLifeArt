import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
@Component({
  selector: 'app-ejuboxplayer',
  templateUrl: './ejuboxplayer.component.html',
  styleUrls: ['./ejuboxplayer.component.scss']
})
export class EjuboxplayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  // tslint:disable-next-line:member-ordering
  msaapDisplayTitle = true;
  // tslint:disable-next-line:member-ordering
  msaapDisplayPlayList = true;
  // tslint:disable-next-line:member-ordering
  msaapPageSizeOptions = [2, 4, 6];
  // tslint:disable-next-line:member-ordering
  msaapDisplayVolumeControls = true;
  // tslint:disable-next-line:member-ordering
  msaapDisplayRepeatControls = true;
  // tslint:disable-next-line:member-ordering
  msaapDisplayArtist = false;
  // tslint:disable-next-line:member-ordering
  msaapDisplayDuration = false;
  // tslint:disable-next-line:member-ordering
  msaapDisablePositionSlider = true;

// Material Style Advance Audio Player Playlist
// tslint:disable-next-line:member-ordering
msaapPlaylist: Track[] = [
  {
    title: 'Audio One Title',
    link: 'Link to Audio One URL',
    artist: 'Audio One Artist',
    duration: 200
  },
  {
    title: 'Audio One Title',
    link: 'Link to Audio One URL',
    artist: 'Audio One Artist',
    duration: 200
  },
  {
    title: 'Audio One Title',
    link: 'Link to Audio One URL',
    artist: 'Audio One Artist',
    duration: 200
  }
]


}
