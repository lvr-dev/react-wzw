import Employee from '../types/Employee';

export const getFullName = function getFullName(person: Employee) {
    if (person.firstName && person.prefix) {
        return `${person.firstName} ${person.prefix} ${person.lastName}`;
    }
    if (person.firstName) {
        return `${person.firstName} ${person.lastName}`;
    }
    return person.lastName;
};
