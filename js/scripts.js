//OLD CODE
// $(document).ready(function() {
//   $("h1").click(function() {
//     alert("This is a header.");
//   });
//
//   $("p").click(function() {
//     alert("This is a paragraph.");
//   });
//
//   $("img").click(function() {
//     alert("This is an image.");
//   });
// });

// NEW REFACTORED CODE USING FOR LOOP
$(document).ready(function() {

  var tags = ["h1", "p", "img"];

  tags.forEach(function(tag) {
    alert("This is a " + tag + "!");
  });
});
