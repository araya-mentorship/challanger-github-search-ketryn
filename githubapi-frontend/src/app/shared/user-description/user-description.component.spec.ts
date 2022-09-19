import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { UserDescriptionComponent } from './user-description.component';

describe('UserDescriptionComponent', () => {
  let component: UserDescriptionComponent;
  let fixture: ComponentFixture<UserDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDescriptionComponent],
      imports: [HttpClientModule, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
