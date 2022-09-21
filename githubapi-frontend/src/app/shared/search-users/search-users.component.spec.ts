import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from '../service/service.service';

import { SearchUsersComponent } from './search-users.component';

describe('SearchUsersComponent', () => {
  let component: SearchUsersComponent;
  let fixture: ComponentFixture<SearchUsersComponent>;
  let serviceMock: ServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchUsersComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    serviceMock = TestBed.inject(ServiceService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Quando metodo enviar for chamado e o nome de pesquisa for diferente null, então ele deve emitir o valor Output search', () => {
    const name = 'ketryn';

    spyOn(component.formUser, 'getRawValue');
    spyOn(component.search, 'emit');

    component.formUser.get('name')?.setValue(name);
    component.enviar();

    expect(component.formUser.valid).toBeTrue();
    expect(component.formUser.getRawValue).toHaveBeenCalled();
    expect(component.search.emit).toHaveBeenCalledWith(name);
  });

  fit('Quando metodo enviar for chamado e o nome de pesquisa for diferente igual a null, então ele não deve emitir o valor Output search', () => {
    const name = null;

    spyOn(component.formUser, 'getRawValue').and.returnValue({ name });
    spyOn(component.search, 'emit');

    component.formUser.get('name')?.setValue(name);
    component.enviar();

    expect(component.formUser.valid).toBeFalse();
    expect(component.formUser.getRawValue).toHaveBeenCalled();
    expect(component.search.emit).not.toHaveBeenCalledWith(name);
  });
});
