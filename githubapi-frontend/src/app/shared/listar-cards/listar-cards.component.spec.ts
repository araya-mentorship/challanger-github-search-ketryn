import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserProfileComponent } from '../page/user-profile/user-profile.component';
import { ServiceService } from '../service/service.service';

import { ListarCardsComponent } from './listar-cards.component';

describe('ListarCardsComponent', () => {
  let component: ListarCardsComponent;
  let fixture: ComponentFixture<ListarCardsComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };
  let serviceMock: ServiceService;
  let routerMock: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarCardsComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        UserProfileComponent,
        {
          provite: Router,
          useValue: {
            navigate: jasmine.createSpy(),
          },
        },
        { provide: ActivatedRoute, useValue: {} },
        {
          provite: Router,
          useValue: mockRouter,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarCardsComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    serviceMock = TestBed.inject(ServiceService);
    routerMock = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve exibir uma lista de perfil de usuario', () => {
    const login: string = 'ketryn';
    routerMock.navigate = jasmine.createSpy();
    component.redirect(login);

    expect(routerMock.navigate).toHaveBeenCalled();
  });
});
