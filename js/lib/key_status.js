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
    },
{
    "keys"          : "down",
"on_keydown"      : function() {
    keydown["down"] = true;
},
"on_keyup" : function(e) {
    keydown["down"] = false;
},
    "prevent_default" : true,
    "prevent_repeat" : true
    },
{
    "keys"          : "up",
"on_keydown"      : function() {
    keydown["up"] = true;
},
"on_keyup" : function(e) {
    keydown["up"] = false;
},
    "prevent_default" : true,
    "prevent_repeat" : true
    }
];
keypress.register_many(my_combos);

});
