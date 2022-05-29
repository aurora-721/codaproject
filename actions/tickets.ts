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

// export const trigerTicketSentFn: ActionFn = async (context: Context, event: Event) => {
// 	// let blockEvent = event as BlockEvent;
// 	let txEvent = event as WebhookEvent;
// 	console.log(txEvent);
// 	let iface = new ethers.utils.Interface(TicketNFT.abi);
// 	// const result = iface.decodeEventLog("TicketSent", txEvent.logs[0].data, txEvent.logs[0].topics);
// 	// console.log(result);
// }