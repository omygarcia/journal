/*
export const myAction = async({commit})=>{

}
*/

import journalApi from "@/api/journalApi"

export const loadEntries = async({commit})=>{
    const {data} = await journalApi.get('/entries.json');
    //console.log(data)

    if(!data)
    {
        commit('setEntries',[]);
        return;
    }

    const entries = [];
    for(let id of Object.keys(data))
    {
        entries.push({
            id,
            ...data[id]
        });
    }

    //console.log(entries)
    commit('setEntries',entries);
}

export const updateEntry = async({commit},entry)=>{ //entry debe ser un parameto
    //extraer solo lo que necesitan
    console.log(entry);
    const {date, text, picture} = entry;
    //await journalapi.put .json datatoSave
    const dataToSave = {date, text, picture};
    const resp = await journalApi.put(`/entries/${entry.id}.json`,dataToSave);

    console.log(resp);
    //commit una mutacion
    commit('updateEntry',{...entry});
}

export const createEntry = async({commit}, entry)=>{
    //dataToSave
    //console.log('createEntry',entry);

    //conts {data} = await journalApi.post(PATH.json,dataToSave)
    const {data} = await journalApi.post(`/entries.json`,entry);

    //data = {"name": "-Ncwlcgn5-UWD08mAfdZ""}
    entry.id = data.name;

    //commit -> addEntry
    commit("addEntry",{...entry});

    return entry.id;
}

export const deleteEntry = async({commit},id)=>{
    // await JournalApi.delete
    await journalApi.delete(`/entries/${id}.json`)
    //commit deleteEntry
    commit('deleteEntry',id);

    return id;
}