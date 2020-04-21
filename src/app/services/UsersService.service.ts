import { EventEmitter } from "@angular/core";

export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    onSetInactive = new EventEmitter<void>();
    onSetActive = new EventEmitter<void>();

    setUserActive (id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.onSetActive.emit();
    }

    setUserInactive (id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.onSetInactive.emit();
    }
}
