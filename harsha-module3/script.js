var names = ["yash" , "harsha" ,"jatin", "Yamen" , "Musunuru","Jackie","Jason" ]
for(var i=0;i<names.length; i++){
	if(names[i].charAt(0)=='j'||names[i].charAt(0)=='J'){
		byeSpeaker.sayBye(names[i])
	}
	else{
		helloSpeaker.sayHello(names[i]);
	}
}