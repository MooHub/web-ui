function manageDevStatus(){devStatus=$("#switch-2").attr("data-status"),0==devStatus?($("#devOff").show(),$("#devOn").hide(),$("#switch-2").attr("checked",!1)):($("#devOff").hide(),$("#devOn").show(),$("#switch-2").attr("checked",!0))}function showDegreesUnit(){$("#tempCels").toggle(),$("#tempFahr").toggle()}function setDevStatus(){var t;t=0==devStatus?"ON":"OFF",$.ajax({url:window.location.href+"?pin="+t+"1",success:function(t,e){0==devStatus?$("#switch-2").attr("data-status",1):$("#switch-2").attr("data-status",0),manageDevStatus()}})}var devStatus;$(document).on("ready",function(){$("#tempFahr").hide(),$("#switch-1").on("click",showDegreesUnit),$("#switch-2").on("click",setDevStatus),manageDevStatus()});