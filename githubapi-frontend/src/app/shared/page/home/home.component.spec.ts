import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceService } from '../../service/service.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let serviceMock: ServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    serviceMock = TestBed.inject(ServiceService);
  });

  it('should create HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Quando o metodo searchUser for chamado deve realizar a busca do nome do usuario', () => {
    const name = component.inputValue;

    spyOn(serviceMock, 'list').and.callThrough();
    spyOn(component, 'searchUser').and.callThrough();

    component.searchUser(name);
    serviceMock.list(name);

    expect(component.searchUser).toHaveBeenCalled();
    expect(serviceMock.list).toHaveBeenCalledWith(name);
  });

  it('Quando o metodo list for chamado deve listar os nomes dos usuario', () => {
    const result = component.userResult;

    spyOn(serviceMock, 'list').and.callThrough();
    serviceMock.list('ketryn');

    expect(serviceMock.list).toHaveBeenCalledWith('ketryn');
    expect(result).toBeTruthy();
  });
});
