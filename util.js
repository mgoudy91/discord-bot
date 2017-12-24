module.exports = {
    getEmoji(name, client){
        let emoji = client.emojis.find("name", name);
        return emoji;
    }
};