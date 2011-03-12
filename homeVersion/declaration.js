﻿	var atHome = 1; //for testing
	//each element of following arrays refers to the problem with the same index
	/*var curCmdIndex = []; //index of the last executed command
	var curDivIndex = []; //index of the div with command which is playing 
	var curStep = [];
	var curDivName = [];*/
	var curState = [];
	var speed = []; // speed of arrow's moving in the labirint
	var pause = []; // if commands executing is paused
	var stopped = []; // if commands executing is stopped
	var playing = []; // if commands are in progress
	var dead = []; // if player lost
	var curMap = []; // current state of labirint
	var startDir = "right"; 
	var startX = [];
	var startY = [];
	var mapFromTest = []; // initial state of labirint
	var curDir = []; 
	var curX = [];
	var curY = [];
	var curCmdList = [[]]; // current order of commands
	var life = []; 
	var pnts = [];
	var mElemId = 0; // current number of moving elements
	var dx = [];
	var dy = [];
	var curProblem = 0;
	var problems = []; // problem description (name -- name, statement -- statement, tests number -- testsNum, 
	//possible commands -- commands, initial life number - start_life, life number change with each step -- d_life, 
	//initial points number -- start_pnts, finish symbol -- finish_symb, list of keys - cleaner, list of locks - cleaned)
	var specSymbols = []; // description of special symbols (list of possible symbols -- list, 
	//list of css style names -- style_list, number of symbols -- count, names of possible symbols -- names, 
	// points for the symbol -- points, life number changing -- d_life, eat or move -- do, coordinate in labirint -- coord.x, coord.y, 
	//name of css style -- style, 
	//current number of these symbols - cur_count, ) -- ?
	var movingElems = [];  // description of moving elements (name of css style -- style, path of moving element -- path, 
	// if moving element repeats his path -- looped, if meeting with moving element causes loss -- die, symbol in the labirint -- symbol)
	var problemsList = []; // (id and names of problems)
	var users = {"login":[], "name":[]};
	var login;
	var name;
	var passwd = 12345;
	var cid; // contest id
	var sid; // session id
	var cmdId; // current number for added command(generated for dynamic creating of sortable elements)
	var pathPref = 'http://imcs.dvgu.ru/cats/main.pl?';
	var visited = []; // if tab have already been visited -- for proper tabs displaying
	var divNames = {
		"forward": "Прямо",
		"left": "Налево",
		"right": "Направо",
		"wait": "Ждать"
	};
	var classNames = {
		"forward ui-draggable": "forward1 ui-draggable",
		"forward1 ui-draggable": "forward ui-draggable",
		"left ui-draggable":"left1 ui-draggable",
		"left1 ui-draggable":"left ui-draggable",
		"right ui-draggable": "right1 ui-draggable",
		"right1 ui-draggable": "right ui-draggable",
		"wait1 ui-draggable": "wait ui-draggable",
		"wait ui-draggable": "wait1 ui-draggable"
		};
	var classes = new Array ("forward", "left", "right", "wait", "forward1", "left1", "right1", "wait1");
	var changeDir = {
		"forward":{
			"up": {dx: 0, dy: -1, curDir: "up"},
			"down": {dx: 0, dy: 1, curDir: "down"},
			"left":{dx: -1, dy: 0, curDir: "left"},
			"right": {dx: 1, dy: 0, curDir: "right"},
			"wait": {dx: 0, dy: 0, curDir: "forward"}
		},
		"left":{
			"up": {dx: 0, dy: 0, curDir: "left"},
			"down": {dx: 0, dy: 0, curDir: "right"},
			"left":{dx: 0, dy: 0, curDir: "down"},
			"right": {dx: 0, dy: 0, curDir: "up"},
			"wait": {dx: -1, dy: 0, curDir: "left"}
		},
		"right":{
			"up": {dx: 0, dy: 0, curDir: "right"},
			"down": {dx: 0, dy: 0, curDir: "left"},
			"left":{dx: 0, dy: 0, curDir: "up"},
			"right": {dx: 0, dy: 0, curDir: "down"},
			"wait": {dx: 1, dy: 0, curDir: "right"}
		}, 
		"wait":{
			"up": {dx: 0, dy: 0, curDir: "up"},
			"down": {dx: 0, dy: 0, curDir: "down"},
			"left":{dx: 0, dy: 0, curDir: "left"},
			"right": {dx: 0, dy: 0, curDir: "right"},
			"wait": {dx: 0, dy: 0, curDir: "wait"}
		}
		
	}
	var dirs = {"R": "right", "L": "left", "U": "up", "D": "down"}
	var maxx = 185;
	var miny = 0;
	var btnsPlay = new Array("play", "next", "prev", "fast");
	var btns = new Array("play", "pause", "stop", "prev", "next", "fast");