import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotComponent } from './page-not.component';

describe('PageNotComponent', () => {
  let component: PageNotComponent;
  let fixture: ComponentFixture<PageNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
