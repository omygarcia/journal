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


export const addEntry= (state,entry)=>{ //parametro entry actualizada
    //state -> entries ->la nueva entrada debe ser la primera
    state.entries.unshift(entry);
}


export const deleteEntry = (state,id)=>{
    // remover del State.entries => la entrada
    state.entries = state.entries.filter(entry=>entry.id!==id);
}