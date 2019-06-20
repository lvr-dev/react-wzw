import { Person } from './Person';

export interface Employee extends Person {
    id: number,
    lastName: string,
    firstName?: string,
    prefix?: string,
    client: string,
    since: string,
    until: string,
    status: string,
    visible: boolean
}