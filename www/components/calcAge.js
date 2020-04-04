function getAge(){

var year = document.getElementById("year").value;
var month = document.getElementById("month").value;
var date = document.getElementById("day").value;

// あなたの誕生日
const yourBirthDay = {
  year: year,
  month: month,
  date: date
};

  if (year != 0 && month !=0 && date !=0)
  {
    // Dateインスタンスに変換
    const birthDate = new Date(yourBirthDay.year, yourBirthDay.month - 1, yourBirthDay.date);

    // 文字列に分解
    const y2 = birthDate.getFullYear().toString().padStart(4, '0');
    const m2 = (birthDate.getMonth() + 1).toString().padStart(2, '0');
    const d2 = birthDate.getDate().toString().padStart(2, '0');

    // 今日の日付
    const today = new Date();
    const y1 = today.getFullYear().toString().padStart(4, '0');
    const m1 = (today.getMonth() + 1).toString().padStart(2, '0');
    const d1 = today.getDate().toString().padStart(2, '0');

    // 引き算
    const age = Math.floor((Number(y1 + m1 + d1) - Number(y2 + m2 + d2)) / 10000);

    // 星座出力
    var seiza;
    if((month==3&&date>=21)||(month==4&&date<=19)){seiza="牡羊座";}
    else if((month==4&&date>=20)||(month==5&&date<=20)){seiza="牡牛座";}
    else if((month==5&&date>=21)||(month==6&&date<=21)){seiza="双子座";}
    else if((month==6&&date>=22)||(month==7&&date<=22)){seiza="蟹座";}
    else if((month==7&&date>=23)||(month==8&&date<=22)){seiza="獅子座";}
    else if((month==8&&date>=23)||(month==9&&date<=22)){seiza="乙女座";}
    else if((month==9&&date>=23)||(month==10&&date<=23)){seiza="天秤座";}
    else if((month==10&&date>=24)||(month==11&&date<=22)){seiza="蠍座";}
    else if((month==11&&date>=23)||(month==12&&date<=21)){seiza="射手座";}
    else if((month==12&&date>=22)||(month==1&&date<=20)){seiza="山羊座";}
    else if((month==1&&date>=21)||(month==2&&date<=18)){seiza="水瓶座";}
    else if((month==2&&date>=19)||(month==3&&date<=20)){seiza="魚座";}

    var target = document.getElementById("age");

    target.innerHTML = "年齢:" + age + ", 星座:" + seiza;
  }
}