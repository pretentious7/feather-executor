import {
	readContract,
	interactWriteDryRun,
	interactWrite,
	createContractFromTx,
	interactRead
} from 'smartweave';

import {Machine} from 'xstate';

import {ExecutableStates} from './executable';

const promiseMachine = Machine({
	id: 'promise',
	initial: 'pending',
	states: {
		pending: {},
		resolved: {},
		rejected: {}
	}
});

interface ExecutableProcessor {
	context: {executable: ExecutableStates};
	states: {
		pending: {}
	};
}

interface FeatherContract {
	contract_src: string;
	contract_ver: string;
}
