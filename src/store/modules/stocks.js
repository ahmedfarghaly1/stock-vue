import stocks from '../../data/stocks';

const state = {
    stocks:[]
};

const mutations = {
    'SET_STOCKS' (state, stocks){
        state.stocks = stocks;
    },
    'RND_STOCKS' (state){
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - .5 ));
        });
    }
};

const actions = {
    buyStock: ({commit}, order) => {
        commit('BUY_STOCK', order);
    },
    InitStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    RandomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
}

const getters = {
    stocks: state =>{
        return state.stocks;
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
};

