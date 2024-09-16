using { BusinessPartnerA2X } from './external/BusinessPartnerA2X.cds';

using { riskmanagement1 as my } from '../db/schema';

@path : '/service/riskmanagement1Svcs'
service riskmanagement1Service
{
    annotate Mitigations with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'RiskViewer' ] },
        { grant : [ '*' ], to : [ 'Riskmanager' ] }
    ];

    annotate Risks with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'RiskViewer' ] },
        { grant : [ '*' ], to : [ 'Riskmanager' ] }
    ];

    @odata.draft.enabled
    entity Risks as
        projection on my.Risks;

    @odata.draft.enabled
    entity Mitigations as
        projection on my.Mitigations;

    entity A_BusinessPartner as
        projection on BusinessPartnerA2X.A_BusinessPartner
        {
            BusinessPartner,
            Customer,
            Supplier,
            BusinessPartnerCategory,
            BusinessPartnerFullName,
            BusinessPartnerGrouping,
            BusinessPartnerName,
            BusinessPartnerUUID
        };
}

annotate riskmanagement1Service with @requires :
[
    'authenticated-user',
    'RiskViewer',
    'Riskmanager'
];
