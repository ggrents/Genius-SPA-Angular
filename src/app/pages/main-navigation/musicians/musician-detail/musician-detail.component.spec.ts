import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianDetailComponent } from './musician-detail.component';

describe('MusicianDetailComponent', () => {
  let component: MusicianDetailComponent;
  let fixture: ComponentFixture<MusicianDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicianDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicianDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
