export default interface Employee {
    id: string,
    lastName: string,
    firstName?: string,
    prefix?: string,
    client: string,
    since: string,
    until: string,
    status: string,
    visible: string
}
