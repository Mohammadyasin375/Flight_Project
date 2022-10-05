import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSuccesfullComponent } from './post-succesfull.component';

describe('PostSuccesfullComponent', () => {
  let component: PostSuccesfullComponent;
  let fixture: ComponentFixture<PostSuccesfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSuccesfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSuccesfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
