import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AudioRecordingService } from './audio-recording.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'ngx-voice-recorder',
  templateUrl: './voice-recorder.component.html',
  styleUrls: ['./voice-recorder.component.scss']
})
export class VoiceRecorderComponent implements OnDestroy {
  isRecording = false;
  recordedTime: any;
  blobUrl: any;
  teste: any;

  @Output() saveRecord = new EventEmitter<any>();
  @Output() clearAudioInput = new EventEmitter<void>();

  constructor(
    private audioRecordingService: AudioRecordingService,
    private sanitizer: DomSanitizer
  ) {
    this.audioRecordingService
      .recordingFailed()
      .subscribe(() => (this.isRecording = false));
    this.audioRecordingService
      .getRecordedTime()
      .subscribe(time => (this.recordedTime = time));
    this.audioRecordingService.getRecordedBlob().subscribe(data => {
      this.teste = data;
      this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(data.blob)
      );
    });
  }

  startRecording() {
    if (!this.isRecording) {
      this.isRecording = true;
      this.audioRecordingService.startRecording();
    }
  }

  abortRecording() {
    if (this.isRecording) {
      this.isRecording = false;
      this.audioRecordingService.abortRecording();
    }
  }

   stopRecording()  {
    if (this.isRecording) {
      this.audioRecordingService.stopRecording();
      this.audioRecordingService.getRecordedBlob().pipe(take(1)).subscribe(data => {
        this.teste = data;
        this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(data.blob)
        );
        this.isRecording = false;
        this.saveRecord.emit(this.teste);
      });
    }
  }

  clearRecordedData() {
    this.blobUrl = null;
    this.teste = null;
    this.clearAudioInput.emit();
  }

  ngOnDestroy(): void {
    this.abortRecording();
  }

  download(): void {
    const url = window.URL.createObjectURL(this.teste.blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = this.teste.title;
    this.saveRecord.emit(this.teste);
    // link.click();
  }
}
