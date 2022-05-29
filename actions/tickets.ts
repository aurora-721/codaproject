import {
	ActionFn,
	Context,
	Event,
	TransactionEvent,
} from '@tenderly/actions';
import {ethers} from "ethers";

import TicketNFT from '../frontend/src/artifacts/contracts/TicketNFT.sol/TicketNFT.json'

export const ticketReservedFn: ActionFn = async (context: Context, event: Event) => {
	// let blockEvent = event as BlockEvent;
	let txEvent = event as TransactionEvent;
	console.log(txEvent);

	let iface = new ethers.utils.Interface(TicketNFT.abi);

	const result = iface.decodeEventLog("PlayerJoinedGame", txEvent.logs[0].data, txEvent.logs[0].topics);

	console.log(result);




}
