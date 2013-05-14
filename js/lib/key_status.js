$(function() {
    window.keydown = {};

    my_combos = [
{
    "keys"          : "left",
"on_keydown"    : function() {
    keydown["left"] = true;
},
"on_keyup" : function(e) {
    keydown["left"] = false;
},
"prevent_default" : true,
"prevent_repeat" : false
},
{
    "keys"          : "right",
"on_keydown"      : function() {
    keydown["right"] = true;
},
"on_keyup" : function(e) {
    keydown["right"] = false;
},
    "prevent_default" : true,
    "prevent_repeat" : false
    }
];
keypress.register_many(my_combos);

});
