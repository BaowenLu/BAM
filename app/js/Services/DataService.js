angular.module('BAMApp.dataService').service('dataService', function () {
	var _dataObject = Data;

	return _dataObject;
});


var Data =
{
	Current:0,

	SubRegionDef:

		[
		  {
		     ID:1
		    ,Name:"Snowy Mountains"
		  },
		  {
		     ID:2
		    ,Name:"Inglewood Sandstones"
		  },
		  {
		     ID:3
		    ,Name:"Moonie-Barwon Interfluve"
		  },
		  {
		     ID:4
		    ,Name:"Northern Basalts"
		  },
		  {
		     ID:5
		    ,Name:"Northern Outwash"
		  },
		  {
		     ID:6
		    ,Name:"Pilliga Outwash"
		  },
		  {
		     ID:7
		    ,Name:"Pilliga"
		  },
		  {
		     ID:8
		    ,Name:"Liverpool Plains"
		  },
		  {
		     ID:9
		    ,Name:"Liverpool Range"
		  },
		  {
		     ID:10
		    ,Name:"Talbragar Valley"
		  },
		  {
		     ID:11
		    ,Name:"Narrandool"
		  },
		  {
		     ID:12
		    ,Name:"Barrier Range"
		  },
		  {
		     ID:13
		    ,Name:"Mootwingee Downs"
		  },
		  {
		     ID:14
		    ,Name:"Scopes Range"
		  },
		  {
		     ID:15
		    ,Name:"Barrier Range Outwash"
		  },
		  {
		     ID:16
		    ,Name:"Sturt Stony Desert"
		  },
		  {
		     ID:17
		    ,Name:"Core Ranges"
		  },
		  {
		     ID:18
		    ,Name:"Bulloo"
		  },
		  {
		     ID:19
		    ,Name:"Bulloo Dunefields"
		  },
		  {
		     ID:20
		    ,Name:"Central Depression"
		  },
		  {
		     ID:21
		    ,Name:"Boorindal Plains"
		  },
		  {
		     ID:22
		    ,Name:"Barnato Downs"
		  },
		  {
		     ID:23
		    ,Name:"Canbelego Downs"
		  },
		  {
		     ID:24
		    ,Name:"Nymagee"
		  },
		  {
		     ID:25
		    ,Name:"Lachlan Plains"
		  },
		  {
		     ID:26
		    ,Name:"Culgoa-Bokhara"
		  },
		  {
		     ID:27
		    ,Name:"Warrambool-Moonie"
		  },
		  {
		     ID:28
		    ,Name:"Castlereagh-Barwon"
		  },
		  {
		     ID:29
		    ,Name:"Bogan-Macquarie"
		  },
		  {
		     ID:30
		    ,Name:"Louth Plains"
		  },
		  {
		     ID:31
		    ,Name:"Wilcannia Plains"
		  },
		  {
		     ID:32
		    ,Name:"Menindee"
		  },
		  {
		     ID:33
		    ,Name:"Great Darling Anabranch"
		  },
		  {
		     ID:34
		    ,Name:"Pooncarie-Darling"
		  },
		  {
		     ID:35
		    ,Name:"South Olary Plain"
		  },
		  {
		     ID:36
		    ,Name:"Murray Mallee"
		  },
		  {
		     ID:37
		    ,Name:"Darling Depression"
		  },
		  {
		     ID:38
		    ,Name:"Braemer"
		  },
		  {
		     ID:39
		    ,Name:"Nebine Plains"
		  },
		  {
		     ID:40
		    ,Name:"Warrego Plains"
		  },
		  {
		     ID:41
		    ,Name:"Cuttaburra-Paroo"
		  },
		  {
		     ID:42
		    ,Name:"West Warrego"
		  },
		  {
		     ID:43
		    ,Name:"Urisino Sandplains"
		  },
		  {
		     ID:44
		    ,Name:"Warrego Sands"
		  },
		  {
		     ID:45
		    ,Name:"Kerribree Basin"
		  },
		  {
		     ID:46
		    ,Name:"White Cliffs Plateau"
		  },
		  {
		     ID:47
		    ,Name:"Paroo Overflow"
		  },
		  {
		     ID:48
		    ,Name:"Paroo-Darling Sands"
		  },
		  {
		     ID:49
		    ,Name:"Nandewar Northern Complex"
		  },
		  {
		     ID:50
		    ,Name:"Inverell Basalts"
		  },
		  {
		     ID:51
		    ,Name:"Kaputar"
		  },
		  {
		     ID:52
		    ,Name:"Peel"
		  },
		  {
		     ID:53
		    ,Name:"Bundarra Downs"
		  },
		  {
		     ID:54
		    ,Name:"Beardy River Hills"
		  },
		  {
		     ID:55
		    ,Name:"Walcha Plateau"
		  },
		  {
		     ID:56
		    ,Name:"Armidale Plateau"
		  },
		  {
		     ID:57
		    ,Name:"Wongwibinda Plateau"
		  },
		  {
		     ID:58
		    ,Name:"Deepwater Downs"
		  },
		  {
		     ID:59
		    ,Name:"Glenn Innes-Guyra Basalts"
		  },
		  {
		     ID:60
		    ,Name:"Ebor Basalts"
		  },
		  {
		     ID:61
		    ,Name:"Moredun Volcanics"
		  },
		  {
		     ID:62
		    ,Name:"Severn River Volcanics"
		  },
		  {
		     ID:63
		    ,Name:"Northeast Forest Lands"
		  },
		  {
		     ID:64
		    ,Name:"Tenterfield Plateau"
		  },
		  {
		     ID:65
		    ,Name:"Yarrowyck-Kentucky Downs"
		  },
		  {
		     ID:66
		    ,Name:"Binghi Plateau"
		  },
		  {
		     ID:67
		    ,Name:"Stanthorpe Plateau"
		  },
		  {
		     ID:68
		    ,Name:"Eastern Nandewars"
		  },
		  {
		     ID:69
		    ,Name:"Tingha Plateau"
		  },
		  {
		     ID:70
		    ,Name:"Nightcap"
		  },
		  {
		     ID:71
		    ,Name:"Round Mountain"
		  },
		  {
		     ID:72
		    ,Name:"Washpool"
		  },
		  {
		     ID:73
		    ,Name:"Cataract"
		  },
		  {
		     ID:74
		    ,Name:"Dalmorton"
		  },
		  {
		     ID:75
		    ,Name:"Chaelundi"
		  },
		  {
		     ID:76
		    ,Name:"Yuraygir"
		  },
		  {
		     ID:77
		    ,Name:"Coffs Coast and Escarpment"
		  },
		  {
		     ID:78
		    ,Name:"Macleay Hastings"
		  },
		  {
		     ID:79
		    ,Name:"Carrai Plateau"
		  },
		  {
		     ID:80
		    ,Name:"Macleay Gorges"
		  },
		  {
		     ID:81
		    ,Name:"Upper Manning"
		  },
		  {
		     ID:82
		    ,Name:"Comboyne Plateau"
		  },
		  {
		     ID:83
		    ,Name:"Mummel Escarpment"
		  },
		  {
		     ID:84
		    ,Name:"Barrington"
		  },
		  {
		     ID:85
		    ,Name:"Tomalla"
		  },
		  {
		     ID:86
		    ,Name:"Ellerston"
		  },
		  {
		     ID:87
		    ,Name:"Upper Hunter"
		  },
		  {
		     ID:88
		    ,Name:"Karuah Manning"
		  },
		  {
		     ID:89
		    ,Name:"Rocky River Gorge"
		  },
		  {
		     ID:90
		    ,Name:"Guy Fawkes"
		  },
		  {
		     ID:91
		    ,Name:"Northern Inland Slopes"
		  },
		  {
		     ID:92
		    ,Name:"Lower Slopes"
		  },
		  {
		     ID:93
		    ,Name:"Capertee Valley"
		  },
		  {
		     ID:94
		    ,Name:"Lord Howe Island"
		  },
		  {
		     ID:95
		    ,Name:"Lachlan"
		  },
		  {
		     ID:96
		    ,Name:"Murrumbidgee"
		  },
		  {
		     ID:97
		    ,Name:"Murray Fans"
		  },
		  {
		     ID:98
		    ,Name:"Robinvale Plains"
		  },
		  {
		     ID:99
		    ,Name:"Murray Scroll Belt"
		  },
		  {
		     ID:100
		    ,Name:"East Gippsland Lowlands"
		  },
		  {
		     ID:101
		    ,Name:"South East Coastal Ranges"
		  },
		  {
		     ID:102
		    ,Name:"Bateman"
		  },
		  {
		     ID:103
		    ,Name:"Highlands-Northern Fall"
		  },
		  {
		     ID:104
		    ,Name:"Murrumbateman"
		  },
		  {
		     ID:105
		    ,Name:"Bungonia"
		  },
		  {
		     ID:106
		    ,Name:"Kanangra"
		  },
		  {
		     ID:107
		    ,Name:"Crookwell"
		  },
		  {
		     ID:108
		    ,Name:"Oberon"
		  },
		  {
		     ID:109
		    ,Name:"Bathurst"
		  },
		  {
		     ID:110
		    ,Name:"Orange"
		  },
		  {
		     ID:111
		    ,Name:"Hill End"
		  },
		  {
		     ID:112
		    ,Name:"Bondo"
		  },
		  {
		     ID:113
		    ,Name:"Kybeyan-Gourock"
		  },
		  {
		     ID:114
		    ,Name:"Monaro"
		  },
		  {
		     ID:115
		    ,Name:"Capertee Uplands"
		  },
		  {
		     ID:116
		    ,Name:"Burringbar-Conondale Ranges"
		  },
		  {
		     ID:117
		    ,Name:"Sunshine Coast-Gold Coast Lowlands"
		  },
		  {
		     ID:118
		    ,Name:"Scenic Rim"
		  },
		  {
		     ID:119
		    ,Name:"Woodenbong"
		  },
		  {
		     ID:120
		    ,Name:"Clarence Sandstones"
		  },
		  {
		     ID:121
		    ,Name:"Clarence Lowlands"
		  },
		  {
		     ID:122
		    ,Name:"Strzelecki Desert"
		  },
		  {
		     ID:123
		    ,Name:"Kerrabee"
		  },
		  {
		     ID:124
		    ,Name:"Hunter"
		  },
		  {
		     ID:125
		    ,Name:"Wollemi"
		  },
		  {
		     ID:126
		    ,Name:"Yengo"
		  },
		  {
		     ID:127
		    ,Name:"Wyong"
		  },
		  {
		     ID:128
		    ,Name:"Pittwater"
		  },
		  {
		     ID:129
		    ,Name:"Cumberland"
		  },
		  {
		     ID:130
		    ,Name:"Burragorang"
		  },
		  {
		     ID:131
		    ,Name:"Sydney Cataract"
		  },
		  {
		     ID:132
		    ,Name:"Moss Vale"
		  },
		  {
		     ID:133
		    ,Name:"Illawarra"
		  },
		  {
		     ID:134
		    ,Name:"Ettrema"
		  },
		  {
		     ID:135
		    ,Name:"Jervis"
		  }
		],


	Items:
	[
		{
			ID: 0,
			Type:'Development site',
			ProposalId: '0059/2012/0309D',
			ProposalVersion: '1',
			ProposalName:'Summer Beach Development',
			MajorCatchmentArea: 'Northern Rivers',
			StreetAddress: 'Hume Highway Summer Beach NSW 2888',

			SiteContext :
			{
				IBRA_SubRegion :
				{
					ID:1,
				},
				LandscapeFeatures :
				{
					Type:
					[
					    "Riparian - 3rd order stream",
			            "Riparian - 4th & 5th order streams & above",
			            "Riparian - 6th order stream & above",
			            "Riparian - Local wetland",
			            "Riparian - Important wetlands",
			            "Riparian - Estuarine areas",
			            "Geological or soil hazard - Karst system",
			            "Geological or soil hazard - Caves",
			            "Geological or soil hazard - Cliff lines",
			            "Geological or soil hazard - Upland swamps",
			            "Geological or soil hazard - Acid sulfate soils",
			            "Geological or soil hazard - Salinity hazard area",
			            "Connectivity - Flyway for migratory species"

					],
					ID: 0,
					Name:''
				}
			}
		},


		{	ID:1,
			Type:'Offset site',
			ProposalId: '0080/2013/0524B',
			ProposalVersion: '1',
			ProposalName:'Forest Drive Offset Site',
			MajorCatchmentArea: 'Hunter/Central Rivers',
			StreetAddress: 'Forest Drive Forest Town NSW 2999',

			SiteContext :
			{
				IBRA_SubRegion :
				{
					ID:1,
				},
				LandscapeFeatures :
				{
					Type:
					[
					    "Riparian - 3rd order stream",
			            "Riparian - 4th & 5th order streams & above",
			            "Riparian - 6th order stream & above",
			            "Riparian - Local wetland",
			            "Riparian - Important wetlands",
			            "Riparian - Estuarine areas",
			            "Geological or soil hazard - Karst system",
			            "Geological or soil hazard - Caves",
			            "Geological or soil hazard - Upland swamps",
			            "Geological or soil hazard - Acid sulfate soils",
			            "Connectivity - State significant biodiversity link",
			            "Connectivity - Regionally significant biodiversity link",
			            "Connectivity - Priority investment area"
					],
					ID: 0,
					Name:''
				}
			}
		},


		{
			ID:2,
			Type: 'Biocertification site',
			ProposalId: '0112/2014/1452MP',
			ProposalVersion: '1',
			ProposalName:'Beverly Hills Quarry Expansion',
			MajorCatchmentArea: 'Hunter/Central Rivers',
			StreetAddress: '1009 Forest Road Beverly Hills NSW 2209',

			SiteContext :
			{
				IBRA_SubRegion :
				{
					ID:1,
				},
				LandscapeFeatures :
				{
					Type:
					[
					    "Riparian - 3rd order stream",
			            "Riparian - 4th & 5th order streams & above",
			            "Riparian - 6th order stream & above",
			            "Riparian - Local wetland",
			            "Riparian - Important wetlands",
			            "Riparian - Estuarine areas",
			            "Geological or soil hazard - Karst system",
			            "Geological or soil hazard - Caves",
			            "Geological or soil hazard - Cliff lines",
			            "Geological or soil hazard - Upland swamps",
			            "Geological or soil hazard - Acid sulfate soils",
			            "Geological or soil hazard - Salinity hazard area",
			            "Connectivity - Flyway for migratory species"

					],
					ID: 0,
					Name:''
				}
			}
		}

	]

}
