const ADD_MISSIONS = 'space-hub/missions/ADD_MISSION';
const JOIN_MISSION = 'space-hub/missions/JOIN_MISSION';
const CANCEL_MISSION = 'space-hub/missions/CANCEL_MISSION';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSIONS:
      return action.payload;
    case JOIN_MISSION: {
      return state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, completed: true };
      });
    }
    case CANCEL_MISSION: {
      return state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, completed: false };
      });
    }
    default:
      return state;
  }
};

export default reducer;

const addMissions = (missionsItems) => ({
  type: ADD_MISSIONS,
  payload: missionsItems,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});
export const cancelMission = (id) => ({
  type: CANCEL_MISSION,
  id,
});

export { addMissions };

const getMissions = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const missionsItems = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    completed: false,
  }));
  dispatch(addMissions(missionsItems));
};

export { getMissions };
