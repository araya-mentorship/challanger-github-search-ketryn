import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ServiceService } from '../service/service.service';

import { UserDescriptionComponent } from './user-description.component';

describe('UserDescriptionComponent', () => {
  let component: UserDescriptionComponent;
  let fixture: ComponentFixture<UserDescriptionComponent>;
  let serviceMock: ServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDescriptionComponent],
      imports: [HttpClientModule, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    serviceMock = TestBed.inject(ServiceService);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Quando o metodo userProfile for chamado deve mostra perfil do usuario ', () => {
    const dadoUser: any = component.dataUser;

    spyOn(component, 'userProfile').and.callThrough();
    spyOn(serviceMock, 'getUserProfile').and.callThrough();

    component.userProfile(dadoUser);
    serviceMock.getUserProfile(dadoUser);

    expect(component.userProfile).toHaveBeenCalled();
    expect(component.dataUser).toBeNull();
    expect(serviceMock.getUserProfile).toHaveBeenCalledWith(dadoUser);
  });

  it('Quando metodo enviar for chamado e for diferente null, então ele deve emitir o valor dataUser', () => {
    const dadoUser = component.dataUser;
    spyOn(component.userDescription, 'emit');

    component.perfilUserDescription();

    expect(component.userDescription.emit).toHaveBeenCalledWith(dadoUser);
  });
});
