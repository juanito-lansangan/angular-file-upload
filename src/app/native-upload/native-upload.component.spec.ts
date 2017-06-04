import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeUploadComponent } from './native-upload.component';

describe('NativeUploadComponent', () => {
  let component: NativeUploadComponent;
  let fixture: ComponentFixture<NativeUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
