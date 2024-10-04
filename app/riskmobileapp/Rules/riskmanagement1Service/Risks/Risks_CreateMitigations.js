export default function CreateRelatedEntity(clientAPI) {
    if (clientAPI.getODataProvider('/riskmobileapp/Services/riskmanagement1Service.service').isDraftEnabled('Risks')) {
        let readLink = clientAPI.binding['@odata.readLink'];
        return clientAPI.executeAction({
            'Name': '/riskmobileapp/Actions/riskmanagement1Service/Risks/Risks_CreateMitigations.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/riskmobileapp/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Risks',
                        'ReadLink': readLink
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/riskmobileapp/Actions/riskmanagement1Service/Risks/Risks_CreateMitigations.action');
    }
}