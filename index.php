<html>
<head>
<script src="jquery.js"></script>
<script src="jquery.history.js"></script>
<style>
.normal
{
	width:30px;
	height: 40px;
	background-color:red;
	-webkit-transition: all 2s; 
}
.clicked
{
	width:300px;
	height: 400px;
	background-color:yellow;
}
</style>
<script>

	// Bind to StateChange Event
	History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
		var State = History.getState(); // Note: We are using History.getState() instead of event.state
		History.log(State.data, State.title, State.url);
		rootUrl = History.getRootUrl();
		//alert(rootUrl);
		subDir="tathva13_main"
		relativeUrl = State.url.replace(rootUrl + subDir + '/', '');
		//alert(relativeUrl);
		//alert(rootUrl+" "+relativeUrl);
		if(relativeUrl=="")
		{
			$("#box").removeClass("clicked");
		}
		else if(relativeUrl=="SASI")
		{
			$("#box").addClass("clicked");
		}
	});
$(function(){
	// Prepare
	$(window).trigger("statechange");
	$("#box").click(function(){
	//$("#box").toggleClass("clicked");
	//alert($("#box").attr("class"));
	if($("#box").hasClass("clicked"))
	History.pushState({state:1,rand:Math.random()}, "State 1", "http://localhost/tathva13_main/"); // logs {state:1,rand:"some random value"}, "State 1", "?state=1"
	else
		History.pushState({state:1,rand:Math.random()}, "State 1", "http://localhost/tathva13_main/SASI");
});
	})
</script>
</head>
<body>
<div id ="box" class="normal"/>
</html>
