English = new Mongo.Collection('english', {connection: null});

var about = 
{
    page: "about", 
    content: "Mindful Life Project began teaching mindfulness in Richmond, CA elementary schools in October of 2012 working with 150 students. Now, Mindful Life Project works with thousands of students and teachers in underserved schools. Mindful Life Project's mission is to empower children through mindfulness, yoga, expressive arts and performing arts to gain self-awareness, confidence, self-regulation and resilience, leading to lifelong success."
}

var benefits1 = {
    page: "benefits1",
    content: "Mindfulness is a secular, science-based approach that takes advantage of our brain's plasticity (ability to change throughout life). Mindfulness is proven to strengthen physiological responses to stress, negative emotions, anxiety and depression, and improve happiness, openness and self-awareness."
}

var benefits2 = {
    page: "benefits2",
    content: "Mindfulness enables us to be present, moment to moment, in our increasingly distracted lives. Mindfulness improves social relationships with people and family and can even strengthen the immune system. It cultivates an openness to one's life experience and a leads to a happier and more compassionate life. "
}

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
    list: ["Anchor Spot", "Anchor Words", "Body Scan", "Counting Breath", "Heartfulness", "Mindful Breathing", "Mindful Emotions", "Mindful Gratitude", "Mindful Listening", "Mindful Thinking"]
}

var sit_list1 = {
    page: "Anchor Spot", 
    sits: [ {src_id: "219900201"}, {src_id: "219900323"} ,{src_id: "219900656"}, {src_id: "219900907"}, {src_id: "219901323"}, {src_id: "219901481"}]
}

var sit_list2 = {
    page: "Anchor Words", 
    sits: [ {src_id: "219900198"}, {src_id: "219900349"}, {src_id: "219900890"}, {src_id: "219901468"}]
}



var sit_list3 = {
    page: "Body Scan", 
    sits: [ {src_id: "219900193"}, {src_id: "219900353"}, {src_id: "219900920"}, {src_id: "219901191"}, {src_id: "219901326"}]
}

var sit_list4 = {
    page: "Counting Breath", 
    sits: [ {src_id: "219900255"}, {src_id: "219900491"}, {src_id: "219900639"}, {src_id: "219901532"}]
}


var sit_list5 = {
    page: "Heartfulness", 
    sits: [ {src_id: "219900189"}, {src_id: "219900528"}, {src_id: "219900665"}, {src_id: "219901424"}]
}


var sit_list6 = {
    page: "Mindful Breathing", 
    sits: [{src_id: "219900239"}, {src_id: "219900486"}, {src_id: "219901027"}, {src_id: "219901449"} ]
}


var sit_list7 = {
    page: "Mindful Emotions", 
    sits: [{src_id: "219900242"}, {src_id: "219900763"}]
}


var sit_list8 = {
    page: "Mindful Gratitude", 
    sits: [{src_id: "219900252"}, {src_id: "219900785"}, {src_id: "219901024"}]
}


var sit_list9 = {
    page: "Mindful Listening", 
    sits: [{src_id: "219900345"}, {src_id: "219900475"}, {src_id: "219900776"}, {src_id: "219901012"}, {src_id: "219901245"}, {src_id: "219901453"}]
}



var sit_list10 = {
    page: "Mindful Thinking", 
    sits: [{src_id: "219900315"}, {src_id: "219900652"}, {src_id: "219900791"}]
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


English.insert(about)
English.insert(checkin1)
English.insert(checkin2)
English.insert(checkin3)
English.insert(checkin4)
English.insert(definition)
English.insert(benefits1)
English.insert(benefits2)

/* Sits */
English.insert(all_sits);
English.insert(sit_list1);
English.insert(sit_list2);
English.insert(sit_list3);
English.insert(sit_list4);
English.insert(sit_list5);
English.insert(sit_list6);
English.insert(sit_list7);
English.insert(sit_list8);
English.insert(sit_list9);
English.insert(sit_list10);