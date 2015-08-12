Sitlist = new Mongo.Collection('sitlist', {connection: null});
var sit1 = 
{
    page: "sitlist", 
    name: "Anchor Spot",
    sublist: {
        sit: {
            author: "Coco", 
            src: "CocoAnchorSpot.aac"
        }, 
        sit: {
            author: "JG", 
            src: "JGAnchorspot.aac"
        }
    }
}

var sit2 = 
{
    page: "sitlist", 
    name: "Anchor Spot",
    src: "2"
}

var sit3 = 
{
    page: "sitlist", 
    name: "Anchor Words",
    src: "3"
}

var sit4 = 
{
    page: "sitlist", 
    name: "Counting Breath",
    src: "4"
}

var sit5 = 
{
    page: "sitlist", 
    name: "Mindful Listening",
    src: "5"
}

var sit6 = 
{
    page: "sitlist", 
    name: "Mindful Thinking: Past and Future Thoughts",
    src: "6"
}

var sit7 = 
{
    page: "sitlist", 
    name: "Body Scan",
    src: "7"
}

var sit8 = 
{
    page: "sitlist", 
    name: "Heartfulness",
    src: ""
}

var sit9 = 
{
    page: "sitlist", 
    name: "Mindful Emotions: Name it to Tame it",
    src: ""
}

var sit10 = 
{
    page: "sitlist", 
    name: "Gratitude",
    src: ""
}

Sitlist.insert(sit1)
Sitlist.insert(sit2)
Sitlist.insert(sit3)
Sitlist.insert(sit4)
Sitlist.insert(sit5)
Sitlist.insert(sit6)
Sitlist.insert(sit7)
Sitlist.insert(sit8)
Sitlist.insert(sit9)
Sitlist.insert(sit10)