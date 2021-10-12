import React from 'react';
import NeedHelp from '../../atoms/NeedHelp/NeedHelp';
import Policies from '../../atoms/Policies/Policies';

const NeedHelpAndPolicies = () => {
	return (
		<div className="mt-5 mb-5 d-flex flex-wrap policyAndHelp justify-content-md-start justify-content-center align-items-center">
			<div className="mr-md-5">
				<Policies />
			</div>
			<div>
				<NeedHelp />
			</div>
		</div>
	);
};

export default NeedHelpAndPolicies;
