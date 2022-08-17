import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  constructor() { }

  canDeactivate(canComponentDeactivate: CanComponentDeactivate,
                activatedRouteSnapshot: ActivatedRouteSnapshot,
                currentStateSnapshot: RouterStateSnapshot,
                nextStateSnapshot?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return canComponentDeactivate.canDeactivate()
  }

}
