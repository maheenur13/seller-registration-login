import React from 'react';
import CreateStore from '../../CreateStore/CreateStore';
import Frequent from '../../Frequent/Frequent';
import Help from '../../Help/Help';
import Selling from '../../Selling/Selling';
import SellOnZDrop from '../../SellOnZDrop/SellOnZDrop';
import Tools from '../../Tools/Tools';

const SellOnZDropRead = () => {
	return (
		<>
			<SellOnZDrop />
			<Selling />
			<Tools />
			<CreateStore />
			<Frequent />
			<Help />
		</>
	);
};

export default SellOnZDropRead;
