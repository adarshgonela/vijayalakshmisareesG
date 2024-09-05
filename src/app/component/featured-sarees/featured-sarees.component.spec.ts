import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedSareesComponent } from './featured-sarees.component';

describe('FeaturedSareesComponent', () => {
  let component: FeaturedSareesComponent;
  let fixture: ComponentFixture<FeaturedSareesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedSareesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedSareesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
