export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/riskmobileapp/Services/riskmanagement1Service.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/riskmobileapp/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Risks'
                },
                'OnSuccess': '/riskmobileapp/Actions/riskmanagement1Service/Risks/NavToRisks_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/riskmobileapp/Actions/riskmanagement1Service/Risks/NavToRisks_Edit.action');
    }
}