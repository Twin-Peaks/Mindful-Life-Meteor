Spanish = new Mongo.Collection('spanish', {connection: null});
var checkin1 = 
{
    page: "checkin1", 
    header: 'Sentado en una silla õ en un lugar', 
    lines: {
        line1: "contacto con el piso", 
        line2: "su espina en una linea", 
        line3: "sus manos relajados", 
        line4: "su corazon abierto"
    }     
}

var checkin2 = 
{
    page: "checkin2", 
    header: 'Ponga atencion en su cuerpo', 
    lines: {
        line1: "¿Te sientes relajado o rijido?", 
        line2: "¿Tienes sentido de dolor o relajado", 
        line3: "¿Te sientes comodo o incomodo?", 
        line4: "Cualquier sentidos de tenso or relajado en la cara", 
        line5: "Cierre tus hojos y observa como te sientes físicamente y respira"
    }  
}


var checkin3 = 
{
    page: "checkin3", 
    header: 'Ponga atencion en tus pensamientos', 
    lines: {
        line1: "¿Te das cuenta muchos pensamientos?", 
        line2: "¿Se siente el espacio y la tranquilidad en los pensamientos?", 
        line3: "¿Son pensamientos del pasado, presente o el futuro?", 
        line4: "Cierre tus hojos y ponga atencion en su respiracion"
    }
}

var checkin4 = 
{
    page: "checkin4", 
    header: 'Ponga atencion en como te sientes emocionalmente', 
    lines: {
        line1: "¿Te sientes feliz, enojodo o contento?", 
        line2: "¿La sensacion de anxiedad, nervios, o excitado", 
        line3: "¿Aburrido o entusiasmado?", 
        line4: "¿Agradecido o preocupado?",
        line5: 'Cierre los ojos, ponga nombre a su emocion (por ejemplo "feliz, feliz, feliz") y respira'
    }  
}

var definition = 
{
    page: "definition", 
    content: "La atención plena es prestar atención a propósito para el momento presente y sin juicio. A través de la conciencia enfocada y específica, la atención plena construye habilidades para navegar por todas las experiencias estratégicamente vivir en el aquí y ahora."
}

var benefits = 
{
    page: "benefits", 
    content: "La atención plena es un enfoque secular, basada en la ciencia que se aprovecha de la plasticidad de nuestro cerebro (capacidad de cambiar a lo largo de la vida). La atención plena es probado para fortalecer las respuestas fisiológicas al estrés, las emociones negativas, la ansiedad y la depresión, y mejorar la felicidad, la apertura y la conciencia de sí mismo. La atención plena nos permite estar presentes, momento a momento, en nuestras vidas cada vez más distraídos. Mindfulness mejora las relaciones sociales con las personas y la familia e incluso puede fortalecer el sistema inmunológico. Cultiva una apertura a la propia experiencia de vida y una conduce a una vida más feliz y más compasivo."
}

Spanish.insert(checkin1)
Spanish.insert(checkin2)
Spanish.insert(checkin3)
Spanish.insert(checkin4)
Spanish.insert(definition)
Spanish.insert(benefits)