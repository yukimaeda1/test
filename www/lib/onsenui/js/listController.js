	myApp.controller('listDetailCtrl', function(){ 

      this.name = '初期名称';
      this.age = '0';
      // myNavigator.pushPageで送ったdataを受け取る 
      var data = myNavigator.topPage.data;
      // 正しく受け取ることができたら、値を取得
      if(data != undefined){
          this.name = data.name; 
          this.age = data.age; 
      }
		
	});