{
	// Map BGM
	addAudio:[
		["map-bgm",[audioserver+"village.mp3",audioserver+"village.ogg"],{channel:"bgmusic",loop:true}]
	],
	// Map graphics
	addImage:[
		["tiles","resources/gfx-village.png"]
	],
	// Map Tileset
	addTiles:[
		{id:"tiles",image:"tiles",tileh:30,tilew:30,tilerow:10,gapx:0,gapy:0}
	],
	setObject:[
		// Dialogues on this map
		{
			object:"dialogues",
			property:"intro",
			value:{ font:"smalltut", skipkey:"a", esckey:"b", who: noface,
		  		scenes:[
		  			{ speed:1, who:"noone", audio:"beep", talk:["Go kill all of the warriors outside!"]},
					{ speed:5, who:"noone", audio:"beep", talk:["NOW!!!"]}
		  		]
		  	}

		// Map data and actions
		},{
			object:"tilemaps",
			property:"map",
			value:{
				title:"A Dark Cave",
				tileset:"tiles",
				map:[
					[  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13,  13],
					[  13,  13,  13,  13,  13,   2,   2,  13,  13,  13,  13,  13],
					[  12,  12,  12,  12,  12,   1,   1,  12,  12,  12,  12,  12],
					[  10,   0,   0,   0,   0,   0,   0,   0,   0,   0,  10,  10],
					[  10,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  10],
					[  10,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  10],
					[  10,   0,   0,   0,  0,   11,  11,   0,   0,   0,   0,  10],
					[  10,   0,   0,   0,   0,  11,  11,   0,   0,   0,   0,  10],
					[  10,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  10],
					[  10,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  10],
					[  10,  10,  10,  10,  10,  10,  10,  10,  10,  10,  10,  10]
				],
				//playerSpawnX:120,
				//playerSpawnY:120,

				addObjects:function() {
					gbox.playAudio("map-bgm");
					/*
					maingame.addBlock(360,150,"house",0);
					maingame.addNpc(390,220,[4],"villager",null,[4,5]);
					maingame.addNpc(150,180,[6],"wife",null,[6,7]);
					*/
				},

				mapActions:function() {
					var pl=gbox.getObject("player","player");
					var ontile=help.getTileInMap(pl.x+pl.colx+pl.colhw,pl.y+pl.coly+pl.colhh,tilemaps.map,tilemaps._defaultblock,"map");
					if (ontile==1) maingame.gotoLevel({level:"camp",x:580,y:590,label:"Warrior Training Camp"});
				},

				tileIsSolid:function(obj,t){ return (t>9) }
			}
		}
	]
}
