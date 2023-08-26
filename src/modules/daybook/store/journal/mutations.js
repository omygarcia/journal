/*
export const myMutation = (state)=>{

}
*/

export const setEntries = (state,entries)=>{
    state.entries = [...state.entries,...entries];
    state.isLoading = false;
}

export const updateEntry= (state,entry)=>{
    //state.entries == un arreglo

    const idx = state.entries.map(e=>e.id).indexOf(entry.id);
    //console.log({idx});
    state.entries[idx] = entry;
    //state.entries = ..entr
}


export const addEntry= (/*state*/)=>{ //parametro entry actualizada
    
}