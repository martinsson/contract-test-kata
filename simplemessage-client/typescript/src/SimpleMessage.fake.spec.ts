// interact with server
// http://localhost:8080/:userId/messages
// and user id 1

import {contractTestForMessageSdk} from "./ContractTestForMessageSdk";
import {FakeMessageSdk} from "./FakeMessageSdk";

describe('Simple message api contract tests', () => {
    let messageSdk = new FakeMessageSdk();
    contractTestForMessageSdk(messageSdk);
});

