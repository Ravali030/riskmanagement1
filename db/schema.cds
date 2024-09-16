namespace riskmanagement1;

using { BusinessPartnerA2X } from '../srv/external/BusinessPartnerA2X.cds';

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    managed,
    temporal
}
from '@sap/cds/common';

entity Risks
{
    key ID : UUID;
    title : String(100);
    Prio : String(5);
    descr : String(100);
    impact : Integer;
    criticality : Integer;
    mitigations : Association to many Mitigations on mitigations.risks = $self;
    Bussiness_Supplier : Association to one BusinessPartnerA2X.A_BusinessPartner;
}

entity Mitigations
{
    key ID : UUID;
    createdAt : String(100);
    createdBy : String(100);
    description : String(100);
    owner : String(100);
    timeline : String(100);
    risks : Association to one Risks;
}
