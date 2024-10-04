export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/riskmobileapp/Services/riskmanagement1Service.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/riskmobileapp/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Risks'
                },
                'OnSuccess': '/riskmobileapp/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/riskmobileapp/Actions/CloseModalPage_Cancel.action');
    }
}