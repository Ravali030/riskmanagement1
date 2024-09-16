sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagement1/risks/test/integration/FirstJourney',
		'riskmanagement1/risks/test/integration/pages/RisksList',
		'riskmanagement1/risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagement1/risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);