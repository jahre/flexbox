$(document).ready(function () {
   var rightPanel = $('#right_aside');
   var comBlock = $('#com_block');
   var arrow = $('#arrow');
   var participants = $('#participants');
   arrow.click(function () {
      rightPanel.toggleClass('hide');
      comBlock.toggleClass('hide');
      participants.toggleClass('hide');
      arrow.toggleClass('open');
   });
});