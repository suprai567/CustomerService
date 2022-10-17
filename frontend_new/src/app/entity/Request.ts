export enum ServiceType {
    LIVECHAT = 'LIVECHAT',
    CHATBOX = 'CHATBOX',
    PHONE = 'PHONE',
    EMAIL = 'EMAIL',
    SELFSERVICE = 'SELFSERVICE',
    SOCIALMEDIA = 'SOCIALMEDIA'
}

export default class Request {
    constructor(public ticketId:number,public customerName: String, public summary: String, public status: String, public assignedGroup: String, public serviceType: ServiceType, public createdDate: Date) { }
}