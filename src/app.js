var devStatus;

$(document).on('ready',function(){
	$('#tempFahr').hide();
	$('#switch-1').on('click',showDegreesUnit);
	$('#switch-2').on('click',setDevStatus);

	manageDevStatus();
});

function manageDevStatus(){
	devStatus = $('#switch-2').attr('data-status');
	if(devStatus == 0){
		$('#devOff').show();
		$('#devOn').hide();
		$('#switch-2').attr('checked',false);
	}else{
		$('#devOff').hide();
		$('#devOn').show();
		$('#switch-2').attr('checked',true);
	}
}

function showDegreesUnit(){
	$('#tempCels').toggle();
	$('#tempFahr').toggle();
}

function setDevStatus(){
	var string;
	if(devStatus == 0){
		string = 'ON';
	}else{
		string = 'OFF';
	}
	$.ajax({
		url: window.location.href + '?pin=' + string + '1' ,
		success: function(r,s){
			if(devStatus == 0){
				devStatus == 1;
				$('#switch-2').attr('data-status',1);
			}else{
				devStatus == 0;
				$('#switch-2').attr('data-status',0);
			}
			manageDevStatus();
		}
	})
}