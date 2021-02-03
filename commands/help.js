const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('liste des commandes de Axis Bot !')
            .setDescription(`Page 1
            +say (text)
            +question (question)
            +poll (text)
            +pub (indisponible)
            +love (indisponible)
            +combat (indisponible)
            Pour les commands Modérateur: +help2
            `)
            .setColor('RANDOM'))
    },
    name: 'help'
}