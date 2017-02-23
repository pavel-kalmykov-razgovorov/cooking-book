import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesFeedComponent } from './recipes-feed.component';

describe('RecipesFeedComponent', () => {
  let component: RecipesFeedComponent;
  let fixture: ComponentFixture<RecipesFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
