import { Injectable } from "@angular/core";
import { UsersService } from "./UsersService.service";

@Injectable()
export class CounterService {
    activeToInactiveCount = 0;
    inactiveToActiveCount = 0;

    constructor(private usersService: UsersService) {
        this.usersService.onSetActive.subscribe(
            () => this.inactiveToActiveCount++
        );

        this.usersService.onSetInactive.subscribe(
            () => this.activeToInactiveCount++
        );
    }
}
