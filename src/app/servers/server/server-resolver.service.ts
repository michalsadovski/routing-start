import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ServersService} from '../servers.service';

interface Server {
  id: number,
  name: string,
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class ServerResolver implements Resolve<Server> {
  constructor(private serverService: ServersService) {
  }

  resolve(
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    routerStateSnapshot: RouterStateSnapshot
  ): Observable<Server> | Promise<Server> | Server {
    return this.serverService.getServer(+activatedRouteSnapshot.params['id']);
  }


}
