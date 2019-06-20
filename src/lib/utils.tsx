import { Person } from '../types/Person';

export const getFullName = function getFullName(person: Person) {
    if (person.firstName && person.prefix) {
        return `${person.firstName} ${person.prefix} ${person.lastName}`;
    }
    if (person.firstName) {
        return `${person.firstName} ${person.lastName}`;
    }
    return person.lastName;
};