const requestSettings = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
}

export default {
    namespaced: true,
    state() {
        return {
            items: [
            ],
            stations: [{}],
            filteredStation: '',
        };

    },
    getters: {
        getAllTrainData: state => {
            return state.items;
        },
        getAllStations: state => {
            return state.stations;
        },
        getFilteredStationName: state => {
            return state.filteredStation;
        }

    },
    actions: {
        async fetchTrains(context, payload) {
            const response = await fetch(
                'https://rata.digitraffic.fi/api/v1/live-trains/station/' + payload + '?arrived_trains=0&arriving_trains=0&departed_trains=0&departing_trains=20&include_nonstopping=false', requestSettings
            );
            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(responseData.message || "Failed to fetch trains");
                throw error;
            }


            const trains = [];

            for (const index in responseData) {
                let temp = responseData[index].timeTableRows[0].scheduledTime.split(/\D+/);
                let date = new Date(Date.UTC(temp[0], --temp[1], temp[2], temp[3], temp[4], temp[5], temp[6]));

                let time = (date.getHours() < 10 ? "0" : "") + date.getHours() + ":" + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
                let dateString = date.toDateString();
                const train = {
                    trainNumber: responseData[index].trainNumber,
                    timetableType: responseData[index].timetableType,
                    trainCategory: responseData[index].trainCategory,
                    time: time,
                    date: dateString
                }

                trains.push(train);



            }

            context.commit('setTrains', trains);

        },
        async getAllStations(context) {

            const response = await fetch(
                'https://rata.digitraffic.fi/api/v1/metadata/stations', requestSettings
            );
            const responseData = await response.json();
            if (!response.ok) {
                const error = response.error;
                throw error;
            }
            context.commit('setAllStations', responseData)
        },
        async filterStation(context, payload) {

            context.commit('setFilteredStation', payload)
        }
    },
    mutations: {
        setTrains(state, payload) {
            state.items = payload;
        },
        setAllStations(state, payload) {
            state.stations = payload;
        },
        setFilteredStation(state, payload) {
            let filtered = state.stations.filter(station => station.stationShortCode === payload);

            state.filteredStation = filtered[0].stationName;
        }
    }
};