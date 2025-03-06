import { useEffect, useRef } from "react";
import leaflet from "leaflet";


export default function Map() {
  const mapRef = useRef(null);

  let M2C = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              72.89898651490284,
              19.01239519119298
            ],
            [
              71.60997622748113,
              17.86477325860531
            ],
            [
              71.67164431314092,
              16.3418088334426
            ],
            [
              72.2751885975365,
              14.761637406958158
            ],
            [
              72.79134177110893,
              13.499769752414906
            ],
            [
              73.55241859808444,
              12.165407611827774
            ],
            [
              74.45027995484313,
              10.679123022164589
            ],
            [
              75.45315185066372,
              8.847269880382257
            ],
            [
              76.42539914488663,
              7.340601105514537
            ],
            [
              77.58464247397956,
              6.722004763200644
            ],
            [
              78.8578985527588,
              6.9754458603513285
            ],
            [
              79.66211951998065,
              7.497189896238979
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              72.90246073021783,
              19.026556840798165
            ],
            [
              70.50411860770942,
              18.81602637548029
            ],
            [
              68.60730387780009,
              19.56806259043252
            ],
            [
              65.51819564986388,
              20.96158782087889
            ],
            [
              63.749372324118156,
              22.230658389769175
            ],
            [
              61.37200806012606,
              23.3584928978089
            ],
            [
              59.30993985023099,
              24.485165413085
            ],
            [
              57.549049572082964,
              25.17195338162162
            ],
            [
              56.95602932914781,
              25.74823180034349
            ],
            [
              56.47764256228436,
              26.605885576436563
            ],
            [
              55.734289513707495,
              26.361994735027366
            ],
            [
              54.45206995256706,
              25.828326466448672
            ],
            [
              53.630147217035585,
              25.3026908189824
            ],
            [
              53.03104461156093,
              24.191416898574587
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              79.69880855177428,
              7.457300819540251
            ],
            [
              79.15362108342322,
              8.166517183285237
            ],
            [
              79.371613932233,
              9.237116966136853
            ],
            [
              79.66209615134875,
              9.931359924232822
            ],
            [
              80.42536499972647,
              10.581765705241779
            ],
            [
              81.30286470180687,
              11.97925633689421
            ],
            [
              82.11708020421383,
              13.328272154354622
            ],
            [
              82.72138814172695,
              14.566969283270268
            ],
            [
              83.56914450182978,
              16.086021506141407
            ],
            [
              84.3930727253931,
              17.21670647751047
            ],
            [
              85.18787380348306,
              18.029873338279188
            ],
            [
              86.08707504368277,
              18.991632439715843
            ],
            [
              86.67102420307884,
              19.56511666668142
            ],
            [
              87.46550164322491,
              20.65646078629466
            ],
            [
              87.72148553528973,
              21.322089691181063
            ],
            [
              88.26085567927504,
              22.29269125319867
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              40.478548494399064,
              -2.7013567842933384
            ],
            [
              44.52732837877937,
              -1.2218510369105786
            ],
            [
              48.746301272449415,
              1.548347641625952
            ],
            [
              52.98141388137071,
              4.706762280860261
            ],
            [
              55.55795470326498,
              7.30451876619162
            ],
            [
              58.45312542145368,
              9.649400657810347
            ],
            [
              60.67994161703962,
              11.79307930287058
            ],
            [
              62.588076300342266,
              13.871066736485119
            ],
            [
              65.92506686344822,
              16.762942484488605
            ],
            [
              68.6699228574306,
              17.948856727213766
            ],
            [
              70.93163308286063,
              18.352273848937116
            ],
            [
              72.85982321615282,
              19.024423515653893
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              43.02537215934922,
              14.327807447386107
            ],
            [
              42.722927139703444,
              13.632097804706362
            ],
            [
              43.82471559407804,
              11.921539168504722
            ],
            [
              46.3964848149603,
              12.067036490238365
            ],
            [
              48.98643798702054,
              12.75450278203671
            ],
            [
              51.76915386929696,
              13.83256875256518
            ],
            [
              54.39475023204963,
              14.770843189834679
            ],
            [
              60.09932604209084,
              16.687150628831347
            ],
            [
              62.984849074939945,
              17.45897997304843
            ],
            [
              65.74955305698458,
              17.988560712244194
            ],
            [
              68.11315932093731,
              18.49767207241173
            ],
            [
              69.8345092441854,
              18.728969644702687
            ],
            [
              72.59375662842078,
              19.189884187373593
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              40.3855562427475,
              -2.6158777957668207
            ],
            [
              42.95521992280001,
              -2.2549838396419943
            ],
            [
              45.15726478217201,
              -1.677446531635411
            ],
            [
              47.28788590372761,
              -0.7480217314591613
            ],
            [
              50.19390119461943,
              0.45369108369462197
            ],
            [
              53.556976418938035,
              1.6606624703811548
            ],
            [
              57.721548967811856,
              2.9234502207032307
            ],
            [
              61.419951089730716,
              4.001542114183991
            ],
            [
              64.66382394605691,
              5.030990109197461
            ],
            [
              68.14029821956211,
              5.66142885355562
            ],
            [
              69.9387649575381,
              5.790335188813032
            ],
            [
              72.20217342869219,
              6.231325049773957
            ],
            [
              74.97332353569738,
              6.887636018435131
            ],
            [
              76.74817017987846,
              6.93645216640023
            ],
            [
              78.65058233065992,
              7.323836329414121
            ],
            [
              79.29847310313926,
              7.546700426810403
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              32.368659368886796,
              29.650947190018513
            ],
            [
              34.02135005921028,
              27.597290886240373
            ],
            [
              36.33570671008232,
              24.36120244384837
            ],
            [
              37.84337734845772,
              22.076690104709556
            ],
            [
              39.421645121807785,
              19.48372753979487
            ],
            [
              40.145371868416305,
              17.795612690317355
            ],
            [
              41.494816094833055,
              15.530539116702343
            ],
            [
              42.79386404642278,
              13.488779926093358
            ],
            [
              43.01158900432671,
              14.097561719811907
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              34.73156582015636,
              28.063192661412586
            ],
            [
              35.084110008422726,
              26.070653834035326
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              33.56557948373674,
              27.697118636610114
            ],
            [
              34.13959244854101,
              27.358109261057336
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              22.704161593962397,
              37.12040888495139
            ],
            [
              25.11324355353696,
              36.098833378802524
            ],
            [
              28.026882011220238,
              35.165249731217784
            ],
            [
              29.383867805793585,
              33.13744545336628
            ],
            [
              30.5086346051759,
              31.302038781054776
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              28.1215637348067,
              35.17766615354414
            ],
            [
              30.29204120521345,
              34.34725491007519
            ],
            [
              31.52740053799647,
              33.61366640542664
            ],
            [
              32.389152713937136,
              32.68983367409368
            ],
            [
              33.652006385688026,
              31.078031291106583
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              88.15990449749222,
              22.105142303808663
            ],
            [
              89.20087877913647,
              19.59631747991618
            ],
            [
              90.65204579056035,
              17.013805881209237
            ],
            [
              92.31811507668357,
              14.088364560337837
            ],
            [
              94.99849919876942,
              10.37628245276646
            ],
            [
              96.77243295694143,
              7.597867051709272
            ],
            [
              99.54010222487022,
              4.042518565602677
            ],
            [
              101.82003200560143,
              2.0446356369410807
            ],
            [
              104.86707218074633,
              0.07241630470154803
            ],
            [
              105.55710025132697,
              0.9665913458113096
            ],
            [
              104.039514928747,
              2.045021306805779
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              105.3866003922243,
              1.0707289532636821
            ],
            [
              103.41161850108227,
              4.319175996904349
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              103.47776986322441,
              4.291262808323083
            ],
            [
              103.5773883534448,
              5.456190443723429
            ],
            [
              102.98966790062377,
              6.934800486586141
            ],
            [
              101.93204891972312,
              8.4437082844522
            ],
            [
              101.38238106885882,
              9.382403842221706
            ],
            [
              101.14119844288837,
              10.270660503724642
            ],
            [
              100.83888727221972,
              11.404534066243485
            ],
            [
              100.62432651348678,
              12.642250630927009
            ],
            [
              100.48355521628565,
              13.670337921624707
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              103.46117145488239,
              4.293342980592556
            ],
            [
              104.94189993774103,
              4.947299074334509
            ],
            [
              105.94119922082126,
              5.826598276423937
            ],
            [
              107.36547749900836,
              7.352278160531753
            ],
            [
              108.46169230057097,
              8.434092776526128
            ],
            [
              109.76030171599143,
              9.740300578364824
            ],
            [
              110.98554243199032,
              11.276789970969347
            ],
            [
              111.90381313099255,
              13.102897238207191
            ],
            [
              112.40597310761359,
              14.899464052548353
            ],
            [
              112.85014647708113,
              17.05455919809961
            ],
            [
              113.05591119774652,
              18.95679404024365
            ],
            [
              113.16808905046281,
              20.6990645886671
            ],
            [
              113.26831631362398,
              22.07140950560084
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              113.23301230834738,
              22.029000506556855
            ],
            [
              113.97064754325879,
              21.754669854153434
            ],
            [
              114.9607883434565,
              21.64641398755485
            ],
            [
              116.86708240332348,
              22.20660134408321
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              116.84616552425268,
              22.21066352417536
            ],
            [
              117.91988001819402,
              22.74663278968545
            ],
            [
              118.75614905782822,
              23.52084449542359
            ],
            [
              119.71900002524688,
              24.495789292941538
            ],
            [
              120.54770854332139,
              25.56566452675537
            ],
            [
              121.3822976175993,
              26.760776810481772
            ],
            [
              122.14230561891884,
              27.879233384206316
            ],
            [
              122.83053176746887,
              29.32202940157387
            ],
            [
              123.11645832185252,
              30.461148535971304
            ],
            [
              122.63502034937653,
              31.039127545845247
            ],
            [
              121.62533480166667,
              31.221114808591324
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              103.49782472145591,
              4.38423404840502
            ],
            [
              106.2025468441347,
              4.995286280775076
            ],
            [
              108.12489922325278,
              6.250163300184184
            ],
            [
              109.8496638931586,
              8.03862142256746
            ],
            [
              112.7623004449307,
              10.160973622705555
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              112.65546415207638,
              10.111732626158542
            ],
            [
              114.21803575116093,
              11.319953801059597
            ],
            [
              116.03288601754605,
              12.546393061355786
            ],
            [
              117.78195640168201,
              13.548238194717115
            ],
            [
              119.70187118384911,
              14.383712050676152
            ],
            [
              120.23959775057983,
              14.555731118233112
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              83.3157142734774,
              17.626165592736328
            ],
            [
              84.2525074797772,
              17.761812745428443
            ],
            [
              85.10921218596775,
              18.229448829192776
            ],
            [
              85.86552175947725,
              18.84751945115535
            ],
            [
              86.68653423411024,
              19.620135932733334
            ],
            [
              87.19182140949715,
              20.302015882668798
            ],
            [
              87.7635700958914,
              21.301458180348575
            ],
            [
              88.11633040619313,
              22.090691179654428
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              80.29215338639426,
              13.066562904151112
            ],
            [
              81.0866810234636,
              13.299422046572516
            ],
            [
              81.64610987458673,
              13.94920990406132
            ],
            [
              82.1374533110486,
              14.637177371732577
            ],
            [
              82.72424268497099,
              15.434483173814286
            ],
            [
              83.05847393909988,
              16.230547614748346
            ],
            [
              83.23312066839537,
              17.090180127575863
            ],
            [
              83.25315671973914,
              17.67610407187999
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              76.23684074343777,
              9.965273757180526
            ],
            [
              76.06378425774363,
              9.639260869170016
            ],
            [
              75.98234591153471,
              9.162216059328415
            ],
            [
              75.99761560144941,
              8.609049113352782
            ],
            [
              76.19783685028813,
              7.902812585979561
            ],
            [
              76.78284228744599,
              7.400323859816837
            ],
            [
              77.55309944637082,
              7.255267021608745
            ],
            [
              78.38185714901056,
              7.390654877300037
            ],
            [
              79.10336385483885,
              7.545333015053046
            ],
            [
              79.30811575784452,
              7.564663917306902
            ],
            [
              79.66886789038716,
              7.47766958336355
            ]
          ],
          "type": "LineString"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              81.23863200924688,
              8.578268490045232
            ],
            [
              81.57988687214083,
              8.89628672459547
            ],
            [
              81.57013678152146,
              9.40646229100922
            ],
            [
              81.41413533161244,
              10.165505946951441
            ],
            [
              81.21002648484568,
              10.911544404184028
            ],
            [
              80.87963339811768,
              11.613353062373207
            ],
            [
              80.45177078840419,
              12.470010539829303
            ],
            [
              80.2921679552158,
              13.136038147270128
            ]
          ],
          "type": "LineString"
        }
      }
    ]
  };

  useEffect(() => {
    if (!mapRef.current) return;

    const map = leaflet.map(mapRef.current).setView([13, 76], 5);  // Focused on sea route

    const osm = leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    // osm.addTo(map);

    const googleStreets = leaflet.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });

    googleStreets.addTo(map);

    // leaflet.marker([18.95, 72.93]).addTo(map)
    //   .bindPopup("This is Mumbai Port, India")
    //   .openPopup();

    // leaflet.marker([6.95, 79.85]).addTo(map)
    //   .bindPopup("This is Colombo Port, Sri Lanka")
    //   .openPopup();

    // leaflet.marker([24.47, 53.37]).addTo(map)
    //   .bindPopup("This is Mubarraz Port, UAE")
    //   .openPopup();

    // leaflet.marker([22.55, 88.32]).addTo(map)
    //   .bindPopup("This is Mubarraz Port, UAE")
    //   .openPopup();

    //   leaflet.marker([3.2192, 40.1169]).addTo(map)
    // .bindPopup("This is Malindi, Kenya")
    // .openPopup();

    // Draw GeoJSON line
    // leaflet.geoJSON(M2C, {
    //   onEachFeature: function (feature, layer) {
    //     layer.bindPopup("Sea Route: Mumbai to Colombo");
    //   },
    //   style: {
    //     color: "red",
    //     weight: 1,
    //     lineCap: 'round'
    //   }
    // }).addTo(map);


    


    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} style={{ height: "100vh", width: "100%" }}></div>;
}