$(function() {
	particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 100,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 0.5,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": 0,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 3,
				"direction": "bottom",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "grab"
				},
				"onclick": {
					"enable": true,
					"mode": "repulse"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 100,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 150,
					"duration": 0.5
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	});

	$(function () {
		var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
		var dt = new Date();
		var hours=dt.getHours();
		var index=1;
		var day="";
		/*document.getElementById("time").innerText=dt.getFullYear()+"年"*/
		switch (hours) {
			case 23,0,1,2,3,4,5,6:
				day="哟，睡觉时间，睡觉睡觉，觉多皮肤好！(_　_)。゜zｚＺ";
				break;
			case 7,8:
				day="good morning!美好的一天从早上开始！记得吃早饭呀，还要多喝水，这样才能一整天元气满满。对了，记得叫亲爱的资哥哥起床!(●'◡'●)";
				break;
			case 9,10,11:
				day="窗外有鸟，我心有你！( •̀ ω •́ )✧";
				break;
			case 12:
				day="开饭啦！！！！！快去抢饭！(￣▽￣)";
				break;
			case 13,14:
				day="昏昏欲睡的午后，资哥哥允许你梦里想着我，哈哈(●ˇ∀ˇ●)";
				break;
			case 15,16,17:
				day="苦逼的学习生涯开始啦！难受呀！இ௰இ";
				break;
			case 18:
				day="来人啦，抢饭啦！！！！(oﾟvﾟ)ノ";
				break;
			case 19,20,21:
				day="知道你很想资哥哥，再坚持一会，英俊潇洒，风流倜傥，一表人才，学富五车的资哥哥就要跟你视频啦！！！！o((>ω< ))o";
				break;
			case 22:
				day="视频时间，不准走神！！！！！！！( ﹁ ﹁ ) ~→";
				break;
			default:
				break;
		}
		var words="亲爱的方哲:\n有朝一日与你见面定要亲亲你的眼睛 \n 牵着你的手\n 走在你每天都要走过的小路\n猜想着你留在这条小路上是怎样的一个美丽背影\n" +
			"当然也要静静的依靠着\n一边听你说着那有趣的故事 \n一边吃着你喜欢的小吃\n我想 \n那时候的我 \n一定会忍不住偷偷的看着你的侧脸 \n然后白痴般的哈哈大笑起来 \n想想都觉得很美好呢！\n想对你说：\n 死生契阔，与子成说。\n 执子之手，与子偕老。"
			function substring() {
				document.getElementById("myword").innerText = words.substring(0, index++);
				if (index > words.length) {
					clearInterval(interval1);
				}
			}
		interval1=setInterval(substring,100);
	});
});

