
class TagGenerator {
    
    static createTag(userId, name) {
        const lastIndex = name.length - 1;
        const firstLetters = name.substr(0, 1).charCodeAt(0).toString() + name.substr(1, 1).charCodeAt(0) + name.substr(2, 1).charCodeAt(0);
        const lastLetters = name.substr(lastIndex, 1).charCodeAt(0).toString() + name.substr(lastIndex - 1, 1).charCodeAt(0) + name.substr(lastIndex - 2, 1).charCodeAt(0);

        return firstLetters + lastLetters + userId;
    }

}

module.exports = TagGenerator;