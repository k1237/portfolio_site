
export const state = () => ({
    flag:false
})

export const mutations ={
    switch(state){
        state.flag = !state.flag;
    },

    init(state){
        state.flag = false;
    }
}