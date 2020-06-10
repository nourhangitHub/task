import { Routes } from '@angular/router';
import { routes } from '../app-routing.module';

describe('Routes config', () => {

  const testedRoutes: Routes = routes;

  it('should have at least 6 routes', () => {
    expect(testedRoutes.length).toBeGreaterThan(6);
  });

  it('should have route with HomeComponent', () => {
    expect(testedRoutes.find(r => r.component.name === 'HomeComponent')).toBeTruthy();
  });

  it('should have route with PathNotFoundComponent', () => {
    expect(testedRoutes.find(r => r.component.name === 'PageNotFoundComponent')).toBeTruthy();
  });

  it('should have route with ContactComponent', () => {
    expect(testedRoutes.find(r => r.component.name === 'ContactComponent')).toBeTruthy();
  });

  it('should have route with UsersListComponent', () => {
    expect(testedRoutes.find(r => r.component.name === 'UsersListComponent')).toBeTruthy();
  });

  it('should have route with UsersAddComponent', () => {
    expect(testedRoutes.find(r => r.component.name === 'UsersAddComponent')).toBeTruthy();
  });

  it('should have route with UsersEditComponent', () => {
    expect(testedRoutes.find(r => r.component.name === 'UsersEditComponent')).toBeTruthy();
  });

  it('should have 404 redirect route defined', () => {
    expect(testedRoutes.find(r => r.redirectTo === '/404')).toBeTruthy();
  });

  it('should have activation restrictions in user paths defined', () => {
    expect(testedRoutes.find(r => r.component.name === 'UsersEditComponent').canActivate.length).toBeGreaterThan(0);
    expect(testedRoutes.find(r => r.component.name === 'UsersListComponent').canActivate.length).toBeGreaterThan(0);
    expect(testedRoutes.find(r => r.component.name === 'UsersAddComponent').canActivate.length).toBeGreaterThan(0);
  });
});
