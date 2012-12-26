//GOOGLE +1
(function() {
	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	po.src = 'https://apis.google.com/js/plusone.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

var currentEnchType;

$(function() {
	Cufon.now();
	Cufon.replace($("#title"));
	Cufon.replace($("#normal_calc"));
	Cufon.replace($("#or"));
	Cufon.replace($("#reverse_calc"));
	Cufon.replace($("#result"));

	$("#material").change(function(){
		var mat = $("#material").val();
		var tool = $("#tool").val();
		
		//check for bow
		if (tool == "bow" && mat != "wood") {
			if (mat == "leather" || mat == "chain") {
				$("#tool").val("chestplate");
			} else {
				$("#tool").val("sword");
			}
		}
		
		//check for armour
		if ((tool == "boots" || tool == "leggings" || tool == "chestplate" || tool == "helmet") && !(mat == "leather" || mat == "iron" || mat == "gold" || mat == "diamond" || mat == "chain")) {
			$("#tool").val("sword");
		}
		
		//check for tools
		if ((tool == "axe" || tool == "sword" || tool == "pickaxe" || tool == "shovel") && !(mat == "iron" || mat == "gold" || mat == "diamond" || mat == "stone" || mat == "wood")) {
			$("#tool").val("chestplate");
		}
	});
	
	
	$("#tool").change(function(){
		var mat = $("#material").val();
		var tool = $("#tool").val();
		
		//check for bow
		if (tool == "bow" && mat != "wood") {
			$("#material").val("wood");
		}
		
		//check for armour
		if ((tool == "boots" || tool == "leggings" || tool == "chestplate" || tool == "helmet") && !(mat == "leather" || mat == "iron" || mat == "gold" || mat == "diamond" || mat == "chain")) {
			$("#material").val("diamond");
		}
		
		//check for tools
		if ((tool == "axe" || tool == "sword" || tool == "pickaxe" || tool == "shovel") && !(mat == "iron" || mat == "gold" || mat == "diamond" || mat == "stone" || mat == "wood")) {
			$("#material").val("diamond");
		}
	});
    
    $("#revmaterial").change(function(){
		var mat = $("#revmaterial").val();
		var tool = $("#revtool").val();
		//(mat == "wood" || mat == "stone" || mat == "iron" || mat == "gold" || mat == "diamond" || mat == "leather" || mat == "chain")
		//(tool == "axe" || tool == "boots" || tool == "bow" || tool == "chestplate" || tool == "helmet" || tool == "leggings" || tool == "pickaxe" || tool == "shovel" || tool == "sword")
		
		//check for bow
		if (tool == "bow" && mat != "wood") {
			if (mat == "leather" || mat == "chain") {
				$("#revtool").val("chestplate");
			} else {
				$("#revtool").val("sword");
			}
		}
		
		//check for armour
		if ((tool == "boots" || tool == "leggings" || tool == "chestplate" || tool == "helmet") && !(mat == "leather" || mat == "iron" || mat == "gold" || mat == "diamond" || mat == "chain")) {
			$("#revtool").val("sword");
		}
		
		//check for tools
		if ((tool == "axe" || tool == "sword" || tool == "pickaxe" || tool == "shovel") && !(mat == "iron" || mat == "gold" || mat == "diamond" || mat == "stone" || mat == "wood")) {
			$("#revtool").val("chestplate");
		}
		
		tool = $("#revtool").val();
		
		if (tool == "bow") {
			changeEnchType ("bow");
		} else if (tool == "sword") {
			changeEnchType ("sword")
		} else if (tool == "pickaxe" || tool == "axe" || tool == "shovel") {
			changeEnchType ("tool")
		} else if (tool == "chestplate" || tool == "leggings") {
			changeEnchType ("armour")
		} else if (tool == "boots") {
			changeEnchType ("boots")
		} else if (tool == "helmet") {
			changeEnchType ("helmet")
		}
	});
	
	
	$("#revtool").change(function(){
		var mat = $("#revmaterial").val();
		var tool = $("#revtool").val();
		//(mat == "wood" || mat == "stone" || mat == "iron" || mat == "gold" || mat == "diamond" || mat == "leather" || mat == "chain")
		//(tool == "axe" || tool == "boots" || tool == "bow" || tool == "chestplate" || tool == "helmet" || tool == "leggings" || tool == "pickaxe" || tool == "shovel" || tool == "sword")
		
		//check for bow
		if (tool == "bow" && mat != "wood") {
			$("#revmaterial").val("wood");
		}
		
		//check for armour
		if ((tool == "boots" || tool == "leggings" || tool == "chestplate" || tool == "helmet") && !(mat == "leather" || mat == "iron" || mat == "gold" || mat == "diamond" || mat == "chain")) {
			$("#revmaterial").val("diamond");
		}
		
		//check for tools
		if ((tool == "axe" || tool == "sword" || tool == "pickaxe" || tool == "shovel") && !(mat == "iron" || mat == "gold" || mat == "diamond" || mat == "stone" || mat == "wood")) {
			$("#revmaterial").val("diamond");
		}
		
		if (tool == "bow") {
			changeEnchType ("bow");
		} else if (tool == "sword") {
			changeEnchType ("sword")
		} else if (tool == "pickaxe" || tool == "axe" || tool == "shovel") {
			changeEnchType ("tool")
		} else if (tool == "chestplate" || tool == "leggings") {
			changeEnchType ("armour")
		} else if (tool == "boots") {
			changeEnchType ("boots")
		} else if (tool == "helmet") {
			changeEnchType ("helmet")
		}
	});
    
    $("#level").keyup(function(){
    	$("#level").val($("#level").val().replace(/[^0-9]/g,''));
	    if (parseInt($("#level").val()) > 30) {
		    $("#level").val("30");
	    } else if (parseInt($("#level").val()) == 0) {
		    $("#level").val("1");
	    }
    });
    
    $("#enchant").change(function() {
	    changeEnchLevels();
    });
    
    function changeEnchType (newEnchType) {
	    if (newEnchType == currentEnchType) {
		    return;
	    } else {
		    currentEnchType == newEnchType;
	    }
	    
	    var newOptions;
	    
	    if (newEnchType == "sword") {
		    newOptions = {"Sharpness": "sharpness",
			  "Smite": "smite",
			  "Bane of Arthropods": "boa",
			  "Fire Aspect": "fireaspect",
			  "Looting": "looting",
			  "Knockback": "knockback"
			};
	    } else if (newEnchType == "bow") {
		    newOptions = {"Power": "power",
			  "Punch": "punch",
			  "Flame": "flame",
			  "Infinity": "infinity"
			};
	    } else if (newEnchType == "tool") {
		    newOptions = {"Unbreaking": "unbreaking",
			  "Efficiency": "efficiency",
			  "Silk Touch": "silktouch",
			  "Fortune": "fortune"
			};
	    } else if (newEnchType == "armour") {
		    newOptions = {"Protection": "protection",
			  "Fire Protection": "fireprot",
			  "Projectile Protection": "projprot",
			  "Blast Protection": "blastprot"
			};
	    } else if (newEnchType == "boots") {
		    newOptions = {"Protection": "protection",
			  "Fire Protection": "fireprot",
			  "Projectile Protection": "projprot",
			  "Blast Protection": "blastprot",
			  "Feather Falling": "featherfalling"
			};
	    } else if (newEnchType == "helmet") {
		    newOptions = {"Protection": "protection",
			  "Fire Protection": "fireprot",
			  "Projectile Protection": "projprot",
			  "Blast Protection": "blastprot",
			  "Aqua Affinity": "aquaaffinity",
			  "Respiration": "respiration"
			};
	    }
	    
	    var $el = $("#enchant");
		$el.empty();
		$.each(newOptions, function(key, value) {
		  $el.append($("<option></option>")
		     .attr("value", value).text(key));
		});
		
		changeEnchLevels();
    }
    
    function changeEnchLevels() {
	    var enchName = $("#enchant").val();
	    var newLvOptions;
	    
	    if (enchName == "sharpness" || enchName == "smite" || enchName == "boa" || enchName == "efficiency" || enchName == "power") {
		    newLvOptions = {"IV": "4",
			  "V": "5",
			  "III": "3",
			  "II": "2",
			  "I": "1"
			};
	    } else if (enchName == "protection" || enchName == "fireprot" || enchName == "projprot" || enchName == "blastprot" || enchName == "featherfalling" || enchName == "power") {
		    newLvOptions = {"IV": "4",
			  "III": "3",
			  "II": "2",
			  "I": "1"
			};
	    } else if (enchName == "respiration" || enchName == "looting" || enchName == "unbreaking" || enchName == "fortune") {
		    newLvOptions = {"III": "3",
			  "II": "2",
			  "I": "1"
			};
	    } else if (enchName == "knockback" || enchName == "fireaspect" || enchName == "punch") {
		    newLvOptions = {"II": "2",
			  "I": "1"
			};
	    } else if (enchName == "flame" || enchName == "infinity" || enchName == "silktouch" || enchName == "aquaaffinity") {
		    newLvOptions = {"I": "1"};
	    } else {
		    newLvOptions = {"Error": "1"};
	    }
	    
	    var $el = $("#enchlevel");
		$el.empty();
		$.each(newLvOptions, function(key, value) {
		  $el.append($("<option></option>")
		     .attr("value", value).text(key));
		});
    }
    
    changeEnchType ("sword");
    
    $("#calc").click(function(){
		$("#main_window").css("border-bottom", "solid 1px #aaaaaa");
		$("#result").css("border-top", "solid 1px #eeeeee");
	    $("#reverse_calc").animate({
		    height: "0px"
	    }, 500);
	    $("#or").animate({
		    height: "0px"
	    }, 500, function() {
		    $("#result").html("Result:<br/ ><textarea id=\"outputArea\"></textarea><br /><div id=\"linkdiv\">Link: <input type=\"text\" id=\"link\" /></div><input type=\"button\" id=\"calcback\" value=\"Back\" />");
			$("#link").val("http://www.minecraftenchantmentcalculator.com/#" + getQuickCode(1));
			calc($("#material").val(), $("#tool").val(), $("#level").val())
			Cufon.refresh();
			$("#link").click(function(){$("#link")[0].select();});
		    $("#result").animate({
			    height: "300px"
		    }, 500, function() {
			    $("#calcback").click(function(){
				    $("#main_window").css("border-bottom", "none");
				    $("#result").css("border-top", "none");
				    $("#result").animate({
					    height: "5px"
				    }, 500, function() {
					    $("#result").html("");
					    $("#reverse_calc").animate({
					    	height: "70px"
					    }, 500);
					    $("#or").animate({
					    	height: "40px"
					    }, 500);
				    });
			    });
		    });
	    });
    });
    
    $("#revcalc").click(function(){
		$("#main_window").css("border-bottom", "solid 1px #aaaaaa");
		$("#result").css("border-top", "solid 1px #eeeeee");
	    $("#normal_calc").animate({
		    height: "0px"
	    }, 500);
	    $("#or").animate({
		    height: "0px"
	    }, 500, function() {
		    $("#result").html("Result:<br/ ><textarea id=\"outputArea\"></textarea><br /><div id=\"linkdiv\">Link: <input type=\"text\" id=\"link\" /></div><input type=\"button\" id=\"calcback\" value=\"Back\" />");
			$("#link").val("http://www.minecraftenchantmentcalculator.com/#" + getQuickCode(2));
			revCalc ($("#enchant option:selected").text() + " " + $("#enchlevel option:selected").text(), $("#revmaterial").val(), $("#revtool").val());
			$("#link").click(function(){$("#link")[0].select();});
			Cufon.refresh();
		    $("#result").animate({
			    height: "300px"
		    }, 500, function() {
			    $("#calcback").click(function(){
				    $("#main_window").css("border-bottom", "none");
				    $("#result").css("border-top", "none");
				    $("#result").animate({
					    height: "5px"
				    }, 500, function() {
					    $("#result").html("");
					    $("#normal_calc").animate({
					    	height: "70px"
					    }, 500);
					    $("#or").animate({
					    	height: "40px"
					    }, 500);
				    });
			    });
		    });
	    });
    });
    
    function getQuickCode(type) {
	    if (type == 1) {
		    return "1" + $("#material")[0].selectedIndex + $("#tool")[0].selectedIndex + $("#level").val();
	    } else if (type == 2) {
		    return "2" + $("#revmaterial")[0].selectedIndex + $("#revtool")[0].selectedIndex + $("#enchant")[0].selectedIndex + $("#enchlevel")[0].selectedIndex;
	    }
    }
    
    if (window.location.hash.replace("#", "") != "") {
    	var quickCode = window.location.hash.replace("#", "");
	    if (quickCode.charAt(0) == "1") {
		    console.debug("Type 1 quick code detected. " + quickCode);
		    $("#material option").eq(parseInt(quickCode.charAt(1))).attr("selected", "selected");
		    $("#tool option").eq(parseInt(quickCode.charAt(2))).attr("selected", "selected");
		    $("#level").val(quickCode.substr(3, 2));
		    $("#calc").click();
	    } else if (quickCode.charAt(0) == "2") {
		    console.debug("Type 2 quick code detected. " + quickCode);
		    $("#revmaterial option").eq(parseInt(quickCode.charAt(1))).attr("selected", "selected");
		    $("#revtool option").eq(parseInt(quickCode.charAt(2))).attr("selected", "selected");
		    var tool = $("#revtool").val()
		    if (tool == "bow") {
				changeEnchType ("bow");
			} else if (tool == "sword") {
				changeEnchType ("sword")
			} else if (tool == "pickaxe" || tool == "axe" || tool == "shovel") {
				changeEnchType ("tool")
			} else if (tool == "chestplate" || tool == "leggings") {
				changeEnchType ("armour")
			} else if (tool == "boots") {
				changeEnchType ("boots")
			} else if (tool == "helmet") {
				changeEnchType ("helmet")
			} 
		    $("#enchant option").eq(parseInt(quickCode.charAt(3))).attr("selected", "selected");
		    changeEnchLevels();
		    $("#enchlevel option").eq(parseInt(quickCode.charAt(4))).attr("selected", "selected");
		    $("#revcalc").click();
	    }
    }
});

function writeLineToOutput (s) {
	$("#outputArea").val($("#outputArea").val() + s + "\n");
}

var enchantability;
var modifiedLevel;
var possibleEnchants = new Array();
var enchantsReceived = new Object();
var precision = 10000;
var isRecordingEnchants = false;
var enchantWanted;
var recordedEnchant = new Object();

function calc(mat, tool, level) {
	enchantsReceived = new Object();
	
	if (tool == "bow") {
		enchantability = 1;
	} else if (tool == "axe" || tool == "pickaxe" || tool == "shovel" || tool == "sword") {
		if (mat == "wood") {
			enchantability = 15;
		} else if (mat == "stone") {
			enchantability = 5;
		} else if (mat == "iron") {
			enchantability = 14;
		} else if (mat == "diamond") {
			enchantability = 10;
		} else if (mat == "gold") {
			enchantability = 22;
		}
	} else {
		if (mat == "leather") {
			enchantability = 15;
		} else if (mat == "iron") {
			enchantability = 9;
		} else if (mat == "chain") {
			enchantability = 12;
		} else if (mat == "diamond") {
			enchantability = 10;
		} else if (mat == "gold") {
			enchantability = 25;
		}
	}
	
	for (var i = 0; i < precision; i++) {
		possibleEnchants = new Array();
		
		modifiedLevel = parseInt(level) + Math.floor(Math.random() * (enchantability / 4 + 1)) + Math.floor(Math.random() * (enchantability / 4 + 1)) + 1;
		modifiedLevel = Math.floor(modifiedLevel * ((Math.random() + Math.random() - 1) * 0.15 + 1) + 0.5);
		
		if (tool == "bow") {
			if (modifiedLevel >= 41 && modifiedLevel <= 56) {
				addWeights(10, "Power V");
				//add this enchant [enchantment weight]times to an array, then choose randomly from array
			} else if (modifiedLevel >= 31 && modifiedLevel <= 46) {
				addWeights(10, "Power IV");
			} else if (modifiedLevel >= 21 && modifiedLevel <= 36) {
				addWeights(10, "Power III");
			} else if (modifiedLevel >= 11 && modifiedLevel <= 26) {
				addWeights(10, "Power II");
			} else if (modifiedLevel >= 1 && modifiedLevel <= 16) {
				addWeights(10, "Power I");
			}
			
			if (modifiedLevel >= 32 && modifiedLevel <= 57) {
				addWeights(2, "Punch II");
			} else if (modifiedLevel >= 12 && modifiedLevel <= 37) {
				addWeights(2, "Punch I");
			}
			
			if (modifiedLevel >= 20 && modifiedLevel <= 50) {
				addWeights(1, "Infinity I");
				addWeights(2, "Flame I");
			}
		} else if (tool == "axe" || tool == "pickaxe" || tool == "shovel") {
			if (modifiedLevel >= 41 && modifiedLevel <= 91) {
				addWeights(10, "Efficiency V");
			} else if (modifiedLevel >= 31 && modifiedLevel <= 81) {
				addWeights(10, "Efficiency IV");
			} else if (modifiedLevel >= 21 && modifiedLevel <= 71) {
				addWeights(10, "Efficiency III");
			} else if (modifiedLevel >= 11 && modifiedLevel <= 61) {
				addWeights(10, "Efficiency II");
			} else if (modifiedLevel >= 1 && modifiedLevel <= 51) {
				addWeights(10, "Efficiency I");
			}
			
			if (modifiedLevel >= 15 && modifiedLevel <= 65) {
				addWeights(1, "Silk Touch I");
			}
			
			if (modifiedLevel >= 21 && modifiedLevel <= 71) {
				addWeights(5, "Unbreaking III");
			} else if (modifiedLevel >= 13 && modifiedLevel <= 63) {
				addWeights(5, "Unbreaking II");
			} else if (modifiedLevel >= 5 && modifiedLevel <= 55) {
				addWeights(5, "Unbreaking I");
			}
			
			if (modifiedLevel >= 33 && modifiedLevel <= 83) {
				addWeights(2, "Fortune III");
			} else if (modifiedLevel >= 24 && modifiedLevel <= 74) {
				addWeights(2, "Fortune II");
			} else if (modifiedLevel >= 15 && modifiedLevel <= 65) {
				addWeights(2, "Fortune I");
			}
		} else if (tool == "sword") {
			if (modifiedLevel >= 45 && modifiedLevel <= 65) {
				addWeights(10, "Sharpness V");
			} else if (modifiedLevel >= 34 && modifiedLevel <= 54) {
				addWeights(10, "Sharpness IV");
			} else if (modifiedLevel >= 23 && modifiedLevel <= 43) {
				addWeights(10, "Sharpness III");
			} else if (modifiedLevel >= 12 && modifiedLevel <= 32) {
				addWeights(10, "Sharpness II");
			} else if (modifiedLevel >= 1 && modifiedLevel <= 21) {
				addWeights(10, "Sharpness I");
			}
			
			if (modifiedLevel >= 37 && modifiedLevel <= 57) {
				addWeights(5, "Smite V");
				addWeights(5, "Bane of Arthropods V");
			} else if (modifiedLevel >= 29 && modifiedLevel <= 49) {
				addWeights(5, "Smite IV");
				addWeights(5, "Bane of Arthropods IV");
			} else if (modifiedLevel >= 21 && modifiedLevel <= 41) {
				addWeights(5, "Smite III");
				addWeights(5, "Bane of Arthropods III");
			} else if (modifiedLevel >= 13 && modifiedLevel <= 33) {
				addWeights(5, "Smite II");
				addWeights(5, "Bane of Arthropods II");
			} else if (modifiedLevel >= 5 && modifiedLevel <= 25) {
				addWeights(5, "Smite I");
				addWeights(5, "Bane of Arthropods I");
			}
			
			if (modifiedLevel >= 25 && modifiedLevel <= 75) {
				addWeights(5, "Knockback II");
			} else if (modifiedLevel >= 5 && modifiedLevel <= 55) {
				addWeights(5, "Knockback I");
			}
			
			if (modifiedLevel >= 30 && modifiedLevel <= 80) {
				addWeights(2, "Fire Aspect II");
			} else if (modifiedLevel >= 10 && modifiedLevel <= 60) {
				addWeights(2, "Fire Aspect I");
			}
			
			if (modifiedLevel >= 33 && modifiedLevel <= 83) {
				addWeights(2, "Looting III");
			} else if (modifiedLevel >= 24 && modifiedLevel <= 74) {
				addWeights(2, "Looting II");
			} else if (modifiedLevel >= 15 && modifiedLevel <= 65) {
				addWeights(2, "Looting I");
			}
		} else if (tool == "boots" || tool == "leggings" || tool == "chestplate" || tool == "helmet") {
			if (modifiedLevel >= 34 && modifiedLevel <= 54) {
				addWeights(10, "Protection IV");
			} else if (modifiedLevel >= 23 && modifiedLevel <= 43) {
				addWeights(10, "Protection III");
			} else if (modifiedLevel >= 12 && modifiedLevel <= 32) {
				addWeights(10, "Protection II");
			} else if (modifiedLevel >= 1 && modifiedLevel <= 21) {
				addWeights(10, "Protection I");
			}
			
			if (modifiedLevel >= 34 && modifiedLevel <= 46) {
				addWeights(5, "Fire Protection IV");
			} else if (modifiedLevel >= 26 && modifiedLevel <= 38) {
				addWeights(5, "Fire Protection III");
			} else if (modifiedLevel >= 18 && modifiedLevel <= 30) {
				addWeights(5, "Fire Protection II");
			} else if (modifiedLevel >= 10 && modifiedLevel <= 22) {
				addWeights(5, "Fire Protection I");
			}
			
			if (modifiedLevel >= 29 && modifiedLevel <= 41) {
				addWeights(2, "Blast Protection IV");
			} else if (modifiedLevel >= 21 && modifiedLevel <= 33) {
				addWeights(2, "Blast Protection III");
			} else if (modifiedLevel >= 13 && modifiedLevel <= 25) {
				addWeights(2, "Blast Protection II");
			} else if (modifiedLevel >= 5 && modifiedLevel <= 17) {
				addWeights(2, "Blast Protection I");
			}
			
			if (modifiedLevel >= 21 && modifiedLevel <= 36) {
				addWeights(5, "Projectile Protection IV");
			} else if (modifiedLevel >= 15 && modifiedLevel <= 30) {
				addWeights(5, "Projectile Protection III");
			} else if (modifiedLevel >= 9 && modifiedLevel <= 24) {
				addWeights(5, "Projectile Protection II");
			} else if (modifiedLevel >= 3 && modifiedLevel <= 18) {
				addWeights(5, "Projectile Protection I");
			}
			
			if (tool == "boots") {
				if (modifiedLevel >= 23 && modifiedLevel <= 33) {
					addWeights(5, "Feather Falling IV");
				} else if (modifiedLevel >= 17 && modifiedLevel <= 27) {
					addWeights(5, "Feather Falling III");
				} else if (modifiedLevel >= 11 && modifiedLevel <= 21) {
					addWeights(5, "Feather Falling II");
				} else if (modifiedLevel >= 5 && modifiedLevel <= 15) {
					addWeights(5, "Feather Falling I");
				}
			}
			
			if (tool == "helmet") {
				if (modifiedLevel >= 30 && modifiedLevel <= 60) {
					addWeights(2, "Respiration III");
				} else if (modifiedLevel >= 20 && modifiedLevel <= 50) {
					addWeights(2, "Respiration II");
				} else if (modifiedLevel >= 10 && modifiedLevel <= 40) {
					addWeights(2, "Respiration I");
				}
				
				if (modifiedLevel >= 1 && modifiedLevel <= 41) {
					addWeights(2, "Aqua Affinity I");
				}
			}
		}
		
		var randEnchant = Math.floor(Math.random()*possibleEnchants.length);
		if (enchantsReceived[possibleEnchants[randEnchant]] === undefined) {
			enchantsReceived[possibleEnchants[randEnchant]] = 0;
		} else {
			enchantsReceived[possibleEnchants[randEnchant]]++;
		}
	}
	
	if (!isRecordingEnchants) {
		var enchNameArray = new Array();
		var enchProbArray = new Array();
		
		writeLineToOutput ("Minecraft Enchanting Calculator 2.0 - http://www.minecraftenchantmentcalculator.com/");
		writeLineToOutput ("");
		writeLineToOutput ("Output log:  (This output was calculated 10,000 times, but results may still vary)");
		writeLineToOutput ("Possible enchants for " + mat + " " + tool + " at level " + level + "...");
		for (var index in enchantsReceived) {
			enchNameArray.push(index);
			enchProbArray.push(enchantsReceived[index] / precision * 100)
		}
		
		var foundOne = true;
		var tempName;
		var tempProb;
		
		while (foundOne) {
			foundOne = false;
			for(var sortIndex = 0; sortIndex < enchProbArray.length - 1; sortIndex++) {
				if (enchProbArray[sortIndex] < enchProbArray[sortIndex + 1]) {
					tempName = enchNameArray[sortIndex + 1];
					tempProb = enchProbArray[sortIndex + 1];
					enchNameArray[sortIndex + 1] = enchNameArray[sortIndex];
					enchProbArray[sortIndex + 1] = enchProbArray[sortIndex];
					enchNameArray[sortIndex] = tempName;
					enchProbArray[sortIndex] = tempProb;
					foundOne = true;
				}
			}
		}
		
		for (var outputIndex = 0; outputIndex < enchNameArray.length; outputIndex++) {
			enchProbArray[outputIndex] = Math.floor(enchProbArray[outputIndex] * 10) / 10;
			if (enchProbArray[outputIndex] < 0.1) {
				writeLineToOutput (enchNameArray[outputIndex] + ": <0.1%");
			} else {
				writeLineToOutput (enchNameArray[outputIndex] + ": " + enchProbArray[outputIndex] + "%");
			}
		}
		
		var avglevel = level
		writeLineToOutput ("");
		avglevel = Math.floor(avglevel / 2);
		writeLineToOutput ("You have a " + Math.floor((avglevel + 1)/50*100) + "% chance of getting a 2nd enchant.");
		avglevel = Math.floor(avglevel / 2);
		writeLineToOutput ("You have a " + Math.floor((avglevel + 1)/50*100) + "% chance of getting a 3rd enchant.");
		avglevel = Math.floor(avglevel / 2);
		writeLineToOutput ("You have a " + Math.floor((avglevel + 1)/50*100) + "% chance of getting a 4th enchant.");
		writeLineToOutput ("");
		writeLineToOutput ("If you get more than one enchant, you have a higher chance of getting enchants other than the one you currently have.");
		writeLineToOutput ("For example, you can't get Sharpness twice on a single sword, instead, Minecraft will pick another enchant.");
		
		if (tool == "axe" || tool == "pickaxe" || tool == "shovel") {
			writeLineToOutput ("");
			writeLineToOutput ("You cannot get Silk Touch and Fortune on the same tool.");
		} else if (tool == "sword") {
			writeLineToOutput ("");
			writeLineToOutput ("You cannot get Bane of Arthropods, Smite and Sharpness on the same sword.");
		} else {
			writeLineToOutput ("");
			writeLineToOutput ("You cannot get Fire, Blast, Projectile or regular Protection on the same piece of armour.");
		}
	} else {
		recordedEnchant[level] = enchantsReceived[enchantWanted] / precision * 100;
	}
}

function addWeights (weight, newEnchant) {
	for (var i = 0; i < weight; i++) {
		possibleEnchants.push(newEnchant);
	}
}

function revCalc (enchantName, mat, tool) {
	writeLineToOutput ("Minecraft Enchanting Calculator 2.0 - http://www.minecraftenchantmentcalculator.com/");
	writeLineToOutput ("");
	writeLineToOutput ("Output log:  (Each level is calculated 10,000 times, but results may still vary)");
	writeLineToOutput ("Possible levels for a " + enchantName + " " + mat + " " + tool + "...");
	if (enchantName == "Power V") {
		console.debug ("test");
		writeLineToOutput ("Error: Power V is only obtainable by repairing two Power IV bows in an anvil.");
		return;
	}
	if (enchantName == "Sharpness V" && mat != "gold") {
		writeLineToOutput ("Error: Sharpness V is only obtainable on a gold sword, or by repairing two Sharpness IV swords in an anvil.");
		return;
	}
	enchantWanted = enchantName;
	isRecordingEnchants = true;
	for (var level = 1; level <= 30; level++) {
		calc(mat, tool, level);
	}
	for (var index in recordedEnchant) {
		if(isNaN(recordedEnchant[index])) {
			continue;
		}
		if(recordedEnchant[index] == 0) {
			writeLineToOutput (index + ": <0.1%");
			continue;
		}
		recordedEnchant[index] = Math.floor(recordedEnchant[index] * 10)/10;
		writeLineToOutput (index + ": " + recordedEnchant[index] + "%");
	}
	isRecordingEnchants = false;
}