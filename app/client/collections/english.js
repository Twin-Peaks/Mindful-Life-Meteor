English = new Mongo.Collection('english', {connection: null});

var checkin1 = 
{
    page: "checkin1", 
    header: 'Sitting in a chair or a comfortable place, take a moment to feel...', 
    lines: {
        line1: "Contact with the floor", 
        line2: "Your spine in a line", 
        line3: "Your hands in your lap", 
        line4: "Your heart to the sky"
    }     
}

var checkin2 = 
{
    page: "checkin2", 
    header: 'Check into your body', 
    lines: {
        line1: "Are you feeling tight or relaxed?", 
        line2: "Any tingling or pain?", 
        line3: "Feeling comfortable or uneasy?",
        line4: "Any tightness in your face or shoulders?", 
        line5: "Close your eyes and monitor how you are feeling physically and breathe"
    }  
}


var checkin3 = 
{
    page: "checkin3", 
    header: 'Check into your thoughts', 
    lines: {
        line1: "Do you notice many thoughts?", 
        line2: "Do you feel space and calmness?", 
        line3: "Are they past, present or future?", 
        line4: "Close your eyes and place your attention on your breath"
    }
}

var checkin4 = 
{
    page: "checkin4", 
    header: 'Check in to how you are feeling emotionally', 
    lines: {
        line1: "Do you feel joy, anger or content?", 
        line2: "Feeling anxious, nervous or excited?", 
        line3: "Bored or enthusiastic?", 
        line4: "Grateful or worried?",
        line5: 'Close your eyes, name the emotion (for example "happy, happy, happy")'
    }  
}

var definition = 
{
    page: "definition", 
    content: "Mindfulness is paying attention on purpose to the present moment without judgment. Through focused and specific awareness, mindfulness builds skills to navigate ALL experiences by strategically living in the here and now."
}

var benefits = 
{
    page: "benefits", 
    content: "Mindfulness is a secular, science-based approach that takes advantage of our brain's plasticity (ability to change throughout life). Mindfulness is proven to strengthen physiological responses to stress, negative emotions, anxiety and depression, and improve happiness, openness and self-awareness. Mindfulness enables us to be present, moment to moment, in our increasingly distracted lives. Mindfulness improves social relationships with people and family and can even strengthen the immune system. It cultivates an openness to one's life experience and a leads to a happier and more compassionate life."
}

var all_sits = {
    page: 'all_sits', 
    list: ["Anchor Spot", "Counting Breath", "Heartfulness", "Body Scan"]
}


var sit_list1 = {
    page: "Anchor Spot", 
    sits: [ {author: "Coco", src: "/audio/CocoAnchorSpot.aac"}, {author: "JG", src: "/audio/JGAnchorspot.aac"}]
}

var sit_list2 = {
    page: "Counting Breath", 
    sits: [ {author: "Coco", src: "audio/CocoCountingBreath.aac"}, {author: "Jason", src: "audio/JGSpanishCountingBreath.aac"}]
}

var sit_list3 = {
    page: "Heartfulness", 
    sits: [ {author: "Coco", src: "audio/CocoHeartfulness.aac"}, {author: "Jason", src: "audio/JGSpanishHeartfulness.aac"}]
}

var sit_list4 = {
    page: "Body Scan", 
    sits: [ {author: "Coco", src: "audio/CocoMindfulBodyScan.aac"}, {author: "Jason", src: "audio/JGMindfulBodyScan.aac"}]
}
// var sit_list3 = {
//     page: "Heartfulness", 
//     sits: [ {author: "Coco", src: "audio/CocoHeartfulness.aac"}, {author: "Jason", src: "audio/JGSpanishHeartfulness.aac"}]
// }
// var sit_list3 = {
//     page: "Heartfulness", 
//     sits: [ {author: "Coco", src: "audio/CocoHeartfulness.aac"}, {author: "Jason", src: "audio/JGSpanishHeartfulness.aac"}]
// }
// var sit_list3 = {
//     page: "Heartfulness", 
//     sits: [ {author: "Coco", src: "audio/CocoHeartfulness.aac"}, {author: "Jason", src: "audio/JGSpanishHeartfulness.aac"}]
// }
// var sit_list3 = {
//     page: "Heartfulness", 
//     sits: [ {author: "Coco", src: "audio/CocoHeartfulness.aac"}, {author: "Jason", src: "audio/JGSpanishHeartfulness.aac"}]
// }

English.insert(checkin1)
English.insert(checkin2)
English.insert(checkin3)
English.insert(checkin4)
English.insert(definition)
English.insert(benefits)

/* Sits */
English.insert(all_sits);
English.insert(sit_list1);
English.insert(sit_list2);
English.insert(sit_list3);
English.insert(sit_list4);