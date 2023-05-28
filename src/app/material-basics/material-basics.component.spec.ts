import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialBasicsComponent } from './material-basics.component';

describe('MaterialBasicsComponent', () => {
  let component: MaterialBasicsComponent;
  let fixture: ComponentFixture<MaterialBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialBasicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
