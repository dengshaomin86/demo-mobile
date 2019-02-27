class Language{

	constructor(){
		this.from = 'auto';
		this.to = 'en';
		this.webApi = 'http://120.78.91.42:3002/echo';
		this.list = {};
		this.directory = '';
		this.languagePackLoading = false;
	}



	getAjax(url,callbase){
		var xmlhttp;

		if (window.XMLHttpRequest){
		    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		    xmlhttp=new XMLHttpRequest();
		}else{
		    // IE6, IE5 浏览器执行代码
		    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function(){
		    if (xmlhttp.readyState==4 && xmlhttp.status==200)
		    {
		    	callbase(xmlhttp.responseText);
		    }
		}
		xmlhttp.open("GET",url,true);
		xmlhttp.send();
	}

	formattingParameter(val,arr){
		var html = val;
		if(html){
			for(var k in arr){
				if(html.indexOf("${"+k+"}") != -1){
					html = html.replace("${"+k+"}",arr[k]);
				}
			}
		}

        return html;
	}
}

var language = new Language();
var automatic = true;

export default {

	initData(data){
		if(data.from)language.from = data.from;
		if(data.to)language.to = data.to;
		if(data.directory)language.directory = data.directory;
		if(data.webApi)language.webApi = data.webApi;
		if(data.list)language.list = data.list;

		if(typeof(data.automatic) != 'undefined' )automatic = data.automatic;

		if(data.directory && language.directory != ''){
			language.getAjax(language.directory+language.to+'.json', (data)=>{
				language.languagePackLoading = true;
				try {
					let _list = JSON.parse(data);
					language.list =  _list;

				}catch(err){

				}
			});
		}else{
			language.languagePackLoading = true;
		}
	},

	install:function (Vue){

		//Vue.prototype.$JJ = Vue.prototype.$JJ || {};
		Vue.prototype.$JJ_data = {};


		Vue.prototype.parallelEcho = function (val){
			return new Promise((resolve, reject) => {
				var _setInterval = setInterval(()=>{
					if(language.languagePackLoading){
						clearInterval(_setInterval);
						resolve(language.list[val] || val);
					}
				},100);


			});
		}



		Vue.prototype.echo = function (val,data){

			if(!language.languagePackLoading){
				setTimeout(()=>{
					this.echo(val);
					this.$forceUpdate();
				},100);
				return val;
			}



			if(!language.list[val]){
				if(automatic && !Vue.prototype.$JJ_data[val]){
					language.getAjax(language.webApi+'?q='+val+'&to='+language.to+'&from='+language.from, (data)=>{
						try {
							var _temporary = JSON.parse(data);
							Vue.prototype.$JJ_data[val] = _temporary.trans_result[0].dst
							this.$forceUpdate();
						}catch(err){
							console.log('翻译接口出错',err);
						}
					});

				}
			}



			return language.formattingParameter(language.list[val]|| (Vue.prototype.$JJ_data[val] || val),data );

		}

	},

}
