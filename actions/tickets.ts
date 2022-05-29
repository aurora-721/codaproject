import {
	ActionFn,
	Context,
	Event,
	TransactionEvent,
	WebhookEvent,
} from '@tenderly/actions';
import { ethers } from "ethers";

import TicketNFT from '../frontend/src/artifacts/contracts/TicketNFT.sol/TicketNFT.json'

export const ticketReservedFn: ActionFn = async (context: Context, event: Event) => {
	// let blockEvent = event as BlockEvent;
	let txEvent = event as TransactionEvent;
	console.log(txEvent);
	let iface = new ethers.utils.Interface(TicketNFT.abi);
	const result = iface.decodeEventLog("TicketReserved", txEvent.logs[0].data, txEvent.logs[0].topics);
	const axios = require('axios');
	const qs = require('qs');
	
	const data = qs.stringify({
		'address': result.buyer,
		'ticketId': result.ticketId
	});
	const config = {
		method: 'post',
		url: 'https://hook.integromat.com/koyie7sp5mdwoep8yw4uy6jrqn2qegwz',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: data
	};

	axios(config)
		.then(function (response: { data: any; }) {
			console.log(JSON.stringify(response.data));
		})
		.catch(function (error: any) {
			console.log(error);
		});

	console.log(result);
}

export const ticketSent123: ActionFn = async (context: Context, event: Event) => {
	// let blockEvent = event as BlockEvent;
	let txEvent = event as TransactionEvent;
	console.log(txEvent);
	let iface = new ethers.utils.Interface(TicketNFT.abi);
	const result = iface.decodeEventLog("TicketSent", txEvent.logs[1].data, txEvent.logs[1].topics);
	console.log(result);
}

export const trigerTicketSentFn: ActionFn = async (context: Context, event: Event) => {
	// let blockEvent = event as BlockEvent;
	let txEvent = event as WebhookEvent;
	console.log(txEvent);
	// let iface = new ethers.utils.Interface(TicketNFT.abi);
	// const result = iface.decodeEventLog("TicketSent", txEvent.logs[0].data, txEvent.logs[0].topics);
	// console.log(result);
}
