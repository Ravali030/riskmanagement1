export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/riskmobileapp/Services/riskmanagement1Service.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/riskmobileapp/Actions/riskmanagement1Service/Risks/Risks_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/riskmobileapp/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Risks'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/riskmobileapp/Actions/riskmanagement1Service/Risks/Risks_UpdateEntity.action');
    }
}