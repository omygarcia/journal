/*
export const myAction = async({commit})=>{

}
*/

import journalApi from "@/api/journalApi"

export const loadEntries = async({commit})=>{
    const {data} = await journalApi.get('/entries.json');
    //console.log(data)
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

export const createEntry = async(/*{commit}*/)=>{

}