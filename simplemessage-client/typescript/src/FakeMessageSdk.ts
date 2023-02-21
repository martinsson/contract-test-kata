import {MessageSdk} from "./SimpleMessageSdk";

export class FakeMessageSdk implements MessageSdk {
    private users = [{"email": "douglas.hofstadter", "id": 1},
        {"email": "billy.thekid", "id": 2},
        {"email": "magic.jordan", "id": 3}];

    private messages = [ { from: 'someone',
        id: '1',
        message: 'hello doug from LA!',
        to: 'douglas.hofstadter' }];

    async listMessages(): Promise<any> {
        return {messages: this.messages.reverse()}
    }


    async listUsers(): Promise<any> {
        return {
            users: this.users
        }
    }

    async sendMessage(to: string, message: string): Promise<void> {
        const user = this.users.find(u => u.email === to)
        if (!user) {
            throw new Error("unknown user")
        }
        const messageToAdd = {
            from: to,
            to,
            message,
            id: this.messages.length + ""
        }
        this.messages.push(messageToAdd)
        // this.messages.splice(0, 0, messageToAdd)
        return undefined;
    }
}