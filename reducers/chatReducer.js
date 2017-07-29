const RTM = require('satori-sdk-js');

const endpoint = 'wss://open-data.api.satori.com';
const appkey = '2E8A29cd03cB6A6f9Ea8cdc1b22DCbe0';
const role = 'ah17-chat';
const roleSecretKey = '8ebF03F6F5f7C3ddb8fc4bC3fccEfF23';
const channel = 'ah17-chat';

const roleSecretProvider = RTM.roleSecretAuthProvider(role, roleSecretKey);

const rtm = new RTM(endpoint, appkey, {
	authProvider: roleSecretProvider,
});

const initialState = {
	subscription: rtm.subscribe(channel, RTM.SubscriptionMode.SIMPLE),
	channel,
	rtm
};

/* eslint-disable no-unused-vars */
export default (state = initialState, action) => state;
