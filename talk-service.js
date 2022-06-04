import {setTalks, talks} from "./data/talk.js";

const getTalks = () => {
    return talks();
}

const createTalk = (data) => {
    const id = talks().reduce((a, t) => t.id >= a ? t.id + 1 : a , 0);
    const newTalk = { id, ...data };
    setTalks([...talks(), newTalk]);
    return newTalk;
}

const updateTalk = (id, data) => {
    console.log(data);
    const talkToUpdate = talks().find(t => t.id == id);
    if (!talkToUpdate) {
        throw new Error(`Talk with ID ${id} not found`);
    }
    const updatedTalk = { ...talkToUpdate, ...data };
    setTalks(talks().map(t => t.id == id ? updatedTalk : t));
    return updatedTalk;
}

const deleteTalk = (id) => {
    const talkToDelete = talks().find(t => t.id == id);
    if (!talkToDelete) {
        throw new Error(`Talk with ID ${id} not found`);
    }
    setTalks(talks().filter(t => t.id != id));
    return talkToDelete;
}

export { getTalks, createTalk, updateTalk, deleteTalk };
