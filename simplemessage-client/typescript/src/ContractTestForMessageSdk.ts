import {MessageSdk, SimpleMessageSdk} from "./SimpleMessageSdk";

export function contractTestForMessageSdk(messageSdk: MessageSdk) {
    it('should list users', async function () {
        const messages = await messageSdk.listUsers();
        expect(messages).toEqual({
            "users": [
                {"email": "douglas.hofstadter", "id": 1},
                {"email": "billy.thekid", "id": 2},
                {"email": "magic.jordan", "id": 3}]
        })
    });

    test('messages are undefined when nothing is posted', async () => {
        const messages = await messageSdk.listMessages();
        expect(messages).toHaveProperty("messages")
        let messageList = messages.messages;
        expect(messageList.length).toBeGreaterThanOrEqual(1)
        expect(messageList[messageList.length - 1]).toEqual({
            from: 'someone',
            id: '1',
            message: 'hello doug from LA!',
            to: 'douglas.hofstadter'
        })
    });

    test("stores messages to given user", async () => {
        await messageSdk.sendMessage("douglas.hofstadter", "hey you")
        const messages = await messageSdk.listMessages();
        const lastMessage = messages.messages[0]
        expect(lastMessage).toEqual(expect.objectContaining({
            from: 'douglas.hofstadter',
            message: 'hey you',
            to: 'douglas.hofstadter'
        }))
    })
    it('should fail gracefully', async function () {
        await expect(messageSdk.sendMessage("unknown.user", "does not reach")).rejects.toThrow(new Error("unknown user"))
    });
}